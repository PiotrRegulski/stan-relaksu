"use client"
import { motion, useInView,} from "framer-motion";
import React, {  useRef,  } from "react";
import { lato } from "../fonts";
import AboutMeShort from "./AboutMeShort";

const WelcomeAboutMe = () => {
  
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className=" flex w-full flex-col   my-4 xl:my-6 2xl:my-6  ">
      <motion.div
        className=" flex flex-col justify-center items-center  mx-auto md:mx-12 lg:mx-12 xl:mx-48 my-12 bg-white border-mainpeach border-x-8 rounded-lg"
        initial={{ y: -100, opacity: 0 }}
       
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 2, ease: "easeInOut"  }}
      >
        <h1  ref={ref} className=" text-xl   sm:text-2xl lg:text-3xl 2xl:text-3xl mx-4 xl:mx-4  py-2 text-center md:text-left font-[Cormorant-Garamond] ">
          Gabinet terapii manualnej i masażu - Stan Relaksu
        </h1>
        <p
          className={` text-lg   font-[Monsserat] sm:text-xl lg:text-2xl 2xl:text-2xl  text-justify  animate-fadeIn transition-transform duration-1000 ease-in-out py-8 sm:py-8 md:pt-4 px-3 sm:px-8 md:px-1 lg:px-8 lg:pt-0 2xl:pt-4 lg:my-6 2xl:mx-12 2xl:mt-4 `}
        >
          to terapeutyczne miejsce dla ciała stworzone &nbsp;z myślą o Tobie.{" "}
          Osobie która chce o zadbać o swoje zdrowie, zwolnić i poczuć się
          lepiej. Czekam na Ciebie z{" "}
          <strong>
            terapią manualną, masażem powięziowym, masażem tkanek głębokich
          </strong>
          . Głęboko odprężającymi technikami
          <strong> masażu twarzy Kobido</strong>{" "}
          <strong>, masażu relaksacyjnego,</strong> które pozwolą Ci osiągnąć
          Stan Relaksu.
        </p>
      </motion.div>
      <AboutMeShort />

      <div className="flex w-full justify-center bg-my-bg-faceImage bg-cover bg-no-repeat bg-center bg-fixed md:bg-cover  ">
        <div className="relative h-[10rem] sm:h-[18rem] xl:h-[28rem] w-full  ">
          {/* <FaceImage /> */}
        </div>
      </div>
    </div>
  );
};

export default WelcomeAboutMe;
