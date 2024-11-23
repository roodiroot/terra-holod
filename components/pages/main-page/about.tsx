import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons/icons";
import SectionContainer from "@/components/section-container";

const AboutForMainPage = () => {
  return (
    <SectionContainer className="">
      <div className="max-w-xl mx-auto pt-[60px] pb-[60px] lg:max-w-none lg:mx-0 lg:pt-[85px]">
        <h2 className=" text-balance text-4xl font-bold max-w-md lg:text-5xl">
          Дока в своем деле
        </h2>
        <div className="mt-[30px] flex flex-col gap-[30px] lg:flex-row">
          <ImageAbout />
          <DescriptionAbout />
        </div>
      </div>
    </SectionContainer>
  );
};

export default AboutForMainPage;

const ImageAbout = () => {
  return (
    <div className=" aspect-square flex-1 relative rounded-[40px] overflow-hidden md:rounded-[60px] lg:aspect-auto">
      <Image
        alt="her0-cond"
        width={700}
        height={700}
        src="/images/compressed/about3.jpg"
        className="absolute w-full h-full object-cover"
      />
      <div className="relative z-20 w-full h-full p-4 flex flex-col justify-between items-start md:p-7">
        <Button className="border-white text-white" variant="outline">
          Связаться
        </Button>
        <Link href={"/about"} className="flex gap-4 text-white font-medium ">
          <Icons.arrLink className="stroke-white" />
          <span className="leading-7">
            Подробнее <br /> о компании
          </span>
        </Link>
      </div>
    </div>
  );
};

const DescriptionAbout = () => {
  return (
    <div className="flex-1 space-y-4 md:space-y-7">
      <h3 className="font-semibold">
        Эксперты в холодильных решениях для бизнеса
      </h3>
      <p className="text-base">
        Мы создаем надежное холодильное оборудование для бизнеса, помогая нашим
        клиентам сохранять свежесть и качество их продукции. Среди наших
        партнеров — цветочные магазины, продуктовые склады, рестораны, аптеки и
        другие компании, для которых важны идеальные условия хранения.
      </p>
      <p className="text-base">
        Наши холодильные камеры сочетают надежность, современные технологии и
        эстетичный дизайн, подчеркивая профессионализм ваших заведений. Мы
        предлагаем полный спектр услуг: проектирование, монтаж и обслуживание,
        обеспечивая индивидуальный подход к каждому клиенту.
      </p>
      <p>
        Мы ценим доверие наших партнеров и стремимся стать ключевой частью их
        успеха, создавая условия, где качество всегда остается на высоте.
      </p>
    </div>
  );
};
