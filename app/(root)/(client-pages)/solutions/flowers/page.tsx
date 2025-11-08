import CTA from "@/components/pages/flower-page/cta/cta";
import HeroFlowers from "@/components/pages/flower-page/hero";
import AboutSection from "@/components/pages/flower-page/about";
import Partners from "@/components/pages/flower-page/partners/partners";
import ExamplesSection from "@/components/pages/flower-page/examples/examples";
import FeaturesSection from "@/components/pages/flower-page/features/features";
import { Metadata } from "next";
// import VariantsSection from "@/components/pages/flower-page/variants/variants";

export const metadata: Metadata = {
  metadataBase: new URL("https://terraholod.ru"),
  title: "Холодильное оборудование для цветочных магазинов",
  description:
    "Надёжные решения для хранения цветов. Витрины, камеры и агрегаты выносного холода от Терра-Холод — производство, поставка, обслуживание.",
  icons: "/logo.svg",
};

export default async function AboutPage() {
  return (
    <div className="">
      <HeroFlowers />
      <AboutSection />
      <CTA className="bg-[#ECEDEB]" />
      <Partners />
      <FeaturesSection />
      {/* <VariantsSection /> */}
      <ExamplesSection />
    </div>
  );
}
