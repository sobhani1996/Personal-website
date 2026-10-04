import {
  COMMISSION_RANGE,
  GOOGLE_ADS_FAQ,
  META_ADS_FAQ,
  PRICING_FAQ,
} from "@/content/offer";
import type { HeadData } from "./head";
import {
  breadcrumbs,
  faqPage,
  graph,
  PERSON_ID,
  service,
  webPage,
} from "./schema";
import { canonicalUrl, normalizePath, SITE_URL } from "./site";

export type PageSeo = {
  path: string;
  title: string;
  description: string;
  /** Short name used in breadcrumbs. */
  crumb: string;
  pageType?: string;
  ogType?: HeadData["ogType"];
  noindex?: boolean;
  sitemap?: { priority: string; changefreq: string };
  extraNodes?: (url: string) => Record<string, unknown>[];
  extraHead?: string;
};

const R = COMMISSION_RANGE;

export const PAGES: PageSeo[] = [
  {
    path: "/",
    title: "Google & Meta Ads Specialist for Small Businesses | Mori Sobhani",
    description: `Google Ads and Meta Ads specialist in Portsmouth helping UK small businesses. Free campaign setup, then just ${R} of the conversion value. No retainer.`,
    crumb: "Home",
    sitemap: { priority: "1.0", changefreq: "weekly" },
    extraHead:
      '<link rel="preload" as="image" href="/images/mori-logo.webp" type="image/webp" fetchpriority="high" />',
  },
  {
    path: "/services",
    title: "Paid Media Services: Google Ads & Meta Ads | Mori Sobhani",
    description: `Google Ads and Meta Ads management for small businesses. Tracking, research, ad copy and campaign build for free, then ${R} of conversion value.`,
    crumb: "Services",
    pageType: "CollectionPage",
    sitemap: { priority: "0.9", changefreq: "monthly" },
  },
  {
    path: "/google-ads-management",
    title: "Google Ads Management for Small Businesses | Mori Sobhani",
    description: `Google Ads management for UK small businesses. Free setup with conversion tracking, keyword research and ad copy, then pay just ${R} of conversion value.`,
    crumb: "Google Ads management",
    sitemap: { priority: "0.9", changefreq: "monthly" },
    extraNodes: url => [
      service(
        url,
        "Google Ads Management for Small Businesses",
        "Google Ads management",
        "Search, Performance Max and Shopping campaigns for small businesses, with conversion tracking, keyword research, ad copy and ongoing optimisation."
      ),
      faqPage(url, GOOGLE_ADS_FAQ),
    ],
  },
  {
    path: "/meta-ads-management",
    title: "Meta Ads Management: Facebook & Instagram Ads | Mori Sobhani",
    description: `Facebook and Instagram ads that bring leads and sales for small businesses. Free Meta Ads setup with Pixel tracking, then just ${R} of conversion value.`,
    crumb: "Meta Ads management",
    sitemap: { priority: "0.9", changefreq: "monthly" },
    extraNodes: url => [
      service(
        url,
        "Meta Ads Management for Small Businesses",
        "Facebook and Instagram advertising management",
        "Lead generation, sales, message and retargeting campaigns on Facebook and Instagram, with Meta Pixel and Conversions API tracking."
      ),
      faqPage(url, META_ADS_FAQ),
    ],
  },
  {
    path: "/pricing",
    title: "Pay-on-Results Ads Management: Free Setup | Mori Sobhani",
    description: `No setup fee and no monthly retainer. I set up Google Ads or Meta Ads for free, then charge ${R} of the conversion value they generate.`,
    crumb: "Pricing",
    sitemap: { priority: "0.9", changefreq: "monthly" },
    extraNodes: url => [faqPage(url, PRICING_FAQ)],
  },
  {
    path: "/portfolio",
    title: "Paid Media Case Studies & Portfolio | Mori Sobhani",
    description:
      "Google Ads, Meta Ads and LinkedIn Ads case studies: +500% conversions and +300% traffic for an online fashion shop, and a +15% sales lift from Meta Ads.",
    crumb: "Portfolio",
    pageType: "CollectionPage",
    sitemap: { priority: "0.8", changefreq: "monthly" },
  },
  {
    path: "/about",
    title: "About Mori Sobhani, Google Ads & Meta Ads Specialist",
    description:
      "Mori Sobhani is a Portsmouth-based paid media specialist with an MSc in Digital Marketing, running Google Ads and Meta Ads for small businesses on results.",
    crumb: "About",
    pageType: "AboutPage",
    ogType: "profile",
    sitemap: { priority: "0.7", changefreq: "monthly" },
  },
  {
    path: "/cv",
    title: "CV: Paid Media & Digital Marketing Experience | Mori Sobhani",
    description:
      "Mori Sobhani's CV: freelance paid media specialist, Google Ads and Meta Ads for e-commerce, LinkedIn Ads for B2B tech, and an MSc in Digital Marketing.",
    crumb: "CV",
    pageType: "ProfilePage",
    ogType: "profile",
    sitemap: { priority: "0.5", changefreq: "monthly" },
  },
  {
    path: "/contact",
    title: "Book a Free Google & Meta Ads Strategy Call | Mori Sobhani",
    description: `Book a free 30-minute call to see if Google Ads or Meta Ads can bring your small business profitable customers. Free setup, then ${R} of conversion value.`,
    crumb: "Contact",
    pageType: "ContactPage",
    sitemap: { priority: "0.8", changefreq: "yearly" },
  },
  {
    path: "/blog",
    title: "Google Ads, Meta Ads & Marketing Blog | Mori Sobhani",
    description:
      "Practical guides for small business owners on Google Ads, Meta Ads, conversion tracking and the marketing basics that turn ad clicks into customers.",
    crumb: "Blog",
    pageType: "CollectionPage",
    sitemap: { priority: "0.7", changefreq: "weekly" },
  },
  {
    path: "/story",
    title: "My Story: From Engineering to Paid Media | Mori Sobhani",
    description:
      "How Mori Sobhani went from chemical engineering to an MSc in Digital Marketing and a Google Ads and Meta Ads specialist for small businesses.",
    crumb: "My story",
    pageType: "AboutPage",
    sitemap: { priority: "0.4", changefreq: "yearly" },
  },
  {
    path: "/book",
    title: "The Digital Marketer's Illustrated Guide to AI Image Generation",
    description:
      "A practical, illustrated playbook for marketers who want AI-generated visuals that work in real campaigns. Read 5 pages free or buy it on Amazon.",
    crumb: "Book",
    ogType: "book",
    sitemap: { priority: "0.5", changefreq: "yearly" },
    extraNodes: url => [
      {
        "@type": "Book",
        "@id": `${url}#book`,
        name: "The Digital Marketer's Illustrated Guide to AI Image Generation",
        author: { "@id": PERSON_ID },
        bookFormat: "https://schema.org/EBook",
        inLanguage: "en",
        url,
        sameAs:
          "https://www.amazon.co.uk/Digital-Marketers-Illustrated-Guide-Generation-ebook/dp/B0GX449BBM/",
      },
    ],
  },
  {
    path: "/privacy-policy",
    title: "Privacy Policy | Mori Sobhani",
    description:
      "How Mori Sobhani collects, uses and protects personal data under UK GDPR when you use mrsobhani.uk or book a strategy call.",
    crumb: "Privacy policy",
    sitemap: { priority: "0.2", changefreq: "yearly" },
  },
  {
    path: "/terms-of-service",
    title: "Terms of Service | Mori Sobhani",
    description:
      "The terms that apply when you use mrsobhani.uk, the website of Mori Sobhani, Google Ads and Meta Ads specialist for small businesses.",
    crumb: "Terms of service",
    sitemap: { priority: "0.2", changefreq: "yearly" },
  },
];

export const NOT_FOUND_SEO: PageSeo = {
  path: "/404",
  title: "Page Not Found | Mori Sobhani",
  description:
    "This page doesn't exist. Visit the home page to learn about Google Ads and Meta Ads management for small businesses.",
  crumb: "Not found",
  noindex: true,
};

export function headForPage(p: PageSeo): HeadData {
  const url = p.path === "/404" ? `${SITE_URL}/404` : canonicalUrl(p.path);
  const nodes: Record<string, unknown>[] = [
    webPage(p.pageType ?? "WebPage", url, p.title, p.description),
  ];
  if (p.path !== "/" && !p.noindex) {
    nodes.push(
      breadcrumbs([
        { name: "Home", url: `${SITE_URL}/` },
        { name: p.crumb, url },
      ])
    );
  }
  if (p.extraNodes) nodes.push(...p.extraNodes(url));
  return {
    title: p.title,
    description: p.description,
    canonical: url,
    ogType: p.ogType,
    noindex: p.noindex,
    jsonLd: graph(...nodes),
    extraHead: p.extraHead,
  };
}

/** Head data for a static page, or undefined for blog posts and unknown paths. */
export function headForPath(path: string): HeadData | undefined {
  const clean = normalizePath(path);
  const page = PAGES.find(p => p.path === clean);
  return page ? headForPage(page) : undefined;
}
