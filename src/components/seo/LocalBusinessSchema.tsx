interface LocalBusinessSchemaProps {
  name?: string;
  description?: string;
  telephone?: string;
  email?: string;
  areaServed?: string;
  priceRange?: string;
}

export function LocalBusinessSchema({
  name = "Sydney Sealed",
  description = "Sydney's trusted specialists in shower and balcony leak repairs. Premium epoxy grout solutions with a 10-year warranty.",
  telephone = "+61400000000",
  email = "info@sydneysealed.com.au",
  areaServed = "Sydney, NSW, Australia",
  priceRange = "$$",
}: LocalBusinessSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://sydneysealed.com.au",
    name,
    description,
    telephone,
    email,
    areaServed: {
      "@type": "City",
      name: areaServed,
    },
    priceRange,
    image: "https://sydneysealed.com.au/og-image.jpg",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Sydney",
      addressRegion: "NSW",
      addressCountry: "AU",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -33.8688,
      longitude: 151.2093,
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
    sameAs: [
      "https://www.facebook.com/sydneysealed",
      "https://www.instagram.com/sydneysealed",
      "https://www.linkedin.com/company/sydneysealed",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
