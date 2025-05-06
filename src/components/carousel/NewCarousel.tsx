"use client";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ButtonMain from "../layout/ButtonMain";
import { NextArrow, PrevArrow } from "@/components/carousel/Arrows";

interface ImageData {
  src: string;
  alt: string;
  description: string;
  linkDetails: string;
  linkBooksy: string;
  clName: string;
}

const NewCarousel = () => {
  const router = useRouter();
  const settings = {
    dots: true,
    dotsClass: "slick-dots custom-dots",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const images: ImageData[] = [
    {
      src: "/carousel/masaz-powieziowy-top.webp",
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

  return (
    <div className="mx-auto w-full xl:container bg-white rounded-xl mb-1  ">
      {" "}
      <div className="relative h-[540px] lg:h-[540px] xl:h-[41rem]  short-height:h-[340px]   animate-fadeIn   bg-white rounded-xl ">
        {" "}
        <Slider {...settings} className="">
          {images.map((image, index) => (
            <div
              key={index}
              className=" relative h-[500px]  lg:h-[500px] xl:h-[38rem]  short-height:h-[300px] rounded-xl border-4 border-white"
            >
              <Image
                src={image.src}
                alt={image.alt}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw"
                fill
                className="object-cover rounded-xl"
                priority={index === 0} // Tylko pierwszy obraz ma priorytet
                quality={100}
              />

              <div className="absolute bottom-0  w-full h-full text-center rounded  z-20 ">
                <div className="flex flex-col justify-end items-center xl:w-full 2xl:w-full h-full">
                  <div className="flex flex-col text-center text-white sm:w-2/3 md:w-1/2 xl:w-1/2 ">
                    <p className="text-xl">Popularne zabiegi</p>
                    <h3 className="text-lg sm:text-xl xl:text-2xl 2xl:text-4xl font-semibold rounded-xl mb-2">
                      {image.alt}
                    </h3>
                    <p className=" my-2  text-base sm:text-base lg:text-base xl:text-xl 2xl:text-2xl font-normal rounded-xl`">
                      {image.description}
                    </p>
                    <div className="my-2 flex justify-center gap-4 md:justify-center md:gap-4">
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
    </div>
  );
};

export default NewCarousel;
