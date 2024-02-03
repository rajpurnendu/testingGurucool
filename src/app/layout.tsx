import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Mainfooter from "@/components/Footer/Mainfooter";
import Header from "@/components/header/Header";
import { cookies } from "next/headers";
import Head from "next/head";
import Supportchat from "@/components/Supporchat/Supportchat";
import Script from "next/script";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

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
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        <meta
          name="p:domain_verify"
          content="d26096b1a79e3e1065f051264b1d1569"
        />
        {/* <Script
          id="google-tag-manager"
          dangerouslySetInnerHTML={{
            __html: `(function (w, d, s, l, i) {
            w[l] = w[l] || [];
            w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
            var f = d.getElementsByTagName(s)[0],
              j = d.createElement(s),
              dl = l != "dataLayer" ? "&l=" + l : "";
            j.async = true;
            j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
            f.parentNode.insertBefore(j, f);
          })(window, document, "script", "dataLayer", "GTM-PDDCC3M")`,
          }}
        /> */}
      </head>
      <body className={inter.className}>
        <Header loginToken={loginToken?.value} />
        <Supportchat loginToken={loginToken?.value} />
        {children}
        <Mainfooter />
      </body>
      <GoogleTagManager gtmId="GTM-PDDCC3M" />
      <GoogleAnalytics gaId="G-N43STD1SJX" />
    </html>
  );
}
