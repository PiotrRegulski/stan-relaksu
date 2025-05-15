"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { IoIosInformationCircleOutline } from "react-icons/io";

import ImageCard from "../about/ImageCard";
import ImageToOffersShort from "./ImageToOffersShort";
import ImagesToOfferShortLast from "./ImagesToOfferShortLast";
import { lato } from "../fonts";
import Image from "next/image";

const imgURLs = [
  {
    src: "/terapia-manualna.jpg",
    label: "terapia manualna",
    caption: "Terapia manualna",
    marginTop: "20px",
    href: "/oferta/terapia-manualna",
    callToAction: "Kompleksowe Leczenie Problemów z Kręgosłupem i Stawami",
  },
  {
    src: "/terapia-wisceralna.jpg",
    label: "terapia wisceralna",
    caption: "Terapia wisceralna",
    marginTop: "40px",
    href: "/oferta/terapia-wisceralna-w-problemach-jelitowo-trawiennych",
    callToAction:
      "Naturalne Metody Leczenia Problemów Jelitowych i Trawiennych",
  },
  {
    src: "/terapia-uro.jpg",
    label: "Terapia uroginekologiczna",
    caption: "Terapia uroginekologiczna",
    marginTop: "20px",
    href: "/oferta",
    callToAction:
      "Koncentruje Się Na Problemach Związanych Z Mięśniami Dna Miednicy Oraz Układem Moczowo-Płciowym",
  },
  {
    src: "/terapia-manualna-kolano.jpg",
    label: "Terapia manualna kolana",
    caption: "Terapia manualna kolana",
    marginTop: "40px",
    href: "/oferta/terapia-manualna",
    callToAction:
      "Sprawdza Się W Przypadku Osób Z Problemami Ortopedycznymi, Urazami W Obrębie Stóp, Kolan, Bioder, Barków, Łokci Czy Nadgarstków",
  },
];

const ImagesToAboutMeArticle = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div
      id="zdjecia-z-oferty"
      className=" lg:container mx-auto flex  flex-col   w-full justify-center  "
    >
  
    
      <div
        className=" flex flex-col overflow-x-auto py-8 xl:items-center  bg-gradient-to-r from-gray-200 from-10% via-white via-30% to-gray-100 to-90% outline-none scrollbar-thin scrollbar-webkit"
        ref={ref}
      >
        <div className="flex flex-row gap-4 mx-2  ">
          {" "}
          {imgURLs.map((imgUrl, index) => (
            <motion.div
              key={imgUrl.label}
              className="relative  shrink-0 w-[18rem] h-[26rem] sm:w-[14rem] sm:h-[26rem] md:w-[14rem] md:h-[20rem] lg:w-[15rem] lg:h-[23rem] overflow-hidden rounded-lg shadow-lg shadow-gary-200 border-4 border-white -mt-20 "
              style={{ marginTop: imgUrl.marginTop }}
            >
              <motion.div
                className="w-full h-full relative group "
                whileHover={{ scale: 1.1 }}
                initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : {}}
                transition={{ type: "spring", duration: 1 }}
              >
                 <motion.div className="absolute top-0 right-0 z-10 text-white m-2 text-4xl"><IoIosInformationCircleOutline /></motion.div>
                <ImageCard
                  key={imgUrl.label}
                  href={imgUrl.href}
                  src={imgUrl.src}
                  alt={imgUrl.label}
                />
                <motion.div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40 text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out cursor-pointer pointer-events-none px-6">
                  {imgUrl.callToAction}
                  <p className="text-xs mt-2">Dowiedz sie więcej</p>
                </motion.div>
              </motion.div>
              <motion.div
                className="absolute bottom-0 w-full bg-secondary bg-opacity-70  text-black font-semibold text-center py-2"
                initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: "spring" ,duration: 1 }}
              >
                {imgUrl.caption}
              </motion.div>
             
            </motion.div>
          ))}
        </div>
      </div>
      <div className=" flex flex-col-reverse justify-center rounded-b-xl items-center shadow-lg gap-10 bg-gradient-to-r from-secondary from-10% via-white via-30% to-secondary to-90%  w-full  my-8 py-20 px-2">
        <h2 className=" text-center">
          <span className="text-xl  lg:text-2xl font-bold">
            Przyniosę Ci ulgę w bólu oraz napięciu 
          </span>
          <br></br>
          <span className="text-lg lg:text-xl">stosując techniki</span>
          <br></br>
          <span className="text-xl lg:text-2xl font-bold">masażu powięziowego i terapii manualnej.</span>
        </h2>
      </div>
      <div className="flex flex-col justify-center w-full">
        <ImageToOffersShort />
      </div>
      <div className=" flex flex-col w-full md:justify-center md:items-center py-8 bg-gradient-to-r from-secondary from-10% via-white via-30% to-gray-100 to-90% px-2   sm:px-16 md:px-16 xl:px-32 lg:my-20  ">
        <div className="flex w-full justify-center items-center">
          {" "}
          <h2
            className={`${lato.className} text-center font-semibold text-xl lg:text-2xl lg:w-2/3  px-3 xl:py-6 bg-gray-100`}
          >
            Kompleksowa i holistyczna terapia dostosowana do Ciebie
          </h2>
        </div>
        <p className="text-center antialiased text-pretty text-base  lg:text-lg  mx-auto px-2 my-2  py-3 lg:my-2 2xl:my-2 h-full lg:w-2/3  ">
          W pracy zajmuje się kompleksową i holistyczną
          <strong> terapią w problemach jelitowo-trawiennych</strong>, zgagach,
          refluksie, IBS, SIBO (terapia wisceralna w problemach
          jelitowo-trawiennych).
        </p>
        <div className="flex  gap-10 py-6  w-full justify-center items-center ">
          {" "}
          <div className="relative w-20 h-20 ">
            {" "}
            <Image
              src="/obrazkiKontury/massage-icon.png"
              alt="ikonka konturowa masażu"
              fill
              priority={false}
              className="object-cover  w-full h-full "
              sizes="(max-width: 600px) 100vw, 50vw"
            />
          </div>{" "}
          <div className="relative w-20 h-20 ">
            {" "}
            <Image
              src="/obrazkiKontury/chiropractic-icon.png"
              alt="ikonka konturowa masażu"
              fill
              priority={false}
              className="object-cover  w-full h-full "
              sizes="(max-width: 600px) 100vw, 50vw"
            />
          </div>{" "}
        </div>

        <div className="bg-gray-100 flex flex-col w-full justify-center items-center  rounded-lg shadow-md my-10 py-4 xl:p-16">
          <h3 className=" text-lg lg:text-xl font-bold mb-4 text-center">
            Indywidualnie Dobrane Terapie 
          </h3>{" "}
          <p className="text-base lg:text-lg mb-6 text-center ">
            Zajmę się indywidualnie dobraną do Twoich potrzeb terapią
            uroginekologiczną.{" "}
          </p>{" "}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 font-semibold p-2 ">
            <div className="p-4  border border-gray-300 shadow-lg rounded-lg text-center bg-white text-base xl:text-lg flex justify-center items-center">
              {" "}
              <p>Rozejściem mięśni prostych brzucha.</p>{" "}
            </div>{" "}
            <div className="p-4 bg-white border border-gray-300 shadow-lg rounded-lg text-center ">
              {" "}
              <p>
                Problemem bolesnych miesiączek, czy bolesnego współżycia.
              </p>{" "}
            </div>{" "}
            <div className="p-4 bg-white border border-gray-300 shadow-lg rounded-lg xl:text-lg text-center flex justify-center items-center">
              {" "}
              <p>
                Pracą z <strong>blizną po cesarskim cięciu</strong>.
              </p>{" "}
            </div>{" "}
            <div className="p-4 bg-white border border-gray-300 shadow-lg rounded-lg text-center ">
              {" "}
              <p>Nietrzymaniem moczu, czy pęcherzem nadreaktywnym.</p>{" "}
            </div>{" "}
          </div>{" "}
        </div>
        <div className="flex flex-col w-full justify-center items-center my-6">
          <h3 className="text-center font-semibold text-lg ">
            Terapia Manualna Blizn
          </h3>
          <p className=" antialiased text-center  text-base lg:text-lg mx-auto px-2   my-2 md:px-2 py-3 lg:my-2 2xl:my-2 h-full lg:w-2/3">
            W <strong>terapii manualnej blizn</strong>, łącząc specjalistyczne
            techniki. Pomogę Ci poprawić wygląd blizn pooperacyjnych oraz
            zminimalizować ich widoczność, bolesność czy zapobiec zrostom.
          </p>
        </div>

        <ImagesToOfferShortLast />
      </div>
    </div>
  );
};

export default ImagesToAboutMeArticle;
