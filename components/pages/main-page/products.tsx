import { getAllProducts } from "@/lib/wp-api";

import CardItem from "../general/card-item";
import SectionContainer from "@/components/section-container";
import ClassicTitleModule from "../general/classic-title-module";

const ProductsForMainPage = async () => {
  const flowers = await getAllProducts({
    application: "Для цветочного магазина",
    limit: 4,
  });

  return (
    <SectionContainer className="bg-[#ECEDEB]">
      <div className="max-w-xl mx-auto pt-[30px]  pb-[30px] lg:max-w-none lg:pt-[85px] lg:mx-0">
        <ClassicTitleModule title="Оборудование под любые задачи" />
        <div className="mt-8">
          <ul className="grid mt-4 grid-cols-1 gap-x-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-6">
            {flowers.map((i) => (
              <CardItem
                key={i.slug}
                title={i.title}
                cooling_capacity={i?.productsFields?.cooling_capacity}
                voltage={i.productsFields.voltage}
                img={i.productsFields.img?.node?.link}
                operatingRange={i.productsFields?.operatingRange}
                consumption={i.productsFields.consumption}
                price={i.productsFields.price}
              />
            ))}
          </ul>
        </div>
      </div>
    </SectionContainer>
  );
};

export default ProductsForMainPage;
