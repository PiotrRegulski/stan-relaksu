import { OfferItem } from "@/data/OfferItem";
import React from "react";
import Image from "next/image";
import { lato } from "@/components/fonts";

import PageHeader from "@/components/homepage/PageHeader";
import BackLink from "@/components/layout/BackLink";

type AdvantageType = {
  title: string;
  description: string;
};
type PricesType = {
  id: string;
  priceName: string;
  price: string;
};
type ContraindicationsType = {
  id: string;
  contraindication: string;
};
type IndicationsType = {
  id: string;
  indication: string;
};
// Definicja typu dla pojedynczego elementu oferty
type OfferItemType = {
  id: string;
  slug: string;
  title: string;
  contentFirst?: string;
  image: string;
  prices: PricesType[];
  advantages: AdvantageType[];
  contraindications: ContraindicationsType[];
  indications: IndicationsType[];

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
        <BackLink>Zobacz inne oferty</BackLink>
      </div>
    );
  }

  return (
    <>
      <PageHeader id={"offerDetail"}>{offerDetail.title}</PageHeader>

      <section className="flex flex-cols lg:flex-row   lg:gap-4 h-2/3  shadow-md shadow-teal-400/75 md:mx-36 md:my-8" >
        <div className=" w-screen md:w-1/2">
          <p
            className={` ${lato.className} text-xl mx-4 my-4  indent-8 font-semibold`}
          >
            {offerDetail.contentFirst}
          </p>
          <ul>
            {offerDetail.advantages?.map((advantage) => (
              <li key={advantage.title}>
                <p className="text-xl font-[lato]  text-justify my-3 mx-3 md:mx-4 md:my-4 indent-8">
                  {advantage.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div className=" flex justify-center w-screen md:w-1/2 px-10 py-10 ">
          <Image
            src={`/${offerDetail.image}`}
            alt={offerDetail.title}
            width={500}
            height={500}
            className="   animate-fadeIn rounded border-1 border-white shadow-xl shadow-gray-400/75 transition-transform duration-200 ease-in-out  "
          />
        </div>
      </section>

      <section
        id="wskazania"
        className="grid grid-cols-1 lg:grid-cols-2 lg:gap-4  h-2/3 md:py-4 md:px-2  shadow-md shadow-teal-400/75 md:mx-36 md:my-8"
      >
        <div className="grid grid-cols-1 gap-4 place-items-center">
          <Image
            src={`/${offerDetail.image}`}
            alt={offerDetail.title}
            width={500}
            height={500}
            className=" shadow-md shadow-gray-400    animate-fadeIn rounded border-1 border-white  duration-200 ease-in-out hover:scale-[1.02] mt-2"
          />
        </div>
        <div className={`${lato.className}`}>
          <h3 className="text-2xl">Głowne wskazania:</h3>
          <ul className="list-disc text-xl py-8 ml-16">
            {offerDetail.indications?.map((indication) => (
              <li className="py-3" key={indication.id}>
                {indication.indication}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        id="przeciwskazania"
        className="grid grid-cols-1 lg:grid-cols-2 lg:gap-4  h-2/3 md:py-4 md:px-2  shadow-md shadow-teal-400/75 md:mx-36 md:my-8"
      >
        <div className={`${lato.className} mx-12 my-12`}>
          <h3 className="text-2xl">Przeciwskazania:</h3>
          <ul className="list-disc text-xl mx-12 mt-10 ml-12">
            {offerDetail.contraindications?.map((contraindication) => (
              <li className="py-3" key={contraindication.id}>
                {contraindication.contraindication}
              </li>
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-1 gap-4 place-items-center">
          <Image
            src={`/${offerDetail.image}`}
            alt={offerDetail.title}
            width={500}
            height={500}
            className="k shadow-md shadow-gray-400    animate-fadeIn rounded border-1 border-white  duration-200 ease-in-out hover:scale-[1.02] mt-2"
          />
        </div>
      </section>

      <section className=" flex justify-center shadow-xl shadow-gray-400/75  md:py-4 md:px-2 md:mx-36 md:my-8">
        <div className="w-2/3 ">
          <ul className="divide-y divide-blue-200 mx-3">
            <h3 className="flex justify-center text-3xl font-semibold">
              Cennik
            </h3>
            {offerDetail.prices?.map((price) => (
              <li key={price.id}>
                <div className=" flex-col mx-12 ">
                  <div className="flex justify-between">
                    <div className="text-xl font-semibold">
                      {price.priceName}
                    </div>
                    <div className="text-xl font-semibold">{price.price}</div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <BackLink>Zobacz pozostałe oferty</BackLink>
    </>
  );
};

export default OfferDetailsPage;
