## Update Balcony Repairs hero image + SEO

**Page:** `/services/balcony-repairs` (`src/pages/BalconyRepairs.tsx`)

### Changes

1. **Add new image asset**
   - Copy uploaded file to `src/assets/sydney-balcony-leak-repair-high-rise-epoxy-3.avif`.

2. **Swap hero image import**
   - Replace current import (`balcony-leak-specialists-sydney-harbour-view-2.avif`) with the new asset. Hero `<img>` already uses `balconyHeroImage`, so no JSX changes needed.

3. **Update SEO `<SEOHead>` title and description** to a more keyword-targeted pair:
   - **Title:** `Sydney Balcony Leak Repairs | High-Rise Epoxy Waterproofing Experts`
   - **Description:** `Sydney high-rise balcony leak repair specialists. Epoxy regrouting & waterproofing without removing tiles. Strata-approved with a 10-year warranty.`

### Notes
- Image alt text on the hero `<img>` will be kept aligned with the new filename/SEO ("Sydney high-rise balcony leak repair using epoxy waterproofing").
- No other content, schema, or layout changes.
