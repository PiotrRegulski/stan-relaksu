"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import ButtonMain from "../layout/ButtonMain";
import { useRouter } from "next/navigation";
import { OfferItem } from "@/data/OfferItem";

// Definicja typu dla elementów w tablicy OfferItem
interface OfferItemType {
  id: string;
  slug: string;
  title: string;
  cardTitle?: string;
  description?: string;
  contentFirst?: string;
  imageHeader?: string;
  image: string;
  imagedetail_1?:string;
  imagedetail_2?:string;
  imagedetail_3?:string;
  imagedetail_4?:string;
  imagedetail_5?:string;
  imagedetail_6?:string;
  imagedetailt_p1?:string;
  imagedetailt_p2?:string;
  // ... inne właściwości jeśli potrzebne
}

const getRandomOffers = (
  array: OfferItemType[],
  count: number,
  excludeSlug: string
): OfferItemType[] => {
  const filteredArray = array.filter((item) => item.slug !== excludeSlug);
  const shuffled = filteredArray.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const RandomOffers: React.FC<{ urlTitle: string }> = ({ urlTitle }) => {
  const [objects, setObjects] = useState<OfferItemType[]>([]);

  useEffect(() => {
    const randomObjects = getRandomOffers(OfferItem, 3, urlTitle); // Pobieramy trzy losowe obiekty
    setObjects(randomObjects);
  }, [urlTitle]);

  return (
    <div className=" container flex  flex-col lg:flex-col gap-4 ">
      {objects.length > 0 && (
        <>
          {objects.map((offerItem) => (
            <div
              key={offerItem.id}
              className="h-[20rem] w-3/4 mx-auto my-6 sm:h-[21rem] md:h-[30rem] lg:h-[20rem] xl:h-[25rem] 2xl:h-auto shadow-lg shadow-gray-400 animate-fadeIn rounded-xl transition-transform xl:hover duration-500 ease-in-out xl:hover:scale-[1.03] 2xl:w-[22rem] "
            >
              <Link href={`/oferta/${offerItem.slug} `}>
                <div className="relative h-[20rem] w-full sm:h-[21rem] md:h-[30rem] lg:h-[20rem] xl:h-[25rem] 2xl:h-[25rem]">
                  <Image
                    src={`/${offerItem.image}`}
                    alt={offerItem.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                 
                    className="rounded-lg object-cover"
                  />
                  <div className="absolute bottom-0 w-full rounded">
                    <div className="flex flex-col animate-fadeIn w-full p-2">
                      <div className="flex justify-center mt-2 w-full">
                        <h3 className="text-sm sm:text-base lg:text-lg xl:text-xl text-center font-medium bg-opacity-70 bg-gray-100 text-black border-white border-2 rounded-xl py-1 px-3">
                          {offerItem.cardTitle}
                        </h3>
                      </div>
                    </div>
                    <div className="flex justify-center items-center ">
                    <ButtonMain>Dowiedz się więcej</ButtonMain>
                  </div>
                  </div>
                
                </div>
              </Link>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default RandomOffers;
