import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { Noto } from "../fonts";

const AdressCard = (props: any) => {
  return (
    <div className="flex flex-col gap-4 ">
      <div className="flex justify-center my-4 lg:my-1">
        <div className="relative w-auto h-auto">
          <Image
            src={props.logoSrc}
            width={100}
            height={100}
            className=" rounded-full shadow-gray-400 shadow-md bg-mainthemelogo"
            alt="Screenshots of the dashboard project showing desktop version"
            priority={true}
            style={{ width: "auto", height: "auto" }}
          />
        </div>
      </div>

      <div className="flex justify-center">
        <p className={`${Noto.className} text-center text-base md:text-2xl lg:text-base font-semibold`}>
          {props.title}
        </p>
      </div>
      <div className=" flex justify-center w-full my-2  ">
        <Link
          href={props.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${Noto.className} mx-auto    text-white shadow-md shadow-gray-400 text-base md:text-lg lg:text-base  border-2 rounded border-primary bg-primary hover:bg-white hover:border-black px-4 py-2 lg:px-4 lg:py-2 font-bold   hover:text-black focus:outline-none focus:shadow-outline`}
        >
          {props.linkTitle}
        </Link>
      </div>
      <div className="flex flex-row items-center  mx-auto border-b-primary border-b-2">
        <div className=" flex justify-around gap-3 ">
          <div className="bg-[#e6e6e6cf] h-8 w-8 rounded-full flex items-center justify-center shrink-0 my-2 ">
            <Link
              href={props.instaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70"
            >
              <FaSquareInstagram className="text-right w-8 h-8 lg:h-6 lg:w-6" />
            </Link>
          </div>
          <div className="bg-[#e6e6e6cf] h-8 w-8 rounded-full flex items-center justify-center shrink-0 my-2">
            <Link
              href={props.fbHref}
              target="_blank"
              rel="noopener noreferrer  "
              className="hover:opacity-70"
            >
              <FaFacebook className="text-right w-8 h-8 lg:h-6 lg:w-6" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdressCard;
