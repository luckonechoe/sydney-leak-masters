import { useParams, Navigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Check, Phone, ArrowRight, BookOpen, Droplets, Building2 } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTAButton } from "@/components/CTAButton";
import { WarrantyBadge } from "@/components/WarrantyBadge";
import { ServiceCard } from "@/components/ServiceCard";
import { QuoteForm } from "@/components/QuoteForm";
import { SEOHead, ServiceSchema, Breadcrumbs, FAQSchema } from "@/components/seo";
import { getSuburbBySlug, sydneySuburbs } from "@/lib/suburbs";

interface SuburbPageProps {
  serviceType?: "shower" | "balcony";
}

export default function SuburbPage({ serviceType = "shower" }: SuburbPageProps) {
  const { suburb } = useParams<{ suburb: string }>();
  const suburbData = suburb ? getSuburbBySlug(suburb) : undefined;

  if (!suburbData) {
    return <Navigate to="/404" replace />;
  }

  const isShower = serviceType === "shower";
  const serviceLabel = isShower ? "Leaking Shower Repairs" : "Leaking Balcony Repairs";
  const serviceSlug = isShower ? "leaking-shower-repairs" : "leaking-balcony-repairs";
  const altServiceSlug = isShower ? "leaking-balcony-repairs" : "leaking-shower-repairs";
  const altServiceLabel = isShower ? "Balcony Repairs" : "Shower Repairs";
  const ServiceIcon = isShower ? Droplets : Building2;
  const canonicalUrl = `https://sydneyleakrepairspro.com.au/${serviceSlug}/${suburbData.slug}`;

  // Get nearby suburbs for internal linking (same region, max 4)
  const nearbySuburbs = sydneySuburbs
    .filter(s => s.region === suburbData.region && s.slug !== suburbData.slug)
    .slice(0, 4);

  const suburbFAQs = [
    {
      question: `How much does a ${isShower ? 'shower' : 'balcony'} leak repair cost in ${suburbData.name}?`,
      answer: `The cost of ${isShower ? 'shower' : 'balcony'} leak repairs in ${suburbData.name} depends on the size of the area, extent of damage, and repair method required. Most standard epoxy grout repairs start from $800. We provide free, no-obligation quotes so you know exactly what to expect.`,
    },
    {
      question: `Do you service ${suburbData.name} ${suburbData.postcode}?`,
      answer: `Yes! We provide professional ${isShower ? 'shower' : 'balcony'} leak repair services throughout ${suburbData.name} (${suburbData.postcode}) and the wider ${suburbData.region} area. No travel fees apply.`,
    },
    {
      question: `How quickly can you attend a leak in ${suburbData.name}?`,
      answer: `We typically schedule inspections in ${suburbData.name} within 24–48 hours. Emergency same-day service is available for active leaks that are causing immediate water damage.`,
    },
    {
      question: `Can you fix a leaking ${isShower ? 'shower' : 'balcony'} in ${suburbData.name} without removing tiles?`,
      answer: `In most cases, yes. Our epoxy regrouting and sealing process repairs ${isShower ? 'shower' : 'balcony'} leaks without removing any tiles — saving you time and money compared to a full renovation.`,
    },
  ];

  const breadcrumbItems = [
    { name: "Home", href: "/" },
    { name: "Service Areas", href: "/suburbs" },
    { name: `${serviceLabel} ${suburbData.name}`, href: `/${serviceSlug}/${suburbData.slug}` },
  ];

  // Keyword-rich meta
  const seoTitle = `${serviceLabel} ${suburbData.name} ${suburbData.postcode} | Expert ${isShower ? 'Shower Sealing' : 'Balcony Waterproofing'} ${suburbData.region}`;
  const seoDescription = `Professional ${serviceLabel.toLowerCase()} in ${suburbData.name}, ${suburbData.region}. No tile removal, 10-year warranty, free quotes. Expert ${isShower ? 'epoxy grout shower sealing' : 'balcony membrane waterproofing'} for ${suburbData.name} ${suburbData.postcode} homes & strata. Call today.`;
  const seoKeywords = `${serviceLabel.toLowerCase()} ${suburbData.name}, ${isShower ? 'shower' : 'balcony'} leak repair ${suburbData.name}, ${isShower ? 'shower sealing' : 'balcony waterproofing'} ${suburbData.name} ${suburbData.postcode}, waterproofing ${suburbData.name}, epoxy grout ${suburbData.name}, leak detection ${suburbData.region}`;

  return (
    <>
      <SEOHead
        title={seoTitle}
        description={seoDescription}
        canonical={canonicalUrl}
        keywords={seoKeywords}
        imageAlt={`${serviceLabel} in ${suburbData.name} ${suburbData.postcode} - Sydney Leak Repairs Pro`}
      />
      <ServiceSchema
        name={`${serviceLabel} - ${suburbData.name} ${suburbData.postcode}`}
        description={`Professional ${serviceLabel.toLowerCase()} in ${suburbData.name}, ${suburbData.region}. ${suburbData.description}`}
        areaServed={`${suburbData.name}, ${suburbData.postcode}, NSW, Australia`}
      />
      <FAQSchema faqs={suburbFAQs} />

      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="pt-24 lg:pt-32 pb-16 relative">
          <div className="absolute inset-0 grid-pattern" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />

          <div className="section-container relative">
            <Breadcrumbs items={breadcrumbItems} />

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-secondary/10">
                  <ServiceIcon className="w-6 h-6 text-secondary" />
                </div>
                <span className="text-sm text-muted-foreground">{suburbData.region} • {suburbData.postcode}</span>
              </div>

              <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-6">
                {serviceLabel} in <span className="gradient-text">{suburbData.name}</span>
              </h1>

              <p className="text-lg text-muted-foreground mb-4">{suburbData.description}</p>
              
              <p className="text-muted-foreground mb-6">
                {isShower 
                  ? `Our expert technicians provide professional shower leak repairs throughout ${suburbData.name} and the ${suburbData.region} area. Using premium epoxy grout technology, we fix leaking showers without removing tiles — saving you thousands compared to a full bathroom renovation. All work is completed to Australian Standards AS 3740 and backed by our 10-year warranty.`
                  : `Our licensed waterproofing specialists repair leaking balconies across ${suburbData.name} and the ${suburbData.region} area. We use commercial-grade epoxy grout and flexible membrane systems to permanently seal your balcony — without demolition. All repairs comply with AS 4654.2 and include a 10-year written warranty.`
                }
              </p>

              <WarrantyBadge size="lg" className="mb-8" />

              <div className="flex flex-col sm:flex-row gap-4">
                <CTAButton variant="phone" size="lg">Call For Free Quote</CTAButton>
                <CTAButton variant="link" to="#quote" size="lg">Get Online Quote</CTAButton>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-muted/30">
          <div className="section-container">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-8 text-center">
              {isShower ? 'Shower & Balcony' : 'Balcony & Shower'} Repair Services in {suburbData.name}
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <ServiceCard type="shower" />
              <ServiceCard type="balcony" />
            </div>
            
            {/* Cross-link to alternate service */}
            <div className="text-center mt-8">
              <Link 
                to={`/${altServiceSlug}/${suburbData.slug}`}
                className="inline-flex items-center gap-2 text-secondary hover:underline font-medium"
              >
                Looking for {altServiceLabel} in {suburbData.name}?
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us for Local Area */}
        <section className="py-12">
          <div className="section-container">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                Why {suburbData.name} Homeowners Choose Us for {isShower ? 'Shower' : 'Balcony'} Leak Repairs
              </h2>
              <div className="prose prose-sm text-muted-foreground mb-6">
                <p>
                  {suburbData.name} properties face unique waterproofing challenges. {
                    suburbData.region.includes("Eastern") || suburbData.region.includes("Beaches") || suburbData.region.includes("Northern Beaches")
                      ? `Coastal salt spray and humidity in the ${suburbData.region} accelerate grout deterioration and membrane failure. Our technicians understand these local conditions and use UV-resistant, salt-tolerant materials.`
                      : suburbData.region.includes("Inner")
                        ? `Heritage terraces and older apartments in the ${suburbData.region} often have outdated waterproofing that no longer meets current Australian Standards. We specialise in non-invasive repairs that preserve character while providing modern protection.`
                        : suburbData.region.includes("Hills") || suburbData.region.includes("Western")
                          ? `Clay-rich soils in the ${suburbData.region} cause significant building movement, leading to cracked grout and stressed membranes. We use flexible waterproofing systems designed to accommodate this movement.`
                          : `Properties throughout the ${suburbData.region} area require expert waterproofing solutions tailored to local building styles and environmental conditions. Our team has extensive experience in ${suburbData.name} and surrounding suburbs.`
                  }
                </p>
              </div>

              {/* Service page internal links */}
              <div className="grid sm:grid-cols-2 gap-3 mb-6">
                <Link to="/services/shower-repairs" className="flex items-center gap-2 p-3 bg-card border border-border rounded-lg hover:border-secondary/50 transition-colors text-sm">
                  <Droplets className="w-4 h-4 text-secondary shrink-0" />
                  <span className="text-foreground hover:text-secondary transition-colors">
                    Learn about our <strong>shower repair process</strong>
                  </span>
                </Link>
                <Link to="/services/balcony-repairs" className="flex items-center gap-2 p-3 bg-card border border-border rounded-lg hover:border-secondary/50 transition-colors text-sm">
                  <Building2 className="w-4 h-4 text-secondary shrink-0" />
                  <span className="text-foreground hover:text-secondary transition-colors">
                    Learn about our <strong>balcony waterproofing</strong>
                  </span>
                </Link>
                <Link to="/strata" className="flex items-center gap-2 p-3 bg-card border border-border rounded-lg hover:border-secondary/50 transition-colors text-sm">
                  <MapPin className="w-4 h-4 text-secondary shrink-0" />
                  <span className="text-foreground hover:text-secondary transition-colors">
                    <strong>Strata waterproofing</strong> services in {suburbData.name}
                  </span>
                </Link>
                <Link to="/contact" className="flex items-center gap-2 p-3 bg-card border border-border rounded-lg hover:border-secondary/50 transition-colors text-sm">
                  <Phone className="w-4 h-4 text-secondary shrink-0" />
                  <span className="text-foreground hover:text-secondary transition-colors">
                    <strong>Get a free quote</strong> for {suburbData.name}
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Blog & Guide Internal Links */}
        <section className="py-12 bg-muted/30">
          <div className="section-container">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                Expert {isShower ? 'Shower' : 'Balcony'} Leak Repair Resources
              </h2>
              <p className="text-muted-foreground mb-6">
                Learn more about protecting your {suburbData.name} property from water damage with our expert guides.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <Link to="/guides/complete-guide-leak-repairs-sydney" className="flex items-start gap-3 p-4 bg-card border border-border rounded-lg hover:border-secondary/50 transition-colors group">
                  <BookOpen className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
                  <div>
                    <span className="font-medium text-foreground group-hover:text-secondary transition-colors">Complete Guide to Leak Repairs in Sydney</span>
                    <p className="text-sm text-muted-foreground mt-1">Everything about shower and balcony leak repairs — causes, costs, and prevention.</p>
                  </div>
                </Link>
                <Link to={isShower ? "/blog/signs-of-shower-leak" : "/blog/balcony-leak-detection"} className="flex items-start gap-3 p-4 bg-card border border-border rounded-lg hover:border-secondary/50 transition-colors group">
                  <BookOpen className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
                  <div>
                    <span className="font-medium text-foreground group-hover:text-secondary transition-colors">
                      {isShower ? "5 Warning Signs of a Shower Leak" : "How to Detect Balcony Leaks Early"}
                    </span>
                    <p className="text-sm text-muted-foreground mt-1">Spot the signs before they cause serious damage to your {suburbData.name} property.</p>
                  </div>
                </Link>
                <Link to={isShower ? "/blog/epoxy-grout-vs-cement-grout" : "/blog/balcony-waterproofing-systems"} className="flex items-start gap-3 p-4 bg-card border border-border rounded-lg hover:border-secondary/50 transition-colors group">
                  <BookOpen className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
                  <div>
                    <span className="font-medium text-foreground group-hover:text-secondary transition-colors">
                      {isShower ? "Epoxy Grout vs Cement Grout" : "Balcony Waterproofing Systems Compared"}
                    </span>
                    <p className="text-sm text-muted-foreground mt-1">
                      {isShower ? "Why epoxy grout is the professional's choice for lasting shower sealing." : "Compare liquid membranes, sheet membranes, and hybrid systems."}
                    </p>
                  </div>
                </Link>
                <Link to={isShower ? "/blog/shower-waterproofing-sydney" : "/blog/concrete-degradation-prevention"} className="flex items-start gap-3 p-4 bg-card border border-border rounded-lg hover:border-secondary/50 transition-colors group">
                  <BookOpen className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
                  <div>
                    <span className="font-medium text-foreground group-hover:text-secondary transition-colors">
                      {isShower ? "Shower Waterproofing in Sydney" : "Preventing Concrete Degradation"}
                    </span>
                    <p className="text-sm text-muted-foreground mt-1">
                      {isShower ? "Australian Standards, membrane types, and maintenance tips." : "Protect your balcony from spalling and structural damage."}
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Nearby Suburbs Internal Links */}
        {nearbySuburbs.length > 0 && (
          <section className="py-12">
            <div className="section-container">
              <div className="max-w-3xl mx-auto">
                <h2 className="font-heading text-xl font-bold text-foreground mb-4">
                  {serviceLabel} Near {suburbData.name}
                </h2>
                <p className="text-sm text-muted-foreground mb-4">
                  We also provide expert {isShower ? 'shower' : 'balcony'} leak repair services in these nearby {suburbData.region} suburbs:
                </p>
                <div className="flex flex-wrap gap-2">
                  {nearbySuburbs.map(s => (
                    <Link 
                      key={s.slug}
                      to={`/${serviceSlug}/${s.slug}`}
                      className="px-3 py-2 bg-card border border-border rounded-lg text-sm text-foreground hover:border-secondary/50 hover:text-secondary transition-colors"
                    >
                      {serviceLabel} {s.name}
                    </Link>
                  ))}
                  <Link 
                    to="/suburbs"
                    className="px-3 py-2 bg-secondary/10 border border-secondary/30 rounded-lg text-sm text-secondary hover:bg-secondary/20 transition-colors"
                  >
                    View All 50+ Suburbs →
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* FAQ Section */}
        <section className="py-12 bg-muted/30">
          <div className="section-container">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                {serviceLabel} {suburbData.name} — FAQs
              </h2>
              <div className="space-y-4">
                {suburbFAQs.map((faq, index) => (
                  <div key={index} className="p-4 bg-card border border-border rounded-lg">
                    <h3 className="font-heading font-bold text-foreground mb-2">{faq.question}</h3>
                    <p className="text-sm text-muted-foreground">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Quote Form */}
        <section id="quote" className="py-16">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="font-heading text-3xl font-bold text-foreground mb-6">
                  Get Your Free {suburbData.name} {isShower ? 'Shower' : 'Balcony'} Repair Quote
                </h2>
                <p className="text-muted-foreground mb-6">
                  Upload photos of your {isShower ? 'shower' : 'balcony'} leak and we'll provide a detailed quote for your {suburbData.name} property — completely free, with no obligation.
                </p>
                <ul className="space-y-3">
                  {[
                    "Free on-site inspection in " + suburbData.name, 
                    "No-obligation written quote", 
                    "10-year warranty on all repairs", 
                    "No travel fees — local " + suburbData.region + " team"
                  ].map((item) => (
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