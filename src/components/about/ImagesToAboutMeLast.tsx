"use client";
import React from "react";
import ImageCard from "./ImageCard";
import { motion } from "framer-motion";

const imageURLs = [
  {
    src: "/terapia-manualna-zatok/terapia-zatok-cover.jpg",
    label: "Terapia manualna w bólach zatok",
    caption: "Terapia manualna w bólach zatok",
    href: "oferta/terapia-manualna-w-bolach-zatok",
  },
  {
    src: "/offers-photo/kobido-omnie.jpg",
    label: "masaz kobido",
    caption: "Masaż Kobido",
    href: "/oferta/masaz-kobido",
  },
  {
    src: "/kobido-kinesiotaping-omnie.jpg",
    label: "Kinesiotaping limfatyczny",
    caption: "Kinesiotaping limfatyczny ",
    href: "/oferta/masaz-kobido",
  },
];

const ImagesToAboutMeLast = () => {
  return (
    <div className="flex flex-row items-center justify-center w-full sm:px-8  py-1 gap-2 ">
      <div className="flex flex-col justify-center items-center  lg:flex-row gap-4 overflow-x-auto  w-full  ">
        {imageURLs.map((imgUrl) => (
          <div
            key={imgUrl.label}
            className="flex  w-80 h-72 sm:w-[24rem] sm:h-[18rem] lg:w-96 lg:h-96 shadow-md shadow-black overflow-hidden my-4"
          >
            <motion.div
              className="w-full h-full"
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", duration: 2 }}
            >
              {" "}
              <ImageCard
                key={imgUrl.label}
                href={imgUrl.href}
                src={imgUrl.src}
                alt={imgUrl.label}
                caption={imgUrl.caption}
              />
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImagesToAboutMeLast;
