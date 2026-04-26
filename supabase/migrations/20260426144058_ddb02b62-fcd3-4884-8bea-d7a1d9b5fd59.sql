UPDATE storage.buckets
SET allowed_mime_types = ARRAY[
  'image/jpeg','image/png','image/webp','image/gif',
  'image/avif','image/heic','image/heif',
  'video/mp4','video/quicktime','video/webm'
]
WHERE id = 'contact-uploads';