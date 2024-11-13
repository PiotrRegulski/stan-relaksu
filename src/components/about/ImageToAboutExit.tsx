"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ImageCard from "./ImageCard";
const imgURLs = [
    {
        src: "/terapia-manualna-zatok/terapia-zatok-cover.jpg",
        label: "Terapia manualna w bólach zatok",
        caption: "Terapia manualna w bólach zatok",
        href:"offer/terapia-manualna-w-bolach-zatok",
        marginTop: "20px",
      
      },
      {
        src: "/offers-photo/kobido-omnie.jpg",
        label: "Terapia stawów skroniowo-żuchwowych",
        caption: "Terapia stawów skroniowo-żuchwowych",
        href:"/offer/",
        marginTop: "20px",
    
      },
      {
        src: "/kobido-kinesiotaping-omnie.jpg",
        label: "Kinesiotaping limfatyczny",
        caption: "Kinesiotaping limfatyczny ",
        href:"/offer/masaz-kobido",
        marginTop: "20px",
    
      },
      {
        src: "/karuzelaOmnie/masaż-twarzy-kobido.jpg", 
        label: "Masaż twarzy Kobido",
        caption: "Masaż twarzy Kobido ",
        href:"/offer/masaz-kobido",
        marginTop: "20px",
    
      },
];
const ImagesToAboutExit = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div
      ref={ref}
      className="flex overflow-x-auto py-2 gap-2   md:gap-4 w-screen md:justify-center md:items-center px-2 mr-4 md:mr-0 "
    >
      {imgURLs.map((imgUrl, index) => (
        <div
          key={imgUrl.label}
          className="relative flex shrink-0 w-[20rem] h-[18rem] md:w-[20rem] md:h-[18rem] overflow-hidden "
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
            className="absolute bottom-0 w-full bg-opacity-20 bg-black text-white text-center py-2"
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