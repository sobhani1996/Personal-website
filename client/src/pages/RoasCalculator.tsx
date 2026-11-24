import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import AdsCalculator from "@/components/offer/AdsCalculator";
import Faq from "@/components/offer/Faq";
import SectionHeading from "@/components/offer/SectionHeading";
import { CALCULATOR_FAQ } from "@/content/offer";
import { Link } from "wouter";

const steps = [
  {
    title: "Your commission rate",
    text: "Set by your current monthly online revenue: 7% under £10,000, 5% from £10,000 to £30,000, and 3% above £30,000.",
  },
  {
    title: "Your customer value",
    text: "With “Profit from the first order”, it's your average order value. With “Grow market share”, it's your average order value × orders per customer in 12 months.",
  },
  {
    title: "Your break-even ROAS",
    text: "The return per £1 at which the ads exactly pay for themselves and my fee: 1 ÷ (margin − commission rate). For growth: 1 ÷ (margin × orders per customer − commission rate).",
  },
  {
    title: "Your profitability floor",
    text: "Your break-even ROAS plus a 10% safety margin. If the ads return less than this, you pay me no fee.",
  },
  {
    title: "Your monthly results",
    text: "Ad revenue is budget × ROAS. My fee is ad revenue × your rate, or £0 below the floor. New customers are ad revenue ÷ AOV, and first-order profit is ad revenue × margin − budget − fee.",
  },
];

export default function RoasCalculator() {
  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-primary/30">
      <Navbar />
      <main className="flex-grow">
        <section className="relative overflow-hidden pt-32 pb-10 md:pt-36">
          <div
            className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-transparent to-blue-200/20"
            aria-hidden="true"
          />
          <div className="container max-w-4xl text-center space-y-6">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/80 border border-secondary/10 text-sm font-bold text-secondary">
              Free tool for Shopify stores
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-secondary tracking-tight leading-tight">
              E-commerce ads profit calculator
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              See your commission rate, the minimum return your Google or Meta
              Ads need to be profitable, and what they could earn your Shopify
              store each month.
            </p>
          </div>
        </section>

        <section className="pb-20" aria-label="Calculator">
          <div className="container max-w-6xl">
            <AdsCalculator />
          </div>
        </section>

        <section className="bg-white py-20 md:py-24">
          <div className="container max-w-5xl">
            <SectionHeading
              eyebrow="Explained"
              title="How the calculator works"
              intro="Every number is worked out in the open, so you can check it against your own figures."
            />
            <ol className="space-y-4">
              {steps.map((s, i) => (
                <li
                  key={s.title}
                  className="flex gap-5 rounded-3xl border border-gray-100 bg-background/60 p-6"
                >
                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-extrabold text-primary-foreground"
                    aria-hidden="true"
                  >
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="mb-1 text-lg font-bold text-secondary">
                      {s.title}
                    </h3>
                    <p className="leading-relaxed text-muted-foreground">
                      {s.text}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="mt-6 rounded-2xl border-l-4 border-primary bg-primary/10 px-5 py-4 text-secondary">
              <strong>Why “Grow market share” works:</strong> my commission is
              paid on ad revenue, which is mostly first orders. Repeat orders
              come through email and organic, so they bring profit without extra
              commission.
            </p>
            <p className="mt-6 text-center text-muted-foreground">
              Read the full{" "}
              <Link
                href="/pricing/"
                className="font-semibold text-secondary underline"
              >
                pricing details
              </Link>
              , or see how I run{" "}
              <Link
                href="/google-ads-management/"
                className="font-semibold text-secondary underline"
              >
                Google Ads
              </Link>{" "}
              and{" "}
              <Link
                href="/meta-ads-management/"
                className="font-semibold text-secondary underline"
              >
                Meta Ads
              </Link>{" "}
              for Shopify stores.
            </p>
          </div>
        </section>

        <Faq items={CALCULATOR_FAQ} title="Calculator questions" />
      </main>
      <Footer />
    </div>
  );
}
