import NavbarDesktop from "@/components/navbar/NavbarDesktop";
import NavbarMobile from "@/components/navbar/NavbarMobile";
import React from "react";
import HeroSection from "./HeroSection";

export default function Navbar() {
  return (
    <div className="w-full  font-poppins ">
      <NavbarMobile />
      <NavbarDesktop />
      {/* <HeroSection /> */}
    </div>
  );
}
