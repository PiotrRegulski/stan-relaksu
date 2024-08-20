"use client";
import React from "react";
import Link from "next/link";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import { BsArrowUpRightSquare } from "react-icons/bs";
const InfoBar = () => {
  return (
    <div className=" hidden md:flex    font-semibold text-md  px-4 min-w-max py-1 bg-secondary  border-b-2 border-amber-900 ">
      <div className="flex justify-between w-full text-sm ">
        <div>
          <ul>
            <li>
              <Link
                href="https://booksy.com/"
                target="_blank"
                rel="noopener noreferrer"
                className=" fixed z-20 flex flex-row px-3  gap-2 bg-white rounded-xl hover:opacity-70  shadow-md"
              >
                <span className="pt-1  ">Zarezerwuj Wizyte </span>
                <span className=" p-2">
                  <BsArrowUpRightSquare className="w-3 h-3" />
                </span>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className=" flex flex-row">
            <li></li>
            <li>
              <Link
                href={"mailto:contact@pathpicstales.com"}
                target="_blank"
                rel="noopener noreferrer"
                className=" flex flex-row px-3  gap-2 hover:opacity-70 "
              >
                <span className="bg-gray-300 rounded-full p-2">
                  <MdEmail className="w-3 h-3" />
                </span>
                <span className="pt-1 text-sm">kontakt@stanrelaksu.pl</span>
              </Link>
            </li>
            <li>
              <Link
                href={"885987321"}
                target="_blank"
                rel="noopener noreferrer"
                className=" flex flex-row px-3  gap-2 hover:opacity-70 "
              >
                <span className="bg-gray-300 rounded-full  p-2">
                  <BsFillTelephoneForwardFill className="  w-3 h-3" />
                </span>
                <span className="pt-1 text-sm">000-000-000</span>
              </Link>
            </li>
            <li>
              <Link
                href="https://www.instagram.com/stan_relaksu/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row px-1 hover:opacity-70   "
              >
                <FaSquareInstagram className="text-right w-5 h-5 lg:w-6 lg:h-6" />
              </Link>
            </li>
            <li>
              {" "}
              <Link
                href="https://www.facebook.com/profile.php?id=61560021160720"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row px-1 hover:opacity-70 "
              >
                <FaFacebook className="text-right w-5 h-5 lg:w-6 lg:h-6" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InfoBar;

