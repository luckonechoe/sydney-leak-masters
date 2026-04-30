interface LocalBusinessSchemaProps {
  name?: string;
  description?: string;
  telephone?: string;
  email?: string;
  areaServed?: string;
  priceRange?: string;
  /** Optional override for @id (used by suburb pages so each page has a unique business node). */
  id?: string;
  /** Optional locality override (suburb name). */
  addressLocality?: string;
  /** Optional postcode for the suburb. */
  postalCode?: string;
  /** Optional precise geo coordinates for the suburb. */
  geo?: { latitude: number; longitude: number };
}

export function LocalBusinessSchema({
  name = "Sydney Sealed",
  description = "Sydney's trusted specialists in shower and balcony leak repairs. Premium epoxy grout solutions with a 10-year warranty.",
  telephone = "+61400000000",
  email = "info@sydneysealed.com.au",
  areaServed = "Sydney, NSW, Australia",
  priceRange = "$$",
  id = "https://sydneysealed.com.au",
  addressLocality = "Sydney",
  postalCode,
  geo,
}: LocalBusinessSchemaProps) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": id,
    name,
    description,
    telephone,
    email,
    areaServed: {
      "@type": "Place",
      name: areaServed,
    },
    priceRange,
    image: "https://sydneysealed.com.au/og-image.jpg",
    address: {
      "@type": "PostalAddress",
      addressLocality,
      ...(postalCode ? { postalCode } : {}),
      addressRegion: "NSW",
      addressCountry: "AU",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: geo?.latitude ?? -33.8688,
      longitude: geo?.longitude ?? 151.2093,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:30",
        closes: "15:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:30",
        closes: "13:00",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
