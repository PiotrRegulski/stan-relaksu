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
          className={` text-black md:text-md lg:text-lg  rounded-md  px-2 font-bold  bg-teal-950 bg-transparent lg:mt-4  ${
            pathname === link.href
              ? "px-2  shadow-lg text-black  underline mt-1"
              : "  hover:border-black hover:opacity-40 hover:shadow-lg hover:underline"
          }`}
        >
          {link.label}
        </Link>
      ))}
    </>
  );
};

export default NavLinks;
