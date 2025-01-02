import React from "react";

import OffersCardBody from "@/components/offers/OffersCardBody";
import OffersCardFace from "@/components/offers/OffersCardFace";
import ImageHeader from "@/components/layout/ImageHeader";
interface OfferProps {
  // Tutaj możesz dodać właściwości, jeśli są potrzebne
}
export const metadata = {
  title: "Stan Relaksu - Oferta",
  description:
    "Poznaj ofertę terapii manualnych i masażu. Terapia manualna, masaż powięziowy, masaż tkanek głębokich oraz głęboko odprężające techniki masażu twarzy Kobido i masażu relaksacyjnego. Zadbaj o swoje zdrowie, zwolnij i poczuj się lepiej - osiągnij Stan Relaksu.",
};
const OfferPage: React.FC<OfferProps> = () => {
  return (
    <div className="mt-[0rem] sm:mt-[0rem] lg:mt-[7rem] xl:mx-6 2xl:mx-4">
      <ImageHeader BgImage={'bg-my-bg-image'}>Oferta</ImageHeader>
      <OffersCardBody />
      <OffersCardFace />
    </div>
  );
};



export default OfferPage;
