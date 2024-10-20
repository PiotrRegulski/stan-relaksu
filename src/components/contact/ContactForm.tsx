"use client";

import React, { useState, FormEvent } from "react";
import SuccessModal from "./SuccessModal";
interface CustomError extends Error {
  message: string;
}
interface FormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}
const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;
    //Sprawdza, czy formularz jest już w trakcie wysyłania
    const form = e.currentTarget;
    //Pobiera referencję do formularza, który wywołał zdarzenie submit.
    const formData = new FormData(form);
    //Tworzy obiekt  zawierający wszystkie dane z formularza

    // Sprawdź honeypot
    if (formData.get("honeypot")) {
      console.log("Wykryto bota!");
      return;
    }

    const name = formData.get("name")?.toString().trim();
    const nameRegex = /^[a-zA-ZÀ-ÿ\s'-]+$/;
    if (!name || !nameRegex.test(name) || name.length < 2) {
      alert("Proszę wpisać poprawne imię.");
      return;
    }
    // Sprawdź, czy pole textarea nie jest puste
    const message = formData.get("message")?.toString().trim();
    const messageRegex = /^[a-zA-ZÀ-ÿ\s'-]+$/;
    if (!message || !messageRegex.test(message)) {
      alert("Proszę wpisać sensowną wiadomość.");
      return;
    }

    // Sprawdź, czy email jest poprawny
    const email = formData.get("email")?.toString().trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      alert("Proszę wpisać poprawny adres email.");
      return;
    }
    const formValues: FormValues = Object.fromEntries(
      formData.entries()
    ) as unknown as FormValues;
    //Konwertuje FormData na zwykły obiekt JavaScript, który jest zgodny z interfejsem FormValues.
    setLoading(true);
    setSuccessMessage("");
    document.body.classList.add("loading");
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 sekund

    try {
      const response = await fetch("/api/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formValues),
        signal: controller.signal, // Dodaj signal do
      });

      clearTimeout(timeoutId); // Wyczyść timeout po zakończeniu żądania

      if (!response.ok) {
        throw new Error(`HTTP error! Status:${response.status} `);
      }
      setLoading(false);
      setSuccessMessage("Dziękujemy. Twoja wiadomość została wysłana");
      setShowModal(true);
      form.reset();
    } catch (error) {
      const customError = error as CustomError;
      if (customError.name === "AbortError") {
        console.error(
          "Żądanie zostało anulowane z powodu przekroczenia limitu czasu."
        );
        alert("Żądanie zostało anulowane z powodu przekroczenia limitu czasu.");
      } else {
        console.error("wystąpił bład", customError);
        console.error("Zmienne środowiskowe:", {
          user: process.env.HOMEPL_USER,
          pass: process.env.HOMEPL_PASS,

          // Dodaj inne zmienne środowiskowe, które mogą być istotne
        });
        alert("Wystąpił błąd w wysyłaniu wiadomości...");
      }
      setLoading(false);
    } finally {
      document.body.classList.remove("loading"); // Usuń klasę loading z body
    }
  };

  return (
    <div className=" flex flex-col justify-center  px-2 pb-10 shadow-lg rounded border-4 border-white  shadow-gray-400/75 bg-secondary sm:mx-2 lg:my-2 md:mx-0 ">
      <h3 className="lg:mx-64 text-2xl lg:text-3xl  font-bold mt-9 text-center text-black font-[Cormorant-Garamond]  ">
        Potrzebujesz więcej informacji lub porady na temat zabiegów.
      </h3>
      <p className="text-lg lg:mx-48 lg:text-xl  text-gray-800 mt-4 text-center font-[Montessrat]">
       Skontaktuj się ze mną poprzez formularz kontaktowy lub media społecznościowe.
      </p>
      <p className="text-center mt-4 text-xl lg:text-2xl font-semibold  tracking-wider font-[Cormorant-Garamond] ">Chętnie pomogę!</p>

      <form
        onSubmit={onSubmit}
        className="flex flex-col mt-8 space-y-4 mx-auto   "
      >
        <input
          type="text"
          name="honeypot"
          style={{ display: "none" }}
          tabIndex={-1}
          autoComplete="off"
        />
        <label htmlFor="name" className="lg:text-xl font-bold font-[Cormorant-Garamond] ">
          Wpisz swoje imie:
        </label>
        <input
          type="text"
          id="name"
          required
          placeholder="imię"
          name="name"
          className="w-[80vw] lg:w-[60vw] ml-2 rounded-md py-3 px-4 bg-white text-sm outline-primary shadow-inner focus:bg-white "
        ></input>
        <label htmlFor="email" className="  lg:text-xl font-bold font-[Cormorant-Garamond]  ">
          Wpisz E-mail do kontaktu:
        </label>
        <input
          type="email"
          id="email"
          required
          placeholder="E-mail"
          name="email"
          className="w-[80vw]  lg:w-full ml-2  rounded-md py-3 px-4 bg-bg-white text-sm outline-primary shadow-inner focus:bg-white "
        ></input>
        <label htmlFor="subject" className="lg:text-xl font-bold font-[Cormorant-Garamond]  ">
          Temat:
        </label>
        <input
          type="text"
          id="subject"
          required
          placeholder="Temat"
          name="subject"
          className="w-[80vw]  lg:w-full ml-2  rounded-md py-3 px-4 bg-white text-sm outline-primary shadow-inner focus:bg-white "
        ></input>
        <label htmlFor="message" className="lg:text-xl font-bold font-[Cormorant-Garamond]  ">
          Treść wiadomości:
        </label>
        <textarea
          name="message"
          id="message"
          required
          placeholder="Message"
          rows={5}
          className="w-[80vw] lg:w-full ml-2  rounded-md px-4 bg-white text-sm pt-3 outline-blue-500 shadow-inner focus:bg-white "
        ></textarea>
        <div className="flex w-full"></div>
        <button
          type="submit"
          disabled={loading}
          className=" mx-auto  hover:shadow-xl w-48 shadow-md shadow-gray-400 lg:text-lg  border-2 rounded border-gray-200 bg-white hover:border-blue-500 px-4 py-2 lg:px-4 lg:py-2 mb-24 font-bold   hover:text-black focus:outline-none focus:shadow-outline"
        >
          Wyślij
        </button>
        <SuccessModal
          show={showModal}
          onClose={() => setShowModal(false)}
          message={successMessage}
        />
      </form>
    </div>
  );
};

export default ContactForm;
