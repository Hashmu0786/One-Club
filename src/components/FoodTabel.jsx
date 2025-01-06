import Image from "next/image";
import React from "react";
import { PiCookingPotLight } from "react-icons/pi";

const data = [
  {
    heading: "Breakfast",
    desc: "  Breakfast ut nisl quam nestibulum drana odio elementum sceisue the can golden varius the dis monte.",
  },
  {
    heading: "Lunch",
    desc: "The Lunch ut nisl quam nestibulum drana odio elementum sceisue the can golden varius the dis monte",
  },
  {
    heading: "Dinner",
    desc: "The Dinner ut nisl quam nestibulum drana odio elementum sceisue the can golden varius the dis monte.",
  },
];

export default function FoodTabel() {
  return (
    <section className="min-h-[40vh] bg-white py-10 lg:py-20">
      <div className="flex flex-col md:flex-row items-center gap-10 px-5 lg:gap-5 lg:px-10 py-5 lg:py-10">
        {data.map((item, index) => (
          <div className="w-full">
            <div className="flex gap-4 items-center">
              <PiCookingPotLight size={60} className="text-primary" />
              <h1 className="text-2xl font-light font-libre">{item.heading}</h1>
            </div>
            <p className="text-sm text-primary/80 font-poppins leading-7 lg:pl-20">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
