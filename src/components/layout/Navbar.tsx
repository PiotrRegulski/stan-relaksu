import React from "react";
import NavLinks from "./NavLinks";
import Logo from "./Logo";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className=" flex items-center   w-full mx-24    h-24 xl:mx-72 ">
      <div className="">
        <Link href={"/"} className="mx-1 my-1 ml-6">
          <Logo />
        </Link>
      </div>

      <div className="w-1/4 ml-2">
        <p className=" font-serif leading-4 text-sm tracking-wide  ">
          Gabinet terapii<br></br> manualnej ciała i twarzy.
        </p>
      </div>
      <div className=" flex w-2/3   justify-end ">
        <NavLinks />
      </div>
    </nav>
  );
};

export default Navbar;
