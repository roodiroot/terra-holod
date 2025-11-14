import { Metadata } from "next";

import { getProductBySlug } from "@/lib/wp-api";
import HeroContainer from "@/components/pages/hero-container";
import { Icons } from "@/components/icons/icons";
import Image from "next/image";
import { DownloadIcon } from "lucide-react";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const slug = (await params).slug;

  // fetch data
  const product = await getProductBySlug(slug);

  return {
    title: "Terra-holod " + product.title,
    description: `Terra-holod ${product.title} — это оборудование, которое гарантирует отличное качество хранения продуктов с минимальными затратами на энергопотребление.`,
  };
}

const ProductPage = async ({ params }: Props) => {
  const slug = (await params).slug;
  const product = await getProductBySlug(slug);

  return (
    <HeroContainer>
      <div className="md:grid md:grid-cols-2 md:items-start md:gap-x-8">
        {/* Image slider */}
        <div className="flex flex-col-reverse">
          <div className="relative w-full pb-[100%] rounded-[40px] bg-gray-100">
            <div className="absolute z-0 inset-0 p-10">
              <Image
                src={product.productsFields.img?.node?.link}
                alt={`${product.title}_complect`}
                width={1000}
                height={1000}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* Product information */}
        <div className="mt-10 sm:mt-16 sm:px-0 lg:mt-0">
          <h1 className={"text-4xl font-bold tracking-tight text-gray-900"}>
            Terra-holod {product.title}
          </h1>
          <>
            <div className="mt-3">
              <h2 className="sr-only">Информация о товаре</h2>
              <p className="text-3xl tracking-tight text-gray-900">
                {product.productsFields.price
                  ? new Intl.NumberFormat("ru").format(
                      product.productsFields.price
                    ) + " ₽"
                  : "По запросу"}
              </p>
            </div>
            <div className="mt-3">
              <h3 className="sr-only">Отзывы</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  <Icons.star className="size-5 fill-[--accent]" />
                  <Icons.star className="size-5 fill-[--accent]" />
                  <Icons.star className="size-5 fill-[--accent]" />
                  <Icons.star className="size-5 fill-[--accent]" />
                  <Icons.star className="size-5 fill-[--accent]" />
                </div>
              </div>
            </div>
            <div className="mt-6">
              <h3 className="sr-only">Описание</h3>
              <p className="text-lg">{product.productsFields?.description}</p>
            </div>
            <section className="mt-12">
              <h2 className="sr-only">Подробное описание</h2>
              <div className="w-full border-t bordder-gray-200">
                <h3 className="text-lg text-[--accent] font-semibold mt-6">
                  Характеристики
                </h3>
                <ul className="space-y-3 mt-4 text-lg">
                  <li className="relative pl-1.5  my-2  pr-6 w-full flex gap-4 justify-between sm:pl-6 sm:before:top-1/2 sm:before:-translate-y-1/2 sm:before:absolute sm:before:left-2 sm:before:w-1 sm:before:h-1 sm:before:bg-slate-200">
                    <span className="flex-1 leading-4 text-balance">
                      Производитель:
                    </span>
                    <span className="text-gray-900 font-bold  text-right leading-4">
                      TerraHolod
                    </span>
                  </li>
                  <li className="relative pl-1.5  my-2  pr-6 w-full flex gap-4 justify-between sm:pl-6 sm:before:top-1/2 sm:before:-translate-y-1/2 sm:before:absolute sm:before:left-2 sm:before:w-1 sm:before:h-1 sm:before:bg-slate-200">
                    <span className="flex-1 leading-4 text-balance">
                      Для помещений:
                    </span>
                    <span className="text-gray-900 font-bold text-right leading-4">
                      {product.productsFields.volumeOfRefrigerator}
                    </span>
                  </li>
                  <li className="relative pl-1.5  my-2  pr-6 w-full flex gap-4 justify-between sm:pl-6 sm:before:top-1/2 sm:before:-translate-y-1/2 sm:before:absolute sm:before:left-2 sm:before:w-1 sm:before:h-1 sm:before:bg-slate-200">
                    <span className="flex-1 leading-4 text-balance">
                      Хладопроизводительность:
                    </span>
                    <span className="text-gray-900 font-bold text-right leading-4">
                      {product.productsFields.cooling_capacity}
                    </span>
                  </li>
                  <li className="relative pl-1.5  my-2  pr-6 w-full flex gap-4 justify-between sm:pl-6 sm:before:top-1/2 sm:before:-translate-y-1/2 sm:before:absolute sm:before:left-2 sm:before:w-1 sm:before:h-1 sm:before:bg-slate-200">
                    <span className="flex-1 leading-4 text-balance">
                      Диапазон температур:
                    </span>
                    <span className="text-gray-900 font-bold text-right leading-4">
                      {product.productsFields.operatingRange}
                    </span>
                  </li>
                  <li className="relative pl-1.5  my-2  pr-6 w-full flex gap-4 justify-between sm:pl-6 sm:before:top-1/2 sm:before:-translate-y-1/2 sm:before:absolute sm:before:left-2 sm:before:w-1 sm:before:h-1 sm:before:bg-slate-200">
                    <span className="flex-1 leading-4 text-balance">
                      Энергопотребление:
                    </span>
                    <span className="text-gray-900 font-bold text-right leading-4">
                      {product.productsFields.consumption}
                    </span>
                  </li>
                  <li className="relative pl-1.5  my-2  pr-6 w-full flex gap-4 justify-between sm:pl-6 sm:before:top-1/2 sm:before:-translate-y-1/2 sm:before:absolute sm:before:left-2 sm:before:w-1 sm:before:h-1 sm:before:bg-slate-200">
                    <span className="flex-1 leading-4 text-balance">
                      Напряжение:
                    </span>
                    <span className="text-gray-900 font-bold text-right leading-4">
                      {product.productsFields.voltage}
                    </span>
                  </li>
                </ul>
              </div>
            </section>
          </>
        </div>
        <div className="mt-6">
          <a
            className="font-bold text-[--accent] text-base flex gap-3 items-center"
            href={product.productsFields.docfile.node.link}
            target="_blank"
          >
            <span>
              <DownloadIcon />
            </span>
            Руководство по эксплуатации оборудования{" "}
          </a>
        </div>
      </div>
    </HeroContainer>
  );
};

export default ProductPage;
