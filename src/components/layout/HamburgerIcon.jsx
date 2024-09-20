import React from "react";

const HamburgerIcon = () => {
  return (
    <div className="">
      <div className="block hamburger xl:hidden focus:outline-none" >
        {/* Ikona hamburgera */}
        <div className="space-y-2">
          <span className="block h-0.5 w-6 animate-pulse bg-black"></span>
          <span className="block h-0.5 w-6 animate-pulse bg-black"></span>
          <span className="block h-0.5 w-6 animate-pulse bg-black"></span>
        </div>
      </div>
    </div>
  );
};

export default HamburgerIcon;
