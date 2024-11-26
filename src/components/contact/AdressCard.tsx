import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { Noto } from "../fonts";
import ButtonMain from "../layout/ButtonMain";

const AdressCard = (props: any) => {
  return (
    <div className="flex flex-col gap-4 ">
      <div className="flex justify-center my-4 lg:my-1">
        <div className="relative  w-52 h-52">
          <Image
            src={props.logoSrc}
            fill
            className=" rounded-full shadow-gray-400 shadow-md bg-mainthemelogo"
            alt="Logo firmy"
            priority={true}
            sizes="(max-width: 600px) 100vw, 50vw"
            
          />
        </div>
      </div>

      <div className="flex justify-center">
        <p
          className={`${Noto.className} text-center text-base md:text-2xl lg:text-lg font-semibold  `}
        >
          {props.title}
        </p>
      </div>
      <div className=" flex justify-center w-full my-2  ">
        <Link href={props.href} target="_blank" rel="noopener noreferrer">
          <ButtonMain> {props.linkTitle}</ButtonMain>
        </Link>
      </div>
      <div className="flex flex-row items-center  mx-auto border-b-primary border-b-2">
        <div className=" flex justify-around gap-3 ">
          <div className=" h-8 w-8 rounded-full flex items-center justify-center shrink-0 my-2 ">
            <Link
              href={props.instaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70"
            >
              <FaSquareInstagram className="text-right w-8 h-8 lg:h-8 lg:w-8" />
            </Link>
          </div>
          <div className=" h-8 w-8 rounded-full flex items-center justify-center shrink-0 my-2">
            <Link
              href={props.fbHref}
              target="_blank"
              rel="noopener noreferrer  "
              className="hover:opacity-70"
            >
              <FaFacebook className="text-right w-8 h-8 lg:h-8 lg:w-8" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdressCard;
