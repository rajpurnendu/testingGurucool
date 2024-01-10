import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gurucool ||Contact Us",
  description:
    "Have questions or need assistance? Contact GuruCool's friendly support team. We are here to help you with any queries regarding our astrology services. Reach out to us today.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
