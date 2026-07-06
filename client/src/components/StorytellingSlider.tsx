import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const slides = [
  {
    id: "01",
    year: "2021",
    title: "Short-form Dominance",
    description: "Engaging, trend-driven short-form videos designed for high reach and shareability on Instagram and TikTok. Mastering the hook and the algorithm.",
    buttonText: "Watch Reels",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=2000",
    video: "https://d2xsxph8kpxj0f.cloudfront.net/310419663031747991/Y3kw537GjyvvS43ZN9JMcY/Teaser_e8cb4df1.mp4"
  },
  {
    id: "02",
    year: "2022",
    title: "The AI Revolution",
    description: "Leveraging AI tools to create innovative, scalable video content that stands out in crowded feeds. Blending technology with creative storytelling.",
    buttonText: "Explore AI",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2000"
  },
  {
    id: "03",
    year: "2023",
    title: "Visual Communication",
    description: "Eye-catching static visuals for announcements, campaigns, and brand building across social platforms. Ensuring every pixel aligns with the brand identity.",
    buttonText: "View Graphics",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=2000"
  },
  {
    id: "04",
    year: "2024",
    title: "Data Storytelling",
    description: "Distilling complex data and concepts into easy-to-understand, highly saveable visual formats. Making information accessible and engaging.",
    buttonText: "See Infographics",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000"
  }
];

export default function StorytellingSlider() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      if (isScrolling) {
        e.preventDefault();
        return;
      }
      
      if (e.deltaY > 50) {
        if (activeSlide < slides.length - 1) {
          e.preventDefault();
          setIsScrolling(true);
          setActiveSlide(prev => prev + 1);
          setTimeout(() => setIsScrolling(false), 1000);
        }
      } else if (e.deltaY < -50) {
        if (activeSlide > 0) {
          e.preventDefault();
          setIsScrolling(true);
          setActiveSlide(prev => prev - 1);
          setTimeout(() => setIsScrolling(false), 1000);
        }
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => container.removeEventListener('wheel', handleWheel);
  }, [activeSlide, isScrolling]);

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-[600px] md:h-[700px] bg-white rounded-3xl overflow-hidden border border-gray-100 soft-shadow group"
    >
      {/* Left Navigation */}
      <div className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-6">
        {slides.map((slide, index) => (
          <button 
            key={slide.id}
            onClick={() => {
              if (!isScrolling && activeSlide !== index) {
                setIsScrolling(true);
                setActiveSlide(index);
                setTimeout(() => setIsScrolling(false), 1000);
              }
            }}
            className={`flex items-center gap-4 transition-all duration-300 ${activeSlide === index ? 'opacity-100' : 'opacity-40 hover:opacity-70'}`}
          >
            <span className={`text-xs font-bold tracking-widest transition-colors duration-300 ${activeSlide === index ? 'text-primary' : 'text-secondary'}`}>
              {slide.id}
            </span>
            <div className={`h-px transition-all duration-500 ${activeSlide === index ? 'w-12 bg-primary' : 'w-4 bg-secondary'}`}></div>
          </button>
        ))}
      </div>

      {/* Slides Container */}
      <div 
        className="h-full w-full transition-transform duration-1000 ease-[cubic-bezier(0.645,0.045,0.355,1)]"
        style={{ transform: `translateY(-${activeSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={slide.id} className="h-full w-full relative flex items-center">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 w-full h-full">
              {slide.video ? (
                <video
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out"
                  style={{ transform: activeSlide === index ? 'scale(1)' : 'scale(1.05)' }}
                  src={slide.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              ) : (
                <div 
                  className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-1000 ease-out"
                  style={{ 
                    backgroundImage: `url(${slide.image})`,
                    transform: activeSlide === index ? 'scale(1)' : 'scale(1.05)'
                  }}
                ></div>
              )}
              {/* Brand kit overlay: light theme gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/40 backdrop-blur-[2px]"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 pl-24 md:pl-40 pr-8 md:pr-16 max-w-3xl">
              <div className={`transition-all duration-1000 delay-300 ${activeSlide === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                
                <div className="overflow-hidden mb-2">
                  <h2 className={`text-6xl md:text-8xl font-extrabold text-primary/10 leading-none tracking-tighter transition-transform duration-1000 delay-100 ${activeSlide === index ? 'translate-y-0' : 'translate-y-full'}`}>
                    {slide.year}
                  </h2>
                </div>
                
                <div className="pl-4 md:pl-6 border-l-4 border-primary">
                  <h3 className="text-3xl md:text-5xl font-extrabold text-secondary mb-4 leading-tight tracking-tight">
                    {slide.title}
                  </h3>
                  
                  <p className="text-base md:text-lg text-secondary/80 leading-relaxed mb-8 font-medium">
                    {slide.description}
                  </p>
                  
                  <button className="group relative inline-flex items-center justify-center w-24 h-24 md:w-28 md:h-28 rounded-full bg-white soft-shadow hover:soft-shadow-hover transition-all duration-500 hover:scale-105 border border-gray-100 cursor-pointer">
                    <div className="absolute inset-2 rounded-full border border-dashed border-primary/40 group-hover:animate-[spin_10s_linear_infinite]"></div>
                    <div className="flex flex-col items-center gap-1 text-secondary group-hover:text-primary transition-colors">
                      <span className="text-[9px] md:text-[10px] font-bold tracking-widest uppercase text-center px-2">{slide.buttonText}</span>
                      <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </button>
                </div>
                
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-6 right-8 z-20 flex flex-col items-center gap-2 opacity-50">
        <div className="w-px h-12 bg-secondary/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-primary animate-[slide_2s_ease-in-out_infinite]"></div>
        </div>
        <span className="text-[9px] font-bold text-secondary tracking-widest uppercase rotate-180" style={{ writingMode: 'vertical-rl' }}>Scroll</span>
      </div>
    </div>
  );
}
