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
          className={`border-b-2 border-primary   h-[6rem] flex justify-center items-center text-black sm:text-sm md:text-md lg:text-lg  md:px-2 font-medium   bg-teal-950 bg-transparent lg:mt-1  ${
            pathname === link.href
              ? "px-2 pb-1   text-triadbrown border-primary/20 "
              : "  hover:border-primary/40 hover:opacity-40 hover:shadow-sm hover:underline  "
          }`}
        >
          {link.label}
        </Link>
      ))}
    </>
  );
};

export default NavLinks;
