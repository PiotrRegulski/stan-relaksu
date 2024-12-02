"use client";
import React from "react";
import { useEffect, useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { lato, Noto } from "../fonts";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import ButtonMain from "../layout/ButtonMain";

interface ImageData {
  src: string;
  alt: string;
  description: string;
  linkDetails: string;
  linkBooksy: string;
  clName: string;
}
const images: ImageData[] = [
  {
    src: "/carousel/masaż-powięziowy.jpg",
    alt: "Masaż powięziowy",
    description:
      "To idealny wybór dla osób, które zmagają się z silnymi bólami i napięciami w obrębie ciała",
    linkDetails: "oferta/masaz-powieziowy",
    linkBooksy:
      "https://booksy.com/pl-pl/257898_stan-relaksu-gabinet-terapii-manualnej-i-masazu_masaz_3_warszawa#ba_s=dl_1",
    clName:
      "text-white xl:text-2xl font-serif tracking-widest hover:opacity-70 hover:underline ",
  },
  {
    src: "/carousel/terapia-manualna-kolano-klawiki.jpg",
    alt: "Terapia manualna",
    description:
      "To specjalistyczne techniki mające na celu przywrócenie prawidłowego funkcjonowania układu ruchu, zmniejszenie sztywności i ograniczeń w zakresie ruchomości. ",
    linkDetails: "oferta/terapia-manualna",
    linkBooksy:
      "https://booksy.com/pl-pl/257898_stan-relaksu-gabinet-terapii-manualnej-i-masazu_masaz_3_warszawa#ba_s=dl_1",
    clName:
      "text-white xl:text-2xl font-serif tracking-widest hover:opacity-70 hover:underline ",
  },
 
  {
    src: "/carousel/kobido-kinesiotaping.jpg",
    alt: " Kobido z kinesiotapingiem limfatycznym",
    description:
      "Zdrowszy i promienny wygląd twarzy, spłycenie zmarszczek oraz bruzd mimicznych to jedne z wielu korzyści płynących z rytuału Kobido.",
    linkDetails: "oferta/masaz-kobido",
    linkBooksy:
      "https://booksy.com/pl-pl/257898_stan-relaksu-gabinet-terapii-manualnej-i-masazu_masaz_3_warszawa#ba_s=dl_1",
    clName:
      "text-white xl:text-2xl font-serif tracking-widest hover:opacity-70 hover:underline ",
  },
  {
    src: "/terapia-manualna-zatok/terapia-zatok-cover.jpg",
    alt: "Terapia manualna w bólach zatok ",
    description:
      "Techniki manualne stosowane podczas terapii pomagają w odblokowaniu dróg oddechowych, poprawiają krążenie krwi oraz zmniejszają napięcie mięśniowe w okolicy twarzy i głowy.",
    linkDetails: "oferta/terapia-manualna-w-bolach-zatok",
    linkBooksy:
      "https://booksy.com/pl-pl/257898_stan-relaksu-gabinet-terapii-manualnej-i-masazu_masaz_3_warszawa#ba_s=dl_1",
    clName:
      "text-white xl:text-2xl font-serif tracking-widest hover:opacity-70 hover:underline ",
  },

  {
    src: "/carousel/masaż-tkanek-głebokich.jpg",
    alt: "Masaż tkanek głębokich",
    description:
      "Niezwykle skuteczna technika pracy z ciałem, koncentrująca się na rozluźnieniu głębokich warstw mięśni i tkanki powięziowej. ",
    linkDetails: "oferta/masaz-tkanek-głebokich",
    linkBooksy:
      "https://booksy.com/pl-pl/257898_stan-relaksu-gabinet-terapii-manualnej-i-masazu_masaz_3_warszawa#ba_s=dl_1",
    clName:
      "text-white xl:text-2xl font-serif tracking-widest hover:opacity-70 hover:underline ",
  },
  {
    src: "/masaz-relaksacyjny/masaz-relaksacyjny-cover-top.jpg",
    alt: "Masaż relaksacyjny Stanu Relaksu",
    description:
      "Przenieś się do pełnego stanu relaksu z masażem, który głęboko odpręży Twoje mięśnie i zdejmie napięcie z układu nerwowego, zmniejszając uczucie stresu. ",
    linkDetails: "oferta/masaz-relaksacyjny-stanu-relaksu",
    linkBooksy:
      "https://booksy.com/pl-pl/257898_stan-relaksu-gabinet-terapii-manualnej-i-masazu_masaz_3_warszawa#ba_s=dl_1",
    clName:
      "text-white xl:text-2xl font-serif tracking-widest hover:opacity-70 hover:underline ",
  },
];
const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const carouselRef = useRef(null);
  const clearExistingInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };
  const startNewInterval = () => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
  };

  useEffect(() => {
    const node = carouselRef.current;
    //monitoruje widocznosc elementu
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startNewInterval();
        } else {
          clearExistingInterval();
        }
      },
      { threshold: 0.1 } // 0.1 oznacza, że 10% elementu musi być widoczne
    );
    if (node) {
      observer.observe(node);
    }
    return () => {
      if (node) {
        observer.unobserve(node);
      }
      clearExistingInterval();
    };
  }, []);

  const handleNextImage = () => {
    clearExistingInterval();
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    startNewInterval();
  };
  const handlePrevImage = () => {
    clearExistingInterval();
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
    startNewInterval();
  };
  const router = useRouter();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  return (
    <div
      className="flex justify-center items-center m-0 p-0 lg:mt-[7rem]"
      ref={ref}
      
      
    >
      <div className="relative w-full h-[32rem] sm:h-screen md:h-[50vh] lg:h-[30rem] xl:h-[34rem] 2xl:h-[40rem] 2xl:w-full overflow-hidden">
        <AnimatePresence>
          {images.map(
            (image, index) =>
              index === currentIndex && (
                <motion.div
                  key={index}
                  className="carousel-item absolute top-0 left-0 right-0 w-full h-full"
                  initial={{ opacity: 0.2 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    sizes="(max-width: 600px) 100vw, 50vw"
                    fill
                    priority={true}
                    className="mx-auto object-cover"
                  />
                  <motion.div className="absolute bottom-0 sm:bottom-0 md:bottom-2 lg:bottom-5 lg:left-5 xl:left-0 xl:bottom-5 right-0 2xl:bottom-10 2xl:left-0 p-2 w-full text-center rounded">
                    <div className="flex flex-col justify-center items-center xl:w-full 2xl:w-full bg-black bg-opacity-15">
                      <div className="flex flex-col text-center text-white">
                        <p
                          className={`${lato.className} text-lg xl:text-2xl 2xl:text-2xl font-bold`}
                        >
                          {image.alt}
                        </p>
                        <p
                          className={`${lato.className} text-base xl:text-xl 2xl:text-xl font-medium sm:px-[5rem] md:px-[7rem] lg:px-[14rem] xl:px-[15rem] 2xl:px-[20rem]`}
                        >
                          {image.description}
                        </p>
                        <div
                          className={`my-2 flex justify-center gap-4 md:justify-center md:gap-4`}
                        >
                          <Link
                            key={index}
                            href={image.linkBooksy}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Zarezerwuj wizytę przez Booksy"
                          >
                            <ButtonMain>Zarezerwuj wizytę</ButtonMain>
                          </Link>
                          <ButtonMain
                            onClick={() => router.push(image.linkDetails)}
                            aria-label="Informacje o zabiegu"
                          >
                            Informacje o zabiegu
                          </ButtonMain>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )
          )}
        </AnimatePresence>
        <button
          className="absolute top-52 sm:top-[45%] xl:top-[45%] bottom-1/2 left-1 md:left-4"
          onClick={handlePrevImage}
          aria-label="Poprzedni obraz"
        >
          <div className="text-4xl flex items-center justify-center h-12 w-12 rounded-full text-white pb-2 hover:border-2 border-white py-2">
            <IoIosArrowBack />
          </div>
        </button>
        <button
          className="absolute top-52 sm:top-[45%] xl:top-[45%] bottom-1/2 right-1 md:right-4"
          onClick={handleNextImage}
          aria-label="Następny obraz"
        >
          <div className="text-4xl flex items-center justify-center h-12 w-12 rounded-full text-white pb-2 hover:border-2 border-white py-2">
            <IoIosArrowForward />
          </div>
        </button>
      </div>
    </div>
  );
};
export default Carousel;
