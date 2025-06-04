import Part2_extra from "./Part2_extra";

export default function Part2() {
  return (
    <div className="w-[1380px] h-[910px] relative ">
      {/* Background Image with overlay */}
      <div
        className="bg-cover w-full h-[600px] relative"
        style={{
          backgroundImage: `url('/part2-b.jpg')`,
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute h-[928px] top-0 left-0 w-full bg-gradient-to-b from-[#2e2f2f]/80 via-[#1f1e1e]/90 to-[#1b1b1b] z-10" />

        <div className="relative z-20">
          <div className="p-5">
            <Part2_extra />
          </div>
          <div className="flex mx-[160px] gap-6 p-4">
            {/* Man Image with Text */}
            <div className="relative">
              <img className="h-[719px]" src="/man.png" alt="Man" />
              <div className="absolute bottom-4 w-full text-white space-y-4 p-5">
                <h2 className=" font-bold text-2xl">
                  For <span className="text-3xl">Men</span>
                </h2>
                <div className="border-b border-white w-full"></div>
                <p className="font-medium">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedo
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  enim ad minim veniam, quis nostrud exercitation ullamco boris
                  nisi ut aliquip ex ea commodo consequat. Duis{" "}
                </p>
              </div>
            </div>

            {/* Women Image */}
            <img className="h-[728px]" src="/women.png" alt="Women" />
          </div>
        </div>
      </div>
    </div>
  );
}
