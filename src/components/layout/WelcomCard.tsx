import React from "react";
import Link from "next/link";
import { lato } from "../fonts";
import WelcomeCardImage from "./WelcomeCardImage";
const WelcomCard = () => {
  return (
    <div
      id="welcome-card"
      className=" relative lg:mx-12  h-[60vh]  xl:min-h-[60vh]  bg-gradient-to-t from-teal-300/50 via-teal-400/75 to-teal-300/50 overflow-hidden flex justify-end border-t-4 border-gray-400  "
    >
      <div className="sm:w-2/3 w-screen   ">
        <WelcomeCardImage />
      </div>
      <div className=" absolute top-3 lg:top-10 left-1 lg:left-20 flex flex-col lg:shadow-xl lg:border-4 lg:border-white shadow-gray-400/75 w-1/2 lg:w-1/2  animate-fadeIn rounded-xl   transition-transform duration-1000 ease-in-out bg-gradient-to-r from-teal-500 via-teal-400/75 to-teal-500/75 bg-opacity-95 ">
        <div className=" container flex flex-col lg:px-6 py-6">
          <article className={`${lato.className}  `}>
            <h2 className="font-bold text-xl md:text-4xl text-white text-center    bg-opacity-95 lg:bg-opacity-25 px-2 py-2 ">
              Stan Relaksu to terapeutyczne miejsce dla ciała stworzone z myślą
              o Tobie, osobie która chce o siebie zadbać o swoje zdrowie, zwolnić i
              poczuć się lepiej.
            </h2>
            {/* <p className="font-bold lg:text-lg xl:text-2xl text-lg text-white  lg:pt-4 text-center px-2 py-2 mt-36 sm:mt-2 lg:mt-4 bg-gradient-to-r from-transparent via-teal-400/75 to-transparent lg:bg-opacity-10 bg-opacity-30 ">
              Przyniosę Ci ulgę w bólu oraz napięciu stosując techniki masażu
              powięziowego i terapii manualnej, podpowiem Ci jak możesz pracować
              ze swoim ciałem poprzez ćwiczenia czy oddech dla poprawy Twojego
              dobrostanu.
            </p> */}
          </article>

          <div className="hidden sm:flex justify-center gap-12 lg:gap-24 py-3 mt-6 lg:mt-2 ">
            <Link
               href="https://booksy.com/"
               target="_blank"
               rel="noopener noreferrer"
              className=" hover:shadow-xl shadow-lg shadow-gray-400/75 text-xl lg:text-3xl  border-2 rounded border-black hover:border-white bg-white hover:bg-amber-400 px-6 py-2 font-bold  text-black hover:text-white  focus:outline-none focus:shadow-outline"
            >
              Zarezerwuj Wizytę
            </Link>
            <Link
              href="/offer"
              className=" shadow-xl hover:shadow-lg text-xl lg:text-3xl  border-2 rounded hover:border-teal-400 hover:bg-amber-500 bg-amber-400 px-6 py-2 font-bold  hover:text-white text-black focus:outline-none focus:shadow-outline"
            >
              Oferta
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomCard;
