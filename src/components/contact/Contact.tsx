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
  const refTop = useRef(null);
  const isInViewTop = useInView(refTop, { once: true });
  const refBottom = useRef(null);
  const isInViewBottom = useInView(refBottom, { once: true });
  // useEffect(() => {
  //   if (isInView) {
  //     setStartY(window.scrollY);
  //   }
  // }, [isInView]);
  return (
    <div id={"kontakt"} className="w-full">
      <PageHeader id={"kontttttakt-header"}>Skontaktuj się</PageHeader>
      <div  className="   ">
        <div id="kontakt-info" className="  bg-white   w-full ">
          <div className="flex flex-col lg:flex-row w-full ">
            <motion.div
              initial={{ x: -200, opacity: 0 }}
              animate={isInViewTop ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="flex flex-col w-full lg:w-1/2 xl:mx-12  "
            >
              <div
                className={`${Noto.className} flex flex-col my-6 w-full justify-center items-center  `}
              >
                <div className="pt-4 px-6 sm:px-12  md:px-24 lg:px-6  text-base ">
                  <h3 className="text-justify  ">
                    Potrzebujesz więcej informacji lub porady na temat zabiegów.
                  </h3>
                  <p className="text-justify ">
                    Skontaktuj się ze mną poprzez{" "}
                    <strong>formularz kontaktowy</strong> lub w dogodny dla
                    siebię sposób. Z przyjemnością odpowiem na wszelkie pytania
                    i pomogę wybrać odpowiedni zabieg dostosowany do Twoich
                    potrzeb. Czekam na Twój kontakt!
                  </p>
                </div>
              </div>
              <ContactForm />
            </motion.div>
            <motion.div
              initial={{ x: 200, opacity: 0 }}
              animate={isInViewTop ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 1, ease: "easeInOut" }}
              className=" flex flex-col w-full lg:w-1/2 justify-center items-center mx-auto lg:mx-12 gap-12 "
            >
              <DetailedAddress />
              <MapComponent />
            </motion.div>
            <div ref={refTop}></div>
          </div>
        </div>
        <motion.div  initial={{ x: 2, opacity: 0 }}
            animate={isInViewBottom ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 5, ease: "easeInOut", type: "spring" }}
           >
          {" "}
          <div
           
            className={`${Noto.className} flex flex-col  w-full justify-center items-center  `}
          >
            <p className=" text-lg md:text-xl xl:text-2xl my-6 text-center font-bold">
              Gabinet mieści się przy <br></br>
              <strong>studio jogi Jasna Asana. </strong>
            </p>
          </div>
          <div  className="flex sm:flex-row flex-col justify-around py-2 w-full bg-white  ">
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
          </div>
          <div ref={refBottom} ></div>
        </motion.div>
        <OfficeAppearance />
      </div>
    </div>
  );
};

export default Contact;
