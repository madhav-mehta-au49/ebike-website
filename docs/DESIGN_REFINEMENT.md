# Premium design refinement
## User direction
The user requested a more premium, natural website because the first implementation felt stretched. This supersedes exact reproduction of the original raster reference; that image remains archived as the initial concept.

## Layout
Bound content to 1440px with readable text columns and consistent spacing.
Use local Manrope Variable for a coherent medium-weight editorial typography system.
Keep the graphite scooter, olive/sage palette, finish controls and standalone photography.
Use softly rounded image frames, quiet pill controls, restrained borders and reduced contrast for secondary information.
Alternate compositions: two-column hero, editorial three-card range, dark perspective panel, cinematic landscape, human-scale showroom, visit journey, two-column FAQ, full-width final invitation, generous footer.

## New useful content
The collection introduction explains the model personalities. Benefits focus on everyday experience without inventing performance figures. A three-step visit journey helps visitors explore, ask questions and arrange a test ride.

## Motion
Staggered 23px scroll reveals, finish crossfades, slow photo hover zoom, subtle arrow motion, sticky navigation reading progress and capped 32px landscape parallax.
One requestAnimationFrame update per scroll frame. Reduced-motion preference disables parallax/transitions and keeps all copy visible.
No automatic carousel, blinking content or scroll hijacking.

## Sources
src/styles/tokens.css: theme.
src/app/globals.css: layout and component styling.
src/components/sections/journey.tsx: visit journey.
src/components/site-interactions.tsx: motion, dialogs, disclosure deep links.

## Full-width responsive correction
The sticky header is a full-width outer surface; .header-inner constrains its contents. Semantic sections also use full-width outer surfaces and independent .container inner content.
Inner width is min(1440px, 100% minus twice the fluid gutter). Gutter is clamp(20px, 4vw, 88px). This preserves readable content while backgrounds cover every screen.
No outer side gaps or maximum width on photo sections. Mobile dropdown spans the header width and is capped by the available dynamic viewport height.

## Mobile lifestyle photo correction
At widths up to 700px, the lifestyle photo is a dedicated 1672:941 media block above the copy. It uses object-fit: contain with no parallax or scale, so the complete rider and scooter remain visible. Heading, CTA and caption follow in a green content panel. Desktop keeps the cinematic overlay treatment.
