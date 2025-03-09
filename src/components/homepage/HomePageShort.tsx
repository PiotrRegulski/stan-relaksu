

import React from "react";
import { IoMdQuote } from "react-icons/io";
const HomePageShort = () => {
  

  return (
    <div id="o-gabinecie" className=" container mx-auto flex w-full flex-col mt-[1rem] bg-gradient-to-r from-secondary from-10% via-white via-30% to-secondary to-90% h-[20rem] lg:h-[20rem] lg:my-20 rounded-2xl shadow-lg">
      <div
        className={` animate-fadeIn flex flex-col justify-center items-center w-full h-full    `}
      >
        <p className="text-5xl"><IoMdQuote /></p>
        <h2 className=" sm:w-2/3 xl:w-1/2 text-center md:text-center font-light  px-2 text-lg  lg:text-xl xl:text-4xl  my-2 lg:my-3  text-black ">
          Terapeutyczne miejsce dla ciała stworzone z myślą o Tobie, osobie,
          która chce zadbać o swoje zdrowie, zwolnić i poczuć się lepiej.
        </h2>
      </div>
    </div>
  );
};

export default HomePageShort;
