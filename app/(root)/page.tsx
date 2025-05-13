import Product from "@/components/prudoct/Product";
import React from "react";

const Home = () => {
  return (
    <div className="w-5/6 mt-[60px] flex justify-between ml-5 h-max bg-gray-100 ">
      <div className="flex flex-col justify-between w-4/5">
        <h3 className="text-4xl bold pt-2 pb-3 font-bold">Explore Categories</h3>
        <div className="flex flex-wrap ">
          <div className="">
            <div className="h-[40px] w-[90%] m-[5%] shadow shadow-gray-950 bg-[#fff] cursor-pointer flex flex-col rounded-xl justify-center items-center">
              {/* icon */}
              <h3 className="text-xl p-6">All</h3>
            </div>
          </div>
          <div className="">
            <div className="h-[40px] w-[90%] m-[5%] shadow shadow-gray-950 bg-[#fff] cursor-pointer flex flex-col rounded-xl justify-center items-center">
              {/* icon */}
              <h3 className="text-xl p-6">Donuts</h3>
            </div>
          </div>
          <div className="">
            <div className="h-[40px] w-[90%] m-[5%] shadow shadow-gray-950 bg-[#fff] cursor-pointer flex flex-col rounded-xl justify-center items-center">
              {/* icon */}
              <h3 className="text-xl p-6">Burgers</h3>
            </div>
          </div>
          <div className="">
            <div className="h-[40px] w-[90%] m-[5%] shadow shadow-gray-950 bg-[#fff] cursor-pointer flex flex-col rounded-xl justify-center items-center">
              {/* icon */}
              <h3 className="text-xl p-6">Ice</h3>
            </div>
          </div>
          <div className="">
            <div className="h-[40px] w-[90%] m-[5%] shadow shadow-gray-950 bg-[#fff] cursor-pointer flex flex-col rounded-xl justify-center items-center">
              {/* icon */}
              <h3 className="text-xl p-6">poteto</h3>
            </div>
          </div>
          <div className="">
            <div className="h-[40px] w-[90%] m-[5%] shadow shadow-gray-950 bg-[#fff] cursor-pointer flex flex-col rounded-xl justify-center items-center">
              {/* icon */}
              <h3 className="text-xl p-6">Pizza</h3>
            </div>
          </div>
          <div className="">
            <div className="h-[40px] w-[90%] m-[5%] shadow shadow-gray-950 bg-[#fff] cursor-pointer flex flex-col rounded-xl justify-center items-center">
              {/* icon */}
              <h3 className="text-xl p-6">Fries</h3>
            </div>
          </div>
          <div className="">
            <div className="h-[40px] w-[90%] m-[5%] shadow shadow-gray-950 bg-[#fff] cursor-pointer flex flex-col rounded-xl justify-center items-center">
              {/* icon */}
              <h3 className="text-xl p-6">Cake</h3>
            </div>
          </div>
          <div className="">
            <div className="h-[40px] w-[90%] m-[5%] shadow shadow-gray-950 bg-[#fff] cursor-pointer flex flex-col rounded-xl justify-center items-center">
              {/* icon */}
              <h3 className="text-xl p-6">Chicken</h3>
            </div>
          </div>
          <div className="">
            <div className="h-[40px] w-[90%] m-[5%] shadow shadow-gray-950 bg-[#fff] cursor-pointer flex flex-col rounded-xl justify-center items-center">
              {/* icon */}
              <h3 className="text-xl p-6 flex">HotDog</h3>
            </div>
          </div>
        </div>
        <div className="">
          <Product />
        </div>
      </div>
      <div className=""></div>
    </div>
  );
};

export default Home;
