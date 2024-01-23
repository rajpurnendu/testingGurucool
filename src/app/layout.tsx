import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Mainfooter from "@/components/Footer/Mainfooter";
import Header from "@/components/header/Header";
import { cookies } from "next/headers";
import Head from "next/head";
import Supportchat from "@/components/Supporchat/Supportchat";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gurucool - Unlock Astrology Secrets with GuruCool astrologers",
  description:
    "Unlock Astrology Secrets with GuruCool astrologers. personalized predictions for love, career, and marriage through the tarot cards, numerology, and zodiac",
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["/apple-touch-icon.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = cookies();
  const loginToken = cookieStore.get("loginToken");
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
        <link rel="icon" href="./favicon.ico" />
      </head>
      <body className={inter.className}>
        <Header loginToken={loginToken?.value} />
        <Supportchat loginToken={loginToken?.value} />
        {children}
        <Mainfooter />
      </body>
    </html>
  );
}
