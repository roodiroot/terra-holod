import Link from "next/link";

import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons/icons";
import { getAllPostsWithSlug } from "@/lib/wp-api";

import SectionContainer from "@/components/section-container";

const SolutionsForMainPage = async () => {
  const posts = await getAllPostsWithSlug(3);
  return (
    <SectionContainer>
      <div className="py-[30px]">
        <div className="max-w-xl mx-auto flex flex-col gap-4 md:gap-6 lg:max-w-none lg:mx-0">
          <ul className="flex flex-wrap flex-row gap-4 md:gap-6">
            {posts.map((i) => {
              const date = new Date(i.date);
              const formattedDate = date.toLocaleDateString("ru-RU", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              });
              return (
                <ProjectItem
                  key={i.title}
                  title={i.title}
                  imgUrl={i.featuredImage?.node?.sourceUrl}
                  excerpt={i.excerpt}
                  slug={i.slug}
                  date={formattedDate}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </SectionContainer>
  );
};

export default SolutionsForMainPage;

interface BentooContainerProps extends React.HTMLAttributes<HTMLDivElement> {}
const BentooContainer: React.FC<BentooContainerProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      {...props}
      className={cn(
        "flex-1 rounded-[40px] overflow-hidden bg-[#F6F6F6] md:rounded-[60px]",
        className
      )}
    >
      {children}
    </div>
  );
};

const ProjectItem = ({
  title,
  excerpt,
  slug,
  date,
}: {
  title: string;
  imgUrl?: string;
  excerpt: string;
  slug: string;
  date: string;
}) => {
  return (
    <div className="min-w-[290px] p-4 rounded-[40px] flex-1 relative bg-[#F6F6F6]  overflow-hidden md:p-7 md:rounded-[60px]">
      <Link href={`/projects/${slug}`} className="absolute inset-0" />
      <div className="w-full h-full flex flex-col gap-4 justify-between">
        <div className="flex gap-4">
          <h2 className="font-bold ">{title}</h2>
          <Icons.arrLink className="stroke-black/60 min-w-10 rotate-180 cursor-pointer" />
        </div>
        <div className="text-sm space-y-1">
          <span className="italic">{date}</span>
          <article
            className=" line-clamp-4"
            dangerouslySetInnerHTML={{ __html: excerpt }}
          ></article>
        </div>
      </div>
    </div>
  );
};
