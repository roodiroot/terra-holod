import SectionContainer from "@/components/section-container";
import Image from "next/image";

const Partners = () => {
  return (
    <SectionContainer className="bg-[#DEE0E0]">
      <p className="mx-auto font-semibold text-3xl text-center max-w-xl text-balance text-gray-600">
        Тут стоит наше холодильное оборудование
      </p>
      <div className="mt-10 w-full inline-flex gap-4 flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_30px,_black_calc(100%-30px),transparent_100%)]">
        <ul className="flex gap-4 items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
          {new Array(8).fill("").map((_, index) => (
            <PartnerItem index={index + 1} key={index} />
          ))}
        </ul>
        <ul className="flex gap-4 items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
          {new Array(8).fill("").map((_, index) => (
            <PartnerItem index={index + 1} key={index} />
          ))}
        </ul>
      </div>
    </SectionContainer>
  );
};

export default Partners;

const PartnerItem = ({ index }: { index: number }) => {
  return (
    <div className="relative aspect-[1.5/1] min-w-[150px] md:min-w-[250px]  bg-gray-300 rounded-[30px] md:rounded-[40px] lg:rounded-[60px] overflow-hidden flex items-center justify-center">
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
