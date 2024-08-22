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

      <div className=" absolute top-1 md:top-[4rem] left-0 md:left-[16%]   flex flex-col justify-center items-center h-full md:h-[80%] md:shadow-xl md:border-4 md:border-white shadow-gray-400/75 w-screen md:w-2/3  animate-fadeIn rounded-xl   transition-transform duration-400 ease-in-out bg-primary bg-opacity-40 ">
        <div className="flex flex-col lg:px-6 py-6 ">
          <div className={`${lato.className}   `}>
            <div className="hidden relative w-full md:flex justify-center mt-5 ">
              <Image
                src="/logo.png"
                alt="Logo stan relaksu"
                width={500}
                height={500}
                className="px-2"
              />
            </div>

            <h2 className="font-bold text-xl lg:text-3xl text-white text-center bg-opacity-95 lg:bg-opacity-25 px-2 py-4 italic">
              Odprężenie ciała i ukojenie Duszy <br></br>  pozwól sobie na Stan Relaksu.
            </h2>
          </div>

          <div className="flex justify-center   py-3 mt-6 lg:mt-2 ">
            <Link
              href="https://booksy.com/"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:shadow-xl shadow-lg shadow-gray-400/75 text-xl lg:text-2xl text-white   rounded  hover:border-white bg-primary hover:bg-primary/75 px-6 py-2 font-bold   hover:text-gray-300   focus:outline-none focus:shadow-outline hover:underline "
            >
              Zarezerwuj Wizytę
            </Link>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomCard;
