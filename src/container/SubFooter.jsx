import ReservationForm from "@/components/ReservationForm";
import React from "react";
import { PiBowlFoodThin } from "react-icons/pi";
import { MdOutlineDone } from "react-icons/md";

export default function SubFooter() {
  return (
    <section
      className="w-full min-h-screen"
      style={{
        backgroundImage: `url(${"assets/about/banner12.jpg"})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="w-full absolute insert-0 h-screen bg-black/70"></div>
      <div className=" w-full min-h-screen flex flex-col gap-10 lg:flex-row items-center justify-around font-libre px-5 lg:px-10 absolute insert-0 py-20 md:py-10">
        <div className=" w-full lg:w-1/2 lg:text-start text-white flex flex-col justify-center items-start gap-5">
          <h1 className="text-2xl   font-light tracking-widest ">
            A modern restaurant with a menu that will make your mouth water.
          </h1>

          <div className=" flex items-center ">
            <PiBowlFoodThin size={60} className="text-primary" />
            <div>
              <p className="text-sm text-primary font-libre font-light">
                Reservation
              </p>
              <p className="text-xl font-libre text-white">855 100 4444</p>
            </div>
          </div>
          <div className="flex gap-2 pl-2">
            <MdOutlineDone size={20} />
            <p className="text-sm ">Call us, it's toll-free.</p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 text-center text-white block lg:mt-44">
          <ReservationForm />
        </div>
      </div>
    </section>
  );
}
