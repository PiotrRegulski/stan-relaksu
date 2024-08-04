import React from "react";
import FaceImage from "./img-component/FaceImage";
import BackImage from "./img-component/BackImage";
import AboutImageCard from "../about/AboutImageCard";
import { lato } from "../fonts";
import Link from "next/link";

const WelcomeAboutMe = () => {
  return (
    <div className="flex relative  md:mx-12 py-10 bg-gradient-to-t from-teal-300/50 via-teal-400/75 to-teal-300/50">
      <div className="hidden sm:block w-[70vw] ">
        <AboutImageCard />
      </div>
      <div className="flex flex-col  sm:gap-10 bg-white mx-2 ">
        <div className=" flex flex-col sm:flex-row w-full justify-center items-center  ">
          <p className="  font-bold text-xl md:text-3xl text-justify text-black  px-2 py-2 sm:px-4 sm:py-4   md:w-2/3 animate-fadeIn rounded-xl   transition-transform duration-1000 ease-in-out  ">
            Cześć Jestem Kinga Wołoszka!<br></br> Przyniosę Ci ulgę w bólu oraz napięciu
            stosując techniki masażu powięziowego i terapii manualnej, podpowiem
            Ci jak możesz pracować ze swoim ciałem poprzez dobrane ćwiczenia czy
            oddech dla poprawy Twojego zdrowia i samopoczucia.<br></br>
            <span className="flex justify-end mt-10 text-sm ">
              <Link
                href="/about"
                className="  px-2 py-3  hover:shadow-xl shadow-lg shadow-gray-400/75 text-sm lg:text-3xl    bg-white hover:bg-amber-400 font-bold  text-black hover:text-white  focus:outline-none focus:shadow-outline"
              >
                Dowiedz się więcej...
              </Link>
            </span>
          </p>

          <div className="sm:ml-10 w-96 h-96 my-4">
            <FaceImage />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center  rounded-md ">
          <div className="sm:ml-10 w-96 h-96 my-4 sm:mr-10">
            <BackImage />
          </div>
          <p className=" font-bold text-xl md:text-3xl text-justify text-gray-900 px-2 py-2 sm:px-4 sm:py-4  sm:w-2/3     animate-fadeIn rounded-xl   transition-transform duration-1000 ease-in-out  ">
            Czekam na Ciebie z terapią manualną, masażem powięziowym, masażem
            tkanek głębokich, głęboko odprężającymi technikami masażu twarzy
            Kobido, masażu relaksacyjnego, które pozwolą Ci osiągnąć Stan
            Relaksu
          </p>
        </div>
      </div>
    </div>
    // <div className="lg:mx-12 my-2 bg-gradient-to-t from-teal-300/50 via-teal-400/75 to-teal-300/50">
    //   <div className="flex h-[70vh] border-4 border-white">
    //     <div className="basis-1/3 mt-1">
    //       <FaceImage />
    //     </div>
    //     <div className=" basis-2/3   flex flex-col justify-center items-center">
    //       <p className="text-3xl px-10 py-10 ">
    //         Cześć Jestem Kinga Wołoszka! Przyniosę Ci ulgę w bólu oraz napięciu
    //         stosując techniki masażu powięziowego i terapii manualnej, podpowiem
    //         Ci jak możesz pracować ze swoim ciałem poprzez dobrane ćwiczenia czy
    //         oddech dla poprawy Twojego zdrowia i samopoczucia.
    //       </p>
    //     </div>
    //   </div>
    //   <div className="flex h-[70vh] my-2 border-4 border-white">
    //     <div className=" basis-2/3   flex flex-col justify-center items-center">
    //       <p className="text-3xl px-10 py-10 ">
    //         Czekam na Ciebie z terapią manualną, masażem powięziowym, masażem
    //         tkanek głębokich, głęboko odprężającymi technikami masażu twarzy
    //         Kobido, masażu relaksacyjnego, które pozwolą Ci osiągnąć Stan
    //         Relaksu
    //       </p>
    //     </div>
    //     <div className="basis-1/3 mt-1">
    //       <BackImage />
    //     </div>
    //   </div>
    // </div>
  );
};

export default WelcomeAboutMe;
