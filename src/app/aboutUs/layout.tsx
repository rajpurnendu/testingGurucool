import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gurucool | Discover Our Astrological Predictions",
  description:
    "Gurucool helps you understand the astrological significance and provides the best astrological predictions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
