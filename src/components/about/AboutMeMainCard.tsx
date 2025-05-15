"use client";
import React from "react";
import ButtonReservation from "./ButtonReservation";
import Image from "next/image";
import ButtonOffers from "./ButtonOffers";
import { motion } from "framer-motion";
import { lato } from "../fonts";

const AboutMeMainCard = () => {
  return (
    <div id={"o-mnie"} className="flex flex-col lg:container mx-auto">
      <div className="  flex flex-col   justify-center items-center   w-full xl:px-24  2xl:px-56 bg-gradient-to-t from-secondary from-50% to-transparent   bg-opacity-40 ">
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
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <h1
            className={`${lato.className} text-center font-semibold w-full text-xl  lg:text-3xl    mt-4 px-3  lg:px-11`}
          >
            Cześć, nazywam się Kinga Wołoszka
          </h1>
          <p className=" text-lg xl:text-xl font-medium">
            Jestem naturoterapeutką.{" "}
          </p>
          <div className="flex flex-col lg:flex-row border-white justify-between my-4 sm:mx-20 lg:mx-0">
            <div className="flex-1 m-2 p-2 bg-mainpeach border border-gray-300 shadow-lg flex justify-center items-center text-center">
              <p className="text-base lg:text-lg font-medium xl:px-2">
                Ukończyłam fizjoterapię na Warszawskim Uniwersytecie Medycznym.
              </p>
            </div>
            <div className="flex-1 m-2 p-2 bg-mainpeach border border-gray-300 shadow-lg flex justify-center items-center text-center">
              <p className="text-base lg:text-lg font-medium px-2">
                W pracy wykorzystuje różnorodne techniki terapeutyczne zdobyte
                na licznych szkoleniach i kursach specjalistycznych.
              </p>
            </div>
            <div className="flex-1 m-2 p-2 bg-mainpeach border border-gray-300 shadow-lg flex justify-center items-center text-center">
              <p className="text-base lg:text-lg font-medium xl:px-2">
                Dzięki swojej szerokiej wiedzy i doświadczeniu pomogę Ci w
                procesie dbania o swoje zdrowie.
              </p>
            </div>
          </div>

          <div className="bg-gray-100 p-4 rounded-xl shadow-md my-4 mx-2 ">
            <p className=" text-lg lg:text-xl font-semibold mb-4 text-center">
              <strong> Czekam na Ciebie</strong>, aby przynieść Ci ulgę w bólu i
              napięciu.
            </p>
            <p className="text-base lg:text-lg  text-center text-pretty ">
              Zarezerwuj wizytę i daj się sobą zaopiekować <br></br>
            </p>
            <p className="text-center text-base lg:text-lg">
              w komfortowym zaciszu
            </p>
            <p className="text-center text-base lg:text-lg">
              <strong>gabinetu Stan Relaksu.</strong>
            </p>
          </div>
        </motion.div>
      </div>
      <div className="flex justify-center items-center w-full gap-4 md:gap-24 py-4 bg-secondary rounded ">
        <ButtonReservation />
        <ButtonOffers />
      </div>
    </div>
  );
};

export default AboutMeMainCard;
