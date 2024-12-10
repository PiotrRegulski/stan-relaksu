"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ImageCard from "./ImageCard";
const imgURLs = [
    {
        src: "/terapia-manualna-zatok/terapia-zatok-cover.jpg",
        label: "Terapia manualna w bólach zatok",
        caption: "Terapia manualna w bólach zatok",
        href:"oferta/terapia-manualna-w-bolach-zatok",
        marginTop: "20px",
      
      },
      {
        src: "/offers-photo/kobido-omnie.jpg",
        label: "Terapia stawów skroniowo-żuchwowych",
        caption: "Terapia stawów skroniowo-żuchwowych",
        href:"oferta",
        marginTop: "20px",
    
      },
      {
        src: "/kobido-kinesiotaping-omnie.jpg",
        label: "Kinesiotaping limfatyczny",
        caption: "Kinesiotaping limfatyczny ",
        href:"/oferta/masaz-kobido",
        marginTop: "20px",
    
      },
      {
        src: "/karuzelaOmnie/masaż-twarzy-kobido.jpg", 
        label: "Masaż twarzy Kobido",
        caption: "Masaż twarzy Kobido ",
        href:"/oferta/masaz-kobido",
        marginTop: "20px",
    
      },
];
const ImagesToAboutExit = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div
      ref={ref}
      className="flex overflow-x-auto py-2 gap-2 md:gap-4 w-full md:justify-center md:items-center px-2 mr-4 md:mr-0 "
    >
      {imgURLs.map((imgUrl, index) => (
        <div
          key={imgUrl.label}
          className="relative flex shrink-0 w-[20rem] h-[18rem] sm:w-[19rem] sm:h-[17rem]  md:w-[19rem] md:h-[17rem] overflow-hidden "
          style={{ marginTop: imgUrl.marginTop }}
        >
          <motion.div
            className="w-full h-full "
            whileHover={{ scale: 1.1 }}
            initial={{ x: 100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ type: "spring", duration: 2, stiffness: 50 }}
          >
            <ImageCard key={imgUrl.label} href={imgUrl.href} src={imgUrl.src} alt={imgUrl.label} />
          </motion.div>
          <motion.div
            className="absolute bottom-0 w-full font-semibold  bg-secondary bg-opacity-70 text-black text-center py-2"
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

export default ImagesToAboutExit;
