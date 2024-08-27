import React from "react";
import FaceImage from "./img-component/FaceImage";
import AboutImageCard from "../about/AboutImageCard";
import ImageCard from "../about/ImageCard";
import { lato } from "../fonts";
import Link from "next/link";

const WelcomeAboutMe = () => {
  return (
    <>
      <div className=" relative flex w-full bg-secondary ">
       
        <div className="flex flex-col  lg:w-full  ">
          <div className="flex-row   md:my-4">
            <div className=" flex flex-col md:flex-row md:h-[20rem] lg:h-[22rem]  justify-center bg-white  md:mx-4 rounded-xl  shadow-primary shadow-lg ">
              <div className="w-full md:w-full lg:w-1/2  md:mt-12 ">
                <p
                  className={`${lato.className} text-lg font-bold  sm:text-xl  text-center lg:text-left  tracking-wide leading-10 animate-fadeIn transition-transform duration-1000 ease-in-out sm:pt-6 md:pt-8 px-3 md:px-1 lg:px-8 lg:pt-0 lg:my-12 2xl:mx-12 `}
                >
                  <strong className="lg:text-3xl">Stan Relaksu</strong> to terapeutyczne
                  miejsce dla ciała stworzone z myślą o Tobie, osobie która chce
                  o zadbać o swoje zdrowie, zwolnić i poczuć się lepiej.
                  <span className="flex justify-center md:justify-end my-4 md:mr-5 text-sm mx-auto ">
                    <Link
                      href="/about"
                      className=" px-2 py-2 md:px-4 my-4 md:py-2  rounded-xl hover:shadow-xl shadow-lg shadow-gray-400/75 text-sm lg:text-lg bg-primary hover:bg-opacity-70  font-bold hover:underline text-white hover:text-white  focus:outline-none focus:shadow-outline"
                    >
                      Dowiedz się więcej
                    </Link>
                  </span>
                </p>
              </div>
              <div className="flex w-full md:w-1/3 lg:w-1/2  justify-center bg-white  shadow-lg md:shadow-[0px]  shadow-gray-400 md:shadow-0 ">
                <div className="relative w-full h-96 sm:w-full sm:h-96 md:w-[25rem] md:h-auto lg:w-[32rem] lg:h-[19rem]  my-6 md:mx-2 sm:rounded-xl sm:border-8 border-white ">
                  <FaceImage />
                </div>
              </div>
            </div>

            <div className="  flex flex-col lg:flex-row  bg-white mx-auto my-4 px-4 md:px-12 md:mx-4 md:mt-12 shadow-primary shadow-lg 2xl:mx-24 rounded-xl">
              <div className="flex lg:hidden mx-auto w-full  ">
                <div className=" relative mx-auto h-48 w-48 sm:w-72 sm:h-72 my-2">
                  <ImageCard
                    src={"/hero-circle.png"}
                    alt={"Twórca gabientu Stan Relaksu Kinga Wołoszka"}
                  />
                </div>
              </div>
              <div className="hidden lg:flex justify-center items-center ">
                <div className=" relative   md:max-w-[26rem] w-[30rem] h-[20rem] md:h-[40rem] lg:w-[20rem] lg:h-[25rem] 2xl:w-[21rem] 2xl:h-[28rem] shadow-gray-400 shadow-lg     mx-1 rounded-xl bg-white">
                  <AboutImageCard />
                </div>
              </div>
              <div className=" lg:my-24  lg:mx-12">
                <p className="font-bold  text-xl sm:text-2xl md:text-2xl mx-auto pt-2 ">
                  Cześć, jestem Kinga.
                </p>
            
              <p className="  text-lg  sm:text-xl   animate-fadeIn transition-transform duration-1000 ease-in-out  ">
                <br></br> Przyniosę Ci ulgę w bólu oraz napięciu stosując
                techniki
                <strong> masażu powięziowego</strong> i{" "}
                <strong>terapii manualnej</strong>. Podpowiem Ci jak możesz
                <strong> pracować ze swoim ciałem</strong> poprzez dobrane
                ćwiczenia czy oddech. Dla poprawy Twojego zdrowia i
                samopoczucia.
                <span className="flex justify-end py-10 text-sm ">
                  <Link
                    href="https://www.instagram.com/stan_relaksu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2 py-3  rounded-xl hover:shadow-xl shadow-lg shadow-gray-400/ text-sm lg:text-lg bg-primary hover:bg-primary/75  font-bold  text-white hover:text-white hover:underline  focus:outline-none focus:shadow-outline"
                  >
                    Znajdź mnie na Instagramie
                  </Link>
                </span>
              </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WelcomeAboutMe;
