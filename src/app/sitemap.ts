import { MetadataRoute } from 'next';

export const runtime = 'edge';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://hobs.ai';

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/tos`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ];
}
