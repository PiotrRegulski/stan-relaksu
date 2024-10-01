"use client";
import React from "react";
import { useEffect, useState,useRef } from "react";
import { motion, useInView,} from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";
import PageHeader from "../homepage/PageHeader";
import Link from "next/link";

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
    alt: "Masaż twarzy Kobido z kinesiotapingiem",
    description:
      "Zdrowszy i promienny wygląd twarzy, spłycenie zmarszczek i bruzd mimicznych to jedne z wielu korzyści płynących z rytuału Kobido",
    linkDetails: "offer/masaz-kobido",
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
  // Dodaj więcej obrazów według potrzeb
];
const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Zmiana obrazu co 5 sekund
    return () => clearInterval(interval);
  }, []);

  const handleNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  const handlePrevImage =()=>{
    setCurrentIndex((nextIndex)=>(nextIndex-1+ images.length)% images.length);
  }
  const router = useRouter();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    
    <>
      <PageHeader id={"Popularne zabiegi"}>Popularne zabiegi</PageHeader>
      <motion.div className="flex justify-center items-center xl:h-[45rem] bg-secondary my-1"   ref={ref}  initial={{ y: 100, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 1, ease: "easeInOut"  }}>
        <div className="relative w-full h-[30rem] md:h-[35rem]  xl:h-[45rem] overflow-hidden ">
          {images.map((image, index) => (
            <div
              key={index}
              className={`carousel-item  absolute top-0 left-0 right-0 w-full h-full transition-shadow duration-1000 ${
                index === currentIndex
                  ? "visible opacity-100 "
                  : " invisible opacity-0 "
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="mx-auto my-auto object-cover "
              />
              <button className=" absolute top-52 xl:top-80 bottom-1/2 left-1  md:left-4  text-4xl  text-white hover:opacity-40" onClick={handlePrevImage}>
              <span className="flex justify-center items-center w-8 h-8 bg-black rounded-full ">{"<"}</span>  
              </button>


              <button
                className="absolute top-52 xl:top-80 bottom-1/2 right-1  md:right-4  text-4xl  text-white hover:opacity-40"
                onClick={handleNextImage}
              >
              <span className="flex justify-center items-center w-8 h-8 bg-black rounded-full ">{">"}</span>  
              </button>



              <div className="absolute bottom-0 lg:bottom-32 lg:left-14 right-0 bg-black bg-opacity-40 text-primary  p-2 w-full lg:w-1/2 text-center rounded">
                <div className=" mx-auto sm:mx-12 md:mx-12 xl:mx-12 my-4">
                  <p className="text-white lg:text-2xl xl:text-4xl font-serif tracking-wide md:text-left mb-2 xl:mb-4">
                    {image.alt}
                  </p>
                  <p className="text-white xl:text-2xl font-serif tracking-wide">
                    {image.description}
                  </p>
                </div>

                <div className=" my-6 ">
                  {" "}
                  <Link
                    key={index}
                    className="text-white xl:text-2xl font-serif tracking-widest hover:opacity-70  "
                    href={image.linkBooksy}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="text-sm sm:px-2 sm:font-bold font-semibold tracking-tight bg-primary text-black shadow-md shadow-white mr-2 py-2 px-1   sm:py-3 rounded  sm:mr-4">Zarezerwuj wizyte</span>
                  </Link>
                  <button
                    className="text-white xl:text-2xl font-serif tracking-widest hover:opacity-70  "
                    onClick={() => router.push(image.linkDetails)}
                  >
                    <span className="text-sm sm:px-2 bg-primary text-black shadow-md shadow-white tracking-tight py-2 px-1  sm:py-3 sm:font-bold font-semibold rounded">Dowiedz się więcej</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default Carousel;
