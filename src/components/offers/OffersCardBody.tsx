import React from "react";
import Link from "next/link";
import Image from "next/image";
import { OfferItem } from "@/data/OfferItem";
import PageHeader from "../homepage/PageHeader";
import { lora } from "@/components/fonts";

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
// Definicja typu dla pojedynczego elementu oferty
type OfferItemType = {
  id: string;
  slug: string;
  active: boolean;
  category: string;
  title: string;
  contentMainOffer?: string;
  contentFirst?: string;
  image: string;
  prices: PricesType[];
  advantages: AdvantageType[];
  contraindications: ContraindicationsType[];

  // Dodaj pozostałe pola zgodnie z definicją OfferItem
};
const OffersCardBody = () => {
  const categoryBody: OfferItemType[] = OfferItem.filter(
    (offer) => offer.category == "body"
  );

  return (
    <div className="mt-[7rem]">
      <PageHeader id={"offer-title"}>Zabiegi na Ciało</PageHeader>
      <div className="flex justify-center  w-full my-4 md:my-12 2xl:my-12 sm:min-h-[66rem] md:min-h-[33rem] ">
        <section className="grid  gap-5 md:gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3   lg:grid-cols-3 2xl:grid-cols-3 md:justify-items-center  2xl:justify-items-center 2xl:gap-11 rounded">
          {categoryBody.map((offerItem) => (
            <div
              key={offerItem.id}
              className=" h-[31rem] sm:h-[20rem] md:h-[30rem] 2xl:h-[40rem]  bg-white shadow-lg shadow-gray-400 animate-fadeIn rounded-xl   transition-transform duration-200 ease-in-out hover:scale-[1.02]    2xl:w-[30rem] "
            >
              <Link className="" href={`/offer/${offerItem.slug} `}>
                <div className="relative h-[31rem] w-screen   sm:w-[20rem] md:w-[17rem] md:h-[30rem] lg:min-w-[20rem] xl:w-[25rem] 2xl:h-[40rem] 2xl:w-[30rem] ">
                  <Image
                    src={`/${offerItem.image}`}
                    alt={offerItem.title}
                    fill
                    // width={auto}
                    // height={467}
                    sizes="(max-width: 600px) 100vw, 50vw"
                    className=" object-cover w-full h-full rounded-lg "
                  />
                  <div className="absolute bottom-0 left-0 bg-black bg-opacity-20   rounded w-full  ">
                    <div className=" animate-fadeIn rounded   px-1  w-full  ">
                      <p className="sm:text-base md:text-base 2xl:text-xl text-center font-serif font-semibold sm:h-14 py-2 mb-1 text-white">
                        {offerItem.title}
                      </p>
                      <p
                        className=" text-center sm:text-sm md:text-base xl:text-md 2xl:text-xl font-semibold indent-4 px-8 sm:px-2 h-28 sm:h-24 md:h-28 lg:h-24 2xl:h-24 text-white "
                      >
                        {offerItem.contentMainOffer}
                      </p>
                    </div>

                    <div className="flex justify-center    ">
                      <button className=" flex underline decoration-solid underline-offset-8 font-semibold  text-center md:text-lg  my-4  text-white hover:text-gray-400 hover:bg-opacity-40">
                        {" "}
                        Dowiedz się więcej
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default OffersCardBody;
