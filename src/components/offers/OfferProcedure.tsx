import React from "react";
import { lato } from "../fonts";
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
      className="flex flex-col min-h-max border-2 shadow-gray-400 bg-white xl:mx-36 md:my-4 mt-12"
    >
      <div className="w-full py-[3em] px-[1em]">
        <h1 className={` text-center text-xl md:text-4xl font-bold`}>
          Jak przebiega zabieg?
        </h1>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-stretch mx-auto xl:mx-36 my-12">
        <div className="flex flex-row md:flex-col   lg:justify-between ">
          <div className="  relative  mx-auto w-80 h-96  md:mx-6 my-2 md:my-6 md:flex items-center">
            <Image
              src={src}
              alt={alt}
              fill
              className="object-cover h-80 w-90 shadow-lg shadow-gray-400 rounded-lg"
              sizes="(max-width: 600px) 100vw,(max-width: 900px) 50vw, (max-width: 1200px) 50vw, 33vw"

            />
          </div>
          <div className=" hidden relative  mx-auto w-80 h-96  md:mx-6 md:my-6 md:flex items-center">
            <Image
              src={srcdetails}
              alt={alt}
              fill
              className="object-cover h-80 w-90 shadow-lg shadow-gray-400 rounded-lg"
              sizes="(max-width: 600px) 100vw,(max-width: 900px) 50vw, (max-width: 1200px) 50vw, 33vw"

            />
          </div>
        </div>

        <div className=" flex flex-col  justify-center items-center">
          <ul className={` ${lato.className} text-xl space-y-8   `}>
            {procedures.map((procedure, index) => (
              <ProcedureItem key={index} procedure={procedure} index={index} />
            ))}
          </ul>
          <div className=" flex  relative  mx-auto w-80 h-96  md:mx-6 my-2 md:my-6 md:hidden items-center">
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
