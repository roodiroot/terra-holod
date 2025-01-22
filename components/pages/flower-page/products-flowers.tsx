import { getAllProducts } from "@/lib/wp-api";
import CardItem from "../general/card-item";

const ProductFlowers = async () => {
  const products = await getAllProducts({
    application: "Для цветочного магазина",
  });

  return (
    <ul className="mt-10 grid grid-cols-1 gap-x-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-6">
      {products?.map((i) => (
        <CardItem
          key={i.slug}
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
  );
};

export default ProductFlowers;
