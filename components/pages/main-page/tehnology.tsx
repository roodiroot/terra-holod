import OpenModalBatton from "@/components/active-components/open-modal-batton";
import { Icons } from "@/components/icons/icons";
import SectionContainer from "@/components/section-container";
import Image from "next/image";

const TehnologyForMainPage = () => {
  return (
    <SectionContainer className="bg-[#DEE0E0]">
      <div className="max-w-xl mx-auto pt-[60px] lg:max-w-none lg:mx-0 lg:pt-[85px]">
        <h2 className="max-w-3xl text-balance text-4xl font-bold text-center lg:text-left lg:text-5xl">
          Технологии для максимальной эффективности
        </h2>
        <div className="flex flex-col mt-[30px] gap-7 max-w-xl mx-auto lg:max-w-none lg:flex-row lg:items-start">
          <DescriptionTehnology />
          <ExampleTehnology />
        </div>
      </div>
    </SectionContainer>
  );
};

export default TehnologyForMainPage;

const ExampleTehnology = () => {
  return (
    <div className="bg-[#2E2E2E] flex-1 rounded-[40px] overflow-hidden flex flex-col md:rounded-[60px] lg:aspect-[0.82/1]">
      <div className="relative aspect-[2/1.3] lg:aspect-auto lg:h-1/2">
        <Image
          alt="refregerator"
          width={631}
          height={473}
          src="/images/refregerator.jpg"
          className="absolute w-full h-full object-cover"
        />
      </div>
      <div className="relative flex-1">
        <Icons.blur className="absolute top-0 -left-[11.5rem]" />
        <div className="h-full flex flex-col justify-between p-4 md:py-7 md:px-8">
          <div>
            <div className="flex justify-between items-start">
              <h3 className="max-w-sm font-bold text-white text-2xl lg:text-3xl">
                Холодильные камеры для хранения цветов
              </h3>
              <OpenModalBatton className="p-0 cursor-pointer" variant="link">
                <Icons.arrLink />
              </OpenModalBatton>
            </div>
            <p className="max-w-sm mt-5 text-white text-base lg:text-2xl">
              Мы стараемся обеспечить идеальные условия для хранения и
              демонстрации букетов.
            </p>
          </div>
          <div className="mt-auto w-full flex justify-between items-end text-white">
            <div className="text-base lg:text-2xl">стоимость</div>
            <div className="font-bold text-4xl lg:text-5xl">59 000 ₽</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const DescriptionTehnology = () => {
  return (
    <div className="flex-1 space-y-4 md:space-y-7">
      <p>
        Мы предлагаем полный комплект холодильного оборудования для цветочных
        магазинов, который включает:
      </p>
      <div className="">
        <h3 className="font-semibold">Внутренние блоки</h3>
        <p className="mt-2 text-xl md:mt-4">
          Обеспечивают точное поддержание температуры внутри камеры, создавая
          идеальные условия для хранения цветов. Наши блоки адаптированы под
          разные объемы и требования.
        </p>
      </div>
      <div className="">
        <h3 className="font-semibold">Внешние блоки</h3>
        <p className="mt-2 text-xl md:mt-4">
          Отвечают за эффективное охлаждение и отвод тепла. Эти
          энергоэффективные устройства работают тихо и стабильно, даже в
          интенсивных режимах.
        </p>
      </div>
      <div className="">
        <h3 className="font-semibold">Цветочные камеры на заказ</h3>
        <p className="mt-2 text-xl md:mt-4">
          Мы проектируем и строим индивидуальные цветочные камеры по запросу
          вашего бизнеса. Они позволяют сохранять свежесть и привлекательность
          цветов благодаря оптимальным условиям хранения.
        </p>
      </div>
    </div>
  );
};
