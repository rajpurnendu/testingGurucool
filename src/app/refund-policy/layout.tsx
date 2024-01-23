import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gurucool ||Refund Policy",
  description:
    "At GuruCool, we strive for customer satisfaction. Familiarize yourself with our refund policy to understand the criteria and process for requesting a refund, if applicable.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
