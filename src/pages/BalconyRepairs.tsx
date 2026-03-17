import { motion } from "framer-motion";
import { Check, Building2, Shield, AlertTriangle, Star, Droplets, Layers, MapPin, Award, DollarSign, Users, Eye, Home, Wrench, ArrowRight } from "lucide-react";
import { TrustPillars } from "@/components/TrustPillars";
import { PricingCalculator } from "@/components/PricingCalculator";
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
  "No tile removal in most cases",
  "Fast, affordable repairs",
  "No balcony demolition required",
  "Long-lasting waterproof protection",
  "Prevents structural damage & spalling",
  "Strata-approved methods & documentation",
];

const warningsSigns = [
  {
    icon: Droplets,
    title: "Water Pooling After Rain",
    description: "Water sitting on your balcony surface instead of draining indicates failed falls, blocked drainage, or deteriorated grout allowing water to pool and penetrate.",
  },
  {
    icon: Wrench,
    title: "Loose or Lifting Tiles",
    description: "Tiles that move, lift, or sound hollow when tapped suggest water has compromised the adhesive and substrate beneath — a sign of advanced membrane failure.",
  },
  {
    icon: Home,
    title: "Water Stains on Ceilings Below",
    description: "Brown or yellowish stains on the ceiling directly below your balcony are a clear sign that water is tracking through the concrete slab from above.",
  },
  {
    icon: Layers,
    title: "Cracked or Missing Grout",
    description: "Grout that is cracking, crumbling, or missing entirely allows water direct access to the substrate and waterproof membrane beneath your balcony tiles.",
  },
  {
    icon: Eye,
    title: "Damp or Mouldy Walls",
    description: "Moisture, mould growth, or paint bubbling on walls adjacent to the balcony — including inside your home near sliding doors — signals water ingress.",
  },
  {
    icon: AlertTriangle,
    title: "Efflorescence & Rust Stains",
    description: "White salt deposits (efflorescence) or rust-coloured stains on concrete surfaces indicate moisture is reaching the steel reinforcement — an early sign of spalling.",
  },
];

const leakCauses = [
  {
    title: "Deteriorated Grout",
    description: "Balcony grout is exposed to sun, rain, and temperature extremes. Over time, it cracks and becomes porous, allowing water to pass through tile joints into the substrate below.",
  },
  {
    title: "Failed Waterproof Membrane",
    description: "The waterproof membrane beneath balcony tiles can crack, delaminate, or degrade due to age, UV exposure, or poor original installation — allowing water to penetrate the concrete slab.",
  },
  {
    title: "Cracked or Broken Tiles",
    description: "Thermal expansion, building settlement, or impact damage can crack balcony tiles, creating direct pathways for water to bypass the surface and reach the membrane and substrate.",
  },
  {
    title: "Poor Drainage & Falls",
    description: "Balconies require adequate fall towards drainage points. Insufficient gradient, blocked drains, or poorly positioned outlets cause water to pond and eventually find its way through weak points.",
  },
  {
    title: "Building Movement",
    description: "Natural building settlement and thermal expansion create stress fractures in grout, tiles, and membranes. Sydney's clay-rich soils make this particularly common in older buildings.",
  },
];

const waterproofingSteps = [
  {
    title: "Inspection & Leak Detection",
    description: "We thoroughly assess your balcony to identify the source and extent of the leak, checking grout condition, membrane integrity, drainage, and surrounding areas.",
  },
  {
    title: "Grout Removal & Preparation",
    description: "Failed grout is carefully removed and tile joints are cleaned and prepared. The substrate is assessed to determine the most effective repair approach.",
  },
  {
    title: "Epoxy Regrouting & Sealing",
    description: "Premium waterproof epoxy grout is applied to all tile joints, creating an impermeable barrier. Perimeter seals are replaced at wall junctions, door thresholds, and balustrades.",
  },
  {
    title: "Perimeter Waterproofing",
    description: "Critical junctions — where the balcony meets walls, doors, and drainage points — are sealed with flexible waterproofing compounds to prevent water ingress at vulnerable edges.",
  },
  {
    title: "Final Inspection & Testing",
    description: "A thorough inspection verifies complete waterproof integrity. We provide documentation for strata records and confirm your balcony is ready for use within 24 hours.",
  },
];

const whyChooseUs = [
  {
    icon: Award,
    title: "Licensed Waterproofing Specialists",
    description: "Our technicians hold current waterproofing licences and are trained in balcony-specific repair techniques using professional-grade external waterproofing methods.",
  },
  {
    icon: Users,
    title: "Decades of Industry Experience",
    description: "With extensive experience across thousands of Sydney balconies — from heritage terraces to modern high-rises — we've diagnosed and repaired every type of balcony leak.",
  },
  {
    icon: Layers,
    title: "Premium Waterproofing Materials",
    description: "We use only commercial-grade epoxy grouts, flexible sealants, and waterproofing membranes designed for external applications and Sydney's demanding coastal climate.",
  },
  {
    icon: Shield,
    title: "10-Year Written Warranty",
    description: "Every balcony leak repair is backed by our comprehensive 10-year written warranty. If any issue arises, we return and rectify it at no additional cost.",
  },
  {
    icon: DollarSign,
    title: "Transparent, Upfront Pricing",
    description: "You receive a detailed written quote before any work begins — no hidden fees, no surprise extras. We provide all documentation needed for strata levy claims.",
  },
];

const balconyFAQs = [
  {
    question: "How do I know if my balcony membrane has failed?",
    answer: "Common signs include water stains on the ceiling below your balcony, lifting or cracking tiles, efflorescence (white salt deposits) on concrete, rust stains, and water pooling that doesn't drain properly. If you notice any of these, we recommend a professional inspection before the damage worsens.",
  },
  {
    question: "Can balcony leaks cause structural damage?",
    answer: "Yes, untreated balcony leaks are a serious concern. Water penetrating through failed waterproofing reaches the steel reinforcement inside the concrete, causing rust and expansion. This leads to spalling — where chunks of concrete crack and fall away — which can compromise structural integrity and become extremely costly to repair.",
  },
  {
    question: "Can you repair a leaking balcony without removing tiles?",
    answer: "In many cases, yes. Our balcony sealing service replaces failed grout with premium waterproof epoxy grout and reseals all perimeter junctions — without the need for tile removal or demolition. If the membrane beneath has completely failed or tiles are cracked and loose, partial tile removal may be required, but we always recommend the least invasive approach first.",
  },
  {
    question: "Do you need strata approval for balcony repairs?",
    answer: "In most strata complexes, balcony waterproofing is considered common property maintenance and requires strata committee approval. We provide all necessary documentation, scope of works, and compliance statements to support your strata application. Learn more about our strata services.",
  },
  {
    question: "How long does balcony waterproofing last?",
    answer: "When professionally installed using quality materials, a balcony waterproofing membrane should last 15–25 years. We use premium-grade membranes and epoxy grouts and back all our work with a 10-year written warranty for your peace of mind.",
  },
  {
    question: "How much does a leaking balcony repair cost in Sydney?",
    answer: "The cost depends on the size of the balcony, the extent of damage, and the repair method required. A seal-and-regrout approach is significantly more affordable than full membrane replacement. We provide obligation-free quotes so you can make an informed decision — no hidden costs or surprises.",
  },
];

export default function BalconyRepairs() {
  const breadcrumbItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Leaking Balcony Repairs", href: "/services/balcony-repairs" },
  ];

  return (
    <>
      <SEOHead
        title="Leaking Balcony Repairs Sydney | Balcony Waterproofing & Sealing"
        description="Professional leaking balcony repair and waterproofing across Sydney. Expert balcony sealing without tile removal. Prevent spalling and structural damage. 10-year warranty. Strata approved. Free inspection."
      />
      <ServiceSchema
        name="Leaking Balcony Repair Service Sydney"
        description="Professional balcony leak repair and balcony waterproofing in Sydney. Repair leaking balconies without removing tiles. Strata-compliant. 10-year warranty included."
      />
      <FAQSchema faqs={balconyFAQs} />

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
                  Leaking Balcony Repairs{" "}
                  <span className="gradient-text">Sydney</span>
                </h1>

                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Is your balcony leaking? In many cases, balcony leaks can be repaired 
                  without removing tiles — saving you thousands compared to a full demolition 
                  and rebuild. Our professional balcony sealing service uses premium epoxy grout 
                  and waterproofing systems to permanently stop leaks, backed by a 10-year warranty. 
                  We also specialise in{" "}
                  <Link to="/services/shower-repairs" className="text-secondary hover:underline">
                    leaking shower repairs
                  </Link>{" "}
                  across Sydney.
                </p>

                <div className="flex items-center gap-3 mb-8 p-4 bg-card rounded-lg border border-border">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                    ))}
                    <span className="ml-2 text-sm text-muted-foreground">5.0 rating from verified customers</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <CTAButton variant="phone" size="lg">
                    Get Free Quote
                  </CTAButton>
                  <CTAButton variant="link" to="/contact" size="lg">
                    Book Free Inspection
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

        {/* Problem Section — The Danger of Leaking Balconies */}
        <section className="py-16 lg:py-24">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Why a Leaking Balcony Is{" "}
                  <span className="text-destructive">a Serious Problem</span>
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  A leaking balcony is far more than a cosmetic issue. Because balconies are fully exposed 
                  to Sydney's weather — heavy rain, salt-laden coastal air, and intense UV — waterproofing 
                  failures can escalate rapidly into costly structural problems.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  When water penetrates through failed grout or a cracked membrane, it saturates the concrete 
                  slab and reaches the steel reinforcement inside. This triggers corrosion, causing the steel 
                  to expand and crack the surrounding concrete — a process known as spalling. Left untreated, 
                  spalling compromises structural integrity and can result in chunks of concrete breaking away, 
                  posing a safety hazard to anyone below.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Water from a leaking balcony also tracks into adjacent walls, door frames, and the rooms below. 
                  This leads to mould growth, rotting timber framing, damaged plasterboard, and bubbling paint. 
                  In apartments and strata buildings, a single leaking balcony can cause water damage to multiple 
                  units — making early repair critical for all owners.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The cost of repairing a minor balcony leak is a fraction of the expense involved in rectifying 
                  advanced spalling and structural damage. Early intervention with professional balcony waterproofing 
                  can save property owners tens of thousands of dollars.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-8 bg-destructive/5 rounded-xl border border-destructive/20"
              >
                <h3 className="font-heading font-bold text-xl text-foreground mb-6">
                  The Risks of Ignoring a Leaking Balcony
                </h3>
                <div className="space-y-5">
                  {[
                    { title: "Structural Damage & Spalling", desc: "Water corrodes internal steel reinforcement, causing concrete to crack and break away — compromising the structural integrity of the entire balcony." },
                    { title: "Mould & Health Hazards", desc: "Persistent moisture creates ideal conditions for mould growth, which can trigger respiratory issues, allergic reactions, and exacerbate asthma." },
                    { title: "Water Penetration Into Your Home", desc: "Water tracks through walls, door frames, and the ceiling below — damaging interiors, ruining paint, and destroying plasterboard." },
                    { title: "Escalating Rectification Costs", desc: "What starts as a simple regrouting job can become a full membrane replacement, concrete remediation, or structural engineering project if left untreated." },
                  ].map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center">
                        <AlertTriangle className="w-4 h-4 text-destructive" />
                      </div>
                      <div>
                        <h4 className="font-heading font-bold text-sm text-foreground mb-1">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Common Causes Section */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Common Causes of Leaking Balconies
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Every leaking balcony is unique, but these are the most common causes we encounter 
                across Sydney homes and strata buildings. Accurate diagnosis is the first step to an effective repair.
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

        {/* Warning Signs Section */}
        <section className="py-16 lg:py-24">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Warning Signs Your Balcony Is Leaking
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Not sure if your balcony has a waterproofing problem? Look out for these common symptoms. 
                If you notice any of the following, it's time to book a professional balcony leak inspection.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {warningsSigns.map((sign, index) => {
                const Icon = sign.icon;
                return (
                  <motion.div
                    key={sign.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="p-6 bg-card rounded-lg border border-border"
                  >
                    <div className="p-2 rounded-lg bg-accent/10 w-fit mb-4">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <h3 className="font-heading font-bold text-lg text-foreground mb-2">
                      {sign.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{sign.description}</p>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mt-10"
            >
              <p className="text-muted-foreground mb-4">
                Spotted any of these signs? Don't wait for the damage to escalate.
              </p>
              <CTAButton variant="link" to="/contact">
                Book a Free Balcony Inspection <ArrowRight className="w-4 h-4 ml-1 inline" />
              </CTAButton>
            </motion.div>
          </div>
        </section>

        {/* Professional Solution / Process Section */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Our Balcony Leak Repair Process
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A systematic, professional approach to balcony waterproofing that ensures lasting results. 
                In many cases, leaks can be repaired without removing tiles — saving you time and money.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {waterproofingSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="relative p-6 bg-card rounded-lg border border-border"
                >
                  <div className="absolute -top-3 left-4 px-2 py-1 bg-secondary text-secondary-foreground text-xs font-bold rounded">
                    Step {index + 1}
                  </div>
                  <h3 className="font-heading font-bold text-lg text-foreground mt-2 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center text-muted-foreground mt-8 max-w-2xl mx-auto"
            >
              Our balcony sealing service is designed to be <strong className="text-foreground">minimally invasive</strong>. 
              Where possible, we repair leaking balconies without removing tiles — using epoxy regrouting and 
              perimeter sealing to restore waterproof integrity. For cases where the membrane has completely failed, 
              we offer full membrane restoration to Australian Standards.
            </motion.p>
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
                  Benefits of Professional{" "}
                  <span className="text-secondary">Balcony Waterproofing</span>
                </h2>
                <p className="text-muted-foreground mb-8">
                  Professional balcony leak repair is faster, more affordable, and far more effective than 
                  DIY attempts. Our methods meet Australian Standards and are approved for use in strata 
                  complexes, apartments, and residential properties across Sydney.
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
                    Complete waterproof seal that stops leaks permanently
                  </p>
                </div>
                <div className="p-6 bg-card rounded-lg border border-border">
                  <Shield className="w-10 h-10 text-accent mb-4" />
                  <h3 className="font-heading font-bold text-xl text-foreground mb-2">
                    Protected
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Prevents spalling and concrete degradation
                  </p>
                </div>
                <div className="col-span-2 p-6 bg-card rounded-lg border border-border">
                  <Building2 className="w-10 h-10 text-secondary mb-4" />
                  <h3 className="font-heading font-bold text-xl text-foreground mb-2">
                    Strata Approved
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    All work complies with Australian Standards and comes with 
                    documentation for strata records and levy fund claims
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Why Choose Sydney Leak Repairs Pro
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                When it comes to leaking balcony repair in Sydney, experience, proper licensing, and quality 
                materials make all the difference. Here's why homeowners, builders, and{" "}
                <Link to="/strata" className="text-secondary hover:underline">
                  strata managers
                </Link>{" "}
                trust us with their balcony waterproofing.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyChooseUs.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="p-6 bg-card rounded-lg border border-border"
                  >
                    <div className="p-2 rounded-lg bg-secondary/10 w-fit mb-4">
                      <Icon className="w-5 h-5 text-secondary" />
                    </div>
                    <h3 className="font-heading font-bold text-lg text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Pricing Calculator */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="section-container">
            <PricingCalculator type="balcony" />
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 lg:py-24">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4 text-center">
                Leaking Balcony Repair FAQ
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                Common questions about balcony waterproofing and leak repair. Have another question?{" "}
                <Link to="/contact" className="text-secondary hover:underline">
                  Contact us
                </Link>{" "}
                or visit our{" "}
                <Link to="/faq" className="text-secondary hover:underline">
                  full FAQ page
                </Link>.
              </p>

              <Accordion type="single" collapsible className="w-full">
                {balconyFAQs.map((faq, index) => (
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

        {/* Service Areas */}
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
                  Leaking Balcony Repairs Across Sydney
                </h2>
                <p className="text-sm text-muted-foreground">
                  We provide professional leaking balcony repair and balcony waterproofing services across 
                  all Sydney suburbs — from the Eastern Suburbs and Northern Beaches to the Inner West, North Shore, 
                  Hills District, and Western Sydney. Whether you're a homeowner, property manager, builder, or{" "}
                  <Link to="/strata" className="text-secondary hover:underline">
                    strata manager
                  </Link>, we offer fast, reliable balcony sealing with same-day availability. Browse our{" "}
                  <Link to="/suburbs" className="text-secondary hover:underline">
                    service areas
                  </Link>{" "}
                  or call us directly for a free inspection.
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
                  Book Your Free Balcony Leak Inspection
                </h2>
                <p className="text-muted-foreground mb-8">
                  Don't let a leaking balcony cause structural damage to your property. Upload photos 
                  of your balcony and we'll assess the damage and provide a detailed, no-obligation quote. 
                  Alternatively, call us to book your free on-site inspection today.
                </p>

                <div className="p-6 bg-card rounded-lg border border-border mb-6">
                  <h3 className="font-heading font-bold text-lg text-foreground mb-4">
                    What's Included:
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-sm text-foreground">
                      <Check className="w-4 h-4 text-secondary" />
                      Comprehensive leak assessment & detection
                    </li>
                    <li className="flex items-center gap-3 text-sm text-foreground">
                      <Check className="w-4 h-4 text-secondary" />
                      Membrane condition report
                    </li>
                    <li className="flex items-center gap-3 text-sm text-foreground">
                      <Check className="w-4 h-4 text-secondary" />
                      Detailed written quote — no hidden costs
                    </li>
                    <li className="flex items-center gap-3 text-sm text-foreground">
                      <Check className="w-4 h-4 text-secondary" />
                      Professional waterproofing & sealing
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

        <TrustPillars />

        <Footer />
      </div>
    </>
  );
}
