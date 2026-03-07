

# Plan: Expand Blog Posts to 2000+ Words

## Analysis

After reviewing all 20 blog posts in `src/data/blog-posts.ts`, the first ~6-8 posts have substantial content (8-9 sections each with detailed paragraphs, lists, and tables — estimated 2000+ words). The remaining posts are significantly shorter. Here's the breakdown:

**Already 2000+ words (no changes needed):**
1. `signs-of-shower-leak` — 9 sections, rich content
2. `epoxy-grout-vs-cement-grout` — 9 sections with comparison table
3. `concrete-degradation-prevention` — 8 sections, detailed
4. `strata-waterproofing-guide` — 7 sections, comprehensive
5. `diy-leak-detection` — 7+ sections, thorough
6. `bathroom-waterproofing-standards` — 7 sections, detailed

**Under 2000 words — need expansion (estimated current word count):**
7. `how-to-fix-leaking-balcony-tiles` — ~1500 words, needs moderate expansion
8. `waterproof-membrane-failure` — ~1200 words, needs expansion
9. `balcony-waterproofing-systems` — ~1200 words, needs expansion
10. `causes-of-cracked-grout` — ~900 words, needs major expansion
11. `shower-waterproofing-sydney` — ~800 words, needs major expansion
12. `balcony-leak-detection` — ~800 words, needs major expansion
13. `shower-membrane-repair` — ~800 words, needs major expansion
14. `tiled-shower-sealing` — ~500 words, needs major expansion
15. `tiled-balcony-sealing` — ~500 words, needs major expansion
16. `balcony-membrane-repair` — ~600 words, needs major expansion
17. `epoxy-regrouting-guide` — ~700 words, needs major expansion
18. `grout-replacement-sydney` — ~500 words, needs major expansion
19. `tile-sealing-services-sydney` — ~400 words, needs major expansion
20. `balcony-waterproofing-cost` — ~500 words, needs major expansion

## Implementation Plan

**File:** `src/data/blog-posts.ts` — all changes in this single file.

For each under-2000-word post, I will:

1. **Add 4-8 new sections** with H2/H3 headings targeting long-tail keywords
2. **Expand existing sections** with deeper technical detail, Australian Standards references, Sydney suburb internal links, and cost/timeline information
3. **Add psychological triggers**: urgency ("every week you wait..."), social proof ("thousands of Sydney homeowners"), authority (AS 3740/AS 4654.2 references), loss aversion ("damage that could have been prevented")
4. **Maintain SEO patterns**: internal links to related blog posts and service pages, keyword-rich headings, suburb anchor links, E-E-A-T signals
5. **Update `readTime`** to reflect new content length (12-15 min read)
6. **Add additional FAQs** where posts have fewer than 4

### Content expansion themes per post:

- **#10 Causes of Cracked Grout**: Add sections on climate-specific factors in Sydney, cost of ignoring cracked grout, prevention checklist, case study scenarios, choosing a repair specialist
- **#11 Shower Waterproofing Sydney**: Add membrane types comparison, maintenance guide, strata considerations, cost-benefit analysis, choosing a contractor
- **#12 Balcony Leak Detection**: Add thermal imaging explanation, moisture mapping, seasonal detection tips, strata detection protocols, cost of delayed detection
- **#13 Shower Membrane Repair**: Add membrane types, repair vs replacement decision tree, timeline expectations, maintenance after repair
- **#14 Tiled Shower Sealing**: Add sealer product comparison, application techniques, maintenance schedule, common mistakes, cost analysis
- **#15 Tiled Balcony Sealing**: Add Sydney climate considerations, UV protection details, sealer longevity comparison, strata maintenance programs
- **#16 Balcony Membrane Repair**: Add membrane system comparison, concrete repair details, strata approval process, warranty considerations
- **#17 Epoxy Regrouting Guide**: Add material science section, before/after expectations, maintenance guide, common mistakes, comparison with alternatives
- **#18 Grout Replacement Sydney**: Add suburb-specific advice, timeline guide, material comparison table, maintenance after replacement
- **#19 Tile Sealing Services Sydney**: Add tile type guide, sealer chemistry, commercial vs residential, maintenance schedules
- **#20 Balcony Waterproofing Cost**: Add cost comparison table, hidden costs section, ROI analysis, insurance considerations, strata budgeting guide

## Scope

- **14 blog posts** to expand
- All edits within `src/data/blog-posts.ts`
- Preserving all existing content, internal links, keywords, and SEO structure
- Each post will reach 2000-2500 words with 7-10 sections
- Due to file size, this will be a substantial edit — the file will grow from ~1786 lines to approximately ~3500+ lines

