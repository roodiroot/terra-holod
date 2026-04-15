
import { Metadata } from "next";
import XSeriesHeroFlowers from "@/components/pages/x-series/x-series-hero";
import AboutSection from "@/components/pages/x-series/about";


export const metadata: Metadata = {
  metadataBase: new URL("https://terraholod.ru"),
  title: "Универсальные сплит-системы -5…+5 °C X-series",
  description:
    "Надёжные решения для поддержания стабильного температурного режима. Универсальные сплит-системы X-series от Терра-Холод — производство, поставка и сервисное обслуживание.",
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
