import { Icons } from "@/components/icons/icons";
import SectionContainer from "@/components/section-container";
import { Button } from "@/components/ui/button";
import Image from "next/image";

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

const BenifitsForMainPage = () => {
  return (
    <SectionContainer className="bg-[#F6F6F6]">
      <div className="max-w-xl mx-auto pt-4 md:pt-[30px]  pb-[30px] flex flex-col gap-4 md:gap-6 lg:max-w-none lg:pt-[85px] lg:mx-0">
        <div className="flex flex-wrap flex-row gap-4 md:gap-6">
          <BlackBenifit />
          {benifits.map((i) => (
            <WhiteBenifit key={i.value} value={i.value}>
              {i.text}
            </WhiteBenifit>
          ))}
        </div>
        <BigBenifit />
      </div>
    </SectionContainer>
  );
};

export default BenifitsForMainPage;

const BlackBenifit = () => {
  return (
    <div className="relative w-full bg-[#2E2E2E] p-4 rounded-[40px] overflow-hidden  md:rounded-[60px] md:p-7 lg:w-auto">
      <div className="absolute z-0 inset-0">
        <Image
          alt="refregerator"
          width={631}
          height={473}
          src="/images/main-page/ben1.jpg"
          className="absolute w-full h-full object-cover"
        />
      </div>
      <Icons.blur className="absolute z-10 top-0 -left-[11.5rem]" />
      <Button
        className="border-white relative z-10 text-white"
        variant="outline"
      >
        Связаться
      </Button>
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
    <div className="bg-white p-4 rounded-[40px] md:rounded-[60px] md:p-7">
      <h2 className="text-4xl font-bold">
        От идеи до обслуживания: Полный цикл решений для вашего бизнеса
      </h2>
      <div className="lg:h-[219px]"></div>
      <p>
        Мы проектируем, устанавливаем и обслуживаем холодильное оборудование.
        Наша команда обеспечивает тщательное планирование и исполнение, чтобы
        гарантировать надежное функционирование холодильного оборудования и
        оптимальную температуру для вашего бизнеса.
      </p>
    </div>
  );
};
