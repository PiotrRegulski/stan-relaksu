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
          className={` text-amber-950 text-lg  rounded-md  px-2 font-bold  bg-teal-950 bg-transparent   ${
            pathname === link.href
              ? "px-2  shadow-lg text-amber-900  underline mt-1"
              : "  hover:border-black hover:text-amber-700 hover:shadow-lg hover:underline"
          }`}
        >
          {link.label}
        </Link>
      ))}
    </>
  );
};

export default NavLinks;
