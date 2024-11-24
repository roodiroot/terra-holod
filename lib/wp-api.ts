const API_URL = process.env.WORDPRESS_API_URL || "";

export interface Post {
  date: string; // Ожидаем, что дата будет в формате строки
  title: string; // Заголовок поста
  slug: string; // Уникальный идентификатор или адрес поста
  excerpt: string; // Краткое описание
  content: string;
  featuredImage: {
    node: {
      sourceUrl: string; // URL изображения
    };
  };
}

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
export async function getAllPostsWithSlug(): Promise<Post[]> {
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

export async function getPostBySlug(slug: string): Promise<Post> {
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

//Получаем все посты
// export async function getAllPosts(): Promise<
//   {
//     slug: string;
//     title: string;
//     featuredImage: { node: { sourceUrl: string } };
//   }[]
// > {
//   const response = await fetchAPI(`
//     query SinglePost {
//       posts {
//         nodes {
//         slug
//           title
//           excerpt
//           date
//           featuredImage {
//             node {
//               sourceUrl
//             }
//           }
//           projects {
//             description
//             fieldGroupName
//             title
//             img {
//               node {
//                 mediaItemUrl
//               }
//             }
//           }
//         }
//       }
//     }
//   `);

//   return response.posts.nodes;
// }
