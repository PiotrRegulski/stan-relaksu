import React from "react";
import Link from "next/link";
import ButtonMain from "../layout/ButtonMain";
const ButtonReservation = () => {
  return (
    <div className=" flex justify-center w-full my-2  ">
      <Link
        href="https://booksy.com/pl-pl/257898_stan-relaksu-holistyczny-gabinet-terapii-i-masazu_masaz_3_warszawa#ba_s=dl_1"
        target="_blank"
        rel="noopener noreferrer">
        <ButtonMain>Zarezerwuj Wizytę</ButtonMain>
      </Link>
    </div>
  );
};

export default ButtonReservation;
