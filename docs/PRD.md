# Product requirements
## Overview and problem
VOLT is an electric motor scooter dealership marketing website. Visitors need to understand the range, compare riding styles and find a showroom or test ride contact. It is not an ecommerce shop.
## Users and goals
Commuters and first-time electric scooter buyers. Primary goal: encourage an informed showroom visit; secondary goal: answer charging and support questions.
## User stories and scope
- Discover three scooter concepts and open model details, then select that model in the enquiry preview.
- Understand electric riding benefits and lifestyle positioning.
- Change the hero finish, use mobile navigation and expand FAQs with keyboard or pointer.
- Open a truthful test-ride information dialog.
Required section order: header, hero, trust strip, range, benefits, full-width lifestyle, showroom, three-step visit journey, FAQ, final CTA, complete footer.
## Acceptance criteria
Use the original image as brand context, with the user-authorized premium refinements described in docs/DESIGN_REFINEMENT.md. Preserve the scooter hero and functional finish controls. Preserve roomy FAQ rows and four-column footer. Website content is real HTML, not a full-page screenshot. Mobile must reflow without horizontal overflow.
## Non-goals
No cart, payments, accounts, admin, invented specifications, fake reviews, or automatic enquiry delivery.
## Metrics
Before launch: build/typecheck pass, links and dialogs work, keyboard interaction works, no mobile horizontal scroll. After approved integration: consider test-ride enquiry conversion; no analytics installed now.
## Constraints and assumptions
Next.js + TypeScript as requested. VOLT is a placeholder brand. Existing generated scooter imagery is illustrative. Raster comparison cannot honestly guarantee 0% difference across fonts, browsers and breakpoints.
## Open business decisions
Actual brand/logo, model identities/specs, showroom address/hours, phone/email, WhatsApp or booking destination, social URLs, approved benefit claims, legal policies.
## Definition of done
Implementation and documentation delivered; production launch requires business details, approved copy, extracted/source photography and visual sign-off.
