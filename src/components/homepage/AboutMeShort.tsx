"use client";
import React from "react";
import Link from "next/link";
import ButtonMain from "../layout/ButtonMain";
import ImageItem from "./img-component/ImageItem";
import ImageItemMobile from "./img-component/ImageItemMobile";
const AboutMeShort = () => {
  return (
    <section className="flex container mx-auto flex-col lg:flex-row items-center justify-center  lg:py-12 px-2 lg:px-8 xl:py-20 xl:px-32 my-4 h-[800px] bg-gradient-to-r from-secondary via-white to-secondary">
      {/* Sekcja obrazka */}
      <ImageItem />
      <ImageItemMobile />

      {/* Sekcja tekstowa */}
      <div className="  w-full lg:full  flex flex-col mt-2 xl:mt-12 text-left shadow-white px-2 py-2 md:px-12 animate-fadeIn delay-[4400ms] bg-white rounded-xl  ">
        <h2 className="text-2xl xl:text-3xl font-bold text-gray-800 mb-8 ">
          Cześć, jestem Kinga Wołoszka
        </h2>
        <p className="text-base text-justify xl:text-lg text-gray-600 leading-relaxed mb-4">
          Przyniosę Ci ulgę w bólu oraz napięciu, stosując techniki
          <span className="font-semibold">
            {" "}
            masażu powięziowego i terapii manualnej
          </span>
          . Podpowiem Ci, jak możesz pracować ze swoim ciałem, poprzez
          indywidualnie dobrane ćwiczenia czy trening oddechowy, aby poprawić
          Twoje zdrowie i samopoczucie.
        </p>
        <p className="text-base xl:text-lg text-justify text-gray-600 leading-relaxed" >
          Czekam na Ciebie z{" "}
          <span className="font-semibold">
            terapią manualną, masażem powięziowym oraz masażem tkanek głębokich
          </span>
          .
       
          {" "}
          Głęboko odprężające techniki masażu twarzy
          <span className="font-semibold"> Kobido </span>oraz masażu
          relaksacyjnego pozwolą Ci osiągnąć{" "}
          <span className="font-bold text-gray-800">Stan Relaksu.</span>
        </p>
        <div className="flex  w-full justify-around my-4">
          <Link
            href="https://booksy.com/pl-pl/257898_stan-relaksu-gabinet-terapii-manualnej-i-masazu_masaz_3_warszawa#ba_s=dl_1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Zarezerwuj wizytę przez Booksy"
          >
            <ButtonMain>Zarezerwuj wizytę</ButtonMain>
          </Link>
          <Link href="/omnie" aria-label="Link do strony o mnie">
            <ButtonMain>Dowiedz się więcej</ButtonMain>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutMeShort;
