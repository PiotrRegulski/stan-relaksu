"use client";
import Slider from "react-slick";
import Image from "next/image";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ButtonMain from "../layout/ButtonMain";
import { lato } from "../fonts";
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
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

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
      linkDetails: "oferta/masaz-tkanek-glebokich",
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

  return (
    <div className="relative w-full  h-[69vh] sm:h-[91vh] md:h-[71vh] lg:h-[68vh] 2xl:h-[62vh]  lg:mt-[1rem] 2xl:mt-[7rem] animate-fadeIn mb-2 ">
      {" "}
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className=" relative h-[69vh] sm:h-[90vh] md:h-[70vh] lg:h-[67vh] 2xl:h-[60vh]  w-full ">
            <Image
              src={image.src}
              alt={image.alt}
              sizes="(max-width: 600px) 100vw, 50vw"
              fill
              priority={true}
              className="mx-auto object-cover z--10"
            />
            <div className="absolute bottom-0 sm:bottom-0 md:bottom-2 lg:bottom-1 lg:left-0 xl:left-0 xl:bottom-5 right-0 2xl:bottom-5 2xl:left-0 p-2 w-full text-center rounded ">
              <div className="flex flex-col justify-center items-center xl:w-full 2xl:w-full bg-black bg-opacity-15">
                <div className="flex flex-col text-center text-white">
                  <p
                    className={`${lato.className} text-lg xl:text-2xl 2xl:text-2xl font-bold`}
                  >
                    {image.alt}
                  </p>
                  <p
                    className={`${lato.className}  text-xs sm:text-base lg:text-base xl:text-xl 2xl:text-xl font-medium sm:px-[5rem] md:px-[7rem] lg:px-[14rem] xl:px-[15rem] 2xl:px-[20rem]`}
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
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default NewCarousel;
