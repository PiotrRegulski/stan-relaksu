"use client"
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
const links = [
  { href: "/", label: "Strona główna" },
  { href: "/about", label: "O mnie" },
  { href: "/offer", label: "Oferta" },
  { href: "/contact", label: "Kontakt" },
];
const NavLinks = () => {
    const pathname= usePathname();
  return (
    <>
      {links.map((link) => (
        <Link href={link.href} key={link.href} className={`text-orange-500 font-bold lg:text-2xl border-y-2 rounded-md border-amber-200 px-2 py-4 ${pathname=== link.href ? "px-2 border-y-2 border-amber-400 shadow-lg text-gray-900 font-bold":" hover:border-y-2 hover:border-amber-400 hover:shadow-lg"}`}>{link.label}</Link>
      ))}
    </>
  );
};

export default NavLinks;
