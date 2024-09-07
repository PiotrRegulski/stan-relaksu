"use client";
import React from "react";
import Image from "next/image";
import { CormorantInfant } from "@/components/fonts";
import Link from "next/link";
import { useState, useCallback } from "react";
import HamburgerIcon from "@/components/layout/HamburgerIcon";
import { FaSquareInstagram } from "react-icons/fa6";
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import MobileNavLinks from "./MobileNavLinks";
import MobileInfoBar from "./MobileInfoBar";
const NavbarMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenuAndScroll = useCallback(() => {
    setIsOpen(!isOpen);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [isOpen]);

  return (
    <>
      <div className=" flex  justify-end  md:hidden ">
        {/* <div className="my-4 ml-3 flex flex-row ">
          <Link href={"/"}>
            <Logo />
          </Link>
        </div> */}

        <button
          onClick={toggleMenuAndScroll}
          className="fixed z-40 w-12 h-12    rounded-full flex justify-center items-center sm:mr-6 sm:mt-2"
        >
          <HamburgerIcon />
        </button>
      </div>
      <div className=" md:hidden relative w-full flex justify-center ">
        <Image
          src="/logo.png"
          alt="Logo stan relaksu"
          width={200}
          height={200}
          priority
          className="px-2  mt-4"
        />
      </div>
      <div
        className={`${CormorantInfant.className} my-4  text-center flex justify-center w-full md:hidden`}
      >
        <p className="font-semibold sm:text-xl md:text-2xl">
          Gabinet terapii manualnej ciała i twarzy.
        </p>
      </div>

     <MobileInfoBar/>

      <div
        className={`${CormorantInfant.className} flex flex-wrap w-full justify-evenly lg:hidden`}
      >
        <nav id="mobile-nav" className="w-screen lg:hidden">
          <ul
            className={`flex flex-col  bg-secondary   h-full p-2 space-y-1  lg:flex-row sm:space-y-1 lg:space-x-4 divide-y-4 divide divide-solid ${
              isOpen ? "" : "hidden"
            }`}
          >
            <MobileNavLinks toggleMenu={toggleMenuAndScroll} />
          </ul>
        </nav>
      </div>
    </>
  );
};

export default NavbarMobile;
