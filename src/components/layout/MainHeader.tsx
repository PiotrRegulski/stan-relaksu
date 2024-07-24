"use client";
import React from "react";
import { CormorantInfant } from "@/components/fonts";

import Navbar from "./Navbar";
import NavbarMobile from "./NavbarMobile";
import InfoBar from "./InfoBar";

const MainHeader = () => {
  // const [isOpen, setIsOpen] = useState(false);
  // const toggleMenu = useCallback(() => setIsOpen(!isOpen), [isOpen]);

  return (
    <div className="relative">
      <InfoBar/>
      <header
        className={`${CormorantInfant.className}flex flex-col justify-center bg-gradient-to-r from-teal-700/80 via-teal-500/75 to-teal-400/80  py-1 px-1`}
      >
       
        <NavbarMobile />
        <div className="flex lg:gap-24 ">
          <div
            className={`${CormorantInfant.className} hidden lg:flex w-screen  px-4`}
          >
            <Navbar />
          </div>
        </div>
      </header>
    </div>
  );
};

export default MainHeader;
