import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import fs from "node:fs";
import path from "path";
import { defineConfig, type Plugin } from "vite";

// Output directory for the built site.
const outDir = path.resolve(import.meta.dirname, "dist/public");

/**
 * Makes the build output ready for GitHub Pages:
 *  - Copies index.html -> 404.html so client-side routes (e.g. /about, /cv)
 *    work on direct visits and page refreshes (GitHub Pages has no SPA fallback).
 *  - Writes an empty .nojekyll file so GitHub serves all assets as-is.
 */
function githubPagesPlugin(): Plugin {
  return {
    name: "github-pages-spa",
    apply: "build",
    closeBundle() {
      const indexHtml = path.join(outDir, "index.html");
      if (fs.existsSync(indexHtml)) {
        fs.copyFileSync(indexHtml, path.join(outDir, "404.html"));
      }
      fs.writeFileSync(path.join(outDir, ".nojekyll"), "");
    },
  };
}

export default defineConfig({
  // base "/" is correct for a custom domain (mrsobhani.uk) or a
  // <username>.github.io user site.
  // If instead you deploy to a PROJECT page (https://<username>.github.io/<repo>/),
  // change this to "/<repo>/" and remove client/public/CNAME.
  base: "/",
  plugins: [react(), tailwindcss(), githubPagesPlugin()],
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
    outDir,
    emptyOutDir: true,
  },
  server: {
    port: 3000,
    strictPort: false,
    host: true,
  },
});
