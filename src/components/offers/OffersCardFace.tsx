import React from "react";
import Link from "next/link";
import Image from "next/image";
import { OfferItem } from "@/data/OfferItem";
import PageHeader from "../homepage/PageHeader";
import { lato,lora } from "@/components/fonts";

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
  imagedetailf?: string;
  imagedetails?: string;
  imagedetailt?: string;
  imagedetailfo?: string;
  prices: PricesType[];
  advantages: AdvantageType[];
  contraindications: ContraindicationsType[];

  // Dodaj pozostałe pola zgodnie z definicją OfferItem
};
const OffersCardFace = () => {
  const categoryFace: OfferItemType[] = OfferItem.filter(
    (offer) => offer.category == "face"
  );
  
  return (
    <>
      <PageHeader id={"offer"}>Zabiegi na Twarz</PageHeader>
      <div className="flex justify-center w-full my-12">
        <section className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 sm:gap-2 lg:gap-4 w-full   ">
          {categoryFace.map((offerItem) => (
            <div
              key={offerItem.id}
              className="mx-auto sm:mx-6 md:mx-10 lg:mx-6 my-6 lg:w-auto  bg-white shadow-lg shadow-gray-500 animate-fadeIn rounded border-4 border-white transition-transform duration-200 ease-in-out hover:scale-[1.02] h-max"
            >
              <Link className="" href={`/offer/${offerItem.slug} `}>
              <div className="relative w-full h-96 mx-auto ">
                <Image
                  src={`/${offerItem.image}`}
                  alt={offerItem.title}
                  fill
                  // width={700}
                  // height={467}
                  sizes="(max-width: 600px) 100vw, 50vw"
                  className="object-cover w-full h-full"
                /></div>
                
                <div className="animate-fadeIn rounded px-4  w-full ">
                  <p className="sm:text-xl text-center font-bold md:my-4 md:px-3 md:py-4 py-2  md:h-14 h-[6rem] xl:h-[5rem]  mx-3">
                    {offerItem.title}
                  </p>
                  <p
                    className={`${lora.className} indent-4 h-36  text-justify  sm:text-xl lg:px-3 px-2 `}
                  >
                    {offerItem.contentFirst}
                  </p>
                </div>

                <div className="flex justify-center ">
                  <button className=" flex underline decoration-solid underline-offset-8 font-semibold md:text-lg  text-center my-4 md:my-14 lg:my-24 text-black hover:text-gray-400">
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

export default OffersCardFace;
