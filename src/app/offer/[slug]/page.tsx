import { OfferItem } from "@/data/OfferItem";
import React from "react";
import Image from "next/image";
import { lato } from "@/components/fonts";

import PageHeader from "@/components/homepage/PageHeader";
import BackLink from "@/components/layout/BackLink";
import Recommendation from "@/components/offers/Recommendation";
import OfferProcedure from "@/components/offers/OfferProcedure";
import ButtonReservation from "@/components/about/ButtonReservation";
import HighlightedParagraph from "@/components/layout/HighlightedParagraph";

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
    descriptionTable?.map(
      (item: { title?: string; description?: string }, index: number) => {
        if (item.title) return item.title;
        if (item.description) return item.description;
      }
    ) as [string, string, string, string, string, string];
  const wordsToHighlight = [
    "kobido",
    "kinesiotapingiem",
    "kinesiotaping ",
    "estetycznym",
    "estetyczny",
    "powięziowy",
    "stanu",
    "relaksu",
    "masaż",
    "igłoterapia",
    "estetyczna",
    "odmłodzenia",
    "tkanek",
    "głębokich",
    "złagodzenie",
    "rozluźnianie"
  ];
  return (
    <>
      <PageHeader id={"offerDetail"}>{offerDetail.title}</PageHeader>

      <section
        id="main-adventages"
        className="flex flex-col min-h-max   2xl:mx-36 my-4 md:my-4 md:mt-12 animate-fadeIn  transition-transform duration-200 ease-in-out"
      >
        <div className="w-full py-[3rem] px-[2rem] shadow-md shadow-gray-400 bg-white ">
          <h1 className={`${lato.className} text-center text-xl font-bold`}>
            {firstAdventagesDescription}
          </h1>
        </div>

        <div className="flex flex-col ">
          <div className="flex flex-col-reverse lg:flex-row  bg-white sm:my-4 shadow-lg shadow-gray-400 sm:mx-6 md:mx:2 2xl:mx-24  rounded-lg">
            <div className="flex flex-col lg:w-2/3 my-6 px-4 ">
              <h3 className="font-bold text-2xl py-2 2xl:mb-4 w-full">{title1}</h3>

              <HighlightedParagraph
                className="text-xl xl:ml-4 pl-2"
                text={description1}
                wordsToHighlight={wordsToHighlight}
              />
            </div>

            <div className="flex justify-center w-full lg:w-1/2 items-center  ">
              <div className="relative h-[20rem] w-full sm:h-[22rem] sm:w-[22rem] md:h-[18rem] md:w-[18rem] lg:w-[20rem] lg:h-[20rem] md:my-3">
                <Image
                  src={`/${offerDetail.image}`}
                  alt={offerDetail.title}
                  fill
                  className="object-fill sm:object-fill md:object-fill sm:rounded-full  sm:px-2 md:px-0 "
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row-reverse 2xl:flex-row   bg-primary  md:my-4 ">
            <div className=" ">
              <div className="relative h-[16rem] md:h-[28rem] sm:w-auto md:min-w-[21rem] 2xl:h-[30rem] 2xl:w-[30rem]  mx-auto my-2 md:my-2 md:mx-2  ">
                <Image
                  src={`/${offerDetail.imagedetailfo}`}
                  alt={offerDetail.title}
                  fill
                  className="object-contain md:object-contain  px-2 rounded-lg "
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
            <div className="flex flex-col w-full justify-center items-center my-4">
              <div className="flex flex-col px-4 md:px-8 text-amber-950 ">
                <h3 className="font-bold text-2xl py-2 w-full 2xl:mb-4 ">
                  {title2}
                </h3>
                <HighlightedParagraph
                  className="text-xl py-2 pl-2 mx-auto"
                  text={description2}
                  wordsToHighlight={wordsToHighlight}
                />
              </div>
            </div>
          </div>
          
          <div className="flex flex-col lg:flex-row  bg-white sm:my-4 shadow-lg shadow-gray-400 sm:mx-6 md:mx:2 2xl:mx-24  rounded-lg">
            <div className="flex flex-col lg:w-2/3 my-6 px-4 2xl:my-24 ">
              <h3 className="font-bold text-2xl py-2 w-full ">{title3}</h3>

              <HighlightedParagraph
                className="text-xl xl:ml-4 pl-2"
                text={description3}
                wordsToHighlight={wordsToHighlight}
              />
            </div>

            <div className="flex justify-center w-full lg:w-1/2 items-center  ">
              <div className="relative h-[20rem] w-full sm:h-[22rem] sm:w-[22rem] md:h-[20rem] md:w-[30rem] lg:w-[20rem] lg:h-[20rem] md:my-3">
                <Image
                  src={`/${offerDetail.imagedetailf}`}
                  alt={offerDetail.title}
                  fill
                  className="object-fill sm:object-fill md:object-cover  sm:px-2 md:px-0 "
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
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
