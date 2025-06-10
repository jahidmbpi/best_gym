import React from "react";

export default function AboutBanner() {
  return (
    <div
      className="bg-cover bg-[center_top_20%] h-[250px] md:h-[400px] lg:h-[450px] w-full lg:w-[1380px]  relative "
      style={{
        backgroundImage: `url('/aboutb.jpg')`,
      }}
    >
      <div className="bg-gradient-to-r from-black/80 to-transparent absolute inset-0"></div>
      <div className="absolute top-[60%] left-[40px] md:left-[100px] lg:left-[120px]">
        <h2 className=" text-3xl md:text-4xl lg:text-5xl">About us</h2>
        <p className="text-xl">Home / About</p>
      </div>
    </div>
  );
}
