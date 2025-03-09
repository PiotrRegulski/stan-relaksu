import React from "react";
import NavLinks from "./NavLinks";
import Logo from "./Logo";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className=" flex w-full ">
      <div className=" ">
        <Link
          href={"/"}
          className="mx-1 "
          aria-label="Przejdź na strone główną"
        >
          <Logo />
        </Link>
      </div>
      
      <div className=" flex w-full  justify-end items-start mx-4  mr-16 mt-4 ">
        <NavLinks />
      </div>
    </nav>
  );
};

export default Navbar;
