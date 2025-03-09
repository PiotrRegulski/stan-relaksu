import React from "react";
import ButtonOffers from "./ButtonOffers";
import Image from "next/image";
import { lato } from "../fonts";
import ImagesToAboutExit from "./ImageToAboutExit";
import FaceOfferImage from "./FaceOfferImage";
const AboutMeLastCard = () => {
  return (
    <div className=" lg:container mx-auto flex flex-col mx:auto md:mb-12 rounded-md animate-fadeIn   transition-transform duration-200 ease-in-out bg-gradient-to-r from-secondary from-10% via-white via-30% to-secondary to-90%  ">
      <div className="flex flex-col  w-full  justify-center items-center ">
        <div className="flex flex-col w-full md:justify-center md:items-center px-2 sm:px-12 py-6 md:px-16 ">
          <h2 className="text-center font-semibold text-lg lg:text-2xl py-6 lg:w-2/3 px-3 xl:py-6 ">
            Moją pasją jest terapia manualna twarzy.
          </h2>

          <div className="flex flex-col-reverse md:flex-row xl:w-full justify-center items-center bg-white border-4  gap-4 border-mainpeach xl:mb-20 lg:py-20 px-5 rounded my-6 shadow-lg ">
      
              {" "}
              <FaceOfferImage
                href={"oferta/terapia-manualna-w-bolach-zatok"}
                src={"/terapia-manualna-zatok/terapia-zatok-cover.jpg"}
                label={"Terapia manualna w bólach zatok"}
                caption={"Terapia manualna w bólach zatok"}
              />
        

            <div className="w-full lg:w-1/2  ">
              <h3 className="text-lg lg:text-xl font-semibold text-left my-2">
                Ulga w bólach twarzy i głowy
              </h3>
              <p className="text-left text-pretty text-base font-bold lg:text-3xl py-2 px-2">
                Dzięki pracy w obrębie twarzy, głowy i szyi, możesz uzyskać ulgę
                w bólach:
              </p>
              <div className="flex ml-4 mt-4">
                {" "}
                <ul className="list-disc pl-5 space-y-2 text-gray-700 text-lg">
                  <li>stawów skroniowo-żuchwowych</li>
                  <li>bólach głowy, migrenach</li>
                  <li>problemach z zatokami</li>
                  <li>uczuciem napięcia i zmęczenia</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col-reverse md:flex-row xl:w-full justify-center items-center bg-white  gap-4 border-mainpeach border-4 xl:mb-20 lg:py-20 px-5 rounded my-6 shadow-lg ">
            <FaceOfferImage
              href={"/oferta/masaz-kobido"}
              src={"/kobido-kinesiotaping-omnie.jpg"}
              label={"Kinesiotaping limfatyczny"}
              caption={"Kinesiotaping limfatyczny"}
            />{" "}
            <div className="w-full lg:w-1/2  ">
              <h3 className="text-lg lg:text-xl font-semibold text-left my-2">
                Piękny wygląd twarzy
              </h3>
              <p className="text-left text-pretty text-base font-bold lg:text-3xl py-2 px-2">
                Zajmę się zdrowiem i pięknym wyglądem Twojej twarzy poprzez:
              </p>
              <div className="flex ml-4 mt-4">
                {" "}
                <ul className="list-disc pl-5 space-y-2 text-gray-700 text-lg">
                  <li>Masaż Kobido</li>
                  <li>Igłoterapie Estetyczną</li>
                  <li>
                    Techniki manualne z wykorzystaniem guasha, czy bańki
                    chińskiej
                  </li>
                </ul>
              </div>
            </div>
          </div>
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
