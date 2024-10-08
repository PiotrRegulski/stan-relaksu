import React from "react";
import ImageCard from "./ImageCard";
import ButtonReservation from "./ButtonReservation";
import Image from "next/image";
import ImagesToAboutMeArticle from "./ImagesToAboutMeArticle";
import ButtonOffers from "./ButtonOffers";
import ImagesToAboutMeLast from "./ImagesToAboutMeLast";

const AboutMeMainCard = () => {
  return (
    <div className={`flex  md:flex-row border-b-4  lg:h-[40rem]`}>
      {/* <div className="flex items-end bg-secondary ">
        <div className="relative w-[20rem] h-[40rem] lg:w-[23rem] lg:h-full ">
          <Image
            src="/terapia-manualna.jpg"
            alt="terapia manualna"
            fill
            sizes="(max-width: 600px) 100vw, 50vw"
            className=" object-cover h-full w-full shadow-lg  "
            priority={true}
          />
        </div>
      </div> */}
      <div className="flex flex-col md:flex-row  justify-center items-center   w-full  2xl:px-24 bg-gradient-to-t from-secondary to-transparent   bg-opacity-40   ">
        <div className="flex lg:w-1/2 justify-end py-8  ">
          <div className="relative w-72 h-72 md:w-[18rem] md:h-[18rem] lg:w-[20rem] lg:h-[20rem] mx-2">
            <Image
              src="/hero-circle.png"
              alt="Kinga Wołoszka- fizjoterapeutka"
              fill
              sizes="(max-width: 600px) 100vw, 50vw"
              className=" object-cover h-full w-full rounded-full shadow-lg"
              priority={true}
            />
          </div>
        </div>

        <div className="flex justify-center items-center flex-col md:mt-20  ">
          <h1 className="  text-left  w-full  text-4xl  md:text-5xl font-[Cormorant-Garamond] mb-4 px-3 lg:px-12 ">
           Cześć,<br></br> jestem Kinga
          </h1>
          <article className=" text-lg lg:text-xl    md:text-left  text-pretty  py-4  px-3 lg:px-12 ">
            <p className="  text-pretty ">
              Ukończyłam fizjoterapię na Warszawskim Uniwersytecie Medycznym.
              Jestem naturoterapeutką techniki terapeutyczne zdobyte na licznych
              szkoleniach i kursach specjalistycznych.{" "}
            </p>
            <h2 className=" w-full ">
              Dzięki swojej szerokiej wiedzy i doświadczeniu pomogę Ci w
              procesie dbania o swoje zdrowie. Czekam na Ciebie, aby przynieść
              Ci ulgę w bólu i napięciu.{" "}
            </h2>
            <p className=" w-full">
              Zarezerwuj wizytę i daj się sobą zaopiekować w
              <strong> komfortowym zaciszu</strong> gabinetu Stan Relaksu
            </p>
          </article>
          <div className="w-full flex flex-col sm:flex-row gap-2  mb-4 my-4 sm:my-4 md:mx-1  md:my-6">
            <ButtonReservation />
            <ButtonOffers />
          </div>
        </div>
        
      </div>
      {/* <div className="flex items-end bg-secondary ">
        <div className="relative w-[20rem] h-[20rem] lg:w-[23rem] lg:h-full ">
          <Image
            src="/terapia-uro.jpg"
            alt="Terapia uroginekologiczna"
            fill
            sizes="(max-width: 600px) 100vw, 50vw"
            className=" object-cover h-full w-full "
            priority={true}
          />
        </div>
      </div> */}

      {/* <ImagesToAboutMeArticle />
      <div className="flex flex-col items-center justify-start  md:mx-2 md:my-2 px-4 py-3 md:py-12 lg:my-12 shadow-md shadow-gray-400  bg-white  ">
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
            <strong> terapią uroginekologiczną</strong>, pracą z blizną po{" "}
            <strong>
              cesarskim cięciu, bliznach operacyjnych, bolesnymi miesiączkami
              czy współżyciem.
            </strong>
          </p>
        </article>
      </div> */}
    </div>
    
  );
};

export default AboutMeMainCard;
