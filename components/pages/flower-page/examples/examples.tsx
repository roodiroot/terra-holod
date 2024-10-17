import OpenModalBatton from "@/components/active-components/open-modal-batton";
import SectionContainer from "@/components/section-container";
import { Button } from "@/components/ui/button";
// import Image from "next/image";

const ExamplesSection = () => {
  return (
    <SectionContainer className="bg-[#DEE0E0]">
      <h2 className="text-4xl md:text-5xl max-w-2xl font-bold">
        Комплект поставки холодильного оборудования
      </h2>
      <div className="flex flex-col mt-10 gap-10 md:flex-row md:gap-16 md:mt-20">
        <div className="aspect-[0.82/1] bg-white flex-1 rounded-[40px] md:rounded-[60px] overflow-hidden"></div>
        <div className="flex-1 space-y-10">
          <p>
            Мы предлагаем полный комплект холодильного оборудования для
            цветочных магазинов, который включает:
          </p>
          <div className="">
            <h3 className="font-semibold">Внутренние блоки</h3>
            <p className="mt-4 text-xl">
              Обеспечивают точное поддержание температуры внутри камеры,
              создавая идеальные условия для хранения цветов. Наши блоки
              адаптированы под разные объемы и требования.
            </p>
          </div>
          <div className="">
            <h3 className="font-semibold">Внешние блоки</h3>
            <p className="mt-4  text-xl">
              Отвечают за эффективное охлаждение и отвод тепла. Эти
              энергоэффективные устройства работают тихо и стабильно, даже в
              интенсивных режимах.
            </p>
          </div>
          <div className="">
            <h3 className="font-semibold">Цветочные камеры на заказ</h3>
            <p className="mt-4 text-xl">
              Мы проектируем и строим индивидуальные цветочные камеры по запросу
              вашего бизнеса. Они позволяют сохранять свежесть и
              привлекательность цветов благодаря оптимальным условиям хранения.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-10 md:mt-14">
        <OpenModalBatton>
          <Button>Подобрать оборудование</Button>
        </OpenModalBatton>
      </div>
    </SectionContainer>
  );
};

export default ExamplesSection;
