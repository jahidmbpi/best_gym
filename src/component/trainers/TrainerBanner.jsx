import React from "react";

export default function TrainerBanner() {
  return (
    <div
      className="bg-cover bg-[center_top_20%] h-[250px] md:h-[400px] lg:h-[450px] w-full lg:w-[1380px]  relative "
      style={{
        backgroundImage: `url('/trainerBanner.jpg')`,
      }}
    >
      <div className="absolute top-[60%] left-[40px] md:left-[100px] lg:left-[120px]">
        <h2 className=" text-3xl md:text-4xl lg:text-5xl">Trainers</h2>
        <p className="text-xl">Home / Trainers</p>
      </div>
    </div>
  );
}
