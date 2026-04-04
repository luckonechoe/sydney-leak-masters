

## Blog & Content Architecture Improvements

### Current State

The blog system is already strong: 20 long-form posts (2,587 lines of content data), each with FAQSchema, Article schema, related posts, internal links to suburb and service pages, and keyword-rich metadata. The BlogPost template renders FAQ accordions, related articles, breadcrumbs, and CTAs. The pillar Complete Guide page (521 lines) anchors the hub.

The main gaps are structural — the blog index page itself, category filtering, and cross-linking patterns that would make the content hub more useful for both search engines and LLMs.

---

### Changes

#### 1. Blog Index Page (`Blog.tsx`) — Structural Upgrade

- **Add `keywords` prop** to SEOHead: `leaking shower repairs sydney, balcony waterproofing, epoxy grout, shower leak repair guide`
- **Improve H1** from "Practical Advice for Sydney Homeowners" to "Shower & Balcony Leak Repair Guides — Sydney Sealed" (keyword-richer, still natural)
- **Add category filter tabs** at the top of the post grid — allow filtering by category (Shower Repairs, Balcony Repairs, Education, Strata, Tips). Uses existing `category` field from blog data. Static tabs, no routing change — just client-side filter.
- **Add a short intro paragraph** below the hero that summarises what the blog covers and links to the Complete Guide — gives LLMs a clear entity summary to extract
- **Add a "Topics We Cover" section** after the grid — a brief keyword-rich section listing the core topic areas with links to the best post for each (e.g. "Epoxy Grout" → epoxy-grout-vs-cement-grout, "Balcony Costs" → balcony-waterproofing-cost). Improves crawl depth and GEO entity mapping.

#### 2. Blog Post Template (`BlogPost.tsx`) — Minor Enhancements

- **Add a "Key Takeaways" summary box** at the top of each article (generated from the first FAQ answers or a new `keyTakeaways` field). This gives LLMs a clear extractable summary and improves user scanning. Rendered as a styled callout box before the first section.
- **Add a Table of Contents** (auto-generated from section headings) as a sidebar or top box on desktop. Improves scannability, creates anchor links, and gives Google sitelinks potential.
- **Add `dateModified` to Article schema** using a new optional field (default to `date` if not set)
- **Improve CTA at bottom** — add a contextual line referencing the article topic (e.g. "Noticed signs of a shower leak?" for shower-related posts) using the post's `category` to select the right CTA copy.

#### 3. Blog Data (`blog-posts.ts`) — Add `keyTakeaways` Field

- Add an optional `keyTakeaways: string[]` field to `BlogPostContent` interface
- Add 3-4 key takeaways to each of the 20 posts — concise, factual statements that LLMs can extract and cite. Example for "Signs of Shower Leak":
  - "Musty smells, peeling paint, and ceiling stains are early indicators of a hidden shower leak"
  - "Most shower leaks can be repaired without removing tiles using epoxy regrouting"
  - "Untreated shower leaks can cause structural damage costing $5,000–$20,000+"
  - "Professional epoxy grout repairs start from $500–$900 with a 10-year warranty"

#### 4. Internal Link Improvements in Blog Content

- **Add cross-links between related posts** within article body content where natural (e.g. the "causes of cracked grout" post should link to "epoxy grout vs cement grout" and "shower membrane repair")
- **Ensure every post links to at least one service page** and the Complete Guide
- **Ensure suburb links use the correct SEO routes** (`/leaking-shower-repairs/:suburb` or `/leaking-balcony-repairs/:suburb`)

---

### Files to Edit

1. `src/pages/Blog.tsx` — keywords, H1, category filters, intro paragraph, topics section
2. `src/pages/BlogPost.tsx` — key takeaways box, table of contents, contextual CTA
3. `src/data/blog-posts.ts` — add `keyTakeaways` field to interface + all 20 posts, audit internal links

### What's Preserved

- All existing SEOHead metadata (titles, descriptions, canonicals)
- All FAQSchema and Article schema markup
- All existing blog content, sections, FAQs
- Related posts system
- Design system, animations, layout

---

### Summary

**What's improved:**
- Blog index becomes a proper content hub with category filtering and topic mapping
- Every article gets a scannable key takeaways box (LLM/GEO gold)
- Table of contents improves time-on-page and sitelinks potential
- Category-aware CTAs improve conversion relevance
- Topics section on blog index improves internal linking and entity signals

**Top 5 pages/posts for strongest SEO impact:**
1. **Blog index** (`/blog`) — hub page, distributes authority to all posts
2. **Signs of Shower Leak** — targets highest-volume query cluster
3. **Epoxy Grout vs Cement Grout** — unique comparison content, high GEO value
4. **Balcony Waterproofing Cost** — high commercial intent keyword
5. **Complete Guide** (`/guides/complete-guide-leak-repairs-sydney`) — pillar authority page

**New content opportunities to add next:**
- "Leaking Shower Repair Cost Sydney" dedicated post (highest commercial intent query not yet fully covered as standalone)
- "Can a Leaking Shower Be Fixed Without Removing Tiles?" (question-format post for featured snippets)
- "Shower Waterproofing Standards NSW" (regulatory/education post for authority)
- "Balcony Leak Diagnosis: Step-by-Step" (practical how-to for GEO)
- Case study / before-after gallery page (visual trust + unique content)

