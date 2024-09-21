import OffersCardBody from "@/components/offers/OffersCardBody";

import Contact from "@/components/contact/Contact";
import WelcomCard from "@/components/layout/WelcomCard";
import OffersCardFace from "@/components/offers/OffersCardFace";
import WelcomeAboutMe from "@/components/homepage/WelcomeAboutMe";
import OffersHeader from "@/components/offers/OffersHeader";
import Carousel from "@/components/carousel/Carousel";
import Comments from "@/components/comments/Comments";
export const metadata = {};
export default function Home() {
  return (
    <>
      <div className=" ">
        <Carousel />
        {/* <WelcomCard /> */}

        <WelcomeAboutMe />

        {/* <OffersHeader /> */}

        <OffersCardBody />
        <OffersCardFace />
        <Comments/>
        <Contact />
      </div>
    </>
  );
}
