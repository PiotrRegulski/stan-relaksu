"use client";
import React from "react";
import { useState, useEffect, useRef } from "react";
import CommentsItem from "./CommentsItem";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { Noto } from "../fonts";
import { motion, useInView } from "framer-motion";

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
  {
    comment:
      "Masaż Kobido wykonany przez przesympatyczną Panią Kingę był wyjątkowym doświadczeniem. Profesjonalne podejście i skuteczne techniki sprawiły, że poczułam się niesamowicie odprężona. Moja skóra jest teraz bardziej napięta i promienna. Gorąco polecam ten masaż każdemu, kto szuka naturalnego sposobu na poprawę wyglądu. Na pewno wrócę! Pani Kingo, jeszcze raz dziękuję.",
    author: "Gosia",
    source: "stanrelaksu.booksy.com",
    service: "Masaż twarzy Kobido z kinesiotapingiem",
  },
  {
    comment:
      "Pełen profesjonalizm, zdecydowanie polecam. Z przyjemnością będe tu wracać.",
    author: "Marta",
    source: "stanrelaksu.booksy.com",
    service: "Masaż twarzy Kobido z kinesiotapingiem",
  },
  {
    comment:
      "Daję 10 gwiazdek :) Polecam z całego serca. Czuję, że już po pierwszej wizycie zeszły moje napięcia. Kinga to wspaniała osoba z dużą wiedzą. Na pewno będę wracać zarówno w razie bólowej potrzeby, czy po prostu w ramach relaksu. Myślę, że masaż w tym miejscu to też świetna opcja na prezent. Gabinet jest piękny, w spokojnej okolicy ze świetnym ogrodem i studiem jogi za ścianą. W łazience są wszystkie niezbędne kobiecie akcesoria. Poczułam się zrelaksowana i zaopiekowana na 200%",
    author: "Aleksandra",
    source: "stanrelaksu.booksy.com",
    service: "Masaż relaksacyjny",
  },
];
const Comments = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
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
  const handlePrevImage = () => {
    setCurrentIndex(
      (nextIndex) => (nextIndex - 1 + commentsData.length) % commentsData.length
    );
  };

  return (
    <motion.div
      className="relative flex flex-col justify-center items-center bg-secondary w-full h-[27rem] sm:h-[27rem] md:h-[27rem] lg:h-[27rem] xl:h-[26rem] "
      initial={{ x: 2, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 5, ease: "easeInOut", type: "spring" }}
    >
      <button
        onClick={handlePrevImage}
        className="absolute top-[48%] left-0 lg:left-20 transform -translate-y-1/2 opacity-30 lg:opacity-90 hover:opacity-40 text-gray-300 p-2 z-10 rounded-full"
         aria-label="Wróć do poprzedniej opinii"
      >
        <IoIosArrowBack className="w-12 h-12" />
      </button>
      <button
        onClick={handleNextImage}
        className="absolute top-[48%] right-0 lg:right-20 transform -translate-y-1/2 opacity-30 lg:opacity-90 hover:opacity-40 text-gray-300 p-2 z-10 rounded-full"
         aria-label="Przejdź do następnej  opinii"
      >
        <IoIosArrowForward className="w-12 h-12" />
      </button>
      <div
        ref={ref}
        className={`${Noto.className} font-medium text-2xl 2xl:text-4xl mt-12`}
      >
        Opinie
      </div>
      <div className="relative w-full h-full mt-2 flex flex-col justify-center items-center">
        <div>
          {commentsData.map((comment: any, index: number) => (
            <CommentsItem
              key={index}
              className={`absolute top-8 left-0 h-full w-full transition-opacity duration-500 ${
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
    </motion.div>
  );
};

export default Comments;
