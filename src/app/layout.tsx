import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MainHeader from "@/components/layout/MainHeader";
import { CormorantInfant } from "@/components/fonts";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stan Relaksu",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={`${CormorantInfant.className} antialiased`}>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
