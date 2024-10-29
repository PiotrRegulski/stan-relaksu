"use client";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import AboutMeShort from "./AboutMeShort";
import { lato, Noto } from "../fonts";

const WelcomeAboutMe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div id="o-gabinecie" className=" flex w-full flex-col  bg-secondary  ">
      <motion.div
        className=" flex flex-col justify-center items-center  mx-2 md:mx-12 lg:mx-12 xl:mx-36 my-6 lg:my-10  border-mainpeach  rounded-lg"
        initial={{ y: -100, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        <h1
          ref={ref}
          className={`${Noto.className}  text-center text-base md:text-xl lg:text-2xl  `}
        >
          Gabinet terapii manualnej i masażu <br></br> <strong className="whitespace-nowrap">Stan Relaksu</strong><br></br>
          <span className={`${Noto.className} `}>
            Terapeutyczne miejsce dla ciała stworzone &nbsp;<span className="whitespace-nowrap">z myślą o Tobie,</span>
          </span>
        </h1>
        <p className={`${Noto.className} text-center text-base md:text-xl lg:text-2xl `}>
          Osobie która chce o zadbać o swoje zdrowie, zwolnić i poczuć się
          lepiej
        </p>
      
      </motion.div>
      <AboutMeShort />

      <div className="flex w-full justify-center bg-my-bg-faceImage bg-cover bg-no-repeat bg-center bg-fixed md:bg-cover  ">
        <div className="relative h-[15rem] sm:h-[20rem] md:h-[15rem] xl:h-[20rem] w-full flex justify-center items-center ">
          {/* <FaceImage /> */}
          
        </div>
      </div>
    </div>
  );
};

export default WelcomeAboutMe;
