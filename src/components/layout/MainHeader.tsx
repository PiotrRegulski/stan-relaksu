"use client";
import React, { useEffect, useState, useCallback } from "react";
import { CormorantInfant,Noto } from "@/components/fonts";
import Navbar from "./Navbar";
import NavbarMobile from "./NavbarMobile";
import InfoBar from "./InfoBar";
import { usePathname } from "next/navigation";

const MainHeader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const pathname = usePathname();

  const handleScroll = useCallback(() => {
    const offerId =
    document.getElementById("o-gabinecie")||
      document.getElementById("kontakt") ||
      document.getElementById("o-mnie") ||
      document.getElementById("offer-title") ||
      document.getElementById("oferta-detale")
     ;
    if (offerId) {
      const offerPosition = offerId.getBoundingClientRect().top;
      setIsVisible(offerPosition > 0);
    }
  }, []);

  useEffect(() => {
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
  }, [handleScroll, pathname]);

  return (
    isVisible && (
      <div className="fixed z-40 top-0 right-0 left-0   ">
        <InfoBar />
        <header
          className={`${Noto.className}  flex flex-col justify-center `}
        >
          <NavbarMobile />
          <div className="flex   w-full">
            <div
              className={`${Noto.className}  hidden lg:flex w-full`}
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
