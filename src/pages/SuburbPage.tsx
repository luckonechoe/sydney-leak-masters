import { useParams, Navigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Check, Phone, ArrowRight, BookOpen } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTAButton } from "@/components/CTAButton";
import { WarrantyBadge } from "@/components/WarrantyBadge";
import { ServiceCard } from "@/components/ServiceCard";
import { QuoteForm } from "@/components/QuoteForm";
import { SEOHead, ServiceSchema, Breadcrumbs } from "@/components/seo";
import { getSuburbBySlug } from "@/lib/suburbs";

export default function SuburbPage() {
  const { suburb } = useParams<{ suburb: string }>();
  const suburbData = suburb ? getSuburbBySlug(suburb) : undefined;

  if (!suburbData) {
    return <Navigate to="/404" replace />;
  }

  const breadcrumbItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: suburbData.name, href: `/services/${suburbData.slug}` },
  ];

  return (
    <>
      <SEOHead
        title={`Leak Repairs ${suburbData.name} | Shower & Balcony Specialists`}
        description={`Professional shower and balcony leak repairs in ${suburbData.name}, ${suburbData.region}. 10-year warranty. Free quotes. Sydney Leak Repairs Pro.`}
      />
      <ServiceSchema
        name={`Leak Repair Service - ${suburbData.name}`}
        description={suburbData.description}
        areaServed={`${suburbData.name}, ${suburbData.postcode}, NSW, Australia`}
      />

      <div className="min-h-screen bg-background">
        <Header />

        <section className="pt-24 lg:pt-32 pb-16 relative">
          <div className="absolute inset-0 grid-pattern" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />

          <div className="section-container relative">
            <Breadcrumbs items={breadcrumbItems} />

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-secondary/10">
                  <MapPin className="w-6 h-6 text-secondary" />
                </div>
                <span className="text-sm text-muted-foreground">{suburbData.region} • {suburbData.postcode}</span>
              </div>

              <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-6">
                Leak Repairs in <span className="gradient-text">{suburbData.name}</span>
              </h1>

              <p className="text-lg text-muted-foreground mb-6">{suburbData.description}</p>

              <WarrantyBadge size="lg" className="mb-8" />

              <div className="flex flex-col sm:flex-row gap-4">
                <CTAButton variant="phone" size="lg">Call For Free Quote</CTAButton>
                <CTAButton variant="link" to="#quote" size="lg">Get Online Quote</CTAButton>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="section-container">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-8 text-center">
              Services in {suburbData.name}
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <ServiceCard type="shower" />
              <ServiceCard type="balcony" />
            </div>
          </div>
        </section>

        {/* Internal Links Section */}
        <section className="py-12">
          <div className="section-container">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                Expert Leak Repair Resources
              </h2>
              <p className="text-muted-foreground mb-6">
                Learn more about protecting your {suburbData.name} property from water damage with our expert guides and service information.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <Link to="/guides/complete-guide-leak-repairs-sydney" className="flex items-start gap-3 p-4 bg-card border border-border rounded-lg hover:border-secondary/50 transition-colors group">
                  <BookOpen className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
                  <div>
                    <span className="font-medium text-foreground group-hover:text-secondary transition-colors">Complete Guide to Leak Repairs</span>
                    <p className="text-sm text-muted-foreground mt-1">Everything you need to know about shower and balcony leak repairs in Sydney.</p>
                  </div>
                </Link>
                <Link to="/blog/signs-of-shower-leak" className="flex items-start gap-3 p-4 bg-card border border-border rounded-lg hover:border-secondary/50 transition-colors group">
                  <BookOpen className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
                  <div>
                    <span className="font-medium text-foreground group-hover:text-secondary transition-colors">5 Warning Signs of a Shower Leak</span>
                    <p className="text-sm text-muted-foreground mt-1">Learn how to spot leaks before they cause serious damage.</p>
                  </div>
                </Link>
                <Link to="/blog/epoxy-grout-vs-cement-grout" className="flex items-start gap-3 p-4 bg-card border border-border rounded-lg hover:border-secondary/50 transition-colors group">
                  <BookOpen className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
                  <div>
                    <span className="font-medium text-foreground group-hover:text-secondary transition-colors">Epoxy Grout vs Cement Grout</span>
                    <p className="text-sm text-muted-foreground mt-1">Why epoxy grout is the professional's choice for lasting waterproofing.</p>
                  </div>
                </Link>
                <Link to="/blog/concrete-degradation-prevention" className="flex items-start gap-3 p-4 bg-card border border-border rounded-lg hover:border-secondary/50 transition-colors group">
                  <BookOpen className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
                  <div>
                    <span className="font-medium text-foreground group-hover:text-secondary transition-colors">Preventing Concrete Degradation</span>
                    <p className="text-sm text-muted-foreground mt-1">Protect your balcony from spalling and structural damage.</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="quote" className="py-16">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="font-heading text-3xl font-bold text-foreground mb-6">
                  Get Your {suburbData.name} Quote
                </h2>
                <p className="text-muted-foreground mb-6">
                  Upload photos and we'll provide a detailed quote for your {suburbData.name} property.
                </p>
                <ul className="space-y-3">
                  {["Free on-site inspection", "No-obligation quote", "10-year warranty", "Local service team"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-foreground">
                      <Check className="w-4 h-4 text-secondary" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <QuoteForm />
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
