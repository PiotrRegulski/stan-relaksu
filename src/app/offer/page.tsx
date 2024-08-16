import React from "react";

import OffersCardBody from "@/components/offers/OffersCardBody";
import OffersCardFace from "@/components/offers/OffersCardFace";
import OffersHeader from "@/components/offers/OffersHeader";
interface OfferProps {
  // Tutaj możesz dodać właściwości, jeśli są potrzebne
}

const OfferPage: React.FC<OfferProps> = () => {
  return (
    <>
      <OffersHeader/>
      <OffersCardBody />
      <OffersCardFace/>
    </>
  );
};

export default OfferPage;
