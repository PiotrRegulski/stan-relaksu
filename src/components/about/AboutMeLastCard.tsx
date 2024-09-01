import React from "react";
import ImagesToAboutMeLast from "./ImagesToAboutMeLast";
import ButtonOffers from "./ButtonOffers";
const AboutMeLastCard = () => {
  return (
    <div className="flex flex-col  mx:auto   md:mb-12 my-8   bg-secondary  rounded-md animate-fadeIn   transition-transform duration-200 ease-in-out  ">
      <h3 className=" text-lg  md:text-xl lg:text-2xl font-bold  mx-auto py-3 md:py-4 lg:px-[25%]  ">
        Moją pasją jest terapia manualna twarzy.
      </h3>
      <div className="flex items-center">
        <ImagesToAboutMeLast />
      </div>
      <div className="flex flex-col items-center justify-center  md:mx-2 md:my-2 px-4 py-3 md:py-12 lg:my-12  shadow-md shadow-gray-400 bg-white">
        <article className="text-left md:text-center text-lg md:text-xl lg:text-2xl mx-auto sm:mx-4 md:mx-12 lg:my-12 xl:mx-48 leading-loose text-black">
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
      <div className="w-full mt-6">
        {" "}
        <ButtonOffers />
      </div>
    </div>
  );
};

export default AboutMeLastCard;
