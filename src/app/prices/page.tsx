
import React from "react";
import AllPriceList from "@/components/pricelist/AllPriceList";
import PageHeader from "@/components/homepage/PageHeader";
import BackLink from "@/components/layout/BackLink";
export const metadata = {
  title: "Cennik",
  description:"Sprawdź ceny moich usług i znajdź najlepszą ofertę dostosowaną do Twoich potrzeb.",
};
const page = () => {
  return (
    <div className="flex flex-col bg-gradient-to-r from-white via-secondary to-white ">
      <PageHeader id={"prices"}>Cennik</PageHeader>
      <div className=" flex justify-center h-2/3 md:py-4 md:px-2  md:mx-36 md:my-8 animate-fadeIn rounded  transition-transform duration-200 ease-in-out  ">
        <AllPriceList />
      </div>
      <BackLink>Zobacz szczegóły oferty</BackLink>
    </div>
  );
};

export default page;
