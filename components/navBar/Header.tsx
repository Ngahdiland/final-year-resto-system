'use client'
import React, { useState } from "react";
import Link from "@/node_modules/next/link";
import how from "../../public/assets/logo.png";
import "./style.css";
import { Button } from "../ui/button";
import Image from "next/image";

const Header = () => {
  const [activeSection, setActiveSection] = useState("dashboard");

  return (
    <div className="w-1/6 mt-[60px] border-r border-r-gray-50 shadow-xl sticky top-20 h-max">
      <div className="w-full bg-[#ffffff] flex flex-col">
        <div className="w-[88%] m-auto rounded-2xl shadow shadow-gray-950">
          {/* top */}
          <div>
            <Link href="/">
              <div
                className={`h-[40px] w-[90%] m-[5%] shadow shadow-gray-950 cursor-pointer flex flex-col rounded-sm justify-center items-center ${activeSection === "dashboard" ? "bg-[#f7212150] ring-2 ring-[#f72121]" : "bg-white"}`}
                onClick={() => setActiveSection("dashboard")}
              >
                <h3 className="text-xl">Dashboard</h3>
              </div>
            </Link>
            <Link href="/foodOrder">
              <div
                className={`h-[40px] w-[90%] m-[5%] shadow shadow-gray-950 cursor-pointer flex flex-col rounded-sm justify-center items-center ${activeSection === "foodOrder" ? "bg-[#f7212150] ring-2 ring-[#f72121]" : "bg-white"}`}
                onClick={() => setActiveSection("foodOrder")}
              >
                <h3 className="text-xl">Food Order</h3>
              </div>
            </Link>
            <Link href="/feedback">
              <div
                className={`h-[40px] w-[90%] m-[5%] shadow shadow-gray-950 cursor-pointer flex flex-col rounded-sm justify-center items-center ${activeSection === "feedback" ? "bg-[#f7212150] ring-2 ring-[#f72121]" : "bg-white"}`}
                onClick={() => setActiveSection("feedback")}
              >
                <h3 className="text-xl">Feedback</h3>
              </div>
            </Link>
            <Link href="/message">
              <div
                className={`h-[40px] w-[90%] m-[5%] shadow shadow-gray-950 cursor-pointer flex flex-col rounded-sm justify-center items-center ${activeSection === "message" ? "bg-[#f7212150] ring-2 ring-[#f72121]" : "bg-white"}`}
                onClick={() => setActiveSection("message")}
              >
                <h3 className="text-xl">Messages</h3>
              </div>
            </Link>
            <Link href="/orderhistory">
              <div
                className={`h-[40px] w-[90%] m-[5%] shadow shadow-gray-950 cursor-pointer flex flex-col rounded-sm justify-center items-center ${activeSection === "orderhistory" ? "bg-[#f7212150] ring-2 ring-[#f72121]" : "bg-white"}`}
                onClick={() => setActiveSection("orderhistory")}
              >
                <h3 className="text-xl">Order History</h3>
              </div>
            </Link>
            <Link href="/customization">
              <div
                className={`h-[40px] w-[90%] m-[5%] shadow shadow-gray-950 cursor-pointer flex flex-col rounded-sm justify-center items-center ${activeSection === "customization" ? "bg-[#f7212150] ring-2 ring-[#f72121]" : "bg-white"}`}
                onClick={() => setActiveSection("customization")}
              >
                <h3 className="text-xl">Customization</h3>
              </div>
            </Link>
          </div>
          {/* buttom */}
          <div className="mt-24">
            <div className=" h-[170px] w-[92%] m-[4%] shadow shadow-gray-950 bg-transparent cursor-pointer flex flex-col rounded-sm justify-center items-center">
              <Image
                src={how}
                alt=""
                className="w-[80px] hover:bg-[#00000070]"
              />
              <div className="w-[100%] h-auto text-wrap">
                <p className="text-[12px] text-start w-[92%] m-auto">
                  how to plce order: ipsum dolor sit amet consec adipisicing
                  elit. Et repellendus voluptatem tolorate all the pass...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
