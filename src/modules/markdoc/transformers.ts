import type { RenderableTreeNode } from '@markdoc/markdoc';
import { resolvers } from './resolvers';
function isObject(val: unknown): val is Record<string, unknown> {
  return typeof val === 'object' && val !== null && !Array.isArray(val);
}
export async function resolveNodes(
  node: RenderableTreeNode | RenderableTreeNode[]
): Promise<RenderableTreeNode | RenderableTreeNode[]> {
  if (Array.isArray(node)) {
    const flat = (await Promise.all(node.map(child => resolveNodes(child)))).flat().filter(Boolean);
    return flat;
  }
  if (
    node &&
    typeof node === 'object' &&
    'name' in node &&
    typeof (node).name === 'string' &&
    (node).name in resolvers &&
    isObject((node).attributes)
  ) {
    const name = (node).name as string;
    const attributes = (node).attributes as Record<string, unknown>;
    const newAttrs = await resolvers[name](attributes);
    return {
      ...node,
      attributes: {
        ...attributes,
        ...newAttrs,
      },
    } as RenderableTreeNode;
  }
  if (
    node &&
    typeof node === 'object' &&
    'children' in node &&
    Array.isArray((node).children)
  ) {
    const children = (await Promise.all((node).children.map((child) => resolveNodes(child))))
      .flat()
      .filter(Boolean);
    return {
      ...node,
      children,
    } as RenderableTreeNode;
  }
  return node;
}