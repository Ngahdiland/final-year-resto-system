"use client"
import React, { useState } from 'react';
import { products } from '../../public/assets/assets';
import Image, { StaticImageData } from 'next/image';

type ProductType = {
  _id: string;
  name: string;
  price: number;
  image: (string | StaticImageData)[];
  // ...other product fields as needed
};

interface ProductProps {
  onAddToCart: (product: ProductType) => void;
}

const Product: React.FC<ProductProps> = ({ onAddToCart }) => {
  const [activeTab, setActiveTab] = useState('popular');

  // Sort products for recent (by date descending) and popular (bestseller)
  const popularProducts = products.filter(p => p.bestseller);
  const recentProducts = [...products].sort((a, b) => b.date - a.date).slice(0, 10);

  const displayedProducts = activeTab === 'popular' ? popularProducts : recentProducts;

  return (
    <>
      <nav className="flex gap-2 mt-1 w-full border-b-2 pb-0 border-[#000]">
        <button
          className={`font-bold pr-2 border-r-2 border-[#000] ${activeTab === 'popular' ? 'text-[#f71a1a]' : ''}`}
          onClick={() => setActiveTab('popular')}
        >
          Popular
        </button>
        <button
          className={`font-bold ${activeTab === 'recent' ? 'text-[#f71a1a]' : ''}`}
          onClick={() => setActiveTab('recent')}
        >
          Recent
        </button>
      </nav>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {displayedProducts.map(product => (
          <div key={product._id} className="bg-white rounded-lg shadow-lg shadow-gray-400 p-4 flex flex-col items-center">
            <Image src={product.image[0]} alt={product.name} className="h-32 w-32 object-contain mb-2" />
            <div className="font-semibold text-lg text-gray-800 mb-1">{product.name}</div>
            <div className="text-gray-500 text-sm mb-2">${product.price}</div>
            <button
              className="mt-2 px-3 py-1 bg-[#f72121] text-white rounded-full text-lg font-bold hover:bg-[#d81b1b] transition flex items-center"
              onClick={() => onAddToCart(product)}
              aria-label={`Add ${product.name} to cart`}
            >
              +
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Product;
