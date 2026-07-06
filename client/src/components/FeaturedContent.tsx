import { Button } from "@/components/ui/button";
import { Play, Mic, ArrowRight, Clock } from "lucide-react";

const videos = [
  {
    id: 0,
    title: "For Digital Marketers: I Said It",
    category: "Featured Work",
    duration: "00:15",
    videoUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310419663031747991/Y3kw537GjyvvS43ZN9JMcY/fordigitalmarketersisaidit_43821f0e.mp4",
    image: "",
    isNew: true,
    views: "New"
  },
  {
    id: 1,
    title: "Latest Project: Digital Marketing Strategy",
    category: "Featured Work",
    duration: "00:15",
    videoUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310419663031747991/Y3kw537GjyvvS43ZN9JMcY/0222_74bbd9c6.mov",
    image: "",
    isNew: true,
    views: "New"
  },
  {
    id: 3,
    title: "Latest Content Update",
    category: "Featured Work",
    duration: "00:15",
    videoUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310419663031747991/Y3kw537GjyvvS43ZN9JMcY/123-05042026_0b33daee.mp4",
    image: "",
    isNew: true,
    views: "New"
  }
];

const podcasts = [
  {
    id: 1,
    title: "Ep. 42: Finding Your Voice",
    guest: "Sarah Jenkins",
    duration: "45 min",
    image: "/images/podcast-cover-1.png"
  },
  {
    id: 2,
    title: "Ep. 41: The Art of Storytelling",
    guest: "David Chen",
    duration: "52 min",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663031747991/Y3kw537GjyvvS43ZN9JMcY/m3qoo5vtYNls_c394e759.jpg"
  }
];

export default function FeaturedContent() {
  return (
    <section id="videos" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Latest Content</h2>
            <p className="text-muted-foreground max-w-lg">Exploring ideas through visual essays and deep conversations.</p>
          </div>
          <Button variant="ghost" className="text-secondary hover:text-primary hover:bg-transparent group">
            View All Content <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {videos.map((video) => (
            <div key={video.id} className="group relative bg-white rounded-[2rem] overflow-hidden soft-shadow soft-shadow-hover border border-gray-100 flex flex-col h-full">
              <div className="relative aspect-[9/16] overflow-hidden bg-black">
                {video.videoUrl ? (
                  <video 
                    src={video.videoUrl} 
                    controls 
                    className="w-full h-full object-cover"
                    poster={video.image}
                  />
                ) : (
                  <>
                    <div className="absolute inset-0 bg-secondary/20 group-hover:bg-secondary/10 transition-colors z-10" />
                    <img loading="lazy" 
                      src={video.image} 
                      alt={video.title} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-16 h-16 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform">
                        <Play className="w-6 h-6 text-secondary fill-secondary ml-1" />
                      </div>
                    </div>
                  </>
                )}
                
                <div className="absolute bottom-4 right-4 z-20 bg-black/70 backdrop-blur-sm text-white text-xs font-bold px-2 py-1 rounded-md flex items-center">
                  <Clock className="w-3 h-3 mr-1" /> {video.duration}
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-primary uppercase tracking-wider">{video.category}</span>
                    <span className="text-xs text-muted-foreground">{video.views} {video.views !== "New" && "views"}</span>
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {video.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}
