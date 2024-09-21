"use client";
import React from "react";
import { CormorantInfant } from "@/components/fonts";
import Navbar from "./Navbar";
import NavbarMobile from "./NavbarMobile";
import InfoBar from "./InfoBar";
import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";



const MainHeader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  useEffect(() => {
    const handleScroll = () => {
      const offerId =
        document.getElementById("offer-title") ||
        document.getElementById("kontakt-info")||
        document.getElementById("important-about");
      if (offerId) {
        const offerPosition = offerId.getBoundingClientRect().top;
        
        setIsVisible(offerPosition > 0);
      }
    };
    const handleRouteChange = () => {
      setIsVisible(true);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Uruchomienie funkcji przy pierwszym renderowaniu

    // Nasłuchiwanie na zmiany trasy
    handleRouteChange();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname, searchParams]);

  return (
    isVisible && (
      <div className="fixed z-40 top-0 transition  ">
        <InfoBar />
        <header
          className={`${CormorantInfant.className} flex flex-col justify-center bg-white sm:bg-white `}
        >
          <NavbarMobile />
          <div className=" flex lg:gap-12 ">
            <div
              className={`${CormorantInfant.className} hidden lg:flex w-screen `}
            >
              <Navbar />
            </div>
          </div>
        </header>
      </div>
    )
  );
};

export default MainHeader;
