import ClassesNavBar from "@/components/shared/classesNavBar";
import Footer from "@/components/shared/Footer";

export default function ClassesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="">
      <ClassesNavBar />

      <div className="">{children}</div>

      <Footer />
    </div>
  );
}
