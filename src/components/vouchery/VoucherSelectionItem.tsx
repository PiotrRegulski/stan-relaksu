import React from "react";
import Image from "next/image";
const VoucherSelectionItem = (props:any) => {
  return (
    <div>
      <div className="relative w-96 h-96 border-2 border-black">
        <Image
          src={props.srcMedicalProcedure}
         fill
          className=" object-fill rounded-full shadow-gray-400 shadow-md bg-white "
          alt="masaz relaksacyjny"
          priority={true}
      
        />
         <div className="absolute bottom-10 left-0 w-full  bg-opacity-50 text-black text-center p-2 rounded-full">
          {props.caption}
        </div>
      </div>

    </div>
  );
};

export default VoucherSelectionItem;
