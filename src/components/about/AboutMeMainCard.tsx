"use client";
import React from "react";
import ButtonReservation from "./ButtonReservation";
import Image from "next/image";
import ButtonOffers from "./ButtonOffers";
import { motion } from "framer-motion";
import { lato } from "../fonts";

const AboutMeMainCard = () => {
  return (
    <div id={"o-mnie"} className={`flex flex-col     `}>
      
      <div className="flex flex-col   justify-center items-center   w-full xl:px-24  2xl:px-56 bg-gradient-to-t from-secondary from-50% to-transparent   bg-opacity-40 rounded-b-3xl  ">
        <div className="flex  justify-center items-center   ">
          <motion.div
            className="relative w-52 h-52  lg:w-[18rem] lg:h-[18rem] mx-2 xl:h-[16rem] xl:w-[16rem] 2xl:h-[20rem] 2xl:w-[20rem]"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
          
            <Image
              src="/hero-circle.png"
              alt="Kinga Wołoszka- fizjoterapeutka"
              fill
              sizes="(max-width: 600px) 100vw, 50vw"
              className=" object-cover h-full w-full"
              priority={true}
            />
          </motion.div>
        </div>

        <motion.div
          className="flex justify-center items-center flex-col sm:px-16  2xl:px-10  "
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <h1
            className={`${lato.className} text-center font-semibold w-full  text-xl  md:text-2xl  mt-4 px-3  lg:px-11`}
          >
            Cześć, nazywam się Kinga Wołoszka
          </h1>
          <p className=" text-lg xl:text-xl font-medium">Jestem naturoterapeutką. </p>
          <article className=" text-base lg:text-lg xl:text-lg 2xl:text-xl   md:text-left  text-pretty  py-2  px-3  lg:w-[40rem] ">
            <p className=" text-center ">
              Ukończyłam fizjoterapię na Warszawskim Uniwersytecie Medycznym.
            </p>
            <p className=" text-center ">
              W
              pracy wykorzystuje różnorodne techniki terapeutyczne zdobyte na
              licznych szkoleniach i kursach specjalistycznych.
            </p>
            <p className=" text-center ">
              Dzięki swojej szerokiej wiedzy i doświadczeniu pomogę Ci w
              procesie dbania o swoje zdrowie.
             
            </p>
            <p className=" text-center ">
            
              <strong> Czekam na Ciebie</strong>, aby przynieść Ci ulgę w bólu i
              napięciu.
            </p>
            <p className="text-center my-2 px-4">
              Zarezerwuj wizytę i daj się sobą zaopiekować w <br></br> 
              <strong> komfortowym zaciszu gabinetu Stan Relaksu.</strong>
            </p>
          </article>
        </motion.div>
      </div>
      <div className="flex justify-center items-center w-full gap-4 md:gap-24 py-4 bg-white ">
        <ButtonReservation />
        <ButtonOffers />
      </div>
    </div>
  );
};

export default AboutMeMainCard;
