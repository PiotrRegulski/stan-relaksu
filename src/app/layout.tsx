import type { Metadata } from "next";
import "./globals.css";
import { ImageResponse } from "next/og";
import MainHeader from "@/components/layout/MainHeader";
import MainFooter from "@/components/layout/MainFooter";
import { lato } from "@/components/fonts";
import MobileInfoBar from "@/components/layout/MobileInfoBar";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stan Relaksu - Gabinet terapii manualnej i masażu",
  description:
    "Stan Relaksu - Gabinet terapii manualnej i masażu.Terapeutyczne miejsce dla ciała stworzone z myślą o Tobie, osobie, która chce zadbać o swoje zdrowie, zwolnić i poczuć się lepiej.",
  metadataBase: new URL("https://www.stanrelaksu.pl"),
  alternates: {
    canonical: "/",
  },
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
    title: "Stan Relaksu - Gabinet terapii manualnej i masażu.",
    description:
      "Stan Relaksu - Gabinet terapii manualnej i masażu. Terapeutyczne miejsce dla ciała stworzone z myślą o Tobie, osobie, która chce zadbać o swoje zdrowie, zwolnić i poczuć się lepiej.",
    url: "https://www.stanrelaksu.pl",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body
        className={`${lato.className} relative antialiased  overflow-y-scroll overflow-x-hidden  max-w-[3000px] mx-auto  m-0 p-0  `}
      >
        <MainHeader />
        <MobileInfoBar />
        <main className="overflow-hidden  lg:container mx-auto -mt-1 bg-white  ">
          {children}
        </main>

        <MainFooter />
      </body>
    </html>
  );
}
