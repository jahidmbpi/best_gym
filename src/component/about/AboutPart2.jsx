import React from "react";
import { PiCheckLight } from "react-icons/pi";

export default function AboutPart2() {
  return (
    <div>
      <div className="flex gap-5 mx-[135px] pt-[100px] ">
        <div className="w-1/2 p-2">
          <img className="h-[530px] opacity-[50%]" src="/ab1.png" alt="" />
        </div>
        <div className="w-1/2  p-2  space-y-4">
          <h2 className="text-2xl">why chose us </h2>
          <h2 className="text-3xl">
            WE <span className="text-[#4f41b6]">RAISE</span> YOUR <br />{" "}
            CONFIDENCE
          </h2>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
              sollicitudin sit facilisis nibh. Commodo tincidunt et in vitae
              arcu egestas. Lacus molestie mauris nibh fermentum, dignissim
              ultrices. Albi dorl Consequat risus integer ac nunc fringilla
              lorem inon scelerisque nulla amet purus.Nullam vitae holdu kal
              sollicitudin vehicula feugiat turpis at ultrices. Babul
              Sollicitudin interdum metus, feugiat leo netus del ki
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
              sollicitudin sit facilisis nibh. Commodo tincidunt et in vitae
              arcu egestas. Lacus molestie mauris nibh fermentum, dignissim
              ultrices. Albi dorl Consequat risus integer ac nunc fringilla
              lorem inon scelerisque nulla amet purus.Nullam vitae holdu kal
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
              sollicitudin sit facilisis nibh. Commodo tincidunt et in vitae
              arcu egestas. Lacus molestie mauris nibh fermentum, dignissim
              ultrices. Albi dorl Consequat risus integer ac nunc fk
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-row-reverse  mx-[135px] ">
        <div className=" ">
          <img
            className="h-[500px] w-[674px] object-cover  opacity-[50%]"
            src="/ab2.png"
            alt=""
          />
        </div>
        <div className="w-1/2  p-2  space-y-4 pt-10">
          <h2 className="text-3xl">
            OUR <span className="text-[#4f41b6]">SPECILITY</span>
          </h2>
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <PiCheckLight className="text-[#4f41b6]" />
              <p> Lorem ipsum dolor sit amet adipiscing elit</p>
            </div>
            <div className="flex items-center gap-2">
              <PiCheckLight className="text-[#4f41b6]" />
              <p> Lorem ipsum dolor sit amet adipiscing elit</p>
            </div>
            <div className="flex items-center gap-2">
              <PiCheckLight className="text-[#4f41b6]" />
              <p> Lorem ipsum dolor sit amet adipiscing elit</p>
            </div>
            <div className="flex items-center gap-2">
              <PiCheckLight className="text-[#4f41b6]" />
              <p> Lorem ipsum dolor sit amet adipiscing elit</p>
            </div>
            <div className="flex items-center gap-2">
              <PiCheckLight className="text-[#4f41b6]" />
              <p> Lorem ipsum dolor sit amet adipiscing elit</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
