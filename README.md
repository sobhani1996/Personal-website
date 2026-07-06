# Mori Sobhani — Personal Website

A React + Vite single-page site, configured to host on **GitHub Pages**.

---

## Deploy in 5 steps (recommended: automatic builds)

1. **Create a new repository** on GitHub (Public). You can name it anything.
2. **Upload these files** to the repository (drag-and-drop all files/folders on
   GitHub's "add file" page, or push with git). Do **not** upload `node_modules`
   or `dist` — they are rebuilt automatically.
3. In the repo, go to **Settings → Pages**. Under **Build and deployment →
   Source**, choose **GitHub Actions**.
4. Go to the **Actions** tab. The "Deploy to GitHub Pages" workflow runs on every
   push and builds the site for you. Wait for the green checkmark.
5. Your site is live. Every future change you push to the `main` branch
   redeploys automatically.

---

## Custom domain (mrsobhani.uk)

This project is set up for the domain **mrsobhani.uk**:

- `client/public/CNAME` contains `mrsobhani.uk`.
- In **Settings → Pages → Custom domain**, GitHub will pick this up. Tick
  **Enforce HTTPS** once it's available.
- At your domain registrar / DNS provider, point the domain to GitHub Pages:
  - Four `A` records for the apex (`mrsobhani.uk`) →
    `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
  - A `CNAME` record for `www` → `<your-username>.github.io`

### Not using a custom domain?

- **User site** (`https://<username>.github.io`): delete `client/public/CNAME`.
  No other change needed.
- **Project site** (`https://<username>.github.io/<repo>/`): delete
  `client/public/CNAME`, and in `vite.config.ts` change `base: "/"` to
  `base: "/<repo>/"`.

---

## Run or build locally (optional)

Requires [Node.js](https://nodejs.org) 20+ and [pnpm](https://pnpm.io).

```bash
pnpm install       # install dependencies
pnpm dev           # local preview at http://localhost:3000
pnpm build         # production build into dist/public
pnpm preview       # preview the production build
```

The build automatically creates `404.html`, `.nojekyll`, and copies `CNAME`
into the output so client-side routes (like `/about`, `/cv`) work correctly on
GitHub Pages, including on page refresh.
