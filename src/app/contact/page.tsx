import React from "react";
import { PiPhoneDisconnectBold } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
import { IoIosPin } from "react-icons/io";
import Link from "next/link";
import { Resend } from "resend";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import MapComponent from "@/components/homepage/MapComponent";
import PageHeader from "@/components/homepage/PageHeader";
const page = () => {
  async function send(formData: any) {
    "use server";
    const mailContent = formData.get("message") as string;
    // const username = formData.get("username") as string;
    const email = formData.get("userEmail") as string;
    const subject = formData.get("subject") as string;

    const resend = new Resend(process.env.RESEND_API_KEY);
    const { data } = await resend.emails.send({
      from: "StanRelaksu<onboarding@resend.dev>",
      to: email,
      subject: subject,
      html: mailContent,
    });
    console.log("Email Send successfully", data);
  }
  return (
    <div className="mx-auto">
      <PageHeader>Kontakt</PageHeader>

      <div className="grid lg:grid-cols-3 items-center  gap-16 my-24 mx-4 lg:mx-auto max-w-7xl  text-[#333] font-[sans-serif] s">
        <div className=" col-span-2 px-2  shadow-xl rounded border-l-4 border-white  shadow-gray-400/75 min-h-1/3 lg:min-h-max   ">
          <h2 id="contact" className="text-4xl font-bold lg:mb-2 py-6 text-center md:text-left">
            Kontakt
          </h2>

          <p className="text-sm text-gray-400 mt-3  text-center lg:text-left">
            Skontaktuj się z nami w dogodny dla Siebie sposób.
          </p>

          <ul className="mt-8 font-[sans-serif]  ">
            <h3 className="text-lg font-extrabold  ml-12">Zadzwoń:</h3>
            <li className="flex items-center mt-2 ml-12">
              <div className="bg-[#e6e6e6cf] h-16 w-16 rounded-full flex items-center justify-center shrink-0">
                <PiPhoneDisconnectBold className="w-12 h-12" />
              </div>

              <div className="flex flex-col px-3">
                <small className="block"> Numer telefonu:</small>{" "}
                <strong>000-000-000</strong>
              </div>
            </li>
            <h3 className="text-lg font-extrabold mt-3 ml-12">Napisz:</h3>
            <li className="flex items-center mt-2 ml-12 ">
              <div className="bg-[#e6e6e6cf] h-16 w-16 rounded-full flex items-center justify-center shrink-0">
                <MdEmail className="w-12 h-12" />
              </div>

              <div className="flex flex-col px-3">
                <small className="block"> Mail</small>
                <strong>adres@example.pl</strong>
              </div>
            </li>
            <h3 className="text-lg font-extrabold mt-6 ml-12">Socials:</h3>
            <li className="flex items-center mt-2 gap-2 ml-12 mb-12">
              <div className="bg-[#e6e6e6cf] h-9 w-9 rounded-full flex items-center justify-center shrink-0">
                <Link
                  href="https://www.instagram.com/stan_relaksu/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaSquareInstagram className="text-right w-8 h-8" />
                </Link>
              </div>
              <div className="bg-[#e6e6e6cf] h-9 w-9 rounded-full  flex items-center justify-center shrink-0">
                <Link
                  href="https://www.facebook.com/profile.php?id=61560021160720"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook className="text-right w-8 h-8" />
                </Link>
              </div>
            </li>

            <h3 className="text-lg font-extrabold mt-3 mx-auto ml-12">
              Adres:
            </h3>
            <li className="flex items-center mt-2 mx-auto ml-12 mb-12">
              <div className="bg-[#e6e6e6cf] h-16 w-16 rounded-full flex items-center justify-center shrink-0">
                <IoIosPin className="w-12 h-12" />
              </div>

              <div className="flex flex-col px-3">
                <small className="block"> Lokalizacja</small>
                <address>
                  <strong>ul. Naukowa 20/2 02-463 Warszawa</strong>
                </address>
              </div>
            </li>
            <div className="my-3">
              <MapComponent />
            </div>
          </ul>
        </div>
        <div className=" px-4 py-4 shadow-xl rounded-xl h-[100%] md:w-[100%] bg-white col-span-2 lg:col-span-1">
          <h3 className="text-4xl font-bold mt-6">Napisz do nas</h3>
          <p className="text-sm text-gray-900 mt-4">
            Szybko odpowiemy na Twoje pytania.
          </p>

          <form action={send} className="flex flex-col mt-8 space-y-4">
            <label htmlFor="name" className="text-xl font-bold ">
              Wpisz swoje imie:
            </label>
            <input
              type="text"
              id="name"
              placeholder="imię"
              name="username"
              className="w-full shadow-inner  rounded-md py-3 px-4 bg-gray-200 text-sm outline-blue-500  text-gray-900 focus:bg-white "
            ></input>
            <label htmlFor="email" className="text-xl font-bold ">
              Wpisz E-mail do kontaktu:
            </label>
            <input
              type="email"
              id="email"
              placeholder="E-mail"
              name="userEmail"
              className="w-full rounded-md py-3 px-4 bg-gray-200 text-sm outline-blue-500 shadow-inner text-gray-900 focus:bg-white "
            ></input>
            <label htmlFor="subject" className="text-xl font-bold ">
              Temat:
            </label>
            <input
              type="text"
              id="subject"
              placeholder="Temat"
              name="subject"
              className="w-full rounded-md py-3 px-4 bg-gray-200 text-sm outline-blue-500 shadow-inner text-gray-900 focus:bg-white "
            ></input>
            <label htmlFor="message" className="text-xl font-bold ">
              Wpisz swoją wiadomość:
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Napisz do mnie"
              rows={5}
              className="w-full rounded-md px-4 bg-gray-200 text-sm pt-3 outline-blue-500 shadow-inner text-gray-900 focus:bg-white "
            ></textarea>
            <button
              type="submit"
              className=" hover:shadow-xl shadow-md shadow-gray-400/75 text-xl  border-2 rounded border-gray-200 bg-white hover:border-gray-200 px-6 py-2 mb-10 font-bold  text-amber-70 hover:text-white focus:outline-none focus:shadow-outline"
            >
              Wyślij
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
