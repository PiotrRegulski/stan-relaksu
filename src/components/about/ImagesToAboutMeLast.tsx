"use client"
import React from "react";
import ImageCard from "./ImageCard";
import { motion } from "framer-motion";

const imageURLs = [
  {
    src: "/terapia-manualna-zatok/terapia-zatok-cover.jpg",
    label: "Terapia manualna w bólach zatok",
    caption: "Terapia manualna w bólach zatok",
    href:"offer/terapia-manualna-w-bolach-zatok"
  
  },
  {
    src: "/offers-photo/kobido-omnie.jpg",
    label: "masaz kobido",
    caption: "Masaż Kobido",
    href:"/offer/masaz-kobido"

  },
  {
    src: "/kobido-kinesiotaping-omnie.jpg",
    label: "Kinesiotaping limfatyczny",
    caption: "Kinesiotaping limfatyczny ",
    href:"/offer/masaz-kobido"

  },
];

const ImagesToAboutMeLast = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full sm:px-8 xl:w-2/3 py-12 gap-2 ">
      <div className="flex flex-col  sm:flex-row gap-2 overflow-x-auto   ">
        {imageURLs.slice(0, 2).map((imgUrl) => (
          <div
            key={imgUrl.label}
            className="flex flex-col  w-80 h-72 lg:w-72 lg:h-64 shadow-md shadow-black overflow-hidden my-4"
          >
            <motion.div
              className="w-full h-full"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", duration: 1 }}
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
      <div className="flex justify-center w-full mt-2">
        <div className="flex flex-col w-80 h-72 lg:w-72 lg:h-64 shadow-xl shadow-black overflow-hidden">
          <motion.div
            className="w-full h-full"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", duration: 2, stiffness: 50 }}
          >
            {" "}
            <ImageCard
              key={imageURLs[2].label}
              href={imageURLs[2].href}
              src={imageURLs[2].src}
              alt={imageURLs[2].label}
              caption={imageURLs[2].caption}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ImagesToAboutMeLast;
