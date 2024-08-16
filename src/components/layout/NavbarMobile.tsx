"use client";
import React from "react";
import { CormorantInfant } from "@/components/fonts";
import Link from "next/link";
import { useState, useCallback } from "react";
import HamburgerIcon from "@/components/layout/HamburgerIcon";
import { FaSquareInstagram } from "react-icons/fa6";
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import MobileNavLinks from "./MobileNavLinks";
import Logo from "./Logo";
const NavbarMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = useCallback(() => setIsOpen(!isOpen), [isOpen]);
  return (
    <>
      <div className=" flex justify-between  md:hidden ">
        <div className="my-4 ml-3 ">
          <Link href={"/"}>
            <Logo />
          </Link>
        </div>
        <div className={`${CormorantInfant.className} my-4  text-center flex items-center`}>
          <p>Gabinet terapii manualnej ciała i twarzy.</p>
        </div>
        <button onClick={toggleMenu} className="w-12 h-12 my-4 ml-3">
          <HamburgerIcon />
        </button>
      </div>

      <div className="lg:hidden fixed grid grid-cols-4 gap-1 bottom-[0] z-40 bg-primary w-screen h-[4rem]  ">
        <button className="animate-fadeIn   text-sm font-medium text-white shadow-lg shadow-gray-400/75 transition-transform duration-400  hover:scale-[1.02]">
          <Link
            href="https://booksy.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              Zarezerwuj<br></br> Wizytę
            </div>
          </Link>
        </button>
        <button className=" lg:hidden   w-full  text-white shadow-xl  transition-transform duration-200 ease-in-out hover:scale-[1.09] ">
          <div className="flex justify-center">
            {" "}
            <Link href="tel:885987321 ">
              <BsFillTelephoneForwardFill className="text-center " />
            </Link>
          </div>
        </button>
        <button className="  text-white shadow-xl  transition-transform duration-200 ease-in-out hover:scale-[1.09] w-full">
          <div className="flex justify-center">
            {" "}
            <Link
              href="https://www.instagram.com/stan_relaksu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSquareInstagram className="text-right" />
            </Link>
          </div>
        </button>
        <button className="    text-white shadow-xl  transition-transform duration-200 ease-in-out hover:scale-[1.09] w-full">
          <div className="flex justify-center">
            {" "}
            <Link
              href="https://www.facebook.com/profile.php?id=61560021160720"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-right" />
            </Link>
          </div>
        </button>
      </div>

      <div
        className={`${CormorantInfant.className} flex flex-wrap w-full justify-evenly xl:hidden`}
      >
        <nav id="mobile-nav" className="w-screen xl:hidden">
          <ul
            className={`flex flex-col  bg-teal-950/25   h-full p-2 space-y-1  lg:flex-row sm:space-y-1 lg:space-x-4 divide-y-4 divide-teal-900/50 divide-solid ${
              isOpen ? "" : "hidden"
            }`}
          >
            <MobileNavLinks />
          </ul>
        </nav>
      </div>
    </>
  );
};

export default NavbarMobile;
