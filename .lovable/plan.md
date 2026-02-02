

# Sydney Leak Repairs Pro - Complete Website Build

## Overview
A premium, dark-themed service website for Sydney's leading leak repair specialists, featuring a sophisticated design system, multi-page architecture, and conversion-optimized user experience.

---

## Phase 1: Design System Foundation

### Custom Theme Implementation
- **Color Palette**: Implement exact HSL values for Background (dark blue), Primary (steel blue), Secondary (water cyan), Accent (warranty gold), and Muted (card surfaces)
- **Typography**: Add Google Fonts for 'Manrope' (headings) and 'Inter' (body text)
- **Visual Effects**: Subtle grid pattern overlays, gradient backgrounds, and 0.5rem border radius throughout

### Core Components
- **CTAButton**: Dual variants for "Link" (internal navigation) and "Phone" (click-to-call with 0400 000 000)
- **WarrantyBadge**: High-contrast gold badge highlighting "10 Year Warranty"
- **ServiceCard**: Comparison cards for Shower vs Balcony repairs with pricing
- **ProcessTimeline**: Trust-building step visualization

---

## Phase 2: Page Architecture

### Home Page
- Hero section with animated headline: "Stop Leaks Permanently. Without Re-Tiling."
- 10-year warranty badge prominently displayed
- Service comparison cards (Shower from $890 / Balcony from $2,390)
- Process timeline (Inspect → Quote → Repair → Warranty)
- Multi-step quote form with photo upload
- Trust indicators and testimonials section

### Shower Repairs Service Page
- Detailed epoxy grout technology explanation
- Before/after visual concepts
- Pricing transparency (starting from $890)
- Benefits checklist (no retiling, quick turnaround, 10-year warranty)
- Embedded quote form

### Balcony Repairs Service Page
- Concrete cancer prevention focus
- Waterproofing membrane explanation
- Pricing (starting from $2,390)
- Strata-specific benefits section
- Embedded quote form

### Strata Manager Portal
- Multi-property management messaging
- Priority scheduling features
- Bulk quote capabilities
- Compliance documentation benefits
- Dedicated contact form

### Blog & FAQ Sections
- Blog listing page with SEO-focused content structure
- FAQ accordion with common leak repair questions
- Internal linking strategy for SEO

### Suburb-Targeted Landing Pages
- Dynamic route `/services/:suburb`
- Pre-configured top 20 suburbs: Parramatta, Bondi, Manly, Chatswood, Cronulla, Bankstown, Liverpool, Penrith, Blacktown, Ryde, Hornsby, Sutherland, Randwick, Marrickville, Hurstville, Burwood, Strathfield, Epping, Castle Hill, Mosman
- Localized content injection (suburb name in headlines, meta tags)
- Local SEO optimization

---

## Phase 3: Key Features

### Multi-Step Quote Form
- Step 1: Contact details (name, email, phone)
- Step 2: Property details (type, suburb, issue description)
- Step 3: Photo/video upload with drag-and-drop
- Step 4: Preferred contact time
- Progress indicator and field validation
- Framer Motion animations between steps

### SEO Infrastructure
- JSON-LD Schema components for Service, BreadcrumbList, and LocalBusiness
- Dynamic meta tag injection per page
- Structured heading hierarchy (H1 → H6)
- Automatic sitemap-ready route structure

### Placeholder HubSpot Integration
- Reusable `HubSpotForm` component structure
- Easy configuration for future portal/form ID injection
- Fallback to native form handling

---

## Phase 4: Layout & Navigation

### Header
- Logo with company name
- Main navigation: Home, Services (dropdown), Strata, Blog, Contact
- Prominent phone CTA button
- Mobile-responsive hamburger menu

### Footer
- Service area highlights (Sydney-wide)
- Quick links to all pages
- Contact information
- Warranty guarantee messaging
- Social links placeholders

---

## Phase 5: Backend Integration (Supabase)

### Database Structure
- Quote submissions table (contact info, property details, timestamps)
- File uploads storage bucket for photos/videos
- Suburb pages content (optional for CMS-style management)

### File Upload System
- Supabase Storage integration for leak photos/videos
- File validation (images: JPG, PNG, WEBP; videos: MP4, MOV)
- Size limits (10MB images, 50MB videos)
- Secure upload with progress feedback

---

## Technical Highlights

### Animations (Framer Motion)
- Fade-in on scroll for sections
- Staggered slide-up for cards and list items
- Smooth form step transitions
- Respects `prefers-reduced-motion`

### Performance Optimizations
- Lazy loading for images and below-fold content
- Route-based code splitting
- Optimized font loading

### Accessibility
- ARIA labels on interactive elements
- Keyboard navigation support
- High color contrast ratios
- Focus indicators

---

## Deliverables Summary

| Category | Items |
|----------|-------|
| **Pages** | 6 core pages + 20 suburb pages |
| **Components** | 15+ reusable components |
| **Forms** | Multi-step quote form with uploads |
| **SEO** | JSON-LD schemas, meta tag system |
| **Backend** | Supabase tables + storage bucket |

