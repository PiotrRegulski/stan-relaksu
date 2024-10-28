"use client";
import React from "react";
import Image from "next/image";
import { CormorantInfant,Noto } from "@/components/fonts";

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
    <header className="bg-gradient-to-b from-white from-70%  to-transparent to-30%">
      <div className=" flex    w-full  lg:hidden ">
        <div className=" py-1">
          <Link href={"/"}>
            <div className="ml-3 mr-1 my-1  ">
              {" "}
              <Image
                src="/logo-stan-relaksu-kolo.png"
                width={110}
                height={110}
                className="bg-mainthemelogo rounded-full "
                alt="Screenshots of the dashboard project showing desktop version"
                priority={true}
              />
            </div>
          </Link>
        </div>
        
        <div
          onClick={toggleMenuAndScroll}
          className="flex-grow flex justify-end mr-4 mt-8 "
        >
          <HamburgerIcon />
        </div>
      </div>

      <div
        className={`${Noto.className} flex flex-wrap w-full justify-evenly lg:hidden`}
      >
        <nav id="mobile-nav" className="w-screen lg:hidden">
          <ul
            className={`flex flex-col  bg-white    h-full p-2 space-y-1 divide-mainpeach lg:flex-row sm:space-y-1 lg:space-x-4 divide-y-2 divide divide-solid ${
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
