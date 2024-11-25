import React from "react";
import ButtonOffers from "./ButtonOffers";
import { lato } from "../fonts";
import ImagesToAboutExit from "./ImageToAboutExit";
const AboutMeLastCard = () => {
  return (
    <div className="flex flex-col  mx:auto   md:mb-12      rounded-md animate-fadeIn   transition-transform duration-200 ease-in-out bg-white   ">
      <div className="flex flex-col  w-full  justify-center items-center ">
        <div className="flex flex-col w-full md:justify-center md:items-center py-6 md:px-16 xl:px-32 2xl:px-48">
          <h2
            className={`${lato.className} text-center font-semibold text-lg md:text-xl xl:text-2xl lg:w-2/3 px-3 xl:py-6`}
          >
            Moją pasją jest terapia manualna twarzy.
          </h2>

          <p className="text-justify text-pretty  text-base md:text-lg xl:text-xl mx-auto my-2 px-6 py-3 lg:my-2 2xl:my-2 h-full lg:w-2/3">
            Dzięki pracy w obrębie <strong>twarzy, głowy i szyi</strong> możesz
            uzyskać ulgę w bólach stawów skroniowo-żuchwowych, bólach głowy,
            migrenach, problemach z zatokami oraz uczuciem napięcia i zmęczenia.
          </p>

          <h3 className="text-center font-semibold text-lg md:text-xl xl:text-xl lg:w-2/3 px-3 mt-4">
            Techniki Wykorzystywane w Terapii
          </h3>

          <p className="text-justify text-base md:text-lg xl:text-xl mx-auto my-2 px-6 py-3 lg:my-2 2xl:my-2 h-full lg:w-2/3">
            Zajmę się zdrowiem i pięknym wyglądem Twojej twarzy poprzez{" "}
            <strong>masaż Kobido</strong> czy{" "}
            <strong>igłoterapię estetyczną</strong> oraz techniki manualne z
            wykorzystaniem guasha czy <strong>bańki chińskiej</strong>.
          </p>
        </div>
      </div>
      <ImagesToAboutExit />
      <div className="flex w-full justify-center items-center  my-4">
        <ButtonOffers />
      </div>
    </div>
  );
};

export default AboutMeLastCard;
