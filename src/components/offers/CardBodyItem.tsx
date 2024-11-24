import React from "react";
import { OfferItem } from "@/data/OfferItem";
import Image from "next/image";
import Link from "next/link";
import { lato } from "@/components/fonts";

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
  order: number;
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

  categoryBody.sort((a, b) => a.order - b.order);
  return (
    <>
      {categoryBody.map((offerItem) => (
        <div
          key={offerItem.id}
          className=" h-[29rem]  my-6  md:mx-2 sm:h-[28rem] md:h-[32rem] 2xl:h-[42rem]  bg-white shadow-lg shadow-gray-400 animate-fadeIn rounded-xl   transition-transform duration-200 ease-in-out hover:scale-[1.02]    2xl:w-[30rem]  "
        >
          <Link className="" href={`/offer/${offerItem.slug} `}>
            <div className="relative h-[29rem] w-[20rem]   sm:w-[20rem] md:w-[17rem] md:h-[32rem] lg:min-w-[20rem] xl:w-[25rem] 2xl:h-[42rem] 2xl:w-[30rem] ">
              <Image
                src={`/${offerItem.image}`}
                alt={offerItem.title}
                fill
                sizes="(max-width: 600px) 100vw, 50vw"
                className=" object-cover w-full h-full rounded-lg "
              />
              <div className="absolute bottom-0 left-0 bg-secondary bg-opacity-70   rounded w-full h-2/5  ">
                <div className=" flex flex-col justify-center items-center animate-fadeIn rounded   px-1  w-full  h-3/4 ">
                  <div className="h-1/4 flex mt-2 ">
                    <p
                      className={`${lato.className}  md:text-base lg:text-lg xl:text-xl 2xl:text-xl text-center  font-semibold  py-1  text-black`}
                    >
                      {offerItem.title}
                    </p>
                  </div>
                  <div className="h-3/4 mt-2">
                    <p className=" text-center text-base  xl:text-md 2xl:text-xl font-medium indent-4 px-8  sm:px-2  text-black py-2 ">
                      {offerItem.contentMainOffer}
                    </p>
                  </div>
                </div>

                <div className="flex justify-center items-center h-1/4 py-4  ">
                  <button className=" flex underline decoration-solid underline-offset-8 font-medium text-xs  text-center md:text-base   text-black hover:text-gray-400 hover:bg-opacity-40">
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
