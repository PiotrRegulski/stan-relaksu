import React from "react";

import MapComponent from "./MapComponent";
import { Resend } from "resend";
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
        <div className="px-2 shadow-xl rounded border-4 bg-white border-white  shadow-gray-400/75 w-full">
          <div className="text-xl font-bold md:mb-2 py-8 text-center ">
            <p className="text-2xl my-8">
              Gabinet mieści się przy <strong>studio jogi Jasna Asana. </strong>
            </p>{" "}
            <p>
              Tworzymy to miejsce aby holistycznie zadbać o Twoje ciało.
              <br></br> Poprzez połączenie jogi i terapii manualnej.<br></br>{" "}
              Możesz zatroszczyć się o siebie w sposób kompleksowy.
            </p>
          </div>

          <div className="flex md:flex-row flex-col justify-around my-8 py-2 w-full bg-secondary ">
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
              href={"https://booksy.com/pl-pl/257898_stan-relaksu-holistyczny-gabinet-terapii-i-masazu_masaz_3_warszawa#ba_s=dl_1"}
              linkTitle={"Zarezerwuj wizytę"}
              instaHref={"https://www.instagram.com/stan_relaksu/"}
              fbHref={"https://www.facebook.com/profile.php?id=61560021160720"}
              logoSrc={"/logo-stan-relaksu-kolo-tlo.png"}
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
        <ContactForm/>
        {/* <div className="  px-2 pb-10 shadow-xl rounded border-4 border-white  shadow-gray-400/75 bg-secondary sm:mx-2 lg:my-6 md:mx-0 ">
          <h3 className="text-4xl font-bold mt-6 text-center">Napisz do nas</h3>
          <p className="text-sm text-gray-400 mt-4 text-center">
            Szybko odpowiemy na Twoje pytania.
          </p>

          <form action={send} className="flex flex-col mt-8 space-y-4 lg:mx-96">
            <label htmlFor="name" className="text-xl font-bold ">
              Wpisz swoje imie:
            </label>
            <input
              type="text"
              id="name"
              required
              placeholder="imię"
              name="username"
              className="w-full rounded-md py-3 px-4 bg-white text-sm outline-blue-500 shadow-inner focus:bg-white "
            ></input>
            <label htmlFor="email" className="text-xl font-bold ">
              Wpisz E-mail do kontaktu:
            </label>
            <input
              type="email"
              id="email"
              required
              placeholder="E-mail"
              name="userEmail"
              className="w-full rounded-md py-3 px-4 bg-bg-white text-sm outline-blue-500 shadow-inner focus:bg-white "
            ></input>
            <label htmlFor="subject" className="text-xl font-bold ">
              Temat:
            </label>
            <input
              type="text"
              id="subject"
              required
              placeholder="Temat"
              name="subject"
              className="w-full rounded-md py-3 px-4 bg-white text-sm outline-blue-500 shadow-inner focus:bg-white "
            ></input>
            <label htmlFor="message" className="text-xl font-bold ">
              Wpisz swoją wiadomość:
            </label>
            <textarea
              name="message"
              id="message"
              required
              placeholder="Message"
              rows={5}
              className="w-full rounded-md px-4 bg-white text-sm pt-3 outline-blue-500 shadow-inner focus:bg-white "
            ></textarea>
            <button
              type="submit"
              className=" mx-auto lg:mx-1 hover:shadow-xl shadow-md shadow-gray-400 text-xl  border-2 rounded border-gray-200 bg-white hover:border-blue-500 px-6 py-4 mb-24 font-bold   hover:text-black focus:outline-none focus:shadow-outline"
            >
              Wyślij
            </button>
          </form>
        </div> */}
      </div>
    </div>
  );
};

export default Contact;
