import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustTicker from "@/components/TrustTicker";
import WhyDentalDepot from "@/components/WhyDentalDepot";
import ServicesSection from "@/components/ServicesSection";
import AboutStrip from "@/components/AboutStrip";
import TestimonialsSection from "@/components/TestimonialsSection";
import LocationsSection from "@/components/LocationsSection";
import FooterSection from "@/components/FooterSection";
import MobileBookingButton from "@/components/MobileBookingButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <TrustTicker />
        <WhyDentalDepot />
        <ServicesSection />
        <AboutStrip />
        <TestimonialsSection />
        <LocationsSection />
      </main>
      <FooterSection />
      <MobileBookingButton />
    </div>
  );
};

export default Index;
