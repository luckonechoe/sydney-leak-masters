import { motion } from "framer-motion";
import { Building, Users, FileCheck, Clock, Shield, Phone, Mail, Check, Droplets, AlertTriangle, Scale, MapPin } from "lucide-react";
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
  {
    question: "How quickly can you attend an urgent strata leak?",
    answer: "For urgent strata leak situations — such as active water ingress affecting multiple units — we prioritise scheduling and can typically attend within 24–48 hours. Contact our strata priority line to arrange an urgent inspection.",
  },
  {
    question: "Can you coordinate repairs across multiple buildings in a portfolio?",
    answer: "Yes. We regularly work with strata management companies overseeing multiple complexes. We can schedule inspections and repairs across your entire portfolio, provide consolidated reporting, and offer volume pricing across all buildings.",
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
        title="Strata Leak Repairs Sydney · Waterproofing for Property Managers"
        description="Specialist leak repair and waterproofing for Sydney strata buildings. Priority scheduling, transparent reporting, and volume pricing for property managers and body corporates."
        canonical="https://sydneysealed.com.au/strata"
        keywords="strata leak repairs sydney, strata waterproofing, strata building maintenance, body corporate waterproofing, strata plumbing repairs sydney, property manager leak repair"
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

                <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6" style={{ lineHeight: 1.1 }}>
                  Strata Leak Repairs &{" "}
                  <span className="gradient-text" style={{ lineHeight: 'inherit' }}>Waterproofing Sydney</span>
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
                    <span className="text-muted-foreground">strata@sydneysealed.com.au</span>
                  </div>
                </div>
              </motion.div>

              {/* Trust Points */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="grid grid-cols-2 gap-4"
              >
                <div className="p-6 bg-card rounded-lg border border-border">
                  <Clock className="w-8 h-8 text-secondary mb-3" />
                  <h3 className="font-heading font-bold text-foreground mb-1">Priority Scheduling</h3>
                  <p className="text-sm text-muted-foreground">Fast-tracked inspections for strata properties</p>
                </div>
                <div className="p-6 bg-card rounded-lg border border-border">
                  <Users className="w-8 h-8 text-secondary mb-3" />
                  <h3 className="font-heading font-bold text-foreground mb-1">Volume Pricing</h3>
                  <p className="text-sm text-muted-foreground">Competitive rates for multi-unit complexes</p>
                </div>
                <div className="p-6 bg-card rounded-lg border border-border">
                  <FileCheck className="w-8 h-8 text-accent mb-3" />
                  <h3 className="font-heading font-bold text-foreground mb-1">Full Documentation</h3>
                  <p className="text-sm text-muted-foreground">Reports, photos, and compliance records</p>
                </div>
                <div className="p-6 bg-card rounded-lg border border-border">
                  <Shield className="w-8 h-8 text-accent mb-3" />
                  <h3 className="font-heading font-bold text-foreground mb-1">10-Year Warranty</h3>
                  <p className="text-sm text-muted-foreground">Written warranty on every unit repaired</p>
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

        {/* Common Strata Leak Scenarios */}
        <section className="py-16 lg:py-24">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Real Strata Leak Scenarios We Handle
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                These are the situations strata managers bring to us most often. Every scenario below is one we've diagnosed and resolved across Sydney.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Unit Above Leaking Into Unit Below", desc: "A shower leak in one unit causes water stains, mould, or paint damage on the ceiling of the unit below. We inspect both units, identify the source, and repair with minimal disruption to both residents." },
                { title: "Multiple Balconies in One Complex", desc: "Several balconies in the same building showing signs of grout failure, efflorescence, or water ingress. We assess all balconies, prioritise by severity, and schedule staged repairs with volume pricing." },
                { title: "Common Area Corridor Water Ingress", desc: "Water tracking through corridor floors, stairwell walls, or lift lobbies from adjacent wet areas or roof waterproofing failures. We trace the source and seal the entry point." },
                { title: "Post-Defect Period Remediation", desc: "Builder's warranty has expired and waterproofing defects are emerging across the complex. We provide independent assessment and remediation without the original builder's involvement." },
                { title: "Planter Box & Podium Leaks", desc: "Built-in planter boxes on podium levels are a common source of chronic water ingress. Root damage, constant moisture, and failed membranes require specialist repair." },
                { title: "Pre-Sale Leak Rectification", desc: "An owner needs a leak resolved and documented before settlement. We provide fast-turnaround repairs with full compliance documentation for conveyancing requirements." },
              ].map((scenario, index) => (
                <motion.div
                  key={scenario.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="p-6 bg-card rounded-lg border border-border"
                >
                  <h3 className="font-heading font-bold text-foreground mb-2">{scenario.title}</h3>
                  <p className="text-sm text-muted-foreground">{scenario.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Guides & Suburb Links */}
        <section className="py-12 lg:py-16 bg-muted/30">
          <div className="section-container">
            <div className="max-w-4xl mx-auto space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                  Related Guides for Strata Managers
                </h2>
                <div className="grid sm:grid-cols-3 gap-4">
                  <Link to="/blog/strata-waterproofing-guide" className="p-4 bg-card rounded-lg border border-border hover:border-secondary/50 transition-colors group">
                    <h3 className="font-heading font-bold text-foreground group-hover:text-secondary transition-colors mb-2 text-sm">Strata Waterproofing Guide</h3>
                    <p className="text-xs text-muted-foreground">Essential waterproofing knowledge for strata managers and committees.</p>
                  </Link>
                  <Link to="/blog/concrete-degradation-prevention" className="p-4 bg-card rounded-lg border border-border hover:border-secondary/50 transition-colors group">
                    <h3 className="font-heading font-bold text-foreground group-hover:text-secondary transition-colors mb-2 text-sm">Concrete Degradation Prevention</h3>
                    <p className="text-xs text-muted-foreground">How to prevent spalling and protect your building's structural integrity.</p>
                  </Link>
                  <Link to="/preventative-maintenance" className="p-4 bg-card rounded-lg border border-border hover:border-secondary/50 transition-colors group">
                    <h3 className="font-heading font-bold text-foreground group-hover:text-secondary transition-colors mb-2 text-sm">Preventative Maintenance Plans</h3>
                    <p className="text-xs text-muted-foreground">Annual maintenance programs to protect your complex's waterproofing investment.</p>
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border"
              >
                <MapPin className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-heading font-bold text-lg text-foreground mb-2">
                    Strata Services Across Sydney
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    We service strata complexes across all Sydney regions. Our team handles both{" "}
                    <Link to="/services/shower-repairs" className="text-secondary hover:underline">shower leak repairs</Link> and{" "}
                    <Link to="/services/balcony-repairs" className="text-secondary hover:underline">balcony waterproofing</Link> for strata properties.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["bondi", "parramatta", "manly", "chatswood", "newtown", "randwick", "cronulla", "castle-hill"].map((suburb) => (
                      <Link
                        key={suburb}
                        to={`/leaking-shower-repairs/${suburb}`}
                        className="text-xs px-3 py-1.5 bg-secondary/10 text-secondary rounded-full hover:bg-secondary/20 transition-colors capitalize"
                      >
                        {suburb.replace("-", " ")}
                      </Link>
                    ))}
                    <Link to="/suburbs" className="text-xs px-3 py-1.5 bg-muted text-muted-foreground rounded-full hover:bg-muted/80 transition-colors">
                      View All Suburbs →
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
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
                      href="mailto:strata@sydneysealed.com.au"
                      className="flex items-center gap-3 text-foreground hover:text-secondary transition-colors"
                    >
                      <Mail className="w-5 h-5 text-secondary" />
                      strata@sydneysealed.com.au
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
