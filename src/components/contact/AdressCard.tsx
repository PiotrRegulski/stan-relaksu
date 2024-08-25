import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";


const AdressCard = (props: any) => {
  return (
    <div className="flex flex-col ">
      <div className="flex justify-center my-4">
        <div className="grid-element">
          <Image
            src={props.logoSrc}
            width={200}
            height={200}
            className=" rounded-full shadow-gray-400 shadow-md bg-white "
            alt="Screenshots of the dashboard project showing desktop version"
            priority={true}
          />
        </div>
      </div>

      <div className="flex justify-center">
        <p className="text-center  text-2xl font-semibold">
          {props.title}
        </p>
      </div>
      <div className=" flex justify-center w-full my-6  ">
        <Link
          href={props.href}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:shadow-xl shadow-lg shadow-gray-400/75 text-lg text-center lg:text-lg text-white   rounded  hover:border-white  bg-primary hover:bg-teal-400/75 px-6 py-2 font-bold   hover:text-gray-700 duration-300  focus:outline-none focus:shadow-outline hover:underline "
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
              <FaSquareInstagram className="text-right w-8 h-8" />
            </Link>
          </div>
          <div className="bg-[#e6e6e6cf] h-8 w-8 rounded-full flex items-center justify-center shrink-0 my-2">
            <Link
              href={props.fbHref}
              target="_blank"
              rel="noopener noreferrer  "
              className="hover:opacity-70"
            >
              <FaFacebook className="text-right w-8 h-8" />
            </Link>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default AdressCard;
