import React from "react";
import Link from "next/link";
import { PiPhoneDisconnectBold } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
import { IoIosPin } from "react-icons/io";
import DetailedAdressItem from "./DetailedAdressItem";
const DetailedAddress = () => {
  return (
    <div className="lg:text-xl ">
      <p className="font-semibold">Dane Kontaktowe:</p>
      <DetailedAdressItem
        ico={<IoIosPin className="w-8 h-8" />}
        location={"Lokalizacja:"}
      >
        <address>
          <strong>ul. Naukowa 20 /lokal:1/ 02-463 Warszawa</strong>
        </address>
      </DetailedAdressItem>
      <DetailedAdressItem
        ico={<PiPhoneDisconnectBold className="w-8 h-8" />}
        location={"Telefon:"}
      >
        <strong>
          <Link
            href={"535187126"}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 "
          >
            535-187-126
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

     
    </div>
  );
};

export default DetailedAddress;
