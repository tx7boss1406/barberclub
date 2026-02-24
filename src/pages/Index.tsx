import Navbar from "@/components/barbershop/Navbar";
import HeroSection from "@/components/barbershop/HeroSection";
import ServicesSection from "@/components/barbershop/ServicesSection";
import BarbersSection from "@/components/barbershop/BarbersSection";
import TestimonialsSection from "@/components/barbershop/TestimonialsSection";
import CTASection from "@/components/barbershop/CTASection";
import Footer from "@/components/barbershop/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <BarbersSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
