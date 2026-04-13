
import { Metadata } from "next";
import XSeriesHeroFlowers from "@/components/pages/x-series/x-series-hero";
import AboutSection from "@/components/pages/x-series/about";


export const metadata: Metadata = {
  metadataBase: new URL("https://terraholod.ru"),
  title: "Холодильное оборудование для цветочных магазинов",
  description:
    "Надёжные решения для хранения цветов. Витрины, камеры и агрегаты выносного холода от Терра-Холод — производство, поставка, обслуживание.",
  icons: "/logo.svg",
};

export default async function AboutPage() {
  return (
    <div>
      <XSeriesHeroFlowers />
      <AboutSection />
    </div>
  );
}
