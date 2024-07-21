import React from "react";
import Link from "next/link";
import Image from "next/image";
import { OfferItem } from "@/data/OfferItem";
import PageHeader from "../homepage/PageHeader";
import { lato } from "@/components/fonts";

type AdvantageType = {
  title: string;
  description: string;
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
      <PageHeader id={"offer"}>Masaże i terapie dla ciała</PageHeader>
      <div className="flex justify-center w-full">
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-2 lg:gap-4 w-full lg:mx-9  ">
          {categoryBody.map((offerItem) => (
            <div
              key={offerItem.id}
              className="lg:mx-6 my-6 lg:w-auto  bg-white shadow-xl shadow-gray-300 animate-fadeIn rounded border-4 border-white transition-transform duration-200 ease-in-out hover:scale-[1.02] h-min"
            >
              <Link className="" href={`/offer/${offerItem.slug} `}>
                <Image
                  src={`/${offerItem.image}`}
                  alt={offerItem.title}
                  width={550}
                  height={400}
                  className="mx-auto"
                />
                <div className="animate-fadeIn rounded border-4 border-white  w-full">
                  <p className="lg:text-xl text-center font-bold md:px-3 md:py-4 py-2 font-[Lato] md:h-24 h-[6rem] mx-3">
                    {offerItem.title}
                  </p>
                  <p
                    className={`${lato.className} h-48 lg:h-36 text-justify  lg:text-xl lg:px-3 px-2`}
                  >
                    {offerItem.contentFirst}
                  </p>
                </div>

                <div className="flex justify-center h-12">
                  <button className=" flex underline decoration-solid underline-offset-8 font-semibold  text-center px-2 py-3  text-black hover:text-gray-400">
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

export default OffersCardBody;
