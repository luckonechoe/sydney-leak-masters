-- Drop the existing permissive INSERT policy on contact-uploads
DROP POLICY IF EXISTS "Anyone can upload contact media" ON storage.objects;

-- Create a restrictive policy that only allows service_role to upload
CREATE POLICY "Only service role can upload contact media"
ON storage.objects
FOR INSERT
TO service_role
WITH CHECK (bucket_id = 'contact-uploads');