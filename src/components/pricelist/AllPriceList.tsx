import React from "react";
import { OfferItem } from "@/data/OfferItem";
import Link from "next/link";
import ButtonReservation from "../about/ButtonReservation";
// Dodaj pozostałe pola zgodnie z definicją OfferItem

const AllPriceList = () => {

  OfferItem.sort((a, b) => a.order - b.order)
  return (
    <div className="2xl:w-1/2">
      {OfferItem.map((item) => (
        <div key={item.id} className="  space-y-8 pb-12 ">
          <Link href={`/oferta/${item.slug} `} className="hover:opacity-80 " aria-label="link do oferty">
            <h2 className="bg-secondary text-black text-center   text-lg  lg:text-xl xl:text-xl 2xl:text-2xl  rounded-full mx-auto px-8 py-2 font-semibold lg:mt-4">
              {item.cardTitle}
            </h2>
          </Link>
          
          <ul className="divide-y divide-blue-200 my-3 ">
          <li  className="text-lg lg:text-xl 2xl:text-2xl ">
                <div className="flex justify-between font-semibold bg-white bg-opacity-50 px-1 rounded my-2">
                  <div className="w-full pl-2"><p className="">Czas zabiegu:</p></div>
                  <div className="w-1/3 xl:w-1/4 2xl:w-1/5"><p className="text-left">Cena:</p></div>
                  
                </div>
                
              </li>
            {item.prices?.map((price) => (
              
              
              <li key={price.id} className="text-lg lg:text-xl 2xl:text-2xl mx-12 ">
                <div className="flex justify-between font-medium bg-white bg-opacity-50 px-1 rounded">
                  <div className=""><p className="">{price.priceName}</p></div>
                  <div className=""><p className="">{price.price}</p></div>
                  
                </div>
                
              </li>
             
            ))}
          </ul>
          <div className="flex w-full justify-center items-center my-12 "><ButtonReservation/></div>
        </div>
        
      ))}
     
    </div>
  );
};

export default AllPriceList;
