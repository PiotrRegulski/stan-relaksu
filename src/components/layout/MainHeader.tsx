"use client";
import React, { useEffect, useState, useCallback } from "react";
import {Noto } from "@/components/fonts";
import Navbar from "./Navbar";
import NavbarMobile from "./NavbarMobile";
import InfoBar from "./InfoBar";


const MainHeader = () => {
  const [isVisible, setIsVisible] = useState(true);

  const [scrollDirection, setScrollDirection] = useState<string | null>(null);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    if (window.scrollY > lastScrollY) {
      setScrollDirection("down");
      setIsVisible(false);
    } else {
      setScrollDirection("up");
      setIsVisible(true);
    }
    setLastScrollY(window.scrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <div style={{ display: isVisible ? "block" : "none" }}>
      <div className=" fixed z-40 top-0 right-0 left-0 ">
        <InfoBar />
        <header className={`${Noto.className} flex flex-col justify-center `}>
          <NavbarMobile />
          <div className="flex w-full">
            <div className={`${Noto.className} container mx-auto hidden lg:flex w-full `}>
              <Navbar />
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default MainHeader;
