import BenifitsForBeerPage from "@/components/pages/beers/benifits";
import HeroBeers from "@/components/pages/beers/herro-beers";
import CTA from "@/components/pages/flower-page/cta/cta";
import FeaturesSection from "@/components/pages/flower-page/features/features";
import Partners from "@/components/pages/flower-page/partners/partners";

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
