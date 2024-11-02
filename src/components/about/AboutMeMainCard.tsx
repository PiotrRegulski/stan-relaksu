"use client";
import React from "react";
import ButtonReservation from "./ButtonReservation";
import Image from "next/image";
import ButtonOffers from "./ButtonOffers";
import { motion } from "framer-motion";
import { Noto } from "../fonts";
import PageHeader from "../homepage/PageHeader";

const AboutMeMainCard = () => {
  return (
    <div className={`flex  md:flex-row mt-4   `}>
     
      <div className="flex flex-col md:flex-row  justify-center items-center   w-full xl:px-24  2xl:px-56 bg-gradient-to-t from-secondary from-50% to-transparent   bg-opacity-40   ">
        <div className="flex lg:w-1/2 justify-end py-8  ">
          <motion.div
            className="relative w-72 h-72 md:w-[18rem] md:h-[18rem] lg:w-[20rem] lg:h-[20rem] mx-2"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <Image
              src="/hero-circle.png"
              alt="Kinga Wołoszka- fizjoterapeutka"
              fill
              sizes="(max-width: 600px) 100vw, 50vw"
              className=" object-cover h-full w-full rounded-full shadow-lg"
              priority={true}
            />
          </motion.div>
        </div>

        <motion.div
          className="flex justify-center items-center flex-col md:mt-20  "
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <h1
            className={`${Noto.className} text-left  w-full  text-4xl  md:text-3xl  mb-2 px-3 lg:px-10`}
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
          <div className="flex justify-center items-center w-full gap-4 md:gap-24">
            <ButtonReservation />
            <ButtonOffers />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMeMainCard;
