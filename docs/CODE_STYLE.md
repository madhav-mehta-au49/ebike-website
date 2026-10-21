# Code style
Use strict TypeScript, named section exports and small components. PascalCase component names, camelCase variables, kebab-case filenames. Prefer server components; use client code only for browser behavior.
Content belongs in src/content; visual primitives in styles; no database calls in UI. Use native elements before adding libraries.
Run npm run typecheck, npm test, npm run build. No linter or formatter dependency is included yet; do not claim a lint pass.
Comments should explain tradeoffs, especially asset crops, rather than repeat code.
