

## Technical SEO Clean-Up Plan

### Issues Found

1. **Canonical tags**: 9 pages lack explicit `canonical` props (Index, ShowerRepairs, BalconyRepairs, Blog, FAQ, Contact, Strata, PreventativeMaintenance, TermsOfService). They fall back to `window.location.pathname` which works client-side but is fragile and could produce wrong canonicals if query params or trailing slashes appear.

2. **index.html has a hardcoded canonical** pointing to homepage (`https://sydneysealed.com.au/`). Since react-helmet-async replaces tags, this should be fine for inner pages, but the hardcoded `<link rel="canonical">` in index.html could cause issues if Helmet doesn't override it properly on some crawlers (especially those that don't execute JS).

3. **Sitemap is incomplete**:
   - Missing: `/preventative-maintenance`, `/about` is present but `/terms-of-service` should be excluded (noindex), `/contact` is present
   - Missing many balcony suburb pages (only 10 of 50+ suburbs have balcony entries)
   - Missing: `/preventative-maintenance`

4. **robots.txt**: Generally fine but has unnecessary `Crawl-delay` directives and `Host` directive (not standard). Otherwise clean.

5. **NotFound page**: Missing SEOHead with `noindex` — crawlers could index 404 pages.

6. **OG image in index.html**: Uses a temporary Google Storage signed URL that will expire. Should use a permanent URL.

7. **SearchAction schema** in index.html references `?q=` search on `/blog` but the blog page doesn't actually support search — misleading structured data.

8. **`alt` text on images**: Blog listing images use `post.title` as alt (acceptable). Header/Footer logos have proper alt. Blog post content images would need checking but are inline in blog data.

9. **Duplicate meta tags**: index.html has hardcoded OG/Twitter title and description that duplicate what Helmet injects. These should be removed to avoid double tags.

---

### Implementation Plan

**1. Add explicit canonical to all pages (~9 files)**

Add `canonical="https://sydneysealed.com.au/..."` prop to every `<SEOHead>` call that's missing it:
- `Index.tsx` → `canonical="https://sydneysealed.com.au/"`
- `ShowerRepairs.tsx` → `canonical="https://sydneysealed.com.au/services/shower-repairs"`
- `BalconyRepairs.tsx` → `canonical="https://sydneysealed.com.au/services/balcony-repairs"`
- `Blog.tsx` → `canonical="https://sydneysealed.com.au/blog"`
- `FAQ.tsx` → `canonical="https://sydneysealed.com.au/faq"`
- `Contact.tsx` → `canonical="https://sydneysealed.com.au/contact"`
- `Strata.tsx` → `canonical="https://sydneysealed.com.au/strata"`
- `PreventativeMaintenance.tsx` → `canonical="https://sydneysealed.com.au/preventative-maintenance"`
- `TermsOfService.tsx` → `canonical="https://sydneysealed.com.au/terms-of-service"`

**2. Clean up index.html**

- Remove hardcoded `<link rel="canonical">`, `<link rel="alternate" hreflang>`, duplicate OG/Twitter title/description tags (lines 20-22, 97-100). Let Helmet handle these per-page.
- Remove the SearchAction schema (no actual search exists on the site).
- Replace the expiring Google Storage OG image URL with `/og-image.jpg` (relative, resolved by browser).

**3. Add SEOHead to NotFound page**

Add `<SEOHead title="Page Not Found" description="..." noindex={true} />` to prevent indexing of 404 pages.

**4. Rebuild sitemap.xml**

- Add missing page: `/preventative-maintenance`
- Add all 50+ suburb balcony repair pages (currently only 10 are listed; shower pages look complete)
- Keep `/terms-of-service` out (noindex page)
- Verify all URLs match the actual route paths

**5. Clean up robots.txt**

- Remove `Crawl-delay` directives (Google ignores them; Bing handles them but they're unnecessary)
- Remove non-standard `Host` directive
- Keep the rest as-is

**6. Replace expiring OG image URL**

In `index.html`, swap the long signed Google Storage URL for `https://sydneysealed.com.au/og-image.jpg` in both og:image and twitter:image tags.

---

### Files Changed

- `src/pages/Index.tsx` — add canonical
- `src/pages/ShowerRepairs.tsx` — add canonical
- `src/pages/BalconyRepairs.tsx` — add canonical
- `src/pages/Blog.tsx` — add canonical
- `src/pages/FAQ.tsx` — add canonical
- `src/pages/Contact.tsx` — add canonical
- `src/pages/Strata.tsx` — add canonical
- `src/pages/PreventativeMaintenance.tsx` — add canonical
- `src/pages/TermsOfService.tsx` — add canonical
- `src/pages/NotFound.tsx` — add SEOHead with noindex
- `index.html` — remove duplicates, fix OG image, remove SearchAction
- `public/sitemap.xml` — add missing pages and all suburb balcony URLs
- `public/robots.txt` — simplify

### What Will Still Need Your Input

- **OG image**: You should upload a permanent `og-image.jpg` to the `public/` folder if one doesn't already exist. The current one references a signed URL that will expire.
- **Phone number**: `+61400000000` is a placeholder across the site (schema, CTAButton). Replace with your real number.
- **Social media URLs**: The schema references facebook/instagram/linkedin URLs — confirm these are correct or update them.
- **ABN**: The Terms of Service page has "ABN XX XXX XXX XXX" as a placeholder.

