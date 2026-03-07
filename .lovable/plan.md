

# Replace Blog Images with Curated Unsplash Stock Photos

## Approach

Rather than integrating an API (which requires API keys and adds runtime complexity), we will use **curated Unsplash direct URLs**. Unsplash explicitly allows hotlinking via their CDN (`images.unsplash.com`) and all photos are free for commercial use under the Unsplash licence. Each URL includes sizing parameters (`w=1200&h=800&fit=crop`) for optimised landscape blog cards.

This is the most reliable approach because:
- No API key required (Unsplash allows direct linking)
- Images are stable and never change
- No caching system needed
- No runtime fetch calls
- Guaranteed high-quality, realistic photography

## Changes

### `src/data/blog-posts.ts`
- Remove all 20 `import` statements for local `src/assets/blog/*.jpg` files
- Replace each post's `image` value with a hand-picked Unsplash photo URL relevant to that post's topic
- Each URL uses `?w=1200&h=800&fit=crop` for consistent 3:2 landscape cards

Example mapping (all 20 posts get unique, topic-relevant photos):

| Post | Search concept | Photo subject |
|------|---------------|---------------|
| Signs of shower leak | wet bathroom tiles, water damage | Bathroom with water on tiles |
| Epoxy vs cement grout | tile grouting, bathroom renovation | Close-up of grout work |
| Concrete degradation | concrete spalling, building facade | Damaged concrete surface |
| Strata waterproofing | apartment building exterior | Multi-storey residential block |
| DIY leak detection | bathroom inspection, plumber tools | Person inspecting plumbing |
| Bathroom standards | modern bathroom interior | Clean tiled bathroom |
| Leaking balcony tiles | wet balcony, outdoor tiles | Balcony with rain/water |
| Membrane failure | water damage, peeling paint | Water-damaged wall/ceiling |
| Balcony waterproofing systems | balcony construction | Balcony under construction |
| Cracked grout | cracked tiles, damaged grout | Close-up tile damage |
| Shower waterproofing Sydney | shower interior, tiled shower | Modern shower installation |
| Balcony leak detection | building inspection, moisture meter | Professional inspection |
| Shower membrane repair | bathroom renovation, waterproofing | Bathroom under repair |
| Tiled shower sealing | shower tiles, sealant application | Fresh tile work |
| Tiled balcony sealing | outdoor tiled area | Tiled outdoor terrace |
| Balcony membrane repair | rooftop/terrace repair | Terrace waterproofing work |
| Epoxy regrouting guide | grouting tools, tile work | Tradesperson applying grout |
| Grout replacement Sydney | old vs new grout, tile refresh | Before/after grout |
| Tile sealing services | tile surface, sealing product | Sealed tile surface |
| Balcony waterproofing cost | building exterior, balcony | Residential balcony view |

### Files deleted (optional cleanup)
- All 20 `src/assets/blog/*.jpg` files can be removed since they will no longer be imported

### No other files change
- `Blog.tsx` and `BlogPost.tsx` already render `post.image` as an `<img src>` — they work with external URLs without modification.

