import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import CtaBanner from "@/components/offer/CtaBanner";
import Faq from "@/components/offer/Faq";
import SectionHeading from "@/components/offer/SectionHeading";
import {
  CONSULTANCY,
  CONSULTANCY_EFFECTIVE_RATE,
  CONSULTANCY_FAQ,
  CONSULTANCY_SAVING,
  formatGBP,
} from "@/content/offer";
import {
  Activity,
  ArrowDown,
  CalendarCheck,
  CalendarDays,
  Check,
  LayoutDashboard,
  Mail,
  MonitorSmartphone,
  Route,
  Share2,
  Tags,
  Telescope,
} from "lucide-react";
import { Link } from "wouter";

const audience = [
  "Run ads, or plan to, but have no one in-house handling e-commerce marketing",
  "Rely on the owner to do marketing alongside running the store",
  "Have a Shopify store and social accounts, but no clear plan connecting them",
  "Want expert e-commerce support without the cost of a full-time hire",
];

const covered = [
  {
    icon: Route,
    title: "Customer journey analysis",
    text: "How shoppers find your store, what stops them buying, and a clear plan to fix it.",
  },
  {
    icon: MonitorSmartphone,
    title: "Shopify store and product pages",
    text: "Reviewing your product, collection and checkout pages, and recommending changes that turn more visitors into customers.",
  },
  {
    icon: Mail,
    title: "Email marketing strategy",
    text: "Welcome emails, abandoned basket reminders, repeat-purchase emails and a campaign calendar, in Shopify Email or Klaviyo.",
  },
  {
    icon: CalendarDays,
    title: "Seasonal campaigns",
    text: "Planning around Black Friday, Christmas and your other key dates across ads, email and social.",
  },
  {
    icon: Tags,
    title: "Offers and promotions",
    text: "Shopify discounts, bundles and free-delivery thresholds that drive sales without hurting your margins.",
  },
  {
    icon: Share2,
    title: "Organic social direction",
    text: "Making sure your posts and your ads tell the same story.",
  },
  {
    icon: Activity,
    title: "Tracking and reporting",
    text: "Making sure your Shopify sales are measured correctly in Google Analytics, Google Ads and Meta.",
  },
  {
    icon: LayoutDashboard,
    title: "Management dashboard",
    text: "Your ads, Shopify sales, website and email data in one place, so you can see the whole picture at a glance.",
  },
  {
    icon: Telescope,
    title: "Competitor research",
    text: "What other online stores in your market are doing, and where you can stand out.",
  },
];

const plans = [
  {
    name: "Weekly package",
    price: `${formatGBP(CONSULTANCY.weeklyPrice)} per week`,
    rows: [
      ["Time", `${CONSULTANCY.weeklyHours} hours every week`],
      ["Effective rate", `${formatGBP(CONSULTANCY_EFFECTIVE_RATE)} per hour`],
      ["Best for", "Shopify stores with no in-house marketing"],
    ],
    badge: `Save ${CONSULTANCY_SAVING}%`,
  },
  {
    name: "Hourly",
    price: `${formatGBP(CONSULTANCY.hourlyRate)} per hour`,
    rows: [
      ["Time", "As and when you need it"],
      ["Effective rate", `${formatGBP(CONSULTANCY.hourlyRate)} per hour`],
      ["Best for", "One-off projects or occasional advice"],
    ],
  },
];

const steps = [
  {
    title: "Free strategy call",
    text: "We talk about your Shopify store, your goals and where you are now.",
  },
  {
    title: "Plan",
    text: "I set out what we'll focus on first, based on what will make the biggest difference.",
  },
  {
    title: "Weekly work",
    text: "I work through the plan across your store, email and campaigns, and keep you updated on progress.",
  },
  {
    title: "Monthly review",
    text: "We look at the results together and set the next priorities.",
  },
];

export default function Consultancy() {
  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-primary/30">
      <Navbar />
      <main className="flex-grow">
        {/* Hero */}
        <section className="relative overflow-hidden pt-32 pb-20 md:pt-36">
          <div
            className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-transparent to-blue-200/20"
            aria-hidden="true"
          />
          <div className="container max-w-6xl">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div className="space-y-7 text-center lg:text-left">
                <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/80 border border-secondary/10 text-sm font-bold text-secondary">
                  E-commerce marketing consultancy for Shopify
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold text-secondary tracking-tight leading-tight">
                  E-commerce marketing support for Shopify stores, without
                  hiring a marketer
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Ads bring shoppers to your Shopify store. Everything else
                  decides whether they buy. I help you build the parts of{" "}
                  <span className="whitespace-nowrap">e-commerce</span>{" "}
                  marketing that make your ads, and your whole store, work
                  harder.
                </p>
                <p className="text-2xl font-extrabold text-secondary">
                  {CONSULTANCY.weeklyHours} hours a week for{" "}
                  {formatGBP(CONSULTANCY.weeklyPrice)}, or{" "}
                  {formatGBP(CONSULTANCY.hourlyRate)} per hour.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="h-14 rounded-full bg-primary px-8 text-lg font-bold text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90"
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
                    className="h-14 rounded-full bg-white/60 px-8 text-lg text-secondary"
                  >
                    <a href="#consultancy-pricing">
                      See pricing{" "}
                      <ArrowDown className="ml-2 h-5 w-5" aria-hidden="true" />
                    </a>
                  </Button>
                </div>
              </div>

              <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
                <picture>
                  <source
                    type="image/webp"
                    srcSet="/images/consultancy-hero-800.webp 800w, /images/consultancy-hero.webp 1200w"
                    sizes="(min-width: 1024px) 560px, 100vw"
                  />
                  <img
                    src="/images/consultancy-hero.jpg"
                    alt="Mori Sobhani at his desk, working on e-commerce marketing"
                    width="1200"
                    height="800"
                    fetchPriority="high"
                    className="aspect-[3/2] w-full rounded-[2rem] border-4 border-white object-cover shadow-2xl"
                  />
                </picture>
                <div className="absolute -bottom-5 left-4 rounded-2xl bg-white px-5 py-3 text-left shadow-xl md:-left-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Weekly package
                  </p>
                  <p className="font-bold text-secondary">
                    {CONSULTANCY.weeklyHours} hours for{" "}
                    {formatGBP(CONSULTANCY.weeklyPrice)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who it's for + why */}
        <section className="bg-white py-20 md:py-24">
          <div className="container max-w-6xl">
            <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
              <div>
                <SectionHeading
                  align="left"
                  eyebrow="Who it's for"
                  title="Built for Shopify stores without a marketer"
                  intro="This package is for Shopify stores that:"
                />
                <ul className="space-y-4">
                  {audience.map(item => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-lg text-secondary"
                    >
                      <Check
                        className="mt-1 h-5 w-5 shrink-0 text-green-600"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-[2rem] bg-secondary p-8 text-white md:p-10">
                <p className="mb-3 text-sm font-bold uppercase tracking-wider text-primary">
                  Why I strongly recommend it
                </p>
                <h2 className="mb-5 text-2xl font-extrabold leading-tight md:text-3xl">
                  Ads can't fix what happens after the click.
                </h2>
                <div className="space-y-4 leading-relaxed text-blue-100">
                  <p>
                    If your product pages don't build trust, if there's no email
                    follow-up, or if no one is tracking what works, part of
                    every pound you spend on ads is wasted.
                  </p>
                  <p>
                    Most Shopify stores I speak to don't have anyone responsible
                    for e-commerce marketing. The owner does it when there's
                    time, and there rarely is. That's when results stall.
                  </p>
                  <p className="font-semibold text-white">
                    My ads fee is commission-only, so I only earn when your ads
                    bring results. I recommend consultancy because I want every
                    part of your marketing pulling in the same direction. It's
                    in both our interests.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What's covered */}
        <section className="py-20 md:py-24">
          <div className="container max-w-6xl">
            <SectionHeading
              eyebrow="What's covered"
              title="Everything around your ads that decides whether shoppers buy"
              intro="E-commerce marketing for your Shopify store, beyond the ads."
            />
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {covered.map(({ icon: Icon, title, text }) => (
                <li
                  key={title}
                  className="rounded-3xl border border-gray-100 bg-white p-7 shadow-sm"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/20 text-secondary">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-secondary">
                    {title}
                  </h3>
                  <p className="leading-relaxed text-muted-foreground">
                    {text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Pricing */}
        <section
          id="consultancy-pricing"
          className="scroll-mt-24 bg-white py-20 md:py-24"
        >
          <div className="container max-w-5xl">
            <SectionHeading
              eyebrow="Pricing"
              title="Weekly or hourly, your choice"
              intro="E-commerce consultancy for Shopify stores, charged separately from ads management, which stays commission-only."
            />
            <div className="grid gap-6 md:grid-cols-2">
              {plans.map(plan => (
                <div
                  key={plan.name}
                  className={`relative rounded-3xl p-8 ${plan.badge ? "border-2 border-primary bg-primary/10 shadow-lg" : "border border-gray-100 bg-background/60"}`}
                >
                  {plan.badge && (
                    <span className="absolute right-6 top-6 rounded-full bg-primary px-3 py-1 text-sm font-bold text-primary-foreground">
                      {plan.badge}
                    </span>
                  )}
                  <h3 className="text-lg font-bold uppercase tracking-wider text-muted-foreground">
                    {plan.name}
                  </h3>
                  <p className="my-3 text-4xl font-extrabold text-secondary">
                    {plan.price}
                  </p>
                  <dl className="mt-6 space-y-4 border-t border-secondary/10 pt-6">
                    {plan.rows.map(([label, value]) => (
                      <div key={label} className="flex justify-between gap-4">
                        <dt className="text-muted-foreground">{label}</dt>
                        <dd className="text-right font-bold text-secondary">
                          {value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              ))}
            </div>
            <p className="mx-auto mt-8 max-w-3xl text-center text-lg leading-relaxed text-secondary">
              The weekly package saves you{" "}
              <strong>{CONSULTANCY_SAVING}%</strong> compared with the hourly
              rate, and gives your marketing steady, consistent attention every
              week.
            </p>
          </div>
        </section>

        {/* How it works */}
        <section className="py-20 md:py-24">
          <div className="container max-w-6xl">
            <SectionHeading eyebrow="The process" title="How it works" />
            <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {steps.map((s, i) => (
                <li
                  key={s.title}
                  className="relative rounded-3xl border border-gray-100 bg-white p-7 shadow-sm"
                >
                  <span
                    className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-lg font-extrabold text-primary-foreground"
                    aria-hidden="true"
                  >
                    {i + 1}
                  </span>
                  <h3 className="mb-2 text-xl font-bold text-secondary">
                    {s.title}
                  </h3>
                  <p className="leading-relaxed text-muted-foreground">
                    {s.text}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <Faq items={CONSULTANCY_FAQ} title="E-commerce consultancy questions" />
        <CtaBanner
          title="Want expert e-commerce support for your Shopify store?"
          text={`${CONSULTANCY.weeklyHours} hours a week for ${formatGBP(CONSULTANCY.weeklyPrice)}, or ${formatGBP(CONSULTANCY.hourlyRate)} per hour. Book a free strategy call and we'll work out what your store needs first.`}
        />
      </main>
      <Footer />
    </div>
  );
}
