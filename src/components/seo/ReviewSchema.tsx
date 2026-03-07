import { Helmet } from "react-helmet-async";

interface Review {
  author: string;
  rating: number;
  body: string;
  datePublished?: string;
}

interface ReviewSchemaProps {
  businessName?: string;
  ratingValue: number;
  reviewCount: number;
  reviews?: Review[];
}

export function ReviewSchema({
  businessName = "Sydney Leak Repairs Pro",
  ratingValue,
  reviewCount,
  reviews = [],
}: ReviewSchemaProps) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: businessName,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: ratingValue.toString(),
      reviewCount: reviewCount.toString(),
      bestRating: "5",
      worstRating: "1",
    },
  };

  if (reviews.length > 0) {
    schema.review = reviews.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.author },
      reviewRating: {
        "@type": "Rating",
        ratingValue: r.rating.toString(),
        bestRating: "5",
      },
      reviewBody: r.body,
      ...(r.datePublished && { datePublished: r.datePublished }),
    }));
  }

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}
