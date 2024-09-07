import React from "react";

import OffersCardBody from "@/components/offers/OffersCardBody";
import OffersCardFace from "@/components/offers/OffersCardFace";
import OffersHeader from "@/components/offers/OffersHeader";
import ButtonReservation from "@/components/about/ButtonReservation";
interface OfferProps {
  // Tutaj możesz dodać właściwości, jeśli są potrzebne
}
export const metadata = {
  title: "Stan Relaksu - Oferta",
  description:
    "Sprawdź naszą ofertę i wybierz najlepsze rozwiązania dla siebie. Zarezerwuj wizytę już dziś!",
};
const OfferPage: React.FC<OfferProps> = () => {
  return (
    <>
      <OffersHeader/>
      <OffersCardBody />
      <OffersCardFace/>
      <div className="mb-6" ><ButtonReservation/></div>
      
    </>
  );
};

export default OfferPage;
