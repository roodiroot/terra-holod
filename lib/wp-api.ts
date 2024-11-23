const API_URL = process.env.WORDPRESS_API_URL || "";

async function fetchAPI(query = "", { variables }: Record<string, any> = {}) {
  const headers = { "Content-Type": "application/json" };

  const res = await fetch(API_URL, {
    headers,
    method: "POST",
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }
  return json.data;
}

//Получаем все посты
export async function getAllPostsWithSlug(): Promise<
  {
    slug: string;
    title: string;
    featuredImage: { node: { sourceUrl: string } };
  }[]
> {
  const response = await fetchAPI(`
    query getAllPostsWithSlug {
      posts {
        nodes {
          slug
          title
          excerpt
          date
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  `);

  return response.posts.nodes;
}

export async function getPostBySlug(slug: string) {
  const decodedStr = decodeURIComponent(slug);
  const response = await fetchAPI(
    `
    query SinglePost($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        title
        slug
        content
        date
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
    `,
    {
      variables: {
        id: decodedStr,
        idType: "SLUG",
      },
    }
  );

  return response.post;
}
