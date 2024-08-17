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
  title?: string;
  description?: string;
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
  imagedetailf?: string;
  imagedetails?: string;
  imagedetailt?: string;
  imagedetailfo?: string;
  prices: PricesType[];
  advantages?: AdvantageType[];
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
  const firstAdventagesDescription = offerDetail.contentFirst;

  //
  const recommendationsTable = offerDetail?.recommendations;
  const recommendationsContent = recommendationsTable.map((rec, id) => {
    return { [`recommendation${id + 1}`]: rec.recommendation };
  });
  const { recommendation1, recommendation2, recommendation3 } = Object.assign(
    {},
    ...recommendationsContent
  );

  const proceduresTable = offerDetail?.procedures;
  const descriptionTable = offerDetail?.advantages;

  const [title1, description1, title2, description2, title3, description3] = 
  descriptionTable?.map((item: { title?: string; description?: string }, index: number) => {
    if (item.title) return item.title;
    if (item.description) return item.description;
  }) as [string, string, string, string, string, string];

  return (
    <>
      <PageHeader id={"offerDetail"}>{offerDetail.title}</PageHeader>

      <section
        id="main-adventages"
        className="flex flex-col min-h-max   md:mx-36 md:my-4 md:mt-12 animate-fadeIn  transition-transform duration-200 ease-in-out"
      >
        <div className="w-full py-[3rem] px-[2rem] shadow-md shadow-gray-400 ">
          <h1 className={`${lato.className} text-center text-xl font-bold`}>
            {firstAdventagesDescription}
          </h1>
        </div>

        <div className="flex flex-col ">
          <div className="flex flex-col-reverse md:flex-row  bg-triadblue md:my-4 shadow-lg shadow-gray-400 md:mx-24  rounded-lg">
            <div className="flex flex-col md:w-2/3 my-12 px-4 text-amber-950">
              <h3 className="font-bold text-2xl py-2 w-full">{title1}</h3>
              <p className="text-lg">{description1}</p>
            </div>

            <div className=" ">
              <div className="relative h-[18rem] md:h-[20rem] md:w-[20rem]  mx-auto my-2  ">
                <Image
                  src={`/${offerDetail.image}`}
                  alt={offerDetail.title}
                  fill
                  className="object-fill rounded-full  border-4"
                  
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row shadow-lg  bg-primary shadow-gray-400 md:my-4">
            <div className=" ">
              <div className="relative h-[20rem]  md:min-h-[22rem] md:min-w-[28rem]  mx-auto my-4 md:my-2 md:mx-2  ">
                <Image
                  src={`/${offerDetail.imagedetailfo}`}
                  alt={offerDetail.title}
                  fill
                  className="object-contain shadow-lg md:shadow-gray-400 px-2 "
                 
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
            <div className="flex flex-col w-full justify-center items-center my-4">
              <div className="flex flex-col px-4 md:px-8 text-amber-950 ">
                <h3 className="font-bold text-2xl py-2 w-full">{title2}</h3>
                <p className="text-xl py-2 mx-auto">{description2}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center mx-auto md:mx-24 shadow-lg bg-triadblue shadow-gray-400 my-4 rounded-lg md:h-96">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 h-64 md:h-72 ">
                <div className="relative h-full w-full  mx-auto md:mx-2 my-2 ">
                  <Image
                    src={`/${offerDetail.imagedetailf}`}
                    alt={offerDetail.title}
                    fill
                    className="object-contain "
                  
                    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center items-center text-amber-950 my-8 md:mx-4">
                <div className=""><h3 className="font-bold text-xl px-2 py-2 w-full">{title3}</h3>
                <p className="text-lg text-center py-2 px-2">{description3}</p></div>
                

              </div>
             
            </div>
            
          </div>

          {/* <div className="  md:mt-4 ">
            <div className="relative h-[20rem] md:w-[20rem]  mx-auto mb-12 ">
              <Image
                src={`/${offerDetail.imagedetailf}`}
                alt={offerDetail.title}
                fill
                className="object-contain"
                priority={true}
                sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="relative h-[20rem] md:w-[30rem]  mx-auto  ">
              <Image
                src={`/${offerDetail.image}`}
                alt={offerDetail.title}
                fill
                className="object-contain"
                priority={true}
                sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div> */}
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
        src={`/${offerDetail.imagedetailt}`}
        srcdetails={`/${offerDetail.imagedetails}`}
        alt={offerDetail.title}
        procedures={proceduresTable}
      />

      <BackLink>Zobacz pozostałe oferty</BackLink>
    </>
  );
};

export default OfferDetailsPage;
