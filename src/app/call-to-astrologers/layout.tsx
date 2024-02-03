import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Astrology blogs | Find informative blogs on GuruCool",
//   description:
//     "Dive into the world of knowledge and ideas with the blog on Gurukul. From informative blogs to astrology blogs with engaging viewpoints.",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="max-w-[72rem] mx-auto px-4 mt-1">{children}</div>
    </>
  );
}
