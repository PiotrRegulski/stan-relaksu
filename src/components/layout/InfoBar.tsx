"use client";
import React from "react";
import Link from "next/link";
import { Noto } from "../fonts";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneForwardFill, BsArrowUpRightSquare } from "react-icons/bs";
import { IoIosPin } from "react-icons/io";

const InfoBar = () => {
  const linkBase =
    "flex items-center gap-1.5 px-2 py-0.5 hover:opacity-70 bg-white bg-opacity-25 text-black rounded-md transition-all";

  return (
    <div
      className={`${Noto.className} hidden lg:flex items-center justify-between font-normal text-xs bg-primary w-full mx-auto py-1 max-w-[105rem] `}
      style={{ lineHeight: 1.4 }}
    >
      {/* Lewa sekcja - Booksy */}
      <div className="flex items-center px-2">
        <Link
          href="https://booksy.com/pl-pl/257898_stan-relaksu-holistyczny-gabinet-terapii-i-masazu_masaz_3_warszawa#ba_s=dl_1"
          target="_blank"
          rel="noopener noreferrer"
          className={`${linkBase} bg-opacity-20`}
          aria-label="Zarezerwuj wizytę w gabinecie terapii manualnej i masażu - Stan Relaksu"
        >
          <span className="underline underline-offset-2 font-bold">Zarezerwuj wizytę</span>
          <BsArrowUpRightSquare className="w-3.5 h-3.5" aria-hidden="true" />
        </Link>
      </div>

      {/* Prawa sekcja - kontakt i social media */}
      <div className="flex items-center justify-end gap-2 pr-2">
        {/* Adres */}
        <Link
          href="https://maps.app.goo.gl/paeUdp7VdFXvtwSA9"
          target="_blank"
          rel="noopener noreferrer"
          className={linkBase}
          aria-label="Otwórz mapę z lokalizacją gabinetu terapii manualnej i masażu - Stan Relaksu"
        >
          <IoIosPin className="w-3.5 h-3.5" aria-hidden="true" />
          <address className="not-italic underline underline-offset-2">
            Naukowa 20/lok.1, Warszawa
          </address>
        </Link>

        {/* Email */}
        <Link
          href="mailto:kontakt@stanrelaksu.pl"
          target="_blank"
          rel="noopener noreferrer"
          className={linkBase}
          aria-label="Napisz wiadomość e-mail do gabinetu terapii manualnej i masażu - Stan Relaksu"
        >
          <MdEmail className="w-3.5 h-3.5" aria-hidden="true" />
          <span className="underline underline-offset-2">kontakt@stanrelaksu.pl</span>
        </Link>

        {/* Telefon */}
        <Link
          href="tel:+48791107102"
          target="_blank"
          rel="noopener noreferrer"
          className={linkBase}
          aria-label="Zadzwoń do gabinetu terapii manualnej i masażu - Stan Relaksu"
        >
          <BsFillTelephoneForwardFill className="w-3.5 h-3.5" aria-hidden="true" />
          <span className="underline underline-offset-2">791-107-102</span>
        </Link>

        {/* Instagram */}
        <Link
          href="https://www.instagram.com/stan_relaksu/"
          target="_blank"
          rel="noopener noreferrer"
          className={`${linkBase} bg-opacity-15 p-1`}
          aria-label="Otwórz profil na Instagramie gabinetu terapii manualnej i masażu - Stan Relaksu"
        >
          <FaSquareInstagram className="w-4 h-4" aria-hidden="true" />
        </Link>

        {/* Facebook */}
        <Link
          href="https://www.facebook.com/profile.php?id=61560021160720"
          target="_blank"
          rel="noopener noreferrer"
          className={`${linkBase} bg-opacity-15 p-1`}
          aria-label="Otwórz profil na Facebooku gabinetu terapii manualnej i masażu - Stan Relaksu"
        >
          <FaFacebook className="w-4 h-4" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
};

export default InfoBar;
