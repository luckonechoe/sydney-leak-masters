import { motion } from "framer-motion";
import { Shield, Droplets, Clock, Award, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTAButton } from "@/components/CTAButton";
import { WarrantyBadge } from "@/components/WarrantyBadge";
import { ServiceCard } from "@/components/ServiceCard";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { TrustPillars } from "@/components/TrustPillars";
import { QuoteForm } from "@/components/QuoteForm";
import { Testimonials } from "@/components/Testimonials";
import { SEOHead, LocalBusinessSchema } from "@/components/seo";

const trustPoints = [
  { icon: Shield, text: "10 Year Warranty" },
  { icon: Droplets, text: "No Tile Removal" },
  { icon: Clock, text: "Same-Day Service" },
  { icon: Award, text: "Premium Epoxy Grouts" },
];

const benefits = [
  "Stop leaks without costly re-tiling",
  "Expert epoxy grout application",
  "Sydney-wide service coverage",
  "Transparent, upfront quotes",
  "Licensed and insured technicians",
  "Strata and property manager friendly",
];

export default function Index() {
  return (
    <>
      <SEOHead
        title="Shower & Balcony Leak Repairs Sydney"
        description="Sydney's trusted leak repair specialists. Stop shower and balcony leaks permanently with premium epoxy grout solutions. 10-year warranty. Free quotes."
      />
      <LocalBusinessSchema />
      
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
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <WarrantyBadge size="lg" className="mb-6" />
                
                <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                  Stop Leaks Permanently.{" "}
                  <span className="gradient-text">Without Re-Tiling.</span>
                </h1>
                
                <p className="text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed">
                  Sydney's trusted specialists in shower and balcony leak repairs. 
                  Our premium epoxy grout solutions fix leaks for good — guaranteed 
                  with a 10-year warranty.
                </p>
                
                {/* Trust Points */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {trustPoints.map((point, index) => {
                    const Icon = point.icon;
                    return (
                      <motion.div
                        key={point.text}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <div className="p-2 rounded-lg bg-secondary/10">
                          <Icon className="w-5 h-5 text-secondary" />
                        </div>
                        <span className="text-sm font-medium text-foreground">
                          {point.text}
                        </span>
                      </motion.div>
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
              </motion.div>
              
              {/* Right Side - Hero Image Placeholder */}
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
                      <p className="text-muted-foreground">Hero Image</p>
                      <p className="text-xs text-muted-foreground/60">Professional repair in action</p>
                    </div>
                  </div>
                </div>
                
                {/* Floating badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="absolute -bottom-4 -left-4 p-4 bg-card border border-border rounded-lg shadow-lg"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-accent/10">
                      <Shield className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="font-heading font-bold text-foreground">500+</p>
                      <p className="text-xs text-muted-foreground">Repairs Completed</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Trust Statistics */}
        <section className="py-12 lg:py-16">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-xl bg-primary/10 border border-primary/20 p-8 lg:p-12"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                {[
                  { value: "500+", label: "Happy Customers" },
                  { value: "24hr", label: "Response Time" },
                  { value: "10yr", label: "Warranty" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="font-heading text-4xl lg:text-5xl font-bold text-primary mb-2">
                      {stat.value}
                    </p>
                    <p className="text-muted-foreground text-sm uppercase tracking-wider">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Our Repair Services
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Specialised leak repair solutions for showers and balconies. 
                Premium epoxy grouts that stop leaks without removing tiles.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
              <ServiceCard type="shower" />
              <ServiceCard type="balcony" />
            </div>
          </div>
        </section>

        {/* Preventative Maintenance Banner */}
        <section className="py-12 lg:py-16">
          <div className="section-container">
            <motion.div
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
            </motion.div>
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
                How It Works
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A simple 4-step process from inspection to completion. 
                No hidden costs, no surprises.
              </p>
            </motion.div>
            
            <ProcessTimeline />
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
                  Why Choose{" "}
                  <span className="text-secondary">Sydney Leak Repairs Pro?</span>
                </h2>
                
                <ul className="space-y-4 mb-8">
                  {benefits.map((benefit, index) => (
                    <motion.li
                      key={benefit}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
                
                <Link 
                  to="/faq" 
                  className="inline-flex items-center gap-2 text-secondary hover:gap-3 transition-all font-medium"
                >
                  View FAQs
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
              
              {/* Image Placeholder */}
              <motion.div
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
              </motion.div>
            </div>
          </div>
        </section>

        {/* Performance Metrics */}
        <section className="py-12 lg:py-16">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-xl bg-primary/10 border border-primary/20 p-8 lg:p-12"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {[
                  { value: "100%", label: "Success Rate" },
                  { value: "3-6hrs", label: "Average Job Time" },
                  { value: "48hr", label: "Full Cure Time" },
                  { value: "Lifetime", label: "Mould Protection" },
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
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 lg:py-24">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
                What Our Clients Say
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Real reviews from homeowners and property managers across Sydney.
              </p>
            </motion.div>
            
            <Testimonials />
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
                  Get Your Free Quote
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

        {/* CTA Banner */}
        <section className="py-16 lg:py-20 bg-gradient-to-r from-primary/20 via-secondary/10 to-primary/20">
          <div className="section-container text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Ready to Stop Your Leak?
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
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
