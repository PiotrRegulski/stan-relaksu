import React from "react";
import FaceImage from "./img-component/FaceImage";
import AboutImageCard from "../about/AboutImageCard";
import ImageCard from "../about/ImageCard";
import { lato } from "../fonts";
import Link from "next/link";

const WelcomeAboutMe = () => {
  return (
    <div className=" flex w-full flex-col justify-center items-center bg-white my-4 xl:my-16 ">
      <div className=" flex flex-col justify-center items-center  mx-auto md:mx-24 lg:mx-24 xl:mx-48">
        <h1 className=" text-xl font-serif sm:text-2xl mx-auto xl:mx-4 font-bold px-2 py-2 text-center md:text-left">
          Gabinet terapii manualnej i masażu - Stan Relaksu
        </h1>
        <p
          className={`${lato.className} text-lg  font-serif  sm:text-xl  text-center   tracking-wide leading-10 animate-fadeIn transition-transform duration-1000 ease-in-out sm:pt-2 md:pt-4 px-3 sm:px-8 md:px-1 lg:px-8 lg:pt-0 2xl:pt-4 lg:my-6 2xl:mx-12 2xl:mt-4 `}
        >
          to terapeutyczne miejsce dla ciała stworzone &nbsp;z myślą o Tobie. {" "}
          Osobie która chce o zadbać o swoje zdrowie, zwolnić i poczuć się
          lepiej. Czekam na Ciebie z{" "}
          <strong>
            terapią manualną, masażem powięziowym, masażem tkanek głębokich
          </strong>
          . Głęboko odprężającymi technikami
          <strong> masażu twarzy Kobido</strong>{" "}
          <strong>, masażu relaksacyjnego,</strong> które pozwolą Ci osiągnąć
          Stan Relaksu.
          <span className="flex justify-center  my-4 md:mr-5 text-sm mx-auto ">
            <Link
              href="/about"
              className=" px-2 py-2 md:px-4 my-4 md:py-2  rounded-xl hover:shadow-xl shadow-lg shadow-gray-400/75 text-sm lg:text-lg bg-primary hover:bg-opacity-70  font-bold hover:underline text-white hover:text-white  focus:outline-none focus:shadow-outline"
            >
              Dowiedz się więcej
            </Link>
          </span>
        </p>
      </div>
      <div className="flex w-full justify-center bg-my-bg-faceImage bg-cover bg-no-repeat bg-center bg-fixed md:bg-cover  ">
        <div className="relative h-[10rem] sm:h-[18rem] xl:h-[28rem] w-full  ">
          {/* <FaceImage /> */}
        </div>
      </div>
    </div>
  );
};

export default WelcomeAboutMe;
