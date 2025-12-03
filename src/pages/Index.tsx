import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TableSection from "@/components/TableSection";
import WorryandIntroduction from "@/components/Worryandintroduction";
import TrustSection from "@/components/TrustSection";
import ServicesSection from "@/components/ServicesSection";
import PricingSection from "@/components/PricingSection";
import ProcessSection from "@/components/ProcessSection";
import ReviewsSection from "@/components/ReviewsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import ChatbotWidget from "@/components/ChatbotWidget";
import MediaSection from "@/components/MediaSection";
import NewsSection from "@/components/NewsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <TableSection />
        <MediaSection />
        <NewsSection />
        <WorryandIntroduction />
        <TrustSection />
        <ServicesSection />
        <PricingSection />
        <ProcessSection />
        <ReviewsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingCTA />
      <ChatbotWidget />
    </div>
  );
};

export default Index;
