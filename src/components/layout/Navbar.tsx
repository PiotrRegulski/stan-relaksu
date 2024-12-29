import React from "react";
import NavLinks from "./NavLinks";
import Logo from "./Logo";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className=" flex     w-full    h-20   ">
      <div className=" ">
        <Link href={"/"} className="mx-1 my-1 ">
          <Logo />
        </Link>
      </div>

      <div className=" flex w-full  justify-end mx-4 items-center mr-16 ">
        <NavLinks />
      </div>
    </nav>
  );
};

export default Navbar;
