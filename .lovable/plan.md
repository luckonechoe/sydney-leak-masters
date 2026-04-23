

## Expand FAQ with Comprehensive Customer Questions

### Goal
Grow the FAQ page from 12 questions to ~40 questions, neatly categorised, covering everything customers commonly ask competitors (Megasealed, The Shower Repair Centre, etc.) plus gaps specific to Sydney Sealed's offering. Answers will be written in Sydney Sealed's brand voice (Australian, clear, benefits-first, "spalling/concrete degradation", "technicians", "Sydney Sealed", phone 0400 000 000, business hours Mon–Fri 7:30am–3:00pm / Sat 8:30am–1:00pm).

### Categories (expanded from 6 → 8)

1. **General** — leak signs, what we do, tile removal
2. **Pricing & Quotes** — phone quotes, callout fees, payment, hidden costs
3. **Process & Preparation** — timing, what to do before, mess/noise, what to expect on the day
4. **After the Service** — when can I shower, residue, when to fix damage, cleaning
5. **Warranty & Guarantees** — what's covered, what's not, claim process
6. **Technical** — epoxy grout, spalling, membranes, why no re-tiling
7. **Service Area & Booking** — suburbs, Saturday work, booking lead time, emergency
8. **Strata, Property Managers & Commercial** — work orders, documentation, multiple units

### New questions to add (with brief answer direction)

**General**
- "Is it the shower causing the damp ceiling below, or could it be the plumbing?" — symptoms vs plumbing leak; we identify which.
- "What causes leaking showers and balconies in the first place?" — failed grout, membrane, building movement, age.
- "Can a leaking shower cause structural damage?" — yes; rotten timber, spalling concrete, mould, lost property value.

**Pricing & Quotes**
- "Can you quote my repair over the phone?" — rough indication after a few questions; firm price after on-site inspection.
- "Do you charge a callout fee?" — no callout/inspection fee; quotes are free and obligation-free.
- "Are there any hidden costs?" — written quote upfront; any extras require your approval first.
- "How do I pay?" — EFT, card, BPAY; payment after job complete and you're satisfied.
- "Do you offer payment plans?" — direct enquiry response.

**Process & Preparation**
- "What should I do to prepare my bathroom before you arrive?" — last shower 9pm prior, remove products, light clean, dry the area.
- "How much mess and noise is involved?" — drop sheets, dust-controlled tools, vacuumed before leaving.
- "Will I need to leave the house during the repair?" — generally no; bathroom is unavailable for a few hours.
- "Do I need to be home for the whole job?" — access required at start and end; not the full duration.
- "Can you do extra work on the same day?" — sometimes yes if scheduled; otherwise quoted separately.
- "What's the difference between regrouting and resealing?" — regrouting = replacing grout in joints; resealing = silicone in corners/internal angles.

**After the Service**
- "How long before I can use my shower again?" — typically next morning (overnight cure); 48hr full cure.
- "How long before I can use my balcony again?" — 24–48 hrs foot traffic; depends on scope.
- "There's a fine white powder on my tiles — is that normal?" — yes, grout residue; wipe with damp cloth.
- "When can I fix the damaged ceiling/wall caused by the leak?" — wait 6–8 weeks for trapped moisture to dry.
- "Will my shower look better after the repair?" — usually a noticeable visual improvement, though cleaning isn't the goal.
- "How do I clean and maintain my repaired shower?" — non-abrasive cleaners; epoxy resists mould build-up.

**Warranty & Guarantees**
- "Is the warranty transferable if I sell my home?" — clarify policy.
- "How do I make a warranty claim?" — call us, we re-attend.
- "What is NOT covered by your warranty?" — plumbing leaks, building movement, third-party damage, subsequent works.
- "Is the repair a permanent solution?" — long-lasting; backed by 10-year warranty.

**Technical**
- "What's the difference between epoxy grout and cement grout?" — waterproof, no cracking, stain/chemical resistant.
- "Do you replace the waterproofing membrane?" — only when sealing/regrouting won't solve it; membrane work is a bigger job.
- "Why don't you need to remove tiles?" — joints are the failure point; rebuilding them with epoxy stops the leak.
- "Can you fix a leaking balcony without removing the tiles?" — yes in most cases; membrane re-do needed in severe cases.
- "Is the epoxy safe for kids and pets?" — fully cured = inert, food-safe, non-toxic.
- "Can I choose the grout colour?" — yes, range of colour-matched options.

**Service Area & Booking**
- "How quickly can you attend?" — typically within 24–48 hours for inspection.
- "Do you do Saturday appointments?" — Sat 8:30am–1:00pm, subject to availability.
- "Do you do emergency repairs?" — priority booking for urgent leaks.
- "Are your technicians police-checked and insured?" — yes; fully insured, background-checked.

**Strata, Property Managers & Commercial**
- "Do you accept work orders from strata managers and real estate agents?" — yes, dedicated coordination.
- "Can you provide a detailed report for strata records?" — yes, photos + scope + warranty docs.
- "Can you coordinate access with tenants directly?" — yes, we liaise once contact is shared.
- "Do you offer volume pricing for multiple units?" — yes, building-wide pricing.

### Implementation

**File:** `src/pages/FAQ.tsx`

1. Replace the `faqs` array with the expanded list (~40 items) using the categories above.
2. Update the `categories` array to: `["General", "Pricing & Quotes", "Process & Preparation", "After the Service", "Warranty & Guarantees", "Technical", "Service Area & Booking", "Strata & Property Managers"]`.
3. Existing render logic (filter-by-category accordion blocks) requires no changes — it scales automatically.
4. Update the SEO description to reflect the broader question coverage, e.g.: *"40+ answers about leaking shower repairs, balcony waterproofing, epoxy regrouting, pricing, warranty, preparation, after-care, and strata services across Sydney."*

### Optional (recommended) — FAQPage schema for SEO

Wrap the FAQ list with the existing `FAQSchema` SEO component (already in `src/components/seo/FAQSchema.tsx`) so Google can show rich-result accordions. Pass the same array; one-line addition near `<SEOHead>`.

### Out of scope
- No design changes to layout, hero, accordion styling, or CTA section.
- No changes to navigation or other pages.
- No new components.

