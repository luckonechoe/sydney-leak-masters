

## Service Pages SEO & Conversion Improvement Plan

### Current Assessment

The **Shower Repairs** and **Balcony Repairs** pages are already strong — 800+ and 760+ lines respectively, with symptoms, causes, process, FAQ w/ schema, pricing calculator, epoxy comparison (shower), and service area links. These need targeted improvements, not rewrites.

The **Strata** page is the weakest — it has unverifiable stats (50+ complexes, 500+ units), a poor H1 ("Strata Manager Portal"), no internal links to blog posts or suburb pages, and no service area section.

The **Preventative Maintenance** page is solid but lacks internal links to blog content and suburb pages.

---

### Changes by Page

#### 1. Shower Repairs (`ShowerRepairs.tsx`)

**Minor improvements only — this page is already strong.**

- Add `keywords` prop to SEOHead with target terms
- Add internal links to 2-3 relevant blog posts in a new "Related Guides" callout after the FAQ section (e.g. epoxy vs cement blog, signs of a leaking shower blog)
- Add suburb quick-links section (6-8 key suburbs like Bondi, Parramatta, Manly) similar to what was done on the homepage — linking to `/leaking-shower-repairs/:suburb`
- Add a "When Epoxy Regrouting Isn't Enough" short section after the process section — explaining when tile removal or full renovation may be needed (honesty = trust signal, also targets related queries)
- Cross-link to the Complete Guide page

#### 2. Balcony Repairs (`BalconyRepairs.tsx`)

**Minor improvements only.**

- Add `keywords` prop to SEOHead
- Add internal links to relevant blog posts (balcony spalling blog, strata waterproofing blog)
- Add suburb quick-links section for balcony-specific suburb pages
- Add a "When Sealing Isn't Enough" section — explaining when full membrane replacement is needed (same trust/honesty pattern)
- Cross-link to strata page and Complete Guide

#### 3. Strata (`Strata.tsx`)

**Most significant improvements — this is the weakest page.**

- Rewrite H1 from "Strata Manager Portal" to "Strata Leak Repairs & Waterproofing Sydney"
- Replace unverifiable hero stats (50+ complexes, 500+ units) with credible non-numeric trust points (e.g. "Priority Scheduling", "Volume Pricing", "Full Documentation", "10-Year Warranty")
- Add `keywords` prop to SEOHead
- Add a "Common Strata Leak Scenarios" section with practical, experience-based descriptions of real situations (e.g. "Unit above leaking into unit below", "Multiple balconies in one complex", "Common area corridor water ingress")
- Add internal links to blog posts relevant to strata (strata waterproofing blog, balcony spalling blog)
- Add service areas section with suburb links
- Add 2 more FAQs: "How quickly can you attend an urgent strata leak?" and "Can you coordinate repairs across multiple buildings?"
- Cross-link to both service pages and preventative maintenance

#### 4. Preventative Maintenance (`PreventativeMaintenance.tsx`)

**Minor improvements.**

- Add `keywords` prop to SEOHead
- Add internal links to related blog posts after the FAQ (e.g. maintenance tips blog, epoxy grout longevity blog)
- Add a brief service areas note with link to `/suburbs`
- Cross-link to shower and balcony service pages in the "Who Is This Plan For?" section descriptions

---

### Files to Edit

1. `src/pages/ShowerRepairs.tsx` — keywords, related guides section, suburb links, "when regrouting isn't enough" section
2. `src/pages/BalconyRepairs.tsx` — keywords, related guides section, suburb links, "when sealing isn't enough" section
3. `src/pages/Strata.tsx` — H1 rewrite, remove fake stats, keywords, more FAQs, blog links, suburb links, scenario section
4. `src/pages/PreventativeMaintenance.tsx` — keywords, blog links, suburb link, cross-links

### What's Preserved

- All existing canonical URLs, meta titles, meta descriptions, schema markup, FAQSchema
- All existing section content, layout, animations, components
- Design system, color scheme, component structure

### Post-Implementation Summary

- **Strongest page**: Shower Repairs (most detailed, best keyword coverage, epoxy comparison section is unique differentiator)
- **Most improved**: Strata (from weak portal page to proper local SEO landing page)
- **Supporting content to add next**: Case study / before-after gallery page, real Google review integration, suburb-specific unique content

