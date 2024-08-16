import React from "react";
import { lato } from "../fonts";
import Image from "next/image";

interface OfferProcedureProps {
  src: string;
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
  alt,
  procedures,
}) => {
  return (
    <div
      id="main-adventages"
      className="flex flex-col min-h-max border-2 shadow-gray-400 bg-triadblue md:mx-36 md:my-4 mt-12"
    >
      <div className="w-full py-[3em] px-[1em]">
        <h1 className={` text-center text-4xl font-bold`}>
          Jak przebiega zabieg?
        </h1>
      </div>

      <div className="flex justify-center items-stretch mx-auto xl:mx-36 my-12">
        <div className=" hidden relative  mx-auto w-48  xl:mx-6 xl:my-6 md:flex items-center">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover h-full w-full"
            priority={true}
            sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="flex-1 ">
          <ul className={` ${lato.className} text-xl space-y-8 `}>
            {procedures.map((procedure, index) => (
              <li key={index}>
                <p className="font-bold px-2">{procedure.title}</p>
                <p className="px-3">{procedure.procedure}</p>
                <p className="px-3 ">{procedure.procedurefirst}</p>
                <p className="px-3 my-12">{procedure.proceduresec}</p>
                <p className="px-3">{procedure.procedurethi}</p>
              </li>
            ))}
            {/* <li>
              <p className="font-bold">{props.preparationTitle}</p>
              <p>
              {props.preparationProcedure}
              </p>
            </li>

            <li>
              <p className="font-bold">{props.techniquesTitle}</p>
              <p>
              {props.techniquesProcedure}
              </p>
            </li>
            <li>
              <p className="font-bold">{props.timeTitle}</p>
              <p>
               {props.timeProcedure}
              </p>
            </li>
            <li>
              <p className="font-bold">{props.effectsTitle}</p>
              <p>
               {props.effectsProcedure}
              </p>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OfferProcedure;
