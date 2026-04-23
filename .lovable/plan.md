

## Tighten Title & Meta Descriptions Across Key Pages

### Goal
Every key page already has unique copy, but several titles and descriptions exceed Google's display limits (titles >60 chars get truncated; descriptions >160 chars get cut). This pass rewrites them to fit SEO best practice while keeping each page's unique angle, target keywords, and Sydney Sealed brand voice.

### Current audit (Title / Description char counts — target: ≤60 / ≤160)

| Page | Title | Desc | Status |
|---|---|---|---|
| Index | 74 | 160 | Title too long |
| About | 59 | 171 | Desc too long |
| Strata | 80 | 175 | Both too long |
| Shower Repairs | 81 | 175 | Both too long |
| Balcony Repairs | 84 | 175 | Both too long |
| Preventative Maintenance | 86 | 170 | Both too long |
| Contact | 65 | 148 | Title slightly long |
| FAQ | 48 | 161 | Desc 1 char over |
| Blog | 51 | 163 | Desc slightly long |
| Complete Guide | 73 | 167 | Both slightly long |
| Suburbs | 70 | 175 | Both too long |
| Terms | 32 | 114 | OK |

### Rewrites

**Index (`/`)**
- Title: `Leaking Shower & Balcony Repairs Sydney | Sydney Sealed` (55)
- Desc: `Stop shower & balcony leaks for good. Premium epoxy grout repairs, no tile removal, 10-year warranty. Free quotes across Greater Sydney.` (135)

**About (`/about`)**
- Title: `About Sydney Sealed · Trusted Leak Repair Team` (46 → +18 brand suffix = 64 → trim) → `About Us · Sydney Leak Repair Specialists | Sydney Sealed` (58)
- Desc: `Meet the Sydney Sealed team. Honest advice, quality workmanship, and a 10-year warranty on every shower and balcony leak repair.` (128)

**Strata (`/strata`)**
- Title: `Strata Leak Repairs & Waterproofing Sydney | Sydney Sealed` (58)
- Desc: `Specialist shower & balcony leak repairs for Sydney strata. Priority scheduling, written reports, volume pricing, 10-year warranty.` (131)

**Shower Repairs (`/shower-repairs`)**
- Title: `Leaking Shower Repairs Sydney · No Tile Removal | Sydney Sealed` (60)
- Desc: `Fix leaking showers in Sydney without removing tiles. Premium epoxy regrouting, free on-site inspection, 10-year warranty.` (121)

**Balcony Repairs (`/balcony-repairs`)**
- Title: `Leaking Balcony Repairs & Waterproofing Sydney | Sydney Sealed` (60)
- Desc: `Stop balcony leaks and prevent spalling concrete. Sydney epoxy regrouting & membrane repairs. Strata-approved. 10-year warranty.` (128)

**Preventative Maintenance (`/preventative-maintenance`)**
- Title: `Waterproofing Maintenance Plans Sydney | Sydney Sealed` (54)
- Desc: `$249/year plan with two annual visits, grout touch-ups, and extended warranty. Protect your shower & balcony waterproofing year-round.` (133)

**Contact (`/contact`)**
- Title: `Free Leak Inspection & Quote | Sydney Sealed` (44)
- Desc: `Request a free, no-obligation leak inspection. We respond within 24 hours and service all of Greater Sydney.` (108) — already short, keep concise.

**FAQ (`/faq`)**
- Title: keep `Shower & Balcony Leak Repair FAQ · Sydney Sealed` (48)
- Desc: `Answers on shower & balcony leak repairs, epoxy regrouting, pricing, warranty, preparation, after-care, and strata services in Sydney.` (133)

**Blog (`/blog`)**
- Title: keep `Shower & Balcony Leak Repair Guides — Sydney Sealed` (51)
- Desc: `Expert guides on shower leak repairs, balcony waterproofing, epoxy regrouting, and long-term property maintenance in Sydney.` (123)

**Complete Guide (`/guides/complete-guide-leak-repairs-sydney`)**
- Title: `Complete Guide to Sydney Leak Repairs | Sydney Sealed` (53)
- Desc: `Causes, warning signs, repair methods, costs, and how to choose the right specialist for shower & balcony leaks in Sydney.` (122)

**Suburbs (`/suburbs`)**
- Title: `Sydney Leak Repair Service Areas · 50+ Suburbs | Sydney Sealed` (60)
- Desc: `Shower & balcony leak repairs across 50+ Sydney suburbs — Eastern Suburbs, North Shore, Inner West, Western Sydney. No travel fees.` (130)

**Terms (`/terms-of-service`)** — keep current copy; already concise and `noindex`.

### Implementation

Single-line `title=` and `description=` prop swaps in each page's `<SEOHead …>` call:

- `src/pages/Index.tsx`
- `src/pages/About.tsx`
- `src/pages/Strata.tsx`
- `src/pages/ShowerRepairs.tsx`
- `src/pages/BalconyRepairs.tsx`
- `src/pages/PreventativeMaintenance.tsx`
- `src/pages/Contact.tsx`
- `src/pages/FAQ.tsx`
- `src/pages/Blog.tsx`
- `src/pages/CompleteGuide.tsx`
- `src/pages/Suburbs.tsx`

### Out of scope
- Suburb pages (`SuburbPage.tsx`) — already use a dynamic, unique-per-suburb template. No change.
- Blog post pages — meta comes from per-post `metaTitle` / `metaDescription` in `src/data/blog-posts.ts`. No change unless requested.
- `index.html` default tags, OG image, schema, canonicals — unchanged.
- No layout, copy, or component changes.

