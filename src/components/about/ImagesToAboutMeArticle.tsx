"use client";
import React from "react";
import { motion } from "framer-motion";
import ImageCard from "../about/ImageCard";
import ImageToOffersShort from "./ImageToOffersShort";
import ImagesToAboutMeLast from "./ImagesToAboutMeLast";
import ImagesToOfferShortLast from "./ImagesToOfferShortLast";
const imgURLs = [
  {
    src: "/terapia-manualna.jpg",
    label: "terapia manualna",
    caption: "Terapia manualna",
    marginTop: "20px",
  },

  {
    src: "/terapia-wisceralna.jpg",
    label: "terapia wisceralna",
    caption: "Terapia wisceralna",
    marginTop: "40px",
  },
  {
    src: "/terapia-uro.jpg",
    label: "terapia wisceralna",
    caption: "Terapia urokinelogiczna",
    marginTop: "20px",
  },
  {
    src: "/terapia-manualna-kolano.jpg",
    label: "terapia manualna kolano",
    caption: "terapia manualna kolano",
    marginTop: "40px",
  },
];
const ImagesToAboutMeArticle = () => {
  return (
    <div className="flex  flex-col  w-full justify-center bg-secondary border-mainpeach  ">
      <div className="flex overflow-x-auto py-8  gap-2 pl-1 md:gap-4 w-screen  2xl:justify-center bg-primary">
        {imgURLs.map((imgUrl) => (
          <div
            key={imgUrl.label}
            className="relative flex shrink-0 w-80 h-[29rem] 2xl:w-[25rem] 2xl:h-[35rem] overflow-hidden mr-2"
            style={{ marginTop: imgUrl.marginTop }}
          >
            <motion.div
              className="w-full h-full"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", duration: 1 }}
            >
              <ImageCard
                key={imgUrl.label}
                src={imgUrl.src}
                alt={imgUrl.label}
              />
            </motion.div>
            <div className="absolute bottom-0 w-full font-[Cormorant-Garamond] bg-opacity-50 bg-black text-white text-center py-2">
              {imgUrl.caption}
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col justify-center  bg-gradient-to-t from-transparent to-secondary   w-full lg:my-24 ">
        {" "}
        <div className=" flex w-full justify-center items-center ">
          <h2 className="text-left  md:w-1/2 text-lg md:text-xl xl:text-2xl mx-auto md:mx-4  px-3      h-full bg-opacity-90">
            Przyniosę Ci ulgę w bólu oraz napięciu stosując techniki
            <strong> masażu powięziowego</strong> i{" "}
            <strong>terapii manualnej</strong>, podpowiem Ci jak możesz pracować
            ze swoim ciałem, poprzez ćwiczenia czy oddech dla poprawy Twojego
            dobrostanu.
          </h2>
        </div>
        <ImageToOffersShort />
        <div className=" flex w-full justify-center ">
          <p className="text-left  md:w-1/2 text-lg md:text-xl xl:text-2xl mx-auto md:mx-4 my-12  px-3   lg:my-12 2xl:my-4    h-full bg-opacity-90">
            W pracy zajmuje się też{" "}
            <strong>problemami jelitow-trawiennymi</strong>,
            <strong> terapią uroginekologiczną</strong>, pracą z blizną po{" "}
            cesarskim cięciu, bliznach operacyjnych, bolesnymi miesiączkami czy
            współżyciem.
          </p>
        </div>
      </div>
      <ImagesToOfferShortLast />
    </div>
  );
};

export default ImagesToAboutMeArticle;
