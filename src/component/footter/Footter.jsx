import React from "react";

export default function Footter() {
  return (
    <div
      className="bg-cover bg-[center_top_33%] h-[420px] w-full  relative "
      style={{
        backgroundImage: `url('/foter.jpg')`,
      }}
    >
      <div className="bg-black/60 absolute inset-0"></div>

      <div className="flex  items-center justify-evenly mb-7">
        <div>
          <h2 className="text-2xl text-[#FFFFFF]">Gymcoholic</h2>
          <p>
            We offer comfortable spaces, cozy <br /> cafe, high-speed internet,
            spacious <br /> parking area and many more for <br /> your best
            workspaces and meetings
          </p>
        </div>
        <div>
          <h2 className="text-[#FFFFFF] opacity-[50%]">Links</h2>
          <p>About Us</p>
          <p>Pricing</p>
          <p>Careers</p>
          <p>Press</p>
        </div>
        <div>
          <h2 className="text-[#FFFFFF] opacity-[50%]">Contact Us</h2>
          <p>E. Hello@frispes.com</p>
          <p>
            A. Jalan Jayakatwang <br /> No.301 Ngasem, Kediri
          </p>
          <p>P. (+62) 82334670000</p>
        </div>
        <div className="flex flex-col space-y-2.5">
          <h2>Subscribe </h2>
          <input
            className="w-[277px] h-[50px] px-2 bg-[#FFFFFF66]/90"
            type="text"
            placeholder="Enter your Name"
          />
          <input
            className="w-[277px] h-[50px] px-2 bg-[#FFFFFF66]/90"
            type="text"
            placeholder="Enter your Name"
          />
          <button className="bg-[#4F41B6] w-[124px] h-[48px] ">send</button>
        </div>
      </div>
      <div className="border mx-[91px]"></div>
    </div>
  );
}
