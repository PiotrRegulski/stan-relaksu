import React from "react";
import Link from "next/link";
const ButtonReservation = () => {
  return (
    <div className=" flex justify-center w-full my-2  ">
      <Link
        href="https://booksy.com/pl-pl/257898_stan-relaksu-holistyczny-gabinet-terapii-i-masazu_masaz_3_warszawa#ba_s=dl_1"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:shadow-xl shadow-lg shadow-gray-400/75 text-lg text-center lg:text-lg text-white   rounded  hover:border-white  bg-primary hover:bg-teal-400/75 px-6 py-2 font-bold   hover:text-gray-700 duration-300  focus:outline-none focus:shadow-outline hover:underline "
      >
        Zarezerwuj Wizytę
      </Link>
    </div>
  );
};

export default ButtonReservation;
