import React from "react";
import { PiPhoneDisconnectBold } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
import { IoIosPin } from "react-icons/io";
const page = () => {
  return (
    <div className="h-screen">
      <header
        id="offer-header"
        className=" grid grid-cols-1 gap-2 place-items-center  sm:h-32 bg-cover bg-center "
        style={{ backgroundImage: "url('/ofertabg.png')" }}
      >
        <h1 className=" px-4 py-3 md:text-4xl text-xl  text-center font-bold uppercase text-gray-600">
          Skontaktuj Się
        </h1>
      </header>

      <div className="grid grid-cols-2 gap-4 place-items-center h-2/3 w-full ml-12  ">
        <div className="border-2  border-white px-10 py-10 bg-primary  bg-primary/45 shadow-md rounded">
          <h3 className="text-4xl font-bold mb-2">
            Skontaktuj sie w dogodny dla Siebie sposób
          </h3>

          <p
            className="text-xl text-left
          "
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore
            consectetur quod, ipsam reprehenderit rerum error nostrum enim
            recusandae tempora delectus labore qui quam repellendus temporibus
            maxime? Eaque quidem illum dicta!
          </p>
          <ul className="mx-12">
            <li className="flex text-2xl mt-10 ">
              <PiPhoneDisconnectBold className="w-16 h-16 mr-2 mt-2 border-2 bg-green-500 px-2 py-2 " />
              <div className="flex flex-col py-2">
                <p className="font-bold"> Numer telefonu:</p>{" "}
                <p>xx-xxx-xxx-xxx</p>
              </div>
            </li>
            <li className="flex text-2xl my-3 ">
              <MdEmail className="w-16 h-16 mr-2 mt-2 border-2 bg-green-500 px-2 py-2 " />
              <div className="flex flex-col py-2">
                <p className="font-bold"> Adress e-mail:</p>{" "}
                <p>kontakt@kontakt.pl</p>
              </div>
            </li>
            <li className="flex text-2xl my-3">
              <IoIosPin className="w-16 h-16 mr-2 mt-2 border-2 bg-green-500 px-2 py-2 " />
              <div className="flex flex-col py-2">
                <p className="font-bold"> Lokalizacja gabinetu:</p>{" "}
                <address>matejki 4/12 warszawa</address>
              </div>
            </li>
          </ul>
        </div>
        <div>45</div>
      </div>
    </div>
  );
};

export default page;
