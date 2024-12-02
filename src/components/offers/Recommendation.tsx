import React from "react";

import { Noto } from "../fonts";
import Image from "next/image";
const Recommendation = (props: any) => {
  return (
    <section className="py-6 bg-mainpeach my-6">
      <h3
        className={`${Noto.className} text-lg md:text-2xl xl:text-2xl  text-center  font-semibold `}
      >
        {props.title}
        <br></br>zarezerwuj wizytę, jeśli:
      </h3>
      <div className="flex flex-col sm:flex-row w-full justify-center items-center my-4 2xl:px-24 ">
        <div className="flex my-1 sm:w-1/3 ">
         
          <div className="flex flex-col justify-center items-center my-4 w-full ">
          <div className="relative w-20 h-20 my-2 mx-2 xl:w-30 xl:h-30">
             
             <Image
               src={"/obrazkiKontury/terapia-wisceralna-zeladek.png"}
               alt="rysunek żołądka"
               fill
               priority={true}
               className="object-contain  w-full h-full "
               sizes="(max-width: 600px) 100vw, 50vw"
             />
           </div>
            <div className="mx-2 md:h-[4rem]">
              {" "}
              <p className=" w-full  text-center font-semibold  text-base xl:text-xl 2xl:px-8  ">
                {props.fRecommendation}
              </p>
            </div>
          </div>
        </div>
        <div className="flex my-4 sm:w-1/3">
          
          <div className="flex flex-col justify-center items-center w-full  ">
            <div className="relative  w-20 h-20 xl:w-30 xl:h-30 my-2 mx-2">
             
              <Image
                src={"/obrazkiKontury/terapia-wisceralna-brzuch.png"}
                alt="rysunek żołądka"
               fill
                priority={true}
                className="object-contain  w-full h-full "
                sizes="(max-width: 600px) 100vw, 50vw"
              />
            </div>

            <div className="mx-2 md:h-[4rem]">
              {" "}
              <p className="w-full  text-center font-semibold  text-base xl:text-xl 2xl:px-8  ">
                {props.sRecommendation}
              </p>
            </div>
          </div>
        </div>
        <div className="flex my-4 sm:w-1/3 ">
         
          <div className="flex flex-col justify-center items-center w-full   ">
          <div className="relative w-20 h-20 xl:w-30 xl:h-30 my-2 mx-2">
             
             <Image
               src={"/obrazkiKontury/terapia-wisceralna-medytacja.png"}
               alt="rysunek żołądka"
               fill
               priority={true}
               className="object-contain  w-full h-full "
               sizes="(max-width: 600px) 100vw, 50vw"
             />
           </div>
            <div className="mx-2 md:h-[4rem]">
              <p className="w-full  text-center font-semibold  text-base xl:text-xl 2xl:px-8  ">
                {props.tRecommendation}
                
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recommendation;
