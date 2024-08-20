import type { Metadata } from "next";
import "./globals.css";
import MainHeader from "@/components/layout/MainHeader";
import MainFooter from '@/components/layout/MainFooter'
import {lato } from "@/components/fonts";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stan Relaksu",
  description: "Gabinet terapii manualnej ciała i twarzy.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={`${lato.className} antialiased  overflow-y-scroll overflow-x-hidden bg-primary max-w-[1920px] sm:mx-[2%] md:mx-[5%] lg:mx-[8%] 2xl:mx-[auto]  my-1  `}>
        <MainHeader />
        <main className="overflow-hidden flex flex-col bg-secondary shadow-lg shadow-white    mx-auto "> {children}</main>
       
        <MainFooter/>
      </body>
    </html>
  );
}
