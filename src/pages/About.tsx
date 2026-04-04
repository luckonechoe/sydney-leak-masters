import { motion } from "framer-motion";
import { Shield, Users, CheckCircle2, Heart, Target, Zap, ThumbsUp, Home, Building2, Key, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
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

const whyDifferent = [
  "We don't remove tiles — saving you thousands in renovation costs",
  "We use premium epoxy grout that outperforms cement grout by 10x",
  "We back every job with a written 10-year warranty",
  "We show up on time, every time — no excuses",
  "We explain the problem in plain English before we quote",
  "We never pressure you into a decision",
];

const clientFeedback = [
  "Clients regularly tell us we're the first company that actually found the source of the leak — rather than just patching over the surface.",
  "Homeowners consistently mention how much they appreciate the no-tile-removal approach. Less mess, less disruption, and a fraction of the cost of a full renovation.",
  "The 10-year written warranty is one of the most common reasons people choose us. It gives genuine peace of mind that the repair will last.",
];

const whoWeWorkWith = [
  {
    icon: Home,
    title: "Homeowners",
    description: "Whether you've noticed a small leak or significant water damage, we help you fix it properly — without the cost and disruption of a full renovation.",
  },
  {
    icon: Building2,
    title: "Strata Managers",
    description: "We understand the complexities of common property repairs, documentation requirements, and coordinating access across multiple units.",
  },
  {
    icon: Key,
    title: "Property Managers & Landlords",
    description: "We provide clear reporting, fixed-price quotes, and efficient scheduling to minimise tenant disruption and protect your investment.",
  },
];

export default function About() {
  return (
    <>
      <SEOHead
        title="About Sydney Sealed · Leak Repair Specialists You Can Trust"
        description="Meet the team behind Sydney Sealed. We fix leaking showers and balconies properly the first time — quality workmanship, honest advice, and a 10-year warranty on every job."
        canonical="https://sydneysealed.com.au/about"
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

              <p className="text-lg lg:text-xl text-muted-foreground mb-8 leading-relaxed">
                At Sydney Sealed, we believe leak repairs should be done properly the first time.
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

        {/* Tagline Bar */}
        <section className="py-8 border-y border-border/50 bg-muted/30">
          <div className="section-container">
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-medium text-muted-foreground">
              <span>Shower & Balcony Leak Repairs</span>
              <span className="hidden sm:inline text-border">·</span>
              <span>Premium Epoxy Grout</span>
              <span className="hidden sm:inline text-border">·</span>
              <span>10-Year Written Warranty</span>
              <span className="hidden sm:inline text-border">·</span>
              <span>All Sydney Suburbs</span>
            </div>
          </div>
        </section>

        <AboutPillars />

        {/* Our Story */}
        <section className="py-16 lg:py-24">
          <div className="section-container">
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                  <p>
                    Too often, homeowners are left with short-term fixes that look fine at first, but fail far too soon. Cheap materials, rushed workmanship and surface-level repairs can lead to bigger problems over time — including damage to subfloors, framing and surrounding areas.
                  </p>
                  <p className="text-foreground font-medium text-xl">
                    That is exactly why we started Sydney Sealed.
                  </p>
                  <p>
                    After years working alongside tilers, plumbers and waterproofing contractors across Sydney, we saw the same issues again and again. Repairs being carried out with low-grade materials. Leaks being treated at surface level without identifying the real cause. Homeowners paying for work that should have lasted, only to face the same problem again months or years later.
                  </p>
                  <p className="text-foreground font-medium text-xl">
                    We built our business to offer a better solution.
                  </p>
                  <p>
                    By investing in advanced epoxy grout systems, professional-grade waterproofing materials and specialist training, we developed a repair approach focused on long-term performance — not quick patch jobs. Our process is designed to identify the source of the leak, recommend the right repair method, and deliver a tailored solution suited to the condition of the property.
                  </p>
                  <p>
                    Whether it is an older home with long-term water ingress issues or a modern apartment affected by construction defects, we approach every job with the same focus on quality workmanship, reliable service and lasting results.
                  </p>
                  <p>
                    That is why we stand behind our work with a <span className="text-accent font-semibold">10-year written warranty</span>. It is not a marketing line. It is a reflection of the confidence we have in our materials, our methods and our team.
                  </p>
                  <p className="text-foreground font-semibold text-xl">
                    When we say the leak has been repaired, we mean it.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why We're Different */}
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

        {/* Our Values */}
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

        {/* Who We Work With */}
        <section className="py-16 lg:py-24 bg-muted/20">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Who We Work With
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                We tailor our service to suit homeowners, strata managers, and property professionals across Sydney.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {whoWeWorkWith.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 rounded-xl bg-card border border-border/50 text-center"
                  >
                    <div className="p-3 rounded-lg bg-secondary/10 w-fit mx-auto mb-4">
                      <Icon className="w-6 h-6 text-secondary" />
                    </div>
                    <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* What Our Clients Tell Us */}
        <section className="py-16 lg:py-24">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
                What Our Clients Tell Us
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                We don't have verified online reviews to share yet — but here's the feedback we consistently hear from our clients.
              </p>
            </motion.div>

            <div className="max-w-3xl mx-auto space-y-6">
              {clientFeedback.map((feedback, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-xl bg-card border border-border/50"
                >
                  <p className="text-foreground leading-relaxed">
                    {feedback}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="py-12 lg:py-16 bg-muted/20">
          <div className="section-container">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-6 text-center">
                Learn More About Our Services
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { label: "Leaking Shower Repairs", href: "/services/shower-repairs" },
                  { label: "Leaking Balcony Repairs", href: "/services/balcony-repairs" },
                  { label: "Strata Leak Repairs", href: "/strata" },
                  { label: "Complete Guide to Leak Repairs", href: "/guides/complete-guide-leak-repairs-sydney" },
                  { label: "Preventative Maintenance", href: "/preventative-maintenance" },
                  { label: "Request a Free Quote", href: "/contact" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="flex items-center gap-2 p-4 rounded-lg bg-card border border-border/50 hover:border-secondary/50 transition-colors group"
                  >
                    <ArrowRight className="w-4 h-4 text-secondary flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                    <span className="text-foreground font-medium text-sm">{link.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
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
