import React from "react";
import ImagesToAboutMeLast from "./ImagesToAboutMeLast";
import ButtonOffers from "./ButtonOffers";
const AboutMeLastCard = () => {
  return (
    <div className="flex flex-col  mx:auto   md:mb-12 my-8   bg-secondary  rounded-md ">
       <h3 className=" text-lg  md:text-2xl font-bold text-black mx-auto py-3 md:py-4 md:px-[25%]  animate-fadeIn    transition-transform duration-1000 ease-in-out">
          Moją pasją jest terapia manualna twarzy.
        </h3>
      <div className="flex items-center">
        <ImagesToAboutMeLast />
      </div>
      <div className="w-full flex flex-col justify-center ">
       
        <p className="indent-8 text-lg text-left md:text-2xl  text-black mx-auto py-3 px-4 md:px-12  animate-fadeIn    transition-transform duration-1000 ease-in-out">
          Dzięki pracy w obrębie twarzy, głowy i szyi możesz uzyskać ulgę w
          bólach stawów skroniowo-żuchwowych, bólach głowy, migrenach,
          problemach z zatokami oraz uczuciem napięcia i zmęczenia. Zajmę się
          zdrowiem i pięknym wyglądem Twojej twarzy poprzez masaż Kobido czy
          igłoterapię estetyczna oraz techniki manualne z wykorzystaniem guasha
          czy bańki chińskiej.
        </p>
      </div>
      <ButtonOffers/>
    </div>
  );
};

export default AboutMeLastCard;
