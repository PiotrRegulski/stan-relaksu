import React from "react";

import AboutMeMainCard from "@/components/about/AboutMeMainCard";
import AboutMeLastCard from "@/components/about/AboutMeLastCard";
import ImagesToAboutMeArticle from "@/components/about/ImagesToAboutMeArticle";
export const metadata = {
  title: "Stan Relaksu O mnie",
  description:
    "Przyniosę Ci ulgę w bólu oraz napięciu stosując techniki masażu powięziowego i terapii manualnej. Podpowiem Ci jak możesz pracować ze swoim ciałem poprzez dobrane ćwiczenia czy oddech. Dla poprawy Twojego zdrowia i samopoczucia.",
};
const About = () => {
  return (
    <div className="mt-[7rem] sm:mt-[2rem] lg:mt-[9rem]">
      <AboutMeMainCard />
      <ImagesToAboutMeArticle />
      <AboutMeLastCard />
    </div>
  );
};

export default About;
