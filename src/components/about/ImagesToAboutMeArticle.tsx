"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ImageCard from "../about/ImageCard";
import ImageToOffersShort from "./ImageToOffersShort";
import ImagesToOfferShortLast from "./ImagesToOfferShortLast";

const imgURLs = [
  {
    src: "/terapia-manualna.jpg",
    label: "terapia manualna",
    caption: "Terapia manualna",
    marginTop: "20px",
    href:"/offer/terapia-manualna"
  },
  {
    src: "/terapia-wisceralna.jpg",
    label: "terapia wisceralna",
    caption: "Terapia wisceralna",
    marginTop: "40px",
    href:"/offer"

  },
  {
    src: "/terapia-uro.jpg",
    label: "terapia wisceralna",
    caption: "Terapia urokinelogiczna",
    marginTop: "20px",
    href:"/offer"

  },
  {
    src: "/terapia-manualna-kolano.jpg",
    label: "Terapia manualna kolana",
    caption: "Terapia manualna kolana",
    marginTop: "40px",
    href:"/offer/terapia-manualna"

  },
];

const ImagesToAboutMeArticle = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div
      id="zdjecia-z-oferty"
      className="flex  flex-col  w-full justify-center bg-white border-mainpeach  "
    >
      <div
        ref={ref}
        className="flex overflow-x-auto py-8  gap-2 pl-1 md:gap-4 w-screen  2xl:justify-center bg-primary"
      >
        {imgURLs.map((imgUrl, index) => (
          <motion.div
            key={imgUrl.label}
            className="relative flex shrink-0 w-[13rem] h-[22rem] md:w-[20rem] md:h-[30rem] overflow-hidden mr-2"
            style={{ marginTop: imgUrl.marginTop }}
          >
            <motion.div
              className="w-full h-full"
              whileHover={{ scale: 1.1 }}
              initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ type: "spring", duration: 2, }}
            >
              <ImageCard
                
                key={imgUrl.label}
                href={imgUrl.href}
                src={imgUrl.src}
                alt={imgUrl.label}
              />
            </motion.div>
            <motion.div
              ref={ref}
              className="absolute bottom-0 w-full font-[Cormorant-Garamond] bg-opacity-50 bg-black text-white text-center py-2"
              initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ type: "spring", duration: 2,  }}
            >
              {imgUrl.caption}
            </motion.div>
          </motion.div>
        ))}
      </div>
      <div
        className="flex flex-col justify-center     w-full py-4  border-b-4 border-t-4"
        ref={ref}
      >
        {" "}
        <motion.div
          className=" flex w-full justify-center items-center border-x-4 border-black "
          initial={{ y: -100, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ type: "spring", duration: 2, ease: "easeInOut" }}
        >
          <h2 className="text-center  md:w-1/2 text-lg md:text-xl xl:text-2xl  mx-auto md:mx-4  px-3 py-8      h-full bg-opacity-90 border-x-4 border-secondary  ">
            Przyniosę Ci ulgę w bólu oraz napięciu stosując techniki
            <strong> masażu powięziowego</strong> i{" "}
            <strong>terapii manualnej</strong>, podpowiem Ci jak możesz pracować
            ze swoim ciałem, poprzez ćwiczenia czy oddech dla poprawy Twojego
            dobrostanu.
          </h2>
        </motion.div>
        <ImageToOffersShort />
      </div>
      <div className=" flex flex-col w-full justify-center items-center border-b-4 bg-secondary md:py-32 ">
        <p className="text-center  md:w-1/2 text-lg md:text-xl xl:text-2xl mx-auto md:mx-4 my-2  px-3 py-8  lg:my-2 2xl:my-2    h-full">
          W pracy zajmuje się też{" "}
          <strong>problemami jelitow-trawiennymi</strong>,
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
