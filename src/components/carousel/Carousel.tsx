"use client";
import React from "react";
import { useEffect, useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";
import PageHeader from "../homepage/PageHeader";
import Link from "next/link";
import { lato, Noto } from "../fonts";

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
    src: "/carousel/kobido-kinesiotaping.jpg",
    alt: " Kobido z kinesiotapingiem limfatycznym",
    description:
      "Zdrowszy i promienny wygląd twarzy, spłycenie zmarszczek i bruzd mimicznych to jedne z wielu korzyści płynących z rytuału Kobido",
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
      "Techniki manualne stosowane podczas terapii pomagają w odblokowaniu dróg oddechowych, poprawie krążenia krwi oraz zmniejszeniu napięcia mięśniowego w okolicy twarzy i głowy.",
    linkDetails: "offer/terapia-manualna-w-bolach-zatok",
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
    src: "/carousel/terapia-manualna-kolano-klawiki.jpg",
    alt: "Terapia manualna",
    description:
      "To specjalistyczne techniki mające na celu przywrócenie prawidłowego funkcjonowania układu ruchu, zmniejszenia sztywności i ograniczeń w zakresie ruchomości ",
    linkDetails: "offer/terapia-manualna",
    linkBooksy:
      "https://booksy.com/pl-pl/257898_stan-relaksu-gabinet-terapii-manualnej-i-masazu_masaz_3_warszawa#ba_s=dl_1",
    clName:
      "text-white xl:text-2xl font-serif tracking-widest hover:opacity-70 hover:underline ",
  },
  {
    src: "/carousel/masaż-tkanek-głebokich.jpg",
    alt: "Masaż tkanek głębokich",
    description:
      "Niezwykle skuteczna technika pracy z ciałem koncentrująca się na rozluźnieniu głębokich warstwach mięśni i tkanki powięziowej. ",
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
      "Przenieś się do pełnego stanu relaksu z masażem, który głęboko odpręży Twoje mięśnie, zdejmie napięcie z układu nerwowego zmniejszając uczucie stresu.  ",
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
      <PageHeader id={"Popularne zabiegi"}>Popularne zabiegi</PageHeader>
      <motion.div
        className="flex justify-center items-center xl:h-[45rem] bg-secondary my-1"
        ref={ref}
        initial={{ y: 100, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <div className="relative w-full h-[30rem] md:h-[35rem] xl:h-[45rem] overflow-hidden">
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
                      fill
                      className="mx-auto my-auto object-cover"
                    />
                    <motion.div className="absolute bottom-0 lg:bottom-10 lg:left-[5rem] right-0 bg-black bg-opacity-40 text-primary p-2 w-full lg:w-2/3 xl:w-1/2 text-center rounded">
                      <div className="mx-auto sm:mx-12 md:mx-12 xl:mx-12 my-4">
                        <p
                          className={`${Noto.className} text-white lg:text-2xl xl:text-4xl font-serif tracking-wide md:text-left mb-2 xl:mb-4`}
                        >
                          {image.alt}
                        </p>
                        <p
                          className={`${lato.className} text-white xl:text-2xl  tracking-wide`}
                        >
                          {image.description}
                        </p>
                      </div>
                      <div className={`${Noto.className} my-6`}>
                        <Link
                          key={index}
                          className=" "
                          href={image.linkBooksy}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button className="  font-bold text-lg  tracking-widest border-2 border-primary  hover:border-2  hover:border-white hover:bg-transparent  bg-primary text-black hover:text-white shadow-md hover:shadow-none shadow-white mr-2   rounded sm:mr-4 py-2 px-3">
                            Zarezerwuj wizyte
                          </button>
                        </Link>
                        <button
                          className="  font-bold text-lg  tracking-widest border-2 border-primary hover:border-2  hover:border-white hover:bg-transparent  bg-primary text-black hover:text-white shadow-md hover:shadow-none shadow-white mr-2   rounded sm:mr-4 py-2 px-3 "
                          onClick={() => router.push(image.linkDetails)}
                        >
                          Dowiedz się więcej
                        </button>
                      </div>
                    </motion.div>
                  </motion.div>
                )
            )}
          </AnimatePresence>
          <button
            className="absolute top-52 xl:top-[23rem] bottom-1/2 left-1 md:left-4 "
            onClick={handlePrevImage}
          >
            <div className="text-4xl flex items-center justify-center w-12 h-12  rounded-full text-white pb-2 hover:opacity-50">
              {"<"}
            </div>
          </button>
          <button
            className="absolute top-52 xl:top-[23rem] bottom-1/2 right-1 md:right-4   "
            onClick={handleNextImage}
          >
            <div className=" text-4xl flex items-center justify-center w-12 h-12  rounded-full text-white pb-2 hover:opacity-50 ">
              {">"}
            </div>
          </button>
        </div>
      </motion.div>
    </>
  );
};

export default Carousel;
