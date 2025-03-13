"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ImageCard from "./ImageCard";
import { IoIosInformationCircleOutline } from "react-icons/io";
import Image from "next/image";
const imgURLs = [
  {
    src: "/masaz-powieziowy/masaż-powięziowy-t.jpg",
    label: "Terapia w bólach głowy",
    caption: "Terapia w bólach głowy",
    marginTop: "2px",
    href: "/oferta/terapia-manualna-w-bolach-zatok",
    callToAction: "Zastosowanie odpowiednich technik pozwala na zmniejszenie napięcia mięśniowego w okolicach twarzy i głowy, co przekłada się na redukcję bólu",
  },

  {
    src: "/terapia-manualna/terapia-manualna-kolano-klawiki-second.jpg",
    label: "Terapia manualna kolana",
    caption: "Terapia manualna kolana",
    marginTop: "60px",
    href: "/oferta/terapia-manualna",
    callToAction: "Głównym celem jest przywrócenie prawidłowego funkcjonowania układu ruchu, zmniejszenie sztywności i ograniczeń w zakresie ruchomości",
  },
  {
    src: "/karuzelaOmnie/terapia-manulana-barku.jpg",
    label: "Terapia manualna barku",
    caption: "Terapia manualna barku",
    marginTop: "40px",
    href: "/oferta/terapia-manualna",
    callToAction: "Ogromną zaletą terapii manualnej jest indywidualne podejście do każdego problemu oraz możliwość wyboru odpowiedniej terapii z szerokiego zakresu technik.",
  },
  {
    src: "/karuzelaOmnie/bole-i-sztywnosci-karku.jpg",
    label: "Bóle i sztywności karku",
    caption: "Bóle i sztywności karku",
    marginTop: "60px",
    href: "/oferta/terapia-manualna",
    callToAction: " Po terapii manualnej możesz zauważyć redukcję bólu, lepszą ruchomość i elastyczność tkanek",
   
  },
  {
    src: "/terapia-manualna/terapia-manualna-kolano-last.jpg",
    label: "Bóle kręgosłupa",
    caption: "Bóle kręgosłupa",
    marginTop: "2px",
    href: "/oferta/terapia-manualna",
    callToAction: "Terapia manualna pomaga pozbyć się bólu i sztywności kręgosłupa, pleców, karku lub szyi.",
  },
];

const ImageToOffersShort = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <>
      <div className="flex lg:my-4 flex-col md:flex-row justify-around  bg-gradient-to-r from-secondary from-10% via-white via-30% to-secondary to-90% py-4 w-full  md:px-40">
        <div className="relative w-full md:w-3/4 h-[40rem]  hidden md:flex justify-center">
          {" "}
          <Image
            src="/Kinga.PNG"
            alt="Kinga Wołoszka naturoterapeutka w Gabinecie terapi manualnej Stan Relaksu"
            fill
            priority={false}
            className="object-contain w-full h-full "
            sizes="(max-width: 600px) 100vw, 50vw"
          />
        </div>
        <div className=" flex  w-full justify-center items-center py-20">
          {" "}
          <h2 className="text-center  text-pretty font-bold px-3  text-lg lg:text-xl  py-4 ">
            <span className="text-xl  lg:text-2xl font-bold">
              Podpowiem Ci jak możesz pracować ze swoim ciałem
            </span>
            <br></br>
            <span className="text-lg lg:text-xl  ">
              poprzez ćwiczenia czy oddech{" "}
            </span>
            <br></br>
            <span className="text-xl lg:text-2xl font-bold">
              {" "}
              dla poprawy Twojego dobrostanu.
            </span>
          </h2>
        </div>
      </div>

      <div
        ref={ref}
        className="flex flex-col xl:justify-center xl:items-center py-20 px-4 xl:px-0 bg-gradient-to-r from-gray-200 from-10% via-white via-30% to-gray-100 to-90%  overflow-x-auto scrollbar scrollbar-thumb-red-500 scrollbar-track-black outline-none scrollbar-thin scrollbar-webkit  "
      >
        <div className="flex gap-4">
          {" "}
          {imgURLs.map((imgUrl, index) => (
            <div
              key={imgUrl.label}
              className="relative flex shrink-0 w-[18rem] h-[23rem]  sm:w-[14rem] sm:h-[25rem] md:w-[14rem] md:h-[20rem] xl:w-[15rem] xl:h-[24rem] overflow-hidden shadow-xl shadow-gray-300  "
              style={{ marginTop: imgUrl.marginTop }}
            >
              <motion.div className="absolute top-0 right-0 z-10 text-white m-2 text-4xl">
                <IoIosInformationCircleOutline />
              </motion.div>
              <motion.div
                className="w-full h-full border-4 border-white relative group "
                whileHover={{ scale: 1.1 }}
                initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : {}}
                transition={{ type: "spring", duration: 2, ease: "backInOut" }}
              >
                <ImageCard
                  key={imgUrl.label}
                  href={imgUrl.href}
                  src={imgUrl.src}
                  alt={imgUrl.label}
                />
                <motion.div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40 text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out cursor-pointer pointer-events-none px-6">
                  {imgUrl.callToAction}
                  <p className="text-xs mt-2">Dowiedz sie więcej</p>
                </motion.div>
              </motion.div>
              <motion.div
                initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : {}}
                transition={{ type: "spring", duration: 2, ease: "backInOut" }}
                className="absolute bottom-0 w-full font-semibold  bg-secondary bg-opacity-70  text-black text-center py-2 px-3"
              >
                {imgUrl.caption}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ImageToOffersShort;
