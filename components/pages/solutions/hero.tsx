import Link from "next/link";
import { ArrowRight } from "lucide-react";

import HeroContainer from "../hero-container";

const HeroSolutions = () => {
  return (
    <HeroContainer>
      <div className="flex flex-col gap-y-12 w-full max-w-sm lg:max-w-none mx-auto lg:gap-x-6 lg:flex-row">
        <VariantItem />
        <VariantItem />
        <VariantItem />
      </div>
    </HeroContainer>
  );
};

export default HeroSolutions;

const VariantItem = () => {
  return (
    <div className="flex flex-col gap-y-10 flex-1">
      <div className="bg-slate-100 rounded-[50px] overflow-hidden aspect-square lg:rounded-[60px]"></div>
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
          <Link
            href={"/solutions/flowers"}
            className="text-[--accent] cursor-pointer px-0 text-xl"
          >
            <div className="flex gap-1 text-[--accent] font-semibold">
              <span>Подробнее</span> <ArrowRight />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
