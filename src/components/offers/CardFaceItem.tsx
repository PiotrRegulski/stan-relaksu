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
  category: string;
  title: string;
  contentMainOffer?: string;
  contentFirst?: string;
  image: string;
  prices: PricesType[];
  advantages: AdvantageType[];
  contraindications: ContraindicationsType[];
};
const CardFaceItem = () => {
  const categoryFace: OfferItemType[] = OfferItem.filter(
    (offer) => offer.category == "face"
  );
  return (
    <>
    {categoryFace.map((offerItem) => (
      <div
        key={offerItem.id}
        className="h-[32rem]   my-6  md:mx-2 sm:h-[28rem] md:h-[30rem] lg:h-[30rem] xl:h-[30rem] 2xl:h-[42rem]  bg-white shadow-lg shadow-gray-400 animate-fadeIn rounded-xl   transition-transform xl:hover:z-30 duration-500 ease-in-out xl:hover:scale-[1.03]   2xl:w-[30rem]  "
      >
        <Link className="" href={`/oferta/${offerItem.slug} `}>
          <div className="relative h-[32rem] w-[20rem] sm:h-[28rem]    sm:w-[19rem] md:w-[24rem] md:h-[30rem] lg:h-[30rem] lg:min-w-[20rem] xl:h-[30rem] xl:w-[25rem] 2xl:h-[42rem] 2xl:w-[30rem]  ">
            <Image
              src={`/${offerItem.image}`}
              alt={offerItem.title}
              fill
              sizes="(max-width: 600px) 100vw, 50vw"
              className=" object-cover w-full h-full rounded-lg "
            />
            <div className="absolute bottom-0 left-0 bg-secondary bg-opacity-70   rounded w-full h-1/2 sm:h-1/2 md:h-[48%]">
              <div className=" flex flex-col justify-center items-center animate-fadeIn rounded   px-1  w-full  h-3/4 ">
                <div className="h-1/4 flex mt-2 ">
                  <p
                    className={`${lato.className}  md:text-base lg:text-lg xl:text-xl 2xl:text-xl text-center  font-semibold  py-1  text-black`}
                  >
                    {offerItem.title}
                  </p>
                </div>
                <div className="h-3/4 mt-2">
                  <p className=" text-center text-base  xl:text-lg 2xl:text-xl font-medium indent-4 px-8  sm:px-2  text-black py-2 ">
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

export default CardFaceItem;
