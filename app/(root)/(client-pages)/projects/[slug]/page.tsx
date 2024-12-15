import { Metadata } from "next";

import { getPostBySlug } from "@/lib/wp-api";
import PostText from "@/components/pages/post/post-text";
import HeroForPostPage from "@/components/pages/post/hero";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const slug = (await params).slug;

  // fetch data
  const post = await getPostBySlug(slug);

  return {
    title: "Выполненные проекты",
    description: post.title,
  };
}

const PostPage = async ({ params }: Props) => {
  const slug = (await params).slug;
  const post = await getPostBySlug(slug);
  const date = new Date(post.date);
  const formattedDate = date.toLocaleDateString("ru-RU", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <HeroForPostPage
        imgUrl={post?.featuredImage?.node?.sourceUrl}
        title={post.title}
      />
      <PostText content={post?.content} date={formattedDate} />
    </>
  );
};

export default PostPage;
