import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://terraholod.ru"),
  title: {
    template: "%s | Холодильные решения для бизнеса",
    default: "Терра Холода — Холодильные решения для бизнеса",
  },
  description:
    "Терра Холода предлагает эффективные решения для хранения и транспортировки замороженных продуктов. Высококачественное холодильное оборудование для вашего бизнеса.",
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
