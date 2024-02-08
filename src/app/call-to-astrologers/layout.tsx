import { Inter } from "next/font/google";
import Head from "next/head";

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
      <Head>
        <link rel="canonical" href="http://localhost:3000/call-to-astrologers" key="canonical" />
      </Head>
      <div className="max-w-[72rem] mx-auto px-4 mt-1">{children}</div>
    </>
  );
}
