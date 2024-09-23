import React from "react";

import MapComponent from "./MapComponent";
import Image from "next/image";
import PageHeader from "../homepage/PageHeader";
import AdressCard from "./AdressCard";
import DetailedAddress from "./DetailedAddress";
import ContactForm from "./ContactForm";
const Contact = () => {
  return (
    <div className="w-full">
      <PageHeader id={"kontakt"}>Skontaktuj się</PageHeader>
      <div
        className="grid md:grid-cols-1
        gap-4  items-center my-4 lg:my-4 mx-auto  "
      >
        <div
          id="kontakt-info"
          className="px-2 shadow-xl rounded  bg-secondary  shadow-gray-400/75 w-full "
        >
          <div className=" flex flex-col md:flex-row  w-full  bg-mainpeach">
            <div className=" md:text-xl lg:text-xl md:mt-12  md:w-2/3  lg:mt-16 px-2  py-12 lg:w-2/3 2xl:mt-28 ">
              <p className="font-semibold font-serif   text-center ">
                Gabinet mieści się przy{" "}
                <strong>studio jogi Jasna Asana. </strong>
              </p>
              <p className="text-center">
                Tworzymy to miejsce aby holistycznie zadbać o Twoje ciało.
                <br></br> Poprzez połączenie jogi i terapii manualnej.<br></br>{" "}
                Możesz zatroszczyć się o siebie w sposób kompleksowy.
              </p>
            </div>
            <div className="relative w-full h-96 md:w-full lg:w-[48rem] lg:h-[30rem]  ">
              <Image
                src={"/contact/gabient.jpg"}
                fill
                className=" object-cover w-full h-full"
                alt="Screenshots of the dashboard project showing desktop version"
                priority={true}
              />
            </div>
          </div>

          <div className="flex md:flex-row flex-col justify-around mb-8 py-2 w-full bg-white shadow-md shadow-primary ">
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
          <div className="flex flex-col-reverse sm:flex-row ">
            <div className=" flex sm:basis 1/3 md:basis-1/2 justify-center items-center border-2 border-white shadow-lg shadow-gray-400 sm:my-4 md:mx-6 lg:my-6">
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
