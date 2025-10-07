import OffersCardBody from "@/components/offers/OffersCardBody";
import Contact from "@/components/contact/Contact";
import OffersCardFace from "@/components/offers/OffersCardFace";
import WelcomeAboutMe from "@/components/homepage/WelcomeAboutMe";
import Comments from "@/components/comments/Comments";
import NewCarousel from "@/components/carousel/NewCarousel";
import AboutMeShort from "@/components/homepage/AboutMeShort";
import HomePageShort from "@/components/homepage/HomePageShort";
export const metadata = {};
export default function Home() {
  return (
    <>
      <div className=" mx-auto ">
        <WelcomeAboutMe />
        <NewCarousel />
        <HomePageShort />
        <AboutMeShort />
        <OffersCardBody />
        <OffersCardFace />
        <Comments />
        <Contact />
      </div>
    </>
  );
}
