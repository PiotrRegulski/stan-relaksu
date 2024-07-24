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
          className={` text-teal-950 font-extrabold lg:text-xl border-y-2 rounded-md border-white lg:px-4 pt-3  bg-teal-950 bg-transparent h-[2.5em] lg:h-[2.5em]  ${
            pathname === link.href
              ? "px-2 border-y-2 border-amber-400 shadow-lg text-gray-900 font-bold underline mt-2"
              : " hover:border-y-2 hover:border-black hover:text-white hover:shadow-lg"
          }`}
        >
          {link.label}
        </Link>
      ))}
    </>
  );
};

export default NavLinks;
