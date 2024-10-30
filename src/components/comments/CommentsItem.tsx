import React from "react";

const CommentsItem = (props: any) => {
  return (
    <div className={props.className}>
      <div className=" flex flex-col w-full justify-center items-center ">
        <p className="text-center text-sm md:text-lg italic px-3 lg:px-24 xl:px-72 2xl:px-[25rem] py-2 sm:px-24  ">{props.comment}</p>
        <p className="text-center font-bold "> ~ {props.author}</p>
      </div>
      <div className="flex lg:justify-end w-full px-2 lg:px-72 mt-8">
        <p className="text-base ">
          Usługa: {props.service}
        </p>
      </div>
      <div className="flex lg:justify-end w-full px-2  lg:px-72 mt-1">
        <p className="text-base">
          Źródło: {props.source}
        </p>
      </div>
    </div>
  );
};

export default CommentsItem;
