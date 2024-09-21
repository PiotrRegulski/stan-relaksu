
import React from "react";
import AllPriceList from "@/components/pricelist/AllPriceList";
import PageHeader from "@/components/homepage/PageHeader";
import BackLink from "@/components/layout/BackLink";
export const metadata = {
  title: "Stan Relaksu - Cennik",
  description:"Sprawdź ceny moich usług i znajdź najlepszą ofertę dostosowaną do Twoich potrzeb.",
};
const page = () => {
  return (
    <div className="flex flex-col bg-white bg-no-repeat bg-cover mt-[7rem] ">
      <PageHeader id={"prices"}>Cennik</PageHeader>
      <div className=" flex justify-center h-2/3 md:py-4 md:px-2  md:mx-36 md:my-8 my-4 animate-fadeIn rounded  transition-transform duration-200 ease-in-out  ">
        <AllPriceList />
      </div>
      
      <BackLink><p className=" bg-secondary rounded-md px-1 hover:opacity-70">Zobacz szczegóły oferty</p></BackLink>
    </div>
  );
};

export default page;
