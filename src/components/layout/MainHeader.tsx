"use client";
import React, { useEffect, useState, useCallback } from "react";
import { CormorantInfant } from "@/components/fonts";
import Navbar from "./Navbar";
import NavbarMobile from "./NavbarMobile";
import InfoBar from "./InfoBar";
import { usePathname } from "next/navigation";

const MainHeader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const pathname = usePathname();

  const handleScroll = useCallback(() => {
    const offerId =
      document.getElementById("offer-title") ||
      document.getElementById("kontakt-info") ||
      document.getElementById("important-about")||
      document.getElementById("zdjecia-z-oferty");
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
      <div className="fixed z-40 top-0 transition">
        <InfoBar />
        <header className={`${CormorantInfant.className} font-[Cormorant_Infant] flex flex-col justify-center bg-white`}>
          <NavbarMobile />
          <div className="flex lg:gap-12">
            <div className={`${CormorantInfant.className} font-[Cormorant_Infant] hidden lg:flex w-screen`}>
              <Navbar />
            </div>
          </div>
        </header>
      </div>
    )
  );
};

export default MainHeader;
