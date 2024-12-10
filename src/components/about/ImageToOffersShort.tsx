"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ImageCard from "./ImageCard";
const imgURLs = [
  {
    src: "/masaz-powieziowy/masaż-powięziowy-t.jpg",
    label: "Terapia w bólach głowy",
    caption: "Terapia w bólach głowy",
    marginTop: "20px",
    href: "/oferta",
  },

  {
    src: "/terapia-manualna/terapia-manualna-kolano-klawiki-second.jpg",
    label: "Terapia manualna kolana",
    caption: "Terapia manualna kolana",
    marginTop: "40px",
    href: "/oferta/terapia-manualna",
  },
  {
    src: "/karuzelaOmnie/terapia-manulana-barku.jpg",
    label: "Terapia manualna barku",
    caption: "Terapia manualna barku",
    marginTop: "40px",
    href: "/oferta/terapia-manualna",
  },
  {
    src: "/karuzelaOmnie/bole-i-sztywnosci-karku.jpg",
    label: "Bóle i sztywności karku",
    caption: "Bóle i sztywności karku",
    marginTop: "40px",
    href: "/oferta/terapia-manualna",
  },
  {
    src: "/terapia-manualna/terapia-manualna-kolano-last.jpg", 
    label: "Bóle kręgosłupa",
    caption: "Bóle kręgosłupa",
    marginTop: "20px",
    href: "/oferta/terapia-manualna",
  },
];


const ImageToOffersShort = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div
      ref={ref}
      className="flex overflow-x-auto py-3 gap-2 md:gap-2 w-full xl:justify-center xl:items-center px-4    "
    >
      {imgURLs.map((imgUrl, index) => (
        <div
          key={imgUrl.label}
          className="relative flex shrink-0 w-[18rem] h-[26rem]  sm:w-[14rem] sm:h-[20rem] md:w-[14rem] md:h-[20rem] xl:w-[15rem] xl:h-[24rem] overflow-hidden  "
          style={{ marginTop: imgUrl.marginTop }}
        >
          <motion.div
            className="w-full h-full "
            whileHover={{ scale: 1.1 }}
            initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ type: "spring", duration: 2, ease: "backInOut" }}
          >
            <ImageCard
              key={imgUrl.label}
              href={imgUrl.href}
              src={imgUrl.src}
              alt={imgUrl.label}
            />
          </motion.div>
          <motion.div
            initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ type: "spring", duration: 2, ease: "backInOut" }}
            className="absolute bottom-0 w-full font-semibold  bg-secondary bg-opacity-70  text-black text-center py-2 px-3"
          >
            {imgUrl.caption}
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default ImageToOffersShort;
