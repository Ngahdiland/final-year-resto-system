import Hero from "@/components/hero/Hero";
import Header from "@/components/navBar/Header";
import TopHead from "@/components/navBar/TopHead";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className=" h-max">
      <TopHead />
      <div className="flex justify-between">
        <Header />
        {children}
      </div>
    </main>
  );
}
