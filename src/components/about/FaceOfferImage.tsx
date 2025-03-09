"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ImageCard from "./ImageCard";
interface FaceOfferImageProps {
  href: string;
  src: string;
  label: string;
  caption: string;
}

const FaceOfferImage: React.FC<FaceOfferImageProps> = (props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div
      className="relative flex shrink-0 w-[15rem] h-[13rem] sm:w-[20rem] sm:h-[16rem] md:w-[20rem] md:h-[18rem] xl:w-[30rem] xl:h-[20rem] overflow-hidden my-6 shadow-lg shadow-white"
      ref={ref}
    >
      <motion.div
        className="w-full h-full relative group "
        whileHover={{ scale: 1.1 }}
        initial={{ x: 100, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{ type: "spring", duration: 1, stiffness: 50 }}
      >
        <ImageCard href={props.href} src={props.src} alt={props.label} />
        <motion.div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out cursor-pointer pointer-events-none">
            
          Dowiedz się więcej
        </motion.div>
      </motion.div>
      <motion.div
        className="absolute bottom-0 w-full font-semibold  bg-secondary bg-opacity-70 text-black text-center py-2"
        initial={{ x: 100, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{ type: "spring", duration: 1 }}
      >
        {props.caption}
      </motion.div>
    </div>
  );
};

export default FaceOfferImage;
