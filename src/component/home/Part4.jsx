import React from "react";
import { PiCheckLight } from "react-icons/pi";

export default function Part4() {
  return (
    <div
      className="w-full h-auto  lg:h-[1081px] bg-cover bg-center  py-10 px-4 lg:relative"
      style={{
        backgroundImage: `url('/part4.jpg')`,
      }}
    >
      <div
        className="max-w-6xl h-auto mx-auto flex flex-col md:flex-row gap-6 items-center justify-center 
                  static lg:absolute lg:bottom-6  lg:left-1/2 lg:-translate-x-1/2 lg:justify-center"
      >
        {/* Basic Plan */}
        <div className="bg-[#4f41b6] h-auto w-full md:w-[300px] lg:w-[350px]  lg:h-[500px] text-center p-4 space-y-6">
          <h2 className="text-3xl font-normal text-white">Basic Plan</h2>
          <div>
            <h2 className="font-normal text-3xl text-white">10$</h2>
            <p className="text-white">/month</p>
          </div>
          <div className="border text-[#727273]" />
          <div className="flex flex-col items-center gap-2 mt-4">
            <div className="space-y-4 text-white">
              <div className="flex items-center gap-2">
                <PiCheckLight />
                <p>One shift</p>
              </div>
              <div className="flex items-center gap-2">
                <PiCheckLight />
                <p>Basic equipments</p>
              </div>
              <div className="flex items-center gap-2">
                <PiCheckLight />
                <p>Limited time</p>
              </div>
            </div>
            <button className="w-[100px] h-[52px] bg-white text-black/40 text-xl mt-4">
              Select
            </button>
          </div>
        </div>

        {/* Standard Plan */}
        <div className="bg-[#3a3b3b]/40 w-full md:w-[300px] lg:w-[350px] h-[400px] lg:h-[500px] text-center p-4 space-y-6">
          <h2 className="text-3xl font-normal text-white">Standard Plan</h2>
          <div>
            <h2 className="font-normal text-3xl text-white">15$</h2>
            <p className="text-white">/month</p>
          </div>
          <div className="border text-[#727273]" />
          <div className="flex flex-col items-center gap-2 mt-4">
            <div className="space-y-4 text-white">
              <div className="flex items-center gap-2">
                <PiCheckLight />
                <p>Two shift</p>
              </div>
              <div className="flex items-center gap-2">
                <PiCheckLight />
                <p>All equipments</p>
              </div>
              <div className="flex items-center gap-2">
                <PiCheckLight />
                <p>Five hour maximum</p>
              </div>
            </div>
            <button className="w-[100px] h-[52px] bg-[#4f41b6] text-white text-xl mt-4">
              Select
            </button>
          </div>
        </div>

        {/* Premium Plan */}
        <div className="bg-[#3a3b3b]/40 w-full h-auto md:w-[300px] lg:w-[350px]  lg:h-[500px] text-center p-4 space-y-6">
          <h2 className="text-3xl font-normal text-white">Premium Plan</h2>
          <div>
            <h2 className="font-normal text-3xl text-white">20$</h2>
            <p className="text-white">/month</p>
          </div>
          <div className="border text-[#727273]" />
          <div className="flex flex-col items-center gap-2 mt-4">
            <div className="space-y-4 text-white">
              <div className="flex items-center gap-2">
                <PiCheckLight />
                <p>Any time</p>
              </div>
              <div className="flex items-center gap-2">
                <PiCheckLight />
                <p>All equipments</p>
              </div>
              <div className="flex items-center gap-2">
                <PiCheckLight />
                <p>Unlimited time</p>
              </div>
            </div>
            <button className="w-[100px] h-[52px] bg-[#4f41b6] text-white text-xl mt-4">
              Select
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
