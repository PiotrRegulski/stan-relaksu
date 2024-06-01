import HomepageImage from "@/components/homepage/HomepageImage";
import Link from "next/link";
import { lato } from "@/components/fonts";
import OffersCard from "@/components/offers/OffersCard";
import PageHeader from "@/components/homepage/PageHeader";
import Contact from "@/components/homepage/Contact";

export default function Home() {
  return (
    <>
      <PageHeader>Witaj</PageHeader>

      <main className=" animate-fadeIn grid grid-cols-1 md:grid-cols-2 h-full sm:my-10 sm:mx-2">
        <div className="  md:px-4 px-1 md:pb-3  h-64  md:h-full relative ">
          <HomepageImage />
        </div>
        <section className="flex flex-col sm:my-2 bg-primary/45 shadow-xl rounded border-4 border-white  shadow-gray-400/75 min-h-1/3 sm:min-h-max ">
          <div className={`${lato.className}flex justify-center sm:mt-9`}>
            <h2 className="  sm:mt-12 md:text-4xl text-xl text-center font-bold uppercase   my-10 sm:py-2 text-amber-950">
              Czym się zajmuje
            </h2>
            <article className=" font-[Lato] font-semibold md:text-xl text-justify px-6  md:font-medium md:mx-24 mx-2  text-gray-900/70 sm:text-2xl leading-loose text-pretty">
              {" "}
              <p className="indent-8">
                Cześć, jestem Kinga. Stworzyłam to miejsce z myślą o Tobie,
                osobie która chce o siebie zadbać, zwolnić i poczuć się lepiej.
              </p>
              <p className="indent-8 py-3">
                Przyniosę Ci ulgę w bólu oraz napięciu stosując techniki masażu
                powięziowego i terapii manualnej, podpowiem Ci jak możesz
                pracować ze swoim ciałem poprzez ćwiczenia czy oddech dla
                poprawy Twojego dobrostanu.
              </p>
              <p className="indent-8">
                Moją pasją jest fizjoterapia estetyczna twarzy. Zajmę się też
                zdrowiem i pięknym wyglądem Twojej twarzy poprzez masaż Kobido
                czy igłoterapię estetyczna.
              </p>
            </article>

            <div className="flex justify-center gap-12 sm:gap-24 py-3 mt-6 sm:mt-24 ">
              <Link
                href="/about"
                className=" hover:shadow-xl shadow-md shadow-gray-400/75 text-xl  border-2 rounded border-gray-200 bg-white hover:bg-amber-400 px-6 py-2 font-bold  text-amber-70 hover:text-white focus:outline-none focus:shadow-outline"
              >
                O mnie
              </Link>
              <Link
                href="/offer"
                className=" hover:shadow-xl shadow-md text-xl  border-2 rounded border-amber-400 bg-amber-500 hover:bg-amber-400 px-6 py-2 font-bold  text-amber-70 hover:text-white focus:outline-none focus:shadow-outline"
              >
                Oferta
              </Link>
            </div>
          </div>
        </section>
      </main>
      <div className="flex flex-col">
        {" "}
        <OffersCard /> <Contact />
      </div>
    </>
  );
}
