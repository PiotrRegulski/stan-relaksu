import React from "react";
import Link from "next/link";
const ButtonOffers = () => {
  return (
    <div className=" flex justify-center items-center w-full my-2  ">
      <Link
        href="/offer"
      
        className="hover:shadow-xl shadow-lg shadow-gray-400/75 text-lg text-center lg:text-lg text-white   rounded  hover:border-white  bg-primary hover:bg-teal-400/75 px-6 py-2 font-bold   hover:text-gray-700 duration-300  focus:outline-none focus:shadow-outline hover:underline  "
      >
       Zobacz pełną ofertę
      </Link>
    </div>
  );
};

export default ButtonOffers;
