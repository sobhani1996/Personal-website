import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

// The client build goes to dist/public (what GitHub Pages serves). The SSR
// build in dist/server is only used at build time by scripts/prerender.mjs,
// which writes a static HTML file for every route, plus 404.html, sitemap.xml
// and .nojekyll.
export default defineConfig(({ isSsrBuild }) => ({
  // base "/" is correct for a custom domain (mrsobhani.uk) or a
  // <username>.github.io user site.
  // If instead you deploy to a PROJECT page (https://<username>.github.io/<repo>/),
  // change this to "/<repo>/" and remove client/public/CNAME.
  base: "/",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  envDir: path.resolve(import.meta.dirname),
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(
      import.meta.dirname,
      isSsrBuild ? "dist/server" : "dist/public"
    ),
    emptyOutDir: true,
  },
  server: {
    port: 3000,
    strictPort: false,
    host: true,
  },
}));
