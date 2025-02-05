import { getAllProducts } from "@/lib/wp-api";

import CardItem from "@/components/pages/general/card-item";
import HeroContainer from "@/components/pages/hero-container";

export default async function BeerShopPage() {
  const products = await getAllProducts({
    application: "Для пивного магазина",
  });
  return (
    <HeroContainer>
      <div className="pb-[30px]">
        <div className="max-w-xl mx-auto flex flex-col gap-4 md:gap-6 lg:max-w-none lg:mx-0">
          <ul className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((i) => (
              <CardItem
                slug={i.slug}
                key={i.slug}
                cooling_capacity={i?.productsFields?.cooling_capacity}
                voltage={i.productsFields.voltage}
                img={i.productsFields.img?.node?.link}
                volumeOfRefrigerator={i.productsFields?.volumeOfRefrigerator}
                operatingRange={i.productsFields?.operatingRange}
                title={i.title}
                application={i.productsFields.application.nodes[0].name}
                consumption={i.productsFields.consumption}
                price={i.productsFields.price}
              />
            ))}
          </ul>
        </div>
      </div>
    </HeroContainer>
  );
}
