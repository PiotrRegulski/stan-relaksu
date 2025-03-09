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
    <header className="relative bg-white h-[4rem] lg:hidden w-screen bg-opacity-10 container mx-auto ">
      <div className="flex w-full">
        <div className=" py-1 z-20">
          <Link href="/">
            <div className="ml-3 mr-1 my-1 relative h-[100px] w-[100px] sm:h-[150px] sm:w-[150px]">
              <Image
                src="/logo-stan-relaksu-kolo.png"
              fill
              sizes="(max-width: 600px) 100vw, 50vw"
                className="bg-mainthemelogo rounded-full object-fill"
                alt="Logo gabientu Stan Relaksu"
                priority={true}
              />
            </div>
          </Link>
        </div>
        <div
          
          className="flex-grow flex justify-end mr-4 mt-2 sm:mt-4 z-20 "
        >
          <HamburgerIcon onClick={toggleMenuAndScroll} />
        </div>
      </div>
      <div
        className={`${Noto.className} flex flex-wrap w-full justify-evenly lg:hidden mt-24`}
      >
        <nav
          id="mobile-nav"
          className={`absolute top-0 left-0 w-full lg:hidden z-10 transition-transform duration-200 bg-white
             ease-in-out  ${
            isOpen ? "transform translate-y-0" : "transform -translate-y-full"
          }`}
        >
          <ul
            className={`w-full h-screen flex flex-col mt-6 bg-white p-2 space-y-1 divide-mainpeach lg:flex-row sm:space-y-1 lg:space-x-4 divide-y-2 divide-solid border-b-2 border-mainpeach shadow-lg shadow-mainpeach ${
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
