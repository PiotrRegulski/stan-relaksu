import React from "react";
import Link from "next/link";
import { lato } from "../fonts";
import WelcomeCardImage from "./WelcomeCardImage";
import ImageCard from "../about/ImageCard";
import Image from "next/image";
const WelcomCard = () => {
  return (
    <div
      id="welcome-card"
      className=" relative flex h-[40rem] md:h-[40rem]  bg-headercolor overflow-hidden rounded  "
    >
      <div className=" flex justify-end w-full ">
        <div className=" relative flex  w-screen shadow-xl shadow-white md:py-3 ">
          <WelcomeCardImage />
        </div>
      </div>

      <div className=" absolute top-1 lg:top-[4rem] left-0 lg:left-[25%]   flex flex-col justify-center items-center h-full md:h-[80%] lg:shadow-xl lg:border-4 lg:border-white shadow-gray-400/75 w-screen lg:w-1/2  animate-fadeIn rounded-xl   transition-transform duration-1000 ease-in-out bg-primary bg-opacity-40 ">
        <div className="flex flex-col lg:px-6 py-6 ">
          <div className={`${lato.className}   `}>
            <div className="relative w-full flex justify-center mt-5">
              <Image
                src="/logo.png"
                alt="Logo stan relaksu"
                width={500}
                height={500}
              />
            </div>

            <h2 className="font-bold text-xl md:text-3xl text-white text-center bg-opacity-95 lg:bg-opacity-25 px-2 py-4 ">
              Odprężenie ciała i ukojenie Duszy pozwól sobie na<br></br> Stan Relaksu.
            </h2>
          </div>

          <div className="flex justify-center gap-12 lg:gap-24 py-3 mt-6 lg:mt-2 ">
            <Link
              href="https://booksy.com/"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:shadow-xl shadow-lg shadow-gray-400/75 text-xl lg:text-2xl text-white   rounded  hover:border-white bg-teal-400 hover:bg-teal-400/75 px-6 py-2 font-bold   hover:text-gray-300   focus:outline-none focus:shadow-outline hover:underline "
            >
              Zarezerwuj Wizytę
            </Link>
            {/* <Link
              href="/offer"
              className=" shadow-xl hover:shadow-lg text-xl lg:text-3xl  border-2 rounded hover:border-teal-400 hover:bg-amber-500 bg-amber-400 px-6 py-2 font-bold  hover:text-white text-black focus:outline-none focus:shadow-outline"
            >
              Oferta
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomCard;
