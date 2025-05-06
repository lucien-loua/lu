type Resolver = (
  attrs: Record<string, unknown>,
) => Promise<Record<string, unknown>>;

export const resolvers: Record<string, Resolver> = {
  SandBox: async (attrs) => ({
    ...attrs,
  }),
  Snippet: async (attrs) => {
    return {
      ...attrs,
    };
  },
};