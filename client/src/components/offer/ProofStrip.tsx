import { PROOF } from "@/content/offer";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function ProofStrip() {
  return (
    <section
      className="border-y border-gray-100 bg-white"
      aria-label="Results from past campaigns"
    >
      <div className="container max-w-6xl">
        <div className="grid divide-y divide-gray-100 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
          {PROOF.map(p => (
            <div key={p.label} className="p-8 text-center lg:text-left">
              <p className="mb-2 text-4xl font-extrabold text-secondary md:text-5xl">
                {p.value}
              </p>
              <p className="text-sm font-medium text-muted-foreground">
                {p.label}
              </p>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-100 py-4 text-center">
          <Link
            href="/portfolio/"
            className="inline-flex items-center text-sm font-bold text-secondary underline-offset-4 hover:underline"
          >
            See the case studies behind these numbers{" "}
            <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
