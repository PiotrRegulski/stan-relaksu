"use client";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import AboutMeShort from "./AboutMeShort";
import { lato, Noto } from "../fonts";

const WelcomeAboutMe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div id="o-gabinecie" className=" flex w-full flex-col   ">
      <motion.div
        className={` flex flex-col justify-center items-center  mx-6 md:mx-12 lg:mx-12 xl:mx-36 my-6 lg:my-10  rounded-lg text-base font-medium lg:text-2xl `}
        initial={{ y: -100, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 1, ease: "easeInOut" }}
        ref={ref}
      >
        <h1 className="text-center  ">
          Stan Relaksu - Gabinet terapii manualnej i masażu
        </h1>
        <p className=" text-center md:text-center  md:my-0 ">
          Terapeutyczne miejsce dla ciała stworzone z myślą o Tobie,<br></br>{" "}
          osobie, która chce zadbać o swoje zdrowie, zwolnić i poczuć się
          lepiej.
        </p>
      </motion.div>
      <AboutMeShort />

  
    </div>
  );
};

export default WelcomeAboutMe;
