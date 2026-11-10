import { mockProducts } from "./mock-products";

// WordPress API отключён: возвращаем только локальные данные.
export async function fetchAPI(
  query = "",
  _options: Record<string, any> = {}
): Promise<any> {
  const slug = query.match(/where:\s*\{\s*name:\s*"([^"]+)"/)?.[1];

  return {
    products: {
      nodes: slug
        ? mockProducts.filter((product) => product.slug === slug)
        : mockProducts,
    },
    posts: { nodes: [] },
    post: null,
    docs: { nodes: [] },
  };
}
