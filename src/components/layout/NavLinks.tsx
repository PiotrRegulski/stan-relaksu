"use client"
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
const links = [
  { href: "/", label: "Strona główna" },
  { href: "/about#about", label: "O mnie" },
  { href: "/offer#offer", label: "Oferta" },
  { href: "/contact#contact", label: "Kontakt" },
];
const NavLinks = () => {
    const pathname= usePathname();
  return (
    <>
      {links.map((link) => (
        <Link href={link.href} key={link.href} className={` text-white font-bold lg:text-xl border-y-2 rounded-md border-white lg:px-4 lg:py-2 lg:pt-3 px-1 py-1 bg-teal-950/25 h-[2.5em] lg:h-[3em]  ${pathname=== link.href ? "px-2 border-y-2 border-amber-400 shadow-lg text-gray-900 font-bold underline mt-1":" hover:border-y-2 hover:border-black hover:shadow-lg"}`}>{link.label}</Link>
      ))}
    </>
  );
};

export default NavLinks;
