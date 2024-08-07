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

        <p className=" font-semibold lg:text-xl  text-sm leading-none px-4  pt-4 text-white line-clamp-3  w-full ">
          Gabinet terapii manualnej ciała i twarzy,<br></br> odprężenie ciała i ukojenie
          duszy.<br></br><strong>Pozwól sobie na Stan Relaksu</strong> 
        </p>
      </div>

      <div className=" flex flex-col  basis-1/2 justify-center  ">
        <div className="flex justify-center ">
          <p className=" font-semibold lg:text-xl text-sm leading-none px-4 py-3 text-white  bg-gradient-to-r from-teal-400/80 via-teal-400 to-teal-400/80 rounded-full shadow-t-md ">
            Daj się sobą zaopiekować w komfortowym zaciszu gabinetu Stan
            Relaksu.
          </p>
        </div>
        <div className="flex gap-4 pt-5 justify-center w-full">
          <NavLinks />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
