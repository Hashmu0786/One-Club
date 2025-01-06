// import Image from "next/image";
// import React from "react";
// import { IoStar } from "react-icons/io5";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import "swiper/css";
// import { CiLocationOn } from "react-icons/ci";

// const reviews = [
//   {
//     image: "/assets/about/rev1.jpg",
//     name: "Hasmuddin Ali",
//     role: "Customer Review",
//     description:
//       "Restaurant dapibus asue metus the nec feusiate eraten miss hendreri net ve ante the lemon sanleo nectan feugiat erat hendrerit necuis ve ante otel inilla duiman at finibus viverra neca the sene on satien.",
//   },
//   // Duplicate for a total of 5 reviews
//   {
//     image: "/assets/about/rev1.jpg",
//     name: "Hasmuddin Ali",
//     role: "Customer Review",
//     description:
//       "Restaurant dapibus asue metus the nec feusiate eraten miss hendreri net ve ante the lemon sanleo nectan feugiat erat hendrerit necuis ve ante otel inilla duiman at finibus viverra neca the sene on satien.",
//   },
//   {
//     image: "/assets/about/rev1.jpg",
//     name: "Hasmuddin Ali",
//     role: "Customer Review",
//     description:
//       "Restaurant dapibus asue metus the nec feusiate eraten miss hendreri net ve ante the lemon sanleo nectan feugiat erat hendrerit necuis ve ante otel inilla duiman at finibus viverra neca the sene on satien.",
//   },
//   {
//     image: "/assets/about/rev1.jpg",
//     name: "Hasmuddin Ali",
//     role: "Customer Review",
//     description:
//       "Restaurant dapibus asue metus the nec feusiate eraten miss hendreri net ve ante the lemon sanleo nectan feugiat erat hendrerit necuis ve ante otel inilla duiman at finibus viverra neca the sene on satien.",
//   },
//   {
//     image: "/assets/about/rev1.jpg",
//     name: "Hasmuddin Ali",
//     role: "Customer Review",
//     description:
//       "Restaurant dapibus asue metus the nec feusiate eraten miss hendreri net ve ante the lemon sanleo nectan feugiat erat hendrerit necuis ve ante otel inilla duiman at finibus viverra neca the sene on satien.",
//   },
// ];

// export default function ReviewSection() {
//   return (
//     <section
//       className="w-full min-h-screen relative"
//       style={{
//         backgroundImage: `url(${"assets/about/banner5.jpg"})`,
//         backgroundPosition: "center",
//         backgroundSize: "cover",
//         backgroundRepeat: "no-repeat",
//         backgroundAttachment: "fixed",
//       }}
//     >
//       <div className="w-full absolute inset-0 h-screen bg-black/70"></div>
//       <div className="relative w-full h-full z-10 flex items-center justify-between px-10 py-14">
//         {/* Swiper Section */}
//         <div className="w-1/2 flex items-center justify-center">
//           <Swiper
//             modules={[Autoplay]}
//             autoplay={{ delay: 3000 }}
//             loop={true}
//             className="w-[75%]"
//           >
//             {reviews.map((review, index) => (
//               <SwiperSlide key={index}>
//                 <div className="w-full flex flex-col gap-5 items-start font-libre">
//                   <div className="flex gap-1">
//                     {[...Array(5)].map((_, i) => (
//                       <IoStar key={i} size={20} className="text-yellow-500" />
//                     ))}
//                   </div>
//                   <p className="text-sm text-white leading-7 font-poppins">
//                     {review.description}
//                   </p>
//                   <div className="flex gap-4 items-center">
//                     <div className="relative border-2 border-white rounded-full">
//                       <Image
//                         src={review.image}
//                         alt={review.name}
//                         height={60}
//                         width={60}
//                         className="rounded-full p-1"
//                       />
//                     </div>
//                     <div className="flex flex-col items-center gap-2 font-poppins">
//                       <p className="text-primary text-sm">{review.name}</p>
//                       <p className="text-white text-xs">{review.role}</p>
//                     </div>
//                   </div>
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>

//         {/* Information Section */}
//         <div className="w-1/2  p-8 rounded-lg mx-auto font-libre ">
//           <div className="flex flex-col items-center  justify-center bg-black ">
//             <h1 className=" text-2xl text-center text-primary py-5 ">
//               Opening Hours
//             </h1>

//             <hr />
//             <div className="flex items-center justify-between gap-5 py-5 px-10">
//               <div className="flex flex-col items-center gap-5">
//                 <h2 className="text-white font-poppins text-sm font-light">
//                   Sunday to Tuesday
//                 </h2>
//                 <p className="text-gray-400 text-lg">10:00</p>
//                 <p className="text-gray-400 text-lg">22:00</p>
//               </div>
//               <div className="h-16 border-l border-primary"></div>
//               <div className="flex flex-col items-center gap-5">
//                 <h2 className="text-white font-poppins text-sm font-light">
//                   Wednesday or Sunday
//                 </h2>
//                 <p className="text-gray-400 text-lg">10:00</p>
//                 <p className="text-gray-400 text-lg">22:00</p>
//               </div>
//             </div>
//             <button className=" text-center mt-4 border border-primary bg-transparent text-primary hover:bg-primary hover:text-white transition-all duration-300 ease-in-out py-2 px-10 ">
//               Make A RESERVATION
//             </button>
//             <div className="mt-5 text-white font-poppins px-14 pt-5 pb-10">
//               <p className="text-sm text-center">
//                 You can also call: 855 100 4444 to make a reservation. 1616
//                 <span className="inline-block text-primary ml-1">
//                   <CiLocationOn size={20} className="pt-1" />
//                 </span>
//                 Broadway NY, New York 10001 USA
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import Image from "next/image";
import React from "react";
import { IoStar } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { CiLocationOn } from "react-icons/ci";

const reviews = [
  {
    image: "/assets/about/rev1.jpg",
    name: "Hasmuddin Ali",
    role: "Customer Review",
    description:
      "Restaurant dapibus asue metus the nec feusiate eraten miss hendreri net ve ante the lemon sanleo nectan feugiat erat hendrerit necuis ve ante otel inilla duiman at finibus viverra neca the sene on satien.",
  },
  // Duplicate for a total of 5 reviews
  {
    image: "/assets/about/rev1.jpg",
    name: "Hasmuddin Ali",
    role: "Customer Review",
    description:
      "Restaurant dapibus asue metus the nec feusiate eraten miss hendreri net ve ante the lemon sanleo nectan feugiat erat hendrerit necuis ve ante otel inilla duiman at finibus viverra neca the sene on satien.",
  },
  {
    image: "/assets/about/rev1.jpg",
    name: "Hasmuddin Ali",
    role: "Customer Review",
    description:
      "Restaurant dapibus asue metus the nec feusiate eraten miss hendreri net ve ante the lemon sanleo nectan feugiat erat hendrerit necuis ve ante otel inilla duiman at finibus viverra neca the sene on satien.",
  },
  {
    image: "/assets/about/rev1.jpg",
    name: "Hasmuddin Ali",
    role: "Customer Review",
    description:
      "Restaurant dapibus asue metus the nec feusiate eraten miss hendreri net ve ante the lemon sanleo nectan feugiat erat hendrerit necuis ve ante otel inilla duiman at finibus viverra neca the sene on satien.",
  },
  {
    image: "/assets/about/rev1.jpg",
    name: "Hasmuddin Ali",
    role: "Customer Review",
    description:
      "Restaurant dapibus asue metus the nec feusiate eraten miss hendreri net ve ante the lemon sanleo nectan feugiat erat hendrerit necuis ve ante otel inilla duiman at finibus viverra neca the sene on satien.",
  },
];
export default function ReviewSection() {
  return (
    <section
      className="w-full min-h-screen lg:h-screen relative"
      style={{
        backgroundImage: `url(${"assets/about/banner5.jpg"})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="w-full absolute inset-0 min-h-screen bg-black/70"></div>
      <div className="relative w-full h-full z-10 flex flex-col lg:flex-row items-center justify-between  lg:px-10  py-10 md:py-20 lg:py-14">
        {/* Swiper Section */}
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3000 }}
            loop={true}
            className="w-[75%]"
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={index}>
                <div className="w-full flex flex-col gap-5 items-start font-libre">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <IoStar key={i} size={20} className="text-yellow-500" />
                    ))}
                  </div>
                  <p className="text-sm text-white leading-7 font-poppins">
                    {review.description}
                  </p>
                  <div className="flex gap-4 items-center">
                    <div className="relative border-2 border-white rounded-full">
                      <Image
                        src={review.image}
                        alt={review.name}
                        height={60}
                        width={60}
                        className="rounded-full p-1"
                      />
                    </div>
                    <div className="flex flex-col items-center gap-2 font-poppins">
                      <p className="text-primary text-sm">{review.name}</p>
                      <p className="text-white text-xs">{review.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Information Section */}
        <div className="w-full lg:w-1/2 p-8 rounded-lg mx-auto font-libre translate-y-10 lg:translate-y-20 ">
          <div className="flex flex-col items-center justify-center bg-black lg:py-20 ">
            <h1 className="text-2xl text-center text-primary py-5 ">
              Opening Hours
            </h1>

            <hr />
            <div className="flex items-center justify-between gap-5 py-5 px-10">
              <div className="flex flex-col items-center gap-5">
                <h2 className="text-white font-poppins text-sm font-light">
                  Sunday to Tuesday
                </h2>
                <p className="text-gray-400 text-lg">10:00</p>
                <p className="text-gray-400 text-lg">22:00</p>
              </div>
              <div className="h-16 border-l border-primary"></div>
              <div className="flex flex-col items-center gap-5">
                <h2 className="text-white font-poppins text-sm font-light">
                  Wednesday or Sunday
                </h2>
                <p className="text-gray-400 text-lg">10:00</p>
                <p className="text-gray-400 text-lg">22:00</p>
              </div>
            </div>
            <button className="text-center mt-4 border border-primary bg-transparent text-primary hover:bg-primary hover:text-white transition-all duration-300 ease-in-out py-2 px-10 ">
              Make A RESERVATION
            </button>
            <div className="mt-5 text-white font-poppins px-5 md:px-14 pt-5 pb-10">
              <p className="text-sm text-center">
                You can also call: 855 100 4444 to make a reservation. 1616
                <span className="inline-block text-primary ml-1">
                  <CiLocationOn size={20} className="pt-1" />
                </span>
                Broadway NY, New York 10001 USA
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
