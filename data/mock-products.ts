import type { Products } from "@/lib/wp-api";

// Демонстрационные товары: характеристики и цены условные.
// Пустая ссылка docfile означает, что документ пока не добавлен.
export const mockProducts: Products[] = [
  // {
  //   title: "Терра 300",
  //   slug: "terra-300",
  //   productsFields: {
  //     application: { nodes: [{ name: "Общие" }] },
  //     cooling_capacity: "300 Вт",
  //     description: "Компактный холодильный агрегат для небольшой камеры.",
  //     operatingRange: "+2…+10 °C",
  //     volumeOfRefrigerator: "до 6 м³",
  //     volume1: "6 м³",
  //     volume2: "4 м³",
  //     volume3: "3 м³",
  //     consumption: "250 Вт",
  //     price: 45000,
  //     voltage: "220 В",
  //     img: { node: { sourceUrl: "/images/refregerator.jpg" } },
  //     docfile: { node: { link: "" } },
  //   },
  // },
  // {
  //   title: "Терра 600",
  //   slug: "terra-600",
  //   productsFields: {
  //     application: {
  //       nodes: [{ name: "Для пивного магазина" }, { name: "Общие" }],
  //     },
  //     cooling_capacity: "600 Вт",
  //     description: "Холодильный агрегат для хранения напитков в пивном магазине.",
  //     operatingRange: "+2…+8 °C",
  //     volumeOfRefrigerator: "до 12 м³",
  //     volume1: "12 м³",
  //     volume2: "9 м³",
  //     volume3: "6 м³",
  //     consumption: "450 Вт",
  //     price: 68000,
  //     voltage: "220 В",
  //     img: { node: { sourceUrl: "/images/refregerator.jpg" } },
  //     docfile: { node: { link: "" } },
  //   },
  // },
  // {
  //   title: "Терра X-1000",
  //   slug: "terra-x-1000",
  //   productsFields: {
  //     application: { nodes: [{ name: "X-series" }] },
  //     cooling_capacity: "1000 Вт",
  //     description: "Мощный холодильный агрегат серии X для просторных камер.",
  //     operatingRange: "−5…+5 °C",
  //     volumeOfRefrigerator: "до 20 м³",
  //     volume1: "20 м³",
  //     volume2: "15 м³",
  //     volume3: "10 м³",
  //     consumption: "750 Вт",
  //     price: null,
  //     voltage: "220 В",
  //     img: { node: { sourceUrl: "/images/refregerator.jpg" } },
  //     docfile: { node: { link: "" } },
  //   },
  // },
];
