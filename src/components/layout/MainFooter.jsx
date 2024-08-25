import React from "react";
import Link from "next/link";
import ImageCard from "../about/ImageCard";
const MainFooter = () => {
  return (
    <>
      <div className="relative h-[9rem] md:h-[5rem] lg:h-[6rem]">
        <ImageCard
          src={"/do-ozdoby-stopka.jpg"}
          alt={"wystrój gabinetu masażu "}
        />
        <footer className="absolute md:top-4 right-5 left-5 md:right-20 md:left-20 py-1 ">
          <div className=" flex flex-col  justify-center items-center ">
            <div className="flex flex-col md:flex-row items-center ">
              <div className="w-full border-3 border-white">
                <p className="text-white text-sm text-center  font-semibold">
                  © 2024 Stan Relaksu. Wszelkie prawa zastrzeżone.
                </p>
              </div>
              <div className="">
                <address className="text-white font-semibold ">
                  <Link
                    href="mailto:kontakt@stanrelaksu.pl"
                    className="text-white text-sm   hover:text-red-800 transition duration-300  font-semibold "
                  >
                   kontakt@stanrelaksu.pl
                  </Link>
                </address>
              </div>
            </div>

            <div className="flex justify-center ">
              <Link
                href="/privacy-policy"
                className="text-white text-sm hover:text-blue-800 transition duration-300 mx-2"
              >
                Polityka prywatności
              </Link>
              <Link
                href="/terms"
                className="text-white text-sm hover:text-blue-800 transition duration-300 mx-2"
              >
                Regulamin
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default MainFooter;
