// Writes a static HTML file for every route into dist/public, so GitHub Pages
// answers each URL with a real page (HTTP 200) containing its own title,
// description, canonical URL, structured data and full content.
//
// Routes are written as <path>/index.html. GitHub Pages serves those at
// "/path/" and redirects "/path" there, which is why canonical URLs end in "/".
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const root = path.resolve(import.meta.dirname, "..");
const outDir = path.join(root, "dist/public");
const serverEntry = path.join(root, "dist/server/entry-server.js");

const template = fs.readFileSync(path.join(outDir, "index.html"), "utf8");
for (const marker of ["<!--seo-head-->", "<!--app-html-->"]) {
  if (!template.includes(marker))
    throw new Error(`index.html is missing the ${marker} marker`);
}

const { render, renderHead, getRoutes, notFound } = await import(
  pathToFileURL(serverEntry).href
);

function page(head, appHtml) {
  return template
    .replace("<!--seo-head-->", renderHead(head))
    .replace("<!--app-html-->", appHtml);
}

function outFile(routePath) {
  return routePath === "/"
    ? path.join(outDir, "index.html")
    : path.join(outDir, routePath, "index.html");
}

const routes = getRoutes();
const seen = new Set();
for (const route of routes) {
  if (seen.has(route.path)) throw new Error(`Duplicate route ${route.path}`);
  seen.add(route.path);

  const html = page(route.head, await render(route.path));
  if (!html.includes("<h1"))
    throw new Error(`${route.path} rendered without an <h1>`);

  const file = outFile(route.path);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, html);
}

// Served by GitHub Pages (with a 404 status) for any unknown URL.
fs.writeFileSync(
  path.join(outDir, "404.html"),
  page(notFound.head, await render(notFound.path))
);
fs.writeFileSync(path.join(outDir, ".nojekyll"), "");

const today = new Date().toISOString().slice(0, 10);
const urls = routes
  .filter(r => !r.head.noindex)
  .map(
    r => `  <url>
    <loc>${r.head.canonical}</loc>
    <lastmod>${r.lastmod ?? today}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`
  )
  .join("\n");
fs.writeFileSync(
  path.join(outDir, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`
);

console.log(`Pre-rendered ${routes.length} pages, 404.html and sitemap.xml`);
