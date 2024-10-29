import React from "react";

const DetailedAdressItem = (props: any) => {
  return (
    <div className="flex flex-col items-center mt-2 mx-auto  w-1/3">
      <div className="bg-white h-16 w-16 rounded-full flex items-center justify-center shrink-0 my-2 border-2 border-primary text-primary">
        {props.ico}
      </div>

      <div className="flex flex-col px-3 w-full justify-center items-center text-base text-primary">
        <small className="block"> {props.location}</small>
        {props.children}
      </div>
    </div>
  );
};

export default DetailedAdressItem;
