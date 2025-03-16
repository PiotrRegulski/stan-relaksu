"use client";
import dynamic from "next/dynamic";

import Image from "next/image";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ButtonMain from "../layout/ButtonMain";
import { lato } from "../fonts";
import { NextArrow, PrevArrow } from "@/components/carousel/Arrows";
import { useMemo } from "react";
const Slider = dynamic(() => import("react-slick"), { ssr: false });
interface ImageData {
  src: string;
  smallImage:string;
  alt: string;
  description: string;
  linkDetails: string;
  linkBooksy: string;
  clName: string;
}

const NewCarousel = () => {
  const router = useRouter();
  const settings = useMemo(
    () => ({
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 6000,
      arrows: true,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
    }),
    []
  );

  const images: ImageData[] = useMemo(
    () => [
      {
        src: "/carousel/masaz-powieziowy-top.webp",
        smallImage:"/carousel/masaz-powieziowy-top-small.webp",
        alt: "Masaż powięziowy",
        description:
          "Idealny wybór dla osób, które zmagają się z silnymi bólami i napięciami w obrębie ciała",
        linkDetails: "oferta/masaz-powieziowy",
        linkBooksy:
          "https://booksy.com/pl-pl/257898_stan-relaksu-gabinet-terapii-manualnej-i-masazu_masaz_3_warszawa#ba_s=dl_1",
        clName:
          "text-white xl:text-2xl font-serif tracking-widest hover:opacity-70 hover:underline ",
      },
      {
        src: "/carousel/terapia-manualna-top.webp",
        smallImage:"/carousel/masaz-powieziowy-top-small.webp",
        alt: "Terapia manualna",
        description:
          "Specjalistyczne techniki mające na celu przywrócenie prawidłowego funkcjonowania układu ruchu, zmniejszenie sztywności i ograniczeń w zakresie ruchomości. ",
        linkDetails: "oferta/terapia-manualna",
        linkBooksy:
          "https://booksy.com/pl-pl/257898_stan-relaksu-gabinet-terapii-manualnej-i-masazu_masaz_3_warszawa#ba_s=dl_1",
        clName:
          "text-white xl:text-2xl font-serif tracking-widest hover:opacity-70 hover:underline ",
      },

      {
        src: "/carousel/masaz-kobido-top.webp",
        smallImage:"/carousel/masaz-powieziowy-top-small.webp",
        alt: "Kobido z kinesiotapingiem limfatycznym",
        description:
          "Zdrowszy i promienny wygląd twarzy, spłycenie zmarszczek oraz bruzd mimicznych to jedne z wielu korzyści płynących z rytuału Kobido.",
        linkDetails: "oferta/masaz-kobido",
        linkBooksy:
          "https://booksy.com/pl-pl/257898_stan-relaksu-gabinet-terapii-manualnej-i-masazu_masaz_3_warszawa#ba_s=dl_1",
        clName:
          "text-white xl:text-2xl font-serif tracking-widest hover:opacity-70 hover:underline ",
      },
      {
        src: "/carousel/terapia-manualna-zatok-top.webp",
        smallImage:"/carousel/masaz-powieziowy-top-small.webp",
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
        src: "/carousel/masaz-tkanek-glebokich-top.webp",
        smallImage:"/carousel/masaz-powieziowy-top-small.webp",
        alt: "Masaż tkanek głębokich",
        description:
          "Niezwykle skuteczna technika pracy z ciałem, koncentrująca się na rozluźnieniu głębokich warstw mięśni i tkanki powięziowej. ",
        linkDetails: "oferta/masaz-tkanek-glebokich",
        linkBooksy:
          "https://booksy.com/pl-pl/257898_stan-relaksu-gabinet-terapii-manualnej-i-masazu_masaz_3_warszawa#ba_s=dl_1",
        clName:
          "text-white xl:text-2xl font-serif tracking-widest hover:opacity-70 hover:underline ",
      },
      {
        src: "/carousel/masaz-relaksacyjny-top.webp",
        smallImage:"/carousel/masaz-powieziowy-top-small.webp",
        alt: "Masaż relaksacyjny Stanu Relaksu",
        description:
          "Przenieś się do pełnego stanu relaksu z masażem, który głęboko odpręży Twoje mięśnie i zdejmie napięcie z układu nerwowego, zmniejszając uczucie stresu. ",
        linkDetails: "oferta/masaz-relaksacyjny-stanu-relaksu",
        linkBooksy:
          "https://booksy.com/pl-pl/257898_stan-relaksu-gabinet-terapii-manualnej-i-masazu_masaz_3_warszawa#ba_s=dl_1",
        clName:
          "text-white xl:text-2xl font-serif tracking-widest hover:opacity-70 hover:underline ",
      },
    ],
    []
  );

  return (
    <div className="relative h-[540px] lg:h-[540px] xl:h-[610px] short-height:h-[340px] ">
      {" "}
      <Slider {...settings}>
        {images.map((image, index) => (
          <div
            key={index}
            className=" relative h-[500px]  lg:h-[500px] xl:h-[600px]  short-height:h-[300px] animate-fadeIn w-screen "
          >
            <Image
              src={image.src}
              alt={image.alt}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw"
            
              fill
              priority
              className="object-cover"
              quality={65}
            />

            <div className="absolute bottom-0  w-full h-full text-center rounded  bg-black bg-opacity-20 z-20 ">
              <div className="flex flex-col justify-end items-center xl:w-full 2xl:w-full h-full">
                <div className="flex flex-col text-center text-white sm:w-2/3 md:w-1/2 xl:w-1/2 ">
                  <p className="">Popularne zabiegi</p>
                  <h3
                    className={`${lato.className} text-lg sm:text-xl xl:text-2xl 2xl:text-4xl font-semibold rounded-xl mb-2`}
                  >
                    {image.alt}
                  </h3>
                  <p
                    className={`${lato.className} my-2  text-base sm:text-base lg:text-base xl:text-xl 2xl:text-2xl font-normal rounded-xl`}
                  >
                    {image.description}
                  </p>
                  <div
                    className={`my-2 flex justify-center gap-4 md:justify-center md:gap-4 `}
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
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default NewCarousel;
