import type { BlogPost } from "./blogPosts";

// Articles that fit the Shopify paid media positioning, with the category shown on the
// blog. Every other article stays reachable by URL but is left off the blog
// page and sitemap and marked noindex. Add a slug here to list it again.
export const LISTED_POSTS: Record<string, string> = {
  "why-i-work-on-commission-not-fixed-fees": "Paid Advertising",
  "google-ads-for-shopify-stores-guide": "Google Ads",
  "meta-ads-for-shopify-stores-guide": "Meta Ads",
  "pay-on-results-google-meta-ads-management": "Paid Advertising",
  "measuring-what-matters-digital-marketing-kpis": "Analytics & Tracking",
  "data-driven-marketing-analytics-actionable-insights": "Analytics & Tracking",
  "how-to-use-analytics-to-improve-marketing-roi": "Analytics & Tracking",
  "psychology-conversion-rate-optimisation-cro": "Conversion Optimisation",
  "how-to-choose-right-digital-marketing-freelancer": "Marketing Strategy",
  "how-long-does-digital-marketing-take-results": "Marketing Strategy",
};

export const isListed = (post: BlogPost) => post.slug in LISTED_POSTS;

/**
 * Listed posts carry their curated category; unlisted posts keep their own.
 * Every post uses its branded cover from /images/blog (generated per slug),
 * since the original Manus-hosted images are no longer served.
 */
export function curate(post: BlogPost): BlogPost {
  return {
    ...post,
    category: LISTED_POSTS[post.slug] ?? post.category,
    image: `/images/blog/${post.slug}.jpg`,
  };
}
