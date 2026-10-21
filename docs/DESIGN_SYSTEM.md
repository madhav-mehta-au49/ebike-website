# Design system
## Current authority
The initial visual concept is design/approved-homepage.png. The user's later request authorizes a premium editorial refinement rather than literal raster replication. Read docs/DESIGN_REFINEMENT.md for the latest direction.

## Palette and font
Paper #f8f8f2, ink #1b241c, olive #596a4e, lime #c2ec74, deep green #243329, footer #1c2921. Tokens live in src/styles/tokens.css and design/tokens.json.
Local Manrope Variable, supplied through @fontsource-variable/manrope. No runtime font service needed.
Hero up to 87px/1.03, general headings up to 57px/1.12, body 13–16px with 1.8 line height; medium weights and restrained tracking. Mobile body remains readable at intended viewport size.

## Spacing and proportions
Desktop content max 1440px; desktop side margins at least 56px, mobile 22px. Section rhythm 72–120px. Text columns 300–420px. Image containers use aspect ratios and object-fit, never stretched dimensions.
All section backgrounds and the sticky header span the full viewport. The scenic interlude and final CTA are edge to edge. Model photos have 9px corners. Buttons use pill radius.

## Components
Hero: transparent product, CSS sage circle, coded feature callouts, accessible finish buttons.
Range: three editorial cards, model detail dialogs, contact destination.
Benefits: small icons and readable three-column narratives.
Showroom: bounded image and human guidance copy.
Journey: three steps with useful destination links.
FAQ: two columns on desktop, native disclosures with roomy rows.
Footer: four columns with legal divider; no fabricated social destinations.
Mobile: stacked content, compact sticky menu.

## Accessibility and motion
Semantic headings and landmarks, skip link, native dialog focus handling, visible focus, aria-pressed finish controls, native FAQ keyboard support.
Reduced-motion preference disables entrance transforms, parallax and transition effects.
See docs/DESIGN_REFINEMENT.md for motion limits.

## Image policy
Standalone next/image assets only. No UI screenshot used as website content. Photos are AI-generated recreations, not verified manufacturer product imagery.

## Full-width responsive correction
The sticky header is a full-width outer surface; .header-inner constrains its contents. Semantic sections also use full-width outer surfaces and independent .container inner content.
Inner width is min(1440px, 100% minus twice the fluid gutter). Gutter is clamp(20px, 4vw, 88px). This preserves readable content while backgrounds cover every screen.
No outer side gaps or maximum width on photo sections. Mobile dropdown spans the header width and is capped by the available dynamic viewport height.
