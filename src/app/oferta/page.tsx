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
    "Sprawdź naszą ofertę i wybierz najlepsze rozwiązania dla siebie.  Czekam na Ciebie z terapiąterapią manualną, masażem powięziowym, masażem tkanek głębokich. Głęboko odprężającymi technikami masażu twarzy Kobido, masażu relaksacyjnego, które pozwolą zadbać o swoje zdrowie, zwolnić i poczuć się lepiej - osiągnąć Stan Relaksu.",
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
