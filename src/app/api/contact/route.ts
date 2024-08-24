import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";


interface CustomError extends Error {
  message: string;
}
export async function POST(req: NextRequest) {
  const formData = await req.json();
  const { name, email, subject, message } = formData;

  if (!name || !email || !subject || !message) {
    return new Response(
      JSON.stringify({ message: "Wszystkie pola są wymagane." }),
      { status: 400 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: 25, // Ustaw port na 25
    secure: false, // Port 25 nie obsługuje TLS
    auth: { user: process.env.HOMEPL_USER, pass: process.env.HOMEPL_PASS },
    tls: {
      minVersion: 'TLSv1.2', // Wymuś użycie TLS 1.2 lub nowszego
    },
  });

  const mailOptions = {
    from: `kontakt@stanrelaksu.pl`, // Użyj autoryzowanego adresu e-mail
    replyTo: email, // Ustaw adres odpowiedzi na adres nadawcy
    to: "kontakt@stanrelaksu.pl",
    subject: `Wiadomość od ${name}: ${subject}`,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(
      JSON.stringify({ message: "Wiadomość wysłana pomyślnie!" }),
      { status: 200 }
    );
  } catch (error) {
    const customError = error as CustomError;
    console.error(customError);
    return new Response(
      JSON.stringify({
        message: "Wystąpił błąd podczas wysyłania wiadomości.",
        error: customError.message,
      }),
      { status: 500 }
    );
  }
}
