import React from "react";

const HamburgerIcon = (props) => {
  return (
    <div className=" ">
      <button onClick={props.onClick} className="block hamburger xl:hidden focus:outline-none  bg-white/20 rounded-full py-3 px-3" >
        {/* Ikona hamburgera */}
        <div className="space-y-2">
          <span className="block h-0.5 w-6 animate-pulse bg-triadbrown"></span>
          <span className="block h-0.5 w-6 animate-pulse bg-triadbrown"></span>
          <span className="block h-0.5 w-6 animate-pulse bg-triadbrown"></span>
        </div>
      </button>
    </div>
  );
};

export default HamburgerIcon;
