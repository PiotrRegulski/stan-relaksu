import React from "react";
import Image from "next/image";
const VoucherCard = () => {
  return (
    <div className="flex flex-col   space-y-3 bg-white py-12  w-full bg-opacity-40">
      <div></div>
      <div className="flex flex-row gap-4 ">
        <div className="hidden relative w-1/2 h-96 md:flex flex-col justify-center items-center  shadow-gray-400 shadow-xl rounded-lg border-2  bg-secondary ">
          <Image
            src="/logo-stan-relaksu-kolo.png"
            alt="Logo stan relaksu"
            width={200}
            height={200}
            className="px-2"
            priority={true}
          />
        </div>
        <div className="flex justify-center items-center  xl:w-1/2 h-96 shadow-gray-400 shadow-xl border-2 bg-secondary ">
          <div className="w-full">
            <p>voucher</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoucherCard;
