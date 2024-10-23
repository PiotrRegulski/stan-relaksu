import type { Metadata } from "next";
import "./globals.css";
import MainHeader from "@/components/layout/MainHeader";
import MainFooter from "@/components/layout/MainFooter";
import { lato } from "@/components/fonts";
import MobileInfoBar from "@/components/layout/MobileInfoBar";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stan Relaksu - Gabinet terapii manualnej ciała i twarzy.",
  description:
    " Gabinet Stan Relaksu to terapeutyczne miejsce dla ciała stworzone z myślą o Tobie, osobie która chce o zadbać o swoje zdrowie, zwolnić i poczuć się lepiej.",
  robots: {
    index: true, // Zmieniono z false na true
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Stan Relaksu - Gabinet terapii manualnej ciała i twarzy.",
    description: "Gabinet Stan Relaksu to terapeutyczne miejsce dla ciała stworzone z myślą o Tobie, osobie która chce o zadbać o swoje zdrowie, zwolnić i poczuć się lepiej.",
    url: "https://www.stanrelaksu.com",
    type: 'website',
    images: [
      {
        url: "https://www.stanrelaksu.com/masaz-relaksacyjny/masaz-relaksacyjny-cover-top.jpg",
        width: 800,
        height: 600,
        alt: "Stan Relaksu - Gabinet terapii manualnej ciała i twarzy",
      }
    ],
  }
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
        <MobileInfoBar />
        <main className="overflow-hidden flex flex-col bg-white shadow-lg shadow-white mx-auto ">
          {" "}
          {children}
        </main>

        <MainFooter />
      </body>
    </html>
  );
}
