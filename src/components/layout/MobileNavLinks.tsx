import React from "react";


import Link from "next/link";

interface MobileNavLinksProps {
  toggleMenu: () => void;
}
const links = [
  { href: "/", label: "Strona główna" },
  { href: "/omnie", label: "O mnie" },
  { href: "/oferta", label: "Oferta" },
  { href: "/cennik", label: "Cennik" },
  { href: "/kontakt", label: "Kontakt" },
];

const MobileNavLinks: React.FC<MobileNavLinksProps>  = ({toggleMenu}) => {
  
  return (
    <>
      {links.map((link) => (
        <li className="mt-[6rem]" key={link.href} >
          <Link
            href={link.href} 
            className=" flex justify-center px-1 py-1 text-xl font-serif min-h-[24px]  text-black w-full  hover:underline hover:underline-offset-8" onClick={toggleMenu}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </>
  );
};

export default MobileNavLinks;
