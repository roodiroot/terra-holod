import BenifitsForBeerPage from "@/components/pages/beers/benifits";
import HeroBeers from "@/components/pages/beers/herro-beers";
import CTA from "@/components/pages/flower-page/cta/cta";
import FeaturesSection from "@/components/pages/flower-page/features/features";
import Partners from "@/components/pages/flower-page/partners/partners";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://terraholod.ru"),
  title: "Холодильные камеры для пива",
  description:
    "Надёжные холодильные камеры для хранения и охлаждения пива. Производство, монтаж и обслуживание систем холодоснабжения от Терра-Холод.",
  icons: "/logo.svg",
};

export default async function BeerShopPage() {
  return (
    <div className="">
      <HeroBeers />
      <BenifitsForBeerPage />
      <CTA />
      <Partners />
      <FeaturesSection />
    </div>
  );
}
