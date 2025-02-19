"use client";
import React from "react";
import { motion } from "framer-motion";
import ImageCard from "../about/ImageCard";
import ImageToOffersShort from "./ImageToOffersShort";
import ImagesToOfferShortLast from "./ImagesToOfferShortLast";
import { lato } from "../fonts";

const imgURLs = [
  {
    src: "/terapia-manualna.jpg",
    label: "terapia manualna",
    caption: "Terapia manualna",
    marginTop: "20px",
    href: "/oferta/terapia-manualna",
  },
  {
    src: "/terapia-wisceralna.jpg",
    label: "terapia wisceralna",
    caption: "Terapia wisceralna",
    marginTop: "40px",
    href: "/oferta/terapia-wisceralna-w-problemach-jelitowo-trawiennych",
  },
  {
    src: "/terapia-uro.jpg",
    label: "Terapia uroginekologiczna",
    caption: "Terapia uroginekologiczna",
    marginTop: "20px",
    href: "/oferta",
  },
  {
    src: "/terapia-manualna-kolano.jpg",
    label: "Terapia manualna kolana",
    caption: "Terapia manualna kolana",
    marginTop: "40px",
    href: "/oferta/terapia-manualna",
  },
];

const ImagesToAboutMeArticle = () => {
  // const ref = useRef(null);
  // const isInView = useInView(ref, { once: true });
  return (
    <div
      id="zdjecia-z-oferty"
      className="flex  flex-col  w-full justify-center bg-white   "
    >
      <div className="flex overflow-x-auto py-8  gap-2  xl:gap-4 w-full bg-gradient-to-b from-white  via-secondary to-white px-4 lg:justify-center lg:items-center">
        {imgURLs.map((imgUrl, index) => (
          <motion.div
            key={imgUrl.label}
            className="relative flex shrink-0 w-[18rem] h-[26rem] sm:w-[14rem] sm:h-[18rem] md:w-[14rem] md:h-[20rem] lg:w-[14rem] lg:h-[24rem] overflow-hidden mr-2 rounded-lg"
            style={{ marginTop: imgUrl.marginTop }}
          >
            <motion.div
              className="w-full h-full"
              whileHover={{ scale: 1.1 }}
              initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", duration: 2 }}
            >
              <ImageCard
                key={imgUrl.label}
                href={imgUrl.href}
                src={imgUrl.src}
                alt={imgUrl.label}
              />
            </motion.div>
            <motion.div
              className="absolute bottom-0 w-full bg-secondary bg-opacity-70  text-black font-semibold text-center py-2"
              initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", duration: 2 }}
            >
              {imgUrl.caption}
            </motion.div>
          </motion.div>
        ))}
      </div>
      <div className="flex flex-col justify-center w-full py-4 ">
        {" "}
        <motion.div
          className=" flex w-full flex-col justify-center items-center   py-8  bg-gradient-to-b from-white  via-secondary via-80%  to-white  rounded-xl  "
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", duration: 5, ease: "easeInOut" }}
        >
          <h2
            className={`${lato.className} text-center font-semibold text-lg md:text-xl xl:text-xl lg:w-2/3  px-3 xl:py-6`}
          >
            W czym mogę Ci pomóc?
          </h2>
          <p className=" text-center  text-pretty  sm:w-2/3 text-base font-medium md:text-lg xl:text-xl mx-auto md:mx-4 xl:px-24 2xl:px-8 my-2  px-2 py-2  lg:w-2/3 2xl:w-1/3  h-full">
            Przyniosę Ci ulgę w bólu oraz napięciu stosując techniki
            <strong> masażu powięziowego</strong> i{" "}
            <strong>terapii manualnej.</strong>
          </p>
          <p className=" text-center  text-pretty  sm:w-2/3 text-base font-medium  md:text-lg xl:text-xl mx-auto md:mx-4 xl:px-24 2xl:px-8 my-2  px-2 py-2  lg:w-2/3 2xl:w-1/3    h-full">
            Podpowiem Ci jak możesz pracować ze swoim ciałem, poprzez ćwiczenia
            czy oddech dla poprawy Twojego dobrostanu.
          </p>
        </motion.div>
        <ImageToOffersShort />
      </div>
      <div className=" flex flex-col w-full md:justify-center md:items-center py-8 bg-secondary px-2   sm:px-16 md:px-16 xl:px-32  xl:rounded-3xl ">
        <h2
          className={`${lato.className} text-center font-semibold text-lg md:text-xl xl:text-2xl lg:w-2/3  px-3 xl:py-6`}
        >
          Kompleksowa i holistyczna terapia dostosowana do Ciebie
        </h2>

        <p className="text-justify antialiased text-pretty  text-base md:text-base xl:text-xl mx-auto px-2 my-2  py-3 lg:my-2 2xl:my-2 h-full lg:w-2/3  ">
          W pracy zajmuje się kompleksową i holistyczną
          <strong> terapią w problemach jelitowo-trawiennych</strong>, zgagach,
          refluksie, IBS, SIBO (terapia wisceralna w problemach
          jelitowo-trawiennych).
        </p>

        <div className="bg-gray-100  rounded-lg shadow-md my-10 py-4 xl:p-16">
          <h3 className="text-lg lg:text-xl xl:text-2xl font-bold mb-4 text-center">
            Indywidualnie Dobrana Terapia Uroginekologiczna
          </h3>{" "}
          <p className="lg:text-base xl:text-lg mb-6 text-center ">
            Zajmę się indywidualnie dobraną do Twoich potrzeb terapią
            uroginekologiczną.{" "}
          </p>{" "}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 font-semibold p-2 ">
            <div className="p-4  border border-gray-300 shadow-lg rounded-lg text-center bg-white xl:text-lg flex justify-center items-center">
              {" "}
              <p>Rozejściem mięśni prostych brzucha.</p>{" "}
            </div>{" "}
            <div className="p-4 bg-white border border-gray-300 shadow-lg rounded-lg text-center ">
              {" "}
              <p>
                Problemem bolesnych miesiączek czy bolesnego współżycia.
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
              <p>Nietrzymaniem moczu czy pęcherzem nadreaktywnym.</p>{" "}
            </div>{" "}
          </div>{" "}
        </div>

        <h3 className="text-center font-semibold text-lg md:text-xl xl:text-xl lg:w-2/3 px-3 mt-4">
          Terapia Manualna Blizn
        </h3>

        <p className=" antialiased text-justify  text-base md:text-base xl:text-xl mx-auto px-2   my-2 md:px-2 py-3 lg:my-2 2xl:my-2 h-full lg:w-2/3">
          W <strong>terapii manualnej blizn</strong>, łącząc specjalistyczne
          techniki. Pomogę Ci poprawić wygląd blizn pooperacyjnych oraz
          zminimalizować ich widoczność, bolesność czy zapobiec zrostom.
        </p>

        <ImagesToOfferShortLast />
      </div>
    </div>
  );
};

export default ImagesToAboutMeArticle;
