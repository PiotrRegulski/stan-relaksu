import React from "react";
import NavLinks from "./NavLinks";
import Logo from "./Logo";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-screen  flex pt-4 lg:py-4  ">
      <div className=" flex basis-1/2  flex-col  ">
        <h1 className=" mx-auto font-semibold lg:text-6xl text-3xl leading-none text-white pt-2 lg:pt-1">
          <Link href={"/"}>Stan Relaksu</Link>{" "}
        </h1>
        <p className="mx-auto text-center font-semibold lg:text-xl text-sm leading-none text-white p-4 lg:pt-1 ">
          to miejsce z myślą o Tobie, osobie która chce o siebie zadbać, zwolnić
          i poczuć się lepiej.<br></br>Pozwól sobie na Stan Relaksu</p>
      </div>

      <div className=" flex  basis-1/2 justify-center  ">
        {" "}
        <ul className="flex gap-4">
          <NavLinks />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
