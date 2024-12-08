import { getPostBySlug } from "@/lib/wp-api";
import PostText from "@/components/pages/post/post-text";
import HeroForPostPage from "@/components/pages/post/hero";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const slug = (await params).slug;

  // fetch data
  const post = await getPostBySlug(slug);

  return {
    title: post.title,
    description: post.excerpt,
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
