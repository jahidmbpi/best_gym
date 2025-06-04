import React from "react";
import { PiCheckLight } from "react-icons/pi";

export default function Part4() {
  return (
    <div
      className="bg-cover h-[1081px] w-[1380px] bg-center relative mt-[18px]"
      style={{
        backgroundImage: `url('/part4.jpg')`,
      }}
    >
      <div className="flex gap-2 items-center justify-center absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <div className="bg-[#4f41b6] w-[350px] h-[500px] text-center items-center p-4 space-y-6">
          <h2 className="text-3xl font-normal text-[#FFFFFF]">Basic Plan</h2>
          <div>
            <h2 className="font-normal text-3xl text-white">10$</h2>
            <p>/month</p>
          </div>
          <div className="border text-[#727273] "></div>
          <div className=" flex flex-col items-center gap-2 mt-4">
            <div className="space-y-4">
              <div className="flex flex-row items-center gap-2">
                <PiCheckLight />
                <p>One shift</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <PiCheckLight />
                <p>Basic equipments</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <PiCheckLight />
                <p>Limited time</p>
              </div>
            </div>

            <button className="w-[100px] text-black/40 h-[52px] bg-white p-2 text-xl mt-4">
              Select
            </button>
          </div>
        </div>
        <div className="bg-[#3a3b3b]/40 w-[350px] h-[500px] text-center items-center p-4 space-y-6">
          <h2 className="text-3xl font-normal text-[#FFFFFF]">Standard Plan</h2>
          <div>
            <h2 className="font-normal text-3xl text-white">15$</h2>
            <p>/month</p>
          </div>
          <div className="border text-[#727273] "></div>
          <div className=" flex flex-col items-center gap-2 mt-4">
            <div className="space-y-4">
              <div className="flex flex-row items-center gap-2">
                <PiCheckLight />
                <p>Two shift</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <PiCheckLight />
                <p>All equipments</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <PiCheckLight />
                <p>Five hour maximum</p>
              </div>
            </div>

            <button className="w-[100px] h-[52px] bg-[#4f41b6] p-2 text-xl mt-4">
              Select
            </button>
          </div>
        </div>
        <div className="bg-[#3a3b3b]/40 w-[350px] h-[500px] text-center items-center p-4 space-y-6">
          <h2 className="text-3xl font-normal text-[#FFFFFF]">Premium Plan</h2>
          <div>
            <h2 className="font-normal text-3xl text-white">10$</h2>
            <p>/month</p>
          </div>
          <div className="border text-[#727273] "></div>
          <div className=" flex flex-col items-center gap-2 mt-4">
            <div className="space-y-4">
              <div className="flex flex-row items-center gap-2">
                <PiCheckLight />
                <p>Any time</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <PiCheckLight />
                <p>All equipments</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <PiCheckLight />
                <p>Unlimited time</p>
              </div>
            </div>

            <button className="w-[100px] h-[52px] bg-[#4f41b6] p-2 text-xl mt-4">
              Select
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
