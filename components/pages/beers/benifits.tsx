import OpenModalBatton from "@/components/active-components/open-modal-batton";
import { Icons } from "@/components/icons/icons";
import SectionContainer from "@/components/section-container";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import ProductBeers from "./products-beers";

const benifits = [
  {
    text: (
      <span>
        Экономия <br /> электроэнергии
      </span>
    ),
    value: "30%",
  },
  {
    text: (
      <span>
        Время выезда <br /> на обслуживание
      </span>
    ),
    value: "2 часа",
  },
];

const BenifitsForBeerPage = () => {
  return (
    <SectionContainer className="bg-[#DCE9F1]">
      <div className="max-w-xl mx-auto pt-4 md:pt-[30px]  pb-[30px] flex flex-col gap-4 md:gap-6 lg:max-w-none lg:pt-[85px] lg:mx-0">
        <div className="flex flex-wrap flex-row gap-4 md:gap-6">
          <BigBenifit />
          {/* <BlackBenifit />
          {benifits.map((i) => (
            <WhiteBenifit key={i.value} value={i.value}>
              {i.text}
            </WhiteBenifit>
          ))} */}
        </div>
        <ProductBeers />
      </div>
    </SectionContainer>
  );
};

export default BenifitsForBeerPage;

const BlackBenifit = () => {
  return (
    <div className="relative w-full bg-[#2E2E2E] p-4 rounded-[40px] overflow-hidden  md:rounded-[60px] md:p-7 lg:w-auto">
      <div className="absolute z-0 inset-0">
        <Image
          alt="refregerator"
          width={631}
          height={473}
          src="/images/compressed/ben1.jpg"
          className="absolute w-full h-full object-cover"
        />
      </div>
      <Icons.blur className="absolute z-10 top-0 -left-[11.5rem]" />
      <OpenModalBatton variant="outline">
        <Button
          className="border-white relative z-10 text-white"
          variant="outline"
        >
          Связаться
        </Button>
      </OpenModalBatton>
      <div className=" relative z-10 flex justify-between items-end">
        <p className="text-white mt-[75px] leading-6">
          холодильников <br /> установлено
        </p>
        <p className="ml-4 font-bold text-[80px] leading-[60px] text-white">
          +1500
        </p>
      </div>
    </div>
  );
};

const WhiteBenifit = ({
  children,
  value,
}: {
  children: React.ReactNode;
  value: string;
}) => {
  return (
    <div className="min-w-[280px] p-4 rounded-[40px] flex-1 relative bg-white  overflow-hidden  flex flex-col gap-4 justify-between md:p-7 md:rounded-[60px]">
      <p>{children}</p>
      <p className="font-bold text-[80px] self-end leading-[60px]">{value}</p>
    </div>
  );
};

const BigBenifit = () => {
  return (
    <div className="bg-white p-4 rounded-[40px] md:rounded-[60px] md:p-7 lg:space-y-4">
      <h2 className="text-4xl max-w-xl font-bold">
        Полный спектр решений для хранения и охлаждения пива в вашем магазине.
      </h2>
      <div className="hidden lg:block relative lg:h-[219px]">
        <Image
          alt="refregerator"
          width={631}
          height={473}
          src="/images/compressed/benifits.png"
          className="absolute w-full h-full object-contain"
        />
      </div>
      <div className="lg:hidden relative h-auto">
        <Image
          alt="refregerator"
          width={631}
          height={473}
          src="/images/compressed/benifits.mobil.png"
          className=" object-contain"
        />
      </div>
      <p>
        Мы специализируемся на проектировании, установке и обслуживании
        холодильного оборудования для пивных магазинов. Наша команда тщательно
        планирует и выполняет работы, чтобы обеспечить надежное функционирование
        холодильных систем и поддержание идеальной температуры пива, гарантируя
        его оптимальное хранение и сохранение качества для вашего бизнеса.
      </p>
      <div className="mt-2 sm:mt-4">
        <Button asChild>
          <Link
            className="text-base text-[--accent] font-semibold hover:underline"
            href="/projects"
          >
            Все проекты
          </Link>
        </Button>
      </div>
    </div>
  );
};
