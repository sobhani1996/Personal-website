import {
  ArrowRight,
  CalendarCheck,
  Check,
  CheckCircle2,
  X,
} from "lucide-react";
import { Link } from "wouter";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import CtaBanner from "@/components/offer/CtaBanner";
import HowItWorks from "@/components/offer/HowItWorks";
import PricingModel from "@/components/offer/PricingModel";
import SectionHeading from "@/components/offer/SectionHeading";
import ServicesOverview from "@/components/offer/ServicesOverview";
import WhoItsFor from "@/components/offer/WhoItsFor";
import { COMMISSION_RANGE } from "@/content/offer";

const problems = [
  "Agencies charge a monthly retainer whether your ads work or not.",
  "Boosted posts and DIY campaigns burn budget without bringing customers.",
  "You can't tell which ads actually lead to sales or enquiries.",
];

const included = [
  "Conversion tracking (Google Ads, GA4, Meta Pixel and Conversions API)",
  "Keyword, audience and competitor research",
  "Campaign structure, budgets and bidding strategy",
  "Ad copy, plus images and short videos for Meta",
  "Landing page recommendations to lift conversion rate",
  "Launch, quality checks and first-week monitoring",
];

const reasons = [
  {
    title: "Proven in e-commerce",
    text: "Google Ads, SEO and Instagram work that grew an online fashion shop's conversions by 500% and traffic by 300%.",
  },
  {
    title: "Meta Ads that sell",
    text: "A seasonal Instagram campaign that lifted sales 15% year on year for the same shop.",
  },
  {
    title: "Qualified and certified",
    text: "MSc in Digital Marketing (University of Northampton) and Certified Digital Marketing Professional (DMI).",
  },
  {
    title: "Local and reachable",
    text: "Based in Portsmouth. You deal with me directly, not an account manager, and we can meet in person if you're local.",
  },
];

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-primary/30">
      <Navbar />
      <main className="flex-grow">
        {/* Hero */}
        <section className="relative pt-36 pb-20 overflow-hidden">
          <div
            className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-blue-200/20 -z-10"
            aria-hidden="true"
          />
          <div className="container max-w-6xl">
            <div className="max-w-3xl mx-auto text-center space-y-7">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/80 border border-secondary/10 text-sm font-bold text-secondary">
                Services
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold text-secondary tracking-tight leading-tight">
                Paid media services for small businesses
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Google Ads and Meta Ads management with free setup. After
                launch, I earn {COMMISSION_RANGE} of the conversion value the
                campaigns bring you, and nothing if they don't.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 h-14 rounded-full text-lg shadow-lg shadow-primary/20"
                >
                  <Link href="/contact/">
                    Book a free strategy call{" "}
                    <CalendarCheck
                      className="ml-2 h-5 w-5"
                      aria-hidden="true"
                    />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-14 rounded-full px-8 text-lg text-secondary bg-white/60"
                >
                  <Link href="/pricing/">
                    How pricing works{" "}
                    <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Problem */}
        <section className="py-20 bg-white">
          <div className="container max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-extrabold text-secondary leading-tight">
                  You're great at what you do. <br />
                  <span className="bg-primary/70 px-2 rounded-lg box-decoration-clone">
                    Advertising shouldn't be a gamble.
                  </span>
                </h2>
                <ul className="space-y-4">
                  {problems.map(p => (
                    <li
                      key={p}
                      className="flex items-start gap-3 text-lg text-muted-foreground"
                    >
                      <X
                        className="mt-1 h-5 w-5 shrink-0 text-red-500"
                        aria-hidden="true"
                      />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <p className="font-medium text-lg text-secondary border-l-4 border-primary pl-4 py-1">
                  My model fixes the incentive: I set everything up for free and
                  I'm paid a share of the value your ads create. If your
                  campaigns don't convert, I don't earn.
                </p>
              </div>
              <div className="relative">
                <div className="grid grid-cols-2 gap-4 relative z-10">
                  {[
                    [
                      "/images/services/barbershop.jpg",
                      "Local barbershop interior",
                    ],
                    [
                      "/images/services/bakery.jpg",
                      "Fresh pastries in a local bakery",
                    ],
                    [
                      "/images/services/restaurant.jpg",
                      "Busy local restaurant",
                    ],
                    [
                      "/images/services/flower-shop.jpg",
                      "Colourful flower shop display",
                    ],
                  ].map(([src, alt], i) => (
                    <div
                      key={src}
                      className={`aspect-square rounded-2xl overflow-hidden shadow-lg ${i === 1 ? "translate-y-8" : i === 2 ? "-translate-y-8" : ""}`}
                    >
                      <img
                        src={src}
                        alt={alt}
                        width="400"
                        height="400"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-primary/10 to-blue-200/20 rounded-full blur-3xl -z-10"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </section>

        <ServicesOverview
          eyebrow="Two specialist services"
          title="Google Ads and Meta Ads, managed end to end"
          intro="Pick one channel or combine both. Either way, setup is free and my fee comes only from results."
        />

        {/* Free setup contents */}
        <section className="py-20 md:py-24 bg-white">
          <div className="container max-w-5xl">
            <SectionHeading
              eyebrow="Included for free"
              title="What the free setup includes"
              intro="Everything needed to launch campaigns that can be measured properly from day one."
            />
            <ul className="grid gap-4 sm:grid-cols-2">
              {included.map(item => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-gray-100 bg-background/60 p-5 text-secondary"
                >
                  <Check
                    className="mt-0.5 h-5 w-5 shrink-0 text-green-600"
                    aria-hidden="true"
                  />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <PricingModel />
        <HowItWorks />

        {/* Why me */}
        <section className="py-20 md:py-24 bg-white">
          <div className="container max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
              <div className="space-y-6">
                <SectionHeading
                  align="left"
                  eyebrow="Why work with me"
                  title="A specialist who only wins when you do"
                  intro="I focus on Google Ads and Meta Ads for small businesses, and my pricing means every decision is about making your budget profitable."
                />
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full px-6 font-bold text-secondary"
                >
                  <Link href="/portfolio/">
                    Read the case studies{" "}
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
              </div>
              <ul className="grid gap-5 sm:grid-cols-2">
                {reasons.map(r => (
                  <li
                    key={r.title}
                    className="rounded-3xl bg-secondary p-7 text-white"
                  >
                    <CheckCircle2
                      className="mb-3 h-6 w-6 text-primary"
                      aria-hidden="true"
                    />
                    <h3 className="mb-2 text-lg font-bold">{r.title}</h3>
                    <p className="text-sm leading-relaxed text-blue-100">
                      {r.text}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <WhoItsFor />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}
