import { listedPosts, type BlogPost } from "@/data/blogPosts";
import { isListed } from "@/data/blogCuration";
import type { HeadData } from "./head";
import { breadcrumbs, graph, PERSON_ID, webPage } from "./schema";
import { canonicalUrl, SITE_URL } from "./site";

/** "Mar 23, 2026" -> "2026-03-23". */
export function toIsoDate(date: string) {
  const d = new Date(`${date} 12:00 UTC`);
  return Number.isNaN(d.getTime()) ? undefined : d.toISOString().slice(0, 10);
}

function truncate(text: string, max: number) {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max - 1);
  return `${cut.slice(0, cut.lastIndexOf(" "))}…`;
}

/** Some imported posts were saved with a full <html><body> wrapper. */
export function cleanPostHtml(html: string) {
  return html.replace(/<\/?(html|body)>/gi, "");
}

// Shorter <title> tags for posts whose headline is too long for search results.
const SEO_TITLES: Record<string, string> = {
  "10-steps-local-pub-portsmouth-improve-online-presence":
    "10 Ways a Portsmouth Pub Can Improve Its Online Presence",
  "digital-marketing-local-businesses-2026-tools-ai-transparency":
    "Local Business Marketing in 2026: AI, Tools & Transparency",
  "digital-marketing-strategies-local-businesses-portsmouth-2026":
    "Portsmouth Local Business Marketing Guide 2026",
  "evolution-digital-marketing-local-businesses-2026":
    "How Local Business Marketing Is Changing in 2026",
  "how-to-balance-short-term-sales-with-long-term-brand-building":
    "Balancing Short-Term Sales and Long-Term Brand Building",
  "how-to-optimize-google-business-profile":
    "How to Optimise Your Google Business Profile",
  "local-keyword-research-finding-what-customers-search-for":
    "Local Keyword Research: Find What Customers Search For",
  "roi-hiring-freelance-digital-marketer":
    "The ROI of Hiring a Freelance Digital Marketer",
  "meta-ads-for-small-businesses-guide":
    "Meta Ads for Small Businesses: Get Customers, Not Likes",
  "pay-on-results-google-meta-ads-management":
    "Pay-on-Results Google & Meta Ads Management Explained",
};

export function blogPostSeo(post: BlogPost): HeadData {
  const url = canonicalUrl(`/blog/${post.slug}`);
  const base = SEO_TITLES[post.slug] ?? post.title;
  const withBrand = `${base} | Mori Sobhani`;
  const title = withBrand.length <= 65 ? withBrand : base;
  const description = truncate(post.excerpt, 158);
  const published = toIsoDate(post.date);

  const article = {
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: truncate(post.title, 110),
    description,
    image: post.image,
    datePublished: published,
    dateModified: published,
    author: { "@id": PERSON_ID },
    publisher: { "@id": PERSON_ID },
    mainEntityOfPage: { "@id": `${url}#webpage` },
    articleSection: post.category,
    inLanguage: "en-GB",
  };

  return {
    title,
    description,
    canonical: url,
    // Unlisted archive posts stay reachable but out of search results.
    noindex: !isListed(post),
    ogType: "article",
    image: post.image,
    imageAlt: post.title,
    publishedTime: published,
    jsonLd: graph(
      webPage("WebPage", url, post.title, description),
      article,
      breadcrumbs([
        { name: "Home", url: `${SITE_URL}/` },
        { name: "Blog", url: canonicalUrl("/blog") },
        { name: post.title, url },
      ])
    ),
  };
}

/** Same-category posts first, then the newest others. Deterministic so pre-rendered HTML matches the browser. */
export function relatedPosts(post: BlogPost, count: number) {
  const time = (p: BlogPost) => new Date(p.date).getTime() || 0;
  return listedPosts
    .filter(p => p.id !== post.id)
    .sort((a, b) => {
      const sameA = a.category === post.category ? 1 : 0;
      const sameB = b.category === post.category ? 1 : 0;
      return sameB - sameA || time(b) - time(a) || a.id - b.id;
    })
    .slice(0, count);
}
