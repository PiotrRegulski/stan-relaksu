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
      <div className="flex">
        <div className="block xl:hidden">
          <button onClick={toggleMenu} className="w-12 h-12 mt-3 ml-3">
            <HamburgerIcon />
          </button>
          <div className="w-screen">
            <div>
              <Link href={"/"}>
                <div className="flex justify-center">
                  <Logo />
                </div>
              </Link>
            </div>
            <p className=" mx-4 lg:mx-auto font-semibold text-xl leading-none text-center text-white pt-3 ">
              Gabinet terapii manualnej ciała i twarzy,<br></br> odprężenie ciała i
              ukojenie duszy.<br></br> Pozwól sobie na<strong>Stan Relaksu</strong> 
            </p>
          </div>
        </div>

        <div className="lg:hidden fixed flex flex-col top-[2em] sm:top-10 right-[1em] z-20  ">
          <button className=" lg:hidden   rounded-full bg-green-600 py-3 px-3 text-white shadow-xl shadow-green-400/75 transition-transform duration-200 ease-in-out hover:scale-[1.09] w-min">
            <Link href="tel:885987321 ">
              <BsFillTelephoneForwardFill className="text-right" />
            </Link>
          </button>
          <button className=" rounded-full bg-green-600  py-3 px-3 my-2 text-white shadow-xl shadow-green-400/75 transition-transform duration-200 ease-in-out hover:scale-[1.09] w-min">
            <Link
              href="https://www.instagram.com/stan_relaksu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSquareInstagram className="text-right" />
            </Link>
          </button>
          <button className=" rounded-full bg-green-600  py-3 px-3  text-white shadow-xl shadow-green-400/75 transition-transform duration-200 ease-in-out hover:scale-[1.09] w-min">
            <Link
              href="https://www.facebook.com/profile.php?id=61560021160720"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-right" />
            </Link>
          </button>
        </div>
        <div className="lg:hidden fixed bottom-[2em] right-[1em] z-20">
          <button className="animate-fadeIn mt-8 inline-flex items-center justify-center rounded-full bg-green-600 py-3 px-6  font-dm text-sm font-medium text-white shadow-lg shadow-gray-400/75 transition-transform duration-400  hover:scale-[1.02]">
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
        </div>
      </div>

      <div
        className={`${CormorantInfant.className} flex  flex-wrap w-full justify-evenly   py-4 px-4 xl:hidden`}
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
