import Hero from "@/components/pages/main-page/hero";
import BenifitsForMainPage from "@/components/pages/main-page/benifits";
import PartnersForMainPage from "@/components/pages/main-page/partners";
import TehnologyForMainPage from "@/components/pages/main-page/tehnology";
import ActionLine from "@/components/pages/main-page/action-line";
import SolutionsForMainPage from "@/components/pages/main-page/solutions";
import ProductsForMainPage from "@/components/pages/main-page/products";
import CTA from "@/components/pages/flower-page/cta/cta";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <BenifitsForMainPage />
      {/* <AboutForMainPage /> */}
      <SolutionsForMainPage />
      <ProductsForMainPage />
      <CTA />
      <PartnersForMainPage />
      {/* <FeaturesForMainPage /> */}
      <TehnologyForMainPage />
      <ActionLine />
    </div>
  );
}
