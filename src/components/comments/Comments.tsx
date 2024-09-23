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
    comment:"Polecam każdemu, Pani Kinga ma ogromną  wiedzę. Zabiegi wykonane profesjonalnie w cudownej atmosferze. Korzystam regularnie i będę wracać :)",
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
  {
    comment:
      "Masaż Kobido wykonany przez przesympatyczną Panią Kingę był wyjątkowym doświadczeniem. Profesjonalne podejście i skuteczne techniki sprawiły, że poczułam się niesamowicie odprężona. Moja skóra jest teraz bardziej napięta i promienna. Gorąco polecam ten masaż każdemu, kto szuka naturalnego sposobu na poprawę wyglądu. Na pewno wrócę! Pani Kingo, jeszcze raz dziękuję.",
    author: "Gosia",
    source: "stanrelaksu.booksy.com",
    service: "Masaż twarzy Kobido z kinesiotapingiem",
  },
  {
    comment:"Pełen profesjonalizm , zdecydowanie polecam. Z przyjemnością będe tu wracać.",
    author: "Marta",
    source: "stanrelaksu.booksy.com",
    service: "Masaż twarzy Kobido z kinesiotapingiem",
  },
  {
    comment:"Daję 10 gwiazdek :) Polecam z całego serca. Czuję, że już po pierwszej wizycie zeszły moje napięcia. Kinga to wspaniała osoba z dużą wiedzą. Na pewno będę wracać zarówno w razie bólowej potrzeby czy po prostu w ramach relaksu. Myślę, że masaż w tym miejscu to też świetna opcja na prezent.Gabinet jest piękny, w spokojnej okolicy ze świetnym ogrodem i studiem jogi za ścianą. W łazience są wszystkie niezbędne kobiecie akcesoria. Poczułam się zrelaksowana i zaopiekowana na 200%",
    author: "Aleksandra",
    source: "stanrelaksu.booksy.com",
    service: "Masaż relaksacyjny",
  },
];
const Comments = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);
  useEffect(() => {
    const interval = setInterval(() => {
      setPrevIndex(currentIndex);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % commentsData.length);
    }, 8000); // Zmiana obrazu co 8 sekund
    return () => clearInterval(interval);
  }, [currentIndex]);


  

  const handleNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % commentsData.length);
  };
  const handlePrevImage =()=>{
    setCurrentIndex((nextIndex)=>(nextIndex-1+ commentsData.length)% commentsData.length);
  }

  return (
    <div className=" flex flex-col justify-center items-center bg-secondary w-full h-[35rem] sm:h-[30rem] md:h-[30rem] lg:h-[30rem] xl:h-[35rem]">
      <div className="mt-24 ">
        <p className=" text-2xl 2xl:text-4xl font-serif ">Opinie</p>
      </div>
      <div className=" flex justify-between w-full text-4xl font-bold px-4 lg:px-48">
        <button onClick={handlePrevImage} className="opacity-100 hover:opacity-40 hover:shadow-lg"> {"<"} </button>
        <button onClick={handleNextImage} className="opacity-100 hover:opacity-40 hover:shadow-lg"> {">"} </button>
      </div>
      <div className=" relative w-full h-full">
        {commentsData.map((comment: any, index: number) => (
          <CommentsItem
            key={index}
            className={`absolute top-0 left-0  h-full transition-opacity duration-500  ${
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
