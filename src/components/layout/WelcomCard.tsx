import React from "react";
import Link from "next/link";
import { lato } from "../fonts";
import WelcomeCardImage from "./WelcomeCardImage";
const WelcomCard = () => {
  return (
    <section
      id="welcome-card"
      className="relative  max-w-screen min-h-[70vh] bg-gradient-to-t from-teal-300/50 via-teal-400/75 to-teal-300/50 overflow-hidden flex justify-end border-4 border-gray-400 "
    >
      <div className="  grid lg:place-items-center  lg:h-[60] w-screen lg:w-2/3 rounded-lg ">
      <WelcomeCardImage/>
        <section className=" lg:absolute lg:top-[3em]  lg:left-20 flex flex-col shadow-xl rounded border-4 border-white shadow-gray-400/75  lg:w-1/2 lg:h-min ">
          <div className="flex flex-col  justify-center  w-full mt-8 lg:mt-20 ">
            <article className={`${lato.className}  `}>
              
              <h2 className="font-bold text-xl   xl:text-5xl text-white  text-center lg:text-left  bg-gradient-to-r from-teal-300/50 via-teal-400/75 to-teal-700/50  bg-opacity-95 lg:bg-opacity-25 leading-relaxed px-2 py-2 ">
                Stan Relaksu to terapeutyczne miejsce dla ciała stworzone z
                myślą o Tobie, osobie która chce o zadbać o swoje zdrowie,
                zwolnić i poczuć się lepiej.
              </h2>
              <p className="font-bold lg:text-lg xl:text-2xl text-lg text-white  lg:pt-4 text-center px-2 py-2 mt-36 lg:mt-4 bg-gradient-to-r from-teal-300/50 via-teal-400/75 to-teal-700/50 lg:bg-opacity-10 bg-opacity-30 ">
                Przyniosę Ci ulgę w bólu oraz napięciu stosując techniki masażu
                powięziowego i terapii manualnej, podpowiem Ci jak możesz
                pracować ze swoim ciałem poprzez ćwiczenia czy oddech dla
                poprawy Twojego dobrostanu.
              </p>
            </article>

            <div className="flex justify-center gap-12 lg:gap-24 py-3 mt-6 lg:mt-2 ">
              <Link
                href="/about"
                className=" hover:shadow-xl shadow-lg shadow-gray-400/75 text-xl lg:text-3xl  border-2 rounded border-black hover:border-white bg-white hover:bg-amber-400 px-6 py-2 font-bold  text-amber-700 hover:text-white  focus:outline-none focus:shadow-outline"
              >
                O mnie
              </Link>
              <Link
                href="/offer"
                className=" shadow-xl hover:shadow-lg text-xl lg:text-3xl  border-2 rounded hover:border-amber-400 hover:bg-amber-500 bg-amber-400 px-6 py-2 font-bold  hover:text-white text-black focus:outline-none focus:shadow-outline"
              >
                Oferta
              </Link>
            </div>
          </div>
        </section>{" "}
      </div>
    </section>
  );
};

export default WelcomCard;
