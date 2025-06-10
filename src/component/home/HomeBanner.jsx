import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

export default function HomeBanner() {
  return (
    <div
      className="bg-cover h-[400px] w-full md:h-[500px]  lg:min-h-screen  bg-center relative"
      style={{
        backgroundImage: `url('/homeBannner.jpg')`,
      }}
    >
      {/* Text content */}
      <div className="absolute top-[30%] md:top-[30%] left-4 md:left-10 lg:left-[100px] w-[90%] sm:w-[500px] md:w-[580px]">
        <div className=" space-y-2 md:space-y-4 p-4">
          <h2 className="text-white text-[18px] sm:text-3xl md:text-4xl font-bold leading-snug">
            THE PAIN YOU FEEL
            <span className="text-[rgb(79,65,182)] mx-1">TODAY</span> <br />
            WILL BE THE STRENGTH <br /> YOU FEEL
            <span className="text-[rgb(79,65,182)] mx-1">TOMORROW</span>
          </h2>
          <p className="text-white font-normal text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et{" "}
          </p>

          <div className="flex text-center items-center gap-4">
            <button className="w-[80px] h-[40px] md:w-[125px] lg:w-[146px] lg:h-[58px] bg-[#4F41B6] text-white font-semibold">
              Join Us
            </button>
            <button className=" text-white font-bold border-b-2 border-white">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Left Arrow */}
      <div className="absolute top-1/2  left-0 sm:left-3 transform -translate-y-1/2">
        <IoIosArrowDropleft className="text-2xl sm:text-4xl  text-white cursor-pointer bg-[#4F41B6] rounded-full" />
      </div>

      {/* Right Arrow */}
      <div className="absolute top-1/2 right-0 sm:right-3 transform -translate-y-1/2">
        <IoIosArrowDropright className="text-2xl sm:text-4xl  text-white cursor-pointer bg-[#4F41B6] rounded-full" />
      </div>
    </div>
  );
}
