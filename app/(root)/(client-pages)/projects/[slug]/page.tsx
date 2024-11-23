import { getPostBySlug } from "@/lib/wp-api";
import PostText from "@/components/pages/post/post-text";
import HeroForPostPage from "@/components/pages/post/hero";

const PostPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
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
