import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote: "Mori and I studied together on the MSc Digital Marketing programme at Northampton, and what stood out early on was how differently he thought about problems. In group work, he wasn't just generating ideas — he was connecting them to a clear rationale, which made discussions sharper and outputs stronger. If you're looking for someone who brings both creative range and genuine reliability to a marketing role, Mori is exactly that.",
    author: "Beverly Ezebuike, M.Sc.",
    role: "Partnerships Manager",
    avatar: "BE"
  },
  {
    id: 2,
    quote: "I had the pleasure of mentoring Mori, and throughout that time, what stood out most was his strong instinct for marketing, combined with a real willingness to learn and improve. He doesn't just execute tasks. He tries to understand the reasoning behind the work, which is an important quality for anyone growing in marketing. I'm confident Mori has a lot of potential in marketing and growth-related roles.",
    author: "Sepehr Sanaee",
    role: "Head of Growth & Development @ Open Forest",
    avatar: "SS"
  },
  {
    id: 3,
    quote: "Mori worked in my organisation during his MSc in Digital Marketing programme, I observed his development into a capable marketing professional. He contributed meaningfully to our marketing strategy, particularly excelling in social media strategy and content creation on LinkedIn. Any organisation seeking a digital marketer who balances analytical thinking with practical implementation would find value in Mori's contributions.",
    author: "Behzad Mokhtari",
    role: "IoT devices shipping late? I diagnose connectivity failures in 72 hours.",
    avatar: "BM"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-100/50 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3" />

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">What people say about working with me</h2>
          <p className="text-muted-foreground">Feedback from colleagues and mentors I've worked alongside.</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((item) => (
                <CarouselItem key={item.id} className="md:basis-1/1 lg:basis-1/1">
                  <div className="p-6 md:p-10">
                    <div className="flex flex-col items-center text-center space-y-8">
                      <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center text-primary mb-4">
                        <Quote className="w-8 h-8 fill-current" />
                      </div>
                      
                      <blockquote className="text-lg md:text-xl font-medium text-secondary leading-relaxed">
                        "{item.quote}"
                      </blockquote>
                      
                      <div className="flex items-center gap-4 mt-8">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-yellow-500 flex items-center justify-center text-white font-bold shadow-md">
                          {item.avatar}
                        </div>
                        <div className="text-left">
                          <div className="font-bold text-secondary">{item.author}</div>
                          <div className="text-sm text-muted-foreground">{item.role}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="left-[-50px] h-12 w-12 border-none bg-gray-50 hover:bg-primary hover:text-white shadow-sm" />
              <CarouselNext className="right-[-50px] h-12 w-12 border-none bg-gray-50 hover:bg-primary hover:text-white shadow-sm" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
