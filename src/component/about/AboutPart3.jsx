import React from "react";

export default function AboutPart3() {
  return (
    <div className="flex w-[1110px] items-center justify-between mx-auto ">
      <div className=" relative ">
        <img
          className="w-[350px] h-[292px] opacity-[45%] "
          src="/abp3.1.jpg"
          alt=""
        />
        <div className="absolute flex items-center justify-center inset-0">
          <div className="flex flex-col items-center text-center ">
            <img className="w-[60px] h-[60px]" src="/timelogo.png" alt="" />
            <h2 className="text-2xl font-bold text-white">24/7 Open</h2>
          </div>
        </div>
      </div>
      <div className=" relative ">
        <img
          className="w-[350px] h-[292px] opacity-[45%] "
          src="/abp3.2.jpg"
          alt=""
        />

        <div className="absolute flex items-center justify-center inset-0">
          <div className="flex flex-col items-center text-center">
            <img className="w-[60px] h-[60px]" src="/Vector.png" alt="" />
            <h2 className="text-2xl font-bold text-white">Quality Equipment</h2>
          </div>
        </div>
      </div>

      <div className=" relative ">
        <img
          className="w-[350px] h-[292px] opacity-[45%] "
          src="/abp3.3.jpg"
          alt=""
        />
        <div className="absolute flex items-center justify-center inset-0">
          <div className="flex flex-col items-center text-center">
            <img className="w-[60px] h-[60px]" src="/Group204.png" alt="" />
            <h2 className="text-2xl font-bold text-white">Best Trainers</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
