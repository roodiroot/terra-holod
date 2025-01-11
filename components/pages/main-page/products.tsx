import SectionContainer from "@/components/section-container";
import ClassicTitleModule from "../general/classic-title-module";
import { getAllProducts } from "@/lib/wp-api";
import CardItem from "../general/card-item";

const ProductsForMainPage = async () => {
  const products = await getAllProducts(4);
  return (
    <SectionContainer className="bg-[#ECEDEB]">
      <div className="max-w-xl mx-auto pt-[30px]  pb-[30px] space-y-7 lg:max-w-none lg:pt-[85px] lg:mx-0">
        <ClassicTitleModule
          suptitle="Оборудование"
          title="Под любые задачи бизнеса"
        />
        <ul className="grid grid-cols-1 gap-x-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-6">
          {products.map((i) => (
            <CardItem
              key={i.slug}
              location={i.productsFields?.location}
              img={i.productsFields.img?.node?.link}
              volumeOfRefrigerator={i.productsFields?.volumeOfRefrigerator}
              operatingRange={i.productsFields?.operatingRange}
            />
          ))}
        </ul>
      </div>
    </SectionContainer>
  );
};

export default ProductsForMainPage;
