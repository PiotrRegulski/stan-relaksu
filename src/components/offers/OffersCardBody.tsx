import React from "react";
import Link from "next/link";
import Image from "next/image";
import { OfferItem } from "@/data/OfferItem";
import PageHeader from "../homepage/PageHeader";
import {  lora } from "@/components/fonts";

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
    <>
      <PageHeader id={"offer-title"}>Zabiegi na Ciało</PageHeader>
      <div className="flex justify-center w-full my-4 md:my-12 2xl:my-12  ">
        <section className="grid  gap-5 grid-cols-1 sm:grid-cols-2   lg:grid-cols-3 2xl:grid-cols-3 md:justify-items-center  2xl:justify-items-center 2xl:gap-11 rounded">
          {categoryBody.map((offerItem) => (
            <div
              key={offerItem.id}
              className=" h-[35rem] md:h-[35rem] md:px-2 bg-white shadow-lg shadow-gray-400 animate-fadeIn rounded   transition-transform duration-200 ease-in-out hover:scale-[1.02]    2xl:w-[30rem] "
            >
              <Link className="" href={`/offer/${offerItem.slug} `}>
                <div className="relative h-[15rem] w-full   ">
                  <Image
                    src={`/${offerItem.image}`}
                    alt={offerItem.title}
                    fill
                    // width={auto}
                    // height={467}
                    sizes="(max-width: 600px) 100vw, 50vw"
                    className=" object-cover w-full h-full"
                  />
                </div>

                <div className="animate-fadeIn rounded  px-1  w-full   ">
                  <p className="sm:text-lg md:text-md text-center font-serif font-bold h-16 py-2 mb-1 ">
                    {offerItem.title}
                  </p>
                  <p
                    className={` font-serif sm:text-md md:text-md xl:text-xl indent-4 h-[11rem] sm:h-[12rem] md:h-[10rem] lg:h-[11rem] px-2 `}
                  >
                    {offerItem.contentFirst}
                  </p>
                </div>

                <div className="flex justify-center    ">
                  <button className=" flex underline decoration-solid underline-offset-8 font-semibold  text-center md:text-lg  my-4  text-black hover:text-gray-400 hover:bg-opacity-40">
                    {" "}
                    Dowiedz się więcej
                  </button>
                </div>
              </Link>
            </div>
          ))}
        </section>
      </div>
    </>
  );
};

export default OffersCardBody;
