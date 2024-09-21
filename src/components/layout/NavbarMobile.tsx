"use client";
import React from "react";
import Image from "next/image";
import { CormorantInfant } from "@/components/fonts";

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
    <>
      <div className=" flex items-center bg-white w-full  lg:hidden ">
        <div className=" py-1  ">
          <Link href={"/"}>
            <div className="ml-3 mr-1 my-1">
              {" "}
              <Image
                src="/logo-stan-relaksu-kolo.png"
                width={65}
                height={65}
                className="bg-mainthemelogo rounded-full "
                alt="Screenshots of the dashboard project showing desktop version"
                priority={true}
              />
            </div>
          </Link>
        </div>
        <div className="mt-1">
          <p className="font-serif leading-4 text-sm ">
            Gabinet terapii <br></br> manualnej i masażu
          </p>
        </div>
        <div onClick={toggleMenuAndScroll} className="flex-grow flex justify-end mr-4 ">
          <HamburgerIcon />
        </div>
      </div>

      {/* <div className=" md:hidden relative w-full flex justify-center ">
        <Image
          src="/logo.png"
          alt="Logo stan relaksu"
          width={200}
          height={200}
          priority
          className="px-2  mt-4"
        />
      </div> */}

      

      <div
        className={`${CormorantInfant.className} flex flex-wrap w-full justify-evenly lg:hidden`}
      >
        <nav id="mobile-nav" className="w-screen lg:hidden">
          <ul
            className={`flex flex-col  bg-white   h-full p-2 space-y-1 divide-primary lg:flex-row sm:space-y-1 lg:space-x-4 divide-y-2 divide divide-solid ${
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
