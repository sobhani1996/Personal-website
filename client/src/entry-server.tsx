// Build-time entry: renders each route to static HTML so GitHub Pages serves
// real, crawlable pages (see scripts/prerender.mjs).
import { prerenderToNodeStream } from "react-dom/static";
import App from "./App";
import { blogPostsData } from "./data/blogPosts";
import { blogPostSeo, toIsoDate } from "./seo/blog";
import type { HeadData } from "./seo/head";
import { headForPage, NOT_FOUND_SEO, PAGES } from "./seo/pages";

export { renderHead } from "./seo/head";

export type RouteEntry = {
  path: string;
  head: HeadData;
  lastmod?: string;
  priority: string;
  changefreq: string;
};

export function getRoutes(): RouteEntry[] {
  const pages: RouteEntry[] = PAGES.map(p => ({
    path: p.path,
    head: headForPage(p),
    priority: p.sitemap?.priority ?? "0.5",
    changefreq: p.sitemap?.changefreq ?? "monthly",
  }));
  const posts: RouteEntry[] = blogPostsData.map(post => ({
    path: `/blog/${post.slug}`,
    head: blogPostSeo(post),
    lastmod: toIsoDate(post.date),
    priority: "0.6",
    changefreq: "yearly",
  }));
  return [...pages, ...posts];
}

export const notFound = { path: "/404", head: headForPage(NOT_FOUND_SEO) };

export async function render(url: string): Promise<string> {
  const { prelude } = await prerenderToNodeStream(<App ssrPath={url} />);
  const chunks: Buffer[] = [];
  for await (const chunk of prelude) chunks.push(Buffer.from(chunk));
  return Buffer.concat(chunks).toString("utf8");
}
