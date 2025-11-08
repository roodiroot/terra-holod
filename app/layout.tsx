import { Suspense } from "react";
import type { Metadata } from "next";

import { Toaster } from "@/components/ui/sonner";
import Overlay from "@/components/overlay/overlay";
import { MetrikYA } from "@/components/utils/Metric";

import { gilroy } from "@/app/fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://terraholod.ru"),
  title: {
    template: "%s | Терра-Холод",
    default:
      "Холодильное оборудование от Терра-Холод. Производство поставка и обслуживание.",
  },
  description:
    "Терра-холод предлагает эффективные решения для охлаждения. Надежное холодильное оборудование от производителя.",
  icons: "/logo.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${gilroy.variable} antialiased`}>
        <Suspense>
          <MetrikYA />
        </Suspense>
        {children}
        <Toaster />
        <Overlay />
      </body>
    </html>
  );
}
