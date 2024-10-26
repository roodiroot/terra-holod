import Image from "next/image";

import { Icons } from "@/components/icons/icons";
import SectionContainer from "@/components/section-container";
import OpenModalBatton from "@/components/active-components/open-modal-batton";

const ExamplesSection = () => {
  return (
    <SectionContainer className="">
      <h2 className="text-4xl text-center mx-auto lg:mx-0 lg:text-left lg:text-5xl max-w-2xl font-bold">
        Комплект поставки холодильного оборудования
      </h2>
      <div className="flex flex-col mt-10 gap-10 max-w-md mx-auto lg:max-w-none lg:flex-row lg:items-center lg:gap-16 lg:mt-16">
        <div className="aspect-[0.82/1] bg-[--accent] flex-1 rounded-[40px] md:rounded-[60px] overflow-hidden flex flex-col">
          <div className="relative h-1/2">
            <Image
              alt="refregerator"
              width={631}
              height={473}
              src="/images/refregerator.jpg"
              className="absolute w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <div className="py-7 px-8 lg:px-12 lg:py-10 h-full flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start">
                  <h3 className="font-bold text-white text-2xl lg:text-3xl">
                    Холодильные камеры для хранения цветов
                  </h3>
                  <OpenModalBatton
                    className="p-0 cursor-pointer"
                    variant="link"
                  >
                    <Icons.arrLink />
                  </OpenModalBatton>
                </div>
                <p className="mt-5 text-white text-base lg:text-2xl">
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
      {/* <div className="mt-10 md:mt-14">
        <OpenModalBatton>
          <Button>Подобрать оборудование</Button>
        </OpenModalBatton>
      </div> */}
    </SectionContainer>
  );
};

export default ExamplesSection;
