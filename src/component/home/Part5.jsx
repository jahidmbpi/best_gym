import React from "react";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

export default function Part5() {
  return (
    <div className="bg-[#1B1B1B]">
      {/* Header */}
      <div className="space-y-6 w-full lg:w-[1050px] items-center justify-center mx-auto px-4 sm:p-0">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold capitalize text-white">
            Fitness Blogs
          </h2>
          <div className="flex gap-4">
            <IoIosArrowDropleft className="text-3xl text-white" />

            <IoIosArrowDropright className="text-3xl text-white" />
          </div>
        </div>

        {/* Blog Card */}
        <div className=" flex flex-col space-y-3.5 lg:flex-row w-full gap-2">
          <div className="relative w-full">
            <img
              className="h-[350px] md:h-[400px] lg:h-[540px]  w-full"
              src="/img1.jpg"
              alt="Fitness Blog"
            />
            <div className="absolute bottom-0 left-0 w-full text-white  p-4">
              <h2 className=" font-medium text-xl lg:text-2xl">
                Best stretching exercise and how to do it
              </h2>
              <div className="flex  gap-3 text-sm">
                <div>
                  {/* <img src="/Vector.png" alt="" /> */}
                  <h3>26 July, 2020</h3>
                </div>
                <div>
                  <h3>Health & Wellness</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-full">
            <img
              className="h-[350px] md:h-[400px] lg:h-[540px]  w-full"
              src="/img2.jpg"
              alt="Fitness Blog"
            />
            <div className="absolute bottom-0 left-0 w-full p-4 text-white space-y-4">
              <h2 className=" font-medium text-xl lg:text-2xl">
                Protein powder for weight gain and workout
              </h2>
              <div className="flex gap-6 text-sm">
                <h3>26 July, 2020</h3>
                <h3>Health & Wellness</h3>
              </div>
            </div>
          </div>
          <div className="relative w-full">
            <img
              className="h-[350px] md:h-[400px] lg:h-[540px]  w-full"
              src="/img3.jpg"
              alt="Fitness Blog"
            />
            <div className="absolute bottom-0 left-0 w-full text-white p-4">
              <h2 className=" font-medium text-xl lg:text-2xl">
                Best stretching exercise and how to do it
              </h2>
              <div className="flex gap-6 text-sm">
                <h3>26 July, 2020</h3>
                <h3>Health & Wellness</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
