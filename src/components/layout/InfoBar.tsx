"use client";
import React from "react";
import Link from "next/link";
import { Noto } from "../fonts";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import { BsArrowUpRightSquare } from "react-icons/bs";
import { IoIosPin } from "react-icons/io";

const InfoBar = () => {
  return (
    <div
      className={`${Noto.className} hidden lg:flex font-semibold text-md max-w-[3000px] bg-primary w-full mx-auto`}
    >
      <div className="flex justify-between w-full text-sm lg:mx-2">
        <div className="w-1/4 ">
          <ul className=" flex w-full p-2 ">
            <li>
              <Link
                href="https://booksy.com/pl-pl/257898_stan-relaksu-holistyczny-gabinet-terapii-i-masazu_masaz_3_warszawa#ba_s=dl_1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row  gap-2 px-1 py-1  hover:opacity-70   bg-white bg-opacity-20 text-black rounded-md"
                aria-label="Zarezerwuj wizytę gabinecie terapii manualnej i masażu - Stan Relaksu "
              >
                <div className={`${Noto.className}`}>
                  <p className="text-sm text-black underline underline-offset-2 tracking-wider">
                    Zarezerwuj Wizyte
                  </p>{" "}
                </div>
                <div>
                  <BsArrowUpRightSquare className="w-3 h-3  mt-1 text-black" />
                </div>
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-3/4 p-2">
          <ul className=" flex flex-row w-full justify-end">
            <li>
              <Link
                href="https://maps.app.goo.gl/paeUdp7VdFXvtwSA9"
                target="_blank"
                rel="noopener noreferrer"
                className=" flex flex-row px-1  gap-1 hover:opacity-70 bg-white bg-opacity-25 text-black rounded-md"
                aria-label="Otwórz mapę z lokalizacją gabinetu terapii manualnej i masażu - Stan Relaksu"
              >
                <span className="rounded-full p-1 ">
                  {" "}
                  <IoIosPin className="w-4 h-4   text-black" />
                </span>

                <address className="not-italic text-xs xl:text-sm w-full   px-1 py-1 underline underline-offset-2 ">
                  Naukowa 20/lok.1, 02-463 Warszawa, Włochy
                </address>
              </Link>
            </li>
            <li className="mx-2">
              <Link
                href={"mailto:kontakt@stanrelaksu.pl"}
                target="_blank"
                rel="noopener noreferrer"
                className=" flex flex-row px-1  gap-1 hover:opacity-70 bg-white bg-opacity-25 text-black rounded-md"
                aria-label="Napisz wiadomość e-mail do gabientu terapii manualnej i masażu - Stan Relaksu"
              >
                <span className=" rounded-full p-2">
                  <MdEmail className="w-3 h-3 " />
                </span>
                <span
                  className={`${Noto.className} mt-1 text-sm underline underline-offset-2`}
                >
                  kontakt@stanrelaksu.pl
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="tel:791107102"
                target="_blank"
                rel="noopener noreferrer"
                className=" flex flex-row px-1 mr-1  gap-1 hover:opacity-70 bg-white bg-opacity-25 text-black rounded-md "
                aria-label="Zadzwoń do gabientu terapii manualnej i masażu - Stan Relaksu"
              >
                <span className=" rounded-full  p-2">
                  <BsFillTelephoneForwardFill className="  w-3 h-3" />
                </span>
                <span
                  className={`${Noto.className} mt-1 text-sm underline underline-offset-2 pr-1`}
                >
                  791-107-102
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="https://www.instagram.com/stan_relaksu/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row px-1 py-1 hover:opacity-70 bg-white bg-opacity-15 text-black    "
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
                className="flex flex-row px-1 py-1 hover:opacity-70 bg-white bg-opacity-15 text-black "
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
