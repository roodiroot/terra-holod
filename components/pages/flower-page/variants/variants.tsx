import OpenModalBatton from "@/components/active-components/open-modal-batton";
import SectionContainer from "@/components/section-container";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const VariantsSection = () => {
  return (
    <SectionContainer className="bg-[#ECEDEB]">
      <p className="font-semibold text-3xl text-[--accent] text-center lg:text-left">
        Под ваши задачи
      </p>
      <h2 className="text-5xl text-center lg:text-left lg:text-7xl max-w-2xl mx-auto lg:mx-0 mt-5 font-bold">
        Решения для вашего бизнеса
      </h2>
      <div className="flex flex-col gap-y-12 mt-14 lg:mt-20 w-full max-w-sm lg:max-w-none mx-auto lg:gap-x-12 lg:flex-row">
        <VariantItem />
        <VariantItem />
      </div>
    </SectionContainer>
  );
};

export default VariantsSection;

const VariantItem = () => {
  return (
    <div className="flex flex-col gap-y-10 flex-1">
      <div className="bg-white rounded-[50px] overflow-hidden aspect-square lg:rounded-[60px]"></div>
      <div className="">
        <h3 className="text-3xl lg:text-4xl font-bold">
          Холодильная камера для цветов Premium
        </h3>
        <p className="mt-6">
          Идеальное решение для флористов: стильный дизайн с прозрачными
          панелями, поддержка оптимальной температуры и влажности для
          длительного хранения цветов.
        </p>
        <div className="mt-3">
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
