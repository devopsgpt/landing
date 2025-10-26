import { MetadataRoute } from 'next';

export const runtime = 'edge';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://hobs.ai';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
