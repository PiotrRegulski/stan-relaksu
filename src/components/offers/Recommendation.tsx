import React from "react";
import { TbCircleNumber1 } from "react-icons/tb";
import { TbCircleNumber2 } from "react-icons/tb";
import { TbCircleNumber3 } from "react-icons/tb";
import { Noto } from "../fonts";
import Image from "next/image";
const Recommendation = (props: any) => {
  return (
    <section className="py-6 bg-mainpeach">
      <h3
        className={`${Noto.className} text-xl md:text-2xl xl:text-2xl  text-center  font-semibold `}
      >
        {props.title}
        <br></br>zarezerwuj wizytę jeśli:
      </h3>
      <div className="flex flex-col sm:flex-row w-full justify-center items-center my-12  ">
        <div className="flex my-1 sm:w-1/3 ">
         
          <div className="flex flex-col justify-center items-center my-4 w-full ">
          <div className="relative w-40 h-40">
             
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
              <p className=" w-full  text-center font-semibold  text-lg mx-2  ">
                {props.fRecommendation}
              </p>
            </div>
          </div>
        </div>
        <div className="flex my-4 sm:w-1/3">
          
          <div className="flex flex-col justify-center items-center w-full  ">
            <div className="relative  w-40 h-40">
             
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
              <p className="w-full  text-center font-semibold  text-lg mx-2 ">
                {props.sRecommendation}
              </p>
            </div>
          </div>
        </div>
        <div className="flex my-4 sm:w-1/3 ">
         
          <div className="flex flex-col justify-center items-center w-full   ">
          <div className="relative w-40 h-40">
             
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
              <p className="w-full  text-center font-semibold  text-lg px-2 ">
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
