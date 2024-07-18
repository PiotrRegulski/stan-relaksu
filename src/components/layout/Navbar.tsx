import React from "react";
import NavLinks from "./NavLinks";
import Logo from "./Logo";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-screen  flex pt-4 lg:py-4  ">
      <div className=" flex basis-1/2  flex-row shadow-xl ">
        <Link href={"/"} className="mx-4 my-4 ml-6">
          <Logo />
        </Link>

        <h1 className=" font-semibold lg:text-xl text-sm leading-none px-4  pt-3 text-white   ">
          miejsce z myślą o Tobie,<br></br>
          osobie która, chce o siebie zadbać, zwolnić i poczuć się lepiej.
          <br></br>Pozwól sobie na Stan Relaksu
        </h1>
      </div>

      <div className=" flex  basis-1/2 justify-center  ">
        
          <ul className="flex gap-4 pt-12 ">
            <NavLinks />
          </ul>
        </div>
     
    </nav>
  );
};

export default Navbar;
