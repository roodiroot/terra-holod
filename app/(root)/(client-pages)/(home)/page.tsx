import CTA from "@/components/pages/flower-page/cta/cta";
import AboutSection from "@/components/pages/flower-page/about";
import Partners from "@/components/pages/flower-page/partners/partners";
import ExamplesSection from "@/components/pages/flower-page/examples/examples";
import FeaturesSection from "@/components/pages/flower-page/features/features";
import VariantsSection from "@/components/pages/flower-page/variants/variants";
import Hero from "@/components/pages/main-page/hero";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <AboutSection />
      <Partners />
      <FeaturesSection />
      <CTA />
      <VariantsSection />
      <ExamplesSection />
    </div>
  );
}
