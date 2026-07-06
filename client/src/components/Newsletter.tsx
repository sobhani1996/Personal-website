import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="py-24 relative">
      <div className="container max-w-4xl">
        <div className="relative rounded-[3rem] overflow-hidden p-8 md:p-16 text-center">
          {/* Background with blur */}
          <div className="absolute inset-0 bg-white/60 backdrop-blur-xl border border-white/60 shadow-2xl z-0" />
          
          {/* Decorative gradients */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-30">
            <div className="absolute top-[-50%] left-[-20%] w-[500px] h-[500px] bg-primary rounded-full blur-[100px]" />
            <div className="absolute bottom-[-50%] right-[-20%] w-[500px] h-[500px] bg-blue-300 rounded-full blur-[100px]" />
          </div>

          <div className="relative z-10 space-y-6">
            <div className="w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center mx-auto mb-6 rotate-3">
              <Mail className="w-8 h-8 text-primary" />
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-secondary tracking-tight">
              Digital Marketing Insights
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Get weekly updates on the latest digital marketing trends, strategies, and content creation tips. Stay ahead of the curve.
            </p>

            <form 
              action="https://formspree.io/f/YOUR_FORM_ID" 
              method="POST"
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mt-8"
            >
              <Input 
                type="email" 
                name="email"
                placeholder="your@email.com" 
                required
                className="h-14 rounded-full px-6 bg-white border-transparent shadow-sm focus:ring-2 focus:ring-primary/50 text-base"
              />
              <Button type="submit" size="lg" className="h-14 rounded-full px-8 bg-secondary text-white hover:bg-secondary/90 shadow-lg shadow-secondary/20">
                Subscribe
              </Button>
            </form>
            
            <p className="text-xs text-muted-foreground mt-4">
              Join smart marketers growing their brands. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
