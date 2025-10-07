import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next"
import "./globals.css";
import MainHeader from "@/components/layout/MainHeader";
import MainFooter from "@/components/layout/MainFooter";
import { lato } from "@/components/fonts";
import MobileInfoBar from "@/components/layout/MobileInfoBar";
// const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Stan Relaksu - Gabinet terapii manualnej i masażu w Warszawie",
  description:
    "Terapeutyczne miejsce dla ciała stworzone z myślą o Tobie. Ulga w bólu i napięciu dzięki masażowi powięziowemu i terapii manualnej. Relaks z masażem Kobido oraz technikami głębokiego odprężenia. Umów wizytę w gabinecie Stan Relaksu.",
  metadataBase: new URL("https://stanrelaksu.pl"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
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
    url: "https://stanrelaksu.pl",
    type: "website",
    siteName: "Stan Relaksu",
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
        className={`${lato.className} relative antialiased  overflow-y-scroll overflow-x-hidden bg-secondary  max-w-[2000px] mx-auto  m-0 p-0  `}
      >
        <MainHeader />
        <MobileInfoBar />
        <main className="overflow-hidden mx-auto min-h-screen">
          {children}
        </main>

        <MainFooter />
        <Analytics />
      </body>
    </html>
  );
}
