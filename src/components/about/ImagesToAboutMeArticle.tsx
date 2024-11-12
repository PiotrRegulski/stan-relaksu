"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ImageCard from "../about/ImageCard";
import ImageToOffersShort from "./ImageToOffersShort";
import ImagesToOfferShortLast from "./ImagesToOfferShortLast";
import { Noto } from "../fonts";
import ImagesToAboutExit from "./ImageToAboutExit";

const imgURLs = [
  {
    src: "/terapia-manualna.jpg",
    label: "terapia manualna",
    caption: "Terapia manualna",
    marginTop: "20px",
    href: "/offer/terapia-manualna",
  },
  {
    src: "/terapia-wisceralna.jpg",
    label: "terapia wisceralna",
    caption: "Terapia wisceralna",
    marginTop: "40px",
    href: "/offer/terapia-wisceralna-w-problemach-jelitowo-trawiennych",
  },
  {
    src: "/terapia-uro.jpg",
    label: "Terapia uroginekologiczna",
    caption: "Terapia uroginekologiczna",
    marginTop: "20px",
    href: "/offer",
  },
  {
    src: "/terapia-manualna-kolano.jpg",
    label: "Terapia manualna kolana",
    caption: "Terapia manualna kolana",
    marginTop: "40px",
    href: "/offer/terapia-manualna",
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
      <div className="flex overflow-x-auto py-8  gap-2  md:gap-4 w-screen bg-gradient-to-b from-secondary from-50% to-transparent px-4 lg:justify-center lg:items-center">
        {imgURLs.map((imgUrl, index) => (
          <motion.div
            key={imgUrl.label}
            className="relative flex shrink-0 w-[18rem] h-[26rem] md:w-[20rem] md:h-[30rem] lg:w-[15rem] lg:h-[24rem] overflow-hidden mr-2 rounded-lg"
            style={{ marginTop: imgUrl.marginTop }}
          >
            <motion.div
              className="w-full h-full"
              whileHover={{ scale: 1.1 }}
              initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", duration: 4 }}
            >
              <ImageCard
                key={imgUrl.label}
                href={imgUrl.href}
                src={imgUrl.src}
                alt={imgUrl.label}
              />
            </motion.div>
            <motion.div
              className="absolute bottom-0 w-full  bg-opacity-50 bg-black text-white text-center py-2"
              initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", duration: 5 }}
            >
              {imgUrl.caption}
            </motion.div>
          </motion.div>
        ))}
      </div>
      <div className="flex flex-col justify-center w-full py-4">
        {" "}
        <motion.div
          className=" flex w-full flex-col justify-center items-center  bg-white py-4  "
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", duration: 5, ease: "easeInOut" }}
        >
         
          <p className=" text-center  md:w-2/3 text-lg md:text-xl xl:text-xl mx-auto md:mx-4 my-2  px-3 py-2  lg:w-2/3   h-full">
            Przyniosę Ci ulgę w bólu oraz napięciu stosując techniki
            <strong> masażu powięziowego</strong> i{" "}
            <strong>terapii manualnej</strong>, <br></br> podpowiem Ci jak
            możesz pracować ze swoim ciałem, poprzez ćwiczenia czy oddech <br></br> dla
            poprawy Twojego dobrostanu.
          </p>
        </motion.div>
        <ImageToOffersShort />
      </div>
      <div className=" flex flex-col w-full md:justify-center md:items-center py-8 bg-secondary ">
        <h2
          className={`${Noto.className} text-center font-semibold text-xl md:text-2xl xl:text-2xl  lg:w-2/3 px-3 `}
        >
          Kompleksowa i holistyczna terapia dostosowana do Ciebie
        </h2>

        <p className="text-justify text-lg md:text-xl xl:text-xl mx-auto  my-2  px-6 py-3  lg:my-2 2xl:my-2 h-full lg:w-2/3">
          W pracy zajmuje się kompleksową i holistyczną
          <strong> terapią w problemach jelitowo-trawiennych</strong>, zgagach,
          refluksie, IBS, SIBO (terapia wisceralna w problemach
          jelitowo-trawiennych). Zajmę się indywidualnie dobraną do Twoich
          potrzeb <strong>terapią uroginekologiczną:</strong> pracą z
          <strong> blizną po cesarskim cięciu</strong>, rozejściem mięśni
          prostych brzucha, problemem bolesnych miesiączek czy bolesnego
          współżycia, nietrzymaniem moczu czy pęcherzem nadreaktywnym. W{" "}
          <strong>terapii manualnej blizn</strong> łącząc specjalistyczne
          techniki pomogę Ci poprawić wygląd blizn pooperacyjnych oraz
          zninimalizować ich widoczność, bolesność czy zapobiec zrostom..
        </p>
        <p></p>
        <ImagesToOfferShortLast />
       
      </div>
    </div>
  );
};

export default ImagesToAboutMeArticle;
