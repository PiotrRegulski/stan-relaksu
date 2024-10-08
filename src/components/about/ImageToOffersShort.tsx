"use client"
import React from 'react';
import { motion } from "framer-motion";
import ImageCard from './ImageCard';
const imgURLs = [
    {
      src: "/masaz-powieziowy/masaż-powięziowy-t.jpg",
      label: "Masaż powięziowy",
      caption: "Masaż powięziowy",
      marginTop: "20px",
    },
  
    {
      src: "/terapia-manualna/terapia-manualna-kolano-klawiki-second.jpg",
      label: "terapia manualna",
      caption: "Terapia manualna",
      marginTop: "40px",
    },
   
  
  ];
const ImageToOffersShort = () => {

    return (
        <div className="flex overflow-x-auto py-12   pl-1 md:gap-4 w-screen md:justify-center md:items-center ">
      {imgURLs.map((imgUrl) => (
        <div
          key={imgUrl.label}
          className="relative flex shrink-0 w-80 h-[29rem] 2xl:w-[25rem] 2xl:h-[30rem] overflow-hidden mr-2 md:mr-0"
          style={{ marginTop: imgUrl.marginTop }}
        >
          <motion.div
            className="w-full h-full"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", duration: 1 }}
          >
            <ImageCard key={imgUrl.label} src={imgUrl.src} alt={imgUrl.label}  />
          </motion.div>
          <div className="absolute bottom-0 w-full font-[Cormorant-Garamond] bg-opacity-50 bg-black text-white text-center py-2">
            {imgUrl.caption}
          </div>
        </div>
      ))}
    </div>
    );
};

export default ImageToOffersShort;