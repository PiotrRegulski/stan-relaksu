"use client";
import React from "react";

import { CormorantInfant } from "@/components/fonts";
import Logo from "./Logo";
import { useState, useCallback } from "react";
import HamburgerIcon from "@/components/layout/HamburgerIcon";
import Link from "next/link";
import { FaSquareInstagram } from "react-icons/fa6";
import { BsFillTelephoneForwardFill } from "react-icons/bs";

import { usePathname } from "next/navigation";

const MainHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = useCallback(() => setIsOpen(!isOpen), [isOpen]);
  const currentPath = usePathname();

 
  const getLinkClassName = (path: string): string => {
    const formattedCurrentPath = currentPath.replace(/^\//, "");
    return !formattedCurrentPath || !formattedCurrentPath.startsWith(path)
      ? "px-2 mx-5  text-gray-900 font-bold border-y-2 hover:border-y-2 hover:border-amber-400 hover:shadow-lg"
      : " px-2 mx-5  border-y-2 border-amber-400 shadow-lg text-gray-900 font-bold";
  };
  return (
    <div className="relative">
      <header
        className={`${CormorantInfant.className}flex flex-col justify-center bg-primary py-1 px-1`}
      >
     
        <div className="flex justify-between">
          <div className="">
            <button onClick={toggleMenu} className="w-15 h-15 mt-3 ml-1 ">
              <HamburgerIcon />
            </button>
          </div>

          <div className=" fixed sm:bottom-24  bottom-4 right-1 z-20">
            <div className="flex flex-col">
            <button className=" fixed top-5 right-3 w-max rounded-full bg-green-600 py-2 px-2 font-dm text-xl font-medium text-white shadow-xl shadow-green-400/75 transition-transform duration-200 ease-in-out hover:scale-[1.09]">
                <Link href="tel:885987321 "><BsFillTelephoneForwardFill  className="text-right"/></Link>
              </button>
              <button className=" fixed top-20 right-3 w-max rounded-full bg-green-600 py-2 px-2 font-dm text-xl font-medium text-white shadow-xl shadow-green-400/75 transition-transform duration-200 ease-in-out hover:scale-[1.09]">
                <Link href="https://www.instagram.com/stan_relaksu/" target="_blank" rel="noopener noreferrer"><FaSquareInstagram className="text-right"/></Link>
              </button>
              <button className="mt-8 inline-flex items-center justify-center rounded-full bg-green-600 py-3 px-6 font-dm text-xl font-medium text-white shadow-xl shadow-green-400/75 transition-transform duration-200 ease-in-out hover:scale-[1.02]">
                <Link href="https://booksy.com/"  target="_blank" rel="noopener noreferrer"> Zarezerwuj Wizytę</Link>
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-center ">
          <Link href="/">
            <Logo />
          </Link>
        </div>
        
        <div className=" flex  flex-wrap w-full justify-evenly   py-4 px-4">
          <nav
            id="big-Screen-nav"
            className=" sm:flex justify-center  text-xl pt-6 hidden"
          >
            <Link href="/"  className={getLinkClassName("/")}>
              Strona główna
            </Link>
            <Link href="about" className={getLinkClassName("about")}>
              O mnie
            </Link>
            <Link href="offer" className={getLinkClassName("offer")}>
              Oferta
            </Link>
            <Link href="contact" className={getLinkClassName("contact")}>
              Kontakt
            </Link>
          </nav>
          <nav id="mobile-nav" className="w-screen sm:hidden">
            <ul
              className={`  flex flex-col  bg-primary  w-full h-full p-2 space-y-1  sm:flex-row sm:space-y-1 sm:space-x-4 divide-y-4 divide-amber-400/25 divide-solid ${
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
