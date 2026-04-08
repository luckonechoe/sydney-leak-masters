import { lazy, Suspense } from "react";
import { m } from "framer-motion";
import { Shield, Droplets, Clock, Award, CheckCircle2, ArrowRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTAButton } from "@/components/CTAButton";
import { WarrantyBadge } from "@/components/WarrantyBadge";
import { ServiceCard } from "@/components/ServiceCard";
import { TrustPillars } from "@/components/TrustPillars";
import { SEOHead, LocalBusinessSchema } from "@/components/seo";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

// Lazy-load below-fold components to reduce initial JS
const ProcessTimeline = lazy(() => import("@/components/ProcessTimeline").then(m => ({ default: m.ProcessTimeline })));
const QuoteForm = lazy(() => import("@/components/QuoteForm").then(m => ({ default: m.QuoteForm })));
const Testimonials = lazy(() => import("@/components/Testimonials").then(m => ({ default: m.Testimonials })));

const trustPoints = [
  { icon: Shield, text: "10-Year Warranty" },
  { icon: Droplets, text: "No Tile Removal Required" },
  { icon: Clock, text: "Free On-Site Inspections" },
  { icon: Award, text: "Premium Epoxy Grout Systems" },
];

const benefits = [
  "Permanent shower leak repairs — no re-tiling needed",
  "Balcony waterproofing and spalling prevention",
  "Premium epoxy regrouting across Greater Sydney",
  "Transparent pricing with no hidden costs",
  "Strata-approved methods for property managers",
  "Backed by a 10-Year Warranty on every job",
];

const homepageFaqs = [
  {
    question: "How do you fix a leaking shower without removing tiles?",
    answer: "We remove the existing grout and silicone, then apply a premium two-part epoxy grout system that creates a fully waterproof seal between your tiles. The entire process is completed without removing a single tile, so there is no mess, no demolition, and no re-tiling costs.",
  },
  {
    question: "How much does a leaking shower repair cost in Sydney?",
    answer: "A standard shower leak repair in Sydney typically ranges from $800 to $1,500 depending on the size of the shower and the severity of the issue. We provide free, no-obligation quotes so you know exactly what to expect before any work begins.",
  },
  {
    question: "What areas in Sydney do you service?",
    answer: "We service over 50 suburbs across Greater Sydney, including the Eastern Suburbs, North Shore, Inner West, Western Sydney, and the Sutherland Shire. There are no travel fees regardless of your location.",
  },
  {
    question: "Do you offer a warranty on leak repairs?",
    answer: "Yes. Every shower and balcony leak repair comes with a 10-Year Warranty. This covers the materials and workmanship, giving you complete peace of mind that the repair will last.",
  },
  {
    question: "Can you repair a leaking balcony without replacing the membrane?",
    answer: "In many cases, yes. We use professional-grade epoxy grout and waterproof sealant systems to seal balcony leaks at the surface level. If deeper membrane work is required, we will let you know upfront after our inspection.",
  },
  {
    question: "How long does a shower or balcony leak repair take?",
    answer: "Most shower repairs are completed in 3 to 6 hours. Balcony repairs may take slightly longer depending on the area. The epoxy grout requires approximately 48 hours to fully cure before the area can be used again.",
  },
];

const serviceAreas = [
  { name: "Bondi", slug: "bondi" },
  { name: "Parramatta", slug: "parramatta" },
  { name: "Manly", slug: "manly" },
  { name: "Chatswood", slug: "chatswood" },
  { name: "Cronulla", slug: "cronulla" },
  { name: "Marrickville", slug: "marrickville" },
  { name: "Randwick", slug: "randwick" },
  { name: "Mosman", slug: "mosman" },
];

export default function Index() {
  return (
    <>
      <SEOHead
        title="Leaking Shower & Balcony Repairs Sydney · 10-Year Warranty"
        description="Stop shower and balcony leaks for good. Sydney Sealed uses premium epoxy grout to fix leaks without removing tiles. 10-year warranty. Free quotes across Sydney."
        canonical="https://sydneysealed.com.au/"
        keywords="leaking shower repairs sydney, shower leak repair, balcony leak repairs sydney, epoxy regrouting sydney, waterproof sealing sydney, shower waterproofing, balcony waterproofing sydney"
      />
      <LocalBusinessSchema />
      <FAQSchema faqs={homepageFaqs} />
      
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="relative pt-24 lg:pt-32 pb-16 lg:pb-24 overflow-hidden">
          {/* Grid pattern background */}
          <div className="absolute inset-0 grid-pattern" />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
          
          <div className="section-container relative">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Content */}
              <div>
                <WarrantyBadge size="lg" className="mb-6" />
                
                <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6" style={{ lineHeight: 1.1 }}>
                  Sydney's #1 Shower & Balcony Leak Repair —{" "}
                  <span className="gradient-text" style={{ lineHeight: 'inherit' }}>No Tile Removal, 10-Year Warranty</span>
                </h1>
                
                <p className="text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed">
                  Sydney Sealed specialises in permanent leak repairs using premium epoxy grout systems. 
                  No tile removal. No unnecessary demolition. Just expert workmanship backed by a 10-Year Warranty.
                </p>
                
                {/* Trust Points */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                {trustPoints.map((point) => {
                    const Icon = point.icon;
                    return (
                      <div
                        key={point.text}
                        className="flex items-center gap-3"
                      >
                        <div className="p-2 rounded-lg bg-secondary/10">
                          <Icon className="w-5 h-5 text-secondary" />
                        </div>
                        <span className="text-sm font-medium text-foreground">
                          {point.text}
                        </span>
                      </div>
                    );
                  })}
                </div>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <CTAButton variant="phone" size="lg">
                    Call For Free Quote
                  </CTAButton>
                  <CTAButton variant="link" to="/contact" size="lg">
                    Get Online Quote
                  </CTAButton>
                </div>
              </div>
              
              {/* Right Side - Hero Image Placeholder */}
              <m.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative hidden lg:block"
              >
                <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-card to-muted border border-border overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-8">
                      <Droplets className="w-16 h-16 text-secondary/40 mx-auto mb-4" />
                      <p className="text-muted-foreground">Hero Image</p>
                      <p className="text-xs text-muted-foreground/60">Professional repair in action</p>
                    </div>
                  </div>
                </div>
                
                {/* Floating badge */}
                <m.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="absolute -bottom-4 -left-4 p-4 bg-card border border-border rounded-lg shadow-lg"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-accent/10">
                      <MapPin className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="font-heading font-bold text-foreground">Sydney-Wide</p>
                      <p className="text-xs text-muted-foreground">Service Coverage</p>
                    </div>
                  </div>
                </m.div>
              </m.div>
            </div>
          </div>
        </section>

        {/* Trust Statistics */}
        <section className="py-12 lg:py-16">
          <div className="section-container">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-xl bg-primary/10 border border-primary/20 p-8 lg:p-12"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {[
                  { value: "500+", label: "Happy Customers" },
                  { value: "24 hr", label: "Response Time" },
                  { value: "10 yr", label: "Warranty" },
                  { value: "100%", label: "Satisfaction Guarantee" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="font-heading text-3xl lg:text-4xl font-bold text-primary mb-2">
                      {stat.value}
                    </p>
                    <p className="text-muted-foreground text-sm uppercase tracking-wider">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </m.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="section-container">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Sydney's Shower & Balcony Leak Repair Specialists
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We fix leaking showers and balconies across Sydney using proven epoxy grout and waterproofing systems — without removing your tiles.
              </p>
            </m.div>
            
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
              <ServiceCard type="shower" />
              <ServiceCard type="balcony" />
            </div>
          </div>
        </section>

        {/* Trust Pillars */}
        <TrustPillars />

        {/* Preventative Maintenance Banner */}
        <section className="py-12 lg:py-16">
          <div className="section-container">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-xl bg-gradient-to-r from-secondary/10 via-accent/10 to-secondary/10 border border-secondary/20 p-8 lg:p-12"
            >
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="flex-1 text-center lg:text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/20 text-secondary text-xs font-bold uppercase tracking-wider mb-4">
                    <Shield className="w-3.5 h-3.5" />
                    Annual Maintenance Plan
                  </div>
                  <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-3">
                    Preventative Maintenance —{" "}
                    <span className="text-secondary">$249/year</span>
                  </h2>
                  <p className="text-muted-foreground max-w-2xl text-lg">
                    Includes a full inspection, professional cleaning, and touch-up services 
                    to maintain your warranty coverage and keep your seals performing at their best.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <Link
                    to="/preventative-maintenance"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground font-bold rounded-lg hover:bg-secondary/90 transition-colors"
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </m.div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 lg:py-24">
          <div className="section-container">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
                How We Fix Your Leak
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A simple 4-step process from inspection to completion. 
                No hidden costs, no surprises.
              </p>
            </m.div>
            
            <Suspense fallback={null}>
              <ProcessTimeline />
            </Suspense>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <m.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Why Choose{" "}
                  <span className="text-secondary">Sydney Sealed?</span>
                </h2>
                
                <ul className="space-y-4 mb-8">
                  {benefits.map((benefit, index) => (
                    <m.li
                      key={benefit}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{benefit}</span>
                    </m.li>
                  ))}
                </ul>
                
                <Link 
                  to="/faq" 
                  className="inline-flex items-center gap-2 text-secondary hover:gap-3 transition-all font-medium"
                >
                  View FAQs
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </m.div>
              
              {/* Image Placeholder */}
              <m.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-square rounded-xl bg-gradient-to-br from-card to-muted border border-border overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-8">
                      <Award className="w-16 h-16 text-accent/40 mx-auto mb-4" />
                      <p className="text-muted-foreground">Before/After Image</p>
                    </div>
                  </div>
                </div>
              </m.div>
            </div>
          </div>
        </section>

        {/* Performance Metrics */}
        <section className="py-12 lg:py-16">
          <div className="section-container">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-xl bg-primary/10 border border-primary/20 p-8 lg:p-12"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {[
                  { value: "100%", label: "Success Rate" },
                  { value: "3–6 hrs", label: "Average Job Time" },
                  { value: "48 hrs", label: "Full Cure Time" },
                  { value: "Lifetime", label: "Mold Protection" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="font-heading text-3xl lg:text-4xl font-bold text-primary mb-2">
                      {stat.value}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </m.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 lg:py-24">
          <div className="section-container">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
                What Sydney Homeowners Say
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Real reviews from homeowners and property managers across Sydney.
              </p>
            </m.div>
            
            <Suspense fallback={null}>
              <Testimonials />
            </Suspense>
          </div>
        </section>

        {/* Homepage FAQ Section */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="section-container">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Common Questions About Leak Repairs
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Straight answers to the questions Sydney homeowners ask most.
              </p>
            </m.div>

            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <Accordion type="single" collapsible className="w-full">
                {homepageFaqs.map((faq, index) => (
                  <AccordionItem key={index} value={`faq-${index}`}>
                    <AccordionTrigger className="text-left text-base font-semibold text-foreground">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </m.div>
          </div>
        </section>

        {/* Service Areas Section */}
        <section className="py-16 lg:py-24">
          <div className="section-container">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Leak Repairs Across Greater Sydney
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We service over 50 suburbs from the Eastern Suburbs to Western Sydney. No travel fees, no matter where you are.
              </p>
            </m.div>

            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto mb-8"
            >
              {serviceAreas.map((area) => (
                <Link
                  key={area.slug}
                  to={`/leaking-shower-repairs/${area.slug}`}
                  className="flex items-center gap-2 p-3 rounded-lg border border-border bg-card hover:border-secondary/50 hover:bg-secondary/5 transition-colors text-sm font-medium text-foreground"
                >
                  <MapPin className="w-4 h-4 text-secondary flex-shrink-0" />
                  {area.name}
                </Link>
              ))}
            </m.div>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/suburbs"
                className="inline-flex items-center gap-2 text-secondary hover:gap-3 transition-all font-medium"
              >
                View all service areas <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/services/shower-repairs"
                className="inline-flex items-center gap-2 text-secondary hover:gap-3 transition-all font-medium"
              >
                Shower repairs <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/services/balcony-repairs"
                className="inline-flex items-center gap-2 text-secondary hover:gap-3 transition-all font-medium"
              >
                Balcony repairs <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/guides/complete-guide-leak-repairs-sydney"
                className="inline-flex items-center gap-2 text-secondary hover:gap-3 transition-all font-medium"
              >
                Complete repair guide <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Quote Form Section */}
        <section id="quote-form" className="py-16 lg:py-24 bg-muted/30">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <m.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Request Your Free Leak Inspection
                </h2>
                <p className="text-muted-foreground mb-8">
                  Upload photos of your leak and we'll provide a detailed quote within 24 hours. 
                  No obligation, no pressure.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-secondary/10">
                      <CheckCircle2 className="w-5 h-5 text-secondary" />
                    </div>
                    <span className="text-foreground">Free inspection included</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-secondary/10">
                      <CheckCircle2 className="w-5 h-5 text-secondary" />
                    </div>
                    <span className="text-foreground">No-obligation quote</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-secondary/10">
                      <CheckCircle2 className="w-5 h-5 text-secondary" />
                    </div>
                    <span className="text-foreground">Response within 24 hours</span>
                  </div>
                </div>
                
                <WarrantyBadge size="md" animated={false} />
              </m.div>
              
              <m.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <Suspense fallback={null}>
                  <QuoteForm />
                </Suspense>
              </m.div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-16 lg:py-20 bg-gradient-to-r from-primary/20 via-secondary/10 to-primary/20">
          <div className="section-container text-center">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Stop Your Leak — Get a Free Quote Today
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Call now for a free consultation or book an inspection online.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <CTAButton variant="phone" size="lg">
                  Call Now
                </CTAButton>
                <CTAButton variant="link" to="/contact" size="lg">
                  Book Inspection
                </CTAButton>
              </div>
            </m.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
