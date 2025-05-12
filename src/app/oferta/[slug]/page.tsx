import { OfferItem } from "@/data/OfferItem";
import React from "react";
import Image from "next/image";
import type { Metadata, ResolvingMetadata } from "next";
import BackLink from "@/components/layout/BackLink";
import Recommendation from "@/components/offers/Recommendation";
import OfferProcedure from "@/components/offers/OfferProcedure";
import HighlightedParagraph from "@/components/layout/HighlightedParagraph";
import MotionHeader from "@/components/offers/MotionHeader";
import KeyList from "@/components/offers/KeyList";
import RandomOffers from "@/components/offers/RandomOffers";
interface OfferDetailsPageProps {
  params: Promise<{ id: string; slug: string; }>;
}
type MetaProps = {
  params: Promise<{ id: string; slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};
type AdvantageEntryType = {
  title?: string;
  description?: string;
  titleH2_1?: string;
  description_1?: string;
  titleH2_2?: string;
  titleH3_2_1?: string;
  descriptionS_2_1?: string;
  titleH3_2_2?: string;
  descriptionS_2_2?: string;
  titleH3_2_3?: string;
  descriptionS_2_3?: string;
  titleH3_2_4?: string;
  descriptionS_2_4?: string;
  titleH2_3?: string;
  descriptionS_3_1?: string;
  descriptionS_3_2?: string;
  benefits_list_1?: string;
  benefits_list_2?: string;
  benefits_list_3?: string;
  benefits_list_title?: string;
};
type AdvantageType = AdvantageEntryType[];

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
  cardTitle?: string;
  description?: string;
  contentFirst?: string;
  imageHeader?: string;
  image: string;
  imagedetail_1?: string;
  imagedetail_2?: string;
  imagedetail_3?: string;
  imagedetail_4?: string;
  imagedetail_5?: string;
  imagedetail_6?: string;
  imagedetailt_p1?: string;
  imagedetailt_p2?: string;
  prices: PricesType[];
  advantages: AdvantageType;
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
    title:
      product?.title,
    description: product?.contentFirst,
    openGraph: {
      title: product?.title + "-" + "Stan Relaksu",
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

const  OfferDetailsPage: React.FC<OfferDetailsPageProps> = async({ params }) => {
  const resolvedParams = await params;
  const offerSlug: string = resolvedParams.slug;

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

  // Tablica obiektów zawierająca zalety oferty
  const descriptionArray = offerDetail?.advantages;

  // Funkcja tworząca zmienne z tablicy obiektów
  function createVariables(
    array: { [key: string]: string }[]
  ): AdvantageEntryType {
    // Tworzenie pustego obiektu typu AdvantageEntryType
    const variables: AdvantageEntryType = {};

    // Iteracja przez każdy obiekt w tablicy
    array.forEach((obj) => {
      // Uzyskiwanie pierwszego klucza z obiektu
      const key = Object.keys(obj)[0];
      // Przypisywanie wartości do klucza w obiekcie variables
      variables[key as keyof AdvantageEntryType] = obj[key] || "";
    });

    // Zwracanie wypełnionego obiektu variables
    return variables;
  }

  // Wywołanie funkcji createVariables i przypisanie wyniku do zmiennej articles
  const articles = createVariables(descriptionArray);

  // Jeśli chcesz upewnić się, że masz dokładnie 7 elementów:

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
    "terapia",
    "manualna",
    "zatok",
    "zatokami",
  ];
  return (
    <div
      id="nazwa-zabiegu"
      className=" container mt-[7rem] lg:mt-[8rem] mx-auto animate-fadeIn  transition-transform duration-500 ease-in-out "
    >
      <MotionHeader
        title={offerDetail.title}
        description={offerDetail.description || ""}
      />

      {
        <section
          id="main-adventages"
          className="flex flex-col   animate-fadeIn  transition-transform duration-500 ease-in-out bg-gradient-to-br from-white to-secondary"
        >
          <div id={"oferta-detale"} className="flex flex-col ">
            <div className="flex flex-row-reverse w-full h-full     ">
              <div className="lg:flex flex-col items-center justify-center h-full lg:w-1/3 mt-8 hidden ">
                <h3 className="font-semibold text-lg">Polecane Zabiegi</h3>
                <RandomOffers urlTitle={offerSlug} />
                <div className="hidden lg:flex w-full h-full lg:justify-center items-center xl:justify-start  xl:items-center lg:mt-[15rem] xl:mt-[2rem] ">
                  <div className="relative h-[13rem] w-full sm:h-[18rem] sm:w-1/2 md:h-[15rem] md:w-2/3 lg:w-[13rem] lg:h-[20rem] xl:w-[25rem] xl:h-[30rem]">
                    <Image
                      src={`/${offerDetail.imagedetail_6}`}
                      alt={offerDetail.title}
                      fill
                      className=" object-cover  shadow-gray-700 shadow-lg rounded"
                      sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col  justify-start items-start  my-4 lg:w-2/3  ">
                <div className="flex flex-col   ">
                  <div className=" my-4 px-4 lg:mx-2 2xl:mx-24 ">
                    <h2 className="font-bold  text-xl xl:text-2xl  ">
                      {articles.titleH2_1}
                    </h2>

                    <HighlightedParagraph
                      className="  text-base xl:text-lg  my-4 text-justify"
                      text={articles.description_1 || ""}
                      wordsToHighlight={wordsToHighlight}
                    />
                  </div>
                </div>
                <div className="flex w-full  xl:w-full justify-center items-center gap-5 sm:px-4  ">
                  <div className="relative flex items-end justify-end h-[15rem] w-full sm:h-[15rem] sm:w-full md:h-[15rem] md:w-2/3 lg:w-[20rem] lg:h-[13rem]  ">
                    <Image
                      src={`/${offerDetail.imagedetail_1}`}
                      alt={offerDetail.title}
                      fill
                      className="rounded object-cover shadow-gray-700 shadow-lg  "
                      sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="hidden sm:block relative  h-[13rem] w-full sm:h-[15rem] sm:w-full md:h-[15rem] md:w-2/3 lg:w-[20rem] lg:h-[13rem]">
                    <Image
                      src={`/${offerDetail.imagedetail_2}`}
                      alt={offerDetail.title}
                      fill
                      className="object-cover rounded  shadow-gray-700 shadow-lg "
                      sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw "
                    />
                  </div>
                </div>
                <div className="flex justify-center items-center my-4 ">
                  <div className="flex flex-col px-4   ">
                    <div className="flex flex-col 2xl:justify-end 2xl:items-end w-full my-4  ">
                      {" "}
                      <div className=" mx-2 2xl:w-2/3">
                        {" "}
                        <h2 className="font-bold text-xl  my-4 ">
                          {articles.titleH2_2}
                        </h2>
                        <h3 className="font-semibold text-lg my-2">
                          {articles.titleH3_2_1}
                        </h3>
                        <HighlightedParagraph
                          className=" text-base  mx-auto text-justify "
                          text={articles.descriptionS_2_1 || ""}
                          wordsToHighlight={wordsToHighlight}
                        />
                      </div>
                    </div>

                    <div className="flex w-full flex-col lg:flex-row justify-center items-center   ">
                      <div className="flex w-full lg:w-1/2 my-8 lg:mr-4 justify-center items-center  xl:justify-center xl:items-center  ">
                        <div className=" relative h-[13rem] w-full  sm:h-[18rem] sm:w-[20rem] md:w-96 md:h-[15rem] lg:w-[13rem] lg:h-[20rem] 2xl:w-[13rem] 2xl:h-96 ">
                          <Image
                            src={`/${offerDetail.imagedetail_3}`}
                            alt={offerDetail.title}
                            fill
                            className=" object-cover rounded shadow-gray-700 shadow-lg "
                            sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        </div>
                      </div>

                      <div className="w-full">
                        <h3 className="font-semibold text-lg my-2">
                          {articles.titleH3_2_2}
                        </h3>
                        <HighlightedParagraph
                          className=" text-base  my-2  mx-auto text-justify"
                          text={articles.descriptionS_2_2 || ""}
                          wordsToHighlight={wordsToHighlight}
                        />
                        <h3 className="font-semibold text-lg my-2 ">
                          {articles.titleH3_2_3}
                        </h3>
                        <HighlightedParagraph
                          className=" text-base my-2 text-justify "
                          text={articles.descriptionS_2_3 || ""}
                          wordsToHighlight={wordsToHighlight}
                        />
                        <h3 className="font-semibold text-lg my-2">
                          {articles.titleH3_2_4}
                        </h3>
                        <HighlightedParagraph
                          className=" text-base my-2 text-justify"
                          text={articles.descriptionS_2_4 || ""}
                          wordsToHighlight={wordsToHighlight}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex  flex-row-reverse xl:mx-12">
                  {" "}
                  <div className=" my-4 px-4 ml-4">
                    <h2 className="font-bold text-xl">{articles.titleH2_3}</h2>
                    <HighlightedParagraph
                      className="text-base my-2 text-justify"
                      text={articles.descriptionS_3_1 || ""}
                      wordsToHighlight={wordsToHighlight}
                    />

                    <div className="flex w-full md:w-full items-center justify-center gap-2 my-4  lg:ml-4">
                      <div className=" hidden relative md:flex items-end justify-end h-[13rem] w-full sm:h-[15rem] sm:w-full md:h-[15rem] md:w-2/3 lg:w-[20rem] lg:h-[13rem] 2xl:w-60 2xl:h-48  ">
                        <Image
                          src={`/${offerDetail.imagedetail_4}`}
                          alt={offerDetail.title}
                          fill
                          className="rounded object-cover shadow-gray-700 shadow-lg  "
                          sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                      <div className="relative h-[13rem] w-full sm:h-[18rem] sm:w-1/2 md:h-[15rem] md:w-2/3 lg:w-[20rem] lg:h-[13rem] 2xl:w-60 2xl:h-48">
                        <Image
                          src={`/${offerDetail.imagedetail_5}`}
                          alt={offerDetail.title}
                          fill
                          className=" rounded   object-cover shadow-md shadow-gray-700 "
                          sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                    </div>
                    <KeyList
                      benefits_list_1={articles.benefits_list_1}
                      benefits_list_2={articles.benefits_list_2}
                      benefits_list_3={articles.benefits_list_3}
                      benefits_list_title={articles.benefits_list_title}
                    />
                    <div className="md:hidden block relative h-[13rem] w-full sm:h-[18rem] sm:w-full md:h-[15rem] md:w-2/3 lg:w-[25rem] lg:h-[20rem] 2xl:w-60 2xl:h-48 my-2">
                      <Image
                        src={`/${offerDetail.imagedetail_2}`}
                        alt={offerDetail.title}
                        fill
                        className=" rounded  object-cover shadow-gray-700 shadow-lg "
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>

                    <HighlightedParagraph
                      className=" text-base my-8 text-justify"
                      text={articles.descriptionS_3_2 || ""}
                      wordsToHighlight={wordsToHighlight}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      }

      <Recommendation
        title={offerDetail.cardTitle}
        fRecommendation={recommendation1}
        sRecommendation={recommendation2}
        tRecommendation={recommendation3}
      />
      {containsOnlyNonEmptyStrings && (
        <OfferProcedure
          src={`/${offerDetail.imagedetailt_p1}`}
          srcdetails={`/${offerDetail.imagedetailt_p2}`}
          alt={offerDetail.title}
          procedures={proceduresTable}
        />
      )}
      <div className="container mx-auto flex flex-col items-center justify-center h-full w-full mt-8 md:hidden">
        <h3 className="font-semibold text-lg">Polecane zabiegi</h3>
        <RandomOffers urlTitle={offerSlug} />
      </div>
      {/* <ButtonReservation /> */}
      <BackLink>Zobacz pozostałe oferty</BackLink>
    </div>
  );
};

export default OfferDetailsPage;
