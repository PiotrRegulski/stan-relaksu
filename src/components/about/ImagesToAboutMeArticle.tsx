"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ImageCard from "../about/ImageCard";
import ImageToOffersShort from "./ImageToOffersShort";
import ImagesToOfferShortLast from "./ImagesToOfferShortLast";
import { Noto } from "../fonts";

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
          className=" flex w-full flex-col justify-center items-center  bg-white py-4"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", duration: 5, ease: "easeInOut" }}
        >
          <h2 className={`${Noto.className} text-left text-xl md:text-2xl xl:text-3xl px-3 w-2/3 `}>
            Przyniosę Ci ulgę w bólu oraz napięciu.
          </h2>
          <p className="text-justify  md:w-2/3 text-lg md:text-xl xl:text-xl mx-auto md:mx-4 my-2  px-3 py-2     h-full">
            Stosując techniki
            <strong> masażu powięziowego</strong> i{" "}
            <strong>terapii manualnej</strong>, podpowiem Ci jak możesz pracować
            ze swoim ciałem, poprzez ćwiczenia czy oddech dla poprawy Twojego
            dobrostanu.
          </p>
        </motion.div>
        <ImageToOffersShort />
      </div>
      <div className=" flex flex-col w-full justify-center items-center  md:py-8 ">
        <h2
          className={`${Noto.className} text-xl px-2  md:text-3xl xl:text-3xl text-left w-2/3`}
        >
          Kompleksowa Terapia i Rehabilitacja:<br></br> Od Problemów Jelitowych
          Po
          <span className="">
           
            Blizny i Bolesne Miesiączki
          </span>
        </h2>

        <p className="text-justify  text-lg md:text-xl xl:text-xl mx-auto md:mx-4 my-2  px-3 py-3  lg:my-2 2xl:my-2    h-full w-2/3">
          W pracy zajmuje się <strong>problemami jelitow-trawiennymi</strong>,
          <strong> terapią uroginekologiczną</strong>, pracą z blizną po{" "}
          cesarskim cięciu, bliznach operacyjnych, bolesnymi miesiączkami czy
          współżyciem.
        </p>
        <ImagesToOfferShortLast />
      </div>
    </div>
  );
};

export default ImagesToAboutMeArticle;
