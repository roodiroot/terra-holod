import Image from "next/image";

import { Button } from "@/components/ui/button";

interface CardItemProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  volumeOfRefrigerator?: string;
  operatingRange?: string;
  img?: string;
  application?: string;
  cooling_capacity?: string;
  voltage?: string;
  consumption?: string;
}

const CardItem: React.FC<CardItemProps> = ({
  title,
  volumeOfRefrigerator,
  consumption,
  operatingRange,
  img,
  application,
  cooling_capacity,
  voltage,
}) => {
  return (
    <div className="w-full rounded-[40px] shadow-sm overflow-hidden bg-[#F7F6F9]">
      <div className="relative w-full aspect-square bg-[#7493C9]">
        <svg
          className="absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          width="577"
          height="577"
          viewBox="0 0 577 577"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_675_97687)">
            <circle cx="288.5" cy="288.5" r="130.5" fill="white" />
          </g>
          <defs>
            <filter
              id="filter0_f_675_97687"
              x="0.199997"
              y="0.199997"
              width="576.6"
              height="576.6"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="78.9"
                result="effect1_foregroundBlur_675_97687"
              />
            </filter>
          </defs>
        </svg>
        <div className="absolute inset-4 z-20">
          {img && <Image fill src={img} alt="mini-product" />}
        </div>
      </div>
      <div className="px-5 py-4">
        <div className="">
          {application ? (
            <p className="text-xs uppercase text-[--accent] font-semibold  line-clamp-2 text-balance">
              {application} с камерой {volumeOfRefrigerator || ""}
            </p>
          ) : (
            ""
          )}
          <h4 className="font-bold">Terra {title}</h4>
          <ul className="text-sm mt-2 max-w-[240px]">
            {cooling_capacity ? (
              <li className="w-full flex justify-between">
                <p className="line-clamp-1">Холодопроизводительность</p>
                <p className="font-semibold text-right">{cooling_capacity}</p>
              </li>
            ) : (
              ""
            )}
            {volumeOfRefrigerator ? (
              <li className="w-full flex justify-between">
                <p className="">Объём камеры</p>
                <p className="font-semibold  text-right">
                  {volumeOfRefrigerator}
                </p>
              </li>
            ) : (
              ""
            )}
            {operatingRange ? (
              <li className="w-full flex justify-between">
                <p className="">Температурный режим</p>
                <p className="font-semibold  text-right">{operatingRange}</p>
              </li>
            ) : (
              ""
            )}

            {consumption ? (
              <li className="w-full flex justify-between">
                <p className="">Энергопотребление</p>
                <p className="font-semibold  text-right">{consumption}</p>
              </li>
            ) : (
              ""
            )}

            {voltage ? (
              <li className="w-full flex justify-between">
                <p className="">Напряжение</p>
                <p className="font-semibold  text-right">{voltage}</p>
              </li>
            ) : (
              ""
            )}
          </ul>
          <div className="mt-4">
            <Button size="sm">Консультация</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
