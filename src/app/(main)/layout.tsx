import Footer from "@/components/layout/Footer";
import { AceNavbar } from "@/components/aceternity/resizeable-navbar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AceNavbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
