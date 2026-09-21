# Tutors Academy Phase 2

## Product Journey
- Add `/find-a-tutor` with a compact product-led introduction and a guided seven-step requirement flow.
- Organize class choices by academic stage, adapt subjects by class, reveal location only for offline learning, support touch-friendly availability and budget controls, and allow multiple learning needs.
- Keep selected preferences visible through clear progress and a review summary before showing results.

## Tutor Discovery
- Store a small set of clearly illustrative tutors in a typed data module, ready to replace with real data later.
- Build polished tutor cards, sorting, desktop filters, a mobile filter drawer, clear-filter behavior, and an exact-match empty state.
- Clearly label all tutor details, ratings, fees, verification states, and profiles as demonstration content.

## Profiles and Requests
- Add `/tutors/$tutorId` for a detailed illustrative profile with teaching approach, qualifications, subjects, classes, boards, availability, modes, and indicative pricing.
- Add a frontend-only request dialog with contact details, confirmation, and an explicit preview success state.
- Keep trial/demo actions illustrative and avoid implying a real booking or submission.

## Shared Experience
- Extract and reuse the established navigation, footer, button, and heading language across the homepage and new routes.
- Update homepage and navigation calls-to-action to open `/find-a-tutor` without breaking existing section links.
- Add route-specific SEO metadata for discovery and tutor profiles.

## Verification
- Exercise homepage → guided requirement → results → filters → profile → request → success.
- Check desktop, tablet, and mobile layouts for overflow, touch targets, accessible labels, focus behavior, reduced motion, and runtime errors.

## Out of Scope
No authentication, database, real matching, booking, payments, messaging, or external services.
