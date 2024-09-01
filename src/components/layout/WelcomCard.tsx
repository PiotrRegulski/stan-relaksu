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
      className=" relative flex h-80 md:h-[28rem] xl:h-[40rem]  bg-white overflow-hidden animate-fadeIn rounded  transition-transform duration-200 ease-in-out  "
    >
      <div className=" flex justify-end w-full ">
        <div className=" relative flex h-80 sm:h-80 md:h-[28rem] xl:h-[40rem] w-full  sm:w-screen  md:py-3 ">
          <WelcomeCardImage />
        </div>
      </div>

      <div className=" absolute top-0 md:top-[4rem] xl:top-[6rem] left-0 md:left-[17%]   flex flex-col justify-center items-center h-80 sm:h-80 md:h-[22rem] xl:h-[25rem] md:shadow-xl md:border-4 md:border-white shadow-gray-400/75 w-screen md:w-2/3   rounded-xl    bg-primary bg-opacity-40 ">
        <div className="flex flex-col lg:px-6 py-6 ">
          <div className={`${lato.className}   `}>
            <div className="hidden relative w-full md:flex justify-center mt-5  ">
              <Image
                src="/logo.png"
                alt="Logo stan relaksu"
                width={300}
                height={300}
                className="px-2"
              />
            </div>

            <h2 className="font-bold text-xl sm:text-2xl lg:text-3xl text-white text-center bg-opacity-95 lg:bg-opacity-25 px-2 py-4 italic">
              Odprężenie ciała i ukojenie Duszy <br></br> pozwól sobie na Stan
              Relaksu.
            </h2>
          </div>
          <div className="flex justify-center md:my-3  py-3 sm:mt-6 lg:mt-2 ">
            <Link
              href="https://booksy.com/pl-pl/257898_stan-relaksu-holistyczny-gabinet-terapii-i-masazu_masaz_3_warszawa#ba_s=dl_1"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:shadow-xl shadow-lg shadow-gray-400/75 text-xl lg:text-2xl text-white   rounded  hover:border-white bg-primary hover:bg-primary/75 px-6 py-2 font-bold xl:mt-2  hover:text-gray-300 opacity-80   focus:outline-none focus:shadow-outline hover:underline "
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
