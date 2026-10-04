import type { FaqItem } from "@/content/offer";
import { ChevronDown } from "lucide-react";
import SectionHeading from "./SectionHeading";

type Props = {
  items: FaqItem[];
  title?: string;
  intro?: string;
};

// Native <details> keeps every answer in the HTML, so search engines can read
// the answers even when they are collapsed.
export default function Faq({
  items,
  title = "Frequently asked questions",
  intro,
}: Props) {
  return (
    <section className="py-20 md:py-24" aria-labelledby="faq-heading">
      <div className="container max-w-4xl">
        <SectionHeading
          eyebrow="FAQ"
          title={<span id="faq-heading">{title}</span>}
          intro={intro}
        />
        <div className="space-y-4">
          {items.map(item => (
            <details
              key={item.q}
              className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm open:shadow-md"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-lg font-bold text-secondary [&::-webkit-details-marker]:hidden">
                <h3 className="text-lg font-bold">{item.q}</h3>
                <ChevronDown
                  className="h-5 w-5 shrink-0 text-secondary transition-transform duration-200 group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
