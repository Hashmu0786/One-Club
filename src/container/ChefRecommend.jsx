import Image from "next/image";
import React from "react";
import { PiChefHat } from "react-icons/pi";
import { CiBurger } from "react-icons/ci";

export default function ChefRecommend() {
  // Data array for dishes
  const dishes = [
    {
      id: 1,
      src: "/assets/about/dish2.jpg",
      alt: "Rusty’s Burger",
      title: "Rusty’s Burger",
      description: "Smoked pulled beef ribs, bbq sauce...",
    },
    {
      id: 2,
      src: "/assets/about/dish2.jpg",
      alt: "Rusty’s Burger",
      title: "Rusty’s Burger",
      description: "Smoked pulled beef ribs, bbq sauce...",
    },
    {
      id: 3,
      src: "/assets/about/dish2.jpg",
      alt: "Rusty’s Burger",
      title: "Rusty’s Burger",
      description: "Smoked pulled beef ribs, bbq sauce...",
    },
  ];

  return (
    <section className="w-full min-h-screen bg-secondary">
      <div className="w-full h-full flex flex-col items-center justify-center py-10 lg:px-10 ">
        <div className="flex flex-col gap-5 p-10 w-full items-center justify-center">
          <p className="text-primary font-libre font-light uppercase text-sm">
            should try
          </p>
          <h1 className="text-4xl font-libre text-nowrap">Chef Recommends</h1>
          <div className="w-full flex items-center gap-4 justify-center lg:w-[30%] ">
            <div className="w-[30%] border border-gray-300"></div>
            <PiChefHat size={30} className="text-primary" />
            <div className="w-[30%] border border-gray-300"></div>
          </div>
        </div>

        {/* Map through dishes array to render each dish */}
        <div className=" grid grid-cols-1 lg:grid-cols-3 justify-center gap-8 px-4 lg:px-10">
          {dishes.map((dish) => (
            <div
              key={dish.id}
              className="relative group w-full  flex justify-center items-center"
            >
              <div className=" relative overflow-hidden">
                {/* Image */}
                <Image
                  src={dish.src}
                  alt={dish.alt}
                  height={500}
                  width={400}
                  objectFit="cover"
                  className="transition-all duration-500 group-hover:opacity-80 group-hover:scale-110"
                />

                {/* Overlay with Text */}
                <div className="absolute inset-0 flex flex-col items-center justify-end bg-black/50 py-5 transition-all duration-300 ease-in-out group-hover:pb-8 group-hover:bg-black/60">
                  <CiBurger size={50} className="text-white" />
                  <p className="text-white tracking-widest text-2xl">FOOD</p>
                  <p className="text-white text-2xl font-libre bg-opacity-50 px-4 py-2 rounded-lg">
                    {dish.title}
                  </p>

                  {/* Expanding Border */}
                  <div className="border border-white w-[30%] group-hover:w-[90%] transition-all duration-300 ease-in-out"></div>

                  {/* Additional Text on Hover */}
                  <p className="text-white text-sm text-center py-2 group-hover:py-8 font-libre opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out">
                    {dish.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
