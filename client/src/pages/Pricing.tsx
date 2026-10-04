import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import CtaBanner from "@/components/offer/CtaBanner";
import Faq from "@/components/offer/Faq";
import HowItWorks from "@/components/offer/HowItWorks";
import PricingModel from "@/components/offer/PricingModel";
import SectionHeading from "@/components/offer/SectionHeading";
import {
  COMMISSION_MAX,
  COMMISSION_MIN,
  COMMISSION_RANGE,
  PRICING_FAQ,
} from "@/content/offer";
import { CalendarCheck, ShoppingBag, Wrench } from "lucide-react";
import { Link } from "wouter";

const comparison = [
  { label: "Setup fee", typical: "Often charged up front", mine: "£0" },
  {
    label: "Monthly fee",
    typical: "Fixed retainer, whether ads work or not",
    mine: "£0",
  },
  {
    label: "Fee is based on",
    typical: "Hours worked or a % of ad spend",
    mine: `${COMMISSION_RANGE} of conversion value`,
  },
  {
    label: "If the ads don't convert",
    typical: "You still pay the retainer",
    mine: "You pay me nothing",
  },
  {
    label: "What I'm rewarded for",
    typical: "Managing more budget",
    mine: "Bringing you profitable sales",
  },
];

const rateFactors = [
  {
    title: "Your average sale or customer value",
    text: "Higher-value sales usually mean a lower percentage.",
  },
  {
    title: "Your profit margins",
    text: "The rate has to leave you a healthy profit on every conversion.",
  },
  {
    title: "Campaign complexity",
    text: "Many products, locations or channels take more work to manage well.",
  },
];

export default function Pricing() {
  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-primary/30">
      <Navbar />
      <main className="flex-grow">
        {/* Hero */}
        <section className="relative overflow-hidden pt-36 pb-16">
          <div
            className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-transparent to-blue-200/20"
            aria-hidden="true"
          />
          <div className="container max-w-4xl text-center space-y-7">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/80 border border-secondary/10 text-sm font-bold text-secondary">
              Pricing
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-secondary tracking-tight leading-tight">
              Free setup. You pay only when the ads bring results.
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              I set up your Google Ads or Meta Ads campaigns at no cost. After
              launch, my only fee is {COMMISSION_MIN}% to {COMMISSION_MAX}% of
              the conversion value the campaigns generate. No setup fee, no
              retainer, no paying for hours.
            </p>
            <Button
              asChild
              size="lg"
              className="h-14 rounded-full bg-primary px-8 text-lg font-bold text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90"
            >
              <Link href="/contact/">
                Book a free strategy call{" "}
                <CalendarCheck className="ml-2 h-5 w-5" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </section>

        <PricingModel showPricingLink={false} eyebrow="The model" />

        {/* What is conversion value */}
        <section className="py-20 md:py-24">
          <div className="container max-w-6xl">
            <SectionHeading
              eyebrow="Explained"
              title="What counts as conversion value?"
              intro="A conversion is a sale, booking or enquiry that comes from your ads. Its value is recorded in Google Ads or Meta Ads Manager through the tracking I set up for free."
            />
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">
                <ShoppingBag
                  className="mb-4 h-8 w-8 text-secondary"
                  aria-hidden="true"
                />
                <h3 className="mb-2 text-xl font-bold text-secondary">
                  Online shops
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  The conversion value is the order value of each sale tracked
                  from your ads. A £120 order brings a fee of between £3.60 and
                  £8.40, depending on the agreed rate.
                </p>
              </div>
              <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">
                <Wrench
                  className="mb-4 h-8 w-8 text-secondary"
                  aria-hidden="true"
                />
                <h3 className="mb-2 text-xl font-bold text-secondary">
                  Service and local businesses
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  If your ads bring calls, enquiries or bookings, we agree a
                  fixed value per lead or booking before launch. For example, if
                  a booked appointment is worth £80 to you, each booking from
                  the ads counts as £80 of conversion value.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Rate factors */}
        <section className="bg-white py-20 md:py-24">
          <div className="container max-w-6xl">
            <SectionHeading
              eyebrow={`Your rate: ${COMMISSION_RANGE}`}
              title="What decides your exact percentage"
              intro="We agree the rate in writing before launch. These are the things that move it within the range."
            />
            <div className="grid gap-6 md:grid-cols-3">
              {rateFactors.map((f, i) => (
                <div
                  key={f.title}
                  className="rounded-3xl bg-background/60 border border-gray-100 p-8"
                >
                  <span
                    className="mb-3 block text-4xl font-extrabold text-secondary/20"
                    aria-hidden="true"
                  >
                    {i + 1}
                  </span>
                  <h3 className="mb-2 text-lg font-bold text-secondary">
                    {f.title}
                  </h3>
                  <p className="text-muted-foreground">{f.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className="py-20 md:py-24">
          <div className="container max-w-5xl">
            <SectionHeading
              eyebrow="Compare"
              title="Pay-on-results vs a typical retainer"
              intro="Many agencies charge a fixed monthly fee. Here is how my model is different."
            />
            <div className="overflow-x-auto rounded-3xl border border-gray-100 bg-white shadow-sm">
              <table className="w-full min-w-[560px] text-left">
                <caption className="sr-only">
                  Comparison of a typical agency retainer with Mori Sobhani's
                  pay-on-results pricing
                </caption>
                <thead>
                  <tr className="border-b border-gray-100 bg-background/60">
                    <th
                      scope="col"
                      className="p-5 text-sm font-bold uppercase tracking-wider text-muted-foreground"
                    >
                      <span className="sr-only">Item</span>
                    </th>
                    <th
                      scope="col"
                      className="p-5 text-sm font-bold uppercase tracking-wider text-muted-foreground"
                    >
                      Typical retainer
                    </th>
                    <th
                      scope="col"
                      className="p-5 text-sm font-bold uppercase tracking-wider text-secondary"
                    >
                      Working with me
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map(row => (
                    <tr
                      key={row.label}
                      className="border-b border-gray-100 last:border-0"
                    >
                      <th scope="row" className="p-5 font-bold text-secondary">
                        {row.label}
                      </th>
                      <td className="p-5 text-muted-foreground">
                        {row.typical}
                      </td>
                      <td className="p-5 font-bold text-secondary">
                        {row.mine}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <HowItWorks />
        <Faq items={PRICING_FAQ} title="Pricing questions" />
        <CtaBanner title="Find out what pay-on-results could look like for you" />
      </main>
      <Footer />
    </div>
  );
}
