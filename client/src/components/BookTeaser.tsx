import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen } from "lucide-react";

export default function BookTeaser() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            
            {/* Content Side */}
            <div className="p-8 md:p-12 lg:p-16 order-2 md:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-primary font-semibold text-sm mb-6">
                <BookOpen size={16} className="text-accent" />
                <span>New Release</span>
              </div>
              
              <Link href="/book">
                <a className="block hover:opacity-80 transition-opacity">
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight">
                    The Digital Marketer&apos;s Illustrated Guide to <span className="text-primary">AI Image Generation</span>
                  </h2>
                </a>
              </Link>
              
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Stop generating AI slop. Start shipping campaigns. The practical, illustrated playbook for marketers who want visuals that actually work on real campaigns.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/book">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-14 text-base font-semibold shadow-lg shadow-primary/25 transition-all hover:-translate-y-1 w-full sm:w-auto group">
                    Read 5 Pages Free
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <a href="https://www.amazon.co.uk/Digital-Marketers-Illustrated-Guide-Generation-ebook/dp/B0GX449BBM/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-base font-semibold border-2 border-slate-200 hover:border-primary hover:text-primary hover:bg-primary/5 transition-all w-full">
                    Buy on Amazon
                  </Button>
                </a>
              </div>
              
              <div className="mt-8 flex items-center gap-4 text-sm text-slate-500 font-medium">
                <div className="flex text-accent">
                  {'★★★★★'.split(' ').map((star, i) => (
                    <span key={i}>{star}</span>
                  ))}
                </div>
                <span>Updated for 2026</span>
              </div>
            </div>
            
            {/* Image Side */}
            <div className="relative h-full min-h-[300px] md:min-h-[400px] order-1 md:order-2 bg-slate-50 flex items-center justify-center p-8">
              {/* Abstract background pattern for the book */}
              <div className="absolute inset-0 opacity-50" style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
              
              <Link href="/book">
                <a className="relative z-10 block transform rotate-[-5deg] hover:rotate-0 transition-transform duration-500 shadow-2xl rounded-r-xl rounded-l-sm overflow-hidden border-l-8 border-slate-300 max-w-[240px] md:max-w-[280px] w-full aspect-[2/3]">
                  <img loading="lazy" 
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310419663031747991/Y3kw537GjyvvS43ZN9JMcY/cover_cd5f8d6b.jpg" 
                    alt="The Digital Marketer&apos;s Illustrated Guide to AI Image Generation" 
                    className="w-full h-full object-cover"
                  />
                  {/* Book gloss effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 pointer-events-none"></div>
                </a>
              </Link>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
