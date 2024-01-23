import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Astrology blogs | Find informative blogs on GuruCool",
  description:
    "Dive into the world of knowledge and ideas with the blog on Gurukul. From informative blogs to astrology blogs with engaging viewpoints.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
