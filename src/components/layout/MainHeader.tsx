"use client";
import React from "react";
import { CormorantInfant } from "@/components/fonts";
import { useState, useCallback } from "react";
import HamburgerIcon from "@/components/layout/HamburgerIcon";
import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { FaSquareInstagram } from "react-icons/fa6";
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import Navbar from "./Navbar";
import NavbarMobile from "./NavbarMobile";

const MainHeader = () => {
  // const [isOpen, setIsOpen] = useState(false);
  // const toggleMenu = useCallback(() => setIsOpen(!isOpen), [isOpen]);

  return (
    <div className="relative">
      <header
        className={`${CormorantInfant.className}flex flex-col justify-center bg-gradient-to-r from-teal-400/80 via-teal-500/75 to-teal-400/80  py-1 px-1`}
      >
        <NavbarMobile />
        <div className="flex lg:gap-24 ">
          <div
            className={`${CormorantInfant.className} hidden sm:flex w-screen  px-4`}
          >
            <Navbar />
          </div>
        </div>
      </header>
    </div>
  );
};

export default MainHeader;
