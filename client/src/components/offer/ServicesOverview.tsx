import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { Link } from "wouter";
import SectionHeading from "./SectionHeading";

const services = [
  {
    href: "/google-ads-management/",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Ads_logo.svg",
    logoAlt: "Google Ads logo",
    title: "Google Ads Management",
    text: "Put your products in front of shoppers searching on Google, with every sale tracked back from your Shopify checkout.",
    points: [
      "Shopping and Performance Max campaigns",
      "Google Merchant Center product feed",
      "Purchase tracking through Shopify's Google & YouTube app",
    ],
    cta: "Google Ads for Shopify stores",
  },
  {
    href: "/meta-ads-management/",
    logo: "https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://meta.com&size=128",
    logoAlt: "Meta logo",
    title: "Meta Ads Management",
    text: "Find new customers on Facebook and Instagram, and bring back shoppers who viewed products or left items in their cart.",
    points: [
      "Catalogue (dynamic product) ads from your Shopify products",
      "Advantage+ and retargeting campaigns",
      "Meta Pixel and Conversions API through Shopify",
    ],
    cta: "Meta Ads for Shopify stores",
  },
];

type Props = {
  eyebrow?: string;
  title?: string;
  intro?: string;
};

export default function ServicesOverview({
  eyebrow = "What I do",
  title = "Two channels. One goal: profitable sales.",
  intro = "I focus on the two ad platforms that matter most for e-commerce, so every hour goes into making your budget earn more.",
}: Props) {
  return (
    <section className="py-20 md:py-24" aria-label="Paid media services">
      <div className="container max-w-6xl">
        <SectionHeading eyebrow={eyebrow} title={title} intro={intro} />
        <div className="grid gap-8 md:grid-cols-2">
          {services.map(s => (
            <article
              key={s.href}
              className="flex flex-col rounded-[2rem] border border-gray-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-lg md:p-10"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-gray-100 bg-white p-2 shadow-sm">
                <img
                  src={s.logo}
                  alt={s.logoAlt}
                  width="40"
                  height="40"
                  loading="lazy"
                  className="h-full w-full object-contain"
                />
              </div>
              <h3 className="mb-3 text-2xl font-extrabold text-secondary">
                <Link
                  href={s.href}
                  className="hover:underline underline-offset-4"
                >
                  {s.title}
                </Link>
              </h3>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                {s.text}
              </p>
              <ul className="mb-8 space-y-3">
                {s.points.map(p => (
                  <li key={p} className="flex items-start gap-3 text-secondary">
                    <Check
                      className="mt-0.5 h-5 w-5 shrink-0 text-green-600"
                      aria-hidden="true"
                    />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <Button
                asChild
                variant="outline"
                className="mt-auto rounded-full border-secondary/20 px-6 font-bold text-secondary hover:bg-secondary hover:text-white"
              >
                <Link href={s.href}>
                  {s.cta}{" "}
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
