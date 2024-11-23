import Link from "next/link";

import SectionContainer from "@/components/section-container";

const PostText = ({ content, date }: { content: string; date: string }) => {
  return (
    <SectionContainer className="bg-[#F6F6F6]">
      <div className="max-w-xl mx-auto pt-4 md:pt-[30px]  pb-28 flex flex-col gap-4 md:gap-6 lg:max-w-none lg:pt-[85px] lg:mx-0">
        <div className="bg-white p-4 rounded-[40px] md:rounded-[60px] md:p-7">
          <span className="italic">{date}</span>
          <article
            className="space-y-4"
            dangerouslySetInnerHTML={{ __html: content }}
          ></article>
          <div className="mt-8">
            <Link
              className="text-[--accent] font-semibold hover:underline"
              href="/projects"
            >
              Еще проекты...
            </Link>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default PostText;
