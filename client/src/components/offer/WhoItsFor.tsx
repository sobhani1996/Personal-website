import {
  Dumbbell,
  Hammer,
  ShoppingBag,
  Stethoscope,
  Briefcase,
  UtensilsCrossed,
} from "lucide-react";
import SectionHeading from "./SectionHeading";

const types = [
  {
    icon: Hammer,
    title: "Trades & home services",
    text: "Plumbers, electricians, cleaners and builders who need more calls and quote requests.",
  },
  {
    icon: Stethoscope,
    title: "Clinics & salons",
    text: "Dental, physio, beauty and hair businesses that want more booked appointments.",
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurants & cafés",
    text: "Venues that want more table bookings, orders and local footfall.",
  },
  {
    icon: Dumbbell,
    title: "Gyms & studios",
    text: "Fitness and wellbeing businesses filling memberships and classes.",
  },
  {
    icon: ShoppingBag,
    title: "Online shops",
    text: "E-commerce brands that want profitable sales tracked to the penny.",
  },
  {
    icon: Briefcase,
    title: "Professional services",
    text: "Accountants, consultants and agencies looking for qualified enquiries.",
  },
];

export default function WhoItsFor() {
  return (
    <section className="py-20 md:py-24 bg-white" aria-labelledby="who-heading">
      <div className="container max-w-6xl">
        <SectionHeading
          eyebrow="Who I work with"
          title={<span id="who-heading">Built for small businesses</span>}
          intro="If you can track a sale, a booking or an enquiry, the pay-on-results model can work for you. Some of the businesses it suits best:"
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
