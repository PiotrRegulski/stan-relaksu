import React from "react";
import Image from "next/image";
import Link from "next/link";
import { lato } from "../fonts";
const WelcomCard = () => {
  return (
    <section
      id="welcome-card"
      className="relative  max-w-screen min-h-[70vh] bg-gradient-to-t from-teal-300/50 via-teal-400/75 to-teal-300/50 overflow-hidden flex justify-end shadow-xl"
    >
      <div className="  grid md:place-items-center  bg-cover md:bg-left bg-center  bg-my-bg-image h-[75vh] md:h-[60] w-screen md:w-2/3 rounded-md shadow-xl ">
        <section className=" md:absolute md:top-3 md:left-20 flex flex-col shadow-xl rounded border-4 border-white shadow-gray-400/75  md:w-1/2 md:h-min ">
          <div className="flex flex-col  justify-center  w-full mt-8 md:mt-20 ">
            <article className={`${lato.className}  `}>
              {" "}
              <h2 className="font-bold text-xl   xl:text-5xl text-white  text-center md:text-left  bg-gradient-to-r from-teal-300/50 via-teal-400/75 to-teal-700/50  bg-opacity-75 md:bg-opacity-25 leading-relaxed px-2 py-2 ">
                Stan Relaksu to terapeutyczne miejsce dla ciała stworzone z
                myślą o Tobie, osobie która chce o zadbać o swoje zdrowie,
                zwolnić i poczuć się lepiej.
              </h2>
              <p className="font-bold md:text-md xl:text-2xl text-md text-white  pt-4 text-center px-2 py-2 mt-36 md:mt-4 bg-gradient-to-r from-teal-300/50 via-teal-400/75 to-teal-700/50 md:bg-opacity-10 bg-opacity-30 ">
                Przyniosę Ci ulgę w bólu oraz napięciu stosując techniki masażu
                powięziowego i terapii manualnej, podpowiem Ci jak możesz
                pracować ze swoim ciałem poprzez ćwiczenia czy oddech dla
                poprawy Twojego dobrostanu.
              </p>
            </article>

            <div className="flex justify-center gap-12 md:gap-24 py-3 mt-6 md:mt-2 ">
              <Link
                href="/about"
                className=" hover:shadow-xl shadow-md shadow-gray-400/75 text-3xl  border-2 rounded border-black hover:border-white bg-white hover:bg-amber-400 px-6 py-2 font-bold  text-amber-700 hover:text-white  focus:outline-none focus:shadow-outline"
              >
                O mnie
              </Link>
              <Link
                href="/offer"
                className=" shadow-xl hover:shadow-md text-3xl  border-2 rounded hover:border-amber-400 hover:bg-amber-500 bg-amber-400 px-6 py-2 font-bold  hover:text-white text-black focus:outline-none focus:shadow-outline"
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
