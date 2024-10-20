"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ImageCard from "./ImageCard";
const imgURLs = [
  {
    src: "/masaz-powieziowy/masaż-powięziowy-t.jpg",
    label: "Masaż powięziowy",
    caption: "Masaż powięziowy",
    marginTop: "20px",
    href: "/offer/masaz-powieziowy",
  },

  {
    src: "/terapia-manualna/terapia-manualna-kolano-klawiki-second.jpg",
    label: "terapia manualna",
    caption: "Terapia manualna",
    marginTop: "40px",
    href: "/offer/terapia-manualna",
  },
];
const ImageToOffersShort = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div
      ref={ref}
      className="flex overflow-x-auto py-12   pl-1 md:gap-4 w-screen sm:justify-center sm:items-center "
    >
      {imgURLs.map((imgUrl, index) => (
        <div
          key={imgUrl.label}
          className="relative flex shrink-0 w-[15rem] h-[24rem] md:w-[20rem] md:h-[25rem] overflow-hidden mr-2 md:mr-0"
          style={{ marginTop: imgUrl.marginTop }}
        >
          <motion.div
            className="w-full h-full"
            whileHover={{ scale: 1.1 }}
            initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ type: "spring", duration: 3, ease: "backInOut" }}
          >
            <ImageCard
              key={imgUrl.label}
              href={imgUrl.href}
              src={imgUrl.src}
              alt={imgUrl.label}
            />
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
