import React from "react";
import Link from "next/link";
import { PiPhoneDisconnectBold } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
import { IoIosPin } from "react-icons/io";
import DetailedAdressItem from "./DetailedAdressItem";
const DetailedAddress = () => {
  return (
    <div className="flex flex-col sm:flex-row  justify-around w-full my-4 ">
      <DetailedAdressItem
        ico={<IoIosPin className="w-6 h-6" />}
        location={"Lokalizacja:"}
      >
        <address className="text-center ">
          <strong className="not-italic text-sm  ">
            <span className="whitespace-nowrap ">ul. Naukowa 20 /lokal-1</span>
            <br></br>02-463 Warszawa
          </strong>
        </address>
      </DetailedAdressItem>
      <div className="flex sm:w-2/3  ">
        {" "}
        <DetailedAdressItem
          ico={<PiPhoneDisconnectBold className="w-6 h-6" />}
          location={"Telefon:"}
        >
          <strong>
            <Link
              href={"535187126"}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 text-sm"
            >
              <span className="whitespace-nowrap">791-107-102</span>
            </Link>
          </strong>
        </DetailedAdressItem>
        <DetailedAdressItem
          ico={<MdEmail className="w-6 h-6" />}
          location={"Email:"}
        >
          <strong>
            <Link
              href={"mailto:kontakt@stanrelaksu.com"}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 text-sm "
            >
              kontakt@stanrelaksu.pl
            </Link>
          </strong>
        </DetailedAdressItem>
      </div>
    </div>
  );
};

export default DetailedAddress;
