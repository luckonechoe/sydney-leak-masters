import { motion } from "framer-motion";
import { Check, Droplets, Clock, Shield, Star, ArrowRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTAButton } from "@/components/CTAButton";
import { WarrantyBadge } from "@/components/WarrantyBadge";
import { QuoteForm } from "@/components/QuoteForm";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { SEOHead, ServiceSchema, Breadcrumbs } from "@/components/seo";

const benefits = [
  "No tile removal required",
  "Same-day service available",
  "Premium epoxy grout technology",
  "10-year written warranty",
  "Minimal disruption to your home",
  "Clean, professional workmanship",
];

const processSteps = [
  {
    title: "Inspection",
    description: "We assess the damage, identify leak sources, and check grout condition throughout your shower.",
  },
  {
    title: "Preparation",
    description: "Old grout is carefully removed and surfaces are cleaned and primed for optimal adhesion.",
  },
  {
    title: "Application",
    description: "Premium waterproof epoxy grout is applied by our expert technicians with precision.",
  },
  {
    title: "Sealing",
    description: "A final waterproof sealant is applied to ensure long-lasting protection.",
  },
];

export default function ShowerRepairs() {
  const breadcrumbItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Shower Repairs", href: "/services/shower-repairs" },
  ];

  return (
    <>
      <SEOHead
        title="Shower Leak Repairs Sydney | Fix Without Re-Tiling"
        description="Stop shower leaks permanently with our premium epoxy grout solutions. No tile removal needed. 10-year warranty. Sydney-wide service."
      />
      <ServiceSchema
        name="Shower Leak Repair Service"
        description="Professional shower leak repair using premium epoxy grout technology. No tile removal required. 10-year warranty included."
        
      />

      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="pt-24 lg:pt-32 pb-16 lg:pb-24 relative overflow-hidden">
          <div className="absolute inset-0 grid-pattern" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />

          <div className="section-container relative">
            <Breadcrumbs items={breadcrumbItems} />

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-lg bg-secondary/10">
                    <Droplets className="w-8 h-8 text-secondary" />
                  </div>
                  <WarrantyBadge size="md" />
                </div>

                <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                  Shower Leak Repairs{" "}
                  <span className="gradient-text">Without Re-Tiling</span>
                </h1>

                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Fix your leaking shower permanently with our premium epoxy grout 
                  technology. No messy tile removal, no expensive renovations — just 
                  effective, lasting repairs backed by a 10-year warranty.
                </p>

                <div className="flex items-center gap-3 mb-8 p-4 bg-card rounded-lg border border-border">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                    ))}
                    <span className="ml-2 text-sm text-muted-foreground">5.0 rating</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <CTAButton variant="phone" size="lg">
                    Get Free Quote
                  </CTAButton>
                  <CTAButton variant="link" to="#quote-form" size="lg">
                    Book Inspection
                  </CTAButton>
                </div>
              </motion.div>

              {/* Image Placeholder */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative hidden lg:block"
              >
                <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-card to-muted border border-border overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-8">
                      <Droplets className="w-16 h-16 text-secondary/40 mx-auto mb-4" />
                      <p className="text-muted-foreground">Shower Repair Image</p>
                      <p className="text-xs text-muted-foreground/60">Before & After comparison</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Why Epoxy Grout is the{" "}
                  <span className="text-secondary">Smart Choice</span>
                </h2>
                <p className="text-muted-foreground mb-8">
                  Traditional cement grout fails over time, cracking and allowing water 
                  through. Our premium epoxy grout creates a waterproof barrier that 
                  lasts for decades — without the cost or hassle of re-tiling.
                </p>

                <ul className="grid sm:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <motion.li
                      key={benefit}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="p-1 rounded-full bg-secondary/20">
                        <Check className="w-4 h-4 text-secondary" />
                      </div>
                      <span className="text-foreground text-sm">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4"
              >
                <div className="p-6 bg-card rounded-lg border border-border">
                  <Clock className="w-10 h-10 text-secondary mb-4" />
                  <h3 className="font-heading font-bold text-xl text-foreground mb-2">
                    1 Day
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Most repairs completed in a single day
                  </p>
                </div>
                <div className="p-6 bg-card rounded-lg border border-border">
                  <Shield className="w-10 h-10 text-accent mb-4" />
                  <h3 className="font-heading font-bold text-xl text-foreground mb-2">
                    10 Years
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Written warranty on all repairs
                  </p>
                </div>
                <div className="col-span-2 p-6 bg-card rounded-lg border border-border">
                  <Droplets className="w-10 h-10 text-secondary mb-4" />
                  <h3 className="font-heading font-bold text-xl text-foreground mb-2">
                    100% Waterproof
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Epoxy grout creates an impermeable barrier that won't crack or deteriorate
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 lg:py-24">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Our Repair Process
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A systematic approach to ensure lasting results.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative p-6 bg-card rounded-lg border border-border"
                >
                  <div className="absolute -top-3 left-4 px-2 py-1 bg-secondary text-secondary-foreground text-xs font-bold rounded">
                    Step {index + 1}
                  </div>
                  <h3 className="font-heading font-bold text-lg text-foreground mt-2 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Quote Form Section */}
        <section id="quote-form" className="py-16 lg:py-24 bg-muted/30">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Get Your Shower Repair Quote
                </h2>
                <p className="text-muted-foreground mb-8">
                  Upload photos of your shower and we'll provide a detailed, 
                  no-obligation quote within 24 hours.
                </p>

                <div className="p-6 bg-card rounded-lg border border-border mb-6">
                  <h3 className="font-heading font-bold text-lg text-foreground mb-4">
                    What's Included:
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-sm text-foreground">
                      <Check className="w-4 h-4 text-secondary" />
                      Free on-site inspection
                    </li>
                    <li className="flex items-center gap-3 text-sm text-foreground">
                      <Check className="w-4 h-4 text-secondary" />
                      Detailed written quote
                    </li>
                    <li className="flex items-center gap-3 text-sm text-foreground">
                      <Check className="w-4 h-4 text-secondary" />
                      Premium epoxy grout application
                    </li>
                    <li className="flex items-center gap-3 text-sm text-foreground">
                      <Check className="w-4 h-4 text-secondary" />
                      10-year written warranty
                    </li>
                  </ul>
                </div>

                <WarrantyBadge size="lg" animated={false} />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <QuoteForm />
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
