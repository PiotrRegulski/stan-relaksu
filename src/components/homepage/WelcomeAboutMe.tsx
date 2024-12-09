"use client";

import React, { useRef } from "react";
import AboutMeShort from "./AboutMeShort";
import { lato, Noto } from "../fonts";

const WelcomeAboutMe = () => {
  const ref = useRef(null);

  return (
    <div   id="o-gabinecie" className=" flex w-full flex-col">
      <div
        className={` flex flex-col justify-center items-center  mx-6 md:mx-12 lg:mx-12 xl:mx-36 my-6 2xl:my-4 lg:my-10  rounded-lg animate-fadeIn `}
       
       
      >
        <h1 className="text-center font-semibold px-2 text-lg lg:text-2xl ">
          Stan Relaksu<br></br>Gabinet terapii manualnej i masażu
        </h1>
        <p className=" text-center md:text-center font-medium px-2 text-base lg:text-2xl my-2 lg:my-3 lg:mx-24 xl:mx-36   2xl:mx-48  md:my-0 ">
          Terapeutyczne miejsce dla ciała stworzone z myślą o Tobie, 
          osobie,  która chce zadbać o swoje zdrowie, zwolnić i poczuć się
          lepiej.
        </p>
      </div>
      <AboutMeShort />

  
    </div>
  );
};

export default WelcomeAboutMe;
