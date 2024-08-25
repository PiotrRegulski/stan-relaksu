import React from "react";
import ImagesToAboutMeLast from "./ImagesToAboutMeLast";
import ButtonOffers from "./ButtonOffers";
const AboutMeLastCard = () => {
  return (
    <div className="flex flex-col  mx:auto   md:mb-12 my-8   bg-secondary  rounded-md ">
      <h3 className=" text-lg  md:text-2xl font-bold  mx-auto py-3 md:py-4 md:px-[25%]  animate-fadeIn    transition-transform duration-1000 ease-in-out">
        Moją pasją jest terapia manualna twarzy.
      </h3>
      <div className="flex items-center">
        <ImagesToAboutMeLast />
      </div>
      <div className="flex flex-col items-center justify-center  md:mx-6 md:my-2 px-4 py-3 md:py-12 lg:my-12 shadow-md shadow-gray-400 bg-white">
        <article className="text-left md:text-center text-lg md:text-2xl mx-auto md:mx-12 lg:my-12  leading-loose text-black">
          <p className="text-pretty">
            Dzięki pracy w obrębie<strong> twarzy, głowy i szyi</strong> możesz
            uzyskać ulgę w bólach stawów skroniowo-żuchwowych, bólach głowy,
            migrenach, problemach z zatokami oraz uczuciem napięcia i zmęczenia.
            <br></br>
          </p>
          <p className="text-pretty my-4">
            Zajmę się zdrowiem i pięknym wyglądem Twojej twarzy poprzez{" "}
            <strong>masaż Kobido</strong> czy
            <strong> igłoterapię estetyczna</strong> oraz techniki manualne z
            wykorzystaniem guasha czy <strong>bańki chińskiej</strong> .
          </p>
        </article>
      </div>
      <ButtonOffers />
    </div>
  );
};

export default AboutMeLastCard;
