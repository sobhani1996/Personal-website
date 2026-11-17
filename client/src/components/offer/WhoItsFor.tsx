import { Coffee, Package, PawPrint, Shirt, Sofa, Sparkles } from "lucide-react";
import SectionHeading from "./SectionHeading";

const types = [
  {
    icon: Shirt,
    title: "Fashion & accessories",
    text: "Clothing, jewellery and accessories brands that want more sales from Google Shopping, Instagram and Facebook.",
  },
  {
    icon: Sparkles,
    title: "Beauty & wellbeing",
    text: "Skincare, cosmetics and wellbeing products with strong visuals and customers who come back to reorder.",
  },
  {
    icon: Sofa,
    title: "Home, gifts & lifestyle",
    text: "Homeware, gift and lifestyle stores, including the big seasonal peaks like Black Friday and Christmas.",
  },
  {
    icon: Coffee,
    title: "Food & drink",
    text: "Coffee, snacks, drinks and speciality food sold online and delivered across the UK.",
  },
  {
    icon: PawPrint,
    title: "Pet products",
    text: "Food, treats, toys and accessories for pet owners, a loyal audience that buys again and again.",
  },
  {
    icon: Package,
    title: "Specialist stores",
    text: "Hobby, outdoor and niche product stores with a clear customer to target.",
  },
];

export default function WhoItsFor() {
  return (
    <section className="py-20 md:py-24 bg-white" aria-labelledby="who-heading">
      <div className="container max-w-6xl">
        <SectionHeading
          eyebrow="Who I work with"
          title={
            <span id="who-heading">Built for Shopify e-commerce stores</span>
          }
          intro="If you run an e-commerce store on Shopify and sell physical products, the pay-on-results model can work for you. Some of the stores it suits best:"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {types.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-3xl border border-gray-100 bg-background/60 p-7"
            >
              <Icon
                className="mb-4 h-8 w-8 text-secondary"
                aria-hidden="true"
              />
              <h3 className="mb-2 text-lg font-bold text-secondary">{title}</h3>
              <p className="text-muted-foreground leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
