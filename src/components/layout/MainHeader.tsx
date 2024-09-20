"use client";
import React from "react";
import { CormorantInfant } from "@/components/fonts";
import Navbar from "./Navbar";
import NavbarMobile from "./NavbarMobile";
import InfoBar from "./InfoBar";
import { useEffect, useState } from "react";
const MainHeader = () => {
  const [isVisible, setIsVisible] = useState(true);

useEffect(() => {
  const handleScroll = () => {
    const offerId = document.getElementById("offer-title");
    if (offerId) {
      const offerPosition = offerId.getBoundingClientRect().top;
      console.log(offerPosition)
      if (offerPosition-864 > 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

  return (
    isVisible &&( <div className="fixed z-40 top-0   ">
      <InfoBar/>
      <header
        className={`${CormorantInfant.className} flex flex-col justify-center bg-white sm:bg-white `}
      >
     
        <NavbarMobile />
        <div className=" flex lg:gap-12 ">
          <div
            className={`${CormorantInfant.className} hidden lg:flex w-screen `}
          >
            <Navbar />
          </div>
        </div>
      </header>
    </div>)
   
  );
};

export default MainHeader;
