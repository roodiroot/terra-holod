import Image from "next/image";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import TitleCardItem from "../general/title-card-item";

interface CardItemProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  slug: string;
  volumeOfRefrigerator?: string;
  operatingRange?: string;
  img?: string;
  application?: string;
  cooling_capacity?: string;
  voltage?: string;
  consumption?: string;
  price?: number | null;
}

const CardItem: React.FC<CardItemProps> = ({
  title,
  slug,
  volumeOfRefrigerator,
  consumption,
  operatingRange,
  img,
  application,
  cooling_capacity,
  voltage,
  price,
}) => {
  console.log("IMAGE", img)
  return (
    <div className="w-full rounded-[40px] overflow-hidden bg-[#F7F6F9] shadow-md">
      <div className="relative w-full aspect-square">
        <div className="absolute inset-0 z-20">
          {img && <Image fill src={img} alt="mini-product" />}
        </div>
      </div>
      <div className="relative z-10 px-5 py-4">
        <div className="">
          {application ? (
            <p className="text-xs uppercase text-[--accent] font-semibold  line-clamp-2 text-balance">
              X-Series
            </p>
          ) : (
            ""
          )}
          <TitleCardItem title={title} slug={slug} />
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
          <div className="mt-4 flex justify-between gap-4 items-end">
            <Button asChild size="sm">
              <Link href={`/catalog/${slug}`}>Подробнее</Link>
            </Button>
            <span className=" whitespace-nowrap">
              {price ? (
                new Intl.NumberFormat("ru").format(price) + " р."
              ) : (
                <span className="text-sm font-semibold">По запросу</span>
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
