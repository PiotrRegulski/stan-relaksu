import HomepageImage from "@/components/homepage/HomepageImage";
import Link from "next/link";
import { lato } from "@/components/fonts";
import OffersCard from "@/components/offers/OffersCard";
import CardArticle from "@/components/layout/CardArticle";

export default function Home() {
  return (
    <>
      <div
        className=" grid grid-cols-1 gap-2 place-items-center  sm:h-32 bg-cover bg-center "
        style={{ backgroundImage: "url('/ofertabg.png')" }}
      >
        <h1 className=" px-4 py-3 md:text-4xl text-xl  text-center font-bold uppercase text-gray-600">
          Witaj na stronie głównej
        </h1>
      </div>
      <main className=" animate-fadeIn grid grid-cols-1 sm:grid-cols-2 h-full sm:my-10 sm:mx-2">
    
        <div className="  sm:px-4 px-1 sm:pb-3  h-64  sm:h-full relative ">
          <HomepageImage />
        </div>
        <section className="flex flex-col sm:my-2 bg-primary/45 shadow-xl rounded border-4 border-white  shadow-gray-400/75 min-h-1/3 sm:min-h-max ">
          <div className={`${lato.className}flex justify-center sm:mt-9`}>
            <h2 className=" sm:mt-12 md:text-4xl text-xl text-center font-bold uppercase  my-3 sm:py-2 text-amber-950">
              Czym się zajmuje
            </h2>
            <p className="md:text-xl md:text-justify text-center px-6 font-light md:mx-24 mx-2  text-gray-950 sm:text-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              perferendis non, tempora, a saepe ratione architecto deleniti
              laboriosam quaerat quisquam recusandae ut adipisci iure autem id
              aliquid cupiditate enim similique.Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Molestiae perferendis non, tempora,
              a saepe ratione architecto deleniti laboriosam quaerat quisquam
              recusandae ut adipisci iure autem id aliquid cupiditate enim
              similique.
            </p>
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
      
      <OffersCard/>
    </>
  );
}
