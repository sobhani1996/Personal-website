import { COMMISSION_RANGE, CONTACT, type FaqItem } from "@/content/offer";
import { DEFAULT_OG_IMAGE, SITE_URL } from "./site";

export const PERSON_ID = `${SITE_URL}/#person`;
export const BUSINESS_ID = `${SITE_URL}/#business`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

const sameAs = [CONTACT.linkedin, CONTACT.instagram];
const knowsAbout = [
  "Google Ads",
  "Meta Ads",
  "Facebook Ads",
  "Instagram Ads",
  "Pay-per-click advertising",
  "Paid social advertising",
  "Conversion tracking",
  "Google Analytics 4",
];

const person = {
  "@type": "Person",
  "@id": PERSON_ID,
  name: "Mori Sobhani",
  jobTitle: "Paid Media Specialist (Google Ads & Meta Ads)",
  url: `${SITE_URL}/about/`,
  image: `${SITE_URL}/images/hero-portrait.jpg`,
  email: `mailto:${CONTACT.email}`,
  sameAs,
  knowsAbout,
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "University of Northampton",
  },
  worksFor: { "@id": BUSINESS_ID },
  address: {
    "@type": "PostalAddress",
    addressLocality: CONTACT.locality,
    addressRegion: CONTACT.region,
    addressCountry: CONTACT.country,
  },
};

const business = {
  "@type": "ProfessionalService",
  "@id": BUSINESS_ID,
  name: "Mori Sobhani – Google Ads & Meta Ads Specialist",
  url: `${SITE_URL}/`,
  image: DEFAULT_OG_IMAGE,
  logo: `${SITE_URL}/logo.png`,
  description: `Google Ads and Meta Ads management for small businesses. Free campaign setup, then ${COMMISSION_RANGE} of the conversion value the ads generate.`,
  telephone: CONTACT.phoneE164,
  email: CONTACT.email,
  priceRange: `Free setup; ${COMMISSION_RANGE} of conversion value`,
  address: {
    "@type": "PostalAddress",
    addressLocality: CONTACT.locality,
    addressRegion: CONTACT.region,
    postalCode: CONTACT.postalCode,
    addressCountry: CONTACT.country,
  },
  areaServed: { "@type": "Country", name: "United Kingdom" },
  founder: { "@id": PERSON_ID },
  sameAs,
  knowsAbout,
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Paid media services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@id": `${SITE_URL}/google-ads-management/#service` },
      },
      {
        "@type": "Offer",
        itemOffered: { "@id": `${SITE_URL}/meta-ads-management/#service` },
      },
    ],
  },
};

const website = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: `${SITE_URL}/`,
  name: "Mori Sobhani",
  description: "Google Ads and Meta Ads specialist for small businesses",
  publisher: { "@id": PERSON_ID },
  inLanguage: "en-GB",
};

export function webPage(
  type: string,
  url: string,
  name: string,
  description: string,
  extra: Record<string, unknown> = {}
) {
  return {
    "@type": type,
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": BUSINESS_ID },
    inLanguage: "en-GB",
    ...extra,
  };
}

export function breadcrumbs(items: { name: string; url: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function faqPage(url: string, items: FaqItem[]) {
  return {
    "@type": "FAQPage",
    "@id": `${url}#faq`,
    mainEntity: items.map(f => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function service(
  url: string,
  name: string,
  serviceType: string,
  description: string
) {
  return {
    "@type": "Service",
    "@id": `${url}#service`,
    name,
    serviceType,
    description,
    url,
    provider: { "@id": BUSINESS_ID },
    areaServed: { "@type": "Country", name: "United Kingdom" },
    audience: { "@type": "BusinessAudience", name: "Small businesses" },
    offers: {
      "@type": "Offer",
      description: `Free campaign setup, then ${COMMISSION_RANGE} of the conversion value the campaigns generate. No monthly retainer.`,
    },
  };
}

/** Wraps page-specific nodes with the site-wide Person, business and website nodes. */
export function graph(...nodes: Record<string, unknown>[]) {
  return {
    "@context": "https://schema.org",
    "@graph": [website, person, business, ...nodes],
  };
}
