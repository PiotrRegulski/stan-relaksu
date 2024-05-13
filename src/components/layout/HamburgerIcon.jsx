import React from "react";

const HamburgerIcon = () => {
  return (
    <div>
      <div className="block hamburger sm:hidden focus:outline-none" >
        {/* Ikona hamburgera */}
        <div className="space-y-2">
          <span className="block h-0.5 w-6 animate-pulse bg-amber-600"></span>
          <span className="block h-0.5 w-6 animate-pulse bg-amber-600"></span>
          <span className="block h-0.5 w-6 animate-pulse bg-amber-600"></span>
        </div>
      </div>
    </div>
  );
};

export default HamburgerIcon;
