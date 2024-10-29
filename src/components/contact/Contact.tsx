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
import { Noto } from "../fonts";

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
      <div ref={ref} className="   ">
        <div id="kontakt-info" className="  bg-white   w-full ">
          {/* <div className=" flex flex-col md:flex-row  w-full">
            <motion.div
              initial={{ x: -400, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{
                duration: 8,
                ease: "easeOut",
                type: "spring",
                stiffness: 50,
              }}
              className=" md:text-xl lg:text-xl xl:text-2xl  md:w-2/3 lg:mx-12  lg:mt-2 px-4  py-12  h-full bg-gradient-to-r from-mainpeach to-transparent rounded-xl "
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
                duration: 4,
                ease: "easeOut",
                type: "spring",
                stiffness: 50,
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
          </div> */}

          <div className="flex flex-col lg:flex-row w-full ">
          <motion.div
              initial={{ x: -400, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="flex flex-col w-full lg:w-1/2 xl:mx-12  "
            >
              <DetailedAddress />
              <div
                className={`${Noto.className} flex flex-col my-6 w-full justify-center items-center  `}
              >
                <div className="pt-4  px-6 sm:px-32 md:px-32 lg:px-6 2xl:px-24 text-base sm:text-base md:text-base">
                  <h3 className=" text-left ">
                    Potrzebujesz więcej informacji lub porady na temat zabiegów.
                  </h3>
                  <p className=" ">
                    Skontaktuj się ze mną poprzez <strong>formularz kontaktowy</strong>  lub w
                    dogodny dla siebię sposób. Chętnie pomogę!
                  </p>
                </div>
              </div>
              <ContactForm />
            </motion.div>
            <motion.div
              initial={{ x: 800, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 1, ease: "easeInOut" }}
              className=" flex flex-col w-full lg:w-1/2 justify-center items-center mx-auto lg:mx-12 "
            >
              <div
                className={`${Noto.className} flex flex-col  w-full justify-center items-center  `}
              >
                <p className=" text-lg md:text-xl my-6 text-center">
                  Gabinet mieści się przy{" "}<br></br>
                  <strong>studio jogi Jasna Asana. </strong>
                </p>
              </div>
              <div className="flex sm:flex-row flex-col justify-around py-2 w-full bg-white  ">
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
                  fbHref={
                    "https://www.facebook.com/profile.php?id=61560021160720"
                  }
                  logoSrc={"/logo-stan-relaksu-kolo.png"}
                />
                
              </div>
              <MapComponent />
             
            </motion.div>
          
          </div>
        </div>

        <OfficeAppearance />
      </div>
    </div>
  );
};

export default Contact;
