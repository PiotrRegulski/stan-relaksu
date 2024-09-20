import React from "react";
import VoucherSelectionItem from "./VoucherSelectionItem";

const voucherProcedures = [
  {
    src: "/masaz-relaksacyjny/masaz-relaksacyjny-voucher.jpg",
    caption:
      "Masaż relaksacyjny Stanu Relaksu do którego możesz dobrać dodatki takie jak peeling lub masaż twarzy",
  },
  {
    src: "/masaz-relaksacyjny-swieca/masaz-swieca-voucher.jpg",
    caption:
      "masaż relaksacyjny świecą",
  },
  {
    src: "/kobido/kobido-kinesiotaping.jpg",
    caption:
      "masaż twarzy Kobido z kinesiotapingiem estetycznym ",
  },
];

const VoucherSelection = () => {
  return (
    <div className="flex flex-col   space-y-3 bg-white py-12  w-full bg-opacity-90">
      <div className="xl:mx-24">
        <h2 className="xl:text-2xl font-semibold">Jak wybrać voucher</h2>

        <p className="font-semibold">
          Jeśli chcesz sprawić komuś chwile relaksu i odprężenia idealnymi
          rozwiązaniem mogą być:{" "}
        </p>
      </div>
      <div className="grid grid-cols-3">{voucherProcedures.map((procedure)=>(<VoucherSelectionItem key={procedure.src} caption={procedure.caption} srcMedicalProcedure={procedure.src}/>))}</div>
  
      
    </div>
  );
};

export default VoucherSelection;
