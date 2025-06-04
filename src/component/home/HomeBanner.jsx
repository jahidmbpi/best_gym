import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";

export default function HomeBanner() {
  return (
    <div
      className="bg-cover min-h-screen w-[1380px] bg-center relative"
      style={{
        backgroundImage: `url('/homeBannner.jpg')`,
      }}
    >
      {/* Text content - now absolute */}
      <div className="absolute top-[30%] left-[100px] w-[580px]">
        <div className="space-y-[15px] p-4">
          <h2 className="text-white text-4xl font-bold">
            THE PAIN YOU FEEL
            <span className="text-[rgb(79,65,182)] mx-2">TODAY</span> <br />
            WILL BE THE STRENGTH <br /> YOU FEEL
            <span className="text-[rgb(79,65,182)] mx-2">TOMORROW</span>
          </h2>
          <p className="text-white font-bold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedo
            eiusmod tempor incididunt ut labore et{" "}
          </p>

          <div className="flex gap-4 items-center">
            <button className="w-[140px] h-[60px] bg-[#4F41B6] text-white font-semibold">
              Join Us
            </button>
            <div className="w-[140px]">
              <button className="text-white p-0 m-0 h-auto">
                <span className="border-b-2 border-white inline-block font-bold">
                  Contact Us
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Left Arrow */}
      <div className="absolute top-1/2 left-[40px] transform -translate-y-1/2">
        <IoIosArrowDropleft className="text-4xl text-white cursor-pointer bg-[#4F41B6] rounded-full" />
      </div>

      {/* Right Arrow */}
      <div className="absolute top-1/2 right-[80px] transform -translate-y-1/2">
        <IoIosArrowDropright className="text-4xl text-white cursor-pointer bg-[#4F41B6] rounded-full" />
      </div>
    </div>
  );
}
