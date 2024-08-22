import React from "react";
import ImageCard from "./ImageCard";
import ButtonReservation from "./ButtonReservation";
import ImagesToAboutMeArticle from "./ImagesToAboutMeArticle";
import ButtonOffers from "./ButtonOffers";

const AboutMeMainCard = () => {
  return (
    <div
      className={`flex flex-col  items-center  shadow-xl   rounded mt-1`}
    >
      <div className="flex flex-col md:flex-row  bg-white  ">
        <div className=" mx-auto  h-full rounded-xl  md:mx-4 my-2 ">
          <div className="relative w-[22rem] h-96  md:w-72 md:h-96  md:my-6 shadow-md shadow-gray-400 ">
            <ImageCard src={"/aboutme-image.jpg"} alt={"terapia manualna"} />
          </div>
        </div>
        <div className="flex flex-col bg-white ">
          <p className=" text-xl text-left md:text-2xl font-semibold w-full py-2 md:py-6 px-2 ">
            Cześć, jestem Kinga
          </p>
          <div className="flex flex-col items-center justify-center  md:mx-6 my-2 px-4 py-4 lg:py-12 shadow-md shadow-gray-400 bg-white md:pr-48 md:rounded-r-full">
            <article className=" text-lg md:text-xl  md:text-left  text-pretty ">
              <p className="  text-pretty ">
                Ukończyłam<strong> fizjoterapię </strong>na Warszawskim
                Uniwersytecie Medycznym.<br></br> Jestem
                <strong> naturoterapeutką</strong>, w pracy wykorzystuje
                różnorodne
                <strong> techniki terapeutyczne</strong> zdobyte na licznych
                <strong> szkoleniach</strong> i kursach specjalistycznych.{" "}
              </p>
              <h1 className=" w-full my-4">
                Dzięki swojej szerokiej wiedzy i doświadczeniu pomogę Ci w
                procesie
                 dbania o swoje zdrowie. Czekam na Ciebie, aby
                przynieść Ci <strong> ulgę w bólu i napięciu</strong>.{" "}
              </h1>
              <p className=" w-full">
                Zarezerwuj wizytę i daj się sobą zaopiekować w
                <strong> komfortowym zaciszu</strong> gabinetu Stan Relaksu
              </p>
            </article>
          </div>
          <div className="w-full flex flex-col md:flex-row mb-4 md:mx-1 md:my-6"><ButtonReservation /><ButtonOffers/></div>
          
        </div>
      </div>

      <ImagesToAboutMeArticle />
      <div className="flex flex-col items-center justify-center  md:mx-6 md:my-2 px-4 py-3 md:py-12 lg:my-12 shadow-md shadow-gray-400 bg-white ">
        <article className=" text-left md:text-center text-lg md:text-2xl mx-auto md:mx-12 lg:my-12  leading-loose">
          <h2 className="text-pretty ">
            Przyniosę Ci ulgę w bólu oraz napięciu stosując techniki
            <strong> masażu powięziowego</strong> i{" "}
            <strong>terapii manualnej</strong>, podpowiem Ci jak możesz pracować
            ze swoim ciałem, poprzez ćwiczenia czy oddech dla poprawy Twojego
            dobrostanu.
          </h2>
          <p className="text-pretty mt-2">
            W pracy zajmuje się też{" "}
            <strong>problemami jelitow-trawiennymi</strong>,
            <strong> terapią uroginekologiczną</strong>,pracą z blizną po
            <strong>
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
