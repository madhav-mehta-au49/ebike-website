# Latest validation — premium refinement

- Next.js production build passed.
- Strict TypeScript passed as part of the build.
- Three asset/document contracts passed.
- Eight Playwright browser tests passed against the production server.
- Browser coverage: hero finishes, model details, preferred-model carry-over, dialogs, focus restoration, support FAQ links, legal panels, mobile navigation, full image decoding, new visit guide CTA, normal/reduced scroll motion.
- Layout widths 390, 768, 1024, 1440 and 1920 fit without horizontal overflow.
- All image assets decode and the production browser check reported no JavaScript console errors.
- Desktop/mobile full-page screenshots visually reviewed.

## Design changes
Self-hosted Manrope typography, 1200px content width, consistent 72–120px section rhythm, more balanced photo proportions, quieter controls, editorial content columns, three-step visit journey, two-column FAQs and a spacious footer.
Motion includes staggered reveals, photo hover, finish crossfades, reading progress and capped 32px landscape parallax. Reduced motion is respected.

## Evidence
- design/qa-desktop.png
- design/qa-mobile.png
- docs/DESIGN_REFINEMENT.md

## Remaining business setup
Photos and models remain generated concepts. Actual manufacturer details, booking contact, showroom details and production legal copy await input. No enquiry delivery, personal-data storage or public deployment is configured. The user's later design-refinement request supersedes exact replication of the initial image.

## Latest: full-width header and responsive sections
- Production build and strict TypeScript passed.
- All three asset contracts passed.
- All ten browser tests passed against production.
- Full-width sticky header, backgrounds and semantic section boundaries verified at 19 widths, 320–2560px.
- No horizontal page overflow or clipped headings/body text at those widths.
- Landscape mobile menu tested at 667x375: fits viewport and closes with Escape.
- Full-page desktop/mobile and scrolled 1920px header screenshots visually inspected.

## Vercel deployment output directory
- Vercel build failed with `NEXT_OUTPUT_DIR_MISSING` because `next.config.ts` set `distDir: ".next-build"` while Vercel expects `.next`.
- `distDir` is now `process.env.VERCEL ? ".next" : ".next-build"`, so local builds keep `.next-build` isolation and Vercel builds emit `.next`.
- Verified: `npm run typecheck` passed; `VERCEL=1 npm run build` created `.next` (`.next-build` absent); plain `npm run build` created `.next-build`; `npm test` passed 3/3.

## Mobile lifestyle fix verification
Production build and TypeScript passed. All 11 browser tests passed, including a new 320/390/600/700px test verifying the full photo aspect ratio, contain fit, no image transform, and text below the photo. The 390px section screenshot was visually inspected: rider, scooter, wheels and mirrors are visible.
