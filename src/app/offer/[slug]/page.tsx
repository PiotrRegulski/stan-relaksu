"use client";
import { OfferItem } from "@/data/OfferItem";
import React from "react";
import Image from "next/image";
import CardArticle from "@/components/layout/CardArticle";
import { useRouter } from "next/navigation";
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
  //navigation programatically
  const router = useRouter();

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
        className="grid grid-cols-1 gap-2 place-items-center lg:h-32 bg-cover bg-center"
        style={{ backgroundImage: "url('/ofertabg.png')" }}
      >
        {/* Bezpieczne odwołanie do tytułu oferty */}
        <h1 className="px-4 py-3 md:text-4xl text-xl  text-center font-bold uppercase text-gray-600">
          {offerDetail.title}
        </h1>
      </header>
      <article className="grid grid-cols-1 lg:grid-cols-2 lg:gap-4  h-2/3 py-4 px-2   ">
        <div className=" sm:grid sm:justify-items-center sm:content-center sm:mt-4  ">
          <Image
            src={`/${offerDetail.image}`}
            alt={offerDetail.title}
            width={400}
            height={400}
            className="  z-0 animate-fadeIn rounded border-4 border-white shadow-xl shadow-gray-400/75 transition-transform duration-200 ease-in-out hover:scale-[1.02]"
          />
          <div className=" flex gap-2 z-10  py-3 overflow-auto ">
            {" "}
            <Image
              src={`/${offerDetail.image}`}
              alt={offerDetail.title}
              width={200}
              height={200}
              className="  animate-fadeIn rounded border-4 border-white shadow-xl shadow-gray-400/75 transition-transform duration-200 ease-in-out hover:scale-[1.02]"
            />
            <Image
              src={`/${offerDetail.image}`}
              alt={offerDetail.title}
              width={200}
              height={200}
              className="  animate-fadeIn rounded border-4 border-white shadow-xl shadow-gray-400/75 transition-transform duration-200 ease-in-out hover:scale-[1.02]"
            />
            <Image
              src={`/${offerDetail.image}`}
              alt={offerDetail.title}
              width={200}
              height={200}
              className="  animate-fadeIn rounded border-4 border-white shadow-xl shadow-gray-400/75 transition-transform duration-200 ease-in-out hover:scale-[1.02]"
            />
          </div>
        </div>
        <CardArticle>{offerDetail.content}</CardArticle>
      </article>
      <div className="flex justify-center">
        <button
          onClick={router.back}
          className=" flex text-xl underline decoration-solid underline-offset-8 font-semibold  text-center px-2 py-3 mx-3 my-4 text-black hover:text-gray-400 "
        >
          Zobacz pozostałe oferty
        </button>
      </div>
    </>
  );
};

export default OfferDetailsPage;
