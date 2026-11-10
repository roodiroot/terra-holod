import type { Products } from "@/lib/wp-api";

const API_ORIGIN = process.env.NEXT_PUBLIC_API_URL;

type ApiProduct = {
  title: string;
  slug: string;
  cooling_capacity?: string | null;
  description?: string | null;
  operatingRange?: string | null;
  volumeOfRefrigerator?: string | null;
  volume1?: string | null;
  volume2?: string | null;
  volume3?: string | null;
  consumption?: string | null;
  price?: number | null;
  voltage?: string | null;
  images?: {
    url: string;
    formats?: Partial<Record<"thumbnail" | "small" | "medium" | "large", { url: string }>> | null;
  }[];
};

function toProduct(product: ApiProduct): Products {
  const description = product.description ?? "";

  return {
    title: product.title,
    slug: product.slug,
    productsFields: {
      // В текущем API категория и напряжение указаны только в описании.
      application: {
        nodes: [{ name: /x-series/i.test(description) ? "X-series" : "Общие" }],
      },
      cooling_capacity: product.cooling_capacity ?? "",
      description,
      operatingRange: product.operatingRange ?? "",
      volumeOfRefrigerator: product.volumeOfRefrigerator ?? "",
      volume1: product.volume1 ?? "",
      volume2: product.volume2 ?? "",
      volume3: product.volume3 ?? "",
      consumption: product.consumption ?? "",
      price: product.price ?? null,
      voltage: product.voltage ?? description.match(/Напряжение:\s*([^.]*)/i)?.[1]?.trim() ?? "",
      images: (product.images ?? []).map((image) => new URL(image.url, API_ORIGIN).href),
      previewImages: (product.images ?? []).map((image) =>
        new URL(image.formats?.small?.url ?? image.formats?.medium?.url ?? image.url, API_ORIGIN).href
      ),
      img: {
        node: {
          sourceUrl: product.images?.[0]?.url
            ? new URL(product.images[0].url, API_ORIGIN).href
            : "/images/refregerator.jpg",
        },
      },
      docfile: { node: { link: "" } },
    },
  };
}

// Сохраняем формат ответа для существующих потребителей WordPress API.
export async function fetchAPI(
  query = "",
  _options: Record<string, unknown> = {},
): Promise<{
  products: { nodes: Products[] };
  posts: { nodes: import("@/lib/wp-api").Post[] };
  post: import("@/lib/wp-api").Post | null;
  docs: { nodes: import("./wp-api/documents-api").DocItem[] };
}> {
  const result = {
    products: { nodes: [] as Products[] },
    posts: { nodes: [] },
    post: null,
    docs: { nodes: [] },
  };

  // Для новостей и документов отдельных REST endpoints пока нет.
  if (!/\bproducts\s*\(/.test(query) && query.trim()) return result;

  const slug = query.match(/where:\s*\{\s*name:\s*"([^"]+)"/)?.[1];
  let page = 1;
  let pageCount = 1;

  do {
    const url = new URL("/api/products", API_ORIGIN);
    url.searchParams.set("populate", "*");
    url.searchParams.set("sort", "title:asc");
    url.searchParams.set("pagination[page]", String(page));
    if (slug) url.searchParams.set("filters[slug][$eq]", slug);

    const response = await fetch(url, { next: { revalidate: 60 } });
    if (!response.ok) {
      throw new Error(`Не удалось загрузить товары: HTTP ${response.status}`);
    }

    const payload: {
      data: ApiProduct[];
      meta?: { pagination?: { pageCount?: number } };
    } = await response.json();

    if (!Array.isArray(payload.data)) {
      throw new Error("Некорректный ответ API товаров: ожидался массив data");
    }

    result.products.nodes.push(...payload.data.map(toProduct));
    pageCount = payload.meta?.pagination?.pageCount ?? 1;
    page += 1;
  } while (page <= pageCount);

  return result;
}
