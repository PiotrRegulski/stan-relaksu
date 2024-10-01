import React from "react";

const CommentsItem = (props: any) => {
  return (
    <div className={props.className}>
      <div className=" mx-auto lg:mx-24 xl:mx-12 2xl:mx-48 ">
        <p className="text-center text-sm md:text-lg italic px-3 lg:px-24 xl:px-72 2xl:px-[25rem] py-2 sm:px-24  ">{props.comment}</p>
        <p className="text-center font-bold "> ~ {props.author}</p>
      </div>
      <div className="flex lg:justify-end w-full px-2 lg:px-72 mt-8">
        <p className=" ">
          Usługa: 
          <span className="text-sm "> {props.service}</span>
        </p>
      </div>
      <div className="flex lg:justify-end w-full px-2  lg:px-72 mt-1">
        <p className="text-sm">
          Źródło: 
          <span className=""> {props.source}</span>
        </p>
      </div>
    </div>
  );
};

export default CommentsItem;
