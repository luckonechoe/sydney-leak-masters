import { motion } from "framer-motion";
import { Building, Users, FileCheck, Clock, Shield, Phone, Mail, Check, Droplets, AlertTriangle, Scale } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTAButton } from "@/components/CTAButton";
import { WarrantyBadge } from "@/components/WarrantyBadge";
import { QuoteForm } from "@/components/QuoteForm";
import { SEOHead, Breadcrumbs, FAQSchema } from "@/components/seo";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const benefits = [
  {
    icon: Users,
    title: "Dedicated Account Manager",
    description: "A single point of contact for all your properties and queries.",
  },
  {
    icon: Clock,
    title: "Priority Scheduling",
    description: "Fast-tracked inspections and repairs for strata complexes.",
  },
  {
    icon: FileCheck,
    title: "Compliant Documentation",
    description: "Full reports and warranties for your strata records.",
  },
  {
    icon: Building,
    title: "Multi-Property Discounts",
    description: "Volume pricing for complexes with multiple units.",
  },
];

const process = [
  "Initial consultation to understand your portfolio needs",
  "Property-by-property assessment and priority ranking",
  "Consolidated quoting with volume discounts",
  "Scheduled repairs with minimal resident disruption",
  "Complete documentation for strata records",
  "Ongoing maintenance recommendations",
];

const commonIssues = [
  {
    title: "Shared Bathroom Walls",
    description: "Leaks between adjoining units through shared wet walls are one of the most common strata complaints. Failed shower waterproofing allows water to migrate through party walls, causing damage to neighbouring units.",
    icon: Droplets,
  },
  {
    title: "Aging Balcony Membranes",
    description: "Balcony waterproofing membranes in older buildings deteriorate over time, leading to water ingress and concrete degradation. Regular inspection can identify membrane failure before spalling develops.",
    icon: Building,
  },
  {
    title: "Common Area Water Ingress",
    description: "Leaks in corridors, stairwells, and car parks often stem from failed expansion joints or degraded waterproofing. These affect multiple residents and require prompt, professional attention.",
    icon: AlertTriangle,
  },
  {
    title: "Planter Box Leaks",
    description: "Built-in planter boxes on balconies and podiums are a frequent source of water ingress. Constant moisture exposure and root growth accelerate membrane breakdown.",
    icon: Shield,
  },
];

const strataFAQs = [
  {
    question: "How do you handle repairs across multiple units?",
    answer: "We coordinate a staged repair schedule to minimise disruption. Each unit is assessed individually, then we consolidate the work into an efficient timeline. Residents receive advance notice, and most repairs are completed within a single day per unit.",
  },
  {
    question: "What documentation do you provide for strata records?",
    answer: "We provide comprehensive documentation including detailed inspection reports, before/after photo records, scope of works, work completion certificates, 10-year warranty documentation, and maintenance recommendations for your capital works plan.",
  },
  {
    question: "Do you offer volume pricing for strata complexes?",
    answer: "Yes, we provide competitive volume pricing for complexes with multiple units requiring repair. The more units in a single engagement, the more cost-effective each repair becomes. Contact us for a portfolio quote tailored to your complex.",
  },
  {
    question: "Are your methods professionally compliant?",
    answer: "All our waterproofing work uses professional-grade materials and industry-recognised methods. We provide full compliance documentation that supports levy fund claims and insurance requirements.",
  },
];

export default function Strata() {
  const breadcrumbItems = [
    { name: "Home", href: "/" },
    { name: "Strata Services", href: "/strata" },
  ];

  return (
    <>
      <SEOHead
        title="Strata Leak Repair Services Sydney | Property Manager Waterproofing Solutions"
        description="Dedicated leak repair and waterproofing for strata managers across Sydney. Priority scheduling, volume pricing, compliant documentation. Shower and balcony specialists."
      />
      <FAQSchema faqs={strataFAQs} />

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
                    <Building className="w-8 h-8 text-secondary" />
                  </div>
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
                    Property Managers
                  </span>
                </div>

                <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                  Strata Manager{" "}
                  <span className="gradient-text">Portal</span>
                </h1>

                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Streamlined leak repair services designed for strata managers and 
                  property management companies across Sydney. From{" "}
                  <Link to="/services/shower-repairs" className="text-secondary hover:underline">
                    shower leak repairs
                  </Link>{" "}
                  to{" "}
                  <Link to="/services/balcony-repairs" className="text-secondary hover:underline">
                    balcony waterproofing
                  </Link>, we provide priority service, volume pricing, 
                  and comprehensive documentation for your records.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <CTAButton variant="phone" size="lg">
                    Strata Hotline
                  </CTAButton>
                  <CTAButton variant="link" to="#contact-form" size="lg">
                    Request Portfolio Quote
                  </CTAButton>
                </div>

                <div className="flex items-center gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-secondary" />
                    <span className="text-muted-foreground">Priority support line</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-secondary" />
                    <span className="text-muted-foreground">strata@sydneyleakrepairspro.com.au</span>
                  </div>
                </div>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="grid grid-cols-2 gap-4"
              >
                <div className="p-6 bg-card rounded-lg border border-border">
                  <div className="text-4xl font-heading font-bold text-secondary mb-2">50+</div>
                  <p className="text-sm text-muted-foreground">Strata complexes serviced</p>
                </div>
                <div className="p-6 bg-card rounded-lg border border-border">
                  <div className="text-4xl font-heading font-bold text-secondary mb-2">500+</div>
                  <p className="text-sm text-muted-foreground">Units repaired</p>
                </div>
                <div className="p-6 bg-card rounded-lg border border-border">
                  <div className="text-4xl font-heading font-bold text-accent mb-2">24hr</div>
                  <p className="text-sm text-muted-foreground">Quote turnaround</p>
                </div>
                <div className="p-6 bg-card rounded-lg border border-border">
                  <div className="text-4xl font-heading font-bold text-accent mb-2">10yr</div>
                  <p className="text-sm text-muted-foreground">Warranty standard</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Why Strata Managers Choose Us
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We understand the unique challenges of managing multiple properties. 
                Our strata waterproofing services are designed to make your job easier.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="h-full flex flex-col items-center p-6 bg-card rounded-lg border border-border text-center"
                  >
                    <div className="inline-flex p-3 rounded-lg bg-secondary/10 mb-4">
                      <Icon className="w-6 h-6 text-secondary" />
                    </div>
                    <h3 className="font-heading font-bold text-lg text-foreground mb-2 min-h-[3.5rem] flex items-center">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-auto">
                      {benefit.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Common Strata Leak Issues Section */}
        <section className="py-16 lg:py-24">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Common Strata Leak Issues
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Strata buildings face unique waterproofing challenges. Here are the most common 
                leak problems we resolve for property managers across Sydney.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-6">
              {commonIssues.map((issue, index) => {
                const Icon = issue.icon;
                return (
                  <motion.div
                    key={issue.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 bg-card rounded-lg border border-border"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-secondary/10">
                        <Icon className="w-5 h-5 text-secondary" />
                      </div>
                      <h3 className="font-heading font-bold text-lg text-foreground">
                        {issue.title}
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground">{issue.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Our Strata{" "}
                  <span className="text-secondary">Process</span>
                </h2>
                <p className="text-muted-foreground mb-8">
                  A structured approach designed for efficiency and minimal 
                  disruption to residents.
                </p>

                <ul className="space-y-4">
                  {process.map((step, index) => (
                    <motion.li
                      key={step}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                      <span className="text-foreground pt-1">{step}</span>
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
                <h3 className="font-heading font-bold text-xl text-foreground mb-6">
                  Strata Documentation Included
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="text-foreground">Detailed inspection reports</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="text-foreground">Before/after photo documentation</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="text-foreground">Work completion certificates</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="text-foreground">10-year warranty documentation</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="text-foreground">Compliance statements</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="text-foreground">Maintenance recommendations</span>
                  </li>
                </ul>

                <div className="mt-6 pt-6 border-t border-border">
                  <WarrantyBadge size="md" animated={false} />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Compliance Section */}
        <section className="py-16 lg:py-24">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-secondary/10">
                  <Scale className="w-8 h-8 text-secondary" />
                </div>
                <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground">
                  Strata Compliance & Australian Standards
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    All our waterproofing work for strata properties meets professional 
                    industry standards for waterproofing of wet areas in residential buildings. 
                    This ensures every repair meets the required standard for materials, 
                    application, and testing.
                  </p>
                  <p className="text-muted-foreground">
                    We also adhere to relevant sections of the{" "}
                    <strong className="text-foreground">National Construction Code (NCC)</strong> and{" "}
                    <strong className="text-foreground">Building Code of Australia (BCA)</strong>, 
                    ensuring our methods are fully compliant for strata building maintenance.
                  </p>
                </div>
                <div className="p-6 bg-card rounded-lg border border-border">
                  <h3 className="font-heading font-bold text-lg text-foreground mb-4">
                    Supporting Your Strata Records
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Our compliance documentation is designed to support:
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Capital works fund claims",
                      "Insurance claim documentation",
                      "Annual building inspection reports",
                      "Defect rectification records",
                      "Long-term maintenance planning",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-secondary flex-shrink-0" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
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
                Strata Services FAQ
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                Common questions from strata and property managers. Visit our{" "}
                <Link to="/faq" className="text-secondary hover:underline">
                  full FAQ page
                </Link>{" "}
                for more answers.
              </p>

              <Accordion type="single" collapsible className="w-full">
                {strataFAQs.map((faq, index) => (
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

        {/* Contact Form Section */}
        <section id="contact-form" className="py-16 lg:py-24">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Request a Portfolio Quote
                </h2>
                <p className="text-muted-foreground mb-8">
                  Tell us about your strata portfolio and we'll prepare a 
                  comprehensive quote with volume pricing.
                </p>

                <div className="p-6 bg-card rounded-lg border border-border mb-6">
                  <h3 className="font-heading font-bold text-lg text-foreground mb-4">
                    Strata Contact Details
                  </h3>
                  <div className="space-y-3">
                    <a 
                      href="tel:+61400000000" 
                      className="flex items-center gap-3 text-foreground hover:text-secondary transition-colors"
                    >
                      <Phone className="w-5 h-5 text-secondary" />
                      Strata Priority Line: 0400 000 000
                    </a>
                    <a 
                      href="mailto:strata@sydneyleakrepairspro.com.au"
                      className="flex items-center gap-3 text-foreground hover:text-secondary transition-colors"
                    >
                      <Mail className="w-5 h-5 text-secondary" />
                      strata@sydneyleakrepairspro.com.au
                    </a>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground">
                  Managing 10+ properties? Ask about our preferred partner program 
                  for exclusive rates and priority service.
                </p>
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
