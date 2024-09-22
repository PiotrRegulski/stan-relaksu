"use client";
import React, { useEffect, useState, useCallback,Suspense } from "react";
import { CormorantInfant } from "@/components/fonts";
import Navbar from "./Navbar";
import NavbarMobile from "./NavbarMobile";
import InfoBar from "./InfoBar";
import { usePathname, useSearchParams } from "next/navigation";

const MainHeader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleScroll = useCallback(() => {
    const offerId =
      document.getElementById("offer-title") ||
      document.getElementById("kontakt-info") ||
      document.getElementById("important-about");
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
    handleScroll(); // Run on first render

    // Listen for route changes
    handleRouteChange();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll, pathname, searchParams]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
    {isVisible && (
      <div className="fixed z-40 top-0 transition">
        <InfoBar />
        <header className={`${CormorantInfant.className} flex flex-col justify-center bg-white`}>
          <NavbarMobile />
          <div className="flex lg:gap-12">
            <div className={`${CormorantInfant.className} hidden lg:flex w-screen`}>
              <Navbar />
            </div>
          </div>
        </header>
      </div>
    )}
  </Suspense>
  );
};

export default MainHeader;
