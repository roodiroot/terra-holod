import type { Metadata } from "next";

import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";

export const metadata: Metadata = {
  metadataBase: new URL("https://terraholod.ru"),
  title: {
    template: "%s | Холодильное оборудование для бизнеса",
    default: "Терра-Холод — Холодильное оборудование для бизнеса",
  },
  description:
    "Терра-холод предлагает эффективные решения для охлаждения. Надежное холодильное оборудование от производителя.",
  icons: "/logo.svg",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
