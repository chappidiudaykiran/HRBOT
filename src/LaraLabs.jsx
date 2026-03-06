import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LaraSection from "./components/LaraSection";
import ServicesSection from "./components/ServicesSection";
import CtaSection from "./components/CtaSection";
import Footer from "./components/Footer";

export default function LaraLabs() {
  return (
    <div className="relative z-[1] overflow-x-hidden bg-transparent text-white leading-relaxed">
      <Navbar />
      <Hero />
      <ServicesSection />
      <LaraSection />
      <CtaSection />
      <Footer />
    </div>
  );
}
