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
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:gap-2 lg:gap-4 w-full   ">
          {categoryFace.map((offerItem) => (
            <div
              key={offerItem.id}
              className="lg:mx-6 my-6 lg:w-auto  bg-white shadow-lg shadow-gray-500 animate-fadeIn rounded border-4 border-white transition-transform duration-200 ease-in-out hover:scale-[1.02] min-h-[50rem]"
            >
              <Link className="" href={`/offer/${offerItem.slug} `}>
              <div className="relative w-full h-96 mx-auto ">
                <Image
                  src={`/${offerItem.image}`}
                  alt={offerItem.title}
                  fill
                  // width={700}
                  // height={467}
                  className="object-cover w-full h-full"
                /></div>
                
                <div className="animate-fadeIn rounded border-4 border-white  w-full  ">
                  <p className="lg:text-xl text-center font-bold md:my-4 md:px-3 md:py-4 py-2 font-[Lato] md:h-24 h-[6rem]   mx-3">
                    {offerItem.title}
                  </p>
                  <p
                    className={`${lora.className} h-48 text-justify  lg:text-xl lg:px-3 px-2 `}
                  >
                    {offerItem.contentFirst}
                  </p>
                </div>

                <div className="flex justify-center ">
                  <button className=" flex underline decoration-solid underline-offset-8 font-semibold  text-center px-2 my-12  text-black hover:text-gray-400">
                    {" "}
                    Kliknij i zobacz szczegóły
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
