import React from "react";
import ImagesToAboutMeLast from "./ImagesToAboutMeLast";
import ButtonOffers from "./ButtonOffers";
const AboutMeLastCard = () => {
  return (
    <div className="flex flex-col  mx:auto   md:mb-12 my-8     rounded-md animate-fadeIn   transition-transform duration-200 ease-in-out bg-gradient-to-t from-secondary to-transparent   ">
      <div className="flex flex-col xl:flex-row w-full ">
        <div className="flex flex-col xl:flex-row xl:w-1/2 justify-end ">
          {" "}
          <div className="flex flex-col justify-end   md:mx-24 md:my-2 px-4 py-3 md:py-6 lg:my-6    ">
            <h3 className="font-[Cormorant-Garamond] text-left  text-3xl  md:text-4xl lg:text-5xl   py-8 md:py-4   ">
              Moją pasją jest terapia manualna twarzy.
            </h3>
            <article className="text-left  text-lg md:text-xl lg:text-xl mx-auto xl:mt-24  text-black">
              <p className="text-pretty">
                Dzięki pracy w obrębie<strong> twarzy, głowy i szyi</strong>{" "}
                możesz uzyskać ulgę w bólach stawów skroniowo-żuchwowych, bólach
                głowy, migrenach, problemach z zatokami oraz uczuciem napięcia i
                zmęczenia.
                <br></br>
              </p>
              <p className="text-pretty my-4">
                Zajmę się zdrowiem i pięknym wyglądem Twojej twarzy poprzez{" "}
                <strong>masaż Kobido</strong> czy
                <strong> igłoterapię estetyczna</strong> oraz techniki manualne
                z wykorzystaniem guasha czy <strong>bańki chińskiej</strong> .
              </p>
            </article>
            <div className=" flex justify-end items-end w-full ">
        {" "}
       
      </div>
          </div>
          
        </div>

        <ImagesToAboutMeLast />
      </div>
      <ButtonOffers />
   
    </div>
  );
};

export default AboutMeLastCard;
