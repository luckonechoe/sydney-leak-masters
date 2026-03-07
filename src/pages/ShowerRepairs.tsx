import { motion } from "framer-motion";
import { Check, Droplets, Clock, Shield, Star, ArrowRight, AlertTriangle, Layers, MapPin, Eye, Award, DollarSign, Users, Wrench, Home } from "lucide-react";
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
    title: "Cracked Grout",
    description: "Cement grout deteriorates over time, cracking and allowing water to seep behind tiles into your walls and subfloor. This is the most common cause of shower leaks across Sydney homes.",
  },
  {
    title: "Failed Waterproof Membrane",
    description: "The original waterproof membrane beneath your tiles can crack due to building movement, age, or poor initial installation — allowing water to penetrate the structure below.",
  },
  {
    title: "Building Movement",
    description: "Natural building settlement causes stress fractures in grout and tiles, creating pathways for water ingress. Sydney's clay-rich soils make this particularly common.",
  },
  {
    title: "Plumbing Leaks",
    description: "Cracked pipes, broken seals around pipe connections, or leaks behind the wall can contribute to persistent moisture issues that mimic shower membrane failure.",
  },
  {
    title: "Deteriorated Silicone",
    description: "Silicone joints around shower screens, trays, and wall junctions pull away from surfaces over time, allowing water to escape the shower recess.",
  },
];

const warningSigns = [
  {
    icon: Eye,
    title: "Mould or Mildew Growth",
    description: "Black or green mould appearing on grout lines, silicone, or nearby walls is a clear indicator of excess moisture from a leaking shower.",
  },
  {
    icon: AlertTriangle,
    title: "Musty or Damp Smell",
    description: "An unpleasant, musty odour in or near your bathroom often means water is trapped behind tiles or within the wall cavity.",
  },
  {
    icon: Home,
    title: "Bubbling or Peeling Paint",
    description: "Paint blistering, peeling, or flaking on walls adjacent to or below the bathroom is caused by moisture penetrating through from a leaking shower.",
  },
  {
    icon: Droplets,
    title: "Water Stains on Ceilings",
    description: "Brown or yellowish stains on the ceiling below a bathroom are a telltale sign of water tracking from a leaking shower above.",
  },
  {
    icon: Layers,
    title: "Cracked or Discoloured Grout",
    description: "Grout that is cracking, crumbling, or changing colour indicates it has lost its seal and water is likely passing through to the substrate.",
  },
  {
    icon: Wrench,
    title: "Loose or Hollow Tiles",
    description: "Tiles that move, sound hollow when tapped, or are lifting away from the wall suggest water has compromised the adhesive and substrate behind them.",
  },
];

const whyChooseUs = [
  {
    icon: Award,
    title: "Licensed Waterproofing Specialists",
    description: "Our technicians are fully licensed and trained in wet area waterproofing, complying with Australian Standards AS 3740 for waterproofing of domestic wet areas.",
  },
  {
    icon: Layers,
    title: "Premium Epoxy Grout Materials",
    description: "We use only commercial-grade, non-porous epoxy grout — not cheap cement-based alternatives. Our materials are specifically designed for long-term shower sealing performance.",
  },
  {
    icon: Users,
    title: "Decades of Industry Experience",
    description: "With extensive experience across thousands of Sydney bathrooms, we've seen every type of shower leak and know exactly how to fix it — properly, the first time.",
  },
  {
    icon: Shield,
    title: "10-Year Written Warranty",
    description: "Every shower leak repair comes with our comprehensive 10-year written warranty. If any issue arises, we come back and fix it at no additional cost to you.",
  },
  {
    icon: DollarSign,
    title: "Transparent, Upfront Pricing",
    description: "No hidden fees, no surprise extras. You receive a detailed written quote before any work begins, so you know exactly what you're paying for.",
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
  {
    question: "How much does a leaking shower repair cost in Sydney?",
    answer: "The cost of a shower leak repair depends on the size of the shower, the extent of damage, and the repair method required. Most standard epoxy grout shower repairs are significantly less expensive than a full bathroom renovation. We provide obligation-free quotes so you can make an informed decision.",
  },
  {
    question: "What if my tiles are cracked or loose — can you still repair without removing them?",
    answer: "If tiles are cracked, loose, or hollow (drummy), a seal-only approach may not be sufficient. In these cases, we may recommend partial tile replacement and re-waterproofing to ensure a lasting result. Our inspection will identify exactly what's needed before any work begins.",
  },
];

export default function ShowerRepairs() {
  const breadcrumbItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Leaking Shower Repairs", href: "/services/shower-repairs" },
  ];

  return (
    <>
      <SEOHead
        title="Leaking Shower Repairs Sydney | Fix Shower Leaks Without Removing Tiles"
        description="Professional leaking shower repairs in Sydney. Expert shower sealing and waterproofing using premium epoxy grout — no tile removal required. Same-day service, 10-year warranty. Book your free inspection today."
      />
      <ServiceSchema
        name="Leaking Shower Repair Service Sydney"
        description="Professional shower leak repair and shower sealing in Sydney using premium epoxy grout technology. Repair leaking showers without removing tiles. 10-year warranty included."
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
                  Leaking Shower Repairs{" "}
                  <span className="gradient-text">Sydney</span>
                </h1>

                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Is your shower leaking? Don't panic — and don't rip out your tiles. 
                  Most leaking showers can be repaired quickly and affordably without 
                  removing a single tile. Our professional shower sealing service uses 
                  premium epoxy grout to permanently stop leaks, backed by a 10-year warranty.
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
                  <CTAButton variant="link" to="#quote-form" size="lg">
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

        {/* Problem Section — The Danger of Leaking Showers */}
        <section className="py-16 lg:py-24">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Why a Leaking Shower Is{" "}
                  <span className="text-destructive">More Dangerous Than You Think</span>
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  A leaking shower might seem like a minor inconvenience — a bit of dampness, some discoloured grout. 
                  But behind your tiles, water can be silently causing serious damage to your home's structure, health, and value.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  When water penetrates through failed grout or a cracked waterproof membrane, it tracks along 
                  the path of least resistance — soaking into wall cavities, timber framing, and floor substrates. 
                  Over time, this leads to rot, mould growth, and even structural compromise. In multi-storey homes 
                  and apartments, a single leaking shower can cause water stains and damage to the ceiling below.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  The health implications are equally concerning. Persistent moisture creates an ideal environment 
                  for mould spores, which can trigger respiratory issues, allergic reactions, and aggravate conditions 
                  like asthma — particularly in children and the elderly.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The good news? Most bathroom leak repairs don't require a full renovation. Early intervention with 
                  professional shower waterproofing can stop the damage before it escalates — saving you thousands in 
                  potential repair costs.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-8 bg-destructive/5 rounded-xl border border-destructive/20"
              >
                <h3 className="font-heading font-bold text-xl text-foreground mb-6">
                  How Water Damage Spreads Behind Your Tiles
                </h3>
                <div className="space-y-5">
                  {[
                    { stage: "Stage 1", title: "Grout Failure", desc: "Water begins seeping through cracked or porous grout joints every time the shower is used." },
                    { stage: "Stage 2", title: "Moisture Build-Up", desc: "Water accumulates behind tiles, saturating the substrate and wicking into wall cavities." },
                    { stage: "Stage 3", title: "Mould & Rot", desc: "Persistent dampness promotes mould growth and timber rot within the wall framing." },
                    { stage: "Stage 4", title: "Structural Damage", desc: "Left untreated, water degrades plasterboard, corrodes fixings, and compromises structural integrity." },
                  ].map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center">
                        <span className="text-xs font-bold text-destructive">{item.stage.split(" ")[1]}</span>
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

        {/* Warning Signs Section */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Warning Signs Your Shower Is Leaking
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Not sure if you have a leaking shower? Look out for these common symptoms. 
                If you notice any of the following, it's time to book a professional shower leak inspection.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {warningSigns.map((sign, index) => {
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
                Spotted any of these signs? Don't wait for the damage to spread.
              </p>
              <CTAButton variant="link" to="#quote-form">
                Book a Free Inspection <ArrowRight className="w-4 h-4 ml-1 inline" />
              </CTAButton>
            </motion.div>
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
                  Why Epoxy Grout is the{" "}
                  <span className="text-secondary">Smart Choice</span>
                </h2>
                <p className="text-muted-foreground mb-8">
                  Traditional cement grout fails over time, cracking and allowing water 
                  through. Our premium epoxy grout creates a waterproof barrier that 
                  lasts for decades — without the cost or hassle of re-tiling. It's the preferred 
                  solution for professional shower sealing across Sydney.
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
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Common Causes of Leaking Showers
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
        <section className="py-16 lg:py-24">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Our Professional Shower Repair Process
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A systematic approach to ensure lasting results. Most leaking shower repairs are completed 
                in a single day — with your shower ready to use within 24 hours.
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

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center text-muted-foreground mt-8 max-w-2xl mx-auto"
            >
              In most cases, our shower leak repair process does <strong className="text-foreground">not require tile removal</strong>. 
              The epoxy grout is applied directly into existing tile joints, meaning no demolition, no mess, 
              and no expensive tile matching. We also offer expert{" "}
              <Link to="/services/balcony-repairs" className="text-secondary hover:underline">
                balcony waterproofing
              </Link>{" "}
              across Sydney using the same proven methodology.
            </motion.p>
          </div>
        </section>

        {/* Epoxy vs Cement Grout Section */}
        <section className="py-16 lg:py-24 bg-muted/30">
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

        {/* Why Choose Us Section */}
        <section className="py-16 lg:py-24">
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
                When it comes to leaking shower repairs in Sydney, experience and quality materials make all the difference. 
                Here's why homeowners, property managers, and{" "}
                <Link to="/strata" className="text-secondary hover:underline">
                  strata managers
                </Link>{" "}
                trust us with their shower leak repairs.
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
        <section className="py-16 lg:py-24">
          <div className="section-container">
            <PricingCalculator type="shower" />
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
                Leaking Shower Repair FAQ
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
                  Leaking Shower Repairs Across Sydney
                </h2>
                <p className="text-sm text-muted-foreground">
                  We provide professional leaking shower repair and shower sealing services across all Sydney suburbs — from the 
                  Eastern Suburbs to the Hills District, Inner West, North Shore, Western Sydney, and the Northern Beaches. 
                  Whether you're a homeowner, property manager, or real estate agent, we offer fast, reliable bathroom leak repair 
                  with same-day availability. Browse our{" "}
                  <Link to="/suburbs" className="text-secondary hover:underline">
                    service areas
                  </Link>{" "}
                  to find your local suburb page, or call us directly for a free inspection.
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
                  Book Your Free Shower Leak Inspection
                </h2>
                <p className="text-muted-foreground mb-8">
                  Don't let a leaking shower cause more damage to your home. Upload photos of your shower 
                  and we'll provide a detailed, no-obligation quote within 24 hours. Alternatively, call us 
                  to book your free on-site inspection today.
                </p>

                <div className="p-6 bg-card rounded-lg border border-border mb-6">
                  <h3 className="font-heading font-bold text-lg text-foreground mb-4">
                    What's Included:
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-sm text-foreground">
                      <Check className="w-4 h-4 text-secondary" />
                      Free on-site inspection & leak detection
                    </li>
                    <li className="flex items-center gap-3 text-sm text-foreground">
                      <Check className="w-4 h-4 text-secondary" />
                      Detailed written quote — no hidden costs
                    </li>
                    <li className="flex items-center gap-3 text-sm text-foreground">
                      <Check className="w-4 h-4 text-secondary" />
                      Premium epoxy grout application
                    </li>
                    <li className="flex items-center gap-3 text-sm text-foreground">
                      <Check className="w-4 h-4 text-secondary" />
                      10-year written warranty
                    </li>
                    <li className="flex items-center gap-3 text-sm text-foreground">
                      <Check className="w-4 h-4 text-secondary" />
                      Professional clean-up after every job
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
