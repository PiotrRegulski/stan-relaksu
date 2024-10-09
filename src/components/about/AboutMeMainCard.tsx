"use client";
import React from "react";
import ButtonReservation from "./ButtonReservation";
import Image from "next/image";
import ButtonOffers from "./ButtonOffers";
import { motion } from "framer-motion";

const AboutMeMainCard = () => {
  return (
    <div className={`flex  md:flex-row border-b-4  lg:h-[40rem]`}>
      <div className="flex flex-col md:flex-row  justify-center items-center   w-full  2xl:px-24 bg-gradient-to-t from-secondary to-transparent   bg-opacity-40   ">
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

        <motion.div className="flex justify-center items-center flex-col md:mt-20  "  initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}>
          <h1 className="  text-left  w-full  text-4xl  md:text-5xl font-[Cormorant-Garamond] mb-4 px-3 lg:px-12 ">
            Cześć,<br></br> jestem Kinga
          </h1>
          <article className=" text-lg lg:text-xl    md:text-left  text-pretty  py-4  px-3 lg:px-12 ">
            <p className="  text-pretty ">
              Ukończyłam fizjoterapię na Warszawskim Uniwersytecie Medycznym.
              Jestem naturoterapeutką techniki terapeutyczne zdobyte na licznych
              szkoleniach i kursach specjalistycznych.{" "}
            </p>
            <h2 className=" w-full ">
              Dzięki swojej szerokiej wiedzy i doświadczeniu pomogę Ci w
              procesie dbania o swoje zdrowie. Czekam na Ciebie, aby przynieść
              Ci ulgę w bólu i napięciu.{" "}
            </h2>
            <p className=" w-full">
              Zarezerwuj wizytę i daj się sobą zaopiekować w
              <strong> komfortowym zaciszu</strong> gabinetu Stan Relaksu
            </p>
          </article>
          <div className="w-full flex flex-col sm:flex-row gap-2  mb-4 my-4 sm:my-4 md:mx-1  md:my-6">
            <ButtonReservation />
            <ButtonOffers />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMeMainCard;
