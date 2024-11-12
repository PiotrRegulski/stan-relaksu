"use client";
import React, { useEffect, useRef, useState } from "react";
import MapComponent from "./MapComponent";
import PageHeader from "../homepage/PageHeader";
import AdressCard from "./AdressCard";
import DetailedAddress from "./DetailedAddress";
import ContactForm from "./ContactForm";
import OfficeAppearance from "./OfficeAppearance";
import { motion, useInView } from "framer-motion";
import { Noto } from "../fonts";
import { useMediaQuery } from "../utilis/useMediaQuery";

const Contact = () => {
  const refTop = useRef(null);
  const isInViewTop = useInView(refTop, { once: true });
  const refBottom = useRef(null);
  const isInViewBottom = useInView(refBottom, { once: true });
  const refLogo = useRef(null);
  const isInViewLogo = useInView(refLogo, { once: true });
  const isSmallScreen = useMediaQuery("(max-width: 1023px)");

  return (
    <div id={"kontakt"} className="w-full">
      <PageHeader id={"kontttttakt-header"}>Skontaktuj się</PageHeader>
      <div className="   ">
        <div ref={refTop}></div>
        <div id="kontakt-info" className="  bg-white   w-full ">
          <div className="flex flex-col lg:flex-row w-full ">
            <motion.div
              initial={{ x: -200, opacity: 0 }}
              animate={isInViewTop ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="flex flex-col w-full lg:w-1/2 xl:mx-12 2xl:mx-24  "
            >
              <div
                className={`${Noto.className} flex flex-col my-6 w-full justify-center items-center  `}
              >
                <div className="pt-4 px-6 sm:px-12  md:px-24 lg:px-6  text-sm xl:text-base ">
                  <p className="text-justify ">
                    Potrzebujesz więcej informacji lub porady na temat zabiegów.
                    Skontaktuj się ze mną poprzez formularz kontaktowy lub w
                    dogodny dla siebie sposób. 
                  </p>
                  <p>Chętnie pomogę!</p>
                </div>
              </div>
              <ContactForm />
            </motion.div>
            <motion.div
              initial={{ x: 200, opacity: 0 }}
              animate={isInViewTop ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 1, ease: "easeInOut" }}
              className=" flex flex-col w-full lg:w-1/2 justify-center items-center mx-auto lg:mx-12 gap-12 2xl:mx-24 "
            >
              <DetailedAddress />
              <MapComponent />
            </motion.div>
          </div>
        </div>
        <div ref={refBottom}></div>
        <div>
          {" "}
          <motion.div
            initial={{ y: 0, opacity: 0 }}
            animate={isInViewBottom ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 2, ease: "easeInOut", type: "spring" }}
            className={`${Noto.className} flex flex-col  w-full justify-center items-center  `}
          >
            <p className=" text-base  xl:text-lg my-6 text-center font-bold ">
              Gabinet mieści się przy <br></br>
              <strong>studio jogi Jasna Asana. </strong>
            </p>
          </motion.div>
          <div
            ref={refLogo}
            className="flex sm:flex-row  justify-around py-2 w-full bg-white  "
          >
            <div className="relative flex flex-row justify-center items-center   w-full h-[60rem] sm:h-[60rem] md:h-[60rem] xl:h-[40rem]">
              <motion.div
                initial={{
                  x: 0,
                  y: isSmallScreen ? 240 : 0,
                  opacity: 0,
                }}
                animate={
                  isInViewLogo
                    ? isSmallScreen
                      ? { y: -240, opacity: 1 }
                      : { x: -300, y: 0, opacity: 1 }
                    : { y: 0, opacity: 0 }
                }
                transition={{ duration: 2, ease: "easeInOut", type: "tween" }}
                className="absolute  "
              >
                <AdressCard
                  title={"Jasna Asana Studio Jogi"}
                  href={"https://www.jasnaasana.pl/grafik"}
                  linkTitle={"Zapisz się na zajęcia"}
                  instaHref={"https://www.instagram.com/jasnaasana.studio"}
                  fbHref={"https://www.facebook.com/jasnaasana.studio"}
                  logoSrc={"/logo-jasna-strona.png"}
                />
              </motion.div>
              <motion.div
                initial={{
                  x: 0,
                  y: isSmallScreen ? 240 : 0,
                  opacity: 0,
                }}
                animate={
                  isInViewLogo
                    ? isSmallScreen
                      ? { y: 240, opacity: 1 }
                      : { x: 300, y: 0, opacity: 1 }
                    : { y: 0, opacity: 0 }
                }
                transition={{ duration: 2, ease: "easeInOut", type: "tween" }}
                className="absolute "
              >
                <AdressCard
                  title={"Gabinet Stan Relaksu"}
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
              </motion.div>
            </div>
          </div>
        </div>
        <OfficeAppearance />
      </div>
    </div>
  );
};

export default Contact;
