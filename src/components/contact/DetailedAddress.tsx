import React from "react";
import Link from "next/link";
import { PiPhoneDisconnectBold } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
import { IoIosPin } from "react-icons/io";
import DetailedAdressItem from "./DetailedAdressItem";
const DetailedAddress = () => {
  return (
    <div className=" ">
      <p className="font-semibold">Dane Kontaktowe:</p>
      <DetailedAdressItem
        ico={<IoIosPin className="w-8 h-8" />}
        location={"Lokalizacja:"}
      >
        <address>
          <strong>ul. Naukowa 20/2 02-463 Warszawa</strong>
        </address>
      </DetailedAdressItem>
      <DetailedAdressItem
        ico={<PiPhoneDisconnectBold className="w-8 h-8" />}
        location={"Telefon:"}
      >
        <strong>
          <Link
            href={"885987321"}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 "
          >
            000-000-000
          </Link>
        </strong>
      </DetailedAdressItem>
      <DetailedAdressItem
        ico={<MdEmail className="w-8 h-8" />}
        location={"Email:"}
      >
        <strong>
          <Link
            href={"mailto:kontakt@stanrelaksu.com"}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 "
          >
            kontat@stanrelaksu.pl
          </Link>
        </strong>
      </DetailedAdressItem>

      {/* <p className="text-lg font-extrabold  text-center my-2">Adres:</p>
        </div>
             <div className="flex flex-col items-center mt-2 mx-auto ">
        <p className="text-lg font-extrabold  text-center my-2 ">Zadzwoń:</p>
        <div className="bg-[#e6e6e6cf] h-5 w-5 rounded-full flex items-center justify-center shrink-0 my-2">
          <PiPhoneDisconnectBold className="w-4 h-4" />
        </div>

        <div className="flex flex-col px-3">
          <small className="block"> Numer telefonu:</small>{" "}
          <strong>000-000-000</strong>
        </div>
      </div>

      <div className="flex flex-col items-center mt-2 mx-auto">
        <p className="text-lg font-extrabold  text-center my-2 ">Napisz:</p>
        <div className="bg-[#e6e6e6cf] h-16 w-16 rounded-full flex items-center justify-center shrink-0 my-2">
          <MdEmail className="w-12 h-12" />
        </div>

        <div className="flex flex-col px-3">
          <small className="block"> Mail</small>
          <strong className="font-xs">kontakt@stanrelaksu.pl</strong>
        </div>
      </div> */}
    </div>
  );
};

export default DetailedAddress;
