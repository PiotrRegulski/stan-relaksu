import React from "react";
import Link from "next/link";
import Image from "next/image";
import { OfferItem } from "@/data/OfferItem";
import PageHeader from "../homepage/PageHeader";
import { lato } from "@/components/fonts";
const OffersCard = () => {
  return (
    <>
      <PageHeader>Co oferuję</PageHeader>
      <div className="flex justify-center w-full">
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-12 lg:gap-6 w-max ">
          {OfferItem.map((offerItem) => (
            <div
              key={offerItem.id}
              className="mx-6 my-6 lg:w-auto  bg-white shadow-xl shadow-gray-400/75 animate-fadeIn rounded border-4 border-white transition-transform duration-200 ease-in-out hover:scale-[1.02] h-min"
            >
              <Link className="" href={`/offer/${offerItem.slug} `}>
                <Image
                  src={`/${offerItem.image}`}
                  alt={offerItem.title}
                  width={550}
                  height={400}
                  className=""
                />
                <div className="animate-fadeIn rounded border-4 border-white  w-full">
                  <p className="lg:text-xl text-center font-bold md:px-3 md:py-4 py-2 font-[Lato] md:h-24 h-[6rem] mx-3">
                    {offerItem.title}
                  </p>
                  <p className={`${lato.className} h-48 lg:h-36 text-justify  lg:text-xl lg:px-3 px-2`}>
                    {offerItem.contentFirst}
                  </p>
                </div>

                <div className="flex justify-center h-12">
                  <button className=" flex underline decoration-solid underline-offset-8 font-semibold  text-center px-2 py-3  text-black hover:text-gray-400"> Kliknij i zobacz szczegóły</button>
                </div>
              </Link>
            </div>
          ))}
        </section>
      </div>
    </>
  );
};

export default OffersCard;
