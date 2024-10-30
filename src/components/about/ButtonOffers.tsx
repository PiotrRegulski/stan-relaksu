import React from "react";
import Link from "next/link";
import ButtonMain from "../layout/ButtonMain";
const ButtonOffers = () => {
  return (
    <div className=" flex justify-center items-center w-full my-2  ">
      <Link href="/offer">
        <ButtonMain> Zobacz pełną ofertę</ButtonMain>
      </Link>
    </div>
  );
};

export default ButtonOffers;
