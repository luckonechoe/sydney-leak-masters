-- Create storage bucket for contact form media uploads
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'contact-uploads',
  'contact-uploads',
  true,
  52428800,
  ARRAY['image/jpeg', 'image/png', 'image/webp', 'image/heic', 'video/mp4', 'video/quicktime', 'video/webm']
);

-- Allow anyone to upload files
CREATE POLICY "Anyone can upload contact media"
ON storage.objects FOR INSERT
TO public
WITH CHECK (bucket_id = 'contact-uploads');

-- Allow anyone to view contact media
CREATE POLICY "Anyone can view contact media"
ON storage.objects FOR SELECT
TO public
USING (bucket_id = 'contact-uploads');