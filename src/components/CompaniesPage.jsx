import Navbar from "./Navbar";
import ServicesSection from "./ServicesSection";
import Footer from "./Footer";

export default function CompaniesPage() {
  return (
    <div className="relative z-[1] min-h-screen overflow-x-hidden bg-transparent text-white leading-relaxed">
      <Navbar />
      <main className="pt-[90px]">
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
}
