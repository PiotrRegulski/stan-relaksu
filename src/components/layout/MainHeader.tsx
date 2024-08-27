"use client";
import React from "react";
import { CormorantInfant } from "@/components/fonts";
import Script from "next/script";
import Navbar from "./Navbar";
import NavbarMobile from "./NavbarMobile";
import InfoBar from "./InfoBar";

const MainHeader = () => {
  // const [isOpen, setIsOpen] = useState(false);
  // const toggleMenu = useCallback(() => setIsOpen(!isOpen), [isOpen]);

  return (
    <div className="relative border-b-4 ">
      <InfoBar/>
      <header
        className={`${CormorantInfant.className}fixed flex flex-col justify-center bg-secondary sm:bg-white `}
      >
       {/* <Script
          src="https://booksy.com/widget/code.js?id=257898&country=pl&lang=pl"
          strategy="afterInteractive"
        ></Script> */}
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
