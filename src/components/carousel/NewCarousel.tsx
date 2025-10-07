"use client";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ButtonMain from "../layout/ButtonMain";
// import { NextArrow, PrevArrow } from "@/components/carousel/Arrows";

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
    arrows:true,
 
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
    <div className="mx-auto w-full max-w-7xl bg-white rounded-xl mb-1">
      <div
        className="relative h-[540px] xl:h-[41rem] short-height:h-[340px] animate-fadeIn rounded-xl"
        role="region"
        aria-roledescription="carousel"
        aria-label="Popularne zabiegi"
      >
        <Slider {...settings}>
          {images.map((image, index) => (
            <div
              key={index}
              className="relative h-[500px] xl:h-[35rem] short-height:h-[300px] rounded-xl border-4 border-white"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover rounded-xl"
                priority={index === 0}
                quality={100}
              />

              <div className="absolute inset-0 flex flex-col justify-end items-center text-center text-white z-20">
                <div className="sm:w-2/3 md:w-1/2">
                  <p className="text-lg font-light mb-2">Popularne zabiegi</p>
                  <h3 className="text-2xl xl:text-3xl font-semibold mb-3">{image.alt}</h3>
                  <p className="text-base xl:text-xl mb-4 p-2">{image.description}</p>
                  <div className="flex justify-center gap-4">
                    <Link href={image.linkBooksy} target="_blank" rel="noopener noreferrer">
                      <ButtonMain>Zarezerwuj wizytę</ButtonMain>
                    </Link>
                    <ButtonMain onClick={() => router.push(image.linkDetails)}>
                      Informacje o zabiegu
                    </ButtonMain>
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