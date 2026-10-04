import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { COMMISSION_RANGE, type FaqItem } from "@/content/offer";
import {
  ArrowRight,
  CalendarCheck,
  Check,
  type LucideIcon,
} from "lucide-react";
import { Link } from "wouter";
import CtaBanner from "./CtaBanner";
import Faq from "./Faq";
import HowItWorks from "./HowItWorks";
import PricingModel from "./PricingModel";
import SectionHeading from "./SectionHeading";

export type ChannelConfig = {
  eyebrow: string;
  h1: string;
  intro: string;
  logo: string;
  logoAlt: string;
  heroPoints: string[];
  why: {
    title: string;
    intro: string;
    cards: { icon: LucideIcon; title: string; text: string }[];
  };
  campaigns: {
    title: string;
    intro: string;
    items: { title: string; text: string }[];
  };
  included: { title: string; items: string[] };
  optimise: { title: string; items: string[] };
  proof: {
    eyebrow: string;
    title: string;
    text: string;
    stat: string;
    statLabel: string;
  };
  faqTitle: string;
  faq: FaqItem[];
  cta: { title: string };
  other: { href: string; label: string; text: string };
};

export default function ChannelPage({ c }: { c: ChannelConfig }) {
  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-primary/30">
      <Navbar />
      <main className="flex-grow">
        {/* Hero */}
        <section className="relative overflow-hidden pt-36 pb-20">
          <div
            className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-transparent to-blue-200/20"
            aria-hidden="true"
          />
          <div className="container max-w-6xl">
            <div className="grid items-center gap-12 lg:grid-cols-[1.4fr_1fr]">
              <div className="space-y-7 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 rounded-full border border-secondary/10 bg-white/80 px-4 py-1.5 text-sm font-bold text-secondary">
                  <img
                    src={c.logo}
                    alt=""
                    width="20"
                    height="20"
                    className="h-5 w-5 object-contain"
                  />
                  {c.eyebrow}
                </div>
                <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-secondary md:text-6xl">
                  {c.h1}
                </h1>
                <p className="text-xl leading-relaxed text-muted-foreground">
                  {c.intro}
                </p>
                <div className="flex flex-col justify-center gap-4 pt-2 sm:flex-row lg:justify-start">
                  <Button
                    asChild
                    size="lg"
                    className="h-14 w-full rounded-full bg-primary px-8 text-lg font-bold text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90 sm:w-auto"
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
                    className="h-14 w-full rounded-full bg-white/60 px-8 text-lg text-secondary sm:w-auto"
                  >
                    <Link href="/pricing/">
                      How pricing works{" "}
                      <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="rounded-[2rem] border border-gray-100 bg-white p-8 shadow-xl">
                <p className="mb-1 text-sm font-bold uppercase tracking-wider text-muted-foreground">
                  The deal
                </p>
                <p className="mb-6 text-3xl font-extrabold text-secondary">
                  £0 setup · {COMMISSION_RANGE} of conversion value
                </p>
                <ul className="space-y-3">
                  {c.heroPoints.map(p => (
                    <li
                      key={p}
                      className="flex items-start gap-3 text-secondary"
                    >
                      <Check
                        className="mt-0.5 h-5 w-5 shrink-0 text-green-600"
                        aria-hidden="true"
                      />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why this channel */}
        <section className="bg-white py-20 md:py-24">
          <div className="container max-w-6xl">
            <SectionHeading
              eyebrow="Why it works"
              title={c.why.title}
              intro={c.why.intro}
            />
            <div className="grid gap-6 md:grid-cols-3">
              {c.why.cards.map(({ icon: Icon, title, text }) => (
                <div
                  key={title}
                  className="rounded-3xl border border-gray-100 bg-background/60 p-8"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-white">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-secondary">
                    {title}
                  </h3>
                  <p className="leading-relaxed text-muted-foreground">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Campaign types */}
        <section className="py-20 md:py-24">
          <div className="container max-w-6xl">
            <SectionHeading
              eyebrow="Campaigns"
              title={c.campaigns.title}
              intro={c.campaigns.intro}
            />
            <div className="grid gap-6 md:grid-cols-2">
              {c.campaigns.items.map(item => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm"
                >
                  <h3 className="mb-2 text-xl font-bold text-secondary">
                    {item.title}
                  </h3>
                  <p className="leading-relaxed text-muted-foreground">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Included + optimisation */}
        <section className="bg-white py-20 md:py-24">
          <div className="container max-w-6xl">
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="rounded-[2rem] border border-primary/40 bg-primary/10 p-8 md:p-10">
                <h2 className="mb-6 text-2xl font-extrabold text-secondary md:text-3xl">
                  {c.included.title}
                </h2>
                <ul className="space-y-3">
                  {c.included.items.map(item => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-secondary"
                    >
                      <Check
                        className="mt-0.5 h-5 w-5 shrink-0 text-green-700"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-[2rem] bg-secondary p-8 text-white md:p-10">
                <h2 className="mb-6 text-2xl font-extrabold md:text-3xl">
                  {c.optimise.title}
                </h2>
                <ul className="space-y-3">
                  {c.optimise.items.map(item => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-blue-50"
                    >
                      <Check
                        className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Proof */}
        <section className="py-20 md:py-24">
          <div className="container max-w-5xl">
            <div className="grid items-center gap-10 rounded-[2rem] border border-gray-100 bg-white p-8 shadow-sm md:grid-cols-[auto_1fr] md:p-12">
              <div className="text-center">
                <p className="text-6xl font-extrabold text-secondary">
                  {c.proof.stat}
                </p>
                <p className="mt-2 text-sm font-medium text-muted-foreground">
                  {c.proof.statLabel}
                </p>
              </div>
              <div className="space-y-4">
                <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                  {c.proof.eyebrow}
                </p>
                <h2 className="text-2xl font-extrabold text-secondary md:text-3xl">
                  {c.proof.title}
                </h2>
                <p className="leading-relaxed text-muted-foreground">
                  {c.proof.text}
                </p>
                <Link
                  href="/portfolio/"
                  className="inline-flex items-center font-bold text-secondary underline-offset-4 hover:underline"
                >
                  Read the full case study{" "}
                  <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <PricingModel />
        <HowItWorks />
        <Faq items={c.faq} title={c.faqTitle} />

        {/* Cross-link */}
        <section className="pb-4">
          <div className="container max-w-4xl">
            <Link
              href={c.other.href}
              className="group block rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                Also available
              </p>
              <p className="mt-1 flex items-center text-2xl font-extrabold text-secondary">
                {c.other.label}
                <ArrowRight
                  className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </p>
              <p className="mt-2 text-muted-foreground">{c.other.text}</p>
            </Link>
          </div>
        </section>

        <CtaBanner title={c.cta.title} />
      </main>
      <Footer />
    </div>
  );
}
