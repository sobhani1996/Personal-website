import { Button } from "@/components/ui/button";
import { CONSULTANCY, formatGBP } from "@/content/offer";
import { ArrowRight, Check } from "lucide-react";
import { Link } from "wouter";
import SectionHeading from "./SectionHeading";

type Props = {
  className?: string;
};

/** Short pitch for the optional consultancy, linking to its own page. */
export default function ConsultancyTeaser({ className = "" }: Props) {
  return (
    <section
      className={`py-20 md:py-24 ${className}`}
      aria-labelledby="consultancy-teaser-heading"
    >
      <div className="container max-w-5xl">
        <div className="rounded-[2rem] border border-primary/40 bg-primary/10 p-8 md:p-12">
          <SectionHeading
            align="left"
            eyebrow="Optional"
            title={
              <span id="consultancy-teaser-heading">
                Digital marketing consultancy
              </span>
            }
            intro="Ads management stays commission-only. If your business has no one handling digital marketing, I strongly recommend adding consultancy, so your website, email and campaigns support your ads."
          />
          <ul className="mb-8 grid gap-4 sm:grid-cols-2">
            <li className="flex items-start gap-3 rounded-2xl bg-white p-5 text-secondary shadow-sm">
              <Check
                className="mt-0.5 h-5 w-5 shrink-0 text-green-600"
                aria-hidden="true"
              />
              <span>
                <strong>Weekly package:</strong> {CONSULTANCY.weeklyHours} hours
                a week for {formatGBP(CONSULTANCY.weeklyPrice)}
              </span>
            </li>
            <li className="flex items-start gap-3 rounded-2xl bg-white p-5 text-secondary shadow-sm">
              <Check
                className="mt-0.5 h-5 w-5 shrink-0 text-green-600"
                aria-hidden="true"
              />
              <span>
                <strong>Hourly:</strong> {formatGBP(CONSULTANCY.hourlyRate)} per
                hour
              </span>
            </li>
          </ul>
          <Button
            asChild
            className="h-12 rounded-full bg-secondary px-7 font-bold text-white hover:bg-secondary/90"
          >
            <Link href={CONSULTANCY.href}>
              See what's included{" "}
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
