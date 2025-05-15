"use client"
import React, { useState } from "react";
import Product from "@/components/prudoct/Product";
import { StaticImageData } from 'next/image';

const Home = () => {
  const categories = [
    "All", "Donuts", "Burgers", "Ice", "poteto", "Pizza", "Fries", "Cake", "Chicken", "HotDog"
  ];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [cart, setCart] = useState<{ product: { _id: string; name: string; price: number; image: (string | StaticImageData)[] }, quantity: number }[]>([]);

  // Add to cart handler
  const handleAddToCart = (product: { _id: string; name: string; price: number; image: (string | StaticImageData)[] }) => {
    setCart(prevCart => {
      const existing = prevCart.find(item => item.product._id === product._id);
      if (existing) {
        return prevCart.map(item =>
          item.product._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { product, quantity: 1 }];
      }
    });
  };

  // Calculate totals
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalCost = cart.reduce((sum, item) => sum + item.quantity * item.product.price, 0);

  return (
    <div className="w-full mt-[65px] rounded-tl-xl flex h-max gap-4 bg-gray-100">
      {/* Main Content - 4/5 */}
      <div className="flex flex-col w-4/5 bg-gray-100">
        <div className="flex flex-col justify-between w-[95%] m-auto">
          <h3 className="text-4xl bold pt-2 pb-3 font-bold">Explore Categories</h3>
          <div className="relative mb-4">
            <button
              className="bg-[#f72121] text-white px-4 py-2 rounded-lg font-semibold shadow hover:bg-[#d81b1b] transition"
              onClick={() => setDropdownOpen((prev) => !prev)}
            >
              {selectedCategory}
            </button>
            {dropdownOpen && (
              <div className="absolute z-10 left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg p-2">
                <ul className="divide-y divide-gray-100">
                  {categories.map((cat) => (
                    <li key={cat}>
                      <div
                        className={`w-full px-4 py-2 cursor-pointer text-left text-gray-800 hover:bg-[#f7212150] rounded transition ${selectedCategory === cat ? 'bg-[#f7212150] font-bold' : ''}`}
                        onClick={() => {
                          setSelectedCategory(cat);
                          setDropdownOpen(false);
                        }}
                      >
                        {cat}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div className="">
            <Product onAddToCart={handleAddToCart} />
          </div>
        </div>
      </div>
      {/* Invoice Section - 1/5 */}
      <div className="w-1/5 invoice pr-2 flex sticky top-18 max-h-[550px] overflow-hidden">
        <div className=" bg-white rounded-xl shadow-lg p-4 flex flex-col items-center mt-1 shadow-gray-500 w-full">
          <h2 className="text-2xl font-bold mb-4">Invoice</h2>
          <div className="w-full flex flex-col gap-2 mb-4">
            {cart.length === 0 && <div className="text-gray-400 text-center">No items in cart</div>}
            {cart.map(item => (
              <div key={item.product._id} className="flex items-center justify-between w-full border-b pb-2 last:border-b-0 gap-2">
                <img src={typeof item.product.image[0] === 'string' ? item.product.image[0] as string : (item.product.image[0] as StaticImageData).src} alt={item.product.name} className="h-10 w-10 object-contain rounded" />
                <span className="font-semibold">{item.quantity}x</span>
                <span className="font-bold text-right">${(item.product.price * item.quantity).toFixed(2)}</span>
                <div className="relative group">
                  <button className="ml-2 px-2 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 text-xs focus:outline-none">
                    &#8942;
                  </button>
                  <div className="absolute right-0 top-6 z-20 hidden group-focus-within:block group-hover:block bg-white border border-gray-200 rounded shadow-lg min-w-[100px]">
                    <button
                      className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                      onClick={() => {
                        const newAmount = prompt('Enter new quantity:', item.quantity.toString());
                        const qty = Number(newAmount);
                        if (!isNaN(qty) && qty > 0) {
                          setCart(cart.map(i => i.product._id === item.product._id ? { ...i, quantity: qty } : i));
                        }
                      }}
                    >
                      Edit Quantity
                    </button>
                    <button
                      className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                      onClick={() => setCart(cart.filter(i => i.product._id !== item.product._id))}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full flex justify-between mb-2 text-sm">
            <span className="text-gray-700 ">Total Items:</span>
            <span className="font-semibold">{totalItems}</span>
          </div>
          <div className="w-full flex justify-between mb-4 text-sm ">
            <span className="text-gray-700">Total Cost:</span>
            <span className="font-semibold">${totalCost.toFixed(2)}</span>
          </div>
          <button className="w-full bg-[#f72121] text-white font-bold text-sm py-2 rounded-lg hover:bg-[#d81b1b] transition">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
