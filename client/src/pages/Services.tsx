import { ArrowRight, CheckCircle2, MapPin, Target, TrendingUp, Video, Play } from "lucide-react";
import { Link } from "wouter";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-primary/30">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section (The Hook) */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-yellow-500/5 -z-10" />
          <div className="container max-w-6xl px-4">
            <div className="max-w-3xl mx-auto text-center space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
              <h1 className="text-4xl md:text-6xl font-extrabold text-secondary tracking-tight leading-tight">
                From 0 to 100: Professional Digital Marketing for <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-500">Hampshire's</span> Local Legends.              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                You run the business. I'll run the growth.
              </p>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Get an MSc-qualified Digital Marketing Executive to manage your SEO, Social Media, and Content—without the agency price tag.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-secondary font-bold px-8 h-14 rounded-full text-lg shadow-lg shadow-yellow-500/20 transition-all hover:scale-105">
                    Book Your Free 30-Minute Strategy Call
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* The "Problem" Section (Empathy) */}
        <section className="py-20 bg-white">
          <div className="container max-w-6xl px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6 animate-in fade-in slide-in-from-left-8 duration-700 delay-150">
                <h2 className="text-3xl md:text-4xl font-bold text-secondary leading-tight">
                  You're a Master of Your Craft. <br />
                  <span className="text-primary">But Marketing is a Full-Time Job.</span>
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground">
                  <p>
                    Most local businesses in Hampshire are "invisible" online because they lack a dedicated marketing team.
                  </p>
                  <p>
                    You shouldn't have to choose between cutting hair or serving food and managing complex SEO or LinkedIn campaigns.
                  </p>
                  <p className="font-medium text-secondary border-l-4 border-yellow-500 pl-4 py-1">
                    I provide a "0-100" solution: I handle the strategy, the filming, and the data so you can focus on your customers.
                  </p>
                </div>
              </div>
              <div className="relative animate-in fade-in slide-in-from-right-8 duration-700 delay-300">
                <div className="grid grid-cols-2 gap-4 relative z-10">
                  <div className="aspect-square rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                    <img 
                      src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663031747991/nWPTWTeNqvLEGwUV.jpg" 
                      alt="Local barbershop interior" 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="aspect-square rounded-2xl overflow-hidden shadow-lg transform translate-y-8 hover:scale-105 transition-transform duration-300">
                    <img 
                      src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663031747991/ysOIVbjVMdzivCNN.jpg" 
                      alt="Fresh pastries in a bakery" 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="aspect-square rounded-2xl overflow-hidden shadow-lg transform -translate-y-8 hover:scale-105 transition-transform duration-300">
                    <img 
                      src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663031747991/bZfIuLFrkbrnidhq.jpg" 
                      alt="Busy local restaurant" 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="aspect-square rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                    <img 
                      src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663031747991/UppynoQlcviOKbjp.jpg" 
                      alt="Colorful flower shop display" 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-primary/10 to-yellow-500/10 rounded-full blur-3xl -z-10"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Services (Core Pillars) */}
        <section className="py-20 bg-gray-50">
          <div className="container max-w-6xl px-4">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary">
                Comprehensive Strategy. <span className="text-primary">Local Execution.</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A complete digital marketing ecosystem tailored for local growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Service 1 */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 group">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-4">Social Media Management (0-100)</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We create high-impact content calendars and manage your community to turn followers into loyal customers. From strategy to posting, we handle it all.
                </p>
              </div>

              {/* Service 2 */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 group">
                <div className="w-14 h-14 rounded-2xl bg-yellow-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-7 h-7 text-yellow-600" />
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-4">Local SEO & Visibility</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We optimize your Google Business Profile and website content to ensure you rank #1 when locals search for your services. Be found where it matters.
                </p>
              </div>

              {/* Service 3 */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 group">
                <div className="w-14 h-14 rounded-2xl bg-purple-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Video className="w-7 h-7 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-4">Professional Content Creation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Using high-end tools like Canva, HeyGen (for AI video creation), and CapCut, we produce "scroll-stopping" visuals and Reels that capture attention and drive engagement.
                </p>
              </div>

              {/* Service 4 */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 group">
                <div className="w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-7 h-7 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-4">Paid Advertising (PPC)</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Targeted Meta and LinkedIn Ads designed to drive immediate foot traffic and bookings with optimized ROI. Stop wasting budget on broad reach.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The "Why Mori?" Section (CV Proof) */}
        <section className="py-20 bg-white overflow-hidden">
          <div className="container max-w-6xl px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 relative">
                <div className="relative z-10 bg-secondary text-white p-10 rounded-3xl shadow-xl">
                  <h3 className="text-2xl font-bold mb-6">Why Mori?</h3>
                  <ul className="space-y-6">
                    <li className="flex items-start space-x-4">
                      <CheckCircle2 className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-lg mb-1">Proven Growth for Local Shops</h4>
                        <p className="text-blue-100 text-sm">Managed digital presences for several small businesses, leading to measurable sales increases through targeted local strategies.</p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-4">
                      <CheckCircle2 className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-lg mb-1">Corporate-Level Expertise</h4>
                        <p className="text-blue-100 text-sm">Experience managing LinkedIn campaigns at TallTree Technologies and conducting social audits for national retailers like TK Maxx.</p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-4">
                      <CheckCircle2 className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-lg mb-1">Budget Efficiency First</h4>
                        <p className="text-blue-100 text-sm">Maximizing every pound by focusing on high-ROI channels like Local SEO and organic content, respecting small business budgets.</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="absolute top-10 -left-10 w-full h-full border-2 border-primary/20 rounded-3xl -z-10 transform -rotate-3"></div>
              </div>
              
              <div className="order-1 lg:order-2 space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-secondary leading-tight">
                  Strategic Insight Meets <br />
                  <span className="text-primary">Creative Execution.</span>
                </h2>
                <p className="text-lg text-muted-foreground">
                  I don't just post; I strategize. My approach combines the analytical rigor of an MSc in Digital Marketing with the creative flair needed to stand out in a crowded feed.
                </p>
                <p className="text-lg text-muted-foreground">
                  Whether you're a local cafe, a boutique shop, or a service provider, I bring big-brand thinking to your local market.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The "Local Edge" Section */}
        <section className="py-20 bg-primary/5">
          <div className="container max-w-4xl px-4 text-center">
            <div className="bg-white p-10 md:p-16 rounded-[2.5rem] shadow-xl border border-primary/10 relative overflow-hidden">
              <div className="relative z-10 space-y-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                  <MapPin className="w-8 h-8" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-secondary">
                  We Bring the Studio to You.
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Based in Portsmouth (PO1), I serve businesses within a 1-hour radius. This means I can visit your shop, capture real content, and truly understand your vibe—something a remote agency can never do.
                </p>
                
                {/* Video Placeholder */}
                <div className="max-w-2xl mx-auto my-8 relative aspect-video bg-gray-900 rounded-2xl overflow-hidden shadow-2xl group cursor-pointer">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border-2 border-white/50 group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-10 h-10 text-white fill-white ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-left">
                    <p className="text-white font-bold text-lg">Why Local Matters</p>
                    <p className="text-white/80 text-sm">See how I work with Portsmouth businesses</p>
                  </div>
                </div>

                <div className="pt-4">
                  <Link href="/contact">
                    <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white font-bold px-8 h-14 rounded-full text-lg shadow-lg transition-all hover:scale-105">
                      Let's Meet for Coffee
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-yellow-500 to-primary"></div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
