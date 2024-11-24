"use client";
import React from "react";
import ButtonReservation from "./ButtonReservation";
import Image from "next/image";
import ButtonOffers from "./ButtonOffers";
import { motion } from "framer-motion";
import { lato } from "../fonts";
import PageHeader from "../homepage/PageHeader";

const AboutMeMainCard = () => {
  return (
    <div className={`flex flex-col mt-4 xl:mt-[4rem]   `}>
     <PageHeader id={'o-mnie'}>O mnie</PageHeader>
      <div className="flex flex-col sm:flex-row  justify-center items-center   w-full xl:px-24  2xl:px-56 bg-gradient-to-t from-secondary from-50% to-transparent   bg-opacity-40   ">
        <div className="flex sm:w-1/2 lg:w-1/2 justify-center items-center md:justify-end  h-full    ">
          <motion.div
            className="relative w-72 h-72  sm:w-56 md:w-[18rem] md:h-[24rem] lg:w-[18rem] lg:h-[18rem] mx-2 xl:h-[20rem] xl:w-[20rem] 2xl:h-[24rem] 2xl:w-[24rem]"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <Image
              src="/hero.jpg"
              alt="Kinga Wołoszka- fizjoterapeutka"
              fill
              sizes="(max-width: 600px) 100vw, 50vw"
              className=" object-cover h-full w-full   hidden sm:block lg:hidden"
              priority={true}
            />
             <Image
              src="/hero-circle.png"
              alt="Kinga Wołoszka- fizjoterapeutka"
              fill
              sizes="(max-width: 600px) 100vw, 50vw"
              className=" object-cover h-full w-full  my-2 sm:hidden block lg:block"
              priority={true}
            />
          </motion.div>
        </div>

        <motion.div
          className="flex justify-center items-center flex-col md:mt-20 2xl:px-10  "
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <h1
            className={`${lato.className} text-left font-medium w-full  text-xl  md:text-3xl  mt-4 px-3 lg:px-10`}
          >
            Cześć, jestem Kinga Wołoszka
          </h1>
          <article className=" text-lg lg:text-xl    md:text-left  text-pretty  py-4  px-3 lg:px-12 ">
            <p className=" text-justify ">
              Ukończyłam fizjoterapię na Warszawskim Uniwersytecie Medycznym,
              jestem naturoterapeutką, w pracy wykorzystuje różnorodne techniki
              terapeutyczne zdobyte na licznych szkoleniach i kursach
              specjalistycznych. Dzięki swojej szerokiej wiedzy i doświadczeniu
              pomogę Ci w procesie dbania o swoje zdrowie.
              <strong> Czekam na Ciebie</strong>, aby przynieść Ci ulgę w bólu i
              napięciu.
            </p>
            <p className="py-2">
              Zarezerwuj wizytę i daj się sobą zaopiekować w
              <strong> komfortowym zaciszu gabinetu Stan Relaksu.</strong>
            </p>
          </article>
          
        </motion.div>
      </div>
      <div className="flex justify-center items-center w-full gap-4 md:gap-24 py-4 bg-white border-b-8 border-white">
            <ButtonReservation />
            <ButtonOffers />
          </div>
    </div>
  );
};

export default AboutMeMainCard;
