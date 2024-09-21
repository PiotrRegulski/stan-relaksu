"use client";
import React from "react";
import { useState, useEffect } from "react";
import CommentsItem from "./CommentsItem";
const commentsData = [
  {
    comment:
      "Polecam każdemu! Pani Kinga ma wielką wiedzę z zakresu fizjoterapii i nie tylko. To osoba, która cały czas się uczy, doszkala. Do klientów podchodzi bardzo indywidualnie, potrafi słuchać i analizować tak, aby pomóc jak najlepiej. Drenaż limfatyczny w Warszawie tylko u niej! Niesamowicie mi pomogła przy chorobie nerek i obrzękach. Każdy jest w rękach tej Pani bezpieczny, a usługi odbywają się w profesjonalnej, miłej atmosferze.",
    author: "Victoria",
    source: "stanrelaksu.booksy.com",
    service: "Terapia manualna",
  },
  {
    comment:
      "Profesjonalnie i sympatycznie. Miejsce pełne uroku, w którym można się zrelaksować i poczuć naprawdę komfortowo. Kinga jest skierowaną na potrzeby pacjenta profesjonalistką, a równocześnie świetną rozmówczynią (ale umie też milczeć) ;)",
    author: "Dominika",

    source: "stanrelaksu.booksy.com",
    service: "Terapia manualna",
  },
  {
    comment:
      "Polecam każdemu, Pani Kinga ma ogromną  wiedzę. Zabiegi wykonane profesjonalnie w cudownej atmosferze. Korzystam regularnie i będę wracać :)",
    author: "Katarzyna",
    source: "stanrelaksu.booksy.com",
    service: "Terapia manualna",
  },
  {
    comment:
      "Polecam fizjoterapię u Kingi. Trafiłem kiedyś z kontuzją i teraz regularnie pojawiam się na przeglądach. Duża wiedza merytoryczna i profesjonalizm. Mimo tego że czasem boli (masaż sportowy) wizyta mija szybko i w miłej atmosferze. Na pewno tu wrócę :)",
    author: "Marek",
    source: "stanrelaksu.booksy.com",
    service: "Masaż powięziowy",
  },
];
const Comments = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);
  useEffect(() => {
    const interval = setInterval(() => {
      setPrevIndex(currentIndex);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % commentsData.length);
    }, 5000); // Zmiana obrazu co 5 sekund
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className=" flex flex-col justify-center items-center bg-secondary w-full h-[30rem]">
      <div className="mt-24 ">
        <p className=" 2xl:text-4xl font-serif ">Opinie</p>
      </div>
      <div className=" flex justify-between w-full text-4xl font-bold  px-48">
        <span> {"<"} </span>
        <span> {">"} </span>
      </div>
      <div className=" relative w-full h-full">
        {commentsData.map((comment: any, index: number) => (
          <CommentsItem
            key={index}
            className={`absolute top-0 left-0  h-full transition-opacity duration-500 border-4 ${
              index === currentIndex
                ? "animate-slideLeft"
                : index === prevIndex
                ? "animate-slideOutLeft"
                : "invisible opacity-0"
            }`}
            comment={comment.comment}
            author={comment.author}
            source={comment.source}
            service={comment.service}
          />
        ))}
      </div>
    </div>
  );
};

export default Comments;
