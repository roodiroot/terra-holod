import CTA from "@/components/pages/flower-page/cta/cta";
import HeroFlowers from "@/components/pages/flower-page/hero";
import AboutSection from "@/components/pages/flower-page/about";
import Partners from "@/components/pages/flower-page/partners/partners";
import ExamplesSection from "@/components/pages/flower-page/examples/examples";
import FeaturesSection from "@/components/pages/flower-page/features/features";
// import VariantsSection from "@/components/pages/flower-page/variants/variants";

export default async function AboutPage() {
  return (
    <div className="">
      <HeroFlowers />
      <AboutSection />
      <Partners />
      <FeaturesSection />
      <CTA />
      {/* <VariantsSection /> */}
      <ExamplesSection />
    </div>
  );
}
