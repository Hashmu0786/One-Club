"use client";
import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { IoPlayOutline } from "react-icons/io5";

export default function VideoSection() {
  // State to control the modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Dummy YouTube video link (you can replace this with any video URL)
  const videoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ";

  // Function to handle modal open
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to handle modal close
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section
      className="w-full min-h-[60vh] relative"
      style={{
        backgroundImage: `url(${"/assets/about/demo.jpg"})`, // Updated to use the correct path
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="w-full h-full absolute inset-0 bg-black/40"></div>

      <div className="w-full h-full absolute inset-0 flex items-center justify-center font-libre px-5 lg:px-10">
        <div className="text-center lg:text-start text-white flex flex-col justify-center items-center gap-5">
          <p className="text-xs tracking-widest">Amazing Experience</p>
          <h1 className="text-2xl md:text-4xl font-light tracking-widest text-nowrap">
            Watch Our Video
          </h1>

          <button
            onClick={openModal}
            className="mt-4 p-5 w-fit rounded-full text-white tracking-widest border-2 border-white group hover:border-primary bg-transparent hover:scale-75 transition-all duration-200 ease-in-out"
          >
            <IoPlayOutline
              size={40}
              className="group-hover:text-primary group-hover:scale-75"
            />
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 top-24 flex items-center justify-center bg-black bg-opacity-60 z-50"
          onClick={closeModal} // Close the modal when clicking outside the video
        >
          <div
            className="relative bg-black rounded-lg  w-11/12 md:w-2/3 lg:w-1/2"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >
            <iframe
              className="w-full h-[400px]"
              src={videoUrl}
              title="Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <button
              onClick={closeModal}
              className="absolute -top-10 -right-5 text-black bg-white rounded-full p-1"
            >
              <RxCross2 size={20} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
