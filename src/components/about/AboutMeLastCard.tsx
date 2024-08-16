import React from "react";
import ImagesToAboutMeLast from "./ImagesToAboutMeLast";

const AboutMeLastCard = () => {
  return (
    <div className="flex flex-col  mx:auto   md:mb-2 my-1 border-white border-4 bg-secondary  rounded-md ">
      <div className="w-full flex flex-col justify-center ">
        <h3 className=" text-lg  md:text-2xl font-bold text-black mx-auto py-3 md:py-4 md:px-[25%]  animate-fadeIn    transition-transform duration-1000 ease-in-out">Moją pasją jest terapia manualna twarzy.</h3>
        <p className="indent-8 text-lg text-justify md:text-2xl  text-black mx-auto py-3 px-4 md:px-12  animate-fadeIn    transition-transform duration-1000 ease-in-out">
           Dzięki pracy w obrębie
          twarzy, głowy i szyi możesz uzyskać ulgę w bólach stawów
          skroniowo-żuchwowych, bólach głowy, migrenach, problemach z zatokami
          oraz uczuciem napięcia i zmęczenia. Zajmę się zdrowiem i pięknym
          wyglądem Twojej twarzy poprzez masaż Kobido czy igłoterapię estetyczna
          oraz techniki manualne z wykorzystaniem guasha czy bańki chińskiej.
        </p>
      </div>
      <div className="flex items-center">
        <ImagesToAboutMeLast />
      </div>
    </div>
  );
};

export default AboutMeLastCard;
