"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Strona główna", "aria-label": "Przejdź na stronę główną" },
  { href: "/omnie", label: "O mnie", "aria-label": "Przejdź na stronę o mnie" },
  { href: "/oferta", label: "Oferta", "aria-label": "Przejdź na stronę z ofertą zabiegów" },
  { href: "/cennik", label: "Cennik", "aria-label": "Przejdź na stronę z cennikiem zabiegów" },
  { href: "/kontakt", label: "Kontakt", "aria-label": "Przejdź na stronę z informacją jak się skontaktować lub poznać adres gabinetu" },
];

const NavLinks = () => {
  const pathname = usePathname();
  return (
    <>
     <div className="flex flex-row bg-white shadow-neutral-200 shadow-md py-3 px-4 rounded-b-xl"> {links.map((link) => (
        <Link
          href={link.href}
          key={link.href}
          aria-label={link["aria-label"]}
          className={` mx-2 h-[1rem] flex justify-center  items-center text-black bg-white px-2  rounded-3xl sm:text-sm md:text-md lg:text-lg 2xl:text-lg md:px-2 font-medium lg:mt-1 ${
            pathname === link.href
              ? "px-2 text-red-400  "
              : "hover:border-primary/40 hover:opacity-40 hover:shadow-sm hover:underline"
          }`}
        >
          {link.label}
        </Link>
      ))}</div>
    </>
  );
};

export default NavLinks;
