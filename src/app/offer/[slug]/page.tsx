import { OfferItem } from "@/data/OfferItem";
import React from "react";
import Image from "next/image";

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
  procedurefirst?:string;
  proceduresec?:string;
  procedurethi?:string;

};
// Definicja typu dla pojedynczego elementu oferty
type OfferItemType = {
  id: string;
  slug: string;
  title: string;
  contentFirst?: string;
  imageHeader?: string;
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

  const proceduresTable = offerDetail?.procedures ||[];
  
  // Sprawdzamy, czy wszystkie tytuły i procedury są poprawne (niepuste i nie undefined).
  const containsOnlyNonEmptyStrings = proceduresTable.every(procedure => {
    const hasValidTitle = procedure.title !== undefined && procedure.title.trim() !== '';
    const hasValidProcedure = procedure.procedure !== undefined && procedure.procedure.trim() !== '';
    const hasValidProcedureStage= procedure.procedurefirst !== undefined && procedure.procedurefirst.trim() !=='';
    
    
    return hasValidTitle || hasValidProcedure|| hasValidProcedureStage;
  });
  
  
  

   
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
    "masażu",
    "igłoterapia",
    "estetyczna",
    "odmłodzenia",
    "tkanek",
    "głębokich",
    "złagodzenie",
    "rozluźnianie",
  ];
  return (
    <div className=" mt-[7rem]">
      <div id={"offerDetail"} className="w-full">
        <div className="relative  h-[40rem]">
          <Image
            src={`/${offerDetail.imageHeader}`}
            alt={offerDetail.title}
            fill
            priority={true}
            className="object-cover  w-full h-full"
            sizes="(max-width: 600px) 100vw, 50vw"
          />
          <div className="absolute bottom-0 lg:bottom-24 lg:left-14 right-0 bg-black bg-opacity-40 text-white p-2 w-full lg:w-1/2  rounded">
            <h1 className={" text-white xl:text-2xl font-serif tracking-wide"}>
             <span className="text-xl lg:text-3xl ">{offerDetail.title}<br></br></span> <br></br>
              {firstAdventagesDescription}
            </h1>
          </div>
        </div>
      </div>

      {description1! && title1! && (
        <section
          id="main-adventages"
          className="flex flex-col min-h-max    my-4 md:my-4 md:mt-12 animate-fadeIn  transition-transform duration-200 ease-in-out mb-6"
        >
          <div className="flex flex-col ">
            <div
              className={`flex flex-col-reverse lg:flex-row bg-white sm:my-4  sm:mx-6 md:mx:2 2xl:mx-48 rounded-lg  border-secondary`}
            >
              <div className="flex flex-col lg:w-2/3 my-2 px-4 justify-center items-center ">
                <h3 className="font-bold  text-2xl py-2  w-full">{title1}</h3>

                <HighlightedParagraph
                  className="text-xl xl:ml-4 pl-2"
                  text={description1}
                  wordsToHighlight={wordsToHighlight}
                />
              </div>

              <div className="flex justify-center w-full lg:w-1/2 items-center  ">
                <div className="relative h-[20rem] w-full sm:h-[22rem] sm:w-[22rem] md:h-[18rem] md:w-[18rem] lg:w-[25rem] lg:h-[25rem] md:my-3">
                  <Image
                    src={`/${offerDetail.image}`}
                    alt={offerDetail.title}
                    fill
                    className="object-cover sm:object-cover md:object-fill sm:rounded-full  sm:px-2 md:px-0 "
                    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row-reverse 2xl:flex-row   bg-secondary  md:my-4 ">
              <div className="flex flex-col xl:flex-row xl:mx-48 ">
                <div className="relative h-[16rem] md:h-[28rem] w-full md:min-w-[21rem] 2xl:h-[30rem] 2xl:w-[45rem]  mx-auto my-2 md:my-2 md:mx-2   ">
                  <Image
                    src={`/${offerDetail.imagedetailfo}`}
                    alt={offerDetail.title}
                    fill
                    className="object-contain md:object-contain  px-2 rounded-lg "
                    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="flex flex-col w-full justify-center items-center  my-4">
                  <div className="flex flex-col px-4 md:px-12   ">
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
            </div>

            <div className="flex flex-col lg:flex-row  bg-white sm:my-4   sm:mx-6 md:mx:2 2xl:mx-48  rounded-lg">
              <div className="flex flex-col lg:w-2/3 my-6 px-4 2xl:my-24 ">
                <h3 className="font-bold text-2xl py-2 w-full ">{title3}</h3>

                <HighlightedParagraph
                  className="text-xl xl:ml-4 pl-2"
                  text={description3}
                  wordsToHighlight={wordsToHighlight}
                />
              </div>

              <div className="flex justify-center w-full lg:w-1/2 items-center  ">
                <div className="relative h-[20rem] w-full sm:h-[22rem] sm:w-[22rem] md:h-[20rem] md:w-[30rem] lg:w-[30rem] lg:h-[26rem] md:my-3">
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
          </div>
        </section>
      )}

      <Recommendation
        title={offerDetail.title}
        fRecommendation={recommendation1}
        sRecommendation={recommendation2}
        tRecommendation={recommendation3}
      />
      {containsOnlyNonEmptyStrings && (
        <OfferProcedure
          src={`/${offerDetail.imagedetailt}`}
          srcdetails={`/${offerDetail.imagedetails}`}
          alt={offerDetail.title}
          procedures={proceduresTable}
        />
      )}

      <ButtonReservation />
      <BackLink>Zobacz pozostałe oferty</BackLink>
    </div>
  );
};

export default OfferDetailsPage;
