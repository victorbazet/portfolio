# Victor Bazet-Braun — Portfolio

**Live:** [victor-bazet-braun.pages.dev](https://victor-bazet-braun.pages.dev)

My personal site: who I am, what I'm building with [Shuren](https://shuren.fr), my resume, and a selection of academic work from my Finance degree at The College of New Jersey (company valuations of Nike and Coca-Cola, sports marketing plans, essays on AI, law and crypto).

Single-page React app, fully static, hosted on Cloudflare Pages.

## Stack

- React + Vite
- Tailwind CSS v4 (design tokens in the `@theme` block of `src/index.css`)
- Cloudflare Pages, with `public/_headers` for asset caching and inline PDF viewing

## How it's organized

All site copy lives in one file, [`src/data/content.js`](src/data/content.js). Components only handle layout, so changing wording, adding a document or updating a link never means touching a component.

```
public/
  documents/         PDFs served at /documents/<name>.pdf
  _headers           Cloudflare Pages cache + content-disposition rules
src/
  data/content.js    all site copy and the document list
  components/        Nav, Hero, About, Shuren, AcademicWork, Skills, Footer
  App.jsx            section order
  index.css          Tailwind import + color/font tokens
```

Adding a document means dropping the PDF into `public/documents/` and adding an entry to `academicWork` in `content.js`. The grid picks it up automatically.

## Running locally

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in dist/
```

## Deploying

```bash
npm run build && npx wrangler pages deploy dist
```

Or connect the repo in Cloudflare Pages with the Vite preset (build command `npm run build`, output `dist`). No environment variables or server code.

## License

Code is MIT-licensed. The documents in `public/documents/` are academic work (some of it group projects) shared for viewing only.
