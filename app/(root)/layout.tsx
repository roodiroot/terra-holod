import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="relative min-h-screen flex flex-col justify-between">
        <Header />
        {children}
      </div>
      <Footer />
    </>
  );
}
