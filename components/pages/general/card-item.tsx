import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ProductCarousel from "@/components/product-carousel";

interface CardItemProps extends React.HTMLAttributes<HTMLLIElement> {
  title: string;
  slug: string;
  volumeOfRefrigerator?: string;
  operatingRange?: string;
  img?: string;
  images?: string[];
  application?: string;
  categoryLabel?: string;
  volums?: string[];
  cooling_capacity?: string;
  voltage?: string;
  consumption?: string;
  price?: number | null;
}

const CardItem: React.FC<CardItemProps> = ({
  title,
  slug,
  consumption,
  operatingRange,
  img,
  images,
  application,
  categoryLabel,
  volums,
  cooling_capacity,
  voltage,
  price,
}) => {
  const specifications = [
    { label: "Холодопроизводительность", value: cooling_capacity },
    { label: "Температура", value: operatingRange },
    { label: "Энергопотребление", value: consumption },
    { label: "Напряжение", value: voltage },
  ].filter((item) => item.value);

  return (
    <li className="group flex min-w-0 flex-col overflow-hidden rounded-2xl sm:rounded-3xl border border-black/[0.07] bg-white transition-colors duration-200 hover:border-[--accent]">
      <div className="relative m-1 sm:m-2 shrink-0 aspect-square overflow-hidden rounded-xl sm:rounded-[18px] bg-[#F7F7F5]">
        <ProductCarousel images={images?.length ? images : img ? [img] : []} title={title} />
      </div>
      <div className="flex min-w-0 flex-1 flex-col px-2.5 pb-3 pt-2 sm:px-5 sm:pb-5 sm:pt-3">
        <p className="text-[9px] sm:text-[11px] font-medium uppercase leading-3 sm:leading-4 tracking-[0.04em] sm:tracking-[0.12em] text-gray-500">
          {categoryLabel ?? (application === "X-series" ? "X-Series · универсальные" : "Холодильные сплит-системы")}
        </p>
        <h2 className="mt-2 break-words text-sm sm:text-xl font-semibold leading-tight tracking-tight">
          <Link className="rounded-sm transition-colors hover:text-[--accent] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[--accent]" href={`/catalog/${slug}`}>
            {title}
          </Link>
        </h2>
        <dl className="mb-4 mt-3 space-y-2 text-[11px] leading-4 sm:mb-6 sm:mt-5 sm:space-y-2.5 sm:text-[13px] sm:leading-5">
          {specifications.map(({ label, value }) => (
            <div key={label} className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-3">
              <dt className="min-w-0 break-words text-gray-500">{label}</dt>
              <dd className="min-w-0 break-words sm:shrink-0 sm:text-right font-medium text-[--primary]">{value}</dd>
            </div>
          ))}
          {volums?.some(Boolean) && (
            <div className="border-t border-black/[0.05] pt-2.5">
              <dt className="text-gray-500">Объём камеры</dt>
              <dd className="mt-1 flex flex-wrap gap-x-3 gap-y-1 font-medium text-[--primary]">
                {volums.filter(Boolean).map((volume, index) => <span key={`${volume}-${index}`}>{volume}</span>)}
              </dd>
            </div>
          )}
        </dl>
        <div className="mt-auto grid grid-cols-[minmax(0,1fr)_auto] items-end gap-1 sm:gap-3 border-t border-black/[0.07] pt-3 sm:pt-4">
          <div className="min-w-0">
            <p className="text-[11px] leading-4 text-gray-500">Стоимость</p>
            <p className="mt-1 break-words text-sm sm:text-lg font-semibold leading-5 sm:leading-6 tracking-tight">
              {price != null ? `${new Intl.NumberFormat("ru-RU").format(price)} ₽` : "По запросу"}
            </p>
          </div>
          <Link
            href={`/catalog/${slug}`}
            aria-label={`Подробнее о ${title}`}
            className="flex h-8 w-8 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-full bg-[#F1F3F8] text-[--accent] transition-colors hover:bg-[--accent] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--accent]"
          >
            <ArrowUpRight size={21} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </li>
  );
};

export default CardItem;
