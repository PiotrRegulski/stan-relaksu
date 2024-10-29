"use client";

import React, { useState, FormEvent } from "react";
import SuccessModal from "./SuccessModal";
import { Noto } from "../fonts";
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
    <div className=" flex flex-col w-full justify-center items-center">
      <form
        onSubmit={onSubmit}
        className="flex flex-col mt-8 space-y-4 mx-auto w-full px-6 sm:px-12  md:px-24 lg:px-6"
      >
        <input
          type="text"
          name="honeypot"
          style={{ display: "none" }}
          tabIndex={-1}
          autoComplete="off"
        />
        <div className="flex gap-1  md:gap-4 ">
          {" "}
          <div className="flex w-1/2 flex-col gap-2">
            {" "}
            <label htmlFor="name" className=" ">
              Imie:
            </label>
            <input
              type="text"
              id="name"
              required
              placeholder="wpisz imię"
              name="name"
              className=" bg-white text-base outline-white  focus:bg-white  border-b-2 border-primary shadow-none px-2 py-1"
            ></input>
          </div>
          <div className="flex w-1/2 flex-col gap-2">
            {" "}
            <label htmlFor="email" className="">
              E-mail:
            </label>
            <input
              type="email"
              id="email"
              required
              placeholder="wpisz email"
              name="email"
              className="bg-white text-base outline-white  focus:bg-white  border-b-2 border-primary shadow-none px-2 py-1"
            ></input>
          </div>
        </div>
        <div className=" flex flex-col gap-8 ">
          {" "}
          <div className="flex flex-col gap-2">
            {" "}
            <label htmlFor="subject" className="  ">
              Temat:
            </label>
            <input
              type="text"
              id="subject"
              required
              placeholder=" wpisz temat wiadomości"
              name="subject"
              className=" bg-white text-base outline-white  focus:bg-white  border-b-2 border-primary shadow-none w-full  px-2 py-1 "
            ></input>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="  ">
              Treść wiadomości:
            </label>
            <textarea
              name="message"
              id="message"
              required
              placeholder="wpisz treść swojej wiadomości"
              rows={5}
              className="border-2 border-primary px-2 py-2 outline-primary"
            ></textarea>
          </div>
        </div>

        <div className=" flex w-full justify-end">
          {" "}
          <button
            type="submit"
            disabled={loading}
            className={`${Noto.className} mx-auto   w-48 text-white shadow-md shadow-gray-400 lg:text-lg  border-2 rounded border-primary bg-primary hover:bg-white hover:border-black px-4 py-2 lg:px-4 lg:py-2 font-bold   hover:text-black focus:outline-none focus:shadow-outline mb-4`}
          >
            Wyślij
          </button>
        </div>

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
