import { cn } from "@/lib/utils";
import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import PartnerItem from "../utils/partner-items";
import OpenModalBatton from "@/components/active-components/open-modal-batton";

const PartnersForMainPage = () => {
  return (
    <div className="relative rounded-t-[70px] md:rounded-t-[120px] bg-[#F0EFEF] bg-pattern bg-repeat -translate-y-28">
      <div className="overflow-hidden rounded-t-[70px] md:rounded-t-[120px]">
        <Container>
          <div className="rounded-t-[70px] md:rounded-t-[120px] flex lg:gap-12 flex-col lg:flex-row">
            <TextBlockForPartners />
            <SliderForPartners />
          </div>
        </Container>
      </div>
      <div className="absolute inset-x-0 bottom-0 bg-[#F0EFEF] h-28 translate-y-28 bg-pattern bg-repeat"></div>
    </div>
  );
};

export default PartnersForMainPage;

interface TextBlockForPartnersProps
  extends React.HTMLAttributes<HTMLDivElement> {}

const TextBlockForPartners: React.FC<TextBlockForPartnersProps> = ({
  className,
  ...props
}) => {
  return (
    <div
      {...props}
      className={cn(
        "py-10 lg:py-[300px] flex-1 max-w-md text-center mx-auto lg:mx-0 lg:text-left",
        className
      )}
    >
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
  );
};

interface SliderForPartnersProps extends React.HTMLAttributes<HTMLDivElement> {}
const SliderForPartners: React.FC<SliderForPartnersProps> = ({
  className,
  ...props
}) => {
  return (
    <div
      {...props}
      className={cn("flex-1 grid gap-4 lg:grid-cols-2", className)}
    >
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
          {new Array(5).fill("").map((_, index) => (
            <PartnerItem index={index + 5} key={index} />
          ))}
        </ul>
        <ul className="flex lg:flex-col gap-4 items-center justify-center animate-infinite-scroll-ga lg:animate-infinite-scroll-va lg:mt-4">
          {new Array(5).fill("").map((_, index) => (
            <PartnerItem index={index + 5} key={index} />
          ))}
        </ul>
      </div>
    </div>
  );
};
