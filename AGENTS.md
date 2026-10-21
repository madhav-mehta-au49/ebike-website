# VOLT project instructions
Before changing the project, read docs/PRD.md, docs/DESIGN_SYSTEM.md, docs/ARCHITECTURE.md and the relevant supporting docs.
Use docs/DESIGN_REFINEMENT.md for the latest user-authorized premium direction. The original design/approved-homepage.png is brand context; exact replication was superseded by the request to improve layout, spacing, content and animation.
This is an electric MOTOR SCOOTER marketing website. Do not introduce ecommerce, authentication, a database or invented specifications.
Use Next.js App Router + strict TypeScript. Keep content typed, server-rendered sections and minimal client interactivity.
Validate with npm run typecheck, npm test and npm run build. Record actual results in docs/VALIDATION.md. Do not claim pixel identity without measurement.
Keep changes in this repository. Never overwrite other D:/office work projects.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
