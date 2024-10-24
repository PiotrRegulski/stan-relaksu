"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ImageCard from "./ImageCard";
const imgURLs = [
  {
    src: "/masaz-relaksacyjny-ciaza/masaz-relaksacyjny-kobiet-wciazy.jpg",
    label: "Masaz relaksacyjny kobiet w ciąży",
    caption: "Masaz relaksacyjny kobiet w ciąży",
    marginTop: "20px",
    href:"/offer"

  },

  {
    src: "/terapia-wisceralna/terapia-wisceralna-first.jpg",
    label: "Terapia wisceralna",
    caption: "Terapia wisceralna",
    marginTop: "40px",
    href:"/offer/terapia-wisceralna-w-problemach-jelitowo-trawiennych"

  },
];
const ImagesToOfferShortLast = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div
      ref={ref}
      className="flex overflow-x-auto py-2    md:gap-4 w-screen md:justify-center md:items-center ml-4 mr-4 md:mr-0 "
    >
      {imgURLs.map((imgUrl, index) => (
        <div
          key={imgUrl.label}
          className="relative flex shrink-0 w-[23rem] h-[15rem] md:w-[21rem] md:h-[15rem] overflow-hidden "
          style={{ marginTop: imgUrl.marginTop }}
        >
          <motion.div
            className="w-full h-full border-white border-2"
            whileHover={{ scale: 1.1 }}
            initial={{ x: 100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ type: "spring", duration: 2, stiffness: 50 }}
          >
            <ImageCard key={imgUrl.label} href={imgUrl.href} src={imgUrl.src} alt={imgUrl.label} />
          </motion.div>
          <motion.div
            className="absolute bottom-0 w-full font-[Cormorant-Garamond] bg-opacity-50 bg-black border-2 border-white text-white text-center py-2"
            initial={{ x: 100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ type: "spring", duration: 1 }}
          >
            {imgUrl.caption}
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default ImagesToOfferShortLast;
