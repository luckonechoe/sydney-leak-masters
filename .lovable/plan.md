

# Generate Photorealistic Blog Card Images

## Approach

Use the AI image generation model (`google/gemini-2.5-flash-image`) to generate 20 photorealistic construction/waterproofing photographs, one per blog post. Each image will be generated with a detailed prompt specifying DSLR-style photography, then saved as a static asset in `src/assets/blog/`.

The `BLOG_IMAGES` object in `src/data/blog-posts.ts` will be replaced with local imports pointing to these generated files.

## Image Generation Plan (20 images)

| # | Filename | Prompt Scene |
|---|----------|-------------|
| 1 | `signs-of-shower-leak.jpg` | Close-up of cracked grout lines on bathroom shower wall tiles with visible moisture staining and water marks, natural bathroom lighting |
| 2 | `epoxy-grout-vs-cement-grout.jpg` | Close-up of white bathroom wall tiles showing contrast between dark epoxy grout and lighter cement grout lines, sharp detail |
| 3 | `concrete-degradation-prevention.jpg` | Exterior concrete building facade showing spalling and exposed rebar, natural daylight, construction photography |
| 4 | `strata-waterproofing-guide.jpg` | Multi-storey apartment building exterior with visible balconies, Sydney urban setting, overcast sky |
| 5 | `diy-leak-detection.jpg` | Homeowner inspecting under bathroom vanity with a flashlight looking for water damage, natural indoor lighting |
| 6 | `bathroom-waterproofing-standards.jpg` | Modern tiled bathroom interior with clean white tiles and chrome fixtures, professional real estate photography style |
| 7 | `how-to-fix-leaking-balcony-tiles.jpg` | Outdoor tiled balcony with small puddles of rainwater pooling near cracked grout joints, natural daylight |
| 8 | `waterproof-membrane-failure.jpg` | Water-damaged ceiling with peeling paint and brown water stains, visible moisture damage, indoor natural light |
| 9 | `balcony-waterproofing-systems.jpg` | Tradesperson applying liquid waterproofing membrane on a concrete balcony surface with a roller, construction site |
| 10 | `causes-of-cracked-grout.jpg` | Close-up macro of cracked and crumbling grout between beige bathroom floor tiles, sharp focus |
| 11 | `shower-waterproofing-sydney.jpg` | Walk-in shower with floor-to-ceiling tiles and glass panel, modern Sydney bathroom, clean and bright |
| 12 | `balcony-leak-detection.jpg` | Professional inspector using a moisture meter on a balcony floor surface, construction workwear |
| 13 | `shower-membrane-repair.jpg` | Bathroom under renovation with exposed wall showing waterproof membrane being applied, tools nearby |
| 14 | `tiled-shower-sealing.jpg` | Fresh white subway tile shower wall with neat silicone sealant being applied along the edge |
| 15 | `tiled-balcony-sealing.jpg` | Outdoor terrace with large format tiles and sealed grout lines, potted plants, sunny day |
| 16 | `balcony-membrane-repair.jpg` | Worker on hands and knees applying waterproof coating to a rooftop terrace surface |
| 17 | `epoxy-regrouting-guide.jpg` | Tradesperson applying epoxy grout between shower tiles with a grout float tool, close-up of hands working |
| 18 | `grout-replacement-sydney.jpg` | Before-and-after view of old discoloured grout vs fresh clean grout on bathroom tiles |
| 19 | `tile-sealing-services-sydney.jpg` | Close-up of glossy sealed porcelain tile surface with visible protective sheen, bathroom setting |
| 20 | `balcony-waterproofing-cost.jpg` | Residential balcony with tiled floor overlooking Sydney suburban houses, natural afternoon light |

## File Changes

| File | Action |
|------|--------|
| `src/assets/blog/*.jpg` | Create 20 AI-generated photorealistic images |
| `src/data/blog-posts.ts` | Replace Unsplash URL object with local asset imports |

## Technical Details

- Images generated via `google/gemini-2.5-flash-image` model with detailed photorealistic prompts
- Each prompt will specify: DSLR camera, 35mm lens, natural lighting, landscape 16:9, sharp focus, no AI artifacts
- Generated base64 images saved as `.jpg` files in `src/assets/blog/`
- `BLOG_IMAGES` constant replaced with 20 import statements referencing local files
- No changes needed to `Blog.tsx` or `BlogPost.tsx` (they already render `post.image`)

