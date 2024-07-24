import PageHeader from "@/components/homepage/PageHeader";
import { BsArrowUpRightSquare } from "react-icons/bs";
import { lato } from "@/components/fonts";
import React from "react";
import Link from "next/link";
import BackLink from "@/components/layout/BackLink";

const About = () => {
  return (
    <div className="">
      <PageHeader id={"about"} >O mnie</PageHeader>
      <div className="relative bg-no-repeat lg:bg-right bg-center bg-cover lg:bg-contain bg-my-hero-image  lg:h-[100vh] lg:w-[90vw] rounded-lg lg:mx-12 lg:my-5 bg-mainthemelogo ">
        <div className=" lg:absolute lg:top-[6em] lg:left-[1em] lg:h-[46em] lg:w-[68em]   lg:border-8 border-white  lg:mx-12 lg:my-6 bg-gradient-to-r from-teal-700/50 via-teal-400/75 to-teal-700/90  bg-opacity-98 text-white">
          <article className={`${lato.className} border-4 lg:border-0 border-mainthemelogo `}>
            <h2 className="text-xl lg:text-2xl px-3 py-3 text-white bg">
              Cześć, jestem Kinga
            </h2>
            <p className=" text-xl lg:text-2xl text-justify mt-2 px-12 indent-8 ">
              Ukończyłam fizjoterapię na Warszawskim Uniwersytecie Medycznym,
              jestem naturoterapeutką, w pracy wykorzystuje różnorodne techniki
              terapeutyczne zdobyte na licznych szkoleniach i kursach
              specjalistycznych. Dzięki swojej szerokiej wiedzy i doświadczeniu
              pomogę Ci w procesie dbania o swoje zdrowie. Czekam na Ciebie aby
              przynieść Ci ulgę w bólu i napięciu.&nbsp;
              <Link
                href="https://booksy.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="inline w-max underline">
                  Zarezerwuj wizyte{" "}
                  <BsArrowUpRightSquare className="inline w-5 h-5" />
                </span>
              </Link>{" "}
              i daj się sobą zaopiekować w komfortowym zaciszu gabinetu Stan
              Relaksu.
            </p>
          
            <p className="text-xl lg:text-2xl text-justify px-12 py-3 indent-8">
              Przyniosę Ci ulgę w bólu oraz napięciu stosując techniki masażu
              powięziowego i terapii manualnej, podpowiem Ci jak możesz pracować
              ze swoim ciałem poprzez ćwiczenia czy oddech dla poprawy Twojego
              dobrostanu. W pracy zajmuje się też problemami
              jelitow-trawiennymi, terapią uroginekologiczną, pracą z blizną,
              bolesnymi miesiączkami czy współżyciem.{" "}
            </p>
            
            <p className="text-xl lg:text-2xl text-justify px-12  indent-8">
              Moją pasją jest terapia manualna twarzy. Dzięki pracy w obrębie
              twarzy, głowy i szyi możesz uzyskać ulgę w bólach stawów
              skroniowo-żuchwowych, bólach głowy, migrenach, problemach z
              zatokami oraz uczuciem napięcia i zmęczenia. Zajmę się też
              zdrowiem i pięknym wyglądem Twojej twarzy poprzez masaż Kobido czy
              igłoterapię estetyczna oraz techniki manualne z wykorzystaniem
              guasha czy bańki chińskiej.
            </p>
            <BackLink>Dowiedz się więcej</BackLink>
          </article>
        </div>
      </div>
    </div>
  );
};

export default About;
