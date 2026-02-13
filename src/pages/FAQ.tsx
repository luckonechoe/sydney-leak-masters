import { motion } from "framer-motion";
import { HelpCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTAButton } from "@/components/CTAButton";
import { SEOHead, Breadcrumbs } from "@/components/seo";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQItem[] = [
  {
    category: "General",
    question: "How do I know if my shower is leaking?",
    answer: "Common signs include: water stains or damp patches on walls or ceilings below the bathroom, musty odors, peeling paint or wallpaper, loose or hollow-sounding tiles, and visible mold or mildew growth. If you notice any of these, it's best to get a professional inspection.",
  },
  {
    category: "General",
    question: "Do you remove tiles to fix shower leaks?",
    answer: "In most cases, no. Our epoxy grout technology allows us to fix shower leaks without removing tiles. We remove the old damaged grout, clean the joints, and apply premium waterproof epoxy grout. This is faster, cleaner, and more cost-effective than re-tiling.",
  },
  {
    category: "Pricing",
    question: "How much does shower leak repair cost?",
    answer: "Shower leak repairs start from $890 for a standard shower. The exact cost depends on the size of the shower, extent of the damage, and any additional work required. We provide free, detailed quotes with no hidden costs.",
  },
  {
    category: "Pricing",
    question: "How much does balcony leak repair cost?",
    answer: "Balcony repairs start from $2,390, depending on the size and condition of the balcony. Complex repairs involving membrane replacement or structural work may cost more. We'll provide a detailed assessment and quote after inspection.",
  },
  {
    category: "Process",
    question: "How long does a shower repair take?",
    answer: "Most shower repairs are completed in one day. The epoxy grout typically needs 24 hours to fully cure before you can use the shower. For larger jobs or multiple bathrooms, we'll provide a timeline during the quote.",
  },
  {
    category: "Process",
    question: "How long does a balcony repair take?",
    answer: "Balcony repairs typically take 2-5 days depending on the size and complexity. This includes membrane work, grout application, and curing time. We'll minimize disruption and coordinate with you on timing.",
  },
  {
    category: "Warranty",
    question: "What warranty do you offer?",
    answer: "All our repairs come with a 10-year written warranty covering materials and workmanship. This gives you peace of mind that if any issues arise, we'll fix them at no additional cost.",
  },
  {
    category: "Warranty",
    question: "What does the warranty cover?",
    answer: "Our warranty covers all aspects of the repair work including epoxy grout failure, waterproofing membrane issues, and workmanship defects. It does not cover damage caused by external factors or subsequent building works.",
  },
  {
    category: "Technical",
    question: "What is epoxy grout and why is it better?",
    answer: "Epoxy grout is a high-performance grout made from epoxy resins instead of cement. It's 100% waterproof, highly durable, resistant to stains and chemicals, and doesn't crack like cement grout. It's the gold standard for waterproof tiling.",
  },
  {
    category: "Technical",
    question: "What is spalling (concrete degradation)?",
    answer: "Concrete degradation (spalling) occurs when water penetrates concrete and reaches the steel reinforcement inside. The steel rusts and expands, cracking the concrete further. Left untreated, it can cause serious structural damage. Proper waterproofing prevents this.",
  },
  {
    category: "Service",
    question: "Do you service all Sydney suburbs?",
    answer: "Yes, we service all Sydney suburbs from the CBD to the outer regions. We also service the Central Coast, Blue Mountains, and Wollongong areas. Contact us to confirm service availability in your area.",
  },
  {
    category: "Service",
    question: "Do you work with strata managers?",
    answer: "Absolutely. We have a dedicated strata services program with priority scheduling, volume pricing, and comprehensive documentation for strata records. Visit our Strata page or contact us directly.",
  },
];

const categories = ["General", "Pricing", "Process", "Warranty", "Technical", "Service"];

export default function FAQ() {
  const breadcrumbItems = [
    { name: "Home", href: "/" },
    { name: "FAQ", href: "/faq" },
  ];

  return (
    <>
      <SEOHead
        title="FAQ | Frequently Asked Questions"
        description="Find answers to common questions about shower repairs, balcony waterproofing, pricing, warranties, and our service process."
      />

      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="pt-24 lg:pt-32 pb-12 lg:pb-16 relative">
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
                <div className="p-3 rounded-lg bg-secondary/10">
                  <HelpCircle className="w-8 h-8 text-secondary" />
                </div>
              </div>

              <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-6">
                Frequently Asked{" "}
                <span className="gradient-text">Questions</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Find answers to common questions about our leak repair services, 
                pricing, warranties, and process.
              </p>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 lg:py-16">
          <div className="section-container">
            <div className="max-w-3xl mx-auto">
              {categories.map((category) => {
                const categoryFaqs = faqs.filter((faq) => faq.category === category);
                if (categoryFaqs.length === 0) return null;

                return (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-8"
                  >
                    <h2 className="font-heading font-bold text-xl text-foreground mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-secondary" />
                      {category}
                    </h2>
                    
                    <Accordion type="single" collapsible className="space-y-2">
                      {categoryFaqs.map((faq, index) => (
                        <AccordionItem
                          key={index}
                          value={`${category}-${index}`}
                          className="bg-card border border-border rounded-lg px-4"
                        >
                          <AccordionTrigger className="text-left hover:no-underline">
                            <span className="text-foreground font-medium pr-4">
                              {faq.question}
                            </span>
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-20 bg-muted/30">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto text-center"
            >
              <h2 className="font-heading text-2xl lg:text-3xl font-bold text-foreground mb-4">
                Still Have Questions?
              </h2>
              <p className="text-muted-foreground mb-8">
                Can't find what you're looking for? Get in touch and we'll be 
                happy to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <CTAButton variant="phone">
                  Call Us Now
                </CTAButton>
                <CTAButton variant="link" to="/contact">
                  Contact Form
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
