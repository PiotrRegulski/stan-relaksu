"use client";

import React, { useState, FormEvent } from "react";
import SuccessModal from "./SuccessModal";
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

    const formValues: FormValues = Object.fromEntries(
      formData.entries()
    ) as unknown as FormValues;
    //Konwertuje FormData na zwykły obiekt JavaScript, który jest zgodny z interfejsem FormValues.
    setLoading(true);
    setSuccessMessage("");
    document.body.classList.add("loading");

    try {
      const response = await fetch("/api/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formValues),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status:${response.status} `);
      }
      setLoading(false);
      setSuccessMessage("Dziękujemy. Twoja wiadomość została wysłana");
      setShowModal(true);
      form.reset();
    } catch (err) {
      console.error(err);
      alert("Wystąpił błąd w wysyłaniu wiadomości...");
      setLoading(false);
    } finally {
      document.body.classList.remove("loading"); // Usuń klasę loading z body
    }
  };

  return (
    <div className="  px-2 pb-10 shadow-xl rounded border-4 border-white  shadow-gray-400/75 bg-secondary sm:mx-2 lg:my-6 md:mx-0 ">
      <h3 className="text-4xl font-bold mt-6 text-center">Potzrebujesz więcej informacji</h3>
      <p className="text-sm text-gray-800 mt-4 text-center">
      Napisz do mnie.
      </p>

      <form
        onSubmit={onSubmit}
        className="flex flex-col mt-8 space-y-4 lg:mx-96"
      >
        <input
          type="text"
          name="honeypot"
          style={{ display: "none" }}
          tabIndex={-1}
          autoComplete="off"
        />
        <label htmlFor="name" className="text-xl font-bold ">
          Wpisz swoje imie:
        </label>
        <input
          type="text"
          id="name"
          required
          placeholder="imię"
          name="name"
          className="w-full rounded-md py-3 px-4 bg-white text-sm outline-primary shadow-inner focus:bg-white "
        ></input>
        <label htmlFor="email" className="text-xl font-bold ">
          Wpisz E-mail do kontaktu:
        </label>
        <input
          type="email"
          id="email"
          required
          placeholder="E-mail"
          name="email"
          className="w-full rounded-md py-3 px-4 bg-bg-white text-sm outline-primary shadow-inner focus:bg-white "
        ></input>
        <label htmlFor="subject" className="text-xl font-bold ">
          Temat:
        </label>
        <input
          type="text"
          id="subject"
          required
          placeholder="Temat"
          name="subject"
          className="w-full rounded-md py-3 px-4 bg-white text-sm outline-primary shadow-inner focus:bg-white "
        ></input>
        <label htmlFor="message" className="text-xl font-bold ">
          Treść wiadomości:
        </label>
        <textarea
          name="message"
          id="message"
          required
          placeholder="Message"
          rows={5}
          className="w-full rounded-md px-4 bg-white text-sm pt-3 outline-blue-500 shadow-inner focus:bg-white "
        ></textarea>
        <button
          type="submit"
          disabled={loading}
          className=" mx-auto lg:mx-1 hover:shadow-xl shadow-md shadow-gray-400 text-xl  border-2 rounded border-gray-200 bg-white hover:border-blue-500 px-6 py-4 mb-24 font-bold   hover:text-black focus:outline-none focus:shadow-outline"
        >
          Wyślij
        </button>
        <SuccessModal show={showModal} onClose={() =>setShowModal(false)} message={successMessage}/>
      </form>
    </div>
  );
};

export default ContactForm;
