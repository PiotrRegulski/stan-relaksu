"use client";
import Link from "next/link";
import React from "react";

import { usePathname } from "next/navigation";
import ButtonMain from "./ButtonMain";
const links = [
  { href: "/", label: "Strona główna" },
  { href: "/omnie", label: "O mnie" },
  { href: "/oferta", label: "Oferta" },
  { href: "/cennik", label: "Cennik" },
  { href: "/kontakt", label: "Kontakt" },
];
const FooterLinks = () => {
  const pathname = usePathname();
  return (
    <div className="flex flex-col lg:w-1/3  ">
      <div className="flex flex-row my-2 w-full justify-end items-end px-2">
        {links.map((link) => (
          <Link
            href={link.href}
            key={link.href}
            className={` text-black text-sm sm:text-xs md:text-sm lg:text-sm  px-1   bg-teal-950 bg-transparent lg:mt-1  ${
              pathname === link.href
                ? "  text-black  underline "
                : "  hover:border-black hover:opacity-40 hover:shadow-sm hover:underline underline-offset-2"
            }`}
          >
            <span className="whitespace-nowrap">{link.label}</span>
          </Link>
        ))}
      </div>
      <div className="hidden sm:flex justify-end items-end w-full mt-4 sm:pr-16 min-h-[24px]">
        <Link
          href="https://booksy.com/pl-pl/257898_stan-relaksu-holistyczny-gabinet-terapii-i-masazu_masaz_3_warszawa#ba_s=dl_1"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center p-2 min-h-[24px] min-w-[24px] hover:opacity-70 rounded-xl"
        >
          <ButtonMain >
            Zarezerwuj wizytę
          </ButtonMain>
        
        </Link>
      </div>
    </div>
  );
};

export default FooterLinks;
