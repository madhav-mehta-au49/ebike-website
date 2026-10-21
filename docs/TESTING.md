# Testing
## Commands
- npm run typecheck
- npm test
- npm run build
- npm run dev
- npm run test:e2e (while local server is running; uses installed Chrome via Playwright channel chrome)

## Meaningful checks
Asset contracts: all referenced standalone images exist, no former screenshot asset is rendered, hero files have alpha channels.
Browser regression tests: finish state/image changes; model details and enquiry model carry-over; dialog Escape dismissal/focus restoration; FAQ support deep links; legal dialogs; all images decode; desktop/mobile overflow; mobile menu.
Desktop viewport: 1440x1000. Mobile: 390x844. Reduced motion requested for repeatable screenshots.
Source of truth: design/approved-homepage.png. Screenshots: design/qa-desktop.png and design/qa-mobile.png.

## Scope
No booking backend exists; tests verify truthful preview behavior, not enquiry delivery. No lint tool configured. Visual fidelity is assessed by review; no zero-difference score claimed.
See VALIDATION.md for actual results.

Additional checks: visit journey CTA, normal/reduced scroll motion, viewport widths 768/1024/1920.

## Full-width responsive regression
The suite now contains ten browser tests. A 19-width matrix verifies no horizontal overflow or clipped headings/body text and checks every outer section and sticky header reaches both viewport edges.
Widths: 320, 360, 375, 390, 414, 540, 600, 700, 701, 744, 768, 820, 900, 1024, 1100, 1280, 1440, 1920, 2560.
A 667x375 landscape phone check verifies dropdown width/height and Escape dismissal.
