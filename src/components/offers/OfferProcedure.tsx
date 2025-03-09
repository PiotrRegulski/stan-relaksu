import React from "react";
import { lato, Noto } from "../fonts";
import Image from "next/image";
import ExpandableText from "./ExpandableText";
import ProcedureItem from "./ProcedureItem";

interface OfferProcedureProps {
  src: string;
  srcdetails: string;
  alt: string;
  procedures: {
    title?: string;
    procedure?: string;
    procedurefirst?: string;
    proceduresec?: string;
    procedurethi?: string;
  }[];
}

const OfferProcedure: React.FC<OfferProcedureProps> = ({
  src,
  srcdetails,
  alt,
  procedures,
}) => {
  return (
    <div
      id="main-adventages"
      className="flex flex-col justify-center w-full items-center  bg-gradient-to-r from-secondary to-white   "
    >
      <div className="w-full  px-[1em] 2xl:mb-12 my-4">
        <h2 className={`${Noto.className} text-center text-xl md:text-2xl font-bold`}>
          Jak przebiega zabieg?
        </h2>
      </div>

      <div className="flex flex-col-reverse justify-center items-center lg:w-3/4 mx-auto my-4 ">
        <div className="flex flex-row  gap-4  sm:justify-around w-full">
          <div className="  relative  mx-auto w-72 h-96 sm:w-full sm:h-72  md:flex items-center">
            <Image
              src={src}
              alt={alt}
              fill
              className="object-cover h-80 w-90 shadow-lg shadow-gray-400 rounded-lg"
              sizes="(max-width: 600px) 100vw,(max-width: 900px) 50vw, (max-width: 1200px) 50vw, 33vw"

            />
          </div>
          <div className=" hidden relative  mx-auto w-72 h-96 sm:w-full sm:h-72  sm:flex items-center">
            <Image
              src={srcdetails}
              alt={alt}
              fill
              className="object-cover h-80 w-90 shadow-lg shadow-gray-400 rounded-lg"
              sizes="(max-width: 600px) 100vw,(max-width: 900px) 50vw, (max-width: 1200px) 50vw, 33vw"

            />
          </div>
        </div>

        <div className=" flex flex-col w-full  ">
          <ul className={` ${lato.className} text-xl space-y-2 my-4  `}>
            {procedures.map((procedure, index) => (
              <ProcedureItem key={index} procedure={procedure} index={index} />
            ))}
          </ul>
          <div className=" flex  relative  mx-auto w-80 h-96  md:mx-6 my-2 md:my-6 sm:hidden items-center">
            <Image
              src={srcdetails}
              alt={alt}
              fill
              className="object-cover h-full w-full shadow-lg shadow-gray-400 rounded-lg"
              sizes="(max-width: 600px) 100vw,(max-width: 900px) 50vw, (max-width: 1200px) 50vw, 25vw"

            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferProcedure;
