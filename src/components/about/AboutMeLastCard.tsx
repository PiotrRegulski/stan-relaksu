import React from "react";
import ImagesToAboutMeLast from "./ImagesToAboutMeLast";
import ButtonOffers from "./ButtonOffers";
import { Noto } from "../fonts";
import ImagesToAboutExit from "./ImageToAboutExit";
const AboutMeLastCard = () => {
  return (
    <div className="flex flex-col  mx:auto   md:mb-12      rounded-md animate-fadeIn   transition-transform duration-200 ease-in-out bg-white  ">
      <div className="flex flex-col  w-full  justify-center items-center ">
        <div className=" flex flex-col w-full md:justify-center md:items-center  py-8 ">
          <h2
            className={`${Noto.className} text-center font-semibold text-xl md:text-2xl xl:text-2xl  lg:w-2/3 px-3`}
          >
            Moją pasją jest terapia manualna twarzy.
          </h2>

          <p className="text-justify text-lg md:text-xl xl:text-xl mx-auto  my-2  px-6 py-3  lg:my-2 2xl:my-2 h-full lg:w-2/3">
            Dzięki pracy w obrębie<strong> twarzy, głowy i szyi</strong> możesz
            uzyskać ulgę w bólach stawów skroniowo-żuchwowych, bólach głowy,
            migrenach, problemach z zatokami oraz uczuciem napięcia i zmęczenia.
            Zajmę się zdrowiem i pięknym wyglądem Twojej twarzy poprzez{" "}
            <strong>masaż Kobido</strong> czy
            <strong> igłoterapię estetyczna</strong> oraz techniki manualne z
            wykorzystaniem guasha czy <strong>bańki chińskiej</strong> .
            <br></br>
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
