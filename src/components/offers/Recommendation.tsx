import React from 'react';
import { TbCircleNumber1 } from "react-icons/tb";
import { TbCircleNumber2} from "react-icons/tb";
import { TbCircleNumber3 } from "react-icons/tb";
const Recommendation = (props:any) => {
    return (
        <section className="mt-8 bg-triadgray ">
        <h3 className="text-black  text-2xl xl:text-4xl font-bold text-center py-10 ">
        <span className=''>{props.title}</span><br></br>umów się jeżeli:
        </h3>
        <div className="grid grid-rows-3  xl:h-48 xl:grid-cols-3   divide-gray-400 xl:px-36 text-lg md::text-2xl font-bold ">
          <div className="flex my-1 ">
            <div className='pr-2'><TbCircleNumber1 className='w-8 h-8 '/></div>
            <p className=" border-l-2 border-gray-400  text-center pl-4 pt-2 xl:pt-6 w-full h-[5em] ">{props.fRecommendation}</p>
          </div>
          <div className="flex my-1">
          <div className='pr-2 '><TbCircleNumber2 className='w-8 h-8'/></div>
            <p className="border-l-2 border-gray-400 text-center pl-4 pt-2 xl:pt-6 w-full h-[5em]">{props.sRecommendation}</p>
          </div>
          <div className="flex my-1">
          <div className='pr-2'><TbCircleNumber3 className='w-8 h-8'/></div>
            <p className="border-l-2 border-gray-400 text-center pl-4 pt-2 xl:pt-6 w-full h-[5em]">
              {props.tRecommendation}
            </p>
          </div>
        </div>
      </section>
    );
};

export default Recommendation;