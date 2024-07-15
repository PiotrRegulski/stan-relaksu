import PageHeader from "@/components/homepage/PageHeader";
import Image from "next/image";
import React from "react";
import Link from "next/link";
const About = () => {
  return (
    <>
      <PageHeader id={"about"}>O mnie</PageHeader>
      <div className="relative bg-white overflow-hidden mt-3">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-72 text-white transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100"></polygon>
            </svg>

            <div className="pt-1"></div>
            <main className="mt-6 mx-auto max-w-5xl px-2 md:px-12 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h2 className="my-6 pl-4 text-left text-2xl tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-4xl ">
                  Kim jestem
                </h2>

                <article className="text-xl font-[Lato] md:px-1 md:mr-16 leading-loose text-pretty text-gray-900/70">
                  {" "}
                  <p className="indent-8 text-justify ">
                    Cześć, jestem Kinga. Stworzyłam to miejsce z myślą o Tobie,
                    osobie która chce o siebie zadbać, zwolnić i poczuć się
                    lepiej. Przyniosę Ci ulgę w bólu oraz napięciu stosując
                    techniki
                    <strong> masażu powięziowego i terapii manualnej</strong> ,
                    podpowiem Ci jak możesz pracować ze swoim ciałem poprzez
                    ćwiczenia czy oddech dla poprawy Twojego dobrostanu. Moją
                    pasją jest fizjoterapia estetyczna twarzy. Zajmę się też
                    zdrowiem i pięknym wyglądem Twojej twarzy poprzez
                    <strong> masaż Kobido czy igłoterapię estetyczna.</strong>
                  </p>
                  <p className="indent-8 text-justify">
                    Ukończyłam fizjoterapię na Warszawskim Uniwersytecie
                    Medycznym, jestem naturoterapeutką, w pracy wykorzystuje
                    różnorodne techniki terapeutyczne zdobyte na licznych
                    szkoleniach i kursach specjalistycznych. Dzięki swojej
                    szerokiej wiedzy i doświadczeniu pomogę Ci w procesie dbania
                    o swoje zdrowie. Czekam na Ciebie aby przynieść Ci ulgę w
                    bólu i napięciu
                  </p>
                  <p className="indent-8 text-justify">
                    <strong>
                      <Link
                        href="https://booksy.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Zarezerwuj wizytę
                      </Link>
                    </strong>{" "}
                    i daj się sobą zaopiekować w komfortowy zaciszu gabinetu
                    Stan Relaksu.
                  </p>
                </article>
                <div className=" flex justify-center mx-4 my-4">
                  {" "}
                  <Link
                    href="/offer"
                    className=" hover:shadow-xl shadow-md text-xl  border-2 rounded border-amber-400 bg-amber-500 hover:bg-amber-400 px-6 py-2 font-bold  text-amber-70 hover:text-white focus:outline-none focus:shadow-outline"
                  >
                    Klikni i zapoznaj się ofertą
                  </Link>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="relative w-[95vw] h-96 my-4 mx-2 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
          <Image
            className=" absolute lg:static"
            src="/hero.png"
            alt=" hero"
            layout="fill"
            objectFit="contein"
            objectPosition="center"
          />
        </div>
      </div>
    </>
  );
};

export default About;
