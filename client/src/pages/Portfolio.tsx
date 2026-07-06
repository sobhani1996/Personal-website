import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ArrowRight, Play, Award, CheckCircle2, Clock, BarChart3, Search, Briefcase, PenTool, Video, Bot, LineChart, FileText, Mail, Smartphone, Image as ImageIcon, PieChart } from "lucide-react";
import ContentCarousel from "@/components/ContentCarousel";
import { Link } from "wouter";
import { useState } from "react";

export default function Portfolio() {
  const [activeTool, setActiveTool] = useState<number | null>(null);

    const tools = [
    { 
      name: "Google Analytics",
      company: "TallTree Technologies & Aftabgardoon Shop", 
      icon: <img loading="lazy" src="https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://analytics.google.com&size=128" alt="Google Analytics" className="w-full h-full object-contain p-1" />,
      whatIDid: "Monitored campaign-driven traffic, checked traffic sources, and analyzed user drop-offs.",
      impact: "Identified a bounce rate problem that, once fixed, contributed to a 500% conversion growth.",
      toolsUsed: "Traffic Sources, Conversion Tracking"
    },
    { 
      name: "Google Ads",
      company: "Aftabgardoon Shop", 
      icon: <img loading="lazy" src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Ads_logo.svg" alt="Google Ads" className="w-full h-full object-contain p-1.5" />,
      whatIDid: "Ran search campaigns targeting high-intent product keywords, researched terms, wrote ad copy, and set bids.",
      impact: "Contributed to a 300% traffic increase and 500% growth in conversions by aligning ad messages with landing pages.",
      toolsUsed: "Search Campaigns, Keyword Targeting"
    },
    { 
      name: "LinkedIn Ads",
      company: "TallTree Technologies", 
      icon: <img loading="lazy" src="https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://linkedin.com&size=128" alt="LinkedIn" className="w-full h-full object-contain p-1" />,
      whatIDid: "Managed end-to-end paid campaigns, built audiences using job title/seniority filters, and wrote ad copy.",
      impact: "Successfully reached engineering managers and CTOs at scale-up companies, maintaining efficient CPL.",
      toolsUsed: "LinkedIn Campaign Manager"
    },
    { 
      name: "Canva",
      company: "TallTree, Aftabgardoon, Freelance & MSc", 
      icon: <img loading="lazy" src="https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://canva.com&size=128" alt="Canva" className="w-full h-full object-contain p-1" />,
      whatIDid: "Designed social media graphics, carousel posts, pitch decks, ad creatives, and campaign one-pagers.",
      impact: "Maintained visual consistency across brands and created a business plan pitch deck that placed third in a university competition.",
      toolsUsed: "Templates, Brand Kits"
    },
    { 
      name: "CapCut",
      company: "Freelance (Fashion & Tech)", 
      icon: <img loading="lazy" src="https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://capcut.com&size=128" alt="CapCut" className="w-full h-full object-contain p-1" />,
      whatIDid: "Edited raw footage into polished short-form videos (Reels, social clips) with captions, transitions, and music.",
      impact: "Produced native-feeling content for Instagram and LinkedIn that engaged audiences without feeling like produced ads.",
      toolsUsed: "Video Editing, Audio Sync"
    },
    { 
      name: "HeyGen",
      company: "MSc Business Plan Competition", 
      icon: <img loading="lazy" src="https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://heygen.com&size=128" alt="HeyGen" className="w-full h-full object-contain p-1" />,
      whatIDid: "Created an AI presenter video for a business plan competition pitch.",
      impact: "Brought the presentation to life without a full video production setup, helping the pitch stand out.",
      toolsUsed: "AI Video Generation"
    },
    { 
      name: "Search Console",
      company: "Aftabgardoon Shop", 
      icon: <img loading="lazy" src="https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://search.google.com&size=128" alt="Search Console" className="w-full h-full object-contain p-1" />,
      whatIDid: "Analyzed organic search performance, identified queries driving traffic, and found indexing issues.",
      impact: "Used insights to prioritize product page rewrites and keyword targeting, improving organic visibility.",
      toolsUsed: "Performance Reports, Indexing"
    },
    { 
      name: "WordPress",
      company: "Aftabgardoon Shop", 
      icon: <img loading="lazy" src="https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://wordpress.org&size=128" alt="WordPress" className="w-full h-full object-contain p-1" />,
      whatIDid: "Managed website content, updated product pages, published blog posts, and adjusted page copy for SEO.",
      impact: "Kept the site aligned with seasonal campaigns and maintained up-to-date content without developer reliance.",
      toolsUsed: "CMS, Page Builders"
    },
    { 
      name: "Mailchimp",
      company: "TallTree Technologies", 
      icon: <img loading="lazy" src="https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://mailchimp.com&size=128" alt="Mailchimp" className="w-full h-full object-contain p-1" />,
      whatIDid: "Structured email sequences, wrote copy, and targeted existing contacts and leads.",
      impact: "Gained practical experience with list segmentation, subject line testing, and using email as a nurture channel.",
      toolsUsed: "List Segmentation, Sequences"
    },
    { 
      name: "Meta Ads",
      company: "Aftabgardoon Shop", 
      icon: <img loading="lazy" src="https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://meta.com&size=128" alt="Meta" className="w-full h-full object-contain p-1" />,
      whatIDid: "Set up campaign targeting, wrote ad copy, and monitored performance for a winter seasonal push on Instagram.",
      impact: "Resulted in a 15% sales increase compared to the previous year.",
      toolsUsed: "Ads Manager, Pixel Setup"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-primary/30">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        
        {/* Header Section */}
        <section className="container max-w-5xl mx-auto px-4 mb-12 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Selected Work
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-secondary tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
            Cases That <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-500">Moved the Needle</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            Real brands, real strategies, real results. Here's what happened when I was given a channel and a challenge.
          </p>
        </section>

        {/* Stats Bar */}
        <section className="border-y border-gray-100 bg-white/50 backdrop-blur-sm mb-12">
          <div className="container max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-100">
              <div className="p-8 text-center md:text-left">
                <div className="text-4xl md:text-5xl font-extrabold text-primary mb-2">500<span className="text-2xl">%</span></div>
                <div className="text-sm text-muted-foreground font-medium">Conversion growth achieved (Aftabgardoon)</div>
              </div>
              <div className="p-8 text-center md:text-left">
                <div className="text-4xl md:text-5xl font-extrabold text-primary mb-2">300<span className="text-2xl">%</span></div>
                <div className="text-sm text-muted-foreground font-medium">Website traffic increase via SEO & Ads</div>
              </div>
              <div className="p-8 text-center md:text-left">
                <div className="text-4xl md:text-5xl font-extrabold text-primary mb-2">200<span className="text-2xl">%</span></div>
                <div className="text-sm text-muted-foreground font-medium">Instagram engagement growth</div>
              </div>
              <div className="p-8 text-center md:text-left">
                <div className="text-4xl md:text-5xl font-extrabold text-primary mb-2">3<span className="text-2xl">+</span></div>
                <div className="text-sm text-muted-foreground font-medium">Years managing multi-channel campaigns</div>
              </div>
            </div>
          </div>
        </section>

        <div className="container max-w-5xl mx-auto px-4 space-y-12">
          
          {/* MANAGED PAGES QUICK LINKS */}
          <div className="bg-white rounded-2xl p-8 border border-gray-100 soft-shadow">
            <h3 className="text-xl font-bold text-secondary mb-6 flex items-center gap-2">
              <Smartphone className="w-5 h-5 text-primary" /> Pages I've Managed
            </h3>
            <div className="flex flex-col lg:flex-row items-center justify-between gap-2 lg:gap-4">
              <a href="https://www.instagram.com/ibolak" target="_blank" rel="noopener noreferrer" className="w-full lg:flex-1 p-4 rounded-xl border border-gray-100 hover:border-primary/50 hover:bg-primary/5 transition-all group flex items-center gap-4">
                <img loading="lazy" src="https://d2xsxph8kpxj0f.cloudfront.net/310419663031747991/Y3kw537GjyvvS43ZN9JMcY/2_79c273d1.jpg" alt="Ibolak Logo" className="w-12 h-12 rounded-full object-cover border border-gray-200" />
                <div className="flex flex-col">
                  <span className="font-bold text-secondary group-hover:text-primary transition-colors">Ibolak</span>
                  <span className="text-xs text-muted-foreground">Social Media Team</span>
                </div>
              </a>
              
              <div className="flex flex-col items-center justify-center px-1">
                <span className="text-[10px] font-bold text-primary/70 mb-1">2022</span>
                <ArrowRight className="hidden lg:block text-muted-foreground/40 w-5 h-5 flex-shrink-0" />
                <div className="lg:hidden w-px h-4 bg-muted-foreground/20"></div>
              </div>
              
              <a href="https://www.instagram.com/aftabgardoonshopp/" target="_blank" rel="noopener noreferrer" className="w-full lg:flex-1 p-4 rounded-xl border border-gray-100 hover:border-primary/50 hover:bg-primary/5 transition-all group flex items-center gap-4">
                <img loading="lazy" src="https://d2xsxph8kpxj0f.cloudfront.net/310419663031747991/Y3kw537GjyvvS43ZN9JMcY/4_d5ddf765.jpg" alt="Aftabgardoon Shop Logo" className="w-12 h-12 rounded-full object-cover border border-gray-200" />
                <div className="flex flex-col">
                  <span className="font-bold text-secondary group-hover:text-primary transition-colors">Aftabgardoon Shop</span>
                  <span className="text-xs text-muted-foreground">Instagram Management</span>
                </div>
              </a>

              <div className="flex flex-col items-center justify-center px-1">
                <span className="text-[10px] font-bold text-primary/70 mb-1">2024</span>
                <ArrowRight className="hidden lg:block text-muted-foreground/40 w-5 h-5 flex-shrink-0" />
                <div className="lg:hidden w-px h-4 bg-muted-foreground/20"></div>
              </div>

              <a href="https://talltree.tech/" target="_blank" rel="noopener noreferrer" className="w-full lg:flex-1 p-4 rounded-xl border border-gray-100 hover:border-primary/50 hover:bg-primary/5 transition-all group flex items-center gap-4">
                <img loading="lazy" src="https://d2xsxph8kpxj0f.cloudfront.net/310419663031747991/Y3kw537GjyvvS43ZN9JMcY/1_484737dc.jpeg" alt="TallTree Tech Logo" className="w-12 h-12 rounded-full object-cover border border-gray-200" />
                <div className="flex flex-col">
                  <span className="font-bold text-secondary group-hover:text-primary transition-colors">TallTree Tech</span>
                  <span className="text-xs text-muted-foreground">B2B Website & LinkedIn</span>
                </div>
              </a>

              <div className="flex flex-col items-center justify-center px-1">
                <span className="text-[10px] font-bold text-primary/70 mb-1">2025</span>
                <ArrowRight className="hidden lg:block text-muted-foreground/40 w-5 h-5 flex-shrink-0" />
                <div className="lg:hidden w-px h-4 bg-muted-foreground/20"></div>
              </div>

              <a href="https://www.instagram.com/northampton_su/" target="_blank" rel="noopener noreferrer" className="w-full lg:flex-1 p-4 rounded-xl border border-gray-100 hover:border-primary/50 hover:bg-primary/5 transition-all group flex items-center gap-4">
                <img loading="lazy" src="https://d2xsxph8kpxj0f.cloudfront.net/310419663031747991/Y3kw537GjyvvS43ZN9JMcY/3_e77f3fe8.jpg" alt="Northampton SU Logo" className="w-12 h-12 rounded-full object-cover border border-gray-200" />
                <div className="flex flex-col">
                  <span className="font-bold text-secondary group-hover:text-primary transition-colors">Northampton SU</span>
                  <span className="text-xs text-muted-foreground">Managed Jan-Aug 2025</span>
                </div>
              </a>
            </div>
          </div>

          {/* CASE STUDY 1: AFTABGARDOON */}
          <div className="bg-white rounded-[2rem] overflow-hidden soft-shadow border border-gray-100">
            <div className="p-8 md:p-12 border-b border-gray-100 flex flex-col md:flex-row justify-between items-start gap-6">
              <div>
                <div className="inline-block px-3 py-1 rounded-md bg-green-50 text-green-600 text-xs font-bold uppercase tracking-wider mb-4">
                  SEO · Google Ads · Instagram · Content
                </div>
                <h3 className="text-3xl font-extrabold text-secondary mb-2">Aftabgardoon Shop</h3>
                <p className="text-muted-foreground">E-commerce growth strategy · Tehran, Iran</p>
              </div>
              <div className="px-4 py-2 rounded-full border border-gray-200 text-sm font-medium text-muted-foreground whitespace-nowrap">
                2022 – 2024
              </div>
            </div>

            {/* Video Player */}
            <div className="m-8 md:m-12 mx-auto bg-black rounded-2xl aspect-[9/16] max-w-[300px] overflow-hidden shadow-xl">
              <video 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310419663031747991/Y3kw537GjyvvS43ZN9JMcY/Untitleddesign_78bb1662.mp4" 
                controls 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 border-y border-gray-100 divide-x divide-gray-100">
              <div className="p-6 text-center">
                <div className="text-2xl font-bold text-green-600 mb-1">+500%</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Conversion Rate</div>
              </div>
              <div className="p-6 text-center">
                <div className="text-2xl font-bold text-green-600 mb-1">+300%</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Web Traffic</div>
              </div>
              <div className="p-6 text-center">
                <div className="text-2xl font-bold text-green-600 mb-1">+200%</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">IG Engagement</div>
              </div>
              <div className="p-6 text-center">
                <div className="text-2xl font-bold text-green-600 mb-1">+150%</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Followers</div>
              </div>
            </div>

            <div className="p-8 md:p-12 grid md:grid-cols-2 gap-12">
              <div>
                <h4 className="text-sm font-bold text-primary uppercase tracking-wider mb-4 pb-2 border-b border-gray-100">The Situation</h4>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Aftabgardoon is a women's fashion e-commerce brand. When I joined, they had minimal online presence — low search visibility, weak social engagement, and no structured paid media strategy.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The challenge was to build a complete digital marketing engine from scratch across SEO, Google Ads, and Instagram, with limited budget and no existing audience data.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-bold text-primary uppercase tracking-wider mb-4 pb-2 border-b border-gray-100">What I Did</h4>
                <ul className="space-y-4 text-muted-foreground leading-relaxed">
                  <li><strong className="text-secondary">SEO & Content:</strong> Conducted keyword research and rewrote product listings. Built backlinks. Optimised all on-page elements. Updated WordPress content to align with seasonal search trends.</li>
                  <li><strong className="text-secondary">Google Ads:</strong> Built and managed campaigns targeting high-intent search terms. Analysed performance in Search Console and Analytics, refined bidding and copy iteratively.</li>
                  <li><strong className="text-secondary">Instagram:</strong> Developed a monthly content calendar aligned to product launches and seasons. Created visual assets, wrote captions, and engaged the community daily.</li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-bold text-primary uppercase tracking-wider mb-4 pb-2 border-b border-gray-100">The Results</h4>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The combined SEO and paid strategy tripled organic traffic and brought conversions up 5x. The biggest driver was aligning ad copy directly with landing page messaging — when they matched, bounce rate dropped significantly and session duration increased.
                </p>
                <a href="https://www.instagram.com/aftabgardoonshopp/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-bold text-primary hover:text-secondary transition-colors">
                  View Aftabgardoon Instagram <ArrowRight className="ml-1 w-4 h-4" />
                </a>
              </div>
              <div>
                <h4 className="text-sm font-bold text-primary uppercase tracking-wider mb-4 pb-2 border-b border-gray-100">What I'd Do Differently</h4>
                <p className="text-muted-foreground leading-relaxed">
                  I'd invest earlier in retargeting campaigns. We were driving significant new traffic but not recapturing visitors who didn't convert first time — a remarketing funnel would have compounded the results further.
                </p>
              </div>
            </div>
          </div>

          {/* CASE STUDY 2: TALLTREE */}
          <div className="bg-white rounded-[2rem] overflow-hidden soft-shadow border border-gray-100">
            <div className="p-8 md:p-12 border-b border-gray-100 flex flex-col md:flex-row justify-between items-start gap-6">
              <div>
                <div className="inline-block px-3 py-1 rounded-md bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider mb-4">
                  LinkedIn Ads · B2B · Paid Social · Copywriting
                </div>
                <h3 className="text-3xl font-extrabold text-secondary mb-2">TallTree Technologies</h3>
                <p className="text-muted-foreground">B2B digital marketing & paid LinkedIn · Remote</p>
              </div>
              <div className="px-4 py-2 rounded-full border border-gray-200 text-sm font-medium text-muted-foreground whitespace-nowrap">
                Jan 2024 – Mar 2025
              </div>
            </div>

            {/* Video Player */}
            <div className="m-8 md:m-12 mx-auto bg-black rounded-2xl aspect-video max-w-3xl overflow-hidden shadow-xl">
              <video 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310419663031747991/Y3kw537GjyvvS43ZN9JMcY/Mori_Portfolio_1_56f59251.mp4" 
                controls 
                className="w-full h-full object-contain"
              />
            </div>

            <div className="p-8 md:p-12 grid md:grid-cols-2 gap-12">
              <div>
                <h4 className="text-sm font-bold text-primary uppercase tracking-wider mb-4 pb-2 border-b border-gray-100">The Situation</h4>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  TallTree Technologies is an early-stage B2B tech startup. LinkedIn was their primary channel for brand awareness and lead generation. They needed a marketer who could both run paid campaigns and produce organic content — while staying closely aligned with the engineering team's roadmap.
                </p>
                <a href="https://talltree.tech/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-bold text-primary hover:text-secondary transition-colors">
                  Visit TallTree Website <ArrowRight className="ml-1 w-4 h-4" />
                </a>
              </div>
              <div>
                <h4 className="text-sm font-bold text-primary uppercase tracking-wider mb-4 pb-2 border-b border-gray-100">What I Did</h4>
                <ul className="space-y-4 text-muted-foreground leading-relaxed">
                  <li><strong className="text-secondary">LinkedIn Ads:</strong> Managed end-to-end paid campaigns via LinkedIn Campaign Manager — audience setup, ad copy, creative briefing, budget allocation, and ongoing performance analysis.</li>
                  <li><strong className="text-secondary">Content:</strong> Translated complex product updates into readable LinkedIn posts. Built a regular publishing cadence to grow organic reach alongside paid activity.</li>
                  <li><strong className="text-secondary">Analysis:</strong> Reviewed CTR, CPL, and engagement data weekly to optimise targeting and messaging.</li>
                </ul>
              </div>
            </div>



            <div className="m-8 md:m-12 mt-0 bg-blue-50 border border-blue-100 rounded-xl p-6 md:p-8">
              <h4 className="text-sm font-bold text-blue-700 uppercase tracking-wider mb-3 flex items-center gap-2">
                <span className="text-lg">🎯</span> Targeting Approach
              </h4>
              <p className="text-sm text-secondary leading-relaxed">
                For awareness campaigns, I targeted <strong>Engineering Managers and CTOs</strong> at companies with 50–500 employees in the UK and US tech sector, using LinkedIn's job title + company size filters. For lead gen campaigns, I layered in interest targeting (DevOps, cloud infrastructure) and retargeted visitors of the company website. This two-stage approach kept CPL efficient while building brand familiarity before asking for a conversion.
              </p>
            </div>
          </div>

          {/* SPEC PROJECT */}
          <div className="bg-white rounded-[2rem] overflow-hidden soft-shadow border border-gray-100">
            <div className="p-8 md:p-12 border-b border-gray-100 flex flex-col md:flex-row justify-between items-start gap-6">
              <div>
                <div className="inline-block px-3 py-1 rounded-md bg-red-50 text-red-600 text-xs font-bold uppercase tracking-wider mb-4">
                  Spec Project · Content Strategy
                </div>
                <h3 className="text-3xl font-extrabold text-secondary mb-2">Social Media Campaign — Local Business Brief</h3>
                <p className="text-muted-foreground">Self-initiated spec work demonstrating content strategy & creation process</p>
              </div>
              <div className="px-4 py-2 rounded-full border border-gray-200 text-sm font-medium text-muted-foreground whitespace-nowrap">
                2026
              </div>
            </div>

            <div className="p-8 md:p-12 pb-6">
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong className="text-secondary">The Brief:</strong> Develop a 9-post Instagram grid strategy for a local Portsmouth independent business with under 500 followers, aiming to increase engagement and build a local community audience.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-secondary">The Strategy:</strong> Audience-first content mix: 40% educational (tips/value), 30% brand personality, 20% product/service showcase, 10% community/UGC-style. All Reels-led for maximum organic reach. Caption copy tailored for save-and-share behaviour over likes.
              </p>
            </div>

            <div className="px-8 md:px-12 pb-8 grid md:grid-cols-3 gap-6">
              <div className="border border-gray-200 rounded-xl overflow-hidden group hover:border-primary/50 transition-colors">
                <div className="h-40 bg-gradient-to-br from-indigo-900 to-purple-900 flex items-center justify-center text-4xl relative">
                  📊
                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-[9px] text-white/70 text-center py-1 tracking-widest uppercase">Spec Content Preview</div>
                </div>
                <div className="p-4">
                  <div className="text-[10px] font-bold text-red-500 uppercase tracking-wider mb-2">Educational Reel</div>
                  <p className="text-xs text-muted-foreground leading-relaxed">"3 things Portsmouth locals don't know about [business]" — hook-led, saves-optimised caption</p>
                </div>
              </div>
              <div className="border border-gray-200 rounded-xl overflow-hidden group hover:border-primary/50 transition-colors">
                <div className="h-40 bg-gradient-to-br from-green-900 to-emerald-900 flex items-center justify-center text-4xl relative">
                  🎬
                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-[9px] text-white/70 text-center py-1 tracking-widest uppercase">Spec Content Preview</div>
                </div>
                <div className="p-4">
                  <div className="text-[10px] font-bold text-red-500 uppercase tracking-wider mb-2">Brand Personality</div>
                  <p className="text-xs text-muted-foreground leading-relaxed">Behind-the-scenes content — builds trust, humanises the brand, drives comments</p>
                </div>
              </div>
              <div className="border border-gray-200 rounded-xl overflow-hidden group hover:border-primary/50 transition-colors">
                <div className="h-40 bg-gradient-to-br from-red-900 to-rose-900 flex items-center justify-center text-4xl relative">
                  ✨
                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-[9px] text-white/70 text-center py-1 tracking-widest uppercase">Spec Content Preview</div>
                </div>
                <div className="p-4">
                  <div className="text-[10px] font-bold text-red-500 uppercase tracking-wider mb-2">Product Showcase</div>
                  <p className="text-xs text-muted-foreground leading-relaxed">Visual-first carousel: problem → solution format with a strong CTA in final slide</p>
                </div>
              </div>
            </div>

            <div className="px-8 md:px-12 pb-12">
              <div className="bg-red-50 border border-red-100 rounded-lg p-4 text-xs text-secondary flex items-start gap-3">
                <span className="text-lg leading-none">💡</span>
                <p><strong>Note:</strong> This is self-initiated spec work. All content is original and created to demonstrate strategy, copywriting, and visual thinking — not tied to a paid client.</p>
              </div>
            </div>
          </div>

        </div>

        {/* CONTENT CREATION EXAMPLES */}
        <section className="mt-16 py-16 bg-gray-50/50 border-y border-gray-100">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-6">
                Creative Work
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-secondary tracking-tight">
                Content Creation
              </h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                A showcase of the different formats I use to engage audiences, from short-form video to visual storytelling.
              </p>
            </div>

            <ContentCarousel />
          </div>
        </section>

        {/* TOOLS & SKILLS */}
        <section className="py-16 bg-white border-y border-gray-100 overflow-hidden">
          <div className="container max-w-5xl mx-auto px-4">
            <div className="text-center mb-8 md:mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-6">
                Skills & Stack
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-secondary tracking-tight">
                Tools I Work With
              </h2>
            </div>

            <div className="hidden md:flex relative w-full max-w-[800px] mx-auto aspect-square items-center justify-center my-12">
              {/* Dashed circle background */}
              <div className="absolute w-[85%] h-[85%] rounded-full border-2 border-dashed border-gray-200 -z-10 animate-[spin_120s_linear_infinite]"></div>
              <div className="absolute w-[85%] h-[85%] rounded-full border border-primary/5 -z-10"></div>

              {/* Center Content */}
              <div className="absolute w-[75%] h-[75%] rounded-full flex flex-col items-center justify-center text-center p-12 z-0">
                {activeTool !== null ? (
                  <div className="animate-in fade-in zoom-in duration-300 flex flex-col items-center w-full h-full justify-center max-w-[440px] mx-auto">
                    <div className="mb-2 inline-flex justify-center items-center w-12 h-12 rounded-full bg-white shadow-sm border border-gray-100">
                      <div className="scale-125">{tools[activeTool].icon}</div>
                    </div>
                    <h3 className="text-lg font-bold text-secondary mb-0.5">{tools[activeTool].name}</h3>
                    <div className="text-xs font-semibold text-primary/80 mb-3 text-center px-2 py-0.5 bg-primary/5 rounded-full">{tools[activeTool].company}</div>
                    
                    <div className="w-full text-left space-y-3 overflow-y-auto pr-2 pb-2 [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                      <div>
                        <h4 className="text-[10px] font-bold text-primary uppercase tracking-wider mb-0.5">What I Did</h4>
                        <p className="text-xs text-secondary leading-relaxed">
                          {tools[activeTool].whatIDid}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-[10px] font-bold text-primary uppercase tracking-wider mb-0.5">The Impact</h4>
                        <p className="text-xs text-secondary leading-relaxed font-medium">
                          {tools[activeTool].impact}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-[10px] font-bold text-primary uppercase tracking-wider mb-0.5">Tools Used</h4>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {tools[activeTool].toolsUsed}
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-muted-foreground animate-pulse flex flex-col items-center">
                    <div className="text-5xl mb-4">👆</div>
                    <p className="font-medium text-lg max-w-xs">Click on any tool to see my experience</p>
                  </div>
                )}
              </div>
              {/* Tool Nodes */}
              {tools.map((tool, i) => {
                const angle = (i / tools.length) * 2 * Math.PI - Math.PI / 2;
                const r = 42.5;
                const x = 50 + r * Math.cos(angle);
                const y = 50 + r * Math.sin(angle);
                
                return (
                  <div 
                    key={i}
                    className={`absolute w-20 h-20 -ml-10 -mt-10 rounded-full bg-white border-2 flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 shadow-md z-10 ${activeTool === i ? 'border-primary scale-110 shadow-primary/20 ring-4 ring-primary/10' : 'border-gray-100 hover:border-primary/50'}`}
                    style={{ left: `${x}%`, top: `${y}%` }}
                    onClick={() => setActiveTool(i)}
                  >
                    <div className="group relative flex items-center justify-center w-full h-full">
                      <div className="scale-100 transition-transform">
                        {tool.icon}
                      </div>
                      <span className="absolute -bottom-10 opacity-0 group-hover:opacity-100 transition-opacity text-xs font-semibold text-secondary whitespace-nowrap bg-white px-2 py-1 rounded shadow-sm border border-gray-100 pointer-events-none z-20">
                        {tool.name}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Mobile Grid Layout */}
            <div className="md:hidden grid grid-cols-3 sm:grid-cols-4 gap-4 my-8">
              {tools.map((tool, i) => (
                <Dialog key={i}>
                  <DialogTrigger asChild>
                    <div 
                      className="flex flex-col items-center justify-center p-4 bg-white rounded-2xl border border-gray-100 shadow-sm cursor-pointer hover:border-primary/50 hover:shadow-md transition-all active:scale-95"
                      onClick={() => setActiveTool(i)}
                    >
                      <div className="scale-75 mb-2">
                        {tool.icon}
                      </div>
                      <span className="text-[10px] font-semibold text-secondary text-center leading-tight">
                        {tool.name}
                      </span>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="w-[90vw] max-w-[400px] rounded-3xl p-6">
                    <DialogHeader className="text-left">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center border border-gray-100">
                          <div className="scale-100">{tool.icon}</div>
                        </div>
                        <div>
                          <DialogTitle className="text-xl font-bold text-secondary">{tool.name}</DialogTitle>
                          <div className="text-xs font-semibold text-primary inline-block px-2 py-0.5 bg-primary/5 rounded-full mt-1">{tool.company}</div>
                        </div>
                      </div>
                    </DialogHeader>
                    <div className="space-y-4 mt-2">
                      <div>
                        <h4 className="text-xs font-bold text-primary uppercase tracking-wider mb-1">What I Did</h4>
                        <p className="text-sm text-secondary leading-relaxed">
                          {tool.whatIDid}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-primary uppercase tracking-wider mb-1">The Impact</h4>
                        <p className="text-sm text-secondary leading-relaxed font-medium">
                          {tool.impact}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-primary uppercase tracking-wider mb-1">Tools Used</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {tool.toolsUsed}
                        </p>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </div>
        </section>

        {/* CERTIFICATIONS */}
        <section className="py-16">
          <div className="container max-w-5xl mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-6">
                Credentials
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-secondary tracking-tight">
                Certifications
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <Dialog>
                <DialogTrigger asChild>
                  <div className="bg-white border border-gray-100 rounded-2xl p-6 soft-shadow hover:border-primary/30 transition-colors relative overflow-hidden cursor-pointer group">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-xl group-hover:bg-primary/10 transition-colors"></div>
                    <div className="text-3xl mb-4">🎓</div>
                    <h3 className="font-bold text-secondary mb-1 group-hover:text-primary transition-colors">MSc Digital Marketing</h3>
                    <p className="text-xs text-muted-foreground mb-4">University of Northampton · 2024–2025</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs font-bold text-green-600 bg-green-50 w-fit px-2 py-1 rounded">
                        <CheckCircle2 className="w-3 h-3" /> Awarded
                      </div>
                      <span className="text-xs text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">View Certificate</span>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-3xl bg-transparent border-none shadow-none p-0">
                  <div className="bg-white rounded-3xl overflow-hidden shadow-2xl p-2">
                    <img loading="lazy" 
                      src="https://d2xsxph8kpxj0f.cloudfront.net/310419663031747991/Y3kw537GjyvvS43ZN9JMcY/iScreenShoter-Preview-260320174548_40364a81.png" 
                      alt="MSc Digital Marketing Certificate" 
                      className="w-full h-auto rounded-2xl"
                    />
                  </div>
                </DialogContent>
              </Dialog>
              
              <Dialog>
                <DialogTrigger asChild>
                  <div className="bg-white border border-gray-100 rounded-2xl p-6 soft-shadow hover:border-primary/30 transition-colors relative overflow-hidden cursor-pointer group">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-xl group-hover:bg-primary/10 transition-colors"></div>
                    <div className="text-3xl mb-4">📜</div>
                    <h3 className="font-bold text-secondary mb-1 group-hover:text-primary transition-colors">Digital Marketing Institute Pro</h3>
                    <p className="text-xs text-muted-foreground mb-4">DMI · 2025</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs font-bold text-green-600 bg-green-50 w-fit px-2 py-1 rounded">
                        <CheckCircle2 className="w-3 h-3" /> Certified
                      </div>
                      <span className="text-xs text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">View Certificate</span>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-3xl bg-transparent border-none shadow-none p-0">
                  <div className="bg-white rounded-3xl overflow-hidden shadow-2xl p-2">
                    <img loading="lazy" 
                      src="https://d2xsxph8kpxj0f.cloudfront.net/310419663031747991/Y3kw537GjyvvS43ZN9JMcY/iScreenShoter-Preview-260320174258_05b80cba.webp" 
                      alt="Digital Marketing Institute Pro Certificate" 
                      className="w-full h-auto rounded-2xl"
                    />
                  </div>
                </DialogContent>
              </Dialog>

              <div className="bg-white border border-gray-100 rounded-2xl p-6 soft-shadow hover:border-primary/30 transition-colors relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-xl"></div>
                <div className="text-3xl mb-4">🔍</div>
                <h3 className="font-bold text-secondary mb-1">Google Ads Essential</h3>
                <p className="text-xs text-muted-foreground mb-4">Google · Skillshop</p>
                <div className="flex items-center gap-2 text-xs font-bold text-orange-500 bg-orange-50 w-fit px-2 py-1 rounded">
                  <Clock className="w-3 h-3" /> In Progress — Mar 2026
                </div>
              </div>

              <div className="bg-white border border-gray-100 rounded-2xl p-6 soft-shadow hover:border-primary/30 transition-colors relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-xl"></div>
                <div className="text-3xl mb-4">📘</div>
                <h3 className="font-bold text-secondary mb-1">Meta Blueprint Associate</h3>
                <p className="text-xs text-muted-foreground mb-4">Meta · 2026</p>
                <div className="flex items-center gap-2 text-xs font-bold text-orange-500 bg-orange-50 w-fit px-2 py-1 rounded">
                  <Clock className="w-3 h-3" /> In Progress — Apr 2026
                </div>
              </div>
            </div>

            {/* Award Callout */}
            <div className="bg-gradient-to-r from-secondary to-blue-900 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 text-white shadow-xl">
              <div className="text-6xl bg-white/10 p-4 rounded-full backdrop-blur-sm">🏆</div>
              <div className="text-center md:text-left">
                <div className="text-xs font-bold text-primary uppercase tracking-widest mb-2">Award</div>
                <h3 className="text-2xl font-bold mb-3">3rd Place — Business Plan Competition</h3>
                <p className="text-blue-100 leading-relaxed max-w-3xl">
                  Developed a £1,500 marketing-focused business plan and pitch using Canva and HeyGen (for AI video creation). Competed against fellow MSc students at the University of Northampton.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary/5 border-t border-primary/10 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="container relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="flex-1 text-center md:text-left">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-primary/20 text-sm font-medium text-primary mb-8 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-primary mr-2 animate-pulse"></span>
                  Open to opportunities · Portsmouth & Remote
                </div>
                <h2 className="text-4xl md:text-6xl font-extrabold text-secondary tracking-tight mb-6">
                  Let's Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-500 italic font-serif">Together</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl md:mx-0 mx-auto mb-10">
                  I'm actively looking for my next role in digital marketing, content creation, or social media. Happy to relocate from Portsmouth for the right opportunity.
                </p>
                <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                  <Link href="/contact">
                    <Button size="lg" className="rounded-full px-8 h-14 text-lg shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300 bg-primary text-primary-foreground hover:bg-primary/90">
                      Get in Touch <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                  <a href="mailto:mori.sobhani@outlook.com">
                    <Button variant="outline" size="lg" className="rounded-full px-8 h-14 text-lg bg-white hover:bg-gray-50 text-secondary border-gray-200">
                      mori.sobhani@outlook.com
                    </Button>
                  </a>
                </div>
              </div>
              <div className="flex-1 flex justify-center md:justify-end">
                <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px]">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-full blur-2xl"></div>
                  <img loading="lazy" 
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310419663031747991/Y3kw537GjyvvS43ZN9JMcY/Mori_16d0d9e7.png" 
                    alt="Mori Sobhani" 
                    className="relative z-10 w-full h-full object-contain drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
