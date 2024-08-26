import React from "react";
import NavLinks from "./NavLinks";
import Logo from "./Logo";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className=" flex pt-4 lg:py-1 w-full  my-2 ">
      <div className=" flex basis-1/2 md:basis-1/2 flex-row ">
        <Link href={"/"} className="mx-1 my-1 ml-6">
          <Logo />
        </Link>

        <p className=" font-[lato] font-bold sm:text-sm md:text-sm lg:text-lg tracking-tight  lg:tracking-wide  px-4 md:pt-3  mt-2    w-full  ">
          Gabinet terapii manualnej ciała i twarzy.
        </p>
      </div>

      <div className=" flex flex-col  basis-1/2 justify-center items-center ">
        
        <div className="flex sm:gap-2 md:gap-2  justify-center w-full">
          <NavLinks />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
