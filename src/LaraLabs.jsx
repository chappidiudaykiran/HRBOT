import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LaraSection from "./components/LaraSection";
import ServicesSection from "./components/ServicesSection";
import CtaSection from "./components/CtaSection";
import Footer from "./components/Footer";

export default function LaraLabs() {
  return (
    <div className="overflow-x-hidden bg-[#090909] text-white leading-relaxed [background-image:radial-gradient(circle_at_20%_-10%,rgba(200,255,0,0.08),transparent_35%),radial-gradient(circle_at_80%_120%,rgba(0,255,204,0.05),transparent_40%)]">
      <Navbar />
      <Hero />
      <ServicesSection />
      <LaraSection />
      <CtaSection />
      <Footer />
    </div>
  );
}
