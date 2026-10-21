# VOLT electric scooter website
Next.js + TypeScript marketing website based on the approved generated design.
## Run
Requires Node.js 20.9+ and npm.
```sh
npm install
npm run dev
```
Open http://127.0.0.1:3000.
## Structure
Individual sections: src/components/sections/. Content and image records: src/content/site.ts. Theme: src/styles/tokens.css. Standalone photos: public/images/.

Hero finishes, model details, preferred-model selection, mobile navigation, FAQs and dialogs work interactively.

## Verify
```sh
npm run typecheck
npm test
npm run build
npm start
# In a second terminal while the server is running:
npm run test:e2e
```
## Source of truth
Start at AGENTS.md and docs/PRD.md. See docs/DESIGN_SYSTEM.md for theme and layout rules. The eight blueprint core documents plus UX/API/validation notes are in docs/.
Approved visual: design/approved-homepage.png. Original methodology: design/The_Vibe_Coding_Blueprint.pdf.
## Status
Working frontend scaffold; booking/contact, social destinations, actual model specifications and production legal content await dealership details. No enquiries are transmitted. No public deployment performed.
See docs/VALIDATION.md for verification and known fidelity limits.
