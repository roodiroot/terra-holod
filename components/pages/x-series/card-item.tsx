import type { ComponentProps } from "react";
import ProductCard from "../general/card-item";

export default function CardItem(props: ComponentProps<typeof ProductCard>) {
  return <ProductCard {...props} categoryLabel="X-Series · универсальные" />;
}
