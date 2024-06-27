import React from "react";
import Image from "next/image";
import Link from "next/link";
import { lato } from "../fonts";
const WelcomCard = () => {
  return (
    <section id="welcome-card" className="relative  max-w-screen min-h-screen bg-gradient-to-t from-teal-300/50 via-teal-400/75 to-teal-300/50 overflow-hidden flex justify-end ">
      <div className="  grid sm:place-items-center  bg-cover sm:bg-left bg-center  bg-my-bg-image border-1 h-[90vh] sm:h-[60] w-screen sm:w-2/3 rounded-md ">
      <section className=" sm:absolute sm:top-3 sm:left-20 flex flex-col shadow-xl rounded border-4 border-white shadow-gray-400/75 sm:w-2/3 md:w-1/2 sm:h-min ">
        <div className="flex flex-col  justify-center  w-full mt-8 md:mt-20 ">
          <article className={`${lato.className}  `}>
            {" "}
            <h2 className="font-bold text-xl sm:text-sm md:text-5xl text-white  text-center sm:text-left  bg-black bg-opacity-35 sm:bg-opacity-10 leading-relaxed px-2 py-2 ">
              Moją pasją jest fizjoterapia estetyczna twarzy. Zajmę się też
              zdrowiem i pięknym wyglądem Twojej twarzy poprzez masaż Kobido czy
              igłoterapię estetyczna.
            </h2>
            
            <p className="font-bold sm:text-sm md:text-2xl text-md text-white  pt-4 text-center px-2 py-2 mt-36 sm:mt-4 bg-black sm:bg-opacity-10 bg-opacity-30 ">
              Przyniosę Ci ulgę w bólu oraz napięciu stosując techniki masażu
              powięziowego i terapii manualnej, podpowiem Ci jak możesz pracować
              ze swoim ciałem poprzez ćwiczenia czy oddech dla poprawy Twojego
              dobrostanu.
            </p>
          
          </article>

          <div className="flex justify-center gap-12 sm:gap-24 py-3 mt-6 sm:mt-2 ">
            <Link
              href="/about"
              className=" hover:shadow-xl shadow-md shadow-gray-400/75 text-xl  border-2 rounded border-black hover:border-white bg-white hover:bg-amber-400 px-6 py-2 font-bold  text-amber-700 hover:text-white focus:outline-none focus:shadow-outline"
            >
              O mnie
            </Link>
            <Link
              href="/offer"
              className=" shadow-xl hover:shadow-md text-xl  border-2 rounded hover:border-amber-400 hover:bg-amber-500 bg-amber-400 px-6 py-2 font-bold  hover:text-white text-black focus:outline-none focus:shadow-outline"
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
