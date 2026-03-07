

# Add SEO-Optimized Copy to Service Pages

## Summary
Expand the content on all three service pages (Shower Repairs, Balcony Repairs, Strata) with additional informative sections, keyword-rich copy, and SEO best practices including FAQ schema, improved meta descriptions, internal linking, and semantic HTML improvements.

## SEO Strategy

**Target Keywords:**
- Shower page: "shower leak repair Sydney", "leaking shower fix", "epoxy grout shower", "shower waterproofing Sydney", "fix shower leak without removing tiles"
- Balcony page: "balcony leak repair Sydney", "balcony waterproofing", "balcony membrane repair", "spalling repair Sydney", "concrete degradation repair"
- Strata page: "strata leak repairs Sydney", "strata waterproofing services", "property manager leak repair", "strata building maintenance Sydney"

**SEO Best Practices Applied:**
- Longer, keyword-rich meta descriptions (150-160 chars)
- FAQ schema markup (JSON-LD) on each service page for rich snippets in Google
- Internal cross-links between service pages
- Semantic heading hierarchy (H2/H3 properly nested)
- Natural keyword density in new copy sections
- Descriptive anchor text on internal links

---

## Changes by File

### 1. `src/pages/ShowerRepairs.tsx`

**Enhanced SEO meta:**
- Title: "Shower Leak Repairs Sydney | Fix Leaking Shower Without Removing Tiles"
- Description: "Professional shower leak repair in Sydney using premium epoxy grout. Fix your leaking shower without tile removal. Same-day service, 10-year warranty. Free inspection."

**New section: "Common Causes of Shower Leaks" (after Benefits)**
An educational H2 section with 4-5 common causes (failed grout, cracked waterproof membrane, poor original installation, movement cracks, degraded silicone seals) presented as a grid of cards. Naturally incorporates keywords like "leaking shower", "shower waterproofing failure", "grout deterioration".

**New section: "Epoxy Grout vs Cement Grout" (after Process)**
A comparison section with two columns explaining why epoxy grout outperforms traditional cement grout. Covers waterproof properties, lifespan, stain resistance, and flexibility. Targets "epoxy grout vs cement grout" search queries.

**New section: "Shower Repair FAQ" (before Quote Form)**
3-4 inline FAQs specific to shower repairs, rendered as an accordion. Also output as FAQ schema JSON-LD for rich snippets. Questions:
- "Can you fix a leaking shower without removing tiles?"
- "How long does epoxy grout last in a shower?"
- "Is epoxy grout safe for bathrooms?"
- "How soon can I use my shower after repair?"

**New section: "Areas We Service" (brief)**
A short paragraph mentioning Sydney-wide coverage with a link to the suburb pages. Targets local SEO queries.

**Internal links added:**
- Link to Balcony Repairs page from a contextual mention
- Link to FAQ page
- Link to Contact page

---

### 2. `src/pages/BalconyRepairs.tsx`

**Enhanced SEO meta:**
- Title: "Balcony Leak Repairs Sydney | Waterproofing & Spalling Prevention"
- Description: "Expert balcony waterproofing and leak repair across Sydney. Prevent spalling and concrete degradation with professional membrane restoration. 10-year warranty. Strata approved."

**New section: "How Balcony Waterproofing Works" (after Warning Signs)**
Detailed explanation of the membrane restoration process: surface preparation, primer application, liquid membrane application, curing, and protective screed. Targets "balcony waterproofing process" and "membrane restoration".

**New section: "Balcony Repair FAQ" (before Quote Form)**
3-4 inline FAQs with schema markup:
- "How do I know if my balcony membrane has failed?"
- "Can balcony leaks cause structural damage?"
- "Do you need strata approval for balcony repairs?"
- "How long does balcony waterproofing last?"

**Expand "What is Spalling?" card:**
Add 2-3 more sentences explaining the stages of concrete degradation, why Sydney's coastal climate accelerates it, and the importance of early intervention. Targets "spalling repair Sydney".

**Internal links added:**
- Link to Strata page from strata-related mentions
- Link to Shower Repairs page
- Link to FAQ page

---

### 3. `src/pages/Strata.tsx`

**Enhanced SEO meta:**
- Title: "Strata Leak Repair Services Sydney | Property Manager Waterproofing Solutions"
- Description: "Dedicated leak repair and waterproofing for strata managers across Sydney. Priority scheduling, volume pricing, compliant documentation. Shower and balcony specialists."

**New section: "Common Strata Leak Issues" (after Benefits)**
A section covering the most common leak problems in strata buildings: shared bathroom walls, aging balcony membranes, common area water ingress, planter box leaks. Each with a brief description and how we address it.

**New section: "Strata Compliance & Australian Standards" (after Process)**
A brief section explaining compliance with AS 4654.2 (waterproofing of wet areas), relevant NCC/BCA requirements, and how documentation supports levy fund claims and insurance. Targets "strata waterproofing compliance" and "Australian Standards waterproofing".

**Internal links added:**
- Links to Shower Repairs and Balcony Repairs pages from relevant mentions
- Link to FAQ page

---

### 4. New Component: `src/components/seo/FAQSchema.tsx`

A reusable component that accepts an array of `{question, answer}` objects and renders:
- A `<script type="application/ld+json">` block with FAQPage schema
- Used on each service page to generate rich snippet markup

---

### 5. `src/components/seo/index.ts`

Add export for the new `FAQSchema` component.

---

## Technical Notes

- All new sections follow the existing pattern: `motion.div` with `whileInView` animations, `section-container` wrapper, consistent heading/text styling
- FAQ schema follows Google's structured data guidelines for FAQPage type
- New copy uses natural keyword placement (not keyword stuffing) -- primary keyword in H2, secondary keywords in body text
- Internal links use `<Link>` from react-router-dom with descriptive anchor text
- The terminology rule is maintained: "spalling" for short labels, "concrete degradation" for descriptive contexts

