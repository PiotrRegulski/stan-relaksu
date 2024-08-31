"use client";
import React from "react";
import { CormorantInfant } from "@/components/fonts";
import Navbar from "./Navbar";
import NavbarMobile from "./NavbarMobile";
import InfoBar from "./InfoBar";

const MainHeader = () => {


  return (
    <div className="relative border-b-4 ">
      <InfoBar/>
      <header
        className={`${CormorantInfant.className}fixed flex flex-col justify-center bg-secondary sm:bg-white `}
      >
     
        <NavbarMobile />
        <div className="  flex lg:gap-12 ">
          <div
            className={`${CormorantInfant.className} hidden md:flex w-screen `}
          >
            <Navbar />
          </div>
        </div>
      </header>
    </div>
  );
};

export default MainHeader;
