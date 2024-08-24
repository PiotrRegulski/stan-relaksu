import React from "react";

const DetailedAdressItem = (props: any) => {
  return (
    <div className="flex flex-row items-center mt-2 mx-auto">
      <div className="bg-white h-16 w-16 rounded-full flex items-center justify-center shrink-0 my-2">
        {props.ico}
      </div>

      <div className="flex flex-col px-3">
        <small className="block"> {props.location}</small>
        {props.children}
      </div>
    </div>
  );
};

export default DetailedAdressItem;
