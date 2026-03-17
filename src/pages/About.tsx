import { motion } from "framer-motion";
import { Shield, Award, Users, CheckCircle2, Clock, Droplets, Heart, Target, Zap, ThumbsUp } from "lucide-react";
import { Header } from "@/components/Header";
import { AboutPillars } from "@/components/AboutPillars";
import { Footer } from "@/components/Footer";
import { CTAButton } from "@/components/CTAButton";
import { WarrantyBadge } from "@/components/WarrantyBadge";
import { SEOHead, Breadcrumbs } from "@/components/seo";

const values = [
  {
    icon: Target,
    title: "Fix It Right, Not Fast",
    description:
      "Most companies want to get in and out. We want to get it right. That means proper diagnosis, premium materials, and workmanship that lasts decades — not months.",
  },
  {
    icon: Heart,
    title: "We Treat Your Home Like Ours",
    description:
      "We cover your floors, clean up after ourselves, and leave your bathroom better than we found it. Because respect isn't optional — it's how we operate.",
  },
  {
    icon: Shield,
    title: "No Shortcuts. Ever.",
    description:
      "We only use premium epoxy grouts and professional-grade sealants. Cheap products fail. We don't stock them, recommend them, or use them. Period.",
  },
  {
    icon: Zap,
    title: "Honest, Upfront Pricing",
    description:
      "No hidden fees. No 'surprise' extras halfway through. You get a clear, fixed quote before we start — and that's what you pay. Simple.",
  },
];

const stats = [
  { value: "2,500+", label: "Leaks Fixed" },
  { value: "10 Year", label: "Warranty" },
  { value: "98%", label: "Customer Satisfaction" },
  { value: "0", label: "Tiles Removed" },
];

const whyDifferent = [
  "We don't remove tiles — saving you thousands in renovation costs",
  "We use premium epoxy grout that outperforms cement grout by 10x",
  "We back every job with a written 10-year warranty",
  "We show up on time, every time — no excuses",
  "We explain the problem in plain English before we quote",
  "We never pressure you into a decision",
];

const socialProof = [
  {
    quote: "They found the leak source in 15 minutes that another company couldn't find in 2 visits.",
    name: "Sarah M.",
    location: "Bondi, Sydney",
  },
  {
    quote: "No mess, no drama, no tiles ripped out. Just a fixed shower that hasn't leaked since.",
    name: "James T.",
    location: "Parramatta, Sydney",
  },
  {
    quote: "The 10-year warranty gave us peace of mind. That's confidence in your own work.",
    name: "Linda & Robert K.",
    location: "Chatswood, Sydney",
  },
];

export default function About() {
  return (
    <>
      <SEOHead
        title="About Us – Sydney's Trusted Leak Repair Specialists"
        description="We're not your average leak repair company. Sydney Leak Repairs Pro uses premium epoxy grout solutions with a 10-year warranty. No tile removal. No shortcuts."
        canonical="https://sydneyleakrepairspro.com.au/about"
      />

      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="relative pt-24 lg:pt-32 pb-16 lg:pb-24 overflow-hidden">
          <div className="absolute inset-0 grid-pattern" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />

          <div className="section-container relative">
            <Breadcrumbs
              items={[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
              ]}
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center mt-8"
            >
              <WarrantyBadge size="lg" className="mb-6 mx-auto" />

              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                We're Not Your Average{" "}
                <span className="gradient-text">Leak Repair Company.</span>
              </h1>

              <p className="text-lg lg:text-xl text-muted-foreground mb-4 leading-relaxed">
                Most waterproofing companies will rip out your tiles, charge you a fortune, 
                and disappear. We do the opposite.
              </p>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We fix leaks <span className="text-secondary font-semibold">permanently</span> — 
                without removing a single tile — using premium epoxy grout technology 
                backed by a <span className="text-accent font-semibold">10-year written warranty</span>.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <CTAButton variant="phone" size="lg">
                  Call Us Now
                </CTAButton>
                <CTAButton variant="link" to="/contact" size="lg">
                  Get a Free Quote
                </CTAButton>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Bar — Social Proof Trigger */}
        <section className="py-12 border-y border-border/50 bg-muted/30">
          <div className="section-container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="font-heading text-3xl lg:text-4xl font-bold text-secondary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <TrustPillars />

        {/* The Problem — Agitate Pain Point */}
        <section className="py-16 lg:py-24">
          <div className="section-container">
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Here's What Most Companies Won't Tell You
                </h2>

                <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                  <p>
                    The leak repair industry has a dirty secret: <span className="text-foreground font-medium">most fixes don't last</span>.
                  </p>
                  <p>
                    Standard cement grout breaks down within 2–5 years. Cheap silicone peels off in months.
                    And the "quick fix" that costs $200? It'll cost you $5,000 when the water damage spreads
                    to your subfloor, framing, and the apartment below.
                  </p>
                  <p>
                    We started Sydney Leak Repairs Pro because we were tired of seeing homeowners get burned 
                    by sloppy work and Band-Aid solutions. We believed there was a better way — 
                    and we built our entire business around it.
                  </p>
                  <p>
                    Our founder spent years working alongside tilers, plumbers, and waterproofing contractors across Sydney — 
                    and saw the same problems repeated on every job site. Contractors using the cheapest materials to maximise 
                    their margins. Repairs that looked fine on the surface but failed within months. Homeowners left footing 
                    the bill for damage that should never have happened.
                  </p>
                  <p>
                    That experience shaped everything about how we operate today. We invested in training our team on the 
                    latest epoxy grout systems and waterproofing technologies used in commercial construction — not the 
                    hardware-store products most residential contractors rely on. We developed a diagnostic process that 
                    identifies the <span className="text-foreground font-medium">root cause</span> of every leak, not just 
                    the visible symptoms. And we committed to using only materials that meet or exceed Australian Standards 
                    AS 3740 and AS 4654.2 — because your home deserves the same quality as a hospital or a high-rise.
                  </p>
                  <p>
                    The result? A repair method that genuinely lasts. We don't just patch the problem — we engineer a 
                    long-term waterproofing solution tailored to your property's specific conditions. Whether it's a 
                    heritage terrace in the Inner West dealing with decades-old plumbing, or a modern apartment on the 
                    North Shore with construction defects, we approach every job with the same level of care and precision.
                  </p>
                  <p>
                    That's why we're confident enough to back every repair with a <span className="text-accent font-semibold">10-year written warranty</span>. 
                    It's not a marketing gimmick — it's a reflection of how much we trust our materials, our methods, and 
                    our people. When we say your leak is fixed, we mean it.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why We're Different — Authority + Differentiation */}
        <section className="py-16 lg:py-24 bg-muted/20">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
                What Makes Us Different
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                It's not just what we do — it's how we do it.
              </p>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              <div className="space-y-4">
                {whyDifferent.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border/50 card-hover"
                  >
                    <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground font-medium">{point}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Our Values — Emotional Connection */}
        <section className="py-16 lg:py-24">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Our Promise to You
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                These aren't just words on a wall. They're the standards we hold ourselves to on every single job.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 rounded-xl bg-card border border-border/50 card-hover"
                  >
                    <div className="p-3 rounded-lg bg-secondary/10 w-fit mb-4">
                      <Icon className="w-6 h-6 text-secondary" />
                    </div>
                    <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Mini Testimonials — Social Proof */}
        <section className="py-16 lg:py-24 bg-muted/20">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Don't Take Our Word For It
              </h2>
              <p className="text-muted-foreground text-lg">
                Hear from real Sydney homeowners.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {socialProof.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-xl bg-card border border-border/50"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Award key={i} className="w-4 h-4 text-accent fill-accent" />
                    ))}
                  </div>
                  <p className="text-foreground italic mb-4 leading-relaxed">
                    "{item.quote}"
                  </p>
                  <div>
                    <div className="font-heading font-semibold text-foreground text-sm">
                      {item.name}
                    </div>
                    <div className="text-muted-foreground text-xs">{item.location}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA — Urgency + Scarcity */}
        <section className="py-16 lg:py-24">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Every Day You Wait, the Damage Gets Worse
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Water doesn't stop. A small leak today becomes structural damage tomorrow. 
                Get a free, no-obligation inspection and find out exactly what's going on — 
                before it costs you thousands more.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <CTAButton variant="phone" size="lg">
                  Call For a Free Quote
                </CTAButton>
                <CTAButton variant="link" to="/contact" size="lg">
                  Book an Inspection
                </CTAButton>
              </div>
              <p className="text-muted-foreground text-sm mt-6">
                <ThumbsUp className="w-4 h-4 inline-block mr-1 text-secondary" />
                No pressure. No obligation. Just honest advice from real experts.
              </p>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
