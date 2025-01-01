"use client";

import React, { useRef } from "react";

const HomePageShort = () => {
  const ref = useRef(null);

  return (
    <div id="o-gabinecie" className=" flex w-full flex-col mt-[1rem]">
      <div
        className={` flex flex-col justify-center items-center  mx-6 md:mx-24 lg:mx-24 xl:mx-36 my-6 2xl:my-4 lg:my-10  rounded-lg animate-fadeIn `}
      >
        <h2 className=" text-center md:text-center font-medium px-2 text-lg  lg:text-xl xl:text-3xl  my-2 lg:my-3 lg:mx-24 xl:mx-36   2xl:mx-48  md:my-0 ">
          Terapeutyczne miejsce dla ciała stworzone z myślą o Tobie, osobie,
          która chce zadbać o swoje zdrowie, zwolnić i poczuć się lepiej.
        </h2>
      </div>
    </div>
  );
};

export default HomePageShort;
