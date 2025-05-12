import Link from "@/node_modules/next/link";
import how from "../../public/assets/logo.png";
import React from "react";
import "./style.css";
import { Button } from "../ui/button";
import Image from "next/image";

const Header = () => {
  return (
    <div className="w-1/6 mt-[60px] border-r border-r-gray-50 shadow-xl shadow-gray-700 bg-[#07031367] sticky top-20 h-max">
      {/* top */}
      <div className="">
        <div className="">
          <div className="h-[40px] w-[90%] m-[5%] border-2 border-gray-800 bg-transparent cursor-pointer flex flex-col rounded-2xl justify-center items-center">
            {/* icon */}
            <h3 className="text-2xl">Dashboard</h3>
          </div>
        </div>
        <div className="">
          <div className="h-[40px] w-[90%] m-[5%] border-2 border-gray-800 bg-transparent cursor-pointer flex flex-col rounded-2xl justify-center items-center">
            {/* icon */}
            <h3 className="text-2xl">Food Order</h3>
          </div>
        </div>
        <div className="">
          <div className="h-[40px] w-[90%] m-[5%] border-2 border-gray-800 bg-transparent cursor-pointer flex flex-col rounded-2xl justify-center items-center">
            {/* icon */}
            <h3 className="text-2xl">Feedback</h3>
          </div>
        </div>
        <div className="">
          <div className="h-[40px] w-[90%] m-[5%] border-2 border-gray-800 bg-transparent cursor-pointer flex flex-col rounded-2xl justify-center items-center">
            {/* icon */}
            <h3 className="text-2xl">Messages</h3>
          </div>
        </div>
        <div className="">
          <div className="h-[40px] w-[90%] m-[5%] border-2 border-gray-800 bg-transparent cursor-pointer flex flex-col rounded-2xl justify-center items-center">
            {/* icon */}
            <h3 className="text-2xl">Order History</h3>
          </div>
        </div>
        <div className="">
          <div className="h-[40px] w-[90%] m-[5%] border-2 border-gray-800 bg-transparent cursor-pointer flex flex-col rounded-2xl justify-center items-center">
            {/* icon */}
            <h3 className="text-2xl">Customization</h3>
          </div>
        </div>
      </div>
      {/* buttom */}
      <div className="mt-24">
        <div className=" h-[170px] w-[92%] m-[4%] border-2 border-gray-500 bg-transparent cursor-pointer flex flex-col rounded-2xl justify-center items-center">
          <Image src={how} alt="" className="w-[80px] hover:bg-[#00000070]" />
          <div className="w-[100%] h-auto text-wrap">
            <p className="text-[12px] text-start w-[92%] m-auto">how to plce order: ipsum dolor sit amet consec adipisicing elit. Et repellendus voluptatem tolorate all the pass...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
