import type { Metadata } from "next";
import "./globals.css";
import MainHeader from "@/components/layout/MainHeader";
import MainFooter from "@/components/layout/MainFooter";
import { lato } from "@/components/fonts";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stan Relaksu - Gabinet terapii manualnej ciała i twarzy.",
  description: " Gabinet Stan Relaksu to terapeutyczne miejsce dla ciała stworzone z myślą o Tobie, osobie która chce o zadbać o swoje zdrowie, zwolnić i poczuć się lepiej.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body
        className={`${lato.className} relative antialiased  overflow-y-scroll overflow-x-hidden bg-white max-w-[1920px]    my-1  `}
      >
        <MainHeader />
        <main className="overflow-hidden flex flex-col bg-white shadow-lg shadow-white mx-auto ">
          {" "}
          {children}
        </main>

        <MainFooter />
      </body>
    </html>
  );
}
