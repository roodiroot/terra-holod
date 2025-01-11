import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons/icons";
import { getAllPostsWithSlug } from "@/lib/wp-api";

import SectionContainer from "@/components/section-container";
import OpenModalBatton from "@/components/active-components/open-modal-batton";

const SolutionsForMainPage = async () => {
  const posts = await getAllPostsWithSlug(3);
  return (
    <SectionContainer>
      <div className="max-w-xl mx-auto pt-4 sm:pt-[30px]  pb-[30px] lg:max-w-none lg:pt-[85px] lg:mx-0">
        <div className="grid  gap-y-4 grid-cols-1 md:gap-y-6 lg:gap-x-6 lg:grid-cols-3">
          <BentooContainer className="relative min-h-[390px]">
            <Image
              alt="store"
              width={416}
              height={496}
              src="/images/for_page/external_unit.jpg"
              className="absolute z-0 w-full h-full object-cover"
            />
            <div className="relative z-10 p-4 w-full h-full sm:p-7 flex items-end">
              <h4 className="text-4xl font-bold text-white">
                Пищевое производство
              </h4>
            </div>
          </BentooContainer>
          <BentooContainer className="col-span-2 relative">
            <Link
              href={"/projects/det-pishevaia-stancia"}
              className="absolute inset-0"
            />
            <div className="p-4 sm:p-7">
              <div className="w-full h-full flex flex-col justify-between gap-4 lg:gap-[170px]">
                <h3 className="font-bold text-3xl">
                  Холодильные камеры для детской пищевой станции
                </h3>
                <div className="flex justify-between items-end">
                  <p className="max-w-lg">
                    Мы успешно реализовали проект по установке холодильного
                    оборудования для детской пищевой станции с площадью склада
                    1500 м². Система обеспечила надежное хранение детского
                    питания при строго заданной температуре, что гарантировало
                    сохранение его качества и безопасности.
                  </p>
                  <Icons.arrLink className="stroke-black -rotate-90" />
                </div>
              </div>
            </div>
          </BentooContainer>
          <BentooContainer className="relative col-span-2 min-h-[390px]">
            <Link
              href={
                "/projects/obsluzhivanie-kholodilnykh-ustanovok-dlya-bolshogo-produktovogo-sklada-ploshchadyu-10-000-m2"
              }
              className="absolute inset-0 z-20"
            />
            <Image
              alt="store"
              width={796}
              height={496}
              src="/images/for_page/big_store.jpg"
              className="absolute z-0 w-full h-full object-cover"
            />
            <div className="relative flex flex-col justify-between h-full z-10 p-4 sm:p-7 ">
              <div className="flex gap-4">
                <OpenModalBatton variant="outline">
                  <Button
                    className="relative z-30 border-white self-start text-white"
                    variant="outline"
                  >
                    Связаться
                  </Button>
                </OpenModalBatton>
                <p className="text-white font-medium leading-6">
                  обеспечиваем свежесть <br /> и долгий срок хранения
                </p>
              </div>
              <Icons.arrLink className="stroke-white" />
            </div>
          </BentooContainer>
          <BentooContainer className="">
            <div className="p-4 sm:p-7 w-full h-full">
              <div className="w-full h-full flex flex-col justify-between gap-4 lg:gap-[170px]">
                <h3 className="font-bold text-3xl">Складской комплекс</h3>
                <div className="flex flex-col gap-5">
                  <div className="order-2 lg:ordr-1">
                    <Button asChild>
                      <Link href="/projects">Все проекты</Link>
                    </Button>
                  </div>
                  <p className="order-1 lg:ordr-2">
                    Обслуживание холодильного оборудования, склада площадью 2
                    700 м²
                  </p>
                </div>
              </div>
            </div>
          </BentooContainer>
        </div>
      </div>
      <div className="pb-[30px]">
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
                  imgUrl={i.featuredImage.node.sourceUrl}
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
