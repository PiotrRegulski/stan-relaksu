"use client";
import React, { useEffect, useState, useCallback } from "react";
import { CormorantInfant, Noto } from "@/components/fonts";
import Navbar from "./Navbar";
import NavbarMobile from "./NavbarMobile";
import InfoBar from "./InfoBar";
import { usePathname } from "next/navigation";

const MainHeader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const pathname = usePathname();
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
      <div className="container mx-auto fixed z-40 top-0 right-0 left-0">
        <InfoBar />
        <header className={`${Noto.className} flex flex-col justify-center bg-transparent`}>
          <NavbarMobile />
          <div className="flex w-full h-20">
            <div className={`${Noto.className} hidden lg:flex w-full bg-white shadow-white shadow rounded-b-full`}>
              <Navbar />
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default MainHeader;
