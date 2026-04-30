-- 1. Make contact-uploads bucket private
UPDATE storage.buckets SET public = false WHERE id = 'contact-uploads';

-- 2. Drop public SELECT policy and replace with service_role only
DROP POLICY IF EXISTS "Anyone can view contact media" ON storage.objects;

CREATE POLICY "Only service role can view contact media"
ON storage.objects
FOR SELECT
TO service_role
USING (bucket_id = 'contact-uploads');

-- 3. Add explicit restrictive policies on contact_submissions for SELECT/UPDATE/DELETE (service_role only)
CREATE POLICY "Only service role can view contact submissions"
ON public.contact_submissions
FOR SELECT
TO service_role
USING (true);

CREATE POLICY "Only service role can update contact submissions"
ON public.contact_submissions
FOR UPDATE
TO service_role
USING (true)
WITH CHECK (true);

CREATE POLICY "Only service role can delete contact submissions"
ON public.contact_submissions
FOR DELETE
TO service_role
USING (true);

-- 4. Revoke EXECUTE on SECURITY DEFINER helper functions from anon/authenticated/public
REVOKE EXECUTE ON FUNCTION public.update_updated_at_column() FROM PUBLIC, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.rls_auto_enable() FROM PUBLIC, anon, authenticated;