
-- ============ Contact submissions table ============
CREATE TABLE IF NOT EXISTS public.contact_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  suburb TEXT,
  address TEXT,
  property_type TEXT,
  service_type TEXT,
  caller_type TEXT,
  urgency TEXT,
  subject TEXT,
  description TEXT,
  preferred_contact_time TEXT,
  message TEXT,
  media_urls TEXT[] DEFAULT '{}',
  source TEXT NOT NULL DEFAULT 'contact',
  status TEXT NOT NULL DEFAULT 'new',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Public can submit; nothing else exposed
DROP POLICY IF EXISTS "Anyone can submit a contact form" ON public.contact_submissions;
CREATE POLICY "Anyone can submit a contact form"
ON public.contact_submissions
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

DROP POLICY IF EXISTS "Only service role can view contact submissions" ON public.contact_submissions;
CREATE POLICY "Only service role can view contact submissions"
ON public.contact_submissions
FOR SELECT
TO service_role
USING (true);

DROP POLICY IF EXISTS "Only service role can update contact submissions" ON public.contact_submissions;
CREATE POLICY "Only service role can update contact submissions"
ON public.contact_submissions
FOR UPDATE
TO service_role
USING (true)
WITH CHECK (true);

DROP POLICY IF EXISTS "Only service role can delete contact submissions" ON public.contact_submissions;
CREATE POLICY "Only service role can delete contact submissions"
ON public.contact_submissions
FOR DELETE
TO service_role
USING (true);

-- ============ Updated_at trigger ============
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

REVOKE EXECUTE ON FUNCTION public.update_updated_at_column() FROM PUBLIC, anon, authenticated;

DROP TRIGGER IF EXISTS update_contact_submissions_updated_at ON public.contact_submissions;
CREATE TRIGGER update_contact_submissions_updated_at
BEFORE UPDATE ON public.contact_submissions
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at
  ON public.contact_submissions (created_at DESC);

-- ============ Storage bucket (private) ============
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'contact-uploads',
  'contact-uploads',
  false,
  52428800,
  ARRAY[
    'image/jpeg','image/png','image/webp','image/gif',
    'image/avif','image/heic','image/heif',
    'video/mp4','video/quicktime','video/webm'
  ]
)
ON CONFLICT (id) DO UPDATE SET
  public = EXCLUDED.public,
  file_size_limit = EXCLUDED.file_size_limit,
  allowed_mime_types = EXCLUDED.allowed_mime_types;

-- Storage policies: only service_role (edge function) can write or read
DROP POLICY IF EXISTS "Anyone can upload contact media" ON storage.objects;
DROP POLICY IF EXISTS "Anyone can view contact media" ON storage.objects;
DROP POLICY IF EXISTS "Only service role can upload contact media" ON storage.objects;
DROP POLICY IF EXISTS "Only service role can view contact media" ON storage.objects;

CREATE POLICY "Only service role can upload contact media"
ON storage.objects
FOR INSERT
TO service_role
WITH CHECK (bucket_id = 'contact-uploads');

CREATE POLICY "Only service role can view contact media"
ON storage.objects
FOR SELECT
TO service_role
USING (bucket_id = 'contact-uploads');
