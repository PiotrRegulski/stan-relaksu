import React from "react";
import { OfferItem } from "@/data/OfferItem";
import Link from "next/link";
// Dodaj pozostałe pola zgodnie z definicją OfferItem

const AllPriceList = () => {
  return (
    <div>
      {OfferItem.map((item) => (
        <div key={item.id}>
          <Link href={`/offer/${item.slug}`}>
            <h2 className="bg-teal-500 text-white  text-xl lg:text-4xl border rounded-full mx-auto px-4 py-2 font-bold">
              {item.title}
            </h2>
          </Link>

          <ul className="divide-y divide-blue-200 my-3 ">
            {item.prices?.map((price) => (
              <li key={price.id} className="text-xl lg:text-2xl mx-12 ">
                <div className="flex justify-between ">
                  <div>{price.priceName}</div>
                  <div>{price.price}</div>
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
