import { motion } from "framer-motion";
import { Check, Droplets, Clock, Shield, Star, ArrowRight, AlertTriangle, Layers, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTAButton } from "@/components/CTAButton";
import { WarrantyBadge } from "@/components/WarrantyBadge";
import { QuoteForm } from "@/components/QuoteForm";
import { SEOHead, ServiceSchema, Breadcrumbs, FAQSchema } from "@/components/seo";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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

const leakCauses = [
  {
    title: "Failed Grout",
    description: "Cement grout deteriorates over time, cracking and allowing water to seep behind tiles into your walls and floor.",
  },
  {
    title: "Cracked Waterproof Membrane",
    description: "The original waterproof membrane beneath your tiles can crack due to building movement, age, or poor initial installation.",
  },
  {
    title: "Poor Original Installation",
    description: "Many showers were built without adequate waterproofing or with substandard materials that fail prematurely.",
  },
  {
    title: "Movement Cracks",
    description: "Natural building settlement causes stress fractures in grout and tiles, creating pathways for water ingress.",
  },
  {
    title: "Degraded Silicone Seals",
    description: "Silicone joints around shower screens, trays, and wall junctions deteriorate and pull away from surfaces over time.",
  },
];

const showerFAQs = [
  {
    question: "Can you fix a leaking shower without removing tiles?",
    answer: "Yes, in most cases we can repair your leaking shower without removing any tiles. Our epoxy grout system is applied directly over existing tile joints after the old grout is removed. This means no messy demolition, no tile matching headaches, and repairs typically completed in a single day.",
  },
  {
    question: "How long does epoxy grout last in a shower?",
    answer: "Premium epoxy grout is significantly more durable than traditional cement grout. When professionally applied, epoxy grout can last 20+ years without cracking, staining, or allowing water penetration. That's why we back our work with a 10-year written warranty.",
  },
  {
    question: "Is epoxy grout safe for bathrooms?",
    answer: "Absolutely. Epoxy grout is non-toxic once cured, resistant to mould and mildew growth, and meets Australian Standards for use in wet areas. It's actually more hygienic than cement grout because its non-porous surface prevents bacteria build-up.",
  },
  {
    question: "How soon can I use my shower after repair?",
    answer: "Epoxy grout cures quickly. In most cases, you can use your shower within 24 hours of the repair being completed. We'll provide specific curing time guidance based on the products used and conditions on the day.",
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
        title="Shower Leak Repairs Sydney | Fix Leaking Shower Without Removing Tiles"
        description="Professional shower leak repair in Sydney using premium epoxy grout. Fix your leaking shower without tile removal. Same-day service, 10-year warranty. Free inspection."
      />
      <ServiceSchema
        name="Shower Leak Repair Service"
        description="Professional shower leak repair using premium epoxy grout technology. No tile removal required. 10-year warranty included."
      />
      <FAQSchema faqs={showerFAQs} />

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
                  effective, lasting repairs backed by a 10-year warranty. We also offer expert{" "}
                  <Link to="/services/balcony-repairs" className="text-secondary hover:underline">
                    balcony waterproofing
                  </Link>{" "}
                  across Sydney.
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

        {/* Common Causes Section */}
        <section className="py-16 lg:py-24">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Common Causes of Shower Leaks
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Understanding why your shower is leaking helps determine the best repair approach. 
                Here are the most common causes of shower waterproofing failure we encounter across Sydney homes.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {leakCauses.map((cause, index) => (
                <motion.div
                  key={cause.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="p-6 bg-card rounded-lg border border-border"
                >
                  <div className="p-2 rounded-lg bg-destructive/10 w-fit mb-4">
                    <AlertTriangle className="w-5 h-5 text-destructive" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-foreground mb-2">
                    {cause.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{cause.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Our Shower Repair Process
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A systematic approach to ensure lasting results for your leaking shower fix.
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

        {/* Epoxy vs Cement Grout Section */}
        <section className="py-16 lg:py-24">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Epoxy Grout vs Cement Grout
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Not all grout is created equal. Here's why epoxy grout is the superior choice for shower waterproofing in Sydney.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-8 bg-secondary/5 rounded-xl border border-secondary/20"
              >
                <div className="flex items-center gap-3 mb-6">
                  <Layers className="w-8 h-8 text-secondary" />
                  <h3 className="font-heading font-bold text-xl text-foreground">
                    Epoxy Grout <span className="text-secondary">(Our Choice)</span>
                  </h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "100% waterproof — impermeable barrier",
                    "Lasts 20+ years without deteriorating",
                    "Resistant to mould, mildew, and staining",
                    "Flexible — absorbs minor building movement",
                    "Non-porous — hygienic and easy to clean",
                    "Chemical and acid resistant",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm">
                      <Check className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-8 bg-card rounded-xl border border-border"
              >
                <div className="flex items-center gap-3 mb-6">
                  <Layers className="w-8 h-8 text-muted-foreground" />
                  <h3 className="font-heading font-bold text-xl text-foreground">
                    Cement Grout <span className="text-muted-foreground">(Traditional)</span>
                  </h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "Porous — absorbs water over time",
                    "Typically lasts 5–10 years before cracking",
                    "Prone to mould growth and discolouration",
                    "Rigid — cracks with building movement",
                    "Requires regular sealing to maintain",
                    "Stains easily from soap and shampoo",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm">
                      <AlertTriangle className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4 text-center">
                Shower Repair FAQ
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                Common questions about our shower leak repair service. Have another question?{" "}
                <Link to="/contact" className="text-secondary hover:underline">
                  Contact us
                </Link>{" "}
                or visit our{" "}
                <Link to="/faq" className="text-secondary hover:underline">
                  full FAQ page
                </Link>.
              </p>

              <Accordion type="single" collapsible className="w-full">
                {showerFAQs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left text-foreground font-medium">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </section>

        {/* Areas We Service */}
        <section className="py-12 lg:py-16">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border"
            >
              <MapPin className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
              <div>
                <h2 className="font-heading font-bold text-lg text-foreground mb-2">
                  Shower Leak Repairs Across Sydney
                </h2>
                <p className="text-sm text-muted-foreground">
                  We provide professional shower leak repair services across all Sydney suburbs — from the 
                  Eastern Suburbs to the Hills District, Inner West, North Shore, and Western Sydney. 
                  Browse our{" "}
                  <Link to="/suburbs" className="text-secondary hover:underline">
                    service areas
                  </Link>{" "}
                  to find your local suburb page, or call us directly for same-day availability.
                </p>
              </div>
            </motion.div>
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
