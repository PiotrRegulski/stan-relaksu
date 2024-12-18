"use client";
import React from "react";
import Link from "next/link";
import { Noto } from "../fonts";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import { BsArrowUpRightSquare } from "react-icons/bs";
const InfoBar = () => {
  return (
    <div className={`${Noto.className} container mx-auto hidden lg:flex font-semibold text-md   max-w-[3000px] bg-white  w-full  `}>
      <div className="flex justify-between w-full text-sm">
        <div>
          <ul>
            <li>
              <Link
                href="https://booksy.com/pl-pl/257898_stan-relaksu-holistyczny-gabinet-terapii-i-masazu_masaz_3_warszawa#ba_s=dl_1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row  gap-2 px-1 py-1  hover:opacity-70   bg-white"
                aria-label="Zarezerwuj wizytę gabinecie terapii manualnej i masażu - Stan Relaksu "
              >
                <span className={`${Noto.className}`}>
                  <p className="text-sm underline underline-offset-2 tracking-wider">
                    Zarezerwuj Wizyte
                  </p>{" "}
                </span>
                <span className="">
                  <BsArrowUpRightSquare className="w-3 h-3  mt-1" />
                </span>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className=" flex flex-row">
            <li>
              <Link
                href={"mailto:kontakt@stanrelaksu.pl"}
                target="_blank"
                rel="noopener noreferrer"
                className=" flex flex-row px-1  gap-1 hover:opacity-70 bg-white "
                aria-label="Napisz wiadomość e-mail do gabientu terapii manualnej i masażu - Stan Relaksu"
              >
                <span className=" rounded-full p-2">
                  <MdEmail className="w-3 h-3" />
                </span>
                <span className={`${Noto.className} mt-1 text-sm`}>kontakt@stanrelaksu.pl</span>
              </Link>
            </li>
            <li>
              <Link
                href="tel:791107102"
                target="_blank"
                rel="noopener noreferrer"
                className=" flex flex-row px-3  gap-1 hover:opacity-70 bg-white "
               aria-label="Zadzwoń do gabientu terapii manualnej i masażu - Stan Relaksu"
              >
                <span className=" rounded-full  p-2">
                  <BsFillTelephoneForwardFill className="  w-3 h-3" />
                </span>
                <span className={`${Noto.className} mt-1 text-sm`}>791-107-102</span>
              </Link>
            </li>
            <li>
              <Link
                href="https://www.instagram.com/stan_relaksu/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row px-1 py-1 hover:opacity-70 bg-white   "
                aria-label="Otwórz profil na Instagramie gabinetu terapii manualnej i masażu - Stan Relaksu"


              >
                <FaSquareInstagram className="text-right w-5 h-5 lg:w-5 lg:h-5" />
              </Link>
            </li>
            <li>
              {" "}
              <Link
                href="https://www.facebook.com/profile.php?id=61560021160720"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row px-1 py-1 hover:opacity-70 bg-white"
                 aria-label="Otwórz profil na Facebook gabinetu terapii manualnej i masażu - Stan Relaksu"
              >
                <FaFacebook className="text-right w-5 h-5 lg:w-5 lg:h-5 " />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InfoBar;
