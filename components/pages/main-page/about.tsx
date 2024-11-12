import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons/icons";
import SectionContainer from "@/components/section-container";

const AboutForMainPage = () => {
  return (
    <SectionContainer className="">
      <div className="max-w-xl mx-auto pt-[60px] pb-[60px] lg:max-w-none lg:mx-0 lg:pt-[85px]">
        <h2 className=" text-balance text-4xl font-bold text-center lg:text-left lg:text-5xl">
          Эксперты в своем деле
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
        src="/images/main-page/about.jpg"
        className="absolute w-full h-full object-cover"
      />
      <div className="relative z-20 w-full h-full p-4 flex flex-col justify-between items-start md:p-7">
        <Button className="border-white text-white" variant="outline">
          Связаться
        </Button>
        <Link href={"/about"} className="flex gap-4 text-white font-medium ">
          <Icons.arrLink />
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
      <h3 className="font-semibold">Продление жизни срезанных цветов</h3>
      <p>
        Наша компания с 2022 года предлагает надежные решения в области
        холодильного оборудования для цветочных магазинов, продуктовых, пивных
        заведений и складов. Мы обеспечиваем стабильное охлаждение, необходимое
        для сохранения продукции в идеальном состоянии.
      </p>
      <p>
        Мы гордимся высокой экспертизой и командой квалифицированных
        специалистов, сертифицированных в области проектирования и монтажа
        сложных систем охлаждения. Наши сотрудники постоянно совершенствуют свои
        навыки, чтобы предлагать лучшие решения и поддерживать оборудование на
        высшем уровне. Ваш бизнес может рассчитывать на профессиональный подход
        и надежное партнерство.
      </p>
    </div>
  );
};
