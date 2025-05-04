import { MAIN_URL } from '@/lib/contant'
import { reader } from '@/lib/reader'
import type { MetadataRoute } from 'next'
 
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const git = await reader()
  const slugs = await git.collections.posts.list()

  return [
    {
      url: MAIN_URL,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    ...slugs.map((slug) => ({
      url: `${MAIN_URL}/posts/${slug}`,
      lastModified: new Date(),
      priority: 0.5,
    })),
  ]
}