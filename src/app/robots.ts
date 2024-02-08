import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin', '/privacy'],
    },
    sitemap: `https://master.d265ygkb28i3qo.amplifyapp.com/sitemap.xml`,
  }
}