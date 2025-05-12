import React from "react";
import { ModeToggle } from "./theme";
import Image from "next/image";
import profile from "../../public/assets/profile.jpg";
import support from "../../public/assets/support_img.png"
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const TopHead = () => {
  return (
    <div className="w-full fixed flex flex-col justify-between  border-b border-b-gray-50 bg-[#230d5f] ">
      <div className="w-[98%] flex justify-between items-center h-[60px] m-auto text-3xl">
        <div className="">
          <h2 className="bold-text">FOODIE SPOT</h2>
          {/* <Image src={logo} alt="" width={300} /> */}
        </div>
        <div className="flex w-full max-w-sm items-center space-x-[-10px]">
          <Input
            type="text"
            placeholder="ice cream"
            className="text-2xl placeholder:text-gray-700"
          />
          <Button type="submit">Search</Button>
        </div>
        <div className="flex gap-2">
          <div className=" h-[35px] w-[40px] border-2 border-gray-500 bg-transparent cursor-pointer flex flex-col rounded-xl justify-center items-center">
              <Image src={support} alt="" width={25}/>
          </div>
          <Button className="border-1 flex">
            {/* user details */}
            <div className="w-[27px] h-[27px] flex justify-center bg-gray-300 rounded-4xl border-1">
              <Image src={profile} alt="" className="rounded-4xl" />
            </div>
            <p>Ngah Diland</p>
          </Button>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default TopHead;
