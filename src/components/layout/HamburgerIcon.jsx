import React from "react";

const HamburgerIcon = () => {
  return (
    <div className=" ">
      <div className="block hamburger xl:hidden focus:outline-none border-white border-2 rounded-full py-3 px-3" >
        {/* Ikona hamburgera */}
        <div className="space-y-2">
          <span className="block h-0.5 w-6 animate-pulse bg-white"></span>
          <span className="block h-0.5 w-6 animate-pulse bg-white"></span>
          <span className="block h-0.5 w-6 animate-pulse bg-white"></span>
        </div>
      </div>
    </div>
  );
};

export default HamburgerIcon;
