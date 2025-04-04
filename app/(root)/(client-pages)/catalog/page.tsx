import { getAllProducts } from "@/lib/wp-api";
import CardItem from "@/components/pages/general/card-item";
import HeroContainer from "@/components/pages/hero-container";

export const metadata = {
  title: "Каталог холодильного оборудования Терра-Холод",
  description:
    "Узнайте о наших товарах. Мы предоставляем решения для хранения и транспортировки замороженных продуктов.",
};

const ProductsPage = async () => {
  const products = await getAllProducts({});

  return (
    <HeroContainer>
      <div className="pb-[30px]">
        <div className="max-w-xl mx-auto flex flex-col gap-4 md:gap-6 lg:max-w-none lg:mx-0">
          <ul className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((i) => (
              <CardItem
                key={i.slug}
                slug={i.slug}
                cooling_capacity={i?.productsFields?.cooling_capacity}
                voltage={i.productsFields.voltage}
                img={i.productsFields.img?.node?.link}
                volumeOfRefrigerator={i.productsFields?.volumeOfRefrigerator}
                operatingRange={i.productsFields?.operatingRange}
                title={i.title}
                application={i.productsFields.application.nodes[0].name}
                consumption={i.productsFields.consumption}
              />
            ))}
          </ul>
        </div>
      </div>
    </HeroContainer>
  );
};

export default ProductsPage;
