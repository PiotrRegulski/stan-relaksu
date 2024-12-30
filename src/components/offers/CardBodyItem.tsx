import React from "react";
import { OfferItem } from "@/data/OfferItem";
import Image from "next/image";
import Link from "next/link";
import { lato } from "@/components/fonts";
import ButtonMain from "../layout/ButtonMain";

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
          className=" h-[32rem]  my-6  md:mx-2 sm:h-[26rem] md:h-[30rem] lg:h-[30rem] xl:h-[30rem] 2xl:h-[42rem]  bg-white shadow-lg shadow-gray-400 animate-fadeIn rounded-xl   transition-transform xl:hover:z-30 duration-500 ease-in-out xl:hover:scale-[1.03]    2xl:w-[30rem]  "
        >
          <Link className="" href={`/oferta/${offerItem.slug} `}>
            <div className="relative h-[32rem] w-[20rem] sm:h-[26rem]    sm:w-[19rem] md:w-[24rem] md:h-[30rem] lg:h-[30rem] lg:min-w-[20rem] xl:h-[30rem] xl:w-[25rem] 2xl:h-[42rem] 2xl:w-[30rem] ">
              <Image
                src={`/${offerItem.image}`}
                alt={offerItem.title}
                fill
                sizes="(max-width: 600px) 100vw, 50vw"
                className=" object-cover w-full h-full rounded-lg "
              />
              <div className="absolute bottom-0 left-0 bg-secondary bg-opacity-70   rounded w-full h-max sm:h-max md:h-max  ">
                <div className=" flex flex-col justify-center items-center animate-fadeIn rounded   px-1  w-full  h-max bg-white bg-opacity-70">
                  <div className="h-1/2 flex mt-2 ">
                    <h3
                      className={`${lato.className}  md:text-base lg:text-lg xl:text-xl 2xl:text-xl text-center  font-bold  py-1  text-black`}
                    >
                      {offerItem.title}
                    </h3>
                  </div>
                  <div className=" mt-2 flex flex-col justify-center items-center h-full ">
                    <div className="h-full">
                      {" "}
                      <p className=" text-center text-base  xl:text-lg 2xl:text-xl font-medium indent-4 px-8  sm:px-2  text-black py-2 ">
                        {offerItem.contentMainOffer}
                      </p>
                    </div>

                    <div className="flex justify-center items-center py-4 ">
                      <ButtonMain> Dowiedz się więcej</ButtonMain>
                    </div>
                  </div>
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
