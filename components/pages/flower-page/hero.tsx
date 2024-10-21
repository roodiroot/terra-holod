import Image from "next/image";

import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import OpenModalBatton from "@/components/active-components/open-modal-batton";

const HeroFlowers = () => {
  return (
    <div className="h-[900px] bg-gradient-to-br from-gray-200 to-gray-500 overflow-hidden">
      <Container>
        <div className="flex flex-col lg:flex-row">
          <div className="flex flex-col w-full max-w-sm md:max-w-2xl py-24 md:py-32 lg:py-40">
            <h1 className="relative z-20 text-5xl md:text-7xl text-balance font-bold">
              Холодильные камеры для цветочных магазинов
            </h1>
            <p className="relative z-20 text-2xl text-balance text-[--secondary] mt-8">
              Производим и монтируем оборудование под Ваши потребности.
            </p>
            <div className="relative z-20 mt-8 md:mt-24">
              <OpenModalBatton>
                <Button>Консультация</Button>
              </OpenModalBatton>
            </div>
          </div>
          <div className="relative flex-1 pointer-events-none md:py-40">
            <div className="hidden lg:block w-full h-full relative ">
              <p className="z-20 absolute text-sm text-gray-600 bottom-0 right-0 [writing-mode:vertical-rl] rotate-180">
                охлаждаем помещения с 2019 года
              </p>
            </div>
            <div className="absolute pointer-events-none top-1/2 -translate-y-1/2 left-0 lg:-left-[41rem]  aspect-square w-[1500px]">
              <Image
                alt="main_img"
                width={1520}
                height={1400}
                src="/images/shadow.png"
                className="absolute top-0 left-0 h-auto max-w-full w-[1500px] pointer-events-none opacity-100  animate-fog"
              />
            </div>
            <div className="absolute pointer-events-none -top-[17rem] md:top-[-25rem] lg:top-20 bg-sky-500 -right-[13rem] sm:-right-24 w-[500px] lg:w-[700px] z-10">
              <Image
                alt="flower"
                width={700}
                height={700}
                src="/images/flower.png"
                className="absolute top-0 left-0 h-auto"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroFlowers;
