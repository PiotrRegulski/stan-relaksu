import React from "react";
import { OfferItem } from "@/data/OfferItem";
import Link from "next/link";
import Image from "next/image";
interface OfferProps {
  // Tutaj możesz dodać właściwości, jeśli są potrzebne
}

const OfferPage: React.FC<OfferProps> = () => {
  return (
    <>
      <header
        id="offer-header"
        className=" grid grid-cols-1 gap-2 place-items-center  sm:h-32 bg-cover bg-center "
        style={{ backgroundImage: "url('/ofertabg.png')" }}
      >
        <h1 className=" px-4 py-3 md:text-4xl text-xl  text-center font-bold uppercase text-gray-600">
          Oferta
        </h1>
      </header>
      <main className="flex justify-center sm:mt-12">
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {OfferItem.map((offerItem) => (
            <div key={offerItem.id} className="mx-4 my-6 ">
              <Link href={`/offer/${offerItem.slug}`}>
                <Image
                  src={`/${offerItem.image}`}
                  alt={offerItem.title}
                  width={400}
                  height={400}
                  className="rounded"
                />
                <p className="text-xl text-center font-bold px-3 py-4">{offerItem.title}</p>
              </Link>
            </div>
          ))}
        </section>
      </main>
    </>
  );
};

export default OfferPage;
