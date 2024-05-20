import HomepageImage from "@/components/homepage/HomepageImage";
import Link from "next/link";
import { lato } from "@/components/fonts";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col ">


      <section className="flex flex-col sm:my-2 bg-primary/45 shadow-xl  border-1 border-gray-300 ">
        <div className={`${lato.className}flex justify-center`}>
          <h1 className=" sm: mt-12 md:text-4xl text-xl text-center font-bold uppercase py-3 text-amber-950">
            Witaj na stronie Stan Relaksu
          </h1>
          <p className="md:text-xl md:text-justify text-center px-6 font-light md:mx-24 mx-2  text-gray-950 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            perferendis non, tempora, a saepe ratione architecto deleniti
            laboriosam quaerat quisquam recusandae ut adipisci iure autem id
            aliquid cupiditate enim similique.Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Molestiae perferendis non, tempora, a
            saepe ratione architecto deleniti laboriosam quaerat quisquam
            recusandae ut adipisci iure autem id aliquid cupiditate enim
            similique.
          </p>
        </div>
        <div className="flex justify-center gap-12 sm:gap-24 py-3 mt-4 ">
          <Link
            href={"/"}
            className=" hover:shadow-xl shadow-md text-xl  border-2 rounded-full border-amber-400 bg-white hover:bg-amber-400 px-6 py-2 font-bold  text-amber-70 hover:text-white"
          >
            O mnie
          </Link>
          <Link
            href={"/"}
            className=" hover:shadow-xl shadow-md text-xl  border-2 rounded-full border-amber-400 bg-white hover:bg-amber-400 px-6 py-2 font-bold  text-amber-70 hover:text-white"
          >
            Oferta
          </Link>
        </div>
      </section>
    </main>
  );
}
