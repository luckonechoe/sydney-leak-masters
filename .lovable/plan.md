

## On-Page SEO Metadata Rewrite

### What's Changing

Rewriting title tags and meta descriptions across all major pages to improve keyword targeting, differentiation, CTR, and local search intent. No layout or content changes — metadata only.

### Current Issues

- Some titles are generic (e.g. "Contact Us | Get a Free Quote", "FAQ | Frequently Asked Questions") — they waste the title tag by not including service/location keywords.
- Several descriptions are solid but could be tighter and more CTR-focused.
- Blog post meta is already well-structured and unique — only minor improvements needed.
- Suburb pages use a template that's decent but produces overly long titles.

---

### Updated Title Tags

| Page | Current Title | New Title |
|------|--------------|-----------|
| Homepage | Shower & Balcony Leak Repairs Sydney | Leaking Shower & Balcony Repairs Sydney · 10-Year Warranty |
| About | About Us – Sydney's Trusted Leak Repair Specialists | About Sydney Sealed · Leak Repair Specialists You Can Trust |
| Contact | Contact Us \| Get a Free Quote | Get a Free Quote · Sydney Leak Repair Specialists |
| FAQ | FAQ \| Frequently Asked Questions | Shower & Balcony Leak Repair FAQ · Sydney Sealed |
| Blog | Blog \| Practical Leak Repair Guides for Sydney Homeowners | Leak Repair Tips & Guides · Sydney Sealed Blog |
| Shower Repairs | Leaking Shower Repairs Sydney \| Fix Shower Leaks Without Removing Tiles | Leaking Shower Repairs Sydney · No Tile Removal, 10-Year Warranty |
| Balcony Repairs | Leaking Balcony Repairs Sydney \| Balcony Waterproofing & Sealing | Leaking Balcony Repairs Sydney · Waterproofing & Sealing Specialists |
| Strata | Strata Leak Repair Services Sydney \| Property Manager Waterproofing Solutions | Strata Leak Repairs Sydney · Waterproofing for Property Managers |
| Preventative Maintenance | Preventative Maintenance Plan $249/yr \| Sydney Sealed | Preventative Maintenance Plans · Protect Your Waterproofing Investment |
| Suburbs | Leak Repair Service Areas Sydney \| 50+ Suburbs \| Shower & Balcony Specialists | Leak Repair Service Areas · 50+ Sydney Suburbs Covered |
| Complete Guide | Complete Guide to Leaking Shower and Balcony Repairs in Sydney | Complete Guide to Shower & Balcony Leak Repairs in Sydney |
| Terms of Service | Terms of Service \| Sydney Sealed | *(no change — noindex page)* |

**Suburb pages template** — shortened to avoid truncation:
- Current: `{Service} {Suburb} {Postcode} | Expert {Sealing/Waterproofing} {Region}`
- New: `{Service} {Suburb} {Postcode} · Sydney Sealed`

---

### Updated Meta Descriptions

| Page | New Description |
|------|----------------|
| Homepage | Stop shower and balcony leaks for good. Sydney Sealed uses premium epoxy grout to fix leaks without removing tiles. 10-year warranty. Free quotes across Sydney. |
| About | Meet the team behind Sydney Sealed. We fix leaking showers and balconies properly the first time — quality workmanship, honest advice, and a 10-year warranty on every job. |
| Contact | Request a free, no-obligation quote from Sydney Sealed. We respond within 24 hours. Call us or fill out the form — we service all of Greater Sydney. |
| FAQ | Answers to common questions about leaking shower repairs, balcony waterproofing, pricing, warranties, and how our repair process works across Sydney. |
| Blog | Practical guides on shower leak repairs, balcony waterproofing, epoxy regrouting, and long-term property maintenance from Sydney's trusted leak repair specialists. |
| Shower Repairs | Professional leaking shower repairs across Sydney. We fix shower leaks using premium epoxy grout — no tile removal required. Fast response, free inspections, 10-year warranty. |
| Balcony Repairs | Expert leaking balcony repairs and waterproofing across Sydney. Stop water damage, prevent spalling, and protect your property. Strata approved. 10-year warranty. Free quotes. |
| Strata | Specialist leak repair and waterproofing for Sydney strata buildings. Priority scheduling, transparent reporting, and volume pricing for property managers and body corporates. |
| Preventative Maintenance | Keep your waterproofing in top shape with our $249/year maintenance plan. Annual inspections, grout touch-ups, and extended warranty coverage for Sydney homes and strata. |
| Suburbs | We service 50+ suburbs across Greater Sydney — Eastern Suburbs, North Shore, Inner West, Western Sydney and more. No travel fees. Free quotes. 10-year warranty on all repairs. |
| Complete Guide | Everything you need to know about fixing leaking showers and balconies in Sydney. Causes, warning signs, repair methods, costs, and how to choose the right specialist. |

**Suburb pages template** — tightened:
- New: `Fix {service type} leaks in {Suburb} ({Postcode}). No tile removal, 10-year warranty, free quotes. Trusted by {Region} homeowners and strata managers.`

---

### Blog Posts

The 20 blog posts already have unique, well-targeted metaTitle and metaDescription values. No changes needed — they are differentiated and keyword-rich.

---

### Files to Edit

1. `src/pages/Index.tsx` — title + description
2. `src/pages/About.tsx` — title + description
3. `src/pages/Contact.tsx` — title + description
4. `src/pages/FAQ.tsx` — title + description
5. `src/pages/Blog.tsx` — title + description
6. `src/pages/ShowerRepairs.tsx` — title + description
7. `src/pages/BalconyRepairs.tsx` — title + description
8. `src/pages/Strata.tsx` — title + description
9. `src/pages/PreventativeMaintenance.tsx` — title + description
10. `src/pages/Suburbs.tsx` — title + description
11. `src/pages/CompleteGuide.tsx` — title + description
12. `src/pages/SuburbPage.tsx` — title + description template

All existing canonical URLs, keywords props, and schema markup will be preserved exactly as they are.

---

### Pages That Still Need Custom Copy to Rank Better

- **About page**: Could benefit from more unique body content (currently reads well but is thin for SEO).
- **Strata page**: Adding case studies or testimonials from strata managers would strengthen ranking potential.
- **Blog posts**: Consider adding internal links between related posts and to service pages to improve crawl depth.
- **Suburb pages**: The body content is template-driven — adding 1–2 unique sentences per suburb (local landmarks, common property types) would help differentiate them from each other in Google's eyes.

