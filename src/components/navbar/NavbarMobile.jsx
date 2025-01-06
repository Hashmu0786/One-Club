"use client";

import React, { useState } from "react";
import { HiMiniBars3 } from "react-icons/hi2";

import Image from "next/image";

export default function NavbarMobile() {
  const [showSidebar, setShowSidebar] = useState(false); // Sidebar visibility state

  const toggleSidebar = () => setShowSidebar((prev) => !prev); // Toggle sidebar visibility

  const navLinks = [
    { name: "Home" },
    { name: "Menu" },
    { name: "Pages" },
    { name: "Gallery" },
    { name: "Blog" },
    { name: "Contact" },
  ];

  return (
    <div className="w-full h-full fixed flex flex-col items-center justify-between z-40 lg:hidden font-anuphan">
      <div className=" absolute w-full flex items-center justify-between  bg-black px-2 py-4 h-24">
        <Image src="/assets/hero/logo.svg" alt="logo" height={80} width={80} />
        <div className="flex items-center gap-5">
          <button className="text-white text-sm  p-3 w-full bg-gray-900 rounded-md transition-all duration-200">
            Reservations
          </button>
          <HiMiniBars3
            onClick={toggleSidebar}
            size={50}
            className="text-white"
          />
        </div>
      </div>
      {showSidebar && (
        <div className=" absolute  flex top-24 flex-col items-start p-3 py-5 space-y-4 text-white w-full bg-gray-900">
          {navLinks.map((link, index) => (
            <span
              key={index}
              className="text-lg  w-full pb-2 last:border-b-0 hover:text-primary"
            >
              {link.name}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
