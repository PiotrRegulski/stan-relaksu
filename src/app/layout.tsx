import type { Metadata } from "next";
import "./globals.css";
import MainHeader from "@/components/layout/MainHeader";
import MainFooter from '@/components/layout/MainFooter'
import { CormorantInfant } from "@/components/fonts";
// const inter = Inter({ subsets: ["latin"] });

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
      <body className={`${CormorantInfant.className} antialiased `}>
        <MainHeader />
        {children}
        <MainFooter/>
      </body>
    </html>
  );
}
