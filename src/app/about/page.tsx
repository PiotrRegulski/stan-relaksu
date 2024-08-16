import PageHeader from "@/components/homepage/PageHeader";

import React from "react";

import AboutMeMainCard from "@/components/about/AboutMeMainCard";
import AboutMeLastCard from "@/components/about/AboutMeLastCard";

const About = () => {
  return (
    <>
      <PageHeader id={"about"}>O mnie</PageHeader>
      <AboutMeMainCard/>
      <AboutMeLastCard/>
      </>
  
  );
};

export default About;
