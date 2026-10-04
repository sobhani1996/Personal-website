import { COMMISSION_RANGE } from "@/content/offer";
import { BadgePercent, LineChart, PhoneCall, Settings2 } from "lucide-react";
import SectionHeading from "./SectionHeading";

const steps = [
  {
    icon: PhoneCall,
    title: "Free strategy call",
    text: "30 minutes on your business, margins and goals. I'll tell you honestly whether Google Ads or Meta Ads can be profitable for you.",
  },
  {
    icon: Settings2,
    title: "Free setup and launch",
    text: "I set up conversion tracking, research keywords or audiences, write the ads and build the campaigns. You pay nothing for this.",
  },
  {
    icon: LineChart,
    title: "Ongoing optimisation",
    text: "I manage bids, budgets, targeting and creatives every week, and report your conversions and conversion value each month.",
  },
  {
    icon: BadgePercent,
    title: "You pay on results",
    text: `My fee is ${COMMISSION_RANGE} of the conversion value the campaigns generate, at the rate we agreed before launch.`,
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 md:py-24" aria-labelledby="how-it-works-heading">
      <div className="container max-w-6xl">
        <SectionHeading
          eyebrow="The process"
          title={<span id="how-it-works-heading">How it works</span>}
          intro="Four simple steps from first call to profitable campaigns."
        />
        <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ icon: Icon, title, text }, i) => (
            <li
              key={title}
              className="relative rounded-3xl border border-gray-100 bg-white p-7 shadow-sm"
            >
              <span
                className="absolute right-6 top-5 text-5xl font-extrabold text-secondary/10"
                aria-hidden="true"
              >
                {i + 1}
              </span>
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/20 text-secondary">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-secondary">{title}</h3>
              <p className="text-muted-foreground leading-relaxed">{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
