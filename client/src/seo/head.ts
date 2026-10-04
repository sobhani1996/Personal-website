import { DEFAULT_OG_IMAGE, DEFAULT_OG_IMAGE_ALT, SITE_NAME } from "./site";

export type HeadData = {
  title: string;
  description: string;
  canonical: string;
  ogType?: "website" | "article" | "profile" | "book";
  image?: string;
  imageAlt?: string;
  noindex?: boolean;
  publishedTime?: string;
  jsonLd?: Record<string, unknown>;
  /** Raw tags for this page only, e.g. preloading the hero image on the home page. */
  extraHead?: string;
};

type Tag = { tag: "meta" | "link"; attrs: Record<string, string> };

function tagsFor(d: HeadData): Tag[] {
  const image = d.image ?? DEFAULT_OG_IMAGE;
  const imageAlt = d.imageAlt ?? (d.image ? d.title : DEFAULT_OG_IMAGE_ALT);
  const tags: Tag[] = [
    { tag: "meta", attrs: { name: "description", content: d.description } },
    {
      tag: "meta",
      attrs: {
        name: "robots",
        content: d.noindex
          ? "noindex, follow"
          : "index, follow, max-image-preview:large, max-snippet:-1",
      },
    },
    { tag: "meta", attrs: { property: "og:site_name", content: SITE_NAME } },
    { tag: "meta", attrs: { property: "og:locale", content: "en_GB" } },
    {
      tag: "meta",
      attrs: { property: "og:type", content: d.ogType ?? "website" },
    },
    { tag: "meta", attrs: { property: "og:url", content: d.canonical } },
    { tag: "meta", attrs: { property: "og:title", content: d.title } },
    {
      tag: "meta",
      attrs: { property: "og:description", content: d.description },
    },
    { tag: "meta", attrs: { property: "og:image", content: image } },
    { tag: "meta", attrs: { property: "og:image:alt", content: imageAlt } },
    {
      tag: "meta",
      attrs: { name: "twitter:card", content: "summary_large_image" },
    },
    { tag: "meta", attrs: { name: "twitter:title", content: d.title } },
    {
      tag: "meta",
      attrs: { name: "twitter:description", content: d.description },
    },
    { tag: "meta", attrs: { name: "twitter:image", content: image } },
    { tag: "meta", attrs: { name: "twitter:image:alt", content: imageAlt } },
  ];
  // A 404 page shouldn't claim a canonical URL.
  if (!d.noindex)
    tags.splice(2, 0, {
      tag: "link",
      attrs: { rel: "canonical", href: d.canonical },
    });
  if (!d.image) {
    tags.push(
      { tag: "meta", attrs: { property: "og:image:width", content: "1200" } },
      { tag: "meta", attrs: { property: "og:image:height", content: "630" } }
    );
  }
  if (d.publishedTime) {
    tags.push(
      {
        tag: "meta",
        attrs: { property: "article:published_time", content: d.publishedTime },
      },
      { tag: "meta", attrs: { property: "article:author", content: SITE_NAME } }
    );
  }
  return tags;
}

const escapeAttr = (v: string) =>
  v
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
const escapeText = (v: string) =>
  v.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
// Keeps "</script>" inside JSON from closing the tag early.
const safeJson = (o: unknown) => JSON.stringify(o).replace(/</g, "\\u003c");

/** Head tags as an HTML string, used when pre-rendering pages at build time. */
export function renderHead(d: HeadData) {
  const lines = [`<title>${escapeText(d.title)}</title>`];
  for (const t of tagsFor(d)) {
    const attrs = Object.entries(t.attrs)
      .map(([k, v]) => `${k}="${escapeAttr(v)}"`)
      .join(" ");
    lines.push(`<${t.tag} ${attrs} data-seo />`);
  }
  if (d.jsonLd)
    lines.push(
      `<script type="application/ld+json" data-seo>${safeJson(d.jsonLd)}</script>`
    );
  if (d.extraHead) lines.push(d.extraHead);
  return lines.join("\n    ");
}

/** Updates the head after client-side navigation, so titles and canonicals stay correct. */
export function applyHead(d: HeadData) {
  if (typeof document === "undefined") return;
  document.title = d.title;
  document.head.querySelectorAll("[data-seo]").forEach(el => el.remove());
  for (const t of tagsFor(d)) {
    const el = document.createElement(t.tag);
    for (const [k, v] of Object.entries(t.attrs)) el.setAttribute(k, v);
    el.setAttribute("data-seo", "");
    document.head.appendChild(el);
  }
  if (d.jsonLd) {
    const s = document.createElement("script");
    s.type = "application/ld+json";
    s.setAttribute("data-seo", "");
    s.textContent = JSON.stringify(d.jsonLd);
    document.head.appendChild(s);
  }
}
