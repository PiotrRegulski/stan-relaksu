import React from "react";
import { TbCircleNumber1 } from "react-icons/tb";
import { TbCircleNumber2 } from "react-icons/tb";
import { TbCircleNumber3 } from "react-icons/tb";
import { Noto } from "../fonts";
const Recommendation = (props: any) => {
  return (
    <section className="my-4 bg-mainthemelogo">
      <h3
        className={`${Noto.className} text-xl md:text-2xl xl:text-2xl  text-center py-10 text-triadbrown font-semibold `}
      >
        {props.title}
        <br></br>zarezerwuj wizytę jeśli:
      </h3>
      <div className="grid grid-rows-3  xl:h-48 lg:grid-cols-3 lg:grid-rows-2  divide-triadbrown 2xl:px-36 text-md  md:text-2xl  mx-2">
        <div className="flex my-1 ">
          <div className="pr-2 flex justify-center items-center ">
            <TbCircleNumber1 className="w-12 h-12 text-triadbrown " />
          </div>
          <div className="flex justify-center items-center  border-l-2 border-gray-400  h-[5rem] ">
            <div className="mx-2">
              {" "}
              <p className=" w-full  text-center font-semibold text-triadbrown text-lg mx-2 ">
                {props.fRecommendation}
              </p>
            </div>
          </div>
        </div>
        <div className="flex my-1">
          <div className="pr-2 flex justify-center items-center">
            <TbCircleNumber2 className="w-12 h-12 text-triadbrown" />
          </div>
          <div className="flex justify-center items-center  border-l-2 border-gray-400  h-[5rem]">
            <div className="mx-2">
              {" "}
              <p className="w-full  text-center font-semibold text-triadbrown text-lg mx-2 ">
                {props.sRecommendation}
              </p>
            </div>
          </div>
        </div>
        <div className="flex my-1">
          <div className="pr-2 flex justify-center items-center">
            <TbCircleNumber3 className="w-12 h-12 text-triadbrown" />
          </div>
          <div className="flex justify-center items-center  border-l-2 border-gray-400  h-[5rem]">
            <div className="mx-2">
              <p className="w-full  text-center font-semibold text-triadbrown text-lg px-2 ">
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
