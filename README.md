# GUULAK! — A Feast for the Senses

A Korean-inspired, vibrant company profile + interactive menu concept, built with **Next.js App Router, TypeScript, Tailwind CSS v4 and GSAP**.

## Getting started

Node.js 20+ recommended.

\`\`\`bash
npm install
npm run dev
npm run build
\`\`\`

Open http://localhost:3000.

## Pages

- \`/\` — experimental layered homepage
- \`/menu\` — interactive searchable/filterable menu preview
- \`/about\`, \`/outlets\`, \`/gallery\`, \`/contact\` — company profile supporting pages

## Brand compliance

Uses the color tokens specified on page 12 of *Brand Guidelines – Guulak.pdf*:
Sun Yellow \`#FFD751\`, Guulak Orange \`#FC983C\`, Warm White \`#FFFFFF\`, Golden Orange \`#FAA718\`, Charcoal \`#333333\`.

The official brand uses **Monument Ultra Bold** and **Monument Regular**. Typeface files are **not bundled**; add licensed fonts to \`public/fonts/\` and enable \`@font-face\` in \`src/app/globals.css\`. Likewise, replace the text logo with the original approved Guulak logo asset and integrate the mascot only once the official file is available.

### Important: demo-only assets

- The three product images are illustrative Unsplash images, not Guulak products.
- Product names are deliberate placeholders, not real menu claims.
- Outlet count (6) is from the guidelines, but addresses and opening hours are not given.
- Contact and gallery are scaffolded until verified content arrives.
- Search indexing is intentionally disabled; replace \`metadataBase\` and enable indexing at production launch.

## Engineering notes

- GSAP animations are client-only and use context cleanup.
- Reduced-motion preference is respected for entrance animations and CSS.
- Product content is isolated in \`src/data/site.ts\`.
- Homepage content is rendered through reusable components.
- Pull request should be reviewed before merging to \`main\`.
