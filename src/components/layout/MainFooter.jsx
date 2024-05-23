import React from 'react';
import Link from 'next/link';
const MainFooter = () => {
    return (
      <>
       <div
        className=" grid grid-cols-1 gap-2 place-items-center sm:h-32 h-12 bg-cover bg-center "
        style={{ backgroundImage: "url('/footerbg.png')" }}
      ></div>
        <footer className="bg-primary text-center p-2 w-full">
      <div className=" mx-auto flex justify-center flex-wrap ">
        <p className="text-secondary text-sm font-semibold mt-1">© 2024 Stan Relaksu.  Wszelkie prawa zastrzeżone. </p>
        <address>
          <a href="mailto:contact@pathpicstales.com" className="text-red-600 hover:text-red-800 transition duration-300 text-sm font-semibold ">
          &nbsp; kontakt@stanrelaksu.com
          </a>
        </address>
        {/* <div className="flex justify-center mt-2">
          <Link href="/privacy-policy" className='"text-blue-600 hover:text-blue-800 transition duration-300 mx-2"'>
           Polityka prywatności
          </Link>
          <Link href="/terms" className="text-blue-600 hover:text-blue-800 transition duration-300 mx-2">
            Regulamin
          </Link>
        </div> */}
      </div>
    </footer>
    </>
    );
};

export default MainFooter;