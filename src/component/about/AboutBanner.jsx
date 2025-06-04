import React from "react";

export default function AboutBanner() {
  return (
    <div
      className="bg-cover bg-[center_top_20%] h-[450px] w-[1380px]  relative "
      style={{
        backgroundImage: `url('/aboutb.jpg')`,
      }}
    >
      <div className="bg-gradient-to-r from-black/80 to-transparent absolute inset-0"></div>
      <div className="absolute top-[60%] left-[120px]">
        <h2 className="text-5xl">About us</h2>
        <p className="text-xl">Home / About</p>
      </div>
    </div>
  );
}
