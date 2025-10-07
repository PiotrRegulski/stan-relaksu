"use client";
import React from "react";
import ButtonMain from "../layout/ButtonMain";
import Link from "next/link"
const TherapeuticPlace = () => {
  return (
    <div className="relative lg:container mx-auto ">
      {/* Efekt paralaksy */}
      <div
        className="absolute inset-0 bg-center bg-scroll rounded-lg"
        style={{ backgroundImage: "url('/terapeuticPlace.jpg')" }} // Podmień na ścieżkę do swojego obrazu
      ></div>

      {/* Tekst nachodzący na obrazek */}
      <div className="relative flex items-center justify-center min-h-[1/2 vh] bg-white bg-opacity-80 rounded-lg shadow-lg p-8 text-center mx-auto lg:container">
        <div className="p-4">
          <h1 className="text-4xl font-bold text-blue-700">
            Terapeutyczne miejsce dla ciała stworzone z myślą o Tobie
          </h1>
          <p className="text-lg text-gray-700 mt-4">
            Osobie, która chce zadbać o swoje zdrowie, zwolnić i poczuć się
            lepiej.
          </p>
          <div className="flex justify-center w-full lg:justify-center items-center">
          <Link href="/omnie" aria-label="Link do strony o mnie">
            <ButtonMain>Dowiedz się więcej</ButtonMain>
          </Link>
        </div>
          
        </div>
      </div>
    </div>
  );
};

export default TherapeuticPlace;
