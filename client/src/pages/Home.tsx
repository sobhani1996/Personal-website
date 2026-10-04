import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Testimonials";
import CtaBanner from "@/components/offer/CtaBanner";
import Faq from "@/components/offer/Faq";
import HowItWorks from "@/components/offer/HowItWorks";
import PricingModel from "@/components/offer/PricingModel";
import ProofStrip from "@/components/offer/ProofStrip";
import ServicesOverview from "@/components/offer/ServicesOverview";
import WhoItsFor from "@/components/offer/WhoItsFor";
import { GENERAL_FAQ } from "@/content/offer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-primary/30">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ProofStrip />
        <ServicesOverview />
        <PricingModel />
        <HowItWorks />
        <WhoItsFor />
        <Testimonials />
        <Faq
          items={GENERAL_FAQ}
          intro="Straight answers about the free setup and the pay-on-results model."
        />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}
