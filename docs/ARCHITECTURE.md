# Architecture
## Stack and rendering
Next.js App Router, React, strict TypeScript and CSS tokens. Homepage composition is a server component. Individual section files live in src/components/sections. Header and Hero are client components for mobile navigation and finish selection; other sections render on the server.

## Structure
- src/app: route, layout, metadata, favicon and global styling.
- src/components/sections: header, hero, range, benefits, lifestyle, showroom, journey, faq, final-cta, footer.
- src/components/ui/brand.tsx: shared coded wordmark.
- src/components/icon.tsx: outline SVG icon system.
- src/components/site-interactions.tsx: disclosure deep links, model/legal/enquiry dialogs and scroll reveals.
- src/content/site.ts: typed model, finish, FAQ and footer records.
- public/images: nine individual photo assets.
- design: reference, source mockups and QA evidence.
- tests/e2e: browser interaction tests.
- docs: requirements, design and validation records.

## Interaction flow
Finish button -> React selection state -> crossfade between transparent product images; accessible pressed state and announcement.
Model link -> model-specific photo and content dialog -> test ride action -> enquiry preview with chosen model selected.
Mobile menu -> anchor navigation -> menu closes.
Charging/service footer link -> native FAQ opens and scrolls into view.
Booking/legal links -> native dialog. Close button, Escape and backdrop dismissal supported.

## Data and services
Typed local content feeds the components. No database, CMS, account system, API writes, real enquiry delivery or analytics is configured.
All content can be edited in src/content/site.ts; theme is in src/styles/tokens.css. No external image service or fonts are required at runtime.

## Performance
Responsive next/image assets, hero image preload, lazy loading below fold. All copy remains server-rendered HTML. Reduced motion is respected.
## Hosting
Local project at D:/office work/volt-scooter-website. No public deployment performed.

## Premium refinement
Manrope Variable is bundled locally. A three-step visit journey introduces useful next actions. Scroll progress and capped landscape parallax are managed in SiteInteractions through one animation frame per scroll frame, with reduced-motion support. The sticky header uses the progress custom property.
