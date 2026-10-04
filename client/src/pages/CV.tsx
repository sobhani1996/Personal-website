import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Briefcase, Calendar } from "lucide-react";
import { Link } from "wouter";

export default function CV() {
  const experiences = [
    {
      role: "Paid Media Specialist",
      company: "Mud Pies (mudpies.co.uk)",
      location: "UK",
      period: "Feb 2026 - Present",
      description: "Running the paid channels for a UK online shop across Google Ads, Meta Ads and Microsoft Ads (Bing).",
      achievements: [
        "Doubled sales from paid channels.",
        "Plan, launch and optimise Google Ads campaigns for online sales.",
        "Manage Meta Ads (Facebook and Instagram) campaigns for new and returning customers.",
        "Run Microsoft Ads (Bing) search campaigns alongside Google Ads."
      ],
      tags: ["Google Ads", "Meta Ads", "Microsoft Ads", "E-commerce"]
    },
    {
      role: "Paid Media Specialist, Google Ads & Meta Ads (Self-Employed)",
      company: "Freelance",
      location: "Portsmouth & Remote",
      period: "Mar 2025 - Present",
      description: "Helping small businesses grow with Google Ads and Meta Ads, on a free-setup, pay-on-results model.",
      achievements: [
        "Running targeted paid advertising campaigns on social media platforms to drive conversions.",
        "Developing and executing digital marketing strategies for small to medium-sized businesses.",
        "Conducting SEO audits and implementing optimisations to improve organic search rankings.",
        "Managing social media accounts, creating engaging content, and fostering community growth.",
        "Consulting on content strategy and brand positioning to enhance market presence."
      ],
      tags: ["Paid Social", "Google Ads", "Meta Ads", "Digital Strategy"]
    },
    {
      role: "Digital Marketing Assistant",
      company: "TallTree Technologies",
      location: "Remote",
      period: "Jan 2024 - Mar 2025",
      description: "Led digital marketing initiatives focusing on paid social and content strategy.",
      achievements: [
        "Managed and deployed paid LinkedIn advertising campaigns, driving significant engagement.",
        "Developed comprehensive content calendars and coordinated with stakeholders for timely delivery.",
        "Audited and optimized content using data-led insights (CTR, engagement) to refine messaging.",
        "Executed on-page SEO strategies to improve discoverability and alignment with user intent.",
        "Produced data-driven performance reports via Google Analytics to guide future strategies."
      ],
      tags: ["Paid Social", "Digital Strategy", "Content Planning", "Analytics"]
    },
    {
      role: "Content Creator (Part-Time)",
      company: "University of Northampton Students’ Union",
      location: "Northampton",
      period: "Nov 2024 – May 2025",
      description: "Spearheaded social media content creation and community engagement strategies.",
      achievements: [
        "Created engaging social media posts to promote events and activities across Instagram and Facebook.",
        "Produced original photography and edited short-form videos to enhance visual storytelling.",
        "Collaborated with teams to ensure all content aligned with brand guidelines and campaign objectives."
      ],
      tags: ["Social Media Marketing", "Content Creation", "Visual Storytelling", "Brand Alignment"]
    },
    {
      role: "Digital Marketing Executive",
      company: "Aftabgardoon Shopp",
      location: "Remote",
      period: "2022 – 2024",
      description: "Executed comprehensive digital marketing strategies driving massive growth.",
      achievements: [
        "Increased website traffic by 300% and conversions by 500% through SEO, Google Ads, and social campaigns.",
        "Developed social media strategies that grew Instagram engagement by 200% and followers by 150%.",
        "Managed product listings and landing pages using keyword research and backlink strategies.",
        "Conducted competitor analysis and market research to identify growth opportunities.",
        "Utilized Google Search Console and Analytics to monitor KPIs and refine campaigns."
      ],
      tags: ["Digital Marketing Plan", "Social Media Growth", "SEO & SEM", "Campaign Management"]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-primary/30">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="container max-w-5xl">
          {/* Header */}
          <div className="mb-16 space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <h1 className="text-4xl md:text-6xl font-extrabold text-secondary tracking-tight">
              Curriculum <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-500">Vitae</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              My experience in paid media and digital marketing, from e-commerce Google Ads and Meta Ads campaigns to B2B LinkedIn advertising.
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                
                {/* Icon */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-gray-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  <Briefcase className="w-5 h-5 text-secondary" />
                </div>
                
                {/* Card */}
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 md:p-8 rounded-[2rem] soft-shadow border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-secondary">{exp.role}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <div className="flex items-center text-xs font-medium text-muted-foreground bg-gray-50 px-3 py-1 rounded-full">
                      <Calendar className="w-3 h-3 mr-1" />
                      {exp.period}
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 italic">
                    {exp.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {exp.achievements.map((item, i) => (
                      <li key={i} className="text-sm text-gray-600 flex items-start">
                        <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-50">
                    {exp.tags.map((tag, i) => (
                      <Badge key={i} variant="outline" className="text-xs font-normal text-gray-500 border-gray-200">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-24 mb-12 text-center">
            <div className="bg-secondary rounded-[2.5rem] p-12 relative overflow-hidden text-white">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
              
              <div className="relative z-10 max-w-2xl mx-auto space-y-6">
                <h2 className="text-3xl font-bold">Want this experience working on your ads?</h2>
                <p className="text-blue-100 text-lg">
                  I set up Google Ads and Meta Ads for small businesses for free, then earn a small share of the conversion value they bring in.
                </p>
                <Button asChild className="bg-primary text-secondary hover:bg-white hover:text-secondary rounded-full px-8 h-12 font-bold shadow-lg shadow-black/20 border-none">
                  <Link href="/contact/">Book a free strategy call <ArrowUpRight className="ml-2 w-4 h-4" aria-hidden="true" /></Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
