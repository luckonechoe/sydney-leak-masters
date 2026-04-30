## Status: backend is already connected

Both forms already insert into `public.contact_submissions` and upload media via the `upload-contact-media` edge function to the private `contact-uploads` bucket. RLS allows public INSERT and restricts read/update/delete to `service_role`. So nothing needs to be rebuilt — only refined.

## What I'll change

### 1. `src/pages/Contact.tsx` — capture every field on the table
The form currently submits name, email, phone, address, callerType, serviceType, urgency, subject, message + media. Two table columns are never populated from this page:
- `preferred_contact_time`
- `property_type`
- `description` (we send `message` only — fine, but I'll mirror to `description` so admin views are consistent with the QuoteForm)

Add two new fields to the form:
- **Property Type** select (House, Apartment, Townhouse, Unit, Commercial, Strata Complex)
- **Preferred Contact Time** select (Morning / Afternoon / Evening / Anytime)

Include them in the zod schema and the insert payload, and set `source: "contact"` (already done).

### 2. Fix Select accessibility / controlled-value bug
The Selects in `Contact.tsx` use `onValueChange={setValue(...)}` only — they're uncontrolled and never reset after submit, and zod doesn't re-validate on change. I'll:
- pass `value={watch("...")}` to each Select
- add `{ shouldValidate: true }` to every `setValue`
- add `aria-label` on each `SelectTrigger` (matches QuoteForm pattern)

### 3. Edge function: small hardening
`upload-contact-media/index.ts` is fine functionally. Minor improvements:
- Sanitize `fileExt` (strip anything non-alphanumeric, fall back to `bin`)
- Log file size + type on success for easier debugging
- Keep CORS, size, and MIME validation as-is

### 4. New admin helper edge function: `get-submission-media-url`
Bucket is private, so admins viewing rows in the Supabase dashboard can't open the stored paths directly. Add a small edge function that:
- Accepts `{ path: string }`
- Verifies the caller is authenticated AND has the `admin` role (via a new `user_roles` table — see §5)
- Returns a 1-hour signed URL from the `contact-uploads` bucket

This keeps customer media private but lets you (once you're an admin user) preview uploads.

### 5. Minimal `user_roles` table for admin access
Per security best practice, roles must live in a separate table. Migration will add:
- enum `app_role` ('admin', 'user')
- table `public.user_roles (id, user_id, role)` with RLS
- security-definer function `public.has_role(_user_id uuid, _role app_role)`
- RLS: users can read their own roles; only service role can write

No auth UI is added in this pass — you'll grant yourself admin via the SQL editor once you sign up. I'll call this out in the final message.

### 6. Memory + housekeeping
- No memory changes needed (form behavior already documented).
- No changes to `QuoteForm.tsx` — it's already correct.

## Technical summary

```text
contact form (Contact.tsx)  ──insert──▶  contact_submissions  (RLS: anon INSERT only)
quote form (QuoteForm.tsx)  ──insert──▶  contact_submissions
       │
       └── files ──invoke──▶ upload-contact-media (service role) ──▶ contact-uploads (private)

admin (future) ──invoke──▶ get-submission-media-url ──signed URL──▶ contact-uploads
                            │
                            └── checks has_role(auth.uid(), 'admin')
```

## Files touched
- `src/pages/Contact.tsx` — add property_type + preferred_contact_time, fix Selects, expand zod schema, include new columns in insert
- `supabase/functions/upload-contact-media/index.ts` — sanitize filename, add success log
- `supabase/functions/get-submission-media-url/index.ts` — new
- new migration: `app_role` enum, `user_roles` table + RLS + `has_role()`

## Out of scope (ask if you want them)
- Email notification on new submission (would need RESEND_API_KEY + a trigger or edge function)
- Admin dashboard UI to browse submissions in-app
- Auth UI (sign up / sign in pages)
