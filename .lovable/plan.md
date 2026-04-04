

## Homepage SEO, GEO, Trust & Conversion Improvements

### What's Changing

Rewriting and restructuring the homepage content to be stronger for target keywords, local SEO, LLM/GEO discoverability, trust, and conversions — while preserving the existing design system, canonical tags, schema markup, and page structure.

---

### 1. Hero Section Copy Rewrite

**Current**: "Stop Leaks Permanently. Without Re-Tiling." + generic subheading

**New**:
- H1: `Leaking Shower & Balcony Repairs Sydney — Fixed Properly, Without Removing Tiles`
- Subheading: `Sydney Sealed specialises in permanent leak repairs using premium epoxy grout systems. No tile removal. No unnecessary demolition. Just expert workmanship backed by a 10-year written warranty.`

This naturally includes the top target keywords (leaking shower repairs sydney, balcony leak repairs, epoxy) while remaining readable and non-spammy.

### 2. Strengthen Trust Points in Hero

Replace generic trust points with more specific, credible ones:
- `10-Year Written Warranty` (was just "10 Year Warranty")
- `No Tile Removal Required` (was "No Tile Removal")
- `Free On-Site Inspections` (was "Fast Response Times" — more actionable)
- `Premium Epoxy Grout Systems` (unchanged intent, clearer language)

### 3. Benefits List Rewrite

Replace generic benefits with keyword-rich, trust-building points:
- "Permanent shower leak repairs — no re-tiling needed"
- "Balcony waterproofing and spalling prevention"
- "Premium epoxy regrouting across Greater Sydney"
- "Transparent pricing with no hidden costs"
- "Strata-approved methods for property managers"
- "Backed by a 10-year written warranty on every job"

### 4. Service Section Copy Improvement

Update the services section heading and descriptions:
- H2: `Sydney's Shower & Balcony Leak Repair Specialists`
- Subheading: `We fix leaking showers and balconies across Sydney using proven epoxy grout and waterproofing systems — without removing your tiles.`

### 5. Add Homepage FAQ Section (New)

Add a dedicated FAQ section with `FAQSchema` structured data. 6 questions targeting high-intent search queries and LLM/GEO discoverability:

1. **How do you fix a leaking shower without removing tiles?** — explains epoxy grout process
2. **How much does a leaking shower repair cost in Sydney?** — price range from calculator
3. **What areas in Sydney do you service?** — mentions key suburbs/regions with internal links
4. **Do you offer a warranty on leak repairs?** — 10-year written warranty details
5. **Can you repair a leaking balcony without replacing the membrane?** — balcony service explanation
6. **How long does a shower or balcony leak repair take?** — 3-6 hours typical timeframe

Each answer will be 2-3 sentences — factual, helpful, concise. This section uses the existing `Accordion` component and `FAQSchema` for structured data.

### 6. Add Internal Linking Section (New)

Add a "Service Areas" section before the final CTA with links to:
- 6-8 key suburb pages (Bondi, Parramatta, Manly, Chatswood, etc.)
- Both service pages
- The complete guide
- The suburbs index page

This improves crawl depth, distributes link equity, and signals geographic relevance.

### 7. Section Heading Improvements

| Section | Current H2 | New H2 |
|---------|-----------|--------|
| Services | Our Repair Services | Sydney's Shower & Balcony Leak Repair Specialists |
| Trust Pillars | Why Sydney Trusts Us | *(no change — already strong)* |
| Process | How It Works | How We Fix Your Leak |
| Benefits | Why Choose Sydney Sealed? | *(no change)* |
| Testimonials | What Our Clients Say | What Sydney Homeowners Say |
| Quote Form | Get Your Free Quote | Request Your Free Leak Inspection |
| Final CTA | Ready to Stop Your Leak? | Stop Your Leak — Get a Free Quote Today |

### 8. Remove "100% Success Rate" Stat

The "Performance Metrics" section claims "100% Success Rate" which sounds like a fake stat. Replace with more credible metrics:
- `3–6 hrs` / Average Repair Time
- `48 hrs` / Full Cure Time  
- `10 yrs` / Written Warranty
- `50+` / Sydney Suburbs Serviced

### 9. Remove "500+" Floating Badge

The floating hero badge saying "500+ Repairs Completed" is an unverifiable claim. Replace with "Sydney-Wide Service" or remove it.

### 10. Update SEOHead Keywords

Add a `keywords` prop to the homepage SEOHead with target terms:
`leaking shower repairs sydney, shower leak repair, balcony leak repairs sydney, epoxy regrouting sydney, waterproof sealing sydney, shower waterproofing, balcony waterproofing sydney`

---

### Files to Edit

1. **`src/pages/Index.tsx`** — hero copy, benefits, section headings, new FAQ section, new service areas section, updated stats, SEOHead keywords
2. **`src/components/ServiceCard.tsx`** — no changes (content is already solid)
3. **`src/components/TrustPillars.tsx`** — no changes (already strong)
4. **`src/components/ProcessTimeline.tsx`** — no changes

### What's Preserved
- All canonical URLs, schema markup, and existing SEOHead props
- Design system, layout structure, animations
- TrustPillars, ProcessTimeline, Testimonials, QuoteForm components
- Footer, Header, WarrantyBadge components

---

### Summary of SEO/GEO Improvements

- **Keyword targeting**: H1 and key headings now naturally include "leaking shower repairs sydney," "balcony leak repairs," and "epoxy grout"
- **FAQ schema**: 6 high-intent questions feed Google featured snippets and LLM answer engines
- **Internal linking**: New service areas section distributes authority to suburb and service pages
- **Trust signals**: Removed unverifiable claims (100% success rate, 500+ repairs), replaced with credible specifics
- **GEO/LLM**: FAQ answers are written as clear, factual statements that LLMs can extract and cite
- **Local SEO**: Suburb names, "Sydney" mentions, and geographic context woven naturally throughout

### What You Should Add Later
- **Real hero image**: Replace the placeholder with an actual before/after or job-in-progress photo
- **Real phone number**: Replace `0400 000 000` placeholder
- **Google review count**: Once you have real Google reviews, add the count and rating
- **Real job stats**: Replace generic stats with your actual numbers when available
- **Before/after gallery**: Would significantly boost trust and conversions

