import type { Metadata } from "next";
import { Toaster } from "@/components/ui/sonner";

import { gilroy } from "@/app/fonts";

import "./globals.css";
import Overlay from "@/components/overlay/overlay";
import { Suspense } from "react";
import { MetrikYA } from "@/components/utils/Metric";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
