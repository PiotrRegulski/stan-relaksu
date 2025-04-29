import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

interface CustomError extends Error {
  message: string;
}

export async function POST(req: NextRequest) {
  try {
    const formData = await req.json();
    const { name, email, subject, message } = formData;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { message: "Wszystkie pola są wymagane." },
        { status: 400 }
      );
    }

    // Konfiguracja transportera Nodemailer
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587, // Pobieranie portu z env
      secure: false,
      auth: {
        user: process.env.HOMEPL_USER,
        pass: process.env.HOMEPL_PASS,
      },
      tls: {
        minVersion: "TLSv1.2",
      },
      connectionTimeout: 10000,
    });

    // Opcje e-maila
    const mailOptions = {
      from: process.env.CONTACT_FORM_TO_EMAIL, // Pobranie autoryzowanego adresu z env
      replyTo: email,
      to: process.env.CONTACT_FORM_TO_EMAIL,
      subject: `Wiadomość od ${name}: ${subject}`,
      text: message,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Wiadomość wysłana pomyślnie!" },
      { status: 200 }
    );
  } catch (error) {
    const customError = error as CustomError;
    console.error(customError);

    return NextResponse.json(
      {
        message: "Wystąpił błąd podczas wysyłania wiadomości.",
        error: customError.message,
      },
      { status: 500 }
    );
  }
}
