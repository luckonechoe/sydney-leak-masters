import { motion } from "framer-motion";
import { Check, Building2, Shield, AlertTriangle, Star, Droplets } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTAButton } from "@/components/CTAButton";
import { WarrantyBadge } from "@/components/WarrantyBadge";
import { QuoteForm } from "@/components/QuoteForm";
import { SEOHead, ServiceSchema, Breadcrumbs } from "@/components/seo";

const benefits = [
  "Prevents spalling",
  "Full membrane restoration",
  "Strata-approved methods",
  "Minimal disruption to residents",
  "10-year written warranty",
  "Compliant documentation provided",
];

const warningsSigns = [
  "Water stains on ceiling below balcony",
  "Cracking or lifting tiles",
  "Rust stains appearing on concrete",
  "Efflorescence (white salt deposits)",
  "Water pooling after rain",
  "Damaged or missing grout",
];

export default function BalconyRepairs() {
  const breadcrumbItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Balcony Repairs", href: "/services/balcony-repairs" },
  ];

  return (
    <>
      <SEOHead
        title="Balcony Leak Repairs Sydney | Prevent Concrete Degradation"
        description="Expert balcony waterproofing and leak repairs. Prevent concrete degradation and structural damage. Starting from $1,390. 10-year warranty. Strata approved."
      />
      <ServiceSchema
        name="Balcony Leak Repair Service"
        description="Professional balcony waterproofing and leak repair. Prevents concrete degradation and structural damage. 10-year warranty included."
        price="1390"
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
                    <Building2 className="w-8 h-8 text-secondary" />
                  </div>
                  <WarrantyBadge size="md" />
                </div>

                <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                  Balcony Leak Repairs{" "}
                  <span className="gradient-text">& Waterproofing</span>
                </h1>

                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Protect your property from costly concrete degradation and structural 
                  damage. Our expert waterproofing solutions seal balcony leaks 
                  permanently with strata-compliant methods.
                </p>

                <div className="flex items-center gap-6 mb-8 p-4 bg-card rounded-lg border border-border">
                  <div>
                    <span className="text-muted-foreground text-sm">Starting from</span>
                    <div className="text-3xl font-heading font-bold text-foreground">$1,390</div>
                  </div>
                  <div className="h-12 w-px bg-border" />
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
                      <Building2 className="w-16 h-16 text-secondary/40 mx-auto mb-4" />
                      <p className="text-muted-foreground">Balcony Repair Image</p>
                      <p className="text-xs text-muted-foreground/60">Waterproofing in progress</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Warning Signs Section */}
        <section className="py-16 lg:py-24 bg-destructive/5 border-y border-destructive/10">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="w-8 h-8 text-destructive" />
                  <h2 className="font-heading text-2xl lg:text-3xl font-bold text-foreground">
                    Warning Signs of Balcony Leaks
                  </h2>
                </div>
                <p className="text-muted-foreground mb-8">
                  Don't ignore these signs. Left untreated, balcony leaks lead to 
                  spalling — a costly structural problem that only gets worse 
                  with time.
                </p>

                <ul className="grid sm:grid-cols-2 gap-4">
                  {warningsSigns.map((sign, index) => (
                    <motion.li
                      key={sign}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="p-1 rounded-full bg-destructive/20 mt-0.5">
                        <AlertTriangle className="w-3 h-3 text-destructive" />
                      </div>
                      <span className="text-foreground text-sm">{sign}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-8 bg-card rounded-xl border border-border"
              >
                <h3 className="font-heading font-bold text-xl text-foreground mb-4">
                  What is Spalling?
                </h3>
                <p className="text-muted-foreground mb-6">
                  When water penetrates concrete through cracks or failed waterproofing, 
                  it reaches the steel reinforcement inside. This causes rust, which 
                  expands and cracks the concrete further — creating a cycle of 
                  deterioration that can compromise structural integrity.
                </p>
                <p className="text-sm text-accent font-medium">
                  Early intervention can save you thousands in structural repairs.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 lg:py-24">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Why Choose Our{" "}
                  <span className="text-secondary">Balcony Repairs?</span>
                </h2>
                <p className="text-muted-foreground mb-8">
                  We use professional-grade waterproofing membranes and techniques 
                  that meet Australian Standards. Perfect for strata complexes, 
                  apartments, and residential properties.
                </p>

                <ul className="grid sm:grid-cols-2 gap-4 mb-8">
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

                <CTAButton variant="link" to="/strata">
                  Learn About Strata Services →
                </CTAButton>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4"
              >
                <div className="p-6 bg-card rounded-lg border border-border">
                  <Droplets className="w-10 h-10 text-secondary mb-4" />
                  <h3 className="font-heading font-bold text-xl text-foreground mb-2">
                    Waterproof
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Complete membrane restoration
                  </p>
                </div>
                <div className="p-6 bg-card rounded-lg border border-border">
                  <Shield className="w-10 h-10 text-accent mb-4" />
                  <h3 className="font-heading font-bold text-xl text-foreground mb-2">
                    Protected
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Prevents spalling
                  </p>
                </div>
                <div className="col-span-2 p-6 bg-card rounded-lg border border-border">
                  <Building2 className="w-10 h-10 text-secondary mb-4" />
                  <h3 className="font-heading font-bold text-xl text-foreground mb-2">
                    Strata Approved
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    All work complies with Australian Standards and comes with 
                    documentation for strata records
                  </p>
                </div>
              </motion.div>
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
                  Get Your Balcony Repair Quote
                </h2>
                <p className="text-muted-foreground mb-8">
                  Upload photos of your balcony and we'll assess the damage and 
                  provide a detailed, no-obligation quote.
                </p>

                <div className="p-6 bg-card rounded-lg border border-border mb-6">
                  <h3 className="font-heading font-bold text-lg text-foreground mb-4">
                    What's Included:
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-sm text-foreground">
                      <Check className="w-4 h-4 text-secondary" />
                      Comprehensive leak assessment
                    </li>
                    <li className="flex items-center gap-3 text-sm text-foreground">
                      <Check className="w-4 h-4 text-secondary" />
                      Membrane condition report
                    </li>
                    <li className="flex items-center gap-3 text-sm text-foreground">
                      <Check className="w-4 h-4 text-secondary" />
                      Professional waterproofing
                    </li>
                    <li className="flex items-center gap-3 text-sm text-foreground">
                      <Check className="w-4 h-4 text-secondary" />
                      10-year written warranty
                    </li>
                    <li className="flex items-center gap-3 text-sm text-foreground">
                      <Check className="w-4 h-4 text-secondary" />
                      Strata compliance documentation
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
