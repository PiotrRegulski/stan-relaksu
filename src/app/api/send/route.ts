import { NextResponse } from "next/server";
import { Resend } from "resend";
export async function GET() {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const { data } = await resend.emails.send({
      from:'Stan Relaksu <onboarding@resend.dev>',
      to: "bulu901@gmail.com",
      subject: "Hello from stanrelaksu",
      html: "<h1>Hello<h1>",
    });
    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
