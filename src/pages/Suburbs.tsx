import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, ArrowRight, Shield, Clock, Star, Phone } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTAButton } from "@/components/CTAButton";
import { SEOHead, Breadcrumbs } from "@/components/seo";
import { sydneySuburbs, type SuburbData } from "@/lib/suburbs";

// Group suburbs by region
function groupByRegion(suburbs: SuburbData[]): Record<string, SuburbData[]> {
  return suburbs.reduce((acc, suburb) => {
    if (!acc[suburb.region]) acc[suburb.region] = [];
    acc[suburb.region].push(suburb);
    return acc;
  }, {} as Record<string, SuburbData[]>);
}

const regionOrder = [
  "Eastern Suburbs",
  "Inner Sydney",
  "Inner West",
  "Lower North Shore",
  "Northern Sydney",
  "Upper North Shore",
  "Northern Beaches",
  "North Shore",
  "Hills District",
  "Western Sydney",
  "South Western Sydney",
  "Macarthur",
  "St George",
  "Sutherland Shire",
];

const trustSignals = [
  { icon: Shield, label: "10-Year Warranty", desc: "On every repair" },
  { icon: Clock, label: "Same-Week Service", desc: "Fast response times" },
  { icon: Star, label: "500+ 5-Star Reviews", desc: "Across Sydney" },
  { icon: MapPin, label: "50+ Suburbs", desc: "All of Greater Sydney" },
];

export default function Suburbs() {
  const grouped = groupByRegion(sydneySuburbs);
  const sortedRegions = regionOrder.filter((r) => grouped[r]);

  const breadcrumbItems = [
    { name: "Home", href: "/" },
    { name: "Service Areas", href: "/suburbs" },
  ];

  return (
    <>
      <SEOHead
        title="Sydney Leak Repair Service Areas | 50+ Suburbs Covered"
        description="Professional shower and balcony leak repairs across 50+ Sydney suburbs. From the Eastern Suburbs to Western Sydney, we provide expert waterproofing with a 10-year warranty. Find your local area."
        canonical="https://sydneyleakrepairspro.com.au/suburbs"
      />

      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="pt-24 lg:pt-32 pb-16 relative">
          <div className="absolute inset-0 grid-pattern" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />

          <div className="section-container relative">
            <Breadcrumbs items={breadcrumbItems} />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-secondary/10">
                  <MapPin className="w-6 h-6 text-secondary" />
                </div>
                <span className="text-sm text-muted-foreground">
                  Greater Sydney Metropolitan Area
                </span>
              </div>

              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Leak Repairs Across{" "}
                <span className="gradient-text">All of Sydney</span>
              </h1>

              <p className="text-lg text-muted-foreground mb-4 max-w-2xl">
                Water damage doesn't wait — and neither do we. Sydney Leak
                Repairs Pro services <strong className="text-foreground">50+ suburbs</strong> across
                Greater Sydney, from the harbour to the Blue Mountains
                foothills. Every job comes with our{" "}
                <strong className="text-foreground">10-year warranty</strong> and
                is completed by licensed waterproofing specialists who
                understand your local area.
              </p>

              <p className="text-muted-foreground mb-8 max-w-2xl">
                Whether you're dealing with a leaking shower in Bondi, a
                cracked balcony membrane in Parramatta, or strata waterproofing
                in Chatswood — our team delivers fast, code-compliant repairs
                built to Australian Standards AS 3740 and AS 4654.2.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <CTAButton variant="phone" size="lg">
                  Call For Free Quote
                </CTAButton>
                <CTAButton variant="link" to="/contact" size="lg">
                  Request a Quote Online
                </CTAButton>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Trust Signals Bar */}
        <section className="py-8 border-y border-border bg-card/50">
          <div className="section-container">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {trustSignals.map((signal) => (
                <div key={signal.label} className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-secondary/10 shrink-0">
                    <signal.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-foreground text-sm">
                      {signal.label}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {signal.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Suburb Grid by Region */}
        <section className="py-16">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Find Your Local Leak Repair Specialists
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Select your suburb below to see how we can help protect your
                property. Each area page includes local service details,
                pricing guidance, and a free quote form.
              </p>
            </motion.div>

            <div className="space-y-10">
              {sortedRegions.map((region, regionIdx) => (
                <motion.div
                  key={region}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: regionIdx * 0.05 }}
                >
                  <h3 className="font-heading text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-secondary" />
                    {region}
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                    {grouped[region].map((suburb) => (
                      <Link
                        key={suburb.slug}
                        to={`/services/${suburb.slug}`}
                        className="group flex items-center justify-between p-3 bg-card border border-border rounded-lg hover:border-secondary/50 hover:bg-muted/50 transition-all duration-200"
                      >
                        <div>
                          <span className="text-sm font-medium text-foreground group-hover:text-secondary transition-colors">
                            {suburb.name}
                          </span>
                          <p className="text-xs text-muted-foreground">
                            {suburb.postcode}
                          </p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-secondary transition-colors shrink-0" />
                      </Link>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SEO Content Section */}
        <section className="py-16 bg-muted/30">
          <div className="section-container">
            <div className="max-w-3xl mx-auto prose prose-invert">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                Why Sydney Homeowners Trust Us for Local Leak Repairs
              </h2>

              <p className="text-muted-foreground mb-4">
                Every Sydney suburb has its own waterproofing challenges.
                Coastal properties in Bondi, Coogee, and Manly face constant
                salt spray exposure that accelerates membrane degradation.
                Older terraces in Surry Hills and Marrickville often have
                outdated waterproofing that no longer meets Australian
                Standards. New developments in Kellyville, Rouse Hill, and
                Camden can suffer from construction defects that appear within
                the first few years.
              </p>

              <p className="text-muted-foreground mb-4">
                Our technicians are trained to identify and solve the specific
                issues common to each area. We don't apply a one-size-fits-all
                approach — we tailor every repair to the property type, age,
                and local environmental conditions. That's why strata managers
                across the North Shore, Hills District, and Inner West
                consistently choose Sydney Leak Repairs Pro for their
                buildings.
              </p>

              <h3 className="font-heading text-xl font-bold text-foreground mt-8 mb-4">
                Services Available in Every Suburb
              </h3>

              <ul className="space-y-2 text-muted-foreground mb-6">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-secondary mt-1 shrink-0" />
                  <span>
                    <strong className="text-foreground">Shower Leak Repairs</strong> — Epoxy
                    regrouting, membrane replacement, and full shower
                    restoration without removing tiles.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-secondary mt-1 shrink-0" />
                  <span>
                    <strong className="text-foreground">Balcony Waterproofing</strong> — Liquid
                    membrane application, tile sealing, and structural crack
                    repair for outdoor areas.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-secondary mt-1 shrink-0" />
                  <span>
                    <strong className="text-foreground">Strata & Commercial</strong> — Multi-unit
                    waterproofing programs, common area repairs, and compliance
                    reporting for body corporates.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-secondary mt-1 shrink-0" />
                  <span>
                    <strong className="text-foreground">Leak Detection</strong> — Non-invasive
                    moisture mapping and thermal imaging to find hidden leaks
                    before they cause structural damage.
                  </span>
                </li>
              </ul>

              <h3 className="font-heading text-xl font-bold text-foreground mt-8 mb-4">
                Frequently Asked Questions About Our Service Areas
              </h3>

              <p className="text-muted-foreground mb-2">
                <strong className="text-foreground">Do you charge travel fees?</strong> No.
                There are no call-out or travel charges for any suburb within
                the Greater Sydney metropolitan area.
              </p>

              <p className="text-muted-foreground mb-2">
                <strong className="text-foreground">
                  How quickly can you attend my property?
                </strong>{" "}
                Most inspections are booked within 48 hours, with same-day
                emergency availability for active leaks.
              </p>

              <p className="text-muted-foreground mb-2">
                <strong className="text-foreground">
                  Is my suburb covered if it's not listed?
                </strong>{" "}
                Yes. We service all of Greater Sydney. The suburbs listed above
                are our most common service areas, but we're happy to visit any
                location within the metro region.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto text-center"
            >
              <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
                Don't See Your Suburb? We Still Service Your Area.
              </h2>
              <p className="text-muted-foreground mb-8">
                Call us today for a free, no-obligation quote. We'll have a
                local technician at your door within 48 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <CTAButton variant="phone" size="lg">
                  <Phone className="w-5 h-5" />
                  Call Now
                </CTAButton>
                <CTAButton variant="link" to="/contact" size="lg">
                  Get a Free Quote
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
