import React from "react";
import { OfferItem } from "@/data/OfferItem";
import Image from "next/image";
import Link from "next/link";
import { Noto } from "@/components/fonts";

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
};

const CardBodyItem = () => {
  const categoryBody: OfferItemType[] = OfferItem.filter(
    (offer) => offer.category == "body"
  );

  return (
    <>
      {categoryBody.map((offerItem) => (
        <div
          key={offerItem.id}
          className=" h-[34rem]  my-6  md:mx-2 sm:h-[34rem] md:h-[34rem] 2xl:h-[42rem]  bg-white shadow-lg shadow-gray-400 animate-fadeIn rounded-xl   transition-transform duration-200 ease-in-out hover:scale-[1.02]    2xl:w-[30rem]  "
        >
          <Link className="" href={`/offer/${offerItem.slug} `}>
            <div className="relative h-[34rem] w-[20rem]   sm:w-[20rem] md:w-[17rem] md:h-[34rem] lg:min-w-[20rem] xl:w-[25rem] 2xl:h-[42rem] 2xl:w-[30rem] ">
              <Image
                src={`/${offerItem.image}`}
                alt={offerItem.title}
                fill
                sizes="(max-width: 600px) 100vw, 50vw"
                className=" object-cover w-full h-full rounded-lg "
              />
              <div className="absolute bottom-0 left-0 bg-black bg-opacity-35   rounded w-full  ">
                <div className=" flex flex-col justify-center items-center animate-fadeIn rounded   px-1  w-full  ">
                  <p
                    className={`${Noto.className}  md:text-base lg:text-lg xl:text-xl 2xl:text-xl text-center font-serif font-semibold sm:h-16 py-1 mb-2 text-neutral-200`}
                  >
                    {offerItem.title}
                  </p>
                  <p className=" text-center sm:text-sm md:text-base xl:text-md 2xl:text-xl font-semibold indent-4 px-8  sm:px-2 h-32 sm:h-32 md:h-28 lg:h-24 2xl:h-24 text-neutral-200 py-2 ">
                    {offerItem.contentMainOffer}
                  </p>
                </div>

                <div className="flex justify-center    ">
                  <button className=" flex underline decoration-solid underline-offset-8 font-semibold  text-center md:text-base  my-4  text-neutral-200 hover:text-gray-400 hover:bg-opacity-40">
                    {" "}
                    Dowiedz się więcej
                  </button>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default CardBodyItem;
