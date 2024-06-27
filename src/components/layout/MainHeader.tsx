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

const MainHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = useCallback(() => setIsOpen(!isOpen), [isOpen]);

  return (
    <div className="relative">
      <header
        className={`${CormorantInfant.className}flex flex-col justify-center bg-gradient-to-br from-amber-300/50 via-primary to-amber-300/80  py-1 px-1`}
      >
        <div className="flex">
          <div className="sm:hidden">
            <button onClick={toggleMenu} className="w-15 h-15 mt-3 ml-1 ">
              <HamburgerIcon />
            </button>
          </div>
          <div className=" hidden lg:flex  w-screen font-semibold text-md justify-end px-4 min-w-max py-2">
            <ul className="flex gap-4">
              <li className="pt-1">
                <MdEmail className="w-4 h-4" />
              </li>
              <li> kontat@kontakt.pl</li>
              <li className="pt-1">
                <BsFillTelephoneForwardFill className=" w-4 h-4" />
              </li>
              <li> 000-000-000</li>
            </ul>
          </div>

          <div className=" fixed lg:bottom-24  bottom-4 right-1 z-20">
            <div className="flex flex-col">
              <button className=" lg: hidden  fixed top-5 right-3 w-max rounded-full bg-green-600 py-2 px-2 font-dm text-xl font-medium text-white shadow-xl shadow-green-400/75 transition-transform duration-200 ease-in-out hover:scale-[1.09]">
                <Link href="tel:885987321 ">
                  <BsFillTelephoneForwardFill className="text-right" />
                </Link>
              </button>
              <button className=" fixed top-80 right-2 w-max rounded-full bg-green-600 my-2 py-2 px-2 font-dm text-xl font-medium text-white shadow-xl shadow-green-400/75 transition-transform duration-200 ease-in-out hover:scale-[1.09]">
                <Link
                  href="https://www.instagram.com/stan_relaksu/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaSquareInstagram className="text-right" />
                </Link>
              </button>
              <button className=" fixed top-[18rem] right-2 w-max rounded-full bg-green-600 py-2 px-2 font-dm text-xl font-medium text-white shadow-xl shadow-green-400/75 transition-transform duration-200 ease-in-out hover:scale-[1.09]">
                <Link
                  href="https://www.facebook.com/profile.php?id=61560021160720"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook className="text-right" />
                </Link>
              </button>
              <button className="  animate-fadeIn mt-8 inline-flex items-center justify-center rounded-full bg-green-600 py-3 px-6  font-dm text-sm font-medium text-white shadow-xl shadow-green-400/75 transition-transform duration-400  hover:scale-[1.02]">
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
        </div>

        <div className="flex lg:gap-24 ">
          <div
            className={`${CormorantInfant.className} hidden sm:flex w-screen  px-4`}
          >
            <Navbar />
          </div>
        </div>

        <div
          className={`${CormorantInfant.className} flex  flex-wrap w-full justify-evenly   py-4 px-4 sm:hidden`}
        >
          <nav id="mobile-nav" className="w-screen sm:hidden">
            <ul
              className={`flex flex-col  bg-primary  w-full h-full p-2 space-y-1  sm:flex-row sm:space-y-1 sm:space-x-4 divide-y-4 divide-amber-400/25 divide-solid ${
                isOpen ? "" : "hidden"
              }`}
            >
              <li className=" ">
                <Link
                  href="/"
                  className=" flex justify-center px-1 py-1 text-xl  text-gray-700 bgw-full hover:border-y-2 hover:border-amber-400"
                >
                  Strona główna
                </Link>
              </li>
              <li className=" ">
                <Link
                  href="/about"
                  className=" flex justify-center px-1 py-1 text-xl  text-gray-700 bgw-full hover:border-y-2 hover:border-amber-400"
                >
                  O mnie
                </Link>
              </li>
              <li className=" ">
                <Link
                  href="offer"
                  className=" flex justify-center px-1 py-1 text-xl  text-gray-700 bgw-full hover:border-y-2 hover:border-amber-400"
                >
                  Oferta
                </Link>
              </li>
              <li className=" ">
                <Link
                  href="/contact"
                  className=" flex justify-center px-1 py-1 text-xl  text-gray-700 bgw-full hover:border-y-2 hover:border-amber-400"
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default MainHeader;
