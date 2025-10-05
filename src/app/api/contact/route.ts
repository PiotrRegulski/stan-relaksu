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
  host: process.env.SEOHOST_SMTP_HOST, // h50.seohost.pl
  port: 465,                           // Port SSL/TLS
  secure: true,                       // Bo port 465
  auth: {
    user: process.env.SEOHOST_USER,  // np. kontakt@stanrelaksu.pl
    pass: process.env.SEOHOST_PASS,  // hasło do skrzynki
  },
  tls: {
    rejectUnauthorized: false, // czasem wymagane na serwerach hostingowych
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
