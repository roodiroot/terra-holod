import Image from "next/image";
import { ArrowRight } from "lucide-react";

import SectionContainer from "@/components/section-container";
import OpenModalBatton from "@/components/active-components/open-modal-batton";

const variantsList = [
  {
    title: "Холодильная камера для цветов Premium",
    description:
      "Идеальное решение для флористов: стильный дизайн с прозрачными панелями, поддержка оптимальной температуры и влажности для длительного хранения цветов.",
    img: (
      <div className="absolute inset-0 p-8 lg:p-14">
        <div className="w-full h-full text-white font-bold flex justify-end items-end">
          <div className="text-right">
            <div className="text-5xl lg:text-7xl">-5 до +5</div>
            <div className="lg:text-4xl">
              до 23м<sup>3</sup>
            </div>
          </div>
        </div>
        <Image
          alt="split_1"
          width={601}
          height={545}
          src="/images/variant/23m.png"
          className="absolute top-[-8%] left-[-12%]"
        />
      </div>
    ),
  },
  {
    title: "Энергоэффективная камера EcoSave",
    description:
      "Эко-решение с высокой энергоэффективностью: экономия на электроэнергии до 30%, при этом сохраняются все необходимые условия для свежести цветов.",
    img: (
      <div className="absolute inset-0 p-8 lg:p-14">
        <div className="text-white font-bold flex justify-end">
          <div className="text-right">
            <div className="text-5xl lg:text-7xl">-5 до +5</div>
            <div className="lg:text-4xl">
              до 127м<sup>3</sup>
            </div>
          </div>
        </div>
        <Image
          alt="split_2"
          width={585}
          height={549}
          src="/images/variant/28m.png"
          className="absolute right-[0%] bottom-[-10%]"
        />
      </div>
    ),
  },
];

const VariantsSection = () => {
  return (
    <SectionContainer className="bg-[#ECEDEB]">
      <div className="pt-[60px] pb-[30px]">
        <p className="font-semibold text-3xl text-[--accent] text-center lg:text-left">
          Под ваши задачи
        </p>
        <h2 className="text-5xl text-center lg:text-left lg:text-7xl max-w-2xl mx-auto lg:mx-0 mt-5 font-bold">
          Решения для вашего бизнеса
        </h2>
        <div className="flex flex-col gap-y-[30px] mt-6 w-full max-w-sm lg:max-w-none mx-auto lg:gap-x-[30px] lg:flex-row">
          {variantsList.map((i) => (
            <VariantItem
              key={i.title}
              title={i.title}
              img={i.img}
              description={i.description}
            />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default VariantsSection;

interface VariantItemProps {
  title: string;
  description: string;
  img: React.ReactNode;
}

const VariantItem: React.FC<VariantItemProps> = ({
  title,
  description,
  img,
}) => {
  return (
    <div className="flex flex-col gap-y-6 flex-1">
      <div
        className="relative
     bg-[--accent]
       rounded-[40px] aspect-square lg:rounded-[60px]"
      >
        {img}
      </div>
      <div className="">
        <h3 className="text-3xl lg:text-4xl font-bold max-w-sm">{title}</h3>
        <p className="mt-2 text-base max-w-sm">{description}</p>
        <div className="">
          <OpenModalBatton
            variant="link"
            className="text-[--accent] cursor-pointer px-0 text-xl"
          >
            <div className="flex gap-1 text-[--accent] font-semibold">
              <span>Получить КП</span> <ArrowRight />
            </div>
          </OpenModalBatton>
        </div>
      </div>
    </div>
  );
};
