"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
const links = [
  { href: "/", label: "Strona główna" },
  { href: "/about", label: "O mnie" },
  { href: "/offer", label: "Oferta" },
  { href: "/prices", label: "Cennik" },
  { href: "/contact", label: "Kontakt" },
];
const NavLinks = () => {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => (
        <Link
          href={link.href}
          key={link.href}
          className={`  h-[6rem] flex justify-center items-center text-black sm:text-sm md:text-md lg:text-lg  md:px-2 font-medium   bg-teal-950 bg-transparent lg:mt-1  ${
            pathname === link.href
              ? "px-2   text-black  underline-offset-2 underline  mt-1  border-b-4 border-primary"
              : "  hover:border-black hover:opacity-40 hover:shadow-sm hover:underline "
          }`}
        >
          {link.label}
        </Link>
      ))}
    </>
  );
};

export default NavLinks;
