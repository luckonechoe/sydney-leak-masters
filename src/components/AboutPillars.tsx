import { motion } from "framer-motion";
import { Droplets, Wrench, HandshakeIcon } from "lucide-react";

const pillars = [
  {
    icon: Droplets,
    label: "Our Purpose",
    title: "We Understand the Damage Water Can Cause",
    description:
      "Leaks are not just annoying — they can lead to mould, deterioration, and costly repairs if left untreated. We help Sydney homeowners fix leaking showers and balconies with practical, high-quality sealing solutions before small issues become expensive damage.",
  },
  {
    icon: Wrench,
    label: "Our Standard",
    title: "We Believe in Doing the Job Properly",
    description:
      "From preparation to sealing and finishing, we focus on detail, durability, and professional workmanship. We value quality materials and repairs that are made to last — because cutting corners always costs more in the end.",
  },
  {
    icon: HandshakeIcon,
    label: "Our Promise",
    title: "We Serve Sydney with Honest, Reliable Solutions",
    description:
      "We give homeowners straightforward advice and long-lasting repair solutions without the runaround. Clear communication, honest recommendations, and reliable service from start to finish.",
  },
];

export function AboutPillars() {
  return (
    <section className="py-16 lg:py-24 bg-muted/20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-secondary font-semibold uppercase tracking-wider text-sm mb-3">
            Who We Are
          </p>
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Integrity. Craftsmanship. Protection.
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Who we help. How we work. Why clients trust us.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
                className="p-8 rounded-xl bg-card border border-border/50 card-hover text-center flex flex-col"
              >
                <div className="p-4 rounded-full bg-secondary/10 w-fit mx-auto mb-5">
                  <Icon className="w-7 h-7 text-secondary" />
                </div>
                <span className="text-secondary font-semibold text-xs uppercase tracking-widest mb-2">
                  {pillar.label}
                </span>
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">
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
