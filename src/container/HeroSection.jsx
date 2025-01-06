// // import React from "react";
// // import { Swiper, SwiperSlide } from "swiper/react";
// // import "swiper/css";
// // import { Autoplay } from "swiper/modules";
// // // import top1 from "/assets/hero/top1.jpg";

// // const data = [
// //   "/assets/hero/top1.jpg",
// //   "/assets/hero/top2.jpg",
// //   "/assets/hero/top3.jpg",
// // ];

// // const HeroSection = () => {
// //   return (
// //     <div className="w-full min-h-screen relative">
// //       <Swiper
// //         spaceBetween={0}
// //         centeredSlides={true}
// //         autoplay={{
// //           delay: 2500,
// //           disableOnInteraction: false,
// //         }}
// //         loop={true}
// //         modules={[Autoplay]}
// //         className="w-full h-full text-white bg-gray-400"
// //       >
// //         {data?.map((item, i) => (
// //           <SwiperSlide key={i}>
// //             <div className="w-full h-full relative">
// //               {/* Background Image with Overlay and Gradient */}
// //               <div
// //                 className="w-full h-full bg-cover bg-center flex items-center justify-center relative"
// //                 style={{
// //                   backgroundImage: `url(${item})`,
// //                   backgroundPosition: "center",
// //                   backgroundSize: "cover",
// //                   backgroundRepeat: "no-repeat",
// //                 }}
// //               >
// //                 {/* Adjust overlay opacity for better visibility */}
// //                 <div className="absolute w-full h-full bg-gray-900 opacity-50 z-10"></div>
// //                 {/* Content with adjusted z-index */}
// //                 <div className="absolute z-20 flex flex-col items-center text-center text-white inset-0 mt-20">
// //                   <h1 className="text-4xl font-bold">Welcome to Candóre</h1>
// //                   <p className="mt-2 text-lg">Restaurant & Wine Bar</p>
// //                   <p>1616 Broadway NY, New York</p>
// //                   <button className="mt-4 px-4 py-2 bg-primary text-white rounded-lg">
// //                     Check out menu
// //                   </button>
// //                 </div>
// //               </div>
// //             </div>
// //           </SwiperSlide>
// //         ))}
// //       </Swiper>
// //     </div>
// //   );
// // };

// // export default HeroSection;

// import ReservationForm from "@/components/ReservationForm";
// import React from "react";

// export default function HeroSection() {
//   return (
//     <section
//       className="w-full min-h-screen "
//       style={{
//         backgroundImage: `url(${"assets/hero/top1.jpg"})`,
//         backgroundPosition: "center",
//         backgroundSize: "cover",
//         backgroundRepeat: "no-repeat",
//       }}
//     >
//       <div className="w-full absolute insert-0 h-screen bg-black/40"></div>
//       <div className=" w-full min-h-screen flex items-center justify-around font-libre px-5 lg:px-10 absolute insert-0 ">
//         <div className=" w-full lg:w-1/2 lg:text-start text-white flex flex-col justify-center items-center gap-5">
//           <p className="text-xs tracking-widest">Est. 1895</p>
//           <h1 className="text-2xl md:text-4xl  font-light tracking-widest text-nowrap">
//             Welcome to Candóre
//           </h1>
//           <p className=" text-xl md:text-2xl text-primary font-light">
//             Restaurant & Wine Bar
//           </p>
//           <p className="text-sm font-poppins">1616 Broadway NY, New York</p>
//           <button className="mt-4 px-4 w-fit py-2 hover:bg-primary text-white tracking-widest  border border-primary bg-transparent">
//             Check out menu
//           </button>
//         </div>
//         <div className="w-1/2 text-center text-white hidden lg:block">
//           {/* <h1 className="text-4xl font-bold">Welcome to Candóre</h1>
//           <p>Restaurant & Wine Bar</p>
//           <p>1616 Broadway NY, New York</p>
//           <button className="mt-4 px-4 py-2 bg-primary text-white rounded-lg">
//             Check out menu
//           </button> */}
//           <ReservationForm />
//         </div>
//       </div>
//     </section>
//   );
// }

import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import ReservationForm from "@/components/ReservationForm";

export default function HeroSection() {
  const images = [
    "/assets/hero/top1.jpg",
    "/assets/hero/top2.jpg",
    "/assets/hero/top3.jpg",
  ];
  return (
    <section className="w-full min-h-screen ">
      <div className="w-full min-h-screen relative ">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000 }}
          loop={true}
          slidesPerView={1}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  minHeight: "100vh",
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="w-full absolute left-0 z-10 insert-0 top-0 h-full lg:min-h-screen bg-black/60"></div>
      <div className=" w-full min-h-screen flex items-center justify-around font-libre px-5 lg:px-10 absolute top-0 left-0 z-10 insert-0">
        <div className="  w-full lg:w-1/2 lg:text-start text-white flex flex-col justify-center items-center lg:items-start gap-5">
          <p className="text-xs tracking-widest">Est. 1895</p>
          <h1 className="text-2xl md:text-4xl  font-light tracking-widest text-nowrap">
            Welcome to Candóre
          </h1>
          <p className=" text-xl md:text-2xl text-primary font-light">
            Restaurant & Wine Bar
          </p>
          <p className="text-sm font-poppins">1616 Broadway NY, New York</p>
          <button className="mt-4 overflow-hidden relative px-4 w-fit py-2 group text-white tracking-widest  border border-primary bg-transparent">
            <span className="absolute -top-10 left-0 h-full w-0 rounded-sm bg-primary transition-all ease-in-out duration-200 z-0 shadow-lg group-hover:w-full group-hover:top-0"></span>
            <span className="relative z-10">Check out menu</span>
          </button>
        </div>
        <div className="w-1/2 text-center text-white hidden lg:block lg:pt-20">
          <ReservationForm />
        </div>
      </div>
    </section>
  );
}
