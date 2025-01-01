import React from "react";
import Link from "next/link";
import FooterInfo from "./FooterInfo";
const MainFooter = () => {
  return (
    <footer className=" flex flex-col h-[30rem] sm:h-full  w-full border-t-2 border-mainpeach bg-secondary ">
      
      <div className=" flex flex-col w-full mt-2   ">
      
        <FooterInfo
          instaHref={"https://www.instagram.com/stan_relaksu/"}
          fbHref={"https://www.facebook.com/profile.php?id=61560021160720"}
          logoSrc={"/logo-stan-relaksu-kolo.png"}
        />

        <div className="flex flex-col  mt-2 py-2 border-t-4 border-mainpeach   ">
          <div className="flex w-full justify-center items-center">
            <Link
              href="/privacy-policy"
              className="text-black text-sm hover:text-blue-800 mx-2"
            >
              Polityka prywatności
            </Link>
            <Link
              href="/terms"
              className="text-black text-sm hover:text-blue-800 mx-2"
            >
              Regulamin
            </Link>
          </div>

          <div className="w-full ">
            <p className="text-black text-sm text-center  font-semibold ">
              © 2024 Stan Relaksu. Wszelkie prawa zastrzeżone.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
