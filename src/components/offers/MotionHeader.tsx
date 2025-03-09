"use client";
import React from "react";
import { Noto } from "@/components/fonts";
import NewCarousel from "../carousel/NewCarousel";

interface MotionHeaderProps {
  title?: string;
  description?: string;
}

const MotionHeader: React.FC<MotionHeaderProps> = ({ title, description }) => {
  return (
    <div className="bg-gradient-to-tl from-white to-white md:h-[21rem] flex w-full justify-center items-center transition-transform transform-gpu duration-300 ease-in-out">
      <div className="relative w-full md:w-full xl:w-full 2xl:w-[90%] bg-mainpeach sm:h-[14rem] md:h-[16rem] 2xl:h-[18rem] flex justify-center items-center text-black md:border-2 md:border-l-0 md:rounded-r-full py-4 md:py-2 ">
        <div className="flex flex-col justify-center items-center sm:h-[97%] border-y-2 sm:w-full md:border-t-2 md:border-b-2 md:border-r-2 md:border-l-0 md:rounded-r-full text-xl py-4 md:py-2 md:mr-4 md:pr-9 border-triadbrown bg-mainpeach shadow-lg shadow-white">
          <div className="lg:px-10 xl:w-3/4 md:my-8 w-full px-2" id="offerDetail">
            <h1 className={`${Noto.className} font-semibold text-center text-2xl my-2 md:my-4`}>
              {title}
            </h1>
            <div className="flex w-full justify-end items-end">
              <p className="font-medium text-base md:text-lg 2xl:text-xl text-center text-balance px-2">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MotionHeader;
