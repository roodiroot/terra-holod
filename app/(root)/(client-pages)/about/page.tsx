import AboutSectionForAbout from "@/components/pages/about/about";
import HeroAbout from "@/components/pages/about/hero";

export const metadata = {
  title: "О компании — Терра Холода",
  description:
    "Терра Холода — лидер в производстве и поставке холодильного оборудования для хранения замороженных продуктов. Узнайте больше о нашей компании и миссии.",
};

export default function AboutPage() {
  return (
    <>
      <HeroAbout />
      <AboutSectionForAbout />
    </>
  );
}
