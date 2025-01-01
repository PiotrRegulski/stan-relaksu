"use client";

import React, { useRef } from "react";
import AboutMeShort from "./AboutMeShort";

const WelcomeAboutMe = () => {
  const ref = useRef(null);

  return (
    <div id="o-gabinecie" className=" flex w-full flex-col mt-[5rem] xl:mt-[7rem]">
      <div
        className={` flex flex-col justify-center items-center  mx-6 md:mx-24 lg:mx-24 xl:mx-36 my-6 2xl:my-4 lg:my-10  rounded-lg animate-fadeIn `}
      >
        <h1 className="text-center font-semibold px-2 text-lg lg:text-xl xl:text-2xl ">
          Stan Relaksu<br></br>Gabinet terapii manualnej i masażu
        </h1>
      </div>
    </div>
  );
};

export default WelcomeAboutMe;
