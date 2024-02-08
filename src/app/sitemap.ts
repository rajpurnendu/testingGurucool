import { GET_Spec_Astrologer2, getAllblogs } from "@/lib/data";

import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const data = await getAllblogs(1, 300);
  const blogEntries: MetadataRoute.Sitemap = data.map((blog: any) => {
    const formattedTitle = blog.title
      .trim()
      .replace(/%/g, "-")
      .replace(/\s+/g, "-");
    let lowercaseformattedTitle = formattedTitle.toLowerCase();

    // Capitalize the first character
    lowercaseformattedTitle =
      lowercaseformattedTitle.charAt(0).toUpperCase() +
      lowercaseformattedTitle.slice(1);
    return {
      //   loc: `${process.env.BASE_URL}/blogs/${blog.title}`,
      url: `${process.env.BASE_URL}/blogs/${escapeXml(
        lowercaseformattedTitle
      )}`,
      lastModified: blog.updatedAt,
    };
  });

  const astroData = await GET_Spec_Astrologer2("All");
  //   console.log(astroData);
  const astrologerEntries: MetadataRoute.Sitemap = astroData.guru?.docs.map(
    (astro: any) => {
      // const formattedTitle = blog.title
      //   .trim()
      //   .replace(/%/g, "-")
      //   .replace(/\s+/g, "-");
      // let lowercaseformattedTitle = formattedTitle.toLowerCase();

      // // Capitalize the first character
      // lowercaseformattedTitle =
      //   lowercaseformattedTitle.charAt(0).toUpperCase() +
      //   lowercaseformattedTitle.slice(1);
      // console.log(astro);

      return {
        //   loc: `${process.env.BASE_URL}/blogs/${blog.title}`,
        url: `${process.env.BASE_URL}/astrologers/${escapeXml(astro.userName)}`,
        lastModified: astro.updatedAt,
      };
    }
  );
  return [
    { url: `${process.env.BASE_URL}`, lastModified: new Date() },
    { url: `${process.env.BASE_URL}/aboutUs` },
    { url: `${process.env.BASE_URL}/termandconditions` },
    { url: `${process.env.BASE_URL}/contactUs` },
    { url: `${process.env.BASE_URL}/blogs` },
    { url: `${process.env.BASE_URL}/call-to-astrologers` },
    ...blogEntries,
    ...astrologerEntries,
  ];
}

function escapeXml(unsafeStr: string) {
  return unsafeStr
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
