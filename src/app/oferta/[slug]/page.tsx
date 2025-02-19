import { OfferItem } from "@/data/OfferItem";
import React from "react";
import Image from "next/image";
import type { Metadata, ResolvingMetadata } from "next";
import BackLink from "@/components/layout/BackLink";
import Recommendation from "@/components/offers/Recommendation";
import OfferProcedure from "@/components/offers/OfferProcedure";
import HighlightedParagraph from "@/components/layout/HighlightedParagraph";
import MotionHeader from "@/components/offers/MotionHeader";
interface OfferDetailsPageProps {
  params: {
    id: string;
    slug: string;
  };
}
type MetaProps = {
  params: Promise<{ id: string; slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

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
  procedurefirst?: string;
  proceduresec?: string;
  procedurethi?: string;
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

export async function generateMetadata(
  { params }: MetaProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const resolvedParams = await params;
  const product = OfferItem.find(
    (product) => product.slug === resolvedParams.slug
  );
  const previousImages = (await parent).openGraph?.images || [];
  return {
    title: product?.title +'-'+' '+'Stan Relaksu',
    description:product?.contentFirst,
    openGraph: {
      title: product?.title + '-'+'Stan Relaksu',
      description: product?.contentFirst,
      url: `https://stanrelaksu/oferta/${product?.slug}`,
      type: "website",
      images: [
        {
          url: `/masaz-relaksacyjny/masaz-relaksacyjny-cover-top.jpg`,
          width: 800,
          height: 600,
          alt: product?.title,
        },
        ...previousImages,
      ],
    },
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

  const proceduresTable = offerDetail?.procedures || [];

  // Sprawdzamy, czy wszystkie tytuły i procedury są poprawne (niepuste i nie undefined).
  const containsOnlyNonEmptyStrings = proceduresTable.every((procedure) => {
    const hasValidTitle =
      procedure.title !== undefined && procedure.title.trim() !== "";
    const hasValidProcedure =
      procedure.procedure !== undefined && procedure.procedure.trim() !== "";
    const hasValidProcedureStage =
      procedure.procedurefirst !== undefined &&
      procedure.procedurefirst.trim() !== "";

    return hasValidTitle || hasValidProcedure || hasValidProcedureStage;
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
    <div className=" mt-[8rem] sm:mt-[5rem] md:mt-[8rem] lg:mt-[14rem]  ">
      <MotionHeader
        title={offerDetail.title}
        description={firstAdventagesDescription}
      />

      {description1! && title1! && (
        <section
          id="main-adventages"
          className="flex flex-col min-h-max    md:my-4  animate-fadeIn  transition-transform duration-500 ease-in-out "
        >
          <div id={"oferta-detale"} className="flex flex-col ">
            <div className="flex flex-col-reverse sm:flex-row bg-white sm:my-4 xl:mx-48  2xl:mx-48 rounded-lg  border-secondary">
              <div className="flex flex-col sm:w-1/2 md:w-1/2 my-2  ">
                <div className=" my-4 px-4">
                  <h1 className="font-bold  text-lg  md:text-xl xl:text-2xl ">{title1}</h1>
                  <HighlightedParagraph
                    className="  text-base md:text-lg xl:text-xl my-4 text-justify"
                    text={description1}
                    wordsToHighlight={wordsToHighlight}
                  />
                </div>
              </div>

              <div className="flex justify-center w-full sm:w-1/2   ">
                <div className="relative h-[13rem] w-full sm:h-[15rem] sm:w-full md:h-[15rem] md:w-2/3 lg:w-[25rem] lg:h-[20rem] xl:h-[20rem] xl:w-[25rem] my-2 ">
                  <Image
                    src={`/${offerDetail.image}`}
                    alt={offerDetail.title}
                    fill
                    className=" object-cover object-center sm:object-cover md:object-cover  rounded   sm:px-2 md:px-0 "
                    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row-reverse 2xl:flex-row justify-center items-center  bg-secondary  ">
              <div className="flex flex-col sm:flex-row xl:w-9/12 justify-center items-center my-4 md:gap-4  ">
                <div className="relative h-[13rem] w-full sm:h-[15rem] sm:w-1/2 md:h-[15rem] md:w-1/3 lg:w-[25rem] lg:h-[20rem] xl:h-[20rem] xl:w-[25rem] my-2 mx-2">
                  <Image
                    src={`/${offerDetail.imagedetailfo}`}
                    alt={offerDetail.title}
                    fill
                    className="object-cover sm:object-cover md:object-cover object-top sm:rounded   md:px-0  "
                    sizes="(max-width: 600px) 100vw,"
                  />
                </div>
                <div className="flex flex-col  justify-center items-center  my-4 w-full sm:w-1/2 md:w-2/3">
                  <div className="flex flex-col px-4   ">
                    <h2 className="font-bold text-lg md:text-xl py-2 2xl:mb-4 xl:text-2xl ">
                      {title2}
                    </h2>
                    <HighlightedParagraph
                      className=" text-base md:text-lg  xl:text-xl my-4  mx-auto text-justify"
                      text={description2}
                      wordsToHighlight={wordsToHighlight}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col-reverse sm:flex-row bg-white sm:my-4 xl:mx-48  2xl:mx-48 rounded-lg  border-secondary">
              <div className="flex flex-col sm:w-1/2 md:w-1/2 my-2  ">
                <div className=" my-4 px-2">
                  <h2 className="font-bold text-lg  md:text-xl xl:text-2xl ">{title3}</h2>
                  <HighlightedParagraph
                    className=" text-base md:text-lg  xl:text-xl my-4 text-justify "
                    text={description3}
                    wordsToHighlight={wordsToHighlight}
                  />
                </div>
              </div>

              <div className="flex justify-center w-full sm:w-1/2 items-center   ">
                <div className="relative h-[13rem] w-full sm:h-[15rem] sm:w-full md:h-[15rem] md:w-2/3 lg:w-[25rem] lg:h-[20rem] xl:h-[20rem] xl:w-[25rem] my-2">
                  <Image
                    src={`/${offerDetail.imagedetailf}`}
                    alt={offerDetail.title}
                    fill
                    className="object-cover sm:object-cover md:object-cover  rounded  sm:px-2 md:px-0  "
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

      {/* <ButtonReservation /> */}
      <BackLink>Zobacz pozostałe oferty</BackLink>
    </div>
  );
};

export default OfferDetailsPage;
