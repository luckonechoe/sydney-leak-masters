import { motion } from "framer-motion";
import { MapPin, Search, Shield, Volume2, MessageSquare, Award } from "lucide-react";

const pillars = [
  {
    icon: MapPin,
    title: "Sydney Owned & Independent",
    description: "Locally owned and operated — no franchises, no outsourcing. Just real tradespeople who know Sydney.",
  },
  {
    icon: Search,
    title: "Tailored Leak Diagnosis",
    description: "Every leak is different. We diagnose the root cause before recommending solutions — no guesswork.",
  },
  {
    icon: Shield,
    title: "Long-Lasting Sealing Systems",
    description: "We use premium epoxy grouts and professional-grade sealants engineered to last decades, not months.",
  },
  {
    icon: Volume2,
    title: "Minimal Disruption Approach",
    description: "No tile removal, no demolition. We repair your leak with minimal mess and downtime to your home.",
  },
  {
    icon: MessageSquare,
    title: "Clear Communication",
    description: "Plain-English explanations, upfront pricing, and no surprises. You'll always know what's happening and why.",
  },
  {
    icon: Award,
    title: "Service-Backed Workmanship",
    description: "Every job is backed by our 10-year written warranty — because we stand behind every repair we do.",
  },
];

export function TrustPillars() {
  return (
    <section className="py-16 lg:py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Why Sydney Trusts Us
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Built on honest work, premium materials, and a commitment to getting it right the first time.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="p-6 rounded-xl bg-card border border-border/50 card-hover text-center"
              >
                <div className="p-3 rounded-lg bg-secondary/10 w-fit mx-auto mb-4">
                  <Icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                  {pillar.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
