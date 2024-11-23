import Image from "next/image";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons/icons";
import SectionContainer from "@/components/section-container";

const featuresList = [
  {
    title: "Комплексные решения под ключ",
    descripton:
      "Мы обеспечиваем полный цикл работ — от проектирования до установки и обслуживания, чтобы ваш бизнес всегда работал без перебоев.",
  },
  {
    title: "Команда экспертов",
    descripton:
      "Сертифицированные специалисты с опытом гарантируют надежность и высокое качество всех этапов работы.",
  },
];

const FeaturesForMainPage = () => {
  return (
    <SectionContainer className="bg-[#ECEDEB]">
      <div className="max-w-xl mx-auto pt-[30px]  pb-[30px] space-y-7 lg:max-w-none lg:pt-[85px] lg:mx-0">
        <ClassicTitleModule
          suptitle="Почему выбирают нас"
          title="Гибкость, экономия, доступная цена"
        />
        <div className="flex flex-wrap gap-4 md:gap-6">
          {featuresList.map((i) => (
            <FeaturesItem
              key={i.title}
              title={i.title}
              description={i.descripton}
            />
          ))}
          <PromoItem />
        </div>
        <ImageBlock />
      </div>
    </SectionContainer>
  );
};

export default FeaturesForMainPage;

interface ClassicTitleModuleProps extends React.HTMLAttributes<HTMLDivElement> {
  suptitle: string;
  title: string;
}
const ClassicTitleModule: React.FC<ClassicTitleModuleProps> = ({
  suptitle,
  title,
  className,
  ...props
}) => {
  return (
    <div {...props} className={cn("space-y-5", className)}>
      <p className="font-semibold text-balance text-3xl text-[--accent] text-center lg:text-left">
        {suptitle}
      </p>
      <h2 className="text-4xl text-balance text-center mx-auto lg:mx-0 lg:text-left  lg:text-5xl max-w-2xl font-bold">
        {title}
      </h2>
    </div>
  );
};

interface FeaturesItemProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
}

const FeaturesItem: React.FC<FeaturesItemProps> = ({ title, description }) => {
  return (
    <div className="relative min-w-[300px] p-4 flex-1 rounded-[40px] overflow-hidden bg-white sm:p-7 md:rounded-[60px] ">
      <div className="flex w-full h-full flex-col justify-between">
        <div className="w-2.5 h-2.5 bg-black rounded-full mb-[90px]"></div>
        <div className="space-y-7">
          <h3 className="text-3xl font-bold">{title}</h3>
          <p className="text-lg">{description}</p>
        </div>
      </div>
    </div>
  );
};
const PromoItem = () => {
  return (
    <div className="relative min-w-[300px] bg-[--accent] p-4 flex-1 rounded-[40px] overflow-hidden sm:p-7 md:rounded-[60px] ">
      <div className="w-full h-full flex flex-col justify-between items-center">
        <div className="w-full text-right text-white font-bold">
          Готовы выехаь на объект <br /> за 2 часа
        </div>
        <Icons.abstract />
        <Button
          className="border-white self-start text-white"
          variant="outline"
        >
          Связаться
        </Button>
      </div>
    </div>
  );
};

const ImageBlock = () => {
  return (
    <div className="relative w-full h-[390px] rounded-[40px] overflow-hidden bg-white md:rounded-[60px]">
      <Image
        alt="store"
        width={1235}
        height={390}
        src="/images/compressed/proj6.jpg"
        className="absolute w-full h-full object-cover"
      />
      <div className="relative z-10 w-full h-full p-4 sm:p-7 flex flex-col justify-between items-start">
        <div className="w-full text-right text-white font-bold text-5xl sm:text-[80px] leading-[60px]">
          23 500м<sup>2</sup>
        </div>
        <div className="flex flex-col gap-4 md:gap-6 md:flex-row">
          <Button
            className="border-white self-start text-white"
            variant="outline"
          >
            Связаться
          </Button>
          <span className="text-white leading-6">
            проект, монтаж <br /> и обслуживание склада
          </span>
        </div>
      </div>
    </div>
  );
};
