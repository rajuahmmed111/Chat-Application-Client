import Advertisement from "@/components/home/advertisement";
import Header from "@/components/home/header";
import Footer from "@/components/shared/Footer";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="">
    <Advertisement />
    <Header />

      <div className="">{children}</div>

      <Footer />
    </div>
  );
}
