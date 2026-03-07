

# Complete Topical Authority SEO System

This plan implements a full local SEO content system across six parts: a pillar page, cluster blog strategy, internal linking, enhanced schema, 50 suburb pages, and PAA snippet targeting.

---

## What Already Exists

- 6 blog posts with full content, FAQs, and internal links
- 20 suburb landing pages in `src/lib/suburbs.ts`
- Service pages: Shower Repairs, Balcony Repairs, Strata
- Schema components: LocalBusiness, Service, FAQ, SEOHead, Breadcrumbs
- BlogPost template with Article schema and FAQ accordion

---

## Part 1 — Pillar Authority Page

**New file: `src/pages/CompleteGuide.tsx`**

A 2500+ word long-form guide titled "Complete Guide to Leaking Shower and Balcony Repairs in Sydney". Structured with the same pattern as existing blog posts but as a standalone page (not a blog entry) to serve as the pillar content hub.

Sections: Causes of Leaks, Warning Signs, Waterproofing Systems Explained, Shower Repair Methods, Balcony Repair Methods, Grout Deterioration, Waterproof Membranes, Structural Damage Risks, Professional Inspection Process, Repair Options Compared, Preventative Maintenance, Service Areas.

Each section includes contextual internal links to service pages (`/services/shower-repairs`, `/services/balcony-repairs`, `/strata`), blog posts, and suburb pages.

**New route in `src/App.tsx`:**
```
/guides/complete-guide-leak-repairs-sydney
```

---

## Part 2 — Cluster Content Strategy (14 New Blog Posts)

Add 14 new articles to `src/data/blog-posts.ts` to reach 20 total. Each follows the existing `BlogPostContent` structure with full 1500-2500 word content, FAQs, and internal links.

New articles covering the remaining cluster topics:

| # | Slug | Target Keyword | Word Count |
|---|------|---------------|------------|
| 7 | `how-to-fix-leaking-balcony-tiles` | leaking balcony tiles repair | 1800 |
| 8 | `waterproof-membrane-failure` | waterproof membrane failure signs | 2000 |
| 9 | `balcony-waterproofing-systems` | balcony waterproofing systems explained | 2000 |
| 10 | `causes-of-cracked-grout` | what causes grout to crack | 1500 |
| 11 | `shower-waterproofing-sydney` | shower waterproofing Sydney | 2000 |
| 12 | `balcony-leak-detection` | balcony leak detection methods | 1800 |
| 13 | `shower-membrane-repair` | shower membrane repair | 1800 |
| 14 | `tiled-shower-sealing` | tiled shower sealing Sydney | 1500 |
| 15 | `tiled-balcony-sealing` | tiled balcony sealing | 1500 |
| 16 | `balcony-membrane-repair` | balcony membrane repair Sydney | 1800 |
| 17 | `epoxy-regrouting-guide` | epoxy regrouting Sydney | 1800 |
| 18 | `grout-replacement-sydney` | grout replacement cost Sydney | 1500 |
| 19 | `tile-sealing-services-sydney` | tile sealing services Sydney | 1500 |
| 20 | `balcony-waterproofing-cost` | balcony waterproofing cost Sydney | 1500 |

Each article links to: pillar guide page, relevant service pages, 2-3 related blog posts, and 2-3 suburb pages.

**Update `src/pages/Blog.tsx`:** Add all 20 posts to the blog listing grid.

---

## Part 3 — Internal Linking Architecture

Built into all new content. The linking structure:

```text
Home (/)
├── Pillar Guide (/guides/complete-guide-leak-repairs-sydney)
│   ├── links to all service pages
│   ├── links to all cluster blogs
│   └── links to suburb pages
├── Service Pages
│   ├── /services/shower-repairs → pillar, blogs, suburbs
│   ├── /services/balcony-repairs → pillar, blogs, suburbs
│   └── /strata → pillar, blogs, suburbs
├── Cluster Blog Posts (/blog/:slug)
│   ├── link to pillar guide
│   ├── link to relevant service page(s)
│   ├── link to 2-3 related blogs
│   └── link to 2-3 suburb pages
└── Suburb Pages (/services/:suburb)
    ├── link to shower service page
    ├── link to balcony service page
    └── link to pillar guide
```

Anchor text uses descriptive, keyword-rich phrases (e.g., "leaking shower repairs in Parramatta" not "click here").

**Update `src/pages/SuburbPage.tsx`:** Add links to pillar guide and blog posts in the content area.

---

## Part 4 — Enhanced Schema Markup

**New component: `src/components/seo/ReviewSchema.tsx`**

Adds AggregateRating and Review JSON-LD schema. Used on service pages and the pillar guide.

**Update existing schema usage:**
- Add `ReviewSchema` to service pages (ShowerRepairs, BalconyRepairs)
- Add `ServiceSchema` to the pillar guide page
- Ensure `LocalBusinessSchema` is on the homepage
- All suburb pages already have `ServiceSchema` and `LocalBusinessSchema` via existing patterns

---

## Part 5 — Expand to 50 Suburb Pages

**Update `src/lib/suburbs.ts`:** Add 30 new suburbs to reach 50 total.

New suburbs to add:
Dee Why, Brookvale, Neutral Bay, Kirribilli, Leichhardt, Ashfield, Concord, Drummoyne, Five Dock, Gladesville, Lane Cove, Lindfield, Turramurra, Wahroonga, Beecroft, Carlingford, Baulkham Hills, Kellyville, Rouse Hill, Campbelltown, Camden, Kogarah, Rockdale, Sans Souci, Miranda, Caringbah, Maroubra, Coogee, Double Bay, Surry Hills.

Each with region, postcode, and unique localised description. All automatically served by the existing `SuburbPage.tsx` component and `/services/:suburb` route.

---

## Part 6 — PAA Snippet Targeting

Built into the FAQ sections of every new blog post and the pillar guide. The pillar guide will include a comprehensive "People Also Ask" section with 20+ optimised Q&A pairs covering:

- How do you fix a leaking shower without removing tiles?
- Why is my balcony leaking?
- How long does shower regrouting last?
- Is balcony waterproofing expensive?
- What causes grout to crack in showers?
- How do I know if my waterproof membrane has failed?
- Can you waterproof over existing tiles?
- How much does it cost to fix a leaking shower in Sydney?
- Do I need council approval for balcony waterproofing?
- What is the best grout for showers?
- How long does balcony waterproofing last?
- Is epoxy grout better than cement grout?
- What are the signs of a leaking balcony?
- Can a leaking shower cause structural damage?
- How often should shower grout be replaced?
- What is a waterproof membrane?
- How do you test for a balcony leak?
- What Australian Standards apply to bathroom waterproofing?
- Is shower regrouting worth it?
- What is the difference between sealing and waterproofing?

Each answer is 40-80 words, authoritative, and structured for snippet extraction.

---

## Files Changed

| File | Action |
|------|--------|
| `src/pages/CompleteGuide.tsx` | Create — pillar authority page |
| `src/data/blog-posts.ts` | Update — add 14 new blog posts |
| `src/pages/Blog.tsx` | Update — list all 20 posts |
| `src/lib/suburbs.ts` | Update — add 30 new suburbs |
| `src/pages/SuburbPage.tsx` | Update — add internal links to pillar & blogs |
| `src/components/seo/ReviewSchema.tsx` | Create — review/rating schema component |
| `src/components/seo/index.ts` | Update — export ReviewSchema |
| `src/App.tsx` | Update — add pillar guide route |

---

## Implementation Note

Due to the volume of content (14 full blog articles + pillar page), implementation will be done in batches. The blog posts data file will grow substantially. All content follows existing component patterns and conventions.

