## Plan: llms.txt + Phone Number Update

### 1. Add `public/llms.txt` (served at root, next to robots.txt)

Use the uploaded llms.txt as the base, with these enhancements tailored to our actual site:

- **Add a "Markdown Mirrors / Plain-Text Sources" section** listing canonical `.md` style endpoints AI crawlers should look at — pointed at the live HTML pages for now (since SPA has no separate .md endpoints yet), each described as the authoritative source for that topic. This makes the file fully aligned with the "markdown mirrors" pattern even before we ship physical .md files.
- **Replace the Suburbs section** with the actual current suburb list from `src/lib/suburbs.ts` (50+ suburbs, grouped by region) so each generated suburb URL is discoverable: e.g. `https://sydneysealed.com.au/leaking-shower-repairs/{slug}`.
- **Add a "Key Guides & Blog Posts" section** listing every post in `public/sitemap.xml` (epoxy regrouting, signs of shower leak, balcony leak detection, waterproof membrane failure, etc.) with a one-line description each — gives LLMs a content map.
- **Add a "Schema / Structured Data" note** confirming LocalBusiness, Service, FAQ, HowTo, Review, and Breadcrumb JSON-LD are present on relevant pages.
- **Update Contact block** with real phone `0466 532 444` (`tel:+61466532444`).
- **Update "Publishing Notes"** — remove the "0400 000 000 placeholder" reminder (no longer a placeholder), confirm sydneysealed.com.au as production.
- Add `# llms.txt` reference to `public/robots.txt` so crawlers can find it (`Llms: https://sydneysealed.com.au/llms.txt` style hint as a comment + link).

### 2. Phone number replacement: `0400 000 000` → `0466 532 444`

Replace in these files (display + tel: links, both formatted and E.164):

| File | Change |
|---|---|
| `src/components/CTAButton.tsx` | `PHONE_NUMBER = "0466 532 444"`, `PHONE_HREF = "tel:+61466532444"` |
| `index.html` | JSON-LD `"telephone": "+61466532444"` |
| `src/components/seo/LocalBusinessSchema.tsx` | default `telephone = "+61466532444"` |
| `src/pages/FAQ.tsx` | 4 visible mentions of `0400 000 000` → `0466 532 444` |
| `src/pages/Strata.tsx` | `tel:+61466532444` + `Strata Priority Line: 0466 532 444` |
| `src/pages/Contact.tsx` | placeholder text `0466 532 444` |
| `src/components/QuoteForm.tsx` | placeholder text `0466 532 444` |

### 3. Verification pass

After edits, grep the repo for any remaining `0400 000 000`, `400000000`, or `tel:+61400000000` and fix any stragglers.

### Out of scope (not requested)

- Generating actual `.md` mirror endpoints for every route (would require build-time pre-render or edge function — flag as separate follow-up).
- Domain DNS/connection setup (handled by user in Lovable settings when ready).
