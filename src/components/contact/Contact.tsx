"use client";
import React, { useEffect, useRef, useState } from "react";
import MapComponent from "./MapComponent";
import Image from "next/image";
import PageHeader from "../homepage/PageHeader";
import AdressCard from "./AdressCard";
import DetailedAddress from "./DetailedAddress";
import ContactForm from "./ContactForm";
import OfficeAppearance from "./OfficeAppearance";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  // useEffect(() => {
  //   if (isInView) {
  //     setStartY(window.scrollY);
  //   }
  // }, [isInView]);
  return (
    <div className="w-full">
      <PageHeader id={"kontakt"}>Skontaktuj się</PageHeader>
      <div
        ref={ref}
        className="grid md:grid-cols-1
        gap-4  items-center my-4 lg:my-2  "
      >
        <div
          id="kontakt-info"
          className=" shadow-xl rounded  bg-white  shadow-gray-400/75 w-full "
        >
          <div className=" flex flex-col md:flex-row  w-full">
            <motion.div
              initial={{ x: -400, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{
                duration: 8,
                ease: "easeOut",
                type: "spring",
                stiffness: 50,
              }}
              className=" md:text-xl lg:text-xl xl:text-2xl md:mt-12  md:w-2/3 lg:mx-12  lg:mt-2 px-4  py-12  h-full bg-gradient-to-r from-mainpeach to-transparent rounded-xl "
            >
              <p className="font-semibold font-[Cormorant-Garamond] text-2xl xl:text-3xl   text-center ">
                Gabinet mieści się przy{" "}
                <strong>studio jogi Jasna Asana. </strong>
              </p>
              <p className="text-center my-4">
                Tworzymy to miejsce aby holistycznie zadbać o Twoje ciało.
                <br></br> Poprzez połączenie jogi i terapii manualnej.<br></br>{" "}
                Możesz zatroszczyć się o siebie w sposób kompleksowy.
              </p>
            </motion.div>
            <motion.div
              initial={{ x: 800, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{
                duration: 2.5,
                ease: "easeInOut",
                type: "spring",
                stiffness: 100,
              }}
              className="relative w-full h-80 md:w-full lg:w-[48rem] lg:h-[22rem] lg:mr-4   xl:mr-24 opacity-90   "
            >
              <Image
                src={"/contact/gabient.jpg"}
                fill
                 sizes="(max-width: 600px) 100vw, 50vw"
                className=" object-cover w-full h-full  opacity-70 rounded-xl"
                alt="Screenshots of the dashboard project showing desktop version"
                priority={true}
              />
            </motion.div>
          </div>
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 3, ease: "easeInOut", type:"spring" }}
            className="flex md:flex-row flex-col justify-around mb-8 py-2 w-full bg-white shadow-md shadow-gray-300 "
          >
            <AdressCard
              title={"Jasna Asana Studio Jogi"}
              href={"https://www.jasnaasana.pl/grafik"}
              linkTitle={"Zapisz się na zajęcia"}
              instaHref={"https://www.instagram.com/jasnaasana.studio"}
              fbHref={"https://www.facebook.com/jasnaasana.studio"}
              logoSrc={"/logo-jasna-strona.png"}
            />
            <AdressCard
              title={"Gabient Stan Relaksu"}
              href={
                "https://booksy.com/pl-pl/257898_stan-relaksu-holistyczny-gabinet-terapii-i-masazu_masaz_3_warszawa#ba_s=dl_1"
              }
              linkTitle={"Zarezerwuj wizytę"}
              instaHref={"https://www.instagram.com/stan_relaksu/"}
              fbHref={"https://www.facebook.com/profile.php?id=61560021160720"}
              logoSrc={"/logo-stan-relaksu-kolo.png"}
            />
          </motion.div>{" "}
          <OfficeAppearance />
          <div className="flex flex-col-reverse sm:flex-row mt-4 ">
            <div className=" flex sm:basis 1/3 md:basis-1/2 justify-center items-center border-2 border-white shadow-lg shadow-gray-400 sm:my-4 md:mx-6 lg:my-6 2xl:mx-24">
              <MapComponent />
            </div>
            <div className="md:basis-1/2 ml-3 md:ml-0  lg:mx-12 my-6 md:my-2 py-6">
              <DetailedAddress />
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
