import React from "react";
import { OfferItem } from "@/data/OfferItem";
import Image from "next/image";
import Link from "next/link";
import { lato } from "@/components/fonts";
import ButtonMain from "../layout/ButtonMain";


type AdvantageType = {
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
  cardTitle?:string;
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
        className=" h-[32rem]  my-6  md:mx-2 sm:h-[30rem] md:h-[30rem] lg:h-[30rem] xl:h-[35rem] 2xl:h-[40rem]  bg-white shadow-lg shadow-gray-400 animate-fadeIn rounded-xl   transition-transform xl:hover:z-30 duration-500 ease-in-out xl:hover:scale-[1.03]     "
      >
        <Link className="" href={`/oferta/${offerItem.slug} `}>
          <div className="relative h-[32rem] w-[20rem] sm:h-[30rem]    sm:w-[19rem] md:w-[24rem] md:h-[30rem] lg:h-[30rem] lg:min-w-[20rem] xl:h-[35rem] xl:w-[25rem] 2xl:h-[40rem] 2xl:w-[25rem] ">
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
                    {offerItem.cardTitle}
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

export default CardFaceItem;
