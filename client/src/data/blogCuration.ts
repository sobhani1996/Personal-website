import type { BlogPost } from "./blogPosts";

// Articles that fit the paid media positioning, with the category shown on the
// blog. Every other article stays reachable by URL but is left off the blog
// page and sitemap and marked noindex. Add a slug here to list it again.
export const LISTED_POSTS: Record<string, string> = {
  "pay-on-results-google-meta-ads-management": "Paid Advertising",
  "google-ads-for-small-businesses-guide": "Google Ads",
  "meta-ads-for-small-businesses-guide": "Meta Ads",
  "maximising-local-impact-hyper-targeted-ads": "Paid Advertising",
  "a-local-business-guide-to-facebook-advertising": "Meta Ads",
  "seo-vs-ppc-which-is-better-for-local-businesses": "Paid Advertising",
  "how-much-should-small-business-spend-digital-marketing": "Paid Advertising",
  "measuring-what-matters-digital-marketing-kpis": "Analytics & Tracking",
  "data-driven-marketing-analytics-actionable-insights": "Analytics & Tracking",
  "how-to-use-analytics-to-improve-marketing-roi": "Analytics & Tracking",
  "psychology-conversion-rate-optimisation-cro": "Conversion Optimisation",
  "the-psychology-of-persuasive-copywriting-for-local-ads":
    "Conversion Optimisation",
  "roi-hiring-freelance-digital-marketer": "Marketing Strategy",
  "how-to-choose-right-digital-marketing-freelancer": "Marketing Strategy",
  "how-long-does-digital-marketing-take-results": "Marketing Strategy",
  "best-marketing-channel-for-home-service-businesses": "Marketing Strategy",
  "evolution-digital-marketing-local-businesses-2026": "Marketing Strategy",
};

export const isListed = (post: BlogPost) => post.slug in LISTED_POSTS;

/** Listed posts carry their curated category; unlisted posts keep their own. */
export function curate(post: BlogPost): BlogPost {
  const category = LISTED_POSTS[post.slug];
  return category ? { ...post, category } : post;
}
