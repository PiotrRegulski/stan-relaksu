"use client";
import React from "react";
import { useState, useEffect } from "react";
import { FaSquareInstagram } from "react-icons/fa6";
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import Link from "next/link";

const MobileInfoBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    isVisible && (
      <div className="sm:hidden fixed grid grid-cols-4 gap-1 bottom-0 z-40 bg-primary w-screen h-[4rem] border-t-1 border-white  ">
        <button className="animate-fadeIn   text-sm font-medium text-white shadow-lg shadow-gray-400/75 transition-transform duration-400  hover:scale-[1.02]">
          <Link
            href="https://booksy.com/pl-pl/257898_stan-relaksu-holistyczny-gabinet-terapii-i-masazu_masaz_3_warszawa#ba_s=dl_1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="link do rezerwacji wizyty"
          >
            <div className="font-semibold animate-pulse text-white">
              Zarezerwuj<br></br> Wizytę
            </div>
          </Link>
        </button>
        <button className=" md:hidden   w-full  text-white shadow-xl  transition-transform duration-200 ease-in-out hover:scale-[1.09] ">
          <div className="flex justify-center">
            {" "}
            <Link href="tel:791107102 " aria-label="zadzwoń">
              <BsFillTelephoneForwardFill className="text-center " />
            </Link>
          </div>
        </button>
        <button className="  text-white shadow-xl  transition-transform duration-200 ease-in-out hover:scale-[1.09] w-full">
          <div className="flex justify-center">
            {" "}
            <Link
              href="https://www.instagram.com/stan_relaksu/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="link do Instagrama"
            >
              <FaSquareInstagram className="text-right" />
            </Link>
          </div>
        </button>
        <button className="text-white shadow-xl  transition-transform duration-200 ease-in-out hover:scale-[1.09] w-full">
          <div className="flex justify-center">
            {" "}
            <Link
              href="https://www.facebook.com/profile.php?id=61560021160720"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="link do facebooka"
            >
              <FaFacebook className="text-right" />
            </Link>
          </div>
        </button>
      </div>
    )
  );
};

export default MobileInfoBar;
