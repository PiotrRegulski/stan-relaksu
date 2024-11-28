"use client";
import React from "react";
import Image from "next/image";
import { CormorantInfant, Noto } from "@/components/fonts";

import { useState, useCallback } from "react";
import HamburgerIcon from "@/components/layout/HamburgerIcon";
import Link from "next/link";
import MobileNavLinks from "./MobileNavLinks";
const NavbarMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenuAndScroll = useCallback(() => {
    setIsOpen(!isOpen);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [isOpen]);

  return (
    <header className="relative bg-white h-[4rem] lg:hidden w-screen bg-opacity-20">
      <div className="flex w-full">
        <div className="mx-2 py-1 z-20">
          <Link href="/">
            <div className="ml-3 mr-1 my-1">
              <Image
                src="/logo-stan-relaksu-kolo.png"
                width={110}
                height={110}
                className="bg-mainthemelogo rounded-full"
                alt="Logo gabientu Stan Relaksu"
                priority={true}
              />
            </div>
          </Link>
        </div>
        <div
          onClick={toggleMenuAndScroll}
          className="flex-grow flex justify-end mr-4 mt-2 z-40"
        >
          <HamburgerIcon />
        </div>
      </div>
      <div
        className={`${Noto.className} flex flex-wrap w-full justify-evenly lg:hidden`}
      >
        <nav
          id="mobile-nav"
          className={`absolute top-0 left-0 w-full lg:hidden z-30 transition-transform duration-200 bg-black
             ease-in-out  ${
            isOpen ? "transform translate-y-0" : "transform -translate-y-full"
          }`}
        >
          <ul
            className={`w-full h-screen flex flex-col bg-white p-2 space-y-1 divide-mainpeach lg:flex-row sm:space-y-1 lg:space-x-4 divide-y-2 divide-solid border-b-2 border-mainpeach shadow-lg shadow-mainpeach ${
              isOpen ? "" : "hidden"
            }`}
          >
            <MobileNavLinks toggleMenu={toggleMenuAndScroll} />
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavbarMobile;
