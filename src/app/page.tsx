import Link from "next/link";
import { lato } from "@/components/fonts";
import OffersCardBody from "@/components/offers/OffersCardBody";

import Contact from "@/components/homepage/Contact";
import WelcomCard from "@/components/layout/WelcomCard";
import OffersCardFace from "@/components/offers/OffersCardFace";

export default function Home() {
  return (
    <>
      <div className="flex flex-col">
        <WelcomCard />
        <OffersCardBody />
        <OffersCardFace/>
        <Contact />
      </div>
    </>
  );
}
