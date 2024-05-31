import React from "react";
import Link from "next/link";
import Image from "next/image";
import { OfferItem } from "@/data/OfferItem";
const OffersCard = () => {
  return (
    <div className="flex justify-center">
        
      <section className="grid grid-cols-1 sm:grid-cols-3 sm:gap-12">
        {OfferItem.map((offerItem) => (
          <div key={offerItem.id} className="mx-4 my-6 bg-white shadow-xl shadow-gray-400/75 animate-fadeIn rounded border-4 border-white transition-transform duration-200 ease-in-out hover:scale-[1.02]">
          <Link className="  " href={`/offer/${offerItem.slug} `}>
            <Image
              src={`/${offerItem.image}`}
              alt={offerItem.title}
              width={400}
              height={400}
              className=""
            />
            <div className="animate-fadeIn rounded border-4 border-white md:w-[400px] w-full">
              <p className="text-xl text-center font-bold px-3 py-4 font-[Lato]">
                {offerItem.title}
              </p>
            </div>
            <div className="flex justify-center">  <button>Kliknij i zobacz szczegóły</button></div>
           
          </Link>
        </div>
        ))}
      </section>
    </div>
  );
};

export default OffersCard;
