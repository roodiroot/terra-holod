import Hero from "@/components/pages/main-page/hero";
import AboutForMainPage from "@/components/pages/main-page/about";
import BenifitsForMainPage from "@/components/pages/main-page/benifits";
import PartnersForMainPage from "@/components/pages/main-page/partners";
import TehnologyForMainPage from "@/components/pages/main-page/tehnology";
import ActionLine from "@/components/pages/main-page/action-line";
import FeaturesForMainPage from "@/components/pages/main-page/features";
import SolutionsForMainPage from "@/components/pages/main-page/solutions";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <BenifitsForMainPage />
      <AboutForMainPage />
      <PartnersForMainPage />
      <FeaturesForMainPage />
      <SolutionsForMainPage />
      <TehnologyForMainPage />
      <ActionLine />
    </div>
  );
}
