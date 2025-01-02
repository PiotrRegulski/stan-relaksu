import React from "react";
import AllPriceList from "@/components/pricelist/AllPriceList";
import BackLink from "@/components/layout/BackLink";
import ImageHeader from "@/components/layout/ImageHeader";
export const metadata = {
  title: "Stan Relaksu - Cennik",
  description: "Sprawdź cennik masaży i terapii manualnych. Zobacz dostępne usługi wraz z czasem trwania i cenami. Znajdź idealny zabieg, aby zadbać o swoje zdrowie i osiągnąć stan relaksu.",
};
const page = () => {
  return (
    <div className="flex flex-col bg-white  lg:mt-[7rem] ">
      <ImageHeader id="cennik" BgImage={"bg-my-bg-perfumy bg-center"}>
        Cennik
      </ImageHeader>

      <div
        id="offer-title"
        className=" flex justify-center h-2/3 md:py-4 md:px-2  md:mx-36 md:my-8 my-4 animate-fadeIn rounded  transition-transform duration-200 ease-in-out  "
      >
        <AllPriceList />
      </div>

      <BackLink>
        <p className="  rounded-md px-1 hover:opacity-70">
          Zobacz szczegóły oferty
        </p>
      </BackLink>
    </div>
  );
};

export default page;

