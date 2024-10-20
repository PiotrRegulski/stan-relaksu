"use client";
import Link from "next/link";
import React from "react";
import { BsArrowUpRightSquare } from "react-icons/bs";

import { usePathname } from "next/navigation";
const links = [
  { href: "/", label: "Strona główna" },
  { href: "/about", label: "O mnie" },
  { href: "/offer", label: "Oferta" },
  { href: "/prices", label: "Cennik" },
  { href: "/contact", label: "Kontakt" },
];
const FooterLinks = () => {
  const pathname = usePathname();
  return (
    <div className="flex flex-col  ">
      <div className="flex flex-row my-2 w-full justify-center items-center px-2">
        {links.map((link) => (
          <Link
            href={link.href}
            key={link.href}
            className={` text-black text-sm sm:text-xs md:text-sm lg:text-sm  px-1   bg-teal-950 bg-transparent lg:mt-1  ${
              pathname === link.href
                ? "px-2   text-black  underline "
                : "  hover:border-black hover:opacity-40 hover:shadow-sm hover:underline"
            }`}
          >
            <span className="whitespace-nowrap">{link.label}</span>
          </Link>
        ))}
      </div>
      <div className="hidden sm:flex justify-center items-center w-full mt-4">
        <Link
          href="https://booksy.com/pl-pl/257898_stan-relaksu-holistyczny-gabinet-terapii-i-masazu_masaz_3_warszawa#ba_s=dl_1"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center hover:shadow-xl shadow-lg shadow-gray-400/75 text-lg text-center lg:text-lg text-white rounded bg-primary hover:bg-teal-400/75 px-6 py-2 font-bold hover:text-gray-700 duration-300 focus:outline-none focus:shadow-outline whitespace-nowrap"
        >
          <span className=" text-xs lg:text-sm text-black  tracking-wider">
            Zarezerwuj Wizyte
          </span>
          <BsArrowUpRightSquare className="w-3 h-3 ml-2 text-black border-white" />
        </Link>
      </div>
    </div>
  );
};

export default FooterLinks;
