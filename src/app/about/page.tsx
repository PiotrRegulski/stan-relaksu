import PageHeader from "@/components/homepage/PageHeader";

import React from "react";

import AboutMeMainCard from "@/components/about/AboutMeMainCard";
import AboutMeLastCard from "@/components/about/AboutMeLastCard";
export const metadata = {
  title: "Stan Relaksu O mnie",
  description:
    "Przyniosę Ci ulgę w bólu oraz napięciu stosując techniki masażu powięziowego i terapii manualnej. Podpowiem Ci jak możesz pracować ze swoim ciałem poprzez dobrane ćwiczenia czy oddech. Dla poprawy Twojego zdrowia i samopoczucia.",
};
const About = () => {
  return (
    <div className="mt-[7rem]">
      <PageHeader id={"about"}>O mnie</PageHeader>

      <AboutMeMainCard />
      <AboutMeLastCard />
    </div>
  );
};

export default About;
