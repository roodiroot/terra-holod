import { fetchAPI } from "../fetch-api";

export type DocItem = {
  title: string;
  docsContent: {
    content: string;
    file: {
      node: {
        link: string | null;
      } | null;
    } | null;
  };
};

export async function getAllDocumentByTitle(title: string): Promise<DocItem> {
  const response = await fetchAPI(`
      query getAllFAQBlock {
        docs (where: {title: "${title}"}) {
            nodes {
                title
                docsContent {
                    content
                    file {
                        node {
                            link
                        }
                    }
                }
            }
        }
      }
    `);

  return response?.docs?.nodes[0];
}
