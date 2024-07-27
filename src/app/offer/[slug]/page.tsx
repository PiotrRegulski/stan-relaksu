import { OfferItem } from "@/data/OfferItem";
import React from "react";
import Image from "next/image";
import { lato } from "@/components/fonts";

import PageHeader from "@/components/homepage/PageHeader";
import BackLink from "@/components/layout/BackLink";
import Recommendation from "@/components/offers/Recommendation";

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
type RecommendationsType = {
  id: string;
  recommendation: string;
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
  recommendations: RecommendationsType[];
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

  const offerDetail: OfferItemType | undefined = OfferItem.find(
    (offerDetail) => offerDetail.slug === offerSlug
  );
  
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
//
  const firstAdventage = offerDetail?.advantages[0];
  const firstAdventagesDescription = firstAdventage?.description;
  const remainingAdvantages = offerDetail?.advantages.slice(1);


//
  const recommendationsTable = offerDetail?.recommendations;
  const recommendationsContent = recommendationsTable.map((rec, id) => {
    return { [`recommendation${id + 1}`]: rec.recommendation }; 
  });
  const { recommendation1, recommendation2, recommendation3 } = Object.assign(
    {},
    ...recommendationsContent
  );
  const remainingAdvantagesDesription = remainingAdvantages?.map(
    (adventage) => adventage.description
  );
  //

  return (
    <>
      <PageHeader id={"offerDetail"}>{offerDetail.title}</PageHeader>

      <section
        id="main-adventages"
        className="flex flex-col min-h-max border-2 border-x-teal-400/75 md:mx-36 md:my-4 mt-12"
      >
        <div className="w-full py-[3em] px-[1em]">
          <h1 className={`${lato.className} text-center text-xl font-bold`}>
            {firstAdventagesDescription}
          </h1>
        </div>
        <div className="flex flex-col xl:flex-row xl:mx-[10em]">
          <div className="basis 1 xl:basis-1/4  ">
            <div className="relative h-[20em] w-[20em]  mx-auto  ">
              <Image
                src={`/${offerDetail.image}`}
                alt={offerDetail.title}
                fill
                className="object-contain"
                priority={true}
              />
            </div>
          </div>

          <div className="basis 1 xl:basis-3/4 ">
            <ul className={`${lato.className}   text-xl`}>
              {remainingAdvantagesDesription?.map((advantage, index) => (
                <li key={index}>
                  <p className="mx-[1em] my-[1em]">{advantage}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Recommendation
        title={offerDetail.title}
        fRecommendation={recommendation1}
        sRecommendation={recommendation2}
        tRecommendation={recommendation3}
      />

      <BackLink>Zobacz pozostałe oferty</BackLink>
    </>
  );
};

export default OfferDetailsPage;
