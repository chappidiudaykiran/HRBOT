import Navbar from "./Navbar";
import ServicesSection from "./ServicesSection";
import Footer from "./Footer";

export default function CompaniesPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#090909] text-white leading-relaxed [background-image:radial-gradient(circle_at_20%_-10%,rgba(200,255,0,0.08),transparent_35%),radial-gradient(circle_at_80%_120%,rgba(0,255,204,0.05),transparent_40%)]">
      <Navbar />
      <main className="pt-[90px]">
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
}
