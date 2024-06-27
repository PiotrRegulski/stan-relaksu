import React from "react";
import NavLinks from "./NavLinks";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <nav className="w-screen  flex pt-4 lg:py-4  ">
      <div className=" flex basis-1/2 gap-12  ">
          
        <h1 className=" mx-auto font-semibold lg:text-6xl text-3xl leading-none text-orange-500 pt-4 lg:pt-1"> Stan Relaksu</h1>
      </div>
      
      <div className=" flex  basis-1/2 justify-center  " >
        {" "}
        <ul className="flex gap-4">
          <NavLinks />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
