

## About, Contact & Trust Architecture Improvements

### Issues Found

**About page:**
- "2,500+ Leaks Fixed" and "98% Customer Satisfaction" are unverifiable stats — look fake
- Testimonials use first-initial surnames (Sarah M., James T.) which feel fabricated
- Story section is strong but the stats bar undermines credibility

**Contact page:**
- H1 is generic ("Contact Us") — wastes keyword opportunity
- No explanation of what happens after submitting the form
- No trust reinforcement near the form (warranty, no-obligation)
- Missing a "What to expect" section explaining the quote process

**Footer / Site-wide:**
- "ABN: XX XXX XXX XXX" is an obvious placeholder — damages trust immediately
- Social links point to "#" — looks unfinished
- Phone number "0400 000 000" is placeholder throughout

---

### Changes

#### 1. About Page (`About.tsx`)

- **Remove stats bar entirely** — the "2,500+ Leaks Fixed" and "98% Customer Satisfaction" numbers are unverifiable and undermine the honest tone. Replace with a simple tagline bar: "Shower & Balcony Leak Repairs · Premium Epoxy Grout · 10-Year Written Warranty · All Sydney Suburbs"
- **Replace testimonials section** with a "What Our Clients Tell Us" section using the same quotes but reframed as paraphrased feedback (e.g. "Clients regularly tell us...") rather than fake-looking attributed quotes with first-initial names. This is more honest if you don't yet have verified reviews.
- **Add a "Who We Work With" section** after the values — listing homeowners, strata managers, property managers, and landlords with a brief line for each. Adds relevance and helps LLMs understand the audience.
- **Add internal links** at the bottom — link to service pages, the complete guide, and the contact page

#### 2. Contact Page (`Contact.tsx`)

- **Improve H1** from "Contact Us" to "Request a Free Leak Inspection" — more actionable, includes keyword
- **Add "What Happens Next" section** below the hero explaining the 3-step process: 1) Submit your details, 2) We review and call you within 24 hours, 3) We arrange a free on-site inspection at a time that suits you
- **Add trust bar** near the form — "No obligation · No pressure · 10-year warranty on all repairs"
- **Add a brief "Tips for your enquiry"** note above the form explaining that photos help speed up the quote
- **Improve submit button text** from "Send Message" to "Request My Free Quote"

#### 3. Footer (`Footer.tsx`)

- **Remove placeholder ABN** — replace with just "© 2026 Sydney Sealed. All rights reserved." until the real ABN is provided
- **Remove social media links** that point to "#" — they look unfinished and damage trust. Can be re-added when real profiles exist
- **Make the phone number a real tel: link** (it currently links to /contact instead of the phone number)

#### 4. LocalBusinessSchema (`LocalBusinessSchema.tsx`)

- **Remove the sameAs array** with fake social URLs until real ones exist

---

### Files to Edit

1. `src/pages/About.tsx` — remove stats bar, reframe testimonials, add "Who We Work With", add internal links
2. `src/pages/Contact.tsx` — improve H1, add "What Happens Next", add trust bar, improve button text
3. `src/components/Footer.tsx` — remove placeholder ABN, remove dead social links, fix phone link
4. `src/components/seo/LocalBusinessSchema.tsx` — remove placeholder sameAs URLs

### What's Preserved

- All SEOHead metadata (titles, descriptions, canonicals, keywords)
- All schema markup (FAQ, Service, Review, Breadcrumb)
- AboutPillars component (already strong)
- Full contact form functionality and validation
- Design system, animations, layout

---

### Summary

**Trust issues improved:**
- Removed unverifiable stats (2,500+, 98%)
- Removed fake-looking testimonial attributions
- Removed placeholder ABN from footer
- Removed dead social media links
- Removed placeholder social URLs from schema

**Still needs real business info from you:**
- Real phone number (replacing 0400 000 000)
- Real ABN
- Real social media profile URLs (when created)
- Real Google review data (when available)
- Real before/after project photos

**Weakest page after this round:**
- **About page** — even after improvements, it would benefit from a team photo, real case studies, and verifiable review data. It reads well but still lacks the kind of proof that comes from real business history.

