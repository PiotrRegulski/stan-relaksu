import Link from "next/link";
import { lato } from "@/components/fonts";
import OffersCard from "@/components/offers/OffersCard";


import Contact from "@/components/homepage/Contact";
import WelcomCard from "@/components/layout/WelcomCard";

export default function Home() {
  return (
    <>
      <div className="flex flex-col">
        <WelcomCard />
        <OffersCard />
    
         <Contact />
      </div>
    </>
  );
}
