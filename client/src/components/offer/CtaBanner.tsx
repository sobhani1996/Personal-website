import { Button } from "@/components/ui/button";
import { OFFER_ONE_LINER } from "@/content/offer";
import { ArrowRight, CalendarCheck } from "lucide-react";
import { Link } from "wouter";

type Props = {
  title?: string;
  text?: string;
};

export default function CtaBanner({
  title = "Ready to get more customers from Google and Meta?",
  text = OFFER_ONE_LINER,
}: Props) {
  return (
    <section className="py-16 md:py-20">
      <div className="container max-w-5xl">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-secondary px-8 py-14 text-center text-white md:px-16">
          <div
            className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/25 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl"
            aria-hidden="true"
          />
          <div className="relative z-10 mx-auto max-w-2xl space-y-6">
            <h2 className="text-3xl font-extrabold leading-tight md:text-4xl">
              {title}
            </h2>
            <p className="text-lg leading-relaxed text-blue-100">{text}</p>
            <div className="flex flex-col justify-center gap-4 pt-2 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="h-14 w-full rounded-full bg-primary px-8 text-lg font-bold text-primary-foreground hover:bg-primary/90 sm:w-auto"
              >
                <Link href="/contact/">
                  Book a free strategy call{" "}
                  <CalendarCheck className="ml-2 h-5 w-5" aria-hidden="true" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-14 w-full rounded-full border-white/40 bg-transparent px-8 text-lg text-white hover:bg-white/10 hover:text-white sm:w-auto"
              >
                <Link href="/pricing/">
                  How pricing works{" "}
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
