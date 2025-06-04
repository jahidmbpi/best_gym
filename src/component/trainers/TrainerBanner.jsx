import React from "react";

export default function TrainerBanner() {
  return (
    <div
      className="bg-cover bg-[center_top_33%] h-[450px] w-[1380px]  relative "
      style={{
        backgroundImage: `url('/trainerBanner.jpg')`,
      }}
    >
      <div className="absolute top-[60%] left-[120px]">
        <h2 className="text-5xl">Trainers</h2>
        <p className="text-xl">Home / Trainers</p>
      </div>
    </div>
  );
}
