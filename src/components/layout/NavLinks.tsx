"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Strona główna", "aria-label": "Przejdź na stronę główną" },
  { href: "/omnie", label: "O mnie", "aria-label": "Przejdź na stronę o mnie" },
  { href: "/oferta", label: "Oferta", "aria-label": "Przejdź na stronę z ofertą zabiegów" },
  { href: "/cennik", label: "Cennik", "aria-label": "Przejdź na stronę z cennikiem zabiegów" },
  { href: "/kontakt", label: "Kontakt", "aria-label": "Przejdź na stronę z informacją o kontakcie" },
];

const NavLinks = () => {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Nawigacja główna strony Stan Relaksu"
      className="bg-white shadow-md shadow-neutral-200 rounded-b-xl"
    >
      <ul className="flex flex-row justify-center items-center gap-3 px-6 py-2">
        {links.map((link) => {
          const isActive = pathname === link.href;

          return (
            <li key={link.href} className="relative">
              <Link
                href={link.href}
                aria-label={link["aria-label"]}
                className={`flex items-center px-3 py-1.5 rounded-full font-medium text-[15px] relative group transition-all duration-200
                  ${
                    isActive
                      ? "text-navActive"
                      : "text-triadbrown hover:text-navHover hover:opacity-80"
                  }`}
              >
                {link.label}
                {isActive ? (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-navUnderline"></span>
                ) : (
                  <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-navHover transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavLinks;
