import React from "react";

export default function BlogPart2() {
  return (
    <div className="w-[1110px] mx-auto mt-[50px]">
      <div className="grid grid-cols-4 gap-4">
        {/* frist colam */}
        <div className="col-span-3 space-y-5">
          <div className=" p-4 gap-3 flex border-[0.25px] border-[#C4C4C4]">
            {/* image div */}
            <div className="w-1/2    h-[352px]">
              <img
                className="h-full w-full object-cover"
                src="/1stb.jpg"
                alt=""
              />
            </div>
            {/* text div */}
            <div className="w-1/2  px-4  space-y-4 ">
              <h2 className="text-2xl text-white font-medium">
                Best stretching exercise and how to do it
              </h2>
              <div className="flex justify-between">
                <div>
                  <h2>26 July, 2020</h2>
                </div>
                <div>
                  <h2>By admin</h2>
                </div>
                <div>
                  <h2>206</h2>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
                sollicitudin sit facilisis nibh. Commodo tincidunt et in vitae
                arcu egestas. Lacus molestie mauris nibh fermentum, dignissim
                ultrices. Consequat risus integer ac nunc fringilla scelerisque
                nulla amet purus.Nullam
              </p>
            </div>
          </div>
          <div className=" p-4 gap-3 flex border-[0.25px] border-[#C4C4C4]">
            {/* image div */}
            <div className="w-1/2   h-[352px]">
              <img
                className="h-full w-full object-cover"
                src="/img2.jpg"
                alt=""
              />
            </div>
            {/* text div */}
            <div className="w-1/2  px-4  space-y-4 ">
              <h2 className="text-2xl text-white font-medium">
                Best stretching exercise and how to do it
              </h2>
              <div className="flex justify-between">
                <div>
                  <h2>26 July, 2020</h2>
                </div>
                <div>
                  <h2>By admin</h2>
                </div>
                <div>
                  <h2>206</h2>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
                sollicitudin sit facilisis nibh. Commodo tincidunt et in vitae
                arcu egestas. Lacus molestie mauris nibh fermentum, dignissim
                ultrices. Consequat risus integer ac nunc fringilla scelerisque
                nulla amet purus.Nullam
              </p>
            </div>
          </div>
          <div className=" p-4 gap-3 flex border-[0.25px] border-[#C4C4C4]">
            {/* image div */}
            <div className="w-1/2     h-[352px]">
              <img
                className="h-full w-full object-cover"
                src="/img3.jpg"
                alt=""
              />
            </div>
            {/* text div */}
            <div className="w-1/2  px-4  space-y-4 ">
              <h2 className="text-2xl text-white font-medium">
                Best stretching exercise and how to do it
              </h2>
              <div className="flex justify-between">
                <div>
                  <h2>26 July, 2020</h2>
                </div>
                <div>
                  <h2>By admin</h2>
                </div>
                <div>
                  <h2>206</h2>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
                sollicitudin sit facilisis nibh. Commodo tincidunt et in vitae
                arcu egestas. Lacus molestie mauris nibh fermentum, dignissim
                ultrices. Consequat risus integer ac nunc fringilla scelerisque
                nulla amet purus.Nullam
              </p>
            </div>
          </div>
          <div className=" p-4 gap-3 flex border-[0.25px] border-[#C4C4C4]">
            {/* image div */}
            <div className="w-1/2    h-[352px]">
              <img
                className="h-full w-full object-cover"
                src="/b4.jpg"
                alt=""
              />
            </div>
            {/* text div */}
            <div className="w-1/2 px-4  space-y-4 ">
              <h2 className="text-2xl text-white font-medium">
                Best stretching exercise and how to do it
              </h2>
              <div className="flex justify-between">
                <div>
                  <h2>26 July, 2020</h2>
                </div>
                <div>
                  <h2>By admin</h2>
                </div>
                <div>
                  <h2>206</h2>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
                sollicitudin sit facilisis nibh. Commodo tincidunt et in vitae
                arcu egestas. Lacus molestie mauris nibh fermentum, dignissim
                ultrices. Consequat risus integer ac nunc fringilla scelerisque
                nulla amet purus.Nullam
              </p>
            </div>
          </div>
        </div>
        {/* second colum */}
        <div className="col-span-1 mt-3  space-y-3">
          <h2 className="text-[#6056d1] text-xl font-medium">Categories</h2>
          <div>
            <h2 className="">All (128)</h2>
            <p className="text-[#FFFFFF]/60">Diet Plan (18)</p>
            <p className="text-[#FFFFFF]/60">Belly Fat (12)</p>
            <p className="text-[#FFFFFF]/60">Weight Loss (09)</p>
            <p className="text-[#FFFFFF]/60">Six Pack (02)</p>
            <p className="text-[#FFFFFF]/60">Arm (01)</p>
            <p className="text-[#FFFFFF]/60">Chest (11)</p>
            <p className="text-[#FFFFFF]/60">Stretching (13)</p>
            <p className="text-[#FFFFFF]/60">Gym (08)</p>
            <p className="text-[#FFFFFF]/60">Weight Gain (15)</p>
          </div>
        </div>
      </div>
    </div>
  );
}
