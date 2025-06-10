import React from "react";

export default function BlogPart2() {
  return (
    <div className="w-full lg:w-[1110px] mx-auto mt-[50px]">
      <div className="flex flex-col-reverse lg:grid lg:grid-cols-4 gap-4">
        {/* first column */}
        <div className="col-span-3 space-y-5">
          {/* Blog Item */}
          {[1, 2, 3, 4].map((_, index) => {
            const images = ["/1stb.jpg", "/img2.jpg", "/img3.jpg", "/b4.jpg"];
            return (
              <div
                key={index}
                className="p-4 gap-3 flex flex-col lg:flex-row lg:border-[0.25px] lg:border-[#C4C4C4]"
              >
                {/* image div */}
                <div className="w-full lg:w-1/2 h-[250px] lg:h-[352px]">
                  <img
                    className="h-full w-full object-cover"
                    src={images[index]}
                    alt={`Blog ${index + 1}`}
                  />
                </div>
                {/* text div */}
                <div className="w-full lg:w-1/2 lg:px-4 space-y-4">
                  <h2 className="text-xl md:text-2xl text-white font-medium">
                    Best stretching exercise and how to do it
                  </h2>
                  <div className="flex justify-between w-full text-white/80 text-sm">
                    <div>26 July, 2020</div>
                    <div>By admin</div>
                    <div>206</div>
                  </div>
                  <p className="text-white/70">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Amet sollicitudin sit facilisis nibh. Commodo tincidunt et
                    in vitae arcu egestas. Lacus molestie mauris nibh fermentum,
                    dignissim ultrices. Consequat risus integer ac nunc
                    fringilla scelerisque nulla amet purus.Nullam
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* second column (categories) */}
        <div className="col-span-1 mt-3 pl-4 space-y-3">
          <h2 className="text-[#6056d1] text-xl font-medium">Categories</h2>
          <div className="text-white/80 space-y-1">
            <h2 className="text-white">All (128)</h2>
            <p>Diet Plan (18)</p>
            <p>Belly Fat (12)</p>
            <p>Weight Loss (09)</p>
            <p>Six Pack (02)</p>
            <p>Arm (01)</p>
            <p>Chest (11)</p>
            <p>Stretching (13)</p>
            <p>Gym (08)</p>
            <p>Weight Gain (15)</p>
          </div>
        </div>
      </div>
    </div>
  );
}
