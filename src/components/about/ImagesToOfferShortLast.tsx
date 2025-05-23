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
    href:"/oferta"

  },

  {
    src: "/terapia-wisceralna/terapia-wisceralna.jpg",
    label: "Terapia wisceralna",
    caption: "Terapia wisceralna",
    marginTop: "40px",
    href:"/oferta/terapia-wisceralna-w-problemach-jelitowo-trawiennych"

  },
 
  {
    src: "/karuzelaOmnie/terapia-uroginekologiczna.jpg",
    label: "Terapia uroginekologiczna",
    caption: "Terapia uroginekologiczna",
    marginTop: "20px",
    href:"/oferta/"

  },
];
const ImagesToOfferShortLast = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <>
    
    <div
      ref={ref}
      className="flex overflow-x-auto py-2 gap-2   md:gap-4 w-full lg:justify-center lg:items-center px-2 mr-4 md:mr-0 outline-none scrollbar-thin scrollbar-webkit "
    >
      {imgURLs.map((imgUrl, index) => (
        <div
          key={imgUrl.label}
          className="relative flex shrink-0 w-[20rem] h-[15rem] sm:w-[20rem] sm:h-[15rem] md:w-[17rem] md:h-[14rem] xl:w-[20rem] xl:h-[15rem] 2xl:w-[22rem]  overflow-hidden outline-none scrollbar-thin scrollbar-webkit border-4 border-white rounded "
          style={{ marginTop: imgUrl.marginTop }}
        >
          <motion.div
            className="w-full h-full "
            whileHover={{ scale: 1.1 }}
            initial={{ x: 100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ type: "spring", stiffness: 50, duration: 0.5 }}
          >
            <ImageCard key={imgUrl.label} href={imgUrl.href} src={imgUrl.src} alt={imgUrl.label} />
          </motion.div>
          <motion.div
            className="absolute bottom-0 w-full font-semibold  bg-secondary bg-opacity-70 text-black text-center py-2"
            initial={{ x: 100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ type: "spring" ,duration: 0.5}}
          >
            {imgUrl.caption}
          </motion.div>
        </div>
      ))}
    </div></>
  );
};

export default ImagesToOfferShortLast;
