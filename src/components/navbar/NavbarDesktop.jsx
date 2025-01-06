import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function NavbarDesktop() {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true); // If scrolled more than 50px, set the background to gray
    } else {
      setScrolled(false); // Otherwise, keep the background transparent or original
    }
  };
  // Add event listener on mount and remove it on unmount
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home" },
    { name: "Menu" },
    { name: "Pages" },
    { name: "Gallery" },
    { name: "Blog" },
    { name: "Contact" },
  ];

  return (
    <div
      className={`hidden font-poppins fixed top-0 left-0 z-[99] lg:flex items-center justify-around w-full py-4 px-5  ${
        scrolled ? "bg-black text-white" : "bg-transparent"
      }`}
    >
      {/* Logo with adjusted positioning */}
      <div className="relative">
        <Image src="/assets/hero/logo.svg" alt="logo" height={80} width={80} />
      </div>
      {/* Navigation Links */}
      <div className="flex items-center justify-center gap-10 pl-28">
        <ul className="flex items-center gap-10 text-white">
          {navLinks.map((link, index) => (
            <li key={index} className="flex items-center gap-2 cursor-pointer">
              <span className="text-sm uppercase hover:text-primary">
                {link.name}
              </span>
            </li>
          ))}
        </ul>

        <button className="text-white text-lg  p-3 w-full bg-gray-900 hover:bg-gray-700 transition-all duration-200">
          Reservations
        </button>
      </div>
    </div>
  );
}
