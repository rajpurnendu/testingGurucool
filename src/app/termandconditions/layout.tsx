import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gurucool ||Term & Condtion",
  description:
    "GuruCool prioritizes your privacy. Read our comprehensive privacy policy to understand how we collect, use, and protect your personal information. Your data security is our top concern.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
