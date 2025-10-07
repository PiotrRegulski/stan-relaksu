import React from "react";
import { lato } from "../fonts";
import Image from "next/image";
const WelcomeAboutMe = () => {
  return (
    <div
      id="o-gabinecie"
      className={`flex w-full flex-col text-black bg-gradient-to-r from-secondary via-white to-secondary mt-[4rem] lg:mt-[7rem] rounded-3xl  mx-auto p-6 lg:p-10 ${lato.className}`}
    >
      <div className="flex flex-col justify-center items-center text-center mx-6 md:mx-24 xl:mx-36">
        <h1 className="font-semibold text-2xl lg:text-3xl xl:text-3xl mb-2 text-neutral-900">
          Stan Relaksu
        </h1>
        <h2 className="font-medium text-lg lg:text-2xl xl:text-2xl text-neutral-700 tracking-wide">
          Gabinet terapii manualnej i masażu
        </h2>
      </div>
    </div>
  );
};

export default WelcomeAboutMe;

