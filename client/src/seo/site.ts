export const SITE_URL = "https://mrsobhani.uk";
export const SITE_NAME = "Mori Sobhani";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;
export const DEFAULT_OG_IMAGE_ALT =
  "Mori Sobhani, Google Ads and Meta Ads specialist for small businesses. Free setup, paid on results.";

/** Canonical URL for a route path. Every page except the home page ends in "/". */
export function canonicalUrl(path: string) {
  const clean = normalizePath(path);
  return clean === "/" ? `${SITE_URL}/` : `${SITE_URL}${clean}/`;
}

/** "/services/" and "/services" both become "/services"; "/" stays "/". */
export function normalizePath(path: string) {
  const noQuery = path.split(/[?#]/)[0] || "/";
  const trimmed = noQuery.replace(/\/+$/, "");
  return trimmed === "" ? "/" : trimmed;
}
