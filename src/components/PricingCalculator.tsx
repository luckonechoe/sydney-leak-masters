import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, CheckCircle2, ArrowRight } from "lucide-react";
import { CTAButton } from "@/components/CTAButton";

interface PricingCalculatorProps {
  type: "shower" | "balcony";
}

const showerOptions = {
  sizes: [
    { label: "Small Shower", description: "Single shower recess (up to 1.2m²)", multiplier: 0.85 },
    { label: "Standard Shower", description: "Average shower (1.2m² – 2m²)", multiplier: 1 },
    { label: "Large Shower", description: "Double or walk-in shower (2m²+)", multiplier: 1.35 },
  ],
  conditions: [
    { label: "Minor", description: "Grout discolouration, early cracking", multiplier: 0.9 },
    { label: "Moderate", description: "Visible leaks, mould, crumbling grout", multiplier: 1 },
    { label: "Severe", description: "Loose tiles, water damage below", multiplier: 1.2 },
  ],
  basePrice: 790,
};

const balconyOptions = {
  sizes: [
    { label: "Small Balcony", description: "Juliet or compact (up to 4m²)", multiplier: 1 },
    { label: "Medium Balcony", description: "Standard balcony (4m² – 10m²)", multiplier: 1.4 },
    { label: "Large Balcony", description: "Wraparound or terrace (10m²+)", multiplier: 2.1 },
  ],
  conditions: [
    { label: "Minor", description: "Surface grout cracking, no visible leaks", multiplier: 0.9 },
    { label: "Moderate", description: "Active leaks, water stains below", multiplier: 1 },
    { label: "Severe", description: "Spalling, loose tiles, structural concern", multiplier: 1.25 },
  ],
  basePrice: 1690,
};

export function PricingCalculator({ type }: PricingCalculatorProps) {
  const options = type === "shower" ? showerOptions : balconyOptions;
  const [sizeIndex, setSizeIndex] = useState(1);
  const [conditionIndex, setConditionIndex] = useState(1);

  const estimate = Math.round(
    options.basePrice * options.sizes[sizeIndex].multiplier * options.conditions[conditionIndex].multiplier
  );

  const lowEstimate = Math.round(estimate * 0.9);
  const highEstimate = Math.round(estimate * 1.1);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/20 text-secondary text-xs font-bold uppercase tracking-wider mb-4">
          <Calculator className="w-3.5 h-3.5" />
          Instant Estimate
        </div>
        <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
          {type === "shower" ? "Shower Repair" : "Balcony Repair"} Cost Calculator
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Get a quick estimate for your {type} leak repair. Select your {type} size and 
          condition below for an indicative price range.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="bg-card rounded-xl border border-border p-6 lg:p-8 space-y-8">
          {/* Step 1: Size */}
          <div>
            <h3 className="font-heading font-bold text-foreground mb-1 flex items-center gap-2">
              <span className="w-7 h-7 rounded-full bg-secondary/20 text-secondary text-sm flex items-center justify-center font-bold">1</span>
              Select {type === "shower" ? "Shower" : "Balcony"} Size
            </h3>
            <p className="text-sm text-muted-foreground mb-4 ml-9">
              Choose the option that best matches your {type}.
            </p>
            <div className="grid sm:grid-cols-3 gap-3">
              {options.sizes.map((size, i) => (
                <button
                  key={size.label}
                  onClick={() => setSizeIndex(i)}
                  className={`p-4 rounded-lg border text-left transition-all ${
                    sizeIndex === i
                      ? "border-secondary bg-secondary/10 ring-1 ring-secondary/30"
                      : "border-border hover:border-muted-foreground/30"
                  }`}
                >
                  <p className="font-heading font-bold text-sm text-foreground">{size.label}</p>
                  <p className="text-xs text-muted-foreground mt-1">{size.description}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Condition */}
          <div>
            <h3 className="font-heading font-bold text-foreground mb-1 flex items-center gap-2">
              <span className="w-7 h-7 rounded-full bg-secondary/20 text-secondary text-sm flex items-center justify-center font-bold">2</span>
              Current Condition
            </h3>
            <p className="text-sm text-muted-foreground mb-4 ml-9">
              How severe is the damage or leak?
            </p>
            <div className="grid sm:grid-cols-3 gap-3">
              {options.conditions.map((condition, i) => (
                <button
                  key={condition.label}
                  onClick={() => setConditionIndex(i)}
                  className={`p-4 rounded-lg border text-left transition-all ${
                    conditionIndex === i
                      ? "border-secondary bg-secondary/10 ring-1 ring-secondary/30"
                      : "border-border hover:border-muted-foreground/30"
                  }`}
                >
                  <p className="font-heading font-bold text-sm text-foreground">{condition.label}</p>
                  <p className="text-xs text-muted-foreground mt-1">{condition.description}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Result */}
          <div>
            <h3 className="font-heading font-bold text-foreground mb-4 flex items-center gap-2">
              <span className="w-7 h-7 rounded-full bg-secondary/20 text-secondary text-sm flex items-center justify-center font-bold">3</span>
              Your Estimated Cost
            </h3>
            <div className="bg-muted/50 rounded-lg p-6 text-center">
              <p className="text-sm text-muted-foreground mb-2">Indicative price range</p>
              <p className="font-heading text-4xl lg:text-5xl font-bold text-foreground">
                ${lowEstimate.toLocaleString()} – ${highEstimate.toLocaleString()}
              </p>
              <p className="text-xs text-muted-foreground mt-3">
                *Final pricing confirmed after free on-site inspection. No hidden fees.
              </p>
            </div>
          </div>

          {/* Inclusions */}
          <div className="border-t border-border pt-6">
            <p className="font-heading font-bold text-sm text-foreground mb-3">Every repair includes:</p>
            <div className="grid sm:grid-cols-2 gap-2">
              {[
                "Free on-site inspection",
                "Premium epoxy grout application",
                "10-year written warranty",
                "Full clean-up on completion",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <CTAButton variant="phone" size="lg">
              Get Exact Quote
            </CTAButton>
            <CTAButton variant="link" to="#quote-form" size="lg">
              Book Free Inspection
            </CTAButton>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
