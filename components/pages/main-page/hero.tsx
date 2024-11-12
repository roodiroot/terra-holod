import Image from "next/image";

import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import OpenModalBatton from "@/components/active-components/open-modal-batton";

const Hero = () => {
  return (
    <div className="pb-28 mb-[30px] bg-white overflow-hidden pt-[100px]">
      <Container>
        <div className="max-w-xl mx-auto flex flex-col lg:flex-row gap-y-8 gap-x-[30px] lg:max-w-none lg:mx-0">
          <div className=" md:aspect-square bg-[#F6F6F6] rounded-[40px] md:rounded-[60px] flex-1 relative overflow-hidden p-4 md:p-10 flex flex-col gap-8 justify-between lg:max-w-[50%]">
            <h1 className="font-bold text-4xl md:text-5xl">
              Холодильное оборудование для бизнеса — производство и монтаж под
              ключ
            </h1>
            <div className="space-y-4">
              <div className="flex flex-col items-start gap-x-4 gap-y-2  sm:flex-row">
                <Button className="order-2 sm:order-1">Консультация</Button>
                <Button className="order-1 sm:order-2" variant="outline">
                  Связаться
                </Button>
              </div>
              <p className="text-base md:text-lg">
                Комплексные решения для охлаждения: от производства до
                установки. Стабильное охлаждение и оперативная поддержка для
                вашего бизнеса.
              </p>
            </div>
          </div>
          <div className=" aspect-square bg-[#F6F6F6] sm:rounded-[60px] flex-1 relative overflow-hidden -mx-4 md:mx-0">
            <Image
              alt="her0-cond"
              width={700}
              height={700}
              src="/images/main-page/hero.jpg"
              className="absolute w-full h-full object-cover"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
