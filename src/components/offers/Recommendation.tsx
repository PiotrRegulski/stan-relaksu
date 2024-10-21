import React from "react";
import { TbCircleNumber1 } from "react-icons/tb";
import { TbCircleNumber2 } from "react-icons/tb";
import { TbCircleNumber3 } from "react-icons/tb";
const Recommendation = (props: any) => {
  return (
    <section className="my-12 bg-triadgray font-[Cormorant-Garamond] ">
      <h3 className="text-black text-xl md:text-3xl xl:text-4xl  text-center py-10 font-[Cormorant-Garamond] ">
        <span className="">{props.title}</span>
        <br></br>zarezerwuj wizytę jeśli:
      </h3>
      <div className="grid grid-rows-3  xl:h-48 lg:grid-cols-3 lg:grid-rows-2  divide-gray-400 2xl:px-36 text-md  md:text-2xl  mx-2">
        <div className="flex my-1  ">
          <div className="pr-2">
            <TbCircleNumber1 className="w-8 h-8 " />
          </div>
          <div className="flex justify-center items-center w-full">
            <p className=" border-l-2 border-gray-400  text-center md:pl-4 pt-2 xl:pt-6 w-full h-[5em] ">
              {props.fRecommendation}
            </p>
          </div>
        </div>
        <div className="flex my-1">
          <div className="pr-2 ">
            <TbCircleNumber2 className="w-8 h-8" />
          </div>
          <div className="flex justify-center items-center w-full">
            <p className="border-l-2 border-gray-400 text-center md:pl-4 pt-2 xl:pt-6 w-full h-[5em]">
              {props.sRecommendation}
            </p>
          </div>
        </div>
        <div className="flex my-1">
          <div className="pr-2">
            <TbCircleNumber3 className="w-8 h-8" />
          </div>{" "}
          <div className="flex justify-center items-center w-full">
            {" "}
            <p className="border-l-2 border-gray-400 text-center md:pl-4 pt-2 xl:pt-6 w-full h-[5em]">
              {props.tRecommendation}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recommendation;
