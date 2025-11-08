import { Metadata } from "next";

import { getPostBySlug } from "@/lib/wp-api";
import PostText from "@/components/pages/post/post-text";
import HeroForPostPage from "@/components/pages/post/hero";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params).slug;
  const post = await getPostBySlug(slug);

  return {
    title: post.title,
    description:
      "Холодильное оборудование для бизнеса от Терра-Холод. Работаем по всей России. Производство поставка и обслуживание.",
    openGraph: {
      title: post.title,
      description:
        "Холодильное оборудование для бизнеса от Терра-Холод. Работаем по всей России. Производство поставка и обслуживание.",
      url: `${process.env.NEXT_PUBLIC_URL}/blog/${post.slug}`,
      images: [
        {
          url: post.featuredImage
            ? post.featuredImage.node.sourceUrl
            : `${process.env.NEXT_PUBLIC_URL}/main.jpg`,
          width: 1200,
          height: 630,
          alt: post.title,
          type: "image/jpeg",
        },
      ],
    },
  };
}

const PostPage = async ({ params }: Props) => {
  const slug = (await params).slug;
  const post = await getPostBySlug(slug);
  const date = new Date(post?.date);
  const formattedDate = date.toLocaleDateString("ru-RU", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <HeroForPostPage
        imgUrl={post?.featuredImage?.node?.sourceUrl}
        title={post?.title}
        date={formattedDate}
      />
      <PostText content={post?.content || ""} />
    </>
  );
};

export default PostPage;
