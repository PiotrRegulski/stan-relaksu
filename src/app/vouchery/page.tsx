import PageHeader from "@/components/homepage/PageHeader";
import VoucherCard from "@/components/vouchery/VoucherCard";
import VoucherSelection from "@/components/vouchery/VoucherSelection";
import React from "react";

const page = () => {
  return (
    <div className="bg-my-bg-voucher bg-cover h-full">
      <PageHeader id={"vouchery"}>Vouchery</PageHeader>
      <div className="">
        <div className="flex flex-col justify-center items-center   space-y-3 bg-white py-12 mt-6  bg-opacity-90 rounded">
          <h1 className="w-full tracking-wide text-center  text-xl font-[Lato] font-bold   lg:text-4xl ">
            Vouchery{" "}
          </h1>
          <p className="text-lg xl:text-2xl text-center">
            Pomysł na prezent na każdą okazję dla bliskiej osoby. Wybierz z
            oferty dowolny zabieg i obdaruj kogoś<br></br> Stanem Relaksu.
          </p>
          {/* <div className="">
            <p className="mb-2">Jak wykupić voucher</p>
            <ul className="list-disc">
              <li>Osobiście w Gabinecie Stan Relaksu ul. Naukowa 20/1</li>
              <li>
                Online wybierając dowolny zabieg i czas wnosząc odpowiednią
                opłatę
              </li>
            </ul>
          </div> */}
        </div>
      </div>
      <VoucherSelection/>
      <VoucherCard/>
      
    </div>
  );
};

export default page;
