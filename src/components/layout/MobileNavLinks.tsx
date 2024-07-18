import React from "react";


import Link from "next/link";
const links = [
  { href: "/#welcome-card", label: "Strona główna" },
  { href: "/about#about", label: "O mnie" },
  { href: "/offer#offer", label: "Usługi" },
  { href: "/prices#prices", label: "Cennik" },
  { href: "/contact#contact", label: "Kontakt" },
];

const MobileNavLinks = () => {
  
  return (
    <>
      {links.map((link) => (
        <li className="" key={link.href}>
          <Link
            href={link.href}
            className=" flex justify-center px-1 py-1 text-xl  text-white w-full hover:border-y-2 hover:border-white"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </>
  );
};

export default MobileNavLinks;
