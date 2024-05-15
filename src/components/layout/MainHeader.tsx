"use client";
import React from "react";

import { CormorantInfant } from "@/components/fonts";
import Logo from "./Logo";
import { useState, useCallback } from "react";
import HamburgerIcon from "@/components/layout/HamburgerIcon";
import Link from "next/link";
import HomepageImage from "../homepage/HomepageImage";
const MainHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = useCallback(() => setIsOpen(!isOpen), [isOpen]);
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
          <div className="fixed bottom-2  right-4">
            <button className=" shadow-xl border-2 border-lime-500 bg-lime-300 bg-opacity-25 hover:bg-lime-500 hover:bg-opacity-45 text-amber-950 mt-1 px-4 py-3 rounded-full font-bold sm:text-2xl tracking-wide">
              Zarezerwuj Wizytę
            </button>
          </div>
        </div>

        <div className="flex justify-center ">
          <Logo />
        </div>

        <div className=" flex  flex-wrap w-full justify-evenly   py-4 px-4">
          <nav className=" sm:flex justify-center  text-xl pt-6 hidden">
            <Link
              href="/"
              className="px-2 mx-5  text-gray-900 font-bold border-y-2 hover:border-y-2 hover:border-amber-400 hover:shadow-lg"
            >
              Strona główna
            </Link>
            <Link
              href="# "
              className="px-2 mx-5 text-gray-900 font-bold border-y-2 hover:border-y-2 hover:border-amber-400 hover:shadow-lg"
            >
              O mnie
            </Link>
            <Link
              href="#"
              className="px-2 mx-5 text-gray-900 font-bold border-y-2 hover:border-y-2 hover:border-amber-400 hover:shadow-lg "
            >
              Oferta
            </Link>
            <Link
              href="#"
              className="px-2 mx-5 text-gray-900 font-bold  border-y-2 hover:border-y-2 hover:border-amber-400 hover:shadow-lg"
            >
              Kontakt
            </Link>
          </nav>
          <nav className="w-screen sm:hidden">
            <ul
              className={`  flex flex-col  bg-primary  w-full h-full p-2 space-y-1  sm:flex-row sm:space-y-1 sm:space-x-4 divide-y-4 divide-amber-400/25 divide-solid ${
                isOpen ? "" : "hidden"
              }`}
            >
              <li className=" ">
                <Link
                  href="#"
                  className=" flex justify-center px-1 py-1 text-xl  text-gray-700 bgw-full hover:border-y-2 hover:border-amber-400"
                >
                  Strona główna
                </Link>
              </li>
              <li className=" ">
                <Link
                  href="#"
                  className=" flex justify-center px-1 py-1 text-xl  text-gray-700 bgw-full hover:border-y-2 hover:border-amber-400"
                >
                  O mnie
                </Link>
              </li>
              <li className=" ">
                <Link
                  href="#"
                  className=" flex justify-center px-1 py-1 text-xl  text-gray-700 bgw-full hover:border-y-2 hover:border-amber-400"
                >
                  Oferta
                </Link>
              </li>
              <li className=" ">
                <Link
                  href="#"
                  className=" flex justify-center px-1 py-1 text-xl  text-gray-700 bgw-full hover:border-y-2 hover:border-amber-400"
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <HomepageImage />
        </div>
      </header>
    </div>
  );
};

export default MainHeader;
