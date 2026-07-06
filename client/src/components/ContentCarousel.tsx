import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Play, Image as ImageIcon, BarChart, Sparkles } from "lucide-react";

const contentItems = [
  {
    id: 1,
    title: "Short-form Dominance",
    description: "Engaging, trend-driven short-form videos designed for high reach and shareability on Instagram and TikTok.",
    type: "Reels & TikToks",
    icon: <Play className="w-5 h-5" />,
    video: "https://d2xsxph8kpxj0f.cloudfront.net/310419663031747991/Y3kw537GjyvvS43ZN9JMcY/Teaser_e8cb4df1.mp4",
    color: "from-blue-500/20 to-purple-500/20"
  },
  {
    id: 2,
    title: "The AI Revolution",
    description: "Leveraging AI tools to create innovative, scalable video content that stands out in crowded feeds.",
    type: "AI Videos",
    icon: <Sparkles className="w-5 h-5" />,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    color: "from-yellow-500/20 to-orange-500/20"
  },
  {
    id: 3,
    title: "Visual Communication",
    description: "Eye-catching static visuals for announcements, campaigns, and brand building across social platforms.",
    type: "Posters & Graphics",
    icon: <ImageIcon className="w-5 h-5" />,
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800",
    color: "from-green-500/20 to-emerald-500/20"
  },
  {
    id: 4,
    title: "Data Storytelling",
    description: "Distilling complex data and concepts into easy-to-understand, highly saveable visual formats.",
    type: "Infographics",
    icon: <BarChart className="w-5 h-5" />,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    color: "from-pink-500/20 to-rose-500/20"
  }
];

export default function ContentCarousel() {
  return (
    <div className="relative px-4 md:px-12 py-8">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-4 md:-ml-6">
          {contentItems.map((item) => (
            <CarouselItem key={item.id} className="pl-4 md:pl-6 md:basis-1/2 lg:basis-1/3">
              <div className="group relative h-[450px] rounded-3xl overflow-hidden soft-shadow hover:soft-shadow-hover transition-all duration-500 bg-white border border-gray-100 flex flex-col">
                {/* Media Section */}
                <div className="relative h-3/5 w-full overflow-hidden bg-gray-100">
                  {item.video ? (
                    <video
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      src={item.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                  ) : (
                    <div 
                      className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                      style={{ backgroundImage: `url(${item.image})` }}
                    />
                  )}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} mix-blend-multiply opacity-60 group-hover:opacity-40 transition-opacity duration-500`}></div>
                  
                  {/* Badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-2 soft-shadow">
                    <div className="text-primary">
                      {item.icon}
                    </div>
                    <span className="text-xs font-bold text-secondary tracking-wide">{item.type}</span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="relative h-2/5 p-6 flex flex-col justify-between bg-white group-hover:bg-gray-50/50 transition-colors duration-500">
                  <div>
                    <h3 className="text-xl font-bold text-secondary mb-2 group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {item.description}
                    </p>
                  </div>
                  
                  <div className="flex items-center text-primary text-sm font-bold tracking-wide group/btn cursor-pointer w-fit">
                    Explore Format
                    <svg className="w-4 h-4 ml-2 transform group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden md:block">
          <CarouselPrevious className="-left-12 w-12 h-12 border-gray-200 text-secondary hover:text-primary hover:border-primary transition-colors" />
          <CarouselNext className="-right-12 w-12 h-12 border-gray-200 text-secondary hover:text-primary hover:border-primary transition-colors" />
        </div>
      </Carousel>
      
      {/* Mobile Navigation Hint */}
      <div className="mt-8 text-center md:hidden flex items-center justify-center gap-2 text-muted-foreground text-sm">
        <svg className="w-5 h-5 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
        Swipe to explore more
      </div>
    </div>
  );
}
