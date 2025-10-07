import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import MainHeader from "@/components/layout/MainHeader";
import MainFooter from "@/components/layout/MainFooter";
import { nunito } from "@/components/fonts";
import MobileInfoBar from "@/components/layout/MobileInfoBar";

export const metadata: Metadata = {
  title: "Stan Relaksu - Gabinet terapii manualnej i masażu w Warszawie",
  description:
    "Terapeutyczne miejsce dla ciała stworzone z myślą o Tobie. Ulga w bólu i napięciu dzięki masażowi powięziowemu i terapii manualnej. Relaks z masażem Kobido oraz technikami głębokiego odprężenia. Umów wizytę w gabinecie Stan Relaksu.",
  metadataBase: new URL("https://stanrelaksu.pl"),
  alternates: {
    canonical: "/",
  },
  themeColor: "#f4c9b4", // dopasowany do Twojego mainpeach
  robots: {
    index: true,
    follow: true, // poprawione — teraz Google śledzi linki
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Stan Relaksu - Gabinet terapii manualnej i masażu",
    description:
      "Gabinet terapii manualnej i masażu — ulga w bólu, redukcja napięcia i pełen relaks. Umów wizytę w gabinecie Stan Relaksu w Warszawie.",
    url: "https://stanrelaksu.pl",
    type: "website",
    siteName: "Stan Relaksu",
    images: [
      {
        url: "https://stanrelaksu.pl/opengraph-image.jpg", // dodaj miniaturkę 1200x630 w public/
        width: 1200,
        height: 630,
        alt: "Stan Relaksu - gabinet terapii manualnej i masażu w Warszawie",
      },
    ],
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
        className={`${nunito.className} relative antialiased overflow-y-auto overflow-x-hidden bg-secondary max-w-[2000px] mx-auto m-0 p-0`}
      >
        <MainHeader />
        <MobileInfoBar />

        <main className="overflow-hidden mx-auto min-h-screen">{children}</main>

        <MainFooter />
        <Analytics />
      </body>
    </html>
  );
}
