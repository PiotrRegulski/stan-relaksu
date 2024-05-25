import { OfferItem } from "@/data/OfferItem";
import React from "react";
import Image from "next/image";
// Definicja typu dla pojedynczego elementu oferty
type OfferItemType = {
  slug: string;
  title: string;
  content: string;
  image: string;
  // Dodaj pozostałe pola zgodnie z definicją OfferItem
};

// Rozszerzenie interfejsu propsów o typy dla parametrów
interface OfferDetailsPageProps {
  params: {
    id: string;
    slug: string;
  };
}

const OfferDetailsPage: React.FC<OfferDetailsPageProps> = ({ params }) => {
  const offerSlug: string = params.slug;

  // Zastosowanie asercji typu, aby poinformować TypeScript o oczekiwanym typie zwracanym przez find
  const offerDetail: OfferItemType | undefined = OfferItem.find(
    (offerDetail) => offerDetail.slug === offerSlug
  );

  // Obsługa sytuacji, gdy oferta nie zostanie znaleziona
  if (!offerDetail) {
    return <div>Oferta nie została znaleziona.</div>;
  }

  return (
    <>
      <header
        id="offer-details"
        className="grid grid-cols-1 gap-2 place-items-center sm:h-32 bg-cover bg-center"
        style={{ backgroundImage: "url('/ofertabg.png')" }}
      >
        {/* Bezpieczne odwołanie do tytułu oferty */}
        <h1 className="px-4 py-3 md:text-4xl text-xl  text-center font-bold uppercase text-gray-600">
          {offerDetail.title}
        </h1>
      </header>
      <article className="h-screen">
        <div>
          <Image
            src={`/${offerDetail.image}`}
            alt={offerDetail.title}
            width={400}
            height={400}
            className="animate-fadeIn rounded border-4 border-white shadow-xl shadow-gray-400/75 transition-transform duration-200 ease-in-out hover:scale-[1.02]"
          />
        </div>
        <div>{offerDetail.content}</div>
      </article>
    </>
  );  
};

export default OfferDetailsPage;
