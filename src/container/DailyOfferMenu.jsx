"use client";

import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

const images = [
  {
    src: "/assets/about/1.jpg",
    tag: "Daily menu dessert",
    title: "India Cheesecake",
    desc: "Cheesecake, strawberry & lime salad",
  },
  {
    src: "/assets/about/2.jpg",
    tag: "Daily menu dessert",
    title: "India Cheesecake",
    desc: "Cheesecake, strawberry & lime salad",
  },
  {
    src: "/assets/about/3.jpg",
    tag: "Daily menu dessert",
    title: "India Cheesecake",
    desc: "Cheesecake, strawberry & lime salad",
  },
];

export default function DailyOfferMenu() {
  // Refs for custom navigation buttons
  const nextButtonRef = useRef(null);
  const prevButtonRef = useRef(null);

  return (
    <div className="w-full min-h-[70vh] md:min-h-[55vh] lg:min-h-[70vh] relative">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={false}
        navigation={{
          nextEl: nextButtonRef.current,
          prevEl: prevButtonRef.current,
        }}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative w-full h-full flex  gap-0  items-center justify-center bg-cover bg-center"
              style={{
                backgroundImage: `url(${image.src})`,
                backgroundAttachment: "fixed",
              }}
            >
              {/* Overlay with Opacity */}
              <div className="absolute inset-0 bg-black opacity-50"></div>

              {/* Text Content */}
              <div className="relative z-10 text-center text-white font-libre py-40 ">
                <div className="flex flex-col gap-4 ">
                  <p className="text-sm tracking-wider text-primary">
                    {image.tag}
                  </p>
                  <h1 className="text-2xl md:text-5xl font-bold">
                    {image.title}
                  </h1>
                  <p className="text-sm md:text-base font-poppins">
                    {image.desc}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div className="hidden lg:block">
        <button
          ref={prevButtonRef}
          className="swiper-button-prev absolute  top-1/2 left-4 transform -translate-y-1/2  border-2 border-white rounded-full p-5  "
        ></button>
        <button
          ref={nextButtonRef}
          className="swiper-button-next absolute top-1/2 right-4 transform -translate-y-1/2  border-2 border-white rounded-full p-5 hover:bg-black/70 "
        ></button>
      </div>
    </div>
  );
}
