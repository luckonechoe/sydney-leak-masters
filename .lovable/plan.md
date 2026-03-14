

## Click-to-Call on Mobile

Currently, the phone CTA button navigates to `/contact` for all users. The change is straightforward: on mobile devices, the button should use a `tel:` link (which opens the phone's dialer with the number pre-filled), while on desktop it continues to link to the contact page.

### Implementation

**File: `src/components/CTAButton.tsx`**

- Import and use the `useIsMobile` hook.
- When `variant === "phone"`:
  - On mobile: render an `<a href="tel:+61400000000">` instead of a `<Link to="/contact">`, so the device's native dialer opens with the business number pre-filled.
  - On desktop: keep the existing `<Link to="/contact">` behavior.
- The `PHONE_HREF` constant (`tel:+61400000000`) is already defined but unused — we'll put it to use.

This is a small, single-file change. Every "Call Now" / phone button across the entire site (header, homepage, service pages, etc.) will automatically gain this behavior since they all use `CTAButton`.

