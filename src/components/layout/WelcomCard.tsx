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
      className=" relative flex h-[38rem] lg:h-[40rem] xl:h-[55rem] bg-white overflow-hidden animate-fadeIn rounded  transition-transform duration-200 ease-in-out   "
    >
      <div className=" flex justify-end w-full lg:mt-8 mt-16 xl:mt-24 ">
        <div className=" relative flex xl:h-[55rem]  w-full  sm:w-screen  md:py-3 ">
          <WelcomeCardImage />
        </div>
      </div>

      <div className="absolute h-full w-full  left-0 right-0 top-24 xl:top-48">
        <div className="">
          <div className="relative w-[18rem] h-[13rem] sm:w-[20rem] sm:h-[15rem] lg:w-[24rem] lg:h-[19rem] flex justify-center mx-auto   ">
            <Image
              src="/logo.png"
              alt="Logo stan relaksu"
              fill
              sizes="(max-width: 600px) 100vw, 50vw"
              className="px-2 object-contain"
              priority={true}
            />
          </div>
          <div className=" ml-4 mx-auto">
            <h2 className="font-bold font-serif text-center text-sm sm:text-lg lg:text-xl text-white text-shadow-lg   bg-opacity-20 lg:bg-opacity-25 px-2  ">
              Odprężenie ciała i ukojenie duszy pozwól sobie na Stan Relaksu
            </h2>
          </div>
        </div>
        <div className=" flex justify-center mt-[10rem] sm:mt-[7rem] md:mt-[7rem] lg:mt-[3rem]  ">
          <Link
            href="https://booksy.com/pl-pl/257898_stan-relaksu-holistyczny-gabinet-terapii-i-masazu_masaz_3_warszawa#ba_s=dl_1"
            target="_blank"
            rel="noopener noreferrer"
            className=" hover:shadow-xl shadow-lg shadow-gray-400/75 text-xl lg:text-2xl text-white   rounded  hover:border-white bg-primary hover:bg-primary/75 px-6 py-2 font-bold xl:mt-2  hover:text-gray-300    focus:outline-none focus:shadow-outline hover:underline "
          >
            Zarezerwuj Wizytę
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WelcomCard;
