"use client";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import AboutMeShort from "./AboutMeShort";
import { lato, Noto } from "../fonts";

const WelcomeAboutMe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div id="o-gabinecie" className=" flex w-full flex-col  bg-white  ">
      <motion.div
        className={`${Noto.className} flex flex-col justify-center items-center  mx-2 md:mx-12 lg:mx-12 xl:mx-36 my-6 lg:my-10  rounded-lg text-lg font-medium lg:text-2xl`}
        initial={{ y: -100, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 2, ease: "easeInOut" }}
        ref={ref}
      >
        <h1 className="text-center">Stan Relaksu - Gabinet terapii manualnej i masażu</h1>
        <p className="text-center">
          Terapeutyczne miejsce dla ciała stworzone z myślą o Tobie,<br></br> osobie
          która chce zadbać o swoje zdrowie, zwolnić i poczuć się lepiej.
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
