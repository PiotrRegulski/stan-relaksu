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
        gap-4  items-center my-4 lg:my-4 mx-auto lg:mx-6 "
      >
        <div
          id="kontakt-info"
          className="px-2 shadow-xl rounded border-4 bg-secondary border-white  shadow-gray-400/75 w-full"
        >
          <div className="text-xl font-bold md:mb-2 py-8 text-center bg-">
            <p className="text-2xl my-8">
              Gabinet mieści się przy <strong>studio jogi Jasna Asana. </strong>
            </p>{" "}
            <p>
              Tworzymy to miejsce aby holistycznie zadbać o Twoje ciało.
              <br></br> Poprzez połączenie jogi i terapii manualnej.<br></br>{" "}
              Możesz zatroszczyć się o siebie w sposób kompleksowy.
            </p>
          </div>
          <div className="relative w-[30rem] h-[30rem] bg-white">
            <Image
              src={"/contact/gabient.jpg"}
             
              fill
              className="shadow-gray-400 shadow-md bg-white object-fill w-[30rem] h-[30rem]"
              alt="Screenshots of the dashboard project showing desktop version"
              priority={true}
             
            />
          </div>
          <div className="flex md:flex-row flex-col justify-around my-8 py-2 w-full bg-white shadow-md shadow-primary ">
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
