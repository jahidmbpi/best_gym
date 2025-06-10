import TrainerBanner from "@/component/trainers/TrainerBanner";
import TrainerPart1 from "@/component/trainers/TrainerPart1";
import TrainerPart2 from "@/component/trainers/TrainerPart2";
import React from "react";

export default function page() {
  return (
    <div>
      <TrainerBanner></TrainerBanner>
      <TrainerPart1></TrainerPart1>
      {/* <TrainerPart2></TrainerPart2> */}
    </div>
  );
}
