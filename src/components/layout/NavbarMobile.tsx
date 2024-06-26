"use client";
import React from "react";
import { CormorantInfant } from "@/components/fonts";
import Link from "next/link";
import { useState, useCallback } from "react";
import HamburgerIcon from "@/components/layout/HamburgerIcon";
import { MdEmail } from "react-icons/md";
import { FaSquareInstagram } from "react-icons/fa6";
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
const NavbarMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = useCallback(() => setIsOpen(!isOpen), [isOpen]);
  return (
    <>
      <div className="flex">
        <div className="sm:hidden">
          <button onClick={toggleMenu} className="w-15 h-15 mt-3 ml-1 ">
            <HamburgerIcon />
          </button>
          <div className="w-screen">
            {" "}
            <h1 className=" mx-auto font-semibold lg:text-4xl text-3xl leading-none text-white pt-4 lg:pt-1 text-center ">
              <Link href={"/"}>Stan Relaksu</Link>{" "}
            </h1>
            <p className=" mx-4  lg:mx-auto font-semibold lg:text-sm text-sm leading-none text-center text-white pt-1 ">
              to miejsce z myślą o Tobie, osobie która chce o siebie zadbać,
              zwolnić i poczuć się lepiej
            </p>
          </div>
        </div>
        <div className=" hidden lg:flex  w-screen font-semibold text-md justify-end px-4 min-w-max py-2">
          <ul className="flex gap-4 text-teal-900">
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

        <div className=" fixed lg:bottom-24 bottom-12 right-2 z-20">
          <div className=" fixed top-2 sm:top-20 right-2 ">
            <button className=" lg:hidden   rounded-full bg-green-600 py-3 px-3 text-white shadow-xl shadow-green-400/75 transition-transform duration-200 ease-in-out hover:scale-[1.09]">
              <Link href="tel:885987321 ">
                <BsFillTelephoneForwardFill className="text-right" />
              </Link>
            </button>
            <button className=" rounded-full bg-green-600 my-2 py-3 px-3 mx-2 text-white shadow-xl shadow-green-400/75 transition-transform duration-200 ease-in-out hover:scale-[1.09]">
              <Link
                href="https://www.instagram.com/stan_relaksu/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaSquareInstagram className="text-right" />
              </Link>
            </button>
            <button className=" rounded-full bg-green-600 py-3 px-3  text-white shadow-xl shadow-green-400/75 transition-transform duration-200 ease-in-out hover:scale-[1.09]">
              <Link
                href="https://www.facebook.com/profile.php?id=61560021160720"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="text-right" />
              </Link>
            </button>
            {/* <button className="animate-fadeIn bottom-1 left-4 mt-8 inline-flex items-center justify-center rounded-full bg-green-600 py-3 px-6  font-dm text-sm font-medium text-white shadow-xl shadow-green-400/75 transition-transform duration-400  hover:scale-[1.02]">
              <Link
                href="https://booksy.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div>
                  Zarezerwuj<br></br> Wizytę
                </div>
              </Link>
            </button> */}
          </div>
        </div>
      </div>
      <div
        className={`${CormorantInfant.className} flex  flex-wrap w-full justify-evenly   py-4 px-4 sm:hidden`}
      >
        <nav id="mobile-nav" className="w-screen sm:hidden">
          <ul
            className={`flex flex-col  bg-teal-950/25   h-full p-2 space-y-1  sm:flex-row sm:space-y-1 sm:space-x-4 divide-y-4 divide-teal-900/50 divide-solid ${
              isOpen ? "" : "hidden"
            }`}
          >
            <li className=" ">
              <Link
                href="/#welcome-card"
                className=" flex justify-center px-1 py-1 text-xl  text-white w-full hover:border-y-2 hover:border-white"
              >
                Strona główna
              </Link>
            </li>
            <li className=" ">
              <Link
                href="/about" 
                className=" flex justify-center px-1 py-1 text-xl  text-white w-full hover:border-y-2 hover:border-whit"
              >
                O mnie
              </Link>
            </li>
            <li className=" ">
              <Link
                href="offer"
                className=" flex justify-center px-1 py-1 text-xl  text-white w-full hover:border-y-2 hover:border-whit"
              >
                Oferta
              </Link>
            </li>
            <li className=" ">
              <Link
                href="/contact"
                className=" flex justify-center px-1 py-1 text-xl  text-white w-full hover:border-y-2 hover:border-whit"
              >
                Kontakt
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default NavbarMobile;
