import React from "react";

import OffersCard from "@/components/offers/OffersCard";
interface OfferProps {
  // Tutaj możesz dodać właściwości, jeśli są potrzebne
}

const OfferPage: React.FC<OfferProps> = () => {
  return (
    <>
      
      <OffersCard/>
    </>
  );
};

export default OfferPage;
