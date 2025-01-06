import React from "react";
import { PiBowlFoodThin } from "react-icons/pi";
import Image from "next/image";
import { CiBurger } from "react-icons/ci";

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

const cardData = [
  {
    src: "/assets/about/dish2.jpg",
    title: "Address of Taste",
    subtitle: "Fresh Ingredient Meals",
    icon: ":stew:",
  },
  {
    src: "/assets/about/dish2.jpg",
    title: "Executive Chefs",
    subtitle: "Senior & Talented Chefs",
    icon: ":male-cook:",
  },
  {
    src: "/assets/about/dish2.jpg",
    title: "Special Menu",
    subtitle: "Signature Dishes",
    icon: ":star:",
  },
];

export default function Feature() {
  return (
    <section className="w-full min-h-screen bg-gray-900">
      <div className="w-full h-full flex flex-col items-center justify-center py-10 lg:px-10">
        <div className="flex flex-col gap-5 p-10 w-full items-center justify-center">
          <p className="text-primary font-libre font-light uppercase text-sm">
            First-class
          </p>
          <h1 className="text-4xl font-libre text-nowrap text-white">
            Our Features
          </h1>
          <div className="w-full flex items-center gap-4 justify-center lg:w-[30%]">
            <div className="w-[30%] border border-gray-400"></div>
            <PiBowlFoodThin size={30} className="text-primary" />
            <div className="w-[30%] border border-gray-400"></div>
          </div>
        </div>

        <div className=" grid grid-cols-1  gap-5 lg:grid-cols-3 gap-x-5 p-0 w-full min-h-[70vh] transition-all duration-500 ease-in-out">
          {cardData.map((item, index) => (
            <div
              key={index}
              className="card-container !max-w-full group w-full h-[60vh] lg:h-full px-5 lg:px-0 "
            >
              <div className="card-inner relative w-full h-full transition-transform duration-500 ease-out group-hover:transform-hover">
                <div className="card-front absolute h-full bg-black overflow-hidden shadow-lg rounded-xl">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    objectFit="cover"
                    className="opacity-70 transition-opacity duration-500 ease-out group-hover:opacity-100 rounded-xl"
                  />
                  <div className="badge relative top-4 left-4 text-white font-bold px-2 py-1 rounded-full">
                    <Image
                      src="/assets/hero/neww.png"
                      alt="new"
                      height={60}
                      width={60}
                    />
                  </div>

                  <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-5 text-center font-libre transition-transform duration-500 ease-out group-hover:translate-x-3">
                    <PiBowlFoodThin size={40} className="text-white" />

                    <p className="tracking-widest text-primary text-sm">
                      CURRENT MENU
                    </p>

                    <h1 className="text-white text-nowrap text-xl">
                      DAILY NEW FRESH MENU
                    </h1>
                  </div>
                </div>

                <div className="card-back absolute w-full h-full bg-secondary text-black flex flex-col justify-center items-center gap-4 px-5 text-center  transform rotate-y-180 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out font-libre">
                  <p className="text-primary tracking-widest text-sm text-center">
                    Executive Chefs
                  </p>
                  <h1 className="text-2xl text-black text-center">
                    Senior & Talented Chefs{" "}
                  </h1>
                  <p className=" text-sm leading-7 text-primary">
                    Lorem nisl miss nestibulum nec odio duru the aucan ula orci
                    varius natoque enatau manis dis arturient monte miss
                    morbine.
                  </p>
                  <button className="bg-transparent border border-black py-3 px-6 hover:bg-black hover:text-white transition-all duration-300 ease-in-out">
                    OUR CHEF
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full h-[50vh] bg-white -mt-[40vh] -z-10 hidden lg:block"></div>
    </section>
  );
}
