import OpenModalBatton from "@/components/active-components/open-modal-batton";
import { Icons } from "@/components/icons/icons";
import SectionContainer from "@/components/section-container";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const TehnologyForMainPage = () => {
  return (
    <SectionContainer className="bg-[#F6F6F6]">
      <div className="max-w-xl mx-auto pt-[60px] lg:max-w-none lg:mx-0 lg:pt-[85px]">
        <h2 className="max-w-3xl text-balance text-4xl font-bold lg:text-5xl">
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
    <div className="bg-[#2E2E2E] flex-1 rounded-[40px] overflow-hidden flex flex-col md:rounded-[60px] ">
      <div className="relative aspect-[2/1.3] lg:aspect-[1.5/1] lg:h-1/2">
        <Image
          alt="refregerator"
          width={631}
          height={473}
          src="/images/for_page/three_unit_1.jpg"
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
            <p className="max-w-sm mt-5 text-white text-base">
              Мы стараемся обеспечить идеальные условия для хранения и
              демонстрации букетов.
            </p>
          </div>
          <div className="mt-8 w-full flex justify-between items-end text-white">
            <div className="text-base">стоимость</div>
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
      <div className="">
        <p className="mt-2 text-xl md:mt-4">
          Инверторные технологии стали неотъемлемой частью современных систем
          охлаждения, и мы активно используем их в нашем оборудовании.
          Инверторные компрессоры позволяют регулировать скорость работы,
          обеспечивая более точное поддержание температуры и снижая
          энергопотребление. Это не только повышает эффективность работы
          холодильных систем, но и значительно продлевает их срок службы.
        </p>
      </div>
      <div className="">
        <h3 className="font-semibold">Экономия и надежность</h3>
        <p className="mt-2 text-xl md:mt-4">
          Использование инверторного оборудования обеспечивает нашим клиентам
          экономию до 30% на расходах электроэнергии. Такие системы работают
          тихо, без резких запусков и остановок, что минимизирует износ деталей
          и повышает надежность оборудования. Мы внедряем эти технологии в
          каждый проект, чтобы гарантировать клиентам лучшее соотношение цены и
          качества.
        </p>
      </div>
      <Button>Подобрать оборудование</Button>
    </div>
  );
};
