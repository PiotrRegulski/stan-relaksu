"use client";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import AboutMeShort from "./AboutMeShort";

const WelcomeAboutMe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className=" flex w-full flex-col   my-4 xl:my-6 2xl:my-6  ">
      <motion.div
        className=" flex flex-col justify-center items-center  mx-auto md:mx-12 lg:mx-12 xl:mx-48 my-12 bg-white border-mainpeach  rounded-lg"
        initial={{ y: -100, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        <h1
          ref={ref}
          className=" text-2xl   sm:text-3xl lg:text-4xl 2xl:text-4xl mx-4 xl:mx-4  py-2 text-center  font-[Cormorant-Garamond] "
        >
          Gabinet terapii manualnej i masażu - Stan Relaksu<br></br>
          <span className="text-lg sm:text-xl lg:text-2xl 2xl:text-2xl mt-2">
            terapeutyczne miejsce dla ciała stworzone &nbsp;z myślą o Tobie
          </span>
        </h1>
        <p className=" font-[Cormorant-Garamond] text-lg sm:text-xl lg:text-2xl 2xl:text-2xl mx-4 text-center">
          Osobie która chce o zadbać o swoje zdrowie, zwolnić i poczuć się
          lepiej
        </p>
        {/* <p
          className={` text-lg    sm:text-xl lg:text-2xl 2xl:text-2xl  text-justify  animate-fadeIn transition-transform duration-1000 ease-in-out py-8 sm:py-8 md:pt-4 px-3 sm:px-8 md:px-1 lg:px-8 lg:pt-0 2xl:pt-4 lg:my-6 2xl:mx-12 2xl:mt-4 `}
        >
         
           Czekam na Ciebie z{" "}<br></br>
          <strong>
            terapią manualną, masażem powięziowym, masażem tkanek głębokich
          </strong>
          . Głęboko odprężającymi technikami
          <strong> masażu twarzy Kobido</strong>{" "}
          <strong>, masażu relaksacyjnego,</strong> które pozwolą Ci osiągnąć
          Stan Relaksu.
        </p> */}
      </motion.div>
      <AboutMeShort />

      <div className="flex w-full justify-center bg-my-bg-faceImage bg-cover bg-no-repeat bg-center bg-fixed md:bg-cover  ">
        <div className="relative h-[15rem] sm:h-[20rem] xl:h-[28rem] w-full flex justify-center items-center ">
          {/* <FaceImage /> */}
          <p
            className={` font-[Cormorant-Garamond] text-lg  text-center  sm:text-xl lg:text-2xl 2xl:text-4xl text-white    animate-fadeIn transition-transform duration-1000 ease-in-out py-8 sm:py-8 md:pt-4 px-3 sm:px-8 md:px-1 lg:px-8 lg:pt-0 2xl:pt-4 lg:my-6 2xl:mx-12 2xl:mt-4 `}
          >
            Czekam na Ciebie z <br></br>
            terapią manualną, masażem powięziowym, masażem tkanek głębokich.<br></br>
            Głęboko odprężającymi technikami masażu twarzy Kobido, masażu
            relaksacyjnego, które pozwolą Ci osiągnąć<span className="whitespace-nowrap"> Stan Relaksu.</span> 
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeAboutMe;
