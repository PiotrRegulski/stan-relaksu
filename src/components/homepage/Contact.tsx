import React from "react";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { PiPhoneDisconnectBold } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
import { IoIosPin } from "react-icons/io";

import MapComponent from "./MapComponent";
import { Resend } from "resend";
import Link from "next/link";
import PageHeader from "./PageHeader";
const Contact = () => {
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
    <div className="w-[100%] mx-auto">
       <PageHeader>Skontaktuj się</PageHeader>
      <div
        className="grid md:grid-cols-1
        gap-4  items-center my-12 md:mx-4 text-[#333] "
      >
        <div className="px-2 shadow-xl rounded border-4 border-white  shadow-gray-400/75 w-full">
       
          <h2 className="text-xl font-bold md:mb-2 py-2 text-center">
          Skontaktuj się z nami w dogodny dla Siebie sposób.
          </h2>

          

          <div className="flex md:flex-row flex-col justify-around mt-8 font-[sans-serif]">
            <div className="flex flex-col items-center mt-2 mx-auto">
              <h3 className="text-lg font-extrabold  text-center my-2 ">
                Zadzwoń:
              </h3>
              <div className="bg-[#e6e6e6cf] h-16 w-16 rounded-full flex items-center justify-center shrink-0 my-2">
                <PiPhoneDisconnectBold className="w-12 h-12" />
              </div>

              <div className="flex flex-col px-3">
                <small className="block"> Numer telefonu:</small>{" "}
                <strong>000-000-000</strong>
              </div>
            </div>

              <div className="flex flex-col items-center mt-2 mx-auto">
                <h3 className="text-lg font-extrabold  text-center my-2 ">Napisz:</h3>
                <div className="bg-[#e6e6e6cf] h-16 w-16 rounded-full flex items-center justify-center shrink-0 my-2">
                  <MdEmail className="w-12 h-12" />
                </div>

                <div className="flex flex-col px-3">
                  <small className="block"> Mail</small>
                  <strong className="font-xs">adres@example.pl</strong>
                </div>
              </div>
           

            <div className="flex flex-col items-center mt-2 mx-auto">
              <h3 className="text-lg font-extrabold  text-center my-2">Socials:</h3>
              <div className=" flex justify-around gap-3 ">
                <div className="bg-[#e6e6e6cf] h-16 w-16 rounded-full flex items-center justify-center shrink-0 my-2 ">
                  <Link
                    href="https://www.instagram.com/stan_relaksu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=""
                  >
                    <FaSquareInstagram className="text-right w-8 h-8" />
                  </Link>
                </div>
                <div className="bg-[#e6e6e6cf] h-16 w-16 rounded-full flex items-center justify-center shrink-0 my-2">
                  <Link
                    href="https://www.facebook.com/profile.php?id=61560021160720"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook className="text-right w-8 h-8" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center mt-2 mx-auto">
              <h3 className="text-lg font-extrabold  text-center my-2">Adres:</h3>
              <div className="bg-[#e6e6e6cf] h-16 w-16 rounded-full flex items-center justify-center shrink-0 my-2">
                <IoIosPin className="w-12 h-12" />
              </div>

              <div className="flex flex-col px-3">
                <small className="block"> Lokalizacja</small>
                <address>
                  <strong>ul. Naukowa 20/2 02-463 Warszawa</strong>
                </address>
              </div>
            </div>
          
          </div>
          <div className="my-5">
              <MapComponent />
            </div>
        </div>
        <div className="  px-2 pb-10 shadow-xl rounded border-4 border-white  shadow-gray-400/75 ">
          <h3 className="text-4xl font-bold mt-6 text-center">Napisz do nas</h3>
          <p className="text-sm text-gray-400 mt-4 text-center">
            Szybko odpowiemy na Twoje pytania.
          </p>

          <form action={send} className="flex flex-col mt-8 space-y-4 lg:mx-96">
            <input
              type="text"
              placeholder="imię"
              name="username"
              className="w-full rounded-md py-3 px-4 bg-gray-200 text-sm outline-blue-500 shadow-inner focus:bg-white "
            ></input>
            <input
              type="email"
              placeholder="E-mail"
              name="userEmail"
              className="w-full rounded-md py-3 px-4 bg-gray-200 text-sm outline-blue-500 shadow-inner focus:bg-white "
            ></input>
            <input
              type="text"
              placeholder="Temat"
              name="subject"
              className="w-full rounded-md py-3 px-4 bg-gray-200 text-sm outline-blue-500 shadow-inner focus:bg-white "
            ></input>

            <textarea
              name="message"
              placeholder="Message"
              rows={5}
              className="w-full rounded-md px-4 bg-gray-200 text-sm pt-3 outline-blue-500 shadow-inner focus:bg-white "
            ></textarea>
            <button
              type="submit"
              className=" hover:shadow-xl shadow-md shadow-gray-400/75 text-xl  border-2 rounded border-gray-200 bg-white hover:border-gray-200 px-6 py-4 mb-24 font-bold  text-amber-70 hover:text-white focus:outline-none focus:shadow-outline"
            >
              Wyślij
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
