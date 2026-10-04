import { Button } from "@/components/ui/button";
import {
  COMMISSION_RANGE,
  EXAMPLE,
  OFFER_AD_SPEND_NOTE,
  formatGBP,
} from "@/content/offer";
import { ArrowRight, BadgePercent, CalendarX, Wrench } from "lucide-react";
import { Link } from "wouter";
import SectionHeading from "./SectionHeading";

type Props = {
  showPricingLink?: boolean;
  eyebrow?: string;
};

const cards = [
  {
    icon: Wrench,
    label: "Campaign setup",
    value: "£0",
    text: "Tracking, research, ad copy and campaign build, done for free.",
  },
  {
    icon: CalendarX,
    label: "Monthly retainer",
    value: "£0",
    text: "No fixed monthly management fee and no paying for hours.",
  },
  {
    icon: BadgePercent,
    label: "My fee",
    value: COMMISSION_RANGE,
    text: "Of the conversion value your ads generate, agreed before launch.",
  },
];

export default function PricingModel({
  showPricingLink = true,
  eyebrow = "How we work together",
}: Props) {
  const fee = (EXAMPLE.conversionValue * EXAMPLE.rate) / 100;

  return (
    <section
      className="py-20 md:py-24 bg-white"
      aria-labelledby="pricing-model-heading"
    >
      <div className="container max-w-6xl">
        <SectionHeading
          eyebrow={eyebrow}
          title={
            <span id="pricing-model-heading">
              No setup fee. No retainer.{" "}
              <span className="text-primary-foreground bg-primary px-2 rounded-lg box-decoration-clone">
                I get paid when your ads pay.
              </span>
            </span>
          }
          intro={`I set up your Google Ads or Meta Ads campaigns for free. After launch, my only fee is ${COMMISSION_RANGE} of each conversion's value, so I only earn when you do.`}
        />

        <div className="grid gap-6 md:grid-cols-3">
          {cards.map(({ icon: Icon, label, value, text }) => (
            <div
              key={label}
              className="rounded-3xl border border-gray-100 bg-background/60 p-8 text-center shadow-sm"
            >
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary text-white">
                <Icon className="h-7 w-7" aria-hidden="true" />
              </div>
              <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                {label}
              </p>
              <p className="my-2 text-5xl font-extrabold text-secondary">
                {value}
              </p>
              <p className="text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl bg-secondary p-8 text-white">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider text-primary">
              Example
            </p>
            <p className="text-lg leading-relaxed text-blue-50">
              Your ads bring in{" "}
              <strong className="text-white">
                {formatGBP(EXAMPLE.conversionValue)}
              </strong>{" "}
              of tracked sales in a month. At an agreed rate of{" "}
              <strong className="text-white">{EXAMPLE.rate}%</strong>, my fee is{" "}
              <strong className="text-primary">{formatGBP(fee)}</strong>. If the
              ads bring in nothing, my fee is £0.
            </p>
            <p className="mt-3 text-sm text-blue-200">
              Illustration only. Your rate is agreed before launch.
            </p>
          </div>
          <div className="rounded-3xl border border-primary/40 bg-primary/10 p-8">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider text-secondary">
              Good to know
            </p>
            <p className="text-lg leading-relaxed text-secondary">
              {OFFER_AD_SPEND_NOTE}
            </p>
            {showPricingLink && (
              <Button
                asChild
                variant="link"
                className="mt-2 h-auto p-0 text-base font-bold text-secondary underline-offset-4"
              >
                <Link href="/pricing/">
                  See exactly how pricing works{" "}
                  <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
