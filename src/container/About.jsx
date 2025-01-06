import Image from "next/image";
import React from "react";
import { PiBowlFoodThin } from "react-icons/pi";

export default function About() {
  return (
    <section className="w-full min-h-screen  ">
      <div className="w-full h-full flex flex-col gap-5 lg:flex-row  justify-between items-center py-20 bg-secondary/10 px-5 lg:px-10 ">
        <div className="w-full lg:w-1/2 flex flex-col items-start gap-5">
          <p className="text-sm tracking-widest">Candóre Restaurant</p>
          <h1 className="text-2xl md:text-4xl font-light font-libre tracking-widest text-nowrap">
            Few Words About Us
          </h1>
          <p className="text-sm font-poppins leading-7 text-gray-500 ">
            Restaurant vulputate massa sit amet ravida haretra nuam enim mi
            obortis eset uctus enec accumsan eu justo aliquam sit amet auctor
            orci donec vitae vehicula risus duise nunc sapien, accumsan id
            mauris ac ullamcorper rutrum asiquam congue nie ipsum auctor
            frinilla donec finibus sapien ut leo cursus ullamco.
          </p>
          <p className="text-sm font-poppins leading-8 text-gray-500  ">
            Wine porta laoreet ante, luctus maximus ipsum blandit eget. Integer
            mollis eniman metus, eget consequat enim commodo eduis id magna arcu
            duis nec elit praesent convallis et justo nec tristique sapien quis.
          </p>
          <div className=" flex items-center ">
            <PiBowlFoodThin size={60} className="text-primary" />
            <div>
              <p className="text-sm text-primary font-libre font-light">
                Reservation
              </p>
              <p className="text-xl font-libre text-black">855 100 4444</p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center gap-5">
          <div className="relative">
            <Image
              src="/assets/about/dish1.jpg"
              alt="dish"
              height={500}
              width={250}
              className="mt-28"
            />
          </div>
          <div className="relative">
            <Image
              src="/assets/about/dish1.jpg"
              alt="dish"
              height={500}
              width={250}
              className=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
