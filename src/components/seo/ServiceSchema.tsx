interface ServiceSchemaProps {
  name: string;
  description: string;
  provider?: string;
  areaServed?: string;
  price?: string;
  priceCurrency?: string;
  /** Optional URL identifying the service page (used as @id for de-duplication). */
  url?: string;
  /** Optional precise geo coordinates of the served suburb. */
  geo?: { latitude: number; longitude: number };
  /** Optional postcode of the served suburb. */
  postalCode?: string;
}

export function ServiceSchema({
  name,
  description,
  provider = "Sydney Sealed",
  areaServed = "Sydney, NSW, Australia",
  price,
  priceCurrency = "AUD",
  url,
  geo,
  postalCode,
}: ServiceSchemaProps) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "LocalBusiness",
      name: provider,
      ...(url ? { url } : {}),
    },
    areaServed: {
      "@type": "Place",
      name: areaServed,
      ...(geo
        ? {
            geo: {
              "@type": "GeoCoordinates",
              latitude: geo.latitude,
              longitude: geo.longitude,
            },
          }
        : {}),
      ...(postalCode
        ? {
            address: {
              "@type": "PostalAddress",
              postalCode,
              addressRegion: "NSW",
              addressCountry: "AU",
            },
          }
        : {}),
    },
    serviceType: "Home Repair",
    ...(url ? { "@id": `${url}#service`, url } : {}),
  };

  if (price) {
    schema.offers = {
      "@type": "Offer",
      price,
      priceCurrency,
      availability: "https://schema.org/InStock",
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
