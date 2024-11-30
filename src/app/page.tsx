import OffersCardBody from "@/components/offers/OffersCardBody";

import Contact from "@/components/contact/Contact";
import OffersCardFace from "@/components/offers/OffersCardFace";
import WelcomeAboutMe from "@/components/homepage/WelcomeAboutMe";
import Carousel from "@/components/carousel/Carousel";
import Comments from "@/components/comments/Comments";
export const metadata = {};
export default function Home() {
  return (
    <div className="container mx-auto">
     
        <Carousel />
        {/* <WelcomCard /> */}

        <WelcomeAboutMe />

        {/* <OffersHeader /> */}

        <OffersCardBody />
        <OffersCardFace />
        <Comments/>
        <Contact />
    
    </div>
  );
}
