import React from "react";
import ImageCard from "./ImageCard";
import ButtonReservation from "./ButtonReservation";
import ImagesToAboutMeArticle from "./ImagesToAboutMeArticle";
import ButtonOffers from "./ButtonOffers";

const AboutMeMainCard = () => {
  return (
    <div className={`flex flex-col  items-center  shadow-xl   mt-1 animate-fadeIn rounded  transition-transform duration-200 ease-in-out  `}>
      <div className="flex flex-col sm:flex-row   shadow-md border-4 bg-my-bg-about bg-no-repeat bg-cover  ">
        <div className=" mx-auto  h-full   lg:mx-4 my-2 bg-white ">
          <div className="relative w-[20rem] h-[26rem] md:w-[17rem]  lg:w-[21rem] lg:h-[35rem]   shadow-md shadow-gray-400 ">
            <ImageCard src={"/aboutme-image.jpg"} alt={"terapia manualna"} caption={""} />
          </div>
        </div>
        <div className="flex flex-col bg-white justify-center items-center sm:mx-4 opacity-90 sm:my-2 md:my-2 lg:my-4  2xl:my-24 ">
          <h1 className=" text-xl text-left sm:pl-2  md:pl-12 lg:text-2xl font-semibold w-full py-2 md:py-4 lg:py-6 bg-white ">
            Cześć, jestem Kinga
          </h1>
          <div className="flex flex-col items-center justify-center  lg:mx-12  xl:mx-2 2xl:mx-36 px-4 py-4 lg:py-4   ">
            <article className=" text-lg lg:text-xl sm:px-2   md:text-left  text-pretty ">
              <p className="  text-pretty ">
                Ukończyłam<strong> fizjoterapię </strong>na Warszawskim
                Uniwersytecie Medycznym. Jestem
                <strong> naturoterapeutką</strong>, w pracy wykorzystuje
                różnorodne
                <strong> techniki terapeutyczne</strong> zdobyte na licznych
                <strong> szkoleniach</strong> i kursach specjalistycznych.{" "}
              </p>
              <h2 className=" w-full my-4">
                Dzięki swojej szerokiej wiedzy i doświadczeniu pomogę Ci w
                procesie dbania o swoje zdrowie. Czekam na Ciebie, aby przynieść
                Ci <strong> ulgę w bólu i napięciu</strong>.{" "}
              </h2>
              <p className=" w-full">
                Zarezerwuj wizytę i daj się sobą zaopiekować w
                <strong> komfortowym zaciszu</strong> gabinetu Stan Relaksu
              </p>
            </article>
            <div className="w-full flex flex-col gap-2 sm:flex-row mb-4 my-4 sm:my-4 md:mx-1  md:my-6">
              <ButtonReservation />
              <ButtonOffers />
            </div>
          </div>
        </div>
      </div>

      <ImagesToAboutMeArticle />
      <div className="flex flex-col items-center justify-center  md:mx-2 md:my-2 px-4 py-3 md:py-12 lg:my-12 shadow-md shadow-gray-400  bg-white  ">
        <article className=" text-left md:text-center text-lg md:text-xl lg:text-2xl mx-auto  sm:mx-4 md:mx-12 lg:my-12 2xl:my-4 2xl:px-48 xl:mx-48 leading-loose bg-white w-full h-full bg-opacity-90">
          <h2 className="text-pretty ">
            Przyniosę Ci ulgę w bólu oraz napięciu stosując techniki
            <strong> masażu powięziowego</strong> i{" "}
            <strong>terapii manualnej</strong>, podpowiem Ci jak możesz pracować
            ze swoim ciałem, poprzez ćwiczenia czy oddech dla poprawy Twojego
            dobrostanu.
          </h2>

          <p className="text-pretty mt-6 md:mt-12">
            W pracy zajmuje się też{" "}
            <strong>problemami jelitow-trawiennymi</strong>,
            <strong> terapią uroginekologiczną</strong>, pracą z blizną po <strong>
               cesarskim cięciu, bliznach operacyjnych, bolesnymi miesiączkami
              czy współżyciem.
            </strong>
          </p>
        </article>
      </div>
    </div>
  );
};

export default AboutMeMainCard;
