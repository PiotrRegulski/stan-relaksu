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
          <Link
            href="https://maps.app.goo.gl/paeUdp7VdFXvtwSA9"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Otwórz mapę z lokalizacją gabinetu terapii manualnej i masażu - Stan Relaksu"
          >
            {" "}
            <strong className="not-italic text-sm  ">
              <span className="whitespace-nowrap ">
                Willa Modrzewie <br></br>ul. Naukowa 20 /lokal-1
              </span>
              <br></br>02-463 Warszawa
            </strong>
          </Link>
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
              href="tel:791107102"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 text-sm"
              aria-label="Zadzwoń do gabinetu terapii manualnej i masażu - Stan Relaksu"
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
              aria-label="Napisz mail do gabinetu terapii manualnej i masażu - Stan Relaksu"
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
