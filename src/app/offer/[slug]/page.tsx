import { OfferItem } from "@/data/OfferItem";
import React from "react";
import Image from "next/image";
import type { Metadata, ResolvingMetadata } from "next";
import BackLink from "@/components/layout/BackLink";
import Recommendation from "@/components/offers/Recommendation";
import OfferProcedure from "@/components/offers/OfferProcedure";
import HighlightedParagraph from "@/components/layout/HighlightedParagraph";
import { Noto } from "@/components/fonts";
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
    title: product?.title,
    openGraph: {
      title: product?.title,
      description: product?.contentFirst,
      url: `https://stanrelaksu/offer/${product?.slug}`,
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
    <div className=" mt-[5rem] lg:mt-[9rem]">
      <div
        id={"offerDetail"}
        className="w-full  bg-gradient-to-r from-mainthemelogo from-50% to-mainthemelogo/40 h-[24rem] flex  items-center text-triadbrown "
      >
        {/* <Image
            src={`/${offerDetail.imageHeader}`}
            alt={offerDetail.title}
            fill
            priority={true}
            className=" object-cover  w-full h-full"
            sizes="(max-width: 600px) 100vw, 50vw"
          /> */}
        <div className="flex flex-col justify-center items-center w-full  lg:w-3/4 sm:border-2 border-l-0 sm:rounded-r-full text-xl border-triadbrown bg-mainthemelogo ">
          <div className=" md:w-1/2 my-8 w-full px-2">
            {" "}
            <h1 className={`${Noto.className} font-semibold text-xl md:text-2xl my-4`}>
              {offerDetail.title}
            </h1>
            <div>
              <p className="font-semibold text-lg text-balance ">
                {" "}
                {firstAdventagesDescription}
              </p>
            </div>
          </div>
        </div>
      </div>

      {description1! && title1! && (
        <section
          id="main-adventages"
          className="flex flex-col min-h-max     md:my-4  animate-fadeIn  transition-transform duration-200 ease-in-out "
        >
          <div id={"oferta-detale"} className="flex flex-col ">
            <div className="flex flex-col-reverse lg:flex-row bg-white sm:my-4 xl:mx-48  2xl:mx-48 rounded-lg  border-secondary">
              <div className="flex flex-col lg:w-2/3 my-2 justify-center items-center ">
                <div className="text-triadbrown my-4 px-4">
                  <h3 className="font-bold text-xl  md:text-2xl ">{title1}</h3>
                  <HighlightedParagraph
                    className="  text-lg md:text-xl my-4 text-justify"
                    text={description1}
                    wordsToHighlight={wordsToHighlight}
                  />
                </div>
              </div>

              <div className="flex justify-center w-full lg:w-1/2 items-center   ">
                <div className="relative h-[15rem] w-full sm:h-[22rem] sm:w-full md:h-[22rem] md:w-full lg:w-[25rem] lg:h-[20rem] xl:h-[20rem] xl:w-[25rem]">
                  <Image
                    src={`/${offerDetail.image}`}
                    alt={offerDetail.title}
                    fill
                    className="object-top object-cover sm:object-cover md:object-cover rounded   sm:px-2 md:px-0 "
                    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row-reverse 2xl:flex-row justify-center items-center  bg-secondary  ">
              <div className="flex flex-col lg:flex-row xl:w-9/12 justify-center items-center my-4 gap-4  ">
                <div className="relative h-[15rem] w-full sm:h-[22rem] sm:w-full md:h-[22rem] md:w-full lg:w-[25rem] lg:h-[20rem] xl:h-[20rem] xl:w-[25rem]  ">
                  <Image
                    src={`/${offerDetail.imagedetailfo}`}
                    alt={offerDetail.title}
                    fill
                    className="object-cover sm:object-cover md:object-cover sm:rounded   md:px-0  "
                    sizes="(max-width: 600px) 100vw,"
                  />
                </div>
                <div className="flex flex-col  justify-center items-center  my-4 w-full lg:w-1/2">
                  <div className="flex flex-col px-4 text-triadbrown   ">
                    <h3 className="font-bold text-xl md:text-2xl py-2 2xl:mb-4 ">
                      {title2}
                    </h3>
                    <HighlightedParagraph
                      className=" text-lg md:text-xl my-4  mx-auto text-justify"
                      text={description2}
                      wordsToHighlight={wordsToHighlight}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col-reverse lg:flex-row bg-white sm:my-4 xl:mx-48  2xl:mx-48 rounded-lg  border-secondary">
              <div className="flex flex-col lg:w-2/3 my-2 justify-center items-center ">
                <div className="text-triadbrown my-4 px-2">
                  <h3 className="font-bold text-xl  md:text-2xl ">{title3}</h3>
                  <HighlightedParagraph
                    className=" text-lg md:text-xl my-4 text-justify "
                    text={description3}
                    wordsToHighlight={wordsToHighlight}
                  />
                </div>
              </div>

              <div className="flex justify-center w-full lg:w-1/2 items-center   ">
                <div className="relative h-[15rem] w-full sm:h-[22rem] sm:w-full md:h-[22rem] md:w-full lg:w-[25rem] lg:h-[20rem] xl:h-[20rem] xl:w-[25rem]">
                  <Image
                    src={`/${offerDetail.imagedetailf}`}
                    alt={offerDetail.title}
                    fill
                    className="object-cover sm:object-cover md:object-cover rounded  sm:px-2 md:px-0  "
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
