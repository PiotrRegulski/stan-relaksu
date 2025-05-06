import React from "react";
import Image from "next/image";
const WelcomeAboutMe = () => {
  return (
    <div
      id="o-gabinecie"
      className=" flex w-full flex-col  text-black bg-gradient-to-r from-secondary via-white to-secondary mt-[4rem] lg:mt-[7rem] rounded-3xl max-w-[1500px] mx-auto"
    >
      
      <div className="flex flex-col justify-center items-center  mx-6 md:mx-24 lg:mx-24 xl:mx-36 my-6 2xl:my-4 lg:my-5 rounded-lg">
        <h1 className="text-center font-normal text-lg lg:text-xl xl:text-3xl ">
          Stan Relaksu<br></br>Gabinet terapii manualnej i masażu
        </h1>
      </div>
    </div>
  );
};

export default WelcomeAboutMe;
