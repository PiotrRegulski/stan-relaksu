import OffersCardBody from "@/components/offers/OffersCardBody";

import Contact from "@/components/contact/Contact";
import WelcomCard from "@/components/layout/WelcomCard";
import OffersCardFace from "@/components/offers/OffersCardFace";
import WelcomeAboutMe from "@/components/homepage/WelcomeAboutMe";
import OffersHeader from "@/components/offers/OffersHeader";

export default function Home() {
  return (
    <>
      <div className="">
        <WelcomCard />

        <WelcomeAboutMe />
        <OffersHeader/>
        <OffersCardBody />
        <OffersCardFace />
        <Contact />
      </div>
    </>
  );
}
