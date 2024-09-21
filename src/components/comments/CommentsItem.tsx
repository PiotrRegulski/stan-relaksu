import React from "react";

const CommentsItem = (props: any) => {
  return (
    <div className={props.className}>
      <div className="mx-48">
        <p className="text-center text-lg italic px-16 py-2">{props.comment}</p>
        <p className="text-center font-bold"> ~ {props.author}</p>
      </div>
      <div className="flex justify-end w-full  px-72 mt-8">
        <p className="font-semibold">
          Usługa: 
          <span className=""> {props.service}</span>
        </p>
      </div>
      <div className="flex justify-end w-full  px-72 mt-1">
        <p className="font-semibold">
          Źródło: 
          <span className=""> {props.source}</span>
        </p>
      </div>
    </div>
  );
};

export default CommentsItem;
