import { Helmet } from "react-helmet-async";

interface HowToStep {
  name: string;
  text: string;
  url?: string;
}

interface HowToSchemaProps {
  name: string;
  description: string;
  totalTime?: string; // ISO 8601 duration, e.g. "PT2H"
  estimatedCost?: { currency: string; value: string };
  supply?: string[];
  tool?: string[];
  steps: HowToStep[];
}

export function HowToSchema({
  name,
  description,
  totalTime,
  estimatedCost,
  supply,
  tool,
  steps,
}: HowToSchemaProps) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    step: steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
      ...(s.url ? { url: s.url } : {}),
    })),
  };

  if (totalTime) schema.totalTime = totalTime;
  if (estimatedCost) {
    schema.estimatedCost = {
      "@type": "MonetaryAmount",
      currency: estimatedCost.currency,
      value: estimatedCost.value,
    };
  }
  if (supply?.length) {
    schema.supply = supply.map((s) => ({ "@type": "HowToSupply", name: s }));
  }
  if (tool?.length) {
    schema.tool = tool.map((t) => ({ "@type": "HowToTool", name: t }));
  }

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}
