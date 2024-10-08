"use client"
import React from 'react';
import { motion } from "framer-motion";
import ImageCard from './ImageCard';
const imgURLs = [
    {
      src: "/masaz-relaksacyjny-ciaza/masaz-relaksacyjny-kobiet-wciazy.jpg",
      label: "Masaz relaksacyjny kobiet w ciąży",
      caption: "Masaz relaksacyjny kobiet w ciąży",
      marginTop: "20px",
    },
  
    {
      src: "/terapia-wisceralna/terapia-wisceralna-first.jpg",
      label: "Terapia wisceralna",
      caption: "Terapia wisceralna",
      marginTop: "40px",
    },]
const ImagesToOfferShortLast = () => {
    return (
        <div className="flex overflow-x-auto py-12  gap-2 pl-1 md:gap-4 w-screen md:justify-center md:items-center mr-4 md:mr-0">
        {imgURLs.map((imgUrl) => (
          <div
            key={imgUrl.label}
            className="relative flex shrink-0 w-[29rem] h-80 2xl:w-[35rem] 2xl:h-[25rem] overflow-hidden "
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

export default ImagesToOfferShortLast;