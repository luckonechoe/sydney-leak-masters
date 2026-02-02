interface ServiceSchemaProps {
  name: string;
  description: string;
  provider?: string;
  areaServed?: string;
  price?: string;
  priceCurrency?: string;
}

export function ServiceSchema({
  name,
  description,
  provider = "Sydney Leak Repairs Pro",
  areaServed = "Sydney, NSW, Australia",
  price,
  priceCurrency = "AUD",
}: ServiceSchemaProps) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "LocalBusiness",
      name: provider,
    },
    areaServed: {
      "@type": "City",
      name: areaServed,
    },
    serviceType: "Home Repair",
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
