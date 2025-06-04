import React from "react";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

export default function TrainerPart2() {
  return (
    <div className="relative">
      <div className="w-[630px] h-[456px] p-10 bg-[#f8f7f7] space-y-7 mt-10 items-center justify-center mx-auto">
        <div className="space-y-2">
          <h2 className="text-black text-4xl">Athan Travis</h2>
          <h2 className="text-black text-2xl">Weight loss trainers</h2>
        </div>
        <p className="text-[#7c7b7b]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedo eiusmod
          tempor incididunt ut labore et dolore magna aliqua. enim ad minim
          veniam, quis nostrud exercitation ullamco boris nisi ut aliquip ex ea
          commodo consequat. Duis lorem ipsum dolor sit Lorem ipsum dolor sit
          amet, consectetur adipiscing elit, sedo eiusmod tempor incididunt ut
          labore et dolore magna aliqua. enim ad minim veniam, quis nostrud
          exercitation ullamco boris nisi ut aliquip ex ea{" "}
        </p>
        <div className="text-black">
          <h2>Phone : + 88 0123 456 789</h2>
          <h2>Email : username123@gmail.com</h2>
        </div>
        <div>
          <div className="flex gap-4">
            <img
              className="bg-[#4F41B6] w-[41px] h-[41px] p-2"
              src="/fb.png"
              alt=""
            />
            <img
              className="bg-[#4F41B6] w-[41px] h-[41px] p-2"
              src="/Subtract.png"
              alt=""
            />
            <img
              className="bg-[#4F41B6] w-[41px] h-[41px] p-2"
              src="/sub.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="absolute top-1/2 left-1/6 transform -translate-y-1/2">
        <IoIosArrowDropleft className="text-4xl text-white cursor-pointer bg-[#4F41B6] rounded-full" />
      </div>

      {/* Right Arrow */}
      <div className="absolute top-1/2 right-1/6 transform -translate-y-1/2">
        <IoIosArrowDropright className="text-4xl text-white cursor-pointer bg-[#4F41B6] rounded-full" />
      </div>
    </div>
  );
}
