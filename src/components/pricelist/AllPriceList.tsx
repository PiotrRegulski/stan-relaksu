import React from "react";
import { OfferItem } from "@/data/OfferItem";
import Link from "next/link";
// Dodaj pozostałe pola zgodnie z definicją OfferItem

const AllPriceList = () => {
  return (
    <div className="">
      {OfferItem.map((item) => (
        <div key={item.id} >
          <Link href={`/offer/${item.slug} `} className="hover:opacity-80">
            <h2 className="bg-primary text-black text-center   text-sm lg:text-xl border rounded-full mx-auto px-8 py-2 font-bold lg:mt-4">
              {item.title}
            </h2>
          </Link>

          <ul className="divide-y divide-blue-200 my-3 ">
            {item.prices?.map((price) => (
              <li key={price.id} className="text-sm lg:text-xl mx-12 ">
                <div className="flex justify-between font-semibold">
                  <div className=""><p className="">{price.priceName}</p></div>
                  <div className=""><p>{price.price}</p></div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default AllPriceList;
