import { reader } from '@/lib/reader';

type Resolver = (
  attrs: Record<string, unknown>,
) => Promise<Record<string, unknown>>;

async function resolveShowcase(slug: string) {
  const showcases = await reader().collections.showcase.all();
  const showcase = showcases.find(e => e.slug === slug);
  return showcase?.entry.path || '';
}

export const resolvers: Record<string, Resolver> = {
  SandBox: async (attrs) => ({
    ...attrs,
    path: typeof attrs.showcase === 'string' ? await resolveShowcase(attrs.showcase) : '',
  }),
  Snippet: async (attrs) => {
    return {
      ...attrs,
    };
  },
};