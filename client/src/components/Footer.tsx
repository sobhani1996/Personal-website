import { CONTACT, COMMISSION_RANGE } from "@/content/offer";
import { Instagram, Linkedin } from "lucide-react";
import { Link } from "wouter";

const services = [
  { name: "Google Ads management", href: "/google-ads-management/" },
  { name: "Meta Ads management", href: "/meta-ads-management/" },
  { name: "All services", href: "/services/" },
  { name: "Pricing", href: "/pricing/" },
];

const explore = [
  { name: "Portfolio", href: "/portfolio/" },
  { name: "Blog", href: "/blog/" },
  { name: "About", href: "/about/" },
  { name: "CV", href: "/cv/" },
  { name: "My book", href: "/book/" },
  { name: "Contact", href: "/contact/" },
];

export default function Footer() {
  return (
    <footer className="bg-secondary text-white pt-20 pb-10 rounded-t-[3rem] mt-10">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="text-2xl font-extrabold tracking-tight flex items-center gap-3 mb-6 group"
            >
              <img
                loading="lazy"
                src="https://d2xsxph8kpxj0f.cloudfront.net/310419663031747991/Y3kw537GjyvvS43ZN9JMcY/MoriSobhaniLogo_c812f661.png"
                alt=""
                width="40"
                height="40"
                className="w-10 h-10 object-contain rounded-full group-hover:scale-110 transition-transform duration-300"
              />
              Mori Sobhani
            </Link>
            <p className="text-blue-100 max-w-sm leading-relaxed">
              Google Ads and Meta Ads specialist for small businesses, based in
              Portsmouth, UK. Free campaign setup, then I earn{" "}
              {COMMISSION_RANGE} of the conversion value your ads bring in.
            </p>
          </div>

          <div>
            <h2 className="font-bold text-lg mb-6">Services</h2>
            <ul className="space-y-4">
              {services.map(l => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-blue-100 hover:text-primary transition-colors"
                  >
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-lg mb-6">Explore</h2>
            <ul className="space-y-4">
              {explore.map(l => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-blue-100 hover:text-primary transition-colors"
                  >
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-lg mb-6">Contact</h2>
            <div className="space-y-2">
              <a
                href={`mailto:${CONTACT.email}`}
                className="text-blue-100 hover:text-primary transition-colors block"
              >
                {CONTACT.email}
              </a>
              <a
                href={CONTACT.phoneHref}
                className="text-blue-100 hover:text-primary transition-colors block"
              >
                {CONTACT.phoneDisplay}
              </a>
              <p className="text-blue-100">Portsmouth, Hampshire, UK</p>
            </div>
            <div className="flex gap-4 mt-6">
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Mori Sobhani on LinkedIn"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-secondary transition-all"
              >
                <Linkedin className="w-5 h-5" aria-hidden="true" />
              </a>
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Mori Sobhani on Instagram"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-secondary transition-all"
              >
                <Instagram className="w-5 h-5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-blue-200/80">
          <p>
            © {new Date().getFullYear()} Mori Sobhani. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy-policy/"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service/"
              className="hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
