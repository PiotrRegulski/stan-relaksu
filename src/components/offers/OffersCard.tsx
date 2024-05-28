import React from "react";
import Link from "next/link";
import Image from "next/image";
import { OfferItem } from "@/data/OfferItem";
const OffersCard = () => {
  return (
    <div className="flex justify-center">
        
      <section className="grid grid-cols-1 sm:grid-cols-3 sm:gap-12">
        {OfferItem.map((offerItem) => (
          <div key={offerItem.id} className=" mx-2 my-6">
            <Link className="  " href={`/offer/${offerItem.slug} `}>
              <Image
                src={`/${offerItem.image}`}
                alt={offerItem.title}
                width={400}
                height={400}
                className="animate-fadeIn rounded border-4 border-white shadow-xl shadow-gray-400/75 transition-transform duration-200 ease-in-out hover:scale-[1.02]"
              />
              <p className="text-xl text-center font-bold px-3 py-4">
                {offerItem.title}
              </p>
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
};

export default OffersCard;
