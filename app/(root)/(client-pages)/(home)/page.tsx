import AboutSection from "@/components/pages/flower-page/about";
import CTA from "@/components/pages/flower-page/cta/cta";
import ExamplesSection from "@/components/pages/flower-page/examples/examples";
import FeaturesSection from "@/components/pages/flower-page/features/features";
import HeroFlowers from "@/components/pages/flower-page/hero";
import VariantsSection from "@/components/pages/flower-page/variants/variants";

export default function Home() {
  return (
    <div className="">
      <HeroFlowers />
      <AboutSection />
      <FeaturesSection />
      <CTA />
      <VariantsSection />
      <ExamplesSection />
    </div>
  );
}
