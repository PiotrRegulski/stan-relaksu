import React from "react";
import Link from "next/link";
import ButtonMain from "../layout/ButtonMain";
const ButtonOffers = () => {
  return (
    <div className="   ">
      <Link href="/oferta" aria-label="Link do oferty gabientu Stan Relaksu">
        <ButtonMain> Zobacz pełną ofertę</ButtonMain>
      </Link>
    </div>
  );
};

export default ButtonOffers;
