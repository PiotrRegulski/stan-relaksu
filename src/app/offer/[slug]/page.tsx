"use client";
import { OfferItem } from "@/data/OfferItem";
import React from "react";
import Image from "next/image";
import { lato} from "@/components/fonts";
import { useRouter } from "next/navigation";
import PageHeader from "@/components/homepage/PageHeader";

type AdvantageType = {
  title: string;
  description: string;
};
// Definicja typu dla pojedynczego elementu oferty
type OfferItemType = {
  id:string
  slug: string;
  title: string;
  contentFirst?: string;
  image: string;
  advantages:AdvantageType[];
  
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
    return (
      <div className="flex flex-col justify-center w-[100vw] h-96">
        <div className="w-full ">
          <p className="text-center">Oferta nie została znaleziona.</p>
        </div>
        <button
          onClick={router.back}
          className="   text-xl underline decoration-solid underline-offset-8 font-semibold  px-2 py-3  text-lime-400 hover:text-gray-400  text-center w-full"
        >
          Zobacz pozostałe oferty
        </button>
      </div>
    );
  }

  return (
    <>
      <PageHeader>{offerDetail.title}</PageHeader>

      <section
        id="offerDetail"
        className="grid grid-cols-1 lg:grid-cols-2 lg:gap-4  h-2/3 md:py-4 md:px-2  shadow-xl shadow-gray-400/75 md:mx-36 md:my-8"
      >
        <div className="md:px-12 md:py-12 px-2 ">
          <div className="lg:hidden "> <Image
            src={`/${offerDetail.image}`}
            alt={offerDetail.title}
            width={300}
            height={250}
            className=" mx-auto   z-0 animate-fadeIn rounded border-1 border-white shadow-xl shadow-gray-400/75 transition-transform duration-200 ease-in-out hover:scale-[1.02]"
          /></div>
        
          <p className={` ${lato.className} text-xl mx-4 my-4  indent-8 font-semibold`}>
            {offerDetail.contentFirst}
          </p>
          <ul>  
            {offerDetail.advantages?.map((advantage) => (
            <li key={advantage.title}>
                <p className="text-xl font-[lato]  text-justify my-3 mx-3 md:mx-4 md:my-4 indent-8">{advantage.description}</p>
            </li>
          ))}</ul>
         
        </div>
        <div className=" sm:grid sm:justify-items-center sm:content-center sm:mt-4  size-full h-full min-w-full ">
          <Image
            src={`/${offerDetail.image}`}
            alt={offerDetail.title}
            width={300}
            height={300}
            className=" hidden sm:block  z-0 animate-fadeIn rounded border-1 border-white shadow-xl shadow-gray-400/75 transition-transform duration-200 ease-in-out hover:scale-[1.02]"
          />
          <div className=" flex gap-2 z-10  py-3 overflow-auto ">
            <Image
              src={`/${offerDetail.image}`}
              alt={offerDetail.title}
              width={200}
              height={200}
              className="  animate-fadeIn rounded border-1 border-white shadow-xl shadow-gray-400/75 transition-transform duration-200 ease-in-out hover:scale-[1.02]"
            />
            <Image
              src={`/${offerDetail.image}`}
              alt={offerDetail.title}
              width={200}
              height={200}
              className="  animate-fadeIn rounded border-1 border-white shadow-xl shadow-gray-400/75 transition-transform duration-200 ease-in-out hover:scale-[1.02]"
            />
            <Image
              src={`/${offerDetail.image}`}
              alt={offerDetail.title}
              width={200}
              height={200}
              className="  animate-fadeIn rounded border-1 border-white shadow-xl shadow-gray-400/75 transition-transform duration-200 ease-in-out hover:scale-[1.01]"
            />
              <Image
              src={`/${offerDetail.image}`}
              alt={offerDetail.title}
              width={200}
              height={200}
              className="  animate-fadeIn rounded border-1 border-white shadow-xl shadow-gray-400/75 transition-transform duration-200 ease-in-out hover:scale-[1.01]"
            />
          </div>
          
        </div>
      </section>
      <div className="flex justify-center">
        <button
          onClick={()=>router.push("/offer#offer")}
          className=" flex text-xl underline decoration-solid underline-offset-8 font-semibold  text-center px-2 py-3 mx-3 my-4 text-black hover:text-gray-400 "
        >
          Zobacz pozostałe oferty
        </button>
      </div>
    </>
  );
};

export default OfferDetailsPage;
