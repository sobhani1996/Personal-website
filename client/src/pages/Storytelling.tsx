import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const slides = [
  {
    id: "01",
    year: "2015",
    title: "The Spark of Curiosity",
    description: "My journey began with a simple fascination for how digital platforms connect people across the globe. I started exploring the mechanics of social media and its profound impact on consumer behaviour.",
    image: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?auto=format&fit=crop&q=80&w=2000",
    buttonText: "Explore Origin"
  },
  {
    id: "02",
    year: "2017",
    title: "Engineering to Marketing",
    description: "Graduating with a BSc in Chemical Engineering taught me analytical thinking. I soon realised these problem-solving skills were the perfect foundation for data-driven digital marketing.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=2000",
    buttonText: "View Transition"
  },
  {
    id: "03",
    year: "2018",
    title: "Mastering the Craft",
    description: "Pursuing my MBA at the Industrial Management Institute in Tehran. Here, I dove deep into the quantitative impact of Instagram marketing on brand image, blending academic rigour with practical application.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000",
    buttonText: "Read Thesis"
  },
  {
    id: "04",
    year: "2019",
    title: "First Major Campaign",
    description: "Taking the lead on a comprehensive social media strategy for a growing e-commerce brand. We focused on organic growth, community engagement, and visually compelling storytelling.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=2000",
    buttonText: "See Campaign"
  },
  {
    id: "05",
    year: "2020",
    title: "The Power of Data",
    description: "Transitioning from intuition-based marketing to purely data-driven strategies. Implementing advanced analytics to track user journeys, optimise conversion rates, and maximise ROI.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=2000",
    buttonText: "View Analytics"
  },
  {
    id: "06",
    year: "2021",
    title: "Building Communities",
    description: "Recognising that brands are nothing without their audience. I shifted focus towards building loyal, engaged communities through authentic content and transparent communication.",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=2000",
    buttonText: "Explore Community"
  },
  {
    id: "07",
    year: "2022",
    title: "The Ibolak Era",
    description: "Joining the social media team at Ibolak. A period of intense creativity, rapid experimentation, and learning how to scale content production without losing the human touch.",
    image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&q=80&w=2000",
    buttonText: "Watch Highlights"
  },
  {
    id: "08",
    year: "2023",
    title: "Strategic Consulting",
    description: "Stepping into a consulting role, helping B2B and B2C companies align their digital presence with their core business objectives. Crafting long-term roadmaps for sustainable growth.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000",
    buttonText: "View Strategy"
  },
  {
    id: "09",
    year: "2024",
    title: "A New Chapter in the UK",
    description: "Moving to the United Kingdom to pursue an MSc in Digital Marketing at the University of Northampton. Expanding my global perspective and researching the cultural implications of technology.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=2000",
    buttonText: "Read Research"
  },
  {
    id: "10",
    year: "2025",
    title: "The Future of Digital",
    description: "Today, I blend academic research with hands-on digital marketing. Exploring how algorithms shape dietary behaviours and continuing to push the boundaries of ethical, impactful marketing.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=2000",
    buttonText: "Discover Future"
  }
];

export default function Storytelling() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isScrolling) return;
      
      if (e.deltaY > 50) {
        if (activeSlide < slides.length - 1) {
          setIsScrolling(true);
          setActiveSlide(prev => prev + 1);
          setTimeout(() => setIsScrolling(false), 1200);
        }
      } else if (e.deltaY < -50) {
        if (activeSlide > 0) {
          setIsScrolling(true);
          setActiveSlide(prev => prev - 1);
          setTimeout(() => setIsScrolling(false), 1200);
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [activeSlide, isScrolling]);

  const touchStartY = useRef(0);
  
  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };
    
    const handleTouchMove = (e: TouchEvent) => {
      if (isScrolling) return;
      
      const touchEndY = e.touches[0].clientY;
      const diff = touchStartY.current - touchEndY;
      
      if (diff > 50) {
        if (activeSlide < slides.length - 1) {
          setIsScrolling(true);
          setActiveSlide(prev => prev + 1);
          setTimeout(() => setIsScrolling(false), 1200);
        }
      } else if (diff < -50) {
        if (activeSlide > 0) {
          setIsScrolling(true);
          setActiveSlide(prev => prev - 1);
          setTimeout(() => setIsScrolling(false), 1200);
        }
      }
    };

    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    
    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [activeSlide, isScrolling]);

  return (
    <div className="h-screen w-full overflow-hidden bg-background relative font-sans">
      {/* Header */}
      <div className="absolute top-0 left-0 w-full z-50 p-6 flex justify-between items-center">
        <a href="/" className="text-secondary font-bold text-xl tracking-tight flex items-center gap-2 bg-white/80 backdrop-blur-md px-5 py-2.5 rounded-full shadow-sm border border-white/50 hover:bg-white transition-colors">
          Mori Sobhani
        </a>
        <a href="/portfolio" className="text-sm font-bold text-secondary hover:text-primary transition-colors bg-white/80 backdrop-blur-md px-5 py-2.5 rounded-full shadow-sm border border-white/50 hover:bg-white">
          Back to Portfolio
        </a>
      </div>

      {/* Left Navigation */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-6">
        {slides.map((slide, index) => (
          <button 
            key={slide.id}
            onClick={() => {
              if (!isScrolling && activeSlide !== index) {
                setIsScrolling(true);
                setActiveSlide(index);
                setTimeout(() => setIsScrolling(false), 1200);
              }
            }}
            className={`flex items-center gap-4 group transition-all duration-300 ${activeSlide === index ? 'opacity-100' : 'opacity-40 hover:opacity-70'}`}
          >
            <span className={`text-xs font-bold tracking-widest transition-colors duration-300 ${activeSlide === index ? 'text-primary' : 'text-secondary'}`}>
              {slide.id}
            </span>
            <div className={`h-px transition-all duration-500 ${activeSlide === index ? 'w-12 bg-primary' : 'w-4 bg-secondary group-hover:w-8'}`}></div>
          </button>
        ))}
      </div>

      {/* Right Progress Indicator */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center gap-4">
        <div className="w-px h-48 bg-secondary/20 relative rounded-full overflow-hidden">
          <div 
            className="absolute top-0 left-0 w-full bg-primary transition-all duration-1000 ease-[cubic-bezier(0.645,0.045,0.355,1)]"
            style={{ height: `${((activeSlide + 1) / slides.length) * 100}%` }}
          ></div>
        </div>
        <span className="text-[10px] font-bold text-secondary mt-4 rotate-90 origin-left translate-x-2 tracking-[0.2em] uppercase">Scroll</span>
      </div>

      {/* Slides Container */}
      <div 
        className="h-full w-full transition-transform duration-1000 ease-[cubic-bezier(0.645,0.045,0.355,1)]"
        style={{ transform: `translateY(-${activeSlide * 100}vh)` }}
      >
        {slides.map((slide, index) => (
          <div key={slide.id} className="h-screen w-full relative flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full">
              <div 
                className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-1000 ease-out"
                style={{ 
                  backgroundImage: `url(${slide.image})`,
                  transform: activeSlide === index ? 'scale(1)' : 'scale(1.1)'
                }}
              ></div>
              {/* Light Theme Overlay: White gradient to ensure text readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/20 backdrop-blur-[2px]"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 container max-w-6xl mx-auto px-8 md:px-32 flex flex-col justify-center h-full">
              <div className={`max-w-2xl transition-all duration-1000 delay-300 ${activeSlide === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
                
                <div className="overflow-hidden mb-2">
                  <h2 className={`text-7xl md:text-9xl font-extrabold text-primary/20 leading-none tracking-tighter transition-transform duration-1000 delay-100 ${activeSlide === index ? 'translate-y-0' : 'translate-y-full'}`}>
                    {slide.year}
                  </h2>
                </div>
                
                <div className="pl-4 md:pl-6 border-l-4 border-primary">
                  <h3 className="text-4xl md:text-6xl font-extrabold text-secondary mb-6 leading-tight tracking-tight">
                    {slide.title}
                  </h3>
                  
                  <p className="text-lg md:text-xl text-secondary/80 leading-relaxed mb-12 max-w-xl font-medium">
                    {slide.description}
                  </p>
                  
                  <button className="group relative inline-flex items-center justify-center w-32 h-32 rounded-full bg-white soft-shadow hover:soft-shadow-hover transition-all duration-500 hover:scale-105 border border-gray-100 cursor-pointer">
                    <div className="absolute inset-2 rounded-full border border-dashed border-primary/40 group-hover:animate-[spin_10s_linear_infinite]"></div>
                    <div className="flex flex-col items-center gap-2 text-secondary group-hover:text-primary transition-colors">
                      <span className="text-[10px] font-bold tracking-widest uppercase text-center px-4">{slide.buttonText}</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </button>
                </div>
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
