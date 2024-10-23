import Image from "next/image";

import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import OpenModalBatton from "@/components/active-components/open-modal-batton";

const Partners = () => {
  return (
    <div className="relative rounded-t-[70px] md:rounded-t-[120px] bg-[#DEE0E0] -translate-y-28">
      <div className="overflow-hidden rounded-t-[70px] md:rounded-t-[120px]">
        <Container>
          <div className="rounded-t-[70px] md:rounded-t-[120px] flex lg:gap-12 flex-col-reverse lg:flex-row">
            <div className="flex-1 grid gap-4 lg:grid-cols-2">
              <div className="inline-flex gap-x-4 lg:flex-col lg:max-h-[800px]">
                <ul className="flex lg:flex-col gap-4 items-center justify-center animate-infinite-scroll-g lg:animate-infinite-scroll-v lg:mb-4">
                  {new Array(4).fill("").map((_, index) => (
                    <PartnerItem index={index + 1} key={index} />
                  ))}
                </ul>
                <ul className="flex lg:flex-col gap-4 items-center justify-center animate-infinite-scroll-g lg:animate-infinite-scroll-v">
                  {new Array(4).fill("").map((_, index) => (
                    <PartnerItem index={index + 1} key={index} />
                  ))}
                </ul>
              </div>
              <div className="inline-flex  gap-x-4 lg:flex-col  max-h-[800px] pb-16">
                <ul className="flex lg:flex-col gap-4 items-center justify-center animate-infinite-scroll-ga lg:animate-infinite-scroll-va">
                  {new Array(4).fill("").map((_, index) => (
                    <PartnerItem index={index + 5} key={index} />
                  ))}
                </ul>
                <ul className="flex lg:flex-col gap-4 items-center justify-center animate-infinite-scroll-ga lg:animate-infinite-scroll-va lg:mt-4">
                  {new Array(4).fill("").map((_, index) => (
                    <PartnerItem index={index + 5} key={index} />
                  ))}
                </ul>
              </div>
            </div>
            <div className="py-10 lg:py-[300px] flex-1 max-w-md text-center mx-auto lg:mx-0 lg:text-left">
              <h2 className="font-semibold text-3xl text-[--accent]">
                Почему выбирают нас?
              </h2>
              <p className="text-5xl font-bold mt-6 text-balance">
                Надежный выбор для бизнеса любого масштаба
              </p>
              <OpenModalBatton className="mt-6">
                <Button>Заказать расчет</Button>
              </OpenModalBatton>
            </div>
          </div>
        </Container>
      </div>
      <div className="absolute inset-x-0 bottom-0 bg-[#DEE0E0] h-28 translate-y-28"></div>
    </div>
  );
};

export default Partners;

const PartnerItem = ({ index }: { index: number }) => {
  return (
    <div className="relative aspect-[1.4/1] min-w-[290px] w-full  bg-gray-300 rounded-[30px] md:rounded-[40px] lg:rounded-[60px] overflow-hidden flex items-center justify-center shadow-md">
      <Image
        alt="partner"
        width={485}
        height={319}
        src={`/images/partners/${index}.jpg`}
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
};
