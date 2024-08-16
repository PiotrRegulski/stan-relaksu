import { OfferItem } from "@/data/OfferItem";
import React from "react";
import Image from "next/image";
import { lato } from "@/components/fonts";

import PageHeader from "@/components/homepage/PageHeader";
import BackLink from "@/components/layout/BackLink";
import Recommendation from "@/components/offers/Recommendation";
import OfferProcedure from "@/components/offers/OfferProcedure";
import ButtonReservation from "@/components/about/ButtonReservation";

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
type ProceduresType = {
  title?: string;
  procedure?: string;
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
  procedures: ProceduresType[];
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
  const [firstAdventage, ...remainingAdvantages] =
    offerDetail?.advantages || [];
  const firstAdventagesDescription = firstAdventage?.description;
  

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
  
  const proceduresTable = offerDetail?.procedures;

  // const [
  //   { title: preparationTitle },
  //   { procedure: preparationProcedure },
  //   { title: techniquesTitle },
  //   { procedure: techniquesProcedure1 },
  //   { title: timeTitle },
  //   { procedure: timeProcedure3 },
  //   { title: effectsTitle },
  //   { procedure: effectsProcedure }
  // ]= proceduresTable;
  // const proceduresTable = [
  //   { title: "Przygotowanie", procedure: "Opis przygotowania" },
  //   { title: "Techniki", procedure: "Opis technik" },
  //   { title: "Czas", procedure: "Opis czasu" },
  //   { title: "Efekty", procedure: "Opis efektów" },
  // ];

  return (
    <>
      <PageHeader id={"offerDetail"}>{offerDetail.title}</PageHeader>

      <section
        id="main-adventages"
        className="flex flex-col min-h-max border-2 border-x-teal-400/75 bg-triadblue md:mx-36 md:my-4 mt-12"
      >
        <div className="w-full py-[3em] px-[1em]">
          <h1 className={`${lato.className} text-center text-xl font-bold`}>
            {firstAdventagesDescription}
          </h1>
        </div>
        <div className="flex flex-col xl:flex-row xl:mx-[10em]">
          <div className="basis 1 xl:basis-1/4 md:mt-4 ">
            <div className="relative h-[30rem] md:w-[30rem]  mx-auto  ">
              <Image
                src={`/${offerDetail.image}`}
                alt={offerDetail.title}
                fill
                className="object-contain"
                priority={true}
                sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>

          <div className="basis 1 xl:basis-3/4 ">
            <ul className={`${lato.className}   text-xl`}>
              {remainingAdvantagesDesription?.map((advantage, index,) => (
                <li key={index}>
                 
                  <p className="mx-[1em] my-[1em]">{advantage}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <ButtonReservation />

      <Recommendation
        title={offerDetail.title}
        fRecommendation={recommendation1}
        sRecommendation={recommendation2}
        tRecommendation={recommendation3}
      />
     
        <OfferProcedure
          src={`/${offerDetail.image}`}
          alt={offerDetail.title}
          procedures={proceduresTable}
        />
     

      <BackLink>Zobacz pozostałe oferty</BackLink>
    </>
  );
};

export default OfferDetailsPage;
