

# Add Trust Statistics Section

## What
Add a horizontal statistics bar showing "500+ Happy Customers", "24hr Response Time", and "10yr Warranty" between the hero and services sections on the Index page.

## How

**File: `src/pages/Index.tsx`**

Insert a new `<section>` after the hero section closing tag and before the services section. Structure:

- A `motion.div` with fade-in animation
- Three stat blocks in a horizontal flex/grid layout (3 columns)
- Each block: large number in `text-secondary` (the cyan accent), label in `text-muted-foreground`
- Responsive: horizontal on md+, stacked on mobile
- Subtle top/bottom border or `bg-muted/30` background to visually separate from hero

Stats:
1. **500+** / Happy Customers
2. **24hr** / Response Time  
3. **10yr** / Warranty

No new components needed — inline in Index.tsx between existing sections.

