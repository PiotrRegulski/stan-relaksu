import React from "react";
import NavLinks from "./NavLinks";
import Logo from "./Logo";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex flex-col w-full relative">
      {/* Logo - ustawione po lewej stronie ekranu */}
      <div className="absolute top-16 2xl:top-8 left-4 z-10">
        <Link
          href={"/"}
          className="mx-1 rounded-lg "
          aria-label="Przejdź na stronę główną"
        >
          <Logo />
        </Link>
      </div>

      {/* Kontener nawigacyjny z linkami */}
      <div className="flex flex-col justify-end items-end mx-4 mr-16">
        <NavLinks />
      </div>
    </nav>
  );
};

export default Navbar;
