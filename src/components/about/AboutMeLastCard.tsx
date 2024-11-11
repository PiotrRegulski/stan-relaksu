import React from "react";
import ImagesToAboutMeLast from "./ImagesToAboutMeLast";
import ButtonOffers from "./ButtonOffers";
import { Noto } from "../fonts";
const AboutMeLastCard = () => {
  return (
    <div className="flex flex-col  mx:auto   md:mb-12      rounded-md animate-fadeIn   transition-transform duration-200 ease-in-out bg-white  ">
      <div className="flex flex-col  w-full  justify-center items-center ">
        {" "}
        <div className="flex flex-col md:w-2/3   ">
          <h3
            className={`${Noto.className} text-xl px-2 py-3 md:text-3xl xl:text-3xl text-left text-triadgray `}
          >
            Moją pasją jest terapia manualna twarzy.
          </h3>
          <article className="text-justify  text-lg md:text-xl xl:text-xl mx-auto  my-2  px-3 py-3  lg:my-2 2xl:my-2 text-triadgray ">
            <p className="">
              Dzięki pracy w obrębie<strong> twarzy, głowy i szyi</strong>{" "}
              możesz uzyskać ulgę w bólach stawów skroniowo-żuchwowych, bólach
              głowy, migrenach, problemach z zatokami oraz uczuciem napięcia i
              zmęczenia. Zajmę się zdrowiem i pięknym wyglądem Twojej twarzy
              poprzez <strong>masaż Kobido</strong> czy
              <strong> igłoterapię estetyczna</strong> oraz techniki manualne z
              wykorzystaniem guasha czy <strong>bańki chińskiej</strong> .
              <br></br>
            </p>
          </article>
        </div>
        <ImagesToAboutMeLast />
      </div>
      <div className="flex w-full justify-center items-center mb-4">
        <ButtonOffers />
      </div>
    </div>
  );
};

export default AboutMeLastCard;
