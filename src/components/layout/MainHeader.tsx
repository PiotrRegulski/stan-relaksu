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
          <div className="fixed bottom-24  right-4">
            <button className="mt-8 inline-flex items-center justify-center rounded-xl bg-green-600 py-3 px-4 font-dm text-xl font-medium text-white shadow-xl shadow-green-400/75 transition-transform duration-200 ease-in-out hover:scale-[1.02]">
              <Link href="https://booksy.com/"> Zarezerwuj Wizytę</Link>
            </button>
          </div>
        </div>

        <div className="flex justify-center ">
          <Link href="/">
            <Logo />
          </Link>
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
              href="/about"
              className="px-2 mx-5 text-gray-900 font-bold border-y-2 hover:border-y-2 hover:border-amber-400 hover:shadow-lg"
            >
              O mnie
            </Link>
            <Link
              href="/offer"
              className="px-2 mx-5 text-gray-900 font-bold border-y-2 hover:border-y-2 hover:border-amber-400 hover:shadow-lg "
            >
              Oferta
            </Link>
            <Link
              href="/contact"
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
