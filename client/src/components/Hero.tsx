import { Button } from "@/components/ui/button";
import { COMMISSION_RANGE } from "@/content/offer";
import { ArrowRight, CalendarCheck, Check } from "lucide-react";
import { Link } from "wouter";

const trustPoints = [
  "Free campaign setup",
  "No monthly retainer",
  "MSc Digital Marketing",
];

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden pt-28 pb-16">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <div
          className="absolute top-[-10%] right-[-5%] w-[50vw] h-[50vw] bg-primary/20 rounded-full blur-[120px] opacity-60 animate-pulse"
          style={{ animationDuration: "8s" }}
        />
        <div className="absolute bottom-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-blue-200/30 rounded-full blur-[100px] opacity-50" />
        <img
          src="/images/soft-gradient-bg.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay"
        />
      </div>

      <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-7 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-secondary/10 bg-white/70 px-4 py-2 text-sm font-bold text-secondary shadow-sm backdrop-blur-sm">
            <span
              className="h-2 w-2 rounded-full bg-green-500"
              aria-hidden="true"
            />
            Paid media specialist · Portsmouth, UK
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-[4rem] font-extrabold tracking-tight text-secondary leading-[1.1]">
            Google Ads & Meta Ads specialist for{" "}
            <span className="relative whitespace-nowrap">
              <span className="relative z-10">small businesses</span>
              <span
                className="absolute inset-x-0 bottom-1 h-4 bg-primary/70 -z-0 rounded"
                aria-hidden="true"
              />
            </span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Hi, I'm Mori Sobhani. I set up your Google Ads or Meta Ads campaigns{" "}
            <strong className="text-secondary">for free</strong>, then earn{" "}
            <strong className="text-secondary">
              {COMMISSION_RANGE} of the conversion value
            </strong>{" "}
            they bring you. No setup fee, no retainer: I only get paid when your
            ads pay.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto rounded-full px-8 h-14 text-lg font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300 bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Link href="/contact/">
                Book a free strategy call{" "}
                <CalendarCheck className="ml-2 w-5 h-5" aria-hidden="true" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto rounded-full px-8 h-14 text-lg bg-white/50 backdrop-blur-sm border-white/60 hover:bg-white/80 text-secondary"
            >
              <Link href="/pricing/">
                How pricing works{" "}
                <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
              </Link>
            </Button>
          </div>

          <ul className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-2 pt-2 text-sm font-semibold text-secondary">
            {trustPoints.map(point => (
              <li key={point} className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-600" aria-hidden="true" />
                {point}
              </li>
            ))}
          </ul>
        </div>

        {/* Hero Image */}
        <div className="relative flex justify-center pt-4 lg:pt-0">
          <div className="relative w-[240px] h-[240px] sm:w-[360px] sm:h-[360px] lg:w-[480px] lg:h-[480px]">
            {/* Decorative circles */}
            <div
              className="absolute inset-0 rounded-full border-2 border-white/40 scale-110 animate-[spin_20s_linear_infinite]"
              aria-hidden="true"
            />
            <div
              className="absolute inset-0 rounded-full border border-primary/30 scale-125 animate-[spin_30s_linear_infinite_reverse]"
              aria-hidden="true"
            />

            {/* Main Image Mask */}
            <div className="w-full h-full rounded-full overflow-hidden border-8 border-white shadow-2xl relative z-10 group">
              <picture>
                <source srcSet="/images/mori-logo.webp" type="image/webp" />
                <img
                  src="/images/mori-logo.jpg"
                  alt="Mori Sobhani, Google Ads and Meta Ads specialist based in Portsmouth"
                  width="500"
                  height="500"
                  fetchPriority="high"
                  className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
              </picture>
            </div>

            {/* Floating Badge */}
            <div className="absolute bottom-0 right-4 sm:right-10 z-20 bg-white p-4 rounded-2xl shadow-xl">
              <p className="text-xs text-muted-foreground font-bold uppercase tracking-wider">
                Free setup
              </p>
              <p className="text-sm font-extrabold text-secondary">
                Paid only on results
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
