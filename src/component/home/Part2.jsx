import Part2_extra from "./Part2_extra";

export default function Part2() {
  return (
    <div className="w-full sm:w-full lg:w-[1380px] lg:h-[910px] relative">
      {/* Background Image with overlay */}
      <div
        className="bg-cover w-full h-full md:h-[800px] lg:h-[910px] relative"
        style={{
          backgroundImage: `url('/part2-b.jpg')`,
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute h-full top-0 left-0 w-full bg-gradient-to-b from-[#2e2f2f]/80 via-[#1f1e1e]/90 to-[#1b1b1b] z-10" />

        <div className="relative z-20">
          <div className="p-4 md:p-6 lg:p-10">{/* <Part2_extra /> */}</div>

          {/* Main content section */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6  md:px-10 lg:px-[160px] py-6">
            {/* Man Image with Text */}
            <div className="relative p-4 w-full md:w-1/2">
              <img
                className="w-full h-auto md:h-[600px] lg:h-[719px] object-cover"
                src="/man.png"
                alt="Man"
              />
              <div className="absolute bottom-4 w-[90%] px-4 mx-auto text-white space-y-4   sm:p-5">
                <h2 className="font-bold text-xl sm:text-2xl md:text-3xl">
                  For{" "}
                  <span className="text-2xl sm:text-3xl md:text-4xl">Men</span>
                </h2>
                <div className="border-b border-white w-full"></div>
                <p className="text-sm sm:text-base md:text-lg font-medium ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>

            {/* Women Image */}
            <div className="w-full md:w-1/2 p-4">
              <img
                className="w-full h-auto md:h-[600px] lg:h-[728px] object-cover"
                src="/women.png"
                alt="Women"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
