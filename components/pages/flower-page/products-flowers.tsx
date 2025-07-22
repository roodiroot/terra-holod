import { getAllProducts } from "@/lib/wp-api";
import CardItem from "../general/card-item";
import { getAllDocumentByTitle } from "@/data/wp-api/documents-api";
import { DownloadIcon } from "lucide-react";

const ProductFlowers = async () => {
  const products = await getAllProducts({
    application: "Для цветочного магазина",
  });
  const doc = await getAllDocumentByTitle(
    "Сплит-системы Terraholod от июля 25 г."
  );

  return (
    <>
      <ul className="mt-10 grid grid-cols-1 gap-x-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-6">
        {products?.map((i) => (
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
            price={i.productsFields.price}
          />
        ))}
      </ul>
      <div className="mt-6">
        {doc.docsContent.file?.node?.link && (
          <a
            target="_blank"
            className="font-bold text-[--accent] text-base flex gap-3 items-center"
            href={doc.docsContent.file?.node?.link}
          >
            <span>
              <DownloadIcon />
            </span>
            Скачать прайс-лист
          </a>
        )}
      </div>
    </>
  );
};

export default ProductFlowers;
