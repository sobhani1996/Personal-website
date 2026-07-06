import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";
import { Link } from "wouter";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden pt-20 pb-10">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[50vw] h-[50vw] bg-primary/20 rounded-full blur-[120px] opacity-60 animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-blue-200/30 rounded-full blur-[100px] opacity-50" />
        <img 
          src="/images/soft-gradient-bg.png" 
          alt="Soft Gradient Background" 
          className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay"
        />
      </div>

      <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-8 text-center lg:text-left order-2 lg:order-1">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-secondary leading-[1.1] animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
            Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-500">Digital Marketing</span> & Content.
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            Hi, I'm Mori Sobhani. I help brands grow through data-driven digital marketing plans, strategic social media campaigns, and compelling content creation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
            <Link href="/portfolio">
              <Button size="lg" className="rounded-full px-8 h-14 text-lg shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300 bg-primary text-primary-foreground hover:bg-primary/90">
                View Portfolio <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="rounded-full px-8 h-14 text-lg bg-white/50 backdrop-blur-sm border-white/60 hover:bg-white/80 text-secondary">
                Contact Me <Mail className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative order-1 lg:order-2 flex justify-center animate-in fade-in zoom-in duration-1000 delay-300">
          <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px]">
            {/* Decorative circles */}
            <div className="absolute inset-0 rounded-full border-2 border-white/40 scale-110 animate-[spin_20s_linear_infinite]" />
            <div className="absolute inset-0 rounded-full border border-primary/30 scale-125 animate-[spin_30s_linear_infinite_reverse]" />
            
            {/* Main Image Mask */}
            <div className="w-full h-full rounded-full overflow-hidden border-8 border-white shadow-2xl relative z-10 group">
              <picture>
                <source srcSet="/images/mori-logo.webp" type="image/webp" />
                <img 
                  src="/images/mori-logo.jpg" 
                  alt="Mori Sobhani" 
                  width="500"
                  height="500"
                  fetchPriority="high"
                  className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
              </picture>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute bottom-0 right-10 z-20 bg-white p-4 rounded-2xl shadow-xl animate-bounce duration-[3000ms]">
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-bold uppercase tracking-wider">Digital Marketer</p>
                  <p className="text-sm font-bold text-secondary">Specialist</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
