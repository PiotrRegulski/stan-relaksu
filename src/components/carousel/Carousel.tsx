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
    src: "/carousel/terapia-manualna-kolano-klawiki.jpg",
    alt: "Terapia manualna",
    description:
      "To specjalistyczne techniki mające na celu przywrócenie prawidłowego funkcjonowania układu ruchu, zmniejszenie sztywności i ograniczeń w zakresie ruchomości. ",
    linkDetails: "offer/terapia-manualna",
    linkBooksy:
      "https://booksy.com/pl-pl/257898_stan-relaksu-gabinet-terapii-manualnej-i-masazu_masaz_3_warszawa#ba_s=dl_1",
    clName:
      "text-white xl:text-2xl font-serif tracking-widest hover:opacity-70 hover:underline ",
  },
  {
    src: "/carousel/masaż-powięziowy.jpg",
    alt: "Masaż powięziowy",
    description:
      "To idealny wybór dla osób, które zmagają się z silnymi bólami i napięciami w obrębie ciała",
    linkDetails: "offer/masaz-powieziowy",
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
    linkDetails: "offer/masaz-kobido",
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
    linkDetails: "offer/terapia-manualna-w-bolach-zatok",
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
    linkDetails: "offer/masaz-sportowy",
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
    linkDetails: "offer/masaz-relaksacyjny-stanu-relaksu",
    linkBooksy:
      "https://booksy.com/pl-pl/257898_stan-relaksu-gabinet-terapii-manualnej-i-masazu_masaz_3_warszawa#ba_s=dl_1",
    clName:
      "text-white xl:text-2xl font-serif tracking-widest hover:opacity-70 hover:underline ",
  },
  // Dodaj więcej obrazów według potrzeb
];
const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 20000); // Zmiana obrazu co 8 sekund
    return () => clearInterval(interval);
  }, []);

  const handleNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  const handlePrevImage = () => {
    setCurrentIndex(
      (nextIndex) => (nextIndex - 1 + images.length) % images.length
    );
  };
  const router = useRouter();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <>
      <motion.div
        className="flex justify-center items-center  bg-secondary  "
        ref={ref}
        initial={{ y: -20, opacity: 0 }}
        animate={isInView ? { y: 1, opacity: 1 } : {}}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <div className="relative w-full h-[32rem] sm:h-[20rem] md:h-[15rem] lg:h-[20rem] xl:h-[40rem] 2xl:h-[50rem] overflow-hidden ">
          <AnimatePresence>
            {images.map(
              (image, index) =>
                index === currentIndex && (
                  <motion.div
                    key={index}
                    className="carousel-item absolute top-0 left-0 right-0 w-full h-full"
                    initial={{ opacity: 0 }}
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
                      className="mx-auto my-auto 2xl:object-cover "
                    />
                    <motion.div className="absolute bottom-20 md:bottom-44 lg:bottom-20 lg:left-5 xl:left-[1rem] xl:bottom-20 right-0  text-primary p-2 w-full text-center rounded ">
                      <div className="mx-auto sm:mx-12 md:mx-12  my-4 xl:w-2/3 2xl:w-1/2 ">
                        <div className=" text-left">
                        
                          <p
                            className={`${lato.className}  bg-black bg-opacity-25 text-white md:text-xl lg:text-2xl xl:text-3xl   md:text-left mb-2 xl:mb-4 text-left whitespace-nowrap inline-block`}
                          >
                            {image.alt}
                          </p>
                        </div>

                        <p
                          className={`${lato.className} bg-black bg-opacity-25 text-white text-left text-base md:text-lg lg:text-xl xl:text-xl 2xl:text-3xl    xl:mx-24 inline-block `}
                        >
                          {image.description}
                        </p>
                      </div>
                    </motion.div>
                    <div
                      className={`absolute bottom-0 left-0 right-0 my-6 flex justify-center gap-4 md:justify-center md:gap-4 `}
                    >
                      <Link
                        key={index}
                        className=" "
                        href={image.linkBooksy}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Zarezerwuj wizytę przez Booksy"
                      >
                        <ButtonMain>Zarezerwuj wizyte</ButtonMain>
                      </Link>
                      <ButtonMain
                        onClick={() => router.push(image.linkDetails)}
                        aria-label="Informacje o zabiegu"
                      >
                        {" "}
                        Informacje o zabiegu
                      </ButtonMain>
                    </div>
                  </motion.div>
                )
            )}
          </AnimatePresence>
          <button
            className="absolute top-52  xl:top-[45%] bottom-1/2 left-1 md:left-4 "
            onClick={handlePrevImage}
            aria-label="Poprzednii obraz" // Dodany atrybut aria-label
          >
            <div className="text-4xl flex items-center justify-center  h-12 w-12  rounded-full text-white pb-2 hover:border-2 border-white py-2 focus:bg-blue-700  ">
              <IoIosArrowBack />
            </div>
          </button>
          <button
            className="absolute top-52 xl:top-[45%] bottom-1/2 right-1 md:right-4   "
            onClick={handleNextImage}
            aria-label="Następny obraz" // Dodany atrybut aria-label
          >
            <div className=" text-4xl flex items-center justify-center  h-12 w-12 rounded-full text-white pb-2 hover:border-2 border-white py-2 ">
              <IoIosArrowForward />
            </div>
          </button>
        </div>
      </motion.div>
    </>
  );
};

export default Carousel;
