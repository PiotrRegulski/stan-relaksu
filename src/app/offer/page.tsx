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
                  <p className="md:text-xl text-center font-bold md:px-3 md:py-4 font-[Lato]">
                    {offerItem.title}
                  </p>
                </div>
                <div className="flex justify-center">  <button>Kliknij i zobacz szczegóły</button></div>
               
              </Link>
            </div>
          ))}
        </section>
      </main>
    </>
  );
};

export default OfferPage;
