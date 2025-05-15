import Product from "@/components/prudoct/Product";
import React from "react";

const Home = () => {
  return (
    <div className="w-full mt-[65px] rounded-tl-xl flex h-max gap-4 bg-gray-100">
      {/* Main Content - 4/5 */}
      <div className="flex flex-col m-auto">
        <div className="flex flex-col justify-between w-[95%] m-auto">
          <h3 className="text-4xl bold pt-2 pb-3 font-bold">
            Explore Categories
          </h3>
          <div className="flex flex-wrap ">
            <div className="">
              <div className="h-[40px] w-[90%] m-[5%] shadow shadow-gray-950 bg-[#fff] cursor-pointer flex flex-col rounded-xl justify-center items-center">
                <h3 className="text-xl p-6">All</h3>
              </div>
            </div>
            <div className="">
              <div className="h-[40px] w-[90%] m-[5%] shadow shadow-gray-950 bg-[#fff] cursor-pointer flex flex-col rounded-xl justify-center items-center">
                <h3 className="text-xl p-6">Donuts</h3>
              </div>
            </div>
            <div className="">
              <div className="h-[40px] w-[90%] m-[5%] shadow shadow-gray-950 bg-[#fff] cursor-pointer flex flex-col rounded-xl justify-center items-center">
                <h3 className="text-xl p-6">Burgers</h3>
              </div>
            </div>
            <div className="">
              <div className="h-[40px] w-[90%] m-[5%] shadow shadow-gray-950 bg-[#fff] cursor-pointer flex flex-col rounded-xl justify-center items-center">
                <h3 className="text-xl p-6">Ice</h3>
              </div>
            </div>
            <div className="">
              <div className="h-[40px] w-[90%] m-[5%] shadow shadow-gray-950 bg-[#fff] cursor-pointer flex flex-col rounded-xl justify-center items-center">
                <h3 className="text-xl p-6">poteto</h3>
              </div>
            </div>
            <div className="">
              <div className="h-[40px] w-[90%] m-[5%] shadow shadow-gray-950 bg-[#fff] cursor-pointer flex flex-col rounded-xl justify-center items-center">
                <h3 className="text-xl p-6">Pizza</h3>
              </div>
            </div>
            <div className="">
              <div className="h-[40px] w-[90%] m-[5%] shadow shadow-gray-950 bg-[#fff] cursor-pointer flex flex-col rounded-xl justify-center items-center">
                <h3 className="text-xl p-6">Fries</h3>
              </div>
            </div>
            <div className="">
              <div className="h-[40px] w-[90%] m-[5%] shadow shadow-gray-950 bg-[#fff] cursor-pointer flex flex-col rounded-xl justify-center items-center">
                <h3 className="text-xl p-6">Cake</h3>
              </div>
            </div>
            <div className="">
              <div className="h-[40px] w-[90%] m-[5%] shadow shadow-gray-950 bg-[#fff] cursor-pointer flex flex-col rounded-xl justify-center items-center">
                <h3 className="text-xl p-6">Chicken</h3>
              </div>
            </div>
            <div className="">
              <div className="h-[40px] w-[90%] m-[5%] shadow shadow-gray-950 bg-[#fff] cursor-pointer flex flex-col rounded-xl justify-center items-center">
                <h3 className="text-xl p-6 flex">HotDog</h3>
              </div>
            </div>
          </div>
          <div className="">
            <Product />
          </div>
        </div>
      </div>
      {/* Invoice Section - 1/5 */}
      <div className="w-1/5 invoice p-3 flex">
        <div className=" bg-white rounded-xl shadow-lg p-8 flex flex-col items-center mt-1">
          <h2 className="text-2xl font-bold mb-4">Invoice</h2>
          {/* Cart summary - replace with real cart state if available */}
          <div className="w-full flex justify-between mb-2">
            <span className="text-gray-700">Total Items:</span>
            <span className="font-semibold">0</span>{" "}
            {/* Replace 0 with cart items count */}
          </div>
          <div className="w-full flex justify-between mb-4">
            <span className="text-gray-700">Total Cost:</span>
            <span className="font-semibold">$0.00</span>{" "}
            {/* Replace 0.00 with cart total */}
          </div>
          <button className="w-full bg-[#f72121] text-white font-bold py-2 rounded-lg hover:bg-[#d81b1b] transition">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
