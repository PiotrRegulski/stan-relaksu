import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import FooterLinks from "./FooterLinks";
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { IoIosPin } from "react-icons/io";
import { BsArrowUpRightSquare } from "react-icons/bs";

const FooterInfo = (props: any) => {
  return (
    <div className="flex flex-col  w-full justify-center items-center ">
      <div className=" flex flex-col-reverse sm:flex-row w-full lg:w-2/3  gap-2  items-center justify-center ">
        <div className="flex flex-col">
          {" "}
          <div className="relative w-auto h-auto  flex items-center justify-center ">
            <Image
              src={props.logoSrc}
              width={100}
              height={100}
              className=" rounded-full shadow-gray-400 shadow-md bg-mainthemelogo "
              alt="Logo firmy Stan Relaksu"
              priority={true}
              style={{ width: "auto", height: "auto" }}
            />
          </div>
          <div className=" hidden sm:block mx-auto my-2  ">
            <div className=" flex gap-2 ">
              <div className="bg-[#e6e6e6cf] h-6 w-6 rounded-full flex items-center justify-center shrink-0 my-2 ">
                <Link
                  href={props.instaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-70"
                >
                  <FaSquareInstagram className="text-right w-6 h-6" />
                </Link>
              </div>
              <div className="bg-[#e6e6e6cf] h-6 w-6 rounded-full flex items-center justify-center shrink-0 my-2">
                <Link
                  href={props.fbHref}
                  target="_blank"
                  rel="noopener noreferrer  "
                  className="hover:opacity-70"
                >
                  <FaFacebook className="text-right w-6 h-6" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex lg:w-1/3 flex-col text-sm ">
          <p className="my-2 text-sm font-bold">
            Gabinet terapii manualnej i masażu - Stan Relaksu
          </p>
          <div className="flex flex-row w-full ">
            <IoIosPin className="w-3 h-3 mt-2 mx-2" />
            <address className="text-sm w-full whitespace-nowrap not-italic">
              Naukowa 20 /lokal-1/<br></br> 02-463 Warszawa
            </address>
          </div>
          <div className="mt-2 ">
            <address className="text-black not-italic ">
              <Link
                href={"mailto:kontakt@stanrelaksu.pl"}
                target="_blank"
                rel="noopener noreferrer"
                className=" flex flex-row   hover:opacity-70  "
              >
                <span className=" ">
                  <MdEmail className="w-3 h-3 mt-2 mx-2" />
                </span>
                <span className="pt-1 text-sm">kontakt@stanrelaksu.pl</span>
              </Link>
            </address>
            <Link
              href="tel:791107102"
              target="_blank"
              rel="noopener noreferrer"
              className=" flex flex-row    hover:opacity-70 "
            >
              <span className="  ">
                <BsFillTelephoneForwardFill className="w-3 h-3 mt-2 mx-2 " />
              </span>
              <span className="pt-1 text-sm">791-107-102</span>
            </Link>
          </div>
        </div>

        <FooterLinks />
      </div>
    </div>
  );
};

export default FooterInfo;
