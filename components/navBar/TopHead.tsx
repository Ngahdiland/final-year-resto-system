import React from "react";
import { ModeToggle } from "./theme";
import Image from "next/image";
import profile from "../../public/assets/profile.jpg";
import support from "../../public/assets/support_img.png";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const TopHead = () => {
  return (
    <div className="w-full fixed flex flex-col justify-between h-[60px]   bg-[#ffffff] ">
      <div className="h-[50px] w-[98%] shadow-gray-950 shadow flex justify-between items-center m-auto rounded-xl">
        <div className="w-[97%] flex justify-between items-center  m-auto text-3xl  ">
          <div className="flex">
            {/* <h2 className="bold-text font-extrabold"> <span className="text-[#f71a1a] ">FOODIE</span> <span className="text-[#f7901a]">SPOT</span></h2> */}
            {/* <Image src={logo} alt="" width={300} /> */}
            <img src="/assets/logo.png" alt="Logo" className="h-8 w-8 object-contain " />
            <span className="text-xl font-semibold text-[#f71a1a]">Resto</span>
          </div>
          <div className="flex w-full max-w-sm items-center space-x-[-10px] gap-5">
            <input
              type="text"
              placeholder="ice cream"
              className="text-xl border border-[#6b6a6a] outline-none bg-gray-100 p-1 pl-2 rounded-lg placeholder:text-gray-600"
            />
            <Button type="submit" className=" bg-[#f71a1a] rounded-lg">
              Search
            </Button>
          </div>
          <div className="flex gap-2">
            <div className=" h-[35px] w-[40px] shadow shadow-gray-950 bg-transparent cursor-pointer flex flex-col rounded-sm justify-center items-center">
              <Image src={support} alt="" width={25} />
            </div>
            <div  className="border-1 bg-[#f71a1a00] flex justify-center items-center pl-2 pr-2 rounded-sm gap-1 shadow shadow-gray-950">
              {/* user details */}
              <div className="w-[27px] h-[27px] flex justify-center bg-gray-300 rounded-4xl border-1">
                <Image src={profile} alt="" className="rounded-4xl" />
              </div>
              <p className="text-gray-950 text-sm">Ngah Diland</p>
            </div>
            {/* <ModeToggle /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHead;
