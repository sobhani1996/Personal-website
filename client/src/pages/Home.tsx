import FeaturedContent from "@/components/FeaturedContent";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import BookTeaser from "@/components/BookTeaser";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-primary/30">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <BookTeaser />
        <FeaturedContent />
        
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
