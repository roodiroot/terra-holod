import Image from "next/image";

import HeroContainer from "../hero-container";
import { Icons } from "@/components/icons/icons";
import { Button } from "@/components/ui/button";
import OpenModalBatton from "@/components/active-components/open-modal-batton";
import Link from "next/link";

const HeroBeers = () => {
  return (
    <HeroContainer className="md:pt-10 bg-white">
      <div className="relative">
        <div className="py-8 lg:absolute lg:z-10 lg:bottom-[-2px] lg:left-0 lg:bg-white lg:outline lg:outline-2 lg:outline-white lg:pb-0 lg:pt-4 lg:rounded-tr-[60px]">
          <Icons.lt className="hidden lg:block lg:absolute lg:bottom-[100%] lg:left-0" />
          <Icons.lt className="hidden lg:block lg:absolute lg:left-[100%] lg:bottom-0" />
          <h1 className="font-bold text-center text-[50px] md:text-[65px] lg:text-left lg:max-w-md leading-[90%] text-balance">
            Холодильные камеры для охлаждение пива
          </h1>
        </div>
        <div className="hidden lg:inline-block lg:absolute z-10 bottom-0 right-0 bg-white outline outline-2 outline-white pt-4 sm:pt-8 pl-4 sm:pl-8 rounded-tl-[25px] sm:rounded-tl-[45px]">
          <Icons.lt className="absolute bottom-[100%] right-0 -rotate-90" />
          <Icons.lt className="absolute right-[100%] bottom-[-2px] -rotate-90" />
          <OpenModalBatton>
            <Button className="font-bold hidden lg:inline-block ">
              Консультация
            </Button>
          </OpenModalBatton>
        </div>
        <div className="relative">
          <div className="absolute z-10 bottom-[-2px] right-[-2px] sm:hidden">
            <Icons.figure1 className="" />
            <Button asChild size="icon" className="absolute bottom-0 right-0">
              <Link href="tel:89875704514">
                <Icons.consultant className="stroke-white size-6" />
              </Link>
            </Button>
          </div>
          <div className="absolute z-10 bottom-[-2px] right-[-2px] hidden sm:block lg:hidden">
            <Icons.figure2 className="" />
            <OpenModalBatton>
              <Button className="absolute bottom-0 right-0 font-semibold">
                Консультация
              </Button>
            </OpenModalBatton>
          </div>
          <div className="relative w-full h-[596px] bg-sky-300 rounded-[60px] overflow-y-hidden">
            <div className="absolute z-10 top-8 left-8 w-16 h-16 bg-white rounded-full flex items-center justify-center group">
              <Icons.ex className="rotate-0 transition-all group-hover:rotate-180" />
            </div>
            <Image
              width={1200}
              height={596}
              src="/images/beer-main.jpg"
              alt="beer screenshot"
              className="absolute w-full h-full object-cover "
            />
          </div>
        </div>
        <div className="py-8 text-center lg:text-left lg:absolute lg:z-10 lg:top-[-2px] lg:right-0 lg:bg-white lg:outline lg:outline-2 lg:outline-white lg:pt-0 lg:pb-4 lg:pl-6 lg:rounded-bl-[60px]">
          <Icons.lt className="hidden lg:block lg:absolute lg:top-[100%] lg:right-0 lg:rotate-180" />
          <Icons.lt className="hidden lg:block lg:absolute lg:right-[100%] lg:top-0 lg:rotate-180" />
          <p className="font-bold text-[40px] md:text-[50px] lg:max-w-sm leading-[90%] lg:text-balance">
            Производство и монтаж оборудования
          </p>
        </div>
      </div>
    </HeroContainer>
  );
};

export default HeroBeers;
