import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WorryandIntroduction from "@/components/Worryandintroduction";
import TrustSection from "@/components/TrustSection";
import ServicesSection from "@/components/ServicesSection";
import PricingSection from "@/components/PricingSection";
import ProcessSection from "@/components/ProcessSection";
import ReviewsSection from "@/components/ReviewsSection";
import LegalSection from "@/components/LegalSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import MediaSection from "@/components/MediaSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <MediaSection />
        <WorryandIntroduction />
        <TrustSection />
        <ServicesSection />
        <PricingSection />
        <ProcessSection />
        <ReviewsSection />
        <LegalSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;
