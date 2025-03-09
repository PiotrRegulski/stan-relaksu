"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ImageCard from "./ImageCard";
import { IoIosInformationCircleOutline } from "react-icons/io";
const imgURLs = [
  // {
  //     src: "/terapia-manualna-zatok/terapia-zatok-cover.jpg",
  //     label: "Terapia manualna w bólach zatok",
  //     caption: "Terapia manualna w bólach zatok",
  //     href:"oferta/terapia-manualna-w-bolach-zatok",
  //     marginTop: "20px",

  //   },
  {
    src: "/offers-photo/kobido-omnie.jpg",
    label: "Terapia stawów skroniowo-żuchwowych",
    caption: "Terapia stawów skroniowo-żuchwowych",
    href: "oferta",
    marginTop: "20px",
    callToAction: "Ulga w w bólach twarzy",
  },
  // {
  //   src: "/kobido-kinesiotaping-omnie.jpg",
  //   label: "Kinesiotaping limfatyczny",
  //   caption: "Kinesiotaping limfatyczny ",
  //   href:"/oferta/masaz-kobido",
  //   marginTop: "20px",

  // },
  {
    src: "/karuzelaOmnie/masaż-twarzy-kobido.jpg",
    label: "Masaż twarzy Kobido",
    caption: "Masaż twarzy Kobido ",
    href: "/oferta/masaz-kobido",
    marginTop: "20px",
    callToAction: "Piękny wygląd twarzy",
  },
];
const ImagesToAboutExit = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div
      ref={ref}
      className="flex overflow-x-auto py-2 gap-2 md:gap-4 w-full sm:justify-center sm:items-center px-2 mr-4 md:mr-0 2xl:my-20 "
    >
      {imgURLs.map((imgUrl) => (
        <div
          key={imgUrl.label}
          className="relative flex shrink-0 w-[20rem] h-[18rem]  sm:h-[18rem] md:w-1/3 md:h-[20rem] overflow-hidden"
          style={{ marginTop: imgUrl.marginTop }}
        >
          <motion.div className="absolute top-0 right-0 z-10 text-white m-2 text-4xl">
            <IoIosInformationCircleOutline />
          </motion.div>
          <motion.div
            className="w-full h-full relative group"
            whileHover={{ scale: 1.1 }}
            initial={{ x: 100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ type: "spring", duration: 2, stiffness: 50 }}
          >
            <ImageCard href={imgUrl.href} src={imgUrl.src} alt={imgUrl.label} />
            <motion.div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40 text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out cursor-pointer ">
              {imgUrl.callToAction}
              <p className="text-xs mt-2">Dowiedz sie więcej</p>
            </motion.div>
          </motion.div>
          <motion.div
            className="absolute bottom-0 w-full font-semibold bg-secondary bg-opacity-70 text-black text-center py-2"
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
