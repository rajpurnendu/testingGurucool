import Solar from "@/components/solar/Solar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gurucool - Unlock Astrology Secrets with GuruCool astrologers",
  description:
    "Unlock Astrology Secrets with GuruCool astrologers. personalized predictions for love, career, and marriage through the tarot cards, numerology, and zodiac",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
    </div>
  );
}
