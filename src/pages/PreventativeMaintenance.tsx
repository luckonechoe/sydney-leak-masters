import { motion } from "framer-motion";
import { Shield, Check, Clock, Eye, Wrench, CalendarCheck, ArrowRight, Star, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTAButton, PHONE_NUMBER } from "@/components/CTAButton";
import { WarrantyBadge } from "@/components/WarrantyBadge";
import { QuoteForm } from "@/components/QuoteForm";
import { SEOHead, Breadcrumbs, FAQSchema } from "@/components/seo";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const inclusions = [
  {
    icon: Eye,
    title: "Full Visual Inspection",
    description:
      "Thorough examination of all sealed areas — showers, balconies, and wet zones — to identify early signs of wear, cracking, or water ingress before they become costly problems.",
  },
  {
    icon: Wrench,
    title: "Professional Grout Touch-Up",
    description:
      "Minor epoxy grout repairs and touch-ups to maintain the integrity of your seals. We address any hairline cracks or areas showing early deterioration.",
  },
  {
    icon: Shield,
    title: "Sealant Condition Assessment",
    description:
      "Detailed check of all silicone and sealant joints around shower screens, floor junctions, and balcony perimeters. We replace any compromised sections.",
  },
  {
    icon: CalendarCheck,
    title: "Deep Clean & Treatment",
    description:
      "Professional-grade cleaning of grout lines and sealed surfaces to remove soap scum, mould, and mineral deposits that degrade sealant performance over time.",
  },
];

const benefits = [
  "Maintains your 10-year warranty coverage",
  "Catches problems before they escalate",
  "Extends the life of your waterproofing",
  "Prevents mould and mildew build-up",
  "Saves thousands in potential re-tiling costs",
  "Annual professional inspection report",
  "Priority booking for any future repairs",
  "Peace of mind all year round",
];

const comparisonData = [
  {
    scenario: "Preventative Maintenance",
    cost: "$249/year",
    outcome: "Seals last 15+ years, warranty maintained, no surprises",
    icon: Shield,
    highlight: true,
  },
  {
    scenario: "Minor Grout Repair",
    cost: "$500–$1,200",
    outcome: "Needed when small cracks are left unattended for 1–2 years",
    icon: Wrench,
    highlight: false,
  },
  {
    scenario: "Full Shower Re-seal",
    cost: "$2,000–$4,500",
    outcome: "Required when waterproofing membrane fails from neglect",
    icon: AlertTriangle,
    highlight: false,
  },
  {
    scenario: "Complete Re-tile & Waterproof",
    cost: "$8,000–$15,000+",
    outcome: "Worst case — structural water damage from years of ignored leaks",
    icon: AlertTriangle,
    highlight: false,
  },
];

const faqs = [
  {
    question: "What does the Preventative Maintenance plan include?",
    answer:
      "Our $249/year plan includes a comprehensive visual inspection of all sealed wet areas, professional cleaning of grout lines, touch-up repairs to any minor wear or cracking, sealant condition assessment, and a detailed written report with recommendations. It's designed to maintain your warranty and catch issues early.",
  },
  {
    question: "How often is the maintenance visit?",
    answer:
      "The plan includes one annual visit. We'll contact you to schedule at a convenient time. If we identify any concerns during the inspection that need attention sooner, we'll let you know and provide priority scheduling.",
  },
  {
    question: "Do I need this plan if my grout was recently done?",
    answer:
      "Yes — and the first year is actually the most important. New epoxy grout needs monitoring as it fully cures and settles. Our first annual inspection ensures everything has bonded correctly, there's no early-stage cracking, and your warranty conditions are fully met.",
  },
  {
    question: "Is the maintenance plan required to keep my warranty?",
    answer:
      "While our 10-year warranty covers workmanship and materials, regular maintenance ensures warranty conditions are met. Neglect or damage caused by lack of maintenance may affect warranty claims. The annual plan is the easiest way to stay covered.",
  },
  {
    question: "Can I sign up for the plan if someone else did my original grout work?",
    answer:
      "Absolutely. We'll perform an initial assessment of your existing grout and seals. If they're in reasonable condition, we can enrol you in the plan. If repairs are needed first, we'll provide a separate quote for that work before starting the maintenance schedule.",
  },
  {
    question: "What areas of the home does the plan cover?",
    answer:
      "The standard plan covers all interior wet areas (showers, bathrooms, laundries) and one balcony. Additional balconies or large commercial spaces can be added for a small supplementary fee — contact us for a custom quote.",
  },
  {
    question: "Can I cancel the plan at any time?",
    answer:
      "Yes. The plan operates on an annual basis with no lock-in contract. You can choose not to renew at any time. However, we recommend continuous coverage to maintain your warranty and protect your investment.",
  },
];

const processSteps = [
  {
    step: "1",
    title: "Sign Up",
    description: "Call us or fill out the form to enrol in the annual plan. We'll schedule your first visit at a time that suits you.",
  },
  {
    step: "2",
    title: "Annual Inspection",
    description: "Our technician visits your property, inspects all sealed areas, performs cleaning and any minor touch-ups included in the plan.",
  },
  {
    step: "3",
    title: "Detailed Report",
    description: "You receive a written report with photos, condition ratings, and any recommendations — ideal for strata records or personal peace of mind.",
  },
  {
    step: "4",
    title: "Ongoing Protection",
    description: "Your warranty stays active, your seals stay strong, and you get priority access if any issues arise between visits.",
  },
];

export default function PreventativeMaintenance() {
  return (
    <>
      <SEOHead
        title="Preventative Maintenance Plan $249/yr | Sydney Leak Repairs Pro"
        description="Protect your waterproofing investment with our $249/year preventative maintenance plan. Annual inspections, grout touch-ups, and warranty coverage for Sydney showers and balconies."
      />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero */}
        <section className="relative pt-24 lg:pt-32 pb-16 lg:pb-24 overflow-hidden">
          <div className="absolute inset-0 grid-pattern" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />

          <div className="section-container relative">
            <Breadcrumbs
              items={[
                { name: "Home", href: "/" },
                { name: "Preventative Maintenance", href: "/preventative-maintenance" },
              ]}
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-secondary text-sm font-bold uppercase tracking-wider mb-6">
                <Shield className="w-4 h-4" />
                Annual Maintenance Plan
              </div>

              <h1 className="font-heading text-4xl lg:text-6xl font-bold text-foreground mb-6">
                Preventative Maintenance —{" "}
                <span className="text-secondary">$249/year</span>
              </h1>

              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Keep your waterproofing in peak condition with an annual
                professional inspection, cleaning, and touch-up service.
                Maintain your warranty. Prevent costly repairs.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <CTAButton variant="phone" size="lg">
                  Enquire Now — {PHONE_NUMBER}
                </CTAButton>
                <a
                  href="#enrol"
                  className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 font-medium transition-colors"
                >
                  Enrol Online <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
                What's Included in Your Annual Visit
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Every visit is a comprehensive service — not just a quick
                look. Here's exactly what you get for $249.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {inclusions.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-card border border-border rounded-xl p-6"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-secondary/10">
                        <Icon className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-foreground mb-2">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 lg:py-24">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Why Preventative Maintenance{" "}
                  <span className="text-secondary">Pays for Itself</span>
                </h2>
                <p className="text-muted-foreground mb-8">
                  A small annual investment protects you from the significant
                  costs of reactive repairs. Most waterproofing failures we
                  see could have been prevented with basic maintenance.
                </p>
                <ul className="space-y-3">
                  {benefits.map((b) => (
                    <li key={b} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                      <span className="text-foreground">{b}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <WarrantyBadge size="lg" animated className="mx-auto" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Cost Comparison */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
                The True Cost of Skipping Maintenance
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                See how a $249 annual investment compares to the cost of
                neglect. These are real repair costs we see across Sydney.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {comparisonData.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.scenario}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className={`rounded-xl p-6 border ${
                      item.highlight
                        ? "bg-secondary/10 border-secondary/30 ring-2 ring-secondary/20"
                        : "bg-card border-border"
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <Icon
                        className={`w-5 h-5 ${
                          item.highlight
                            ? "text-secondary"
                            : "text-muted-foreground"
                        }`}
                      />
                      {item.highlight && (
                        <span className="text-xs font-bold text-secondary uppercase">
                          Recommended
                        </span>
                      )}
                    </div>
                    <h3 className="font-heading font-bold text-foreground mb-1">
                      {item.scenario}
                    </h3>
                    <p
                      className={`text-2xl font-bold mb-3 ${
                        item.highlight ? "text-secondary" : "text-foreground"
                      }`}
                    >
                      {item.cost}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {item.outcome}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* How It Works */}
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
                Getting started is simple — four easy steps to year-round
                protection.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {processSteps.map((s, idx) => (
                <motion.div
                  key={s.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-secondary text-secondary-foreground font-bold text-lg flex items-center justify-center mx-auto mb-4">
                    {s.step}
                  </div>
                  <h3 className="font-heading font-bold text-foreground mb-2">
                    {s.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{s.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Ideal For */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center mb-12"
            >
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Who Is This Plan For?
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                {
                  icon: Star,
                  title: "Homeowners",
                  desc: "Protect your bathroom and balcony investment. Avoid nasty surprises and keep your home leak-free year after year.",
                },
                {
                  icon: Shield,
                  title: "Strata Managers",
                  desc: "Stay compliant with building maintenance obligations. Receive annual reports perfect for strata records and AGM documentation.",
                },
                {
                  icon: Clock,
                  title: "Property Investors",
                  desc: "Minimise vacancy and repair costs. A well-maintained property retains value and keeps tenants happy.",
                },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-card border border-border rounded-xl p-6 text-center"
                  >
                    <div className="p-3 rounded-lg bg-secondary/10 inline-flex mb-4">
                      <Icon className="w-6 h-6 text-secondary" />
                    </div>
                    <h3 className="font-heading font-bold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 lg:py-24">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, idx) => (
                  <AccordionItem
                    key={idx}
                    value={`faq-${idx}`}
                    className="bg-card border border-border rounded-lg px-6"
                  >
                    <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Enrol CTA / Quote Form */}
        <section id="enrol" className="py-16 lg:py-24 bg-muted/30">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Ready to Protect Your Investment?
                </h2>
                <p className="text-muted-foreground mb-6">
                  Enrol in our Preventative Maintenance plan today. Fill out the
                  form and we'll be in touch to schedule your first visit —
                  or call us directly.
                </p>
                <div className="space-y-4">
                  <CTAButton variant="phone" size="lg" className="w-full sm:w-auto">
                    Call {PHONE_NUMBER}
                  </CTAButton>
                  <p className="text-sm text-muted-foreground">
                    Available Monday – Saturday, 7am – 6pm
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
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
