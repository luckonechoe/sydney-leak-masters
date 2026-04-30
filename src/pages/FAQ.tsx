import { motion } from "framer-motion";
import { HelpCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTAButton } from "@/components/CTAButton";
import { SEOHead, Breadcrumbs } from "@/components/seo";
import { FAQSchema } from "@/components/seo/FAQSchema";
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
  // ============ GENERAL ============
  {
    category: "General",
    question: "How do I know if my shower is leaking?",
    answer: "Common signs include water stains or damp patches on walls and ceilings below the bathroom, a musty smell, peeling paint or wallpaper, loose or hollow-sounding tiles, and visible mould or mildew. If you spot any of these, it's worth booking a free inspection before the damage spreads.",
  },
  {
    category: "General",
    question: "Is it the shower causing the damp ceiling below, or could it be the plumbing?",
    answer: "Both are possible, and the symptoms can look identical. A shower leak usually shows up as a slow stain that grows when the shower is used and dries out between uses. A plumbing leak tends to be constant or get worse regardless of shower use. Our technicians inspect on-site to identify the source — and if it turns out to be plumbing, we'll tell you straight up so you can call a licensed plumber.",
  },
  {
    category: "General",
    question: "What causes leaking showers and balconies in the first place?",
    answer: "The most common cause is failed grout and silicone in the tile joints — they break down over 8–15 years from constant water exposure and minor building movement. Less commonly, the waterproofing membrane underneath the tiles fails. Building movement, poor original installation, and age all play a part.",
  },
  {
    category: "General",
    question: "Can a leaking shower cause structural damage?",
    answer: "Yes — and it's the main reason not to delay repairs. Long-term leaks rot timber framing and floor joists, cause spalling (concrete degradation) in concrete slabs, promote mould growth, and reduce property value. What starts as a $1,500 repair can turn into a $20,000+ rebuild if ignored.",
  },
  {
    category: "General",
    question: "Do you remove tiles to fix shower leaks?",
    answer: "In most cases, no. Our epoxy regrouting process removes the old damaged grout, cleans the joints, and rebuilds them with premium waterproof epoxy grout — no tile removal, no demolition, no re-tiling. It's faster, cleaner, and a fraction of the cost of a full bathroom rebuild.",
  },

  // ============ PRICING & QUOTES ============
  {
    category: "Pricing & Quotes",
    question: "How much does shower leak repair cost?",
    answer: "Cost depends on shower size, condition of the existing grout, and access. For an instant ballpark, use the pricing calculator on our Shower Repairs page — or book a free on-site inspection for a firm written quote.",
  },
  {
    category: "Pricing & Quotes",
    question: "How much does balcony leak repair cost?",
    answer: "Cost depends on balcony size, condition, and whether the job is sealing/regrouting or a full re-waterproofing with membrane replacement. Use the pricing calculator on our Balcony Repairs page for an estimate, or book a free on-site inspection for a firm written quote.",
  },
  {
    category: "Pricing & Quotes",
    question: "Can you quote my repair over the phone?",
    answer: "We can give you a rough indication over the phone after a few quick questions about size, age, and symptoms — but a firm price always requires an on-site inspection. Sealing leaks isn't one-size-fits-all, and we'd rather quote you accurately than guess.",
  },
  {
    category: "Pricing & Quotes",
    question: "Do you charge a callout fee?",
    answer: "No. Inspections and quotes are completely free and obligation-free across Sydney. You only pay if you decide to proceed with the repair.",
  },
  {
    category: "Pricing & Quotes",
    question: "Are there any hidden costs?",
    answer: "No. You receive a detailed written quote before any work starts, and the quoted price is what you pay. If we discover something unexpected mid-job (which is rare), we stop and get your written approval before doing anything extra.",
  },
  {
    category: "Pricing & Quotes",
    question: "How do I pay?",
    answer: "We accept EFT bank transfer, credit and debit card, and BPAY. Payment is only required after the job is complete and you're fully satisfied with the work.",
  },
  {
    category: "Pricing & Quotes",
    question: "Do you offer payment plans?",
    answer: "Get in touch with us directly on 0466 532 444 and we'll discuss what's possible based on the scope of your job.",
  },

  // ============ PROCESS & PREPARATION ============
  {
    category: "Process & Preparation",
    question: "How long does a shower repair take?",
    answer: "Most shower epoxy regrouting jobs are completed in 3–6 hours on the same day. The shower then needs an overnight cure (typically usable by the next morning) and reaches full cure at 48 hours.",
  },
  {
    category: "Process & Preparation",
    question: "How long does a balcony repair take?",
    answer: "Sealing and regrouting work on a balcony typically takes 1–2 days. Full re-waterproofing jobs that involve membrane replacement can take 3–5 days depending on size and weather. We'll give you a clear timeline in the quote.",
  },
  {
    category: "Process & Preparation",
    question: "What should I do to prepare my bathroom before you arrive?",
    answer: "A few simple steps help us get straight to work: take your last shower by 9pm the night before so the area can dry, remove shampoo bottles and personal items from the shower, and give the tiles a light clean if you can. We'll handle everything else.",
  },
  {
    category: "Process & Preparation",
    question: "How much mess and noise is involved?",
    answer: "Far less than a renovation. We use drop sheets to protect your home, dust-controlled grout-removal tools, and we vacuum and wipe down before leaving. There's some moderate tool noise during the grout removal stage, but most clients are surprised at how tidy the job is.",
  },
  {
    category: "Process & Preparation",
    question: "Will I need to leave the house during the repair?",
    answer: "No, you can stay home as normal. The bathroom or balcony being worked on will be unavailable for a few hours, but the rest of your home is unaffected.",
  },
  {
    category: "Process & Preparation",
    question: "Do I need to be home for the whole job?",
    answer: "We need access at the start and end of the job, but you don't need to be present the whole time. Many clients let us in, head to work, and we lock up and message you when we're done.",
  },
  {
    category: "Process & Preparation",
    question: "Can you do extra work on the same day?",
    answer: "Sometimes — if the additional scope is small and we have time. For larger extra work (e.g. a second bathroom or balcony), we'll usually provide a separate quote and schedule it as its own visit so we can do it properly.",
  },
  {
    category: "Process & Preparation",
    question: "What's the difference between regrouting and resealing?",
    answer: "Regrouting is replacing the grout in the tile joints (the lines between tiles). Resealing is replacing the silicone in the corners and internal angles where two surfaces meet. Most leaks are fixed with both — and we include both in our standard shower repair.",
  },

  // ============ AFTER THE SERVICE ============
  {
    category: "After the Service",
    question: "How long before I can use my shower again?",
    answer: "Typically the next morning — the epoxy grout needs an overnight cure (around 12 hours) before the shower can be used. Full cure is reached at 48 hours, after which the seal is at maximum strength.",
  },
  {
    category: "After the Service",
    question: "How long before I can use my balcony again?",
    answer: "For sealing and regrouting work, foot traffic is usually fine after 24–48 hours. Heavy furniture or planters should wait the full 48 hours. Membrane jobs may need longer — we'll tell you exactly on the day.",
  },
  {
    category: "After the Service",
    question: "There's a fine white powder on my tiles — is that normal?",
    answer: "Yes, completely normal. It's a thin haze of grout residue from the application process. Wipe it down with a damp microfibre cloth and it lifts away easily.",
  },
  {
    category: "After the Service",
    question: "When can I fix the damaged ceiling or wall caused by the leak?",
    answer: "Wait at least 6–8 weeks before patching, painting, or repairing the affected ceiling or wall. The trapped moisture inside the structure needs time to fully dry out — patching too early traps moisture behind the paint and the damage will reappear.",
  },
  {
    category: "After the Service",
    question: "Will my shower look better after the repair?",
    answer: "Usually yes — fresh, clean grout lines and new silicone make a noticeable visual improvement, even though our goal is sealing the leak rather than cleaning. You can also choose a colour-matched grout to refresh the look.",
  },
  {
    category: "After the Service",
    question: "How do I clean and maintain my repaired shower?",
    answer: "Use non-abrasive cleaners (avoid bleach-heavy products and abrasive scourers, which can dull the epoxy over time). Epoxy grout naturally resists mould and mildew far better than cement grout, so general bathroom cleaning is all that's needed to keep it looking good.",
  },

  // ============ WARRANTY & GUARANTEES ============
  {
    category: "Warranty & Guarantees",
    question: "What warranty do you offer?",
    answer: "Every repair is backed by our 10-Year Warranty covering both materials and workmanship. If a sealed area leaks again within the warranty period, we re-attend at no cost.",
  },
  {
    category: "Warranty & Guarantees",
    question: "What does the warranty cover?",
    answer: "The warranty covers epoxy grout failure, silicone seal failure, and workmanship defects on the specific areas we sealed. You receive a written warranty document with every completed job.",
  },
  {
    category: "Warranty & Guarantees",
    question: "What is NOT covered by your warranty?",
    answer: "The warranty doesn't cover plumbing leaks (these are a separate trade), structural building movement that creates new cracks, third-party damage (e.g. another tradesperson cutting into the area), or work later modified by someone else.",
  },
  {
    category: "Warranty & Guarantees",
    question: "Is the warranty transferable if I sell my home?",
    answer: "The warranty is tied to the property address rather than the owner, so it remains valid for the new homeowner during the warranty period. Pass on the warranty document at settlement.",
  },
  {
    category: "Warranty & Guarantees",
    question: "How do I make a warranty claim?",
    answer: "Just call us on 0466 532 444 or use the contact form. We'll book a return visit, inspect the area, and if it falls under the warranty we re-do the work at no cost to you.",
  },
  {
    category: "Warranty & Guarantees",
    question: "Is the repair a permanent solution?",
    answer: "Epoxy regrouting and resealing is a long-lasting repair — backed by our 10-year warranty, with most jobs lasting well beyond that with normal use. It's far more durable than the cement grout originally installed in most bathrooms.",
  },

  // ============ TECHNICAL ============
  {
    category: "Technical",
    question: "What's the difference between epoxy grout and cement grout?",
    answer: "Cement grout is porous, absorbs water, stains easily, and cracks over time as the building moves. Epoxy grout is 100% waterproof, doesn't crack, resists stains and chemicals, and naturally resists mould. It's the gold standard for wet areas.",
  },
  {
    category: "Technical",
    question: "What is epoxy grout and why is it better?",
    answer: "Epoxy grout is made from epoxy resins instead of cement. It's flexible enough to handle minor building movement without cracking, fully waterproof, and lasts decades. It's the same material used in commercial kitchens, hospitals, and swimming pools.",
  },
  {
    category: "Technical",
    question: "What is spalling (concrete degradation)?",
    answer: "Spalling happens when water penetrates concrete and reaches the steel reinforcement inside. The steel rusts, expands, and cracks the surrounding concrete from within. It's a common cause of balcony deterioration in Sydney apartments — and proper waterproofing prevents it.",
  },
  {
    category: "Technical",
    question: "Do you replace the waterproofing membrane?",
    answer: "Only when sealing and regrouting won't solve the problem. Membrane replacement is a much bigger job — it involves removing tiles, applying a new membrane, and re-tiling. We'll always recommend the least invasive option that will actually fix your leak.",
  },
  {
    category: "Technical",
    question: "Why don't you need to remove tiles?",
    answer: "In the vast majority of leaking showers, the tile joints (grout and silicone) are the failure point — not the tiles or the membrane underneath. Rebuilding those joints with waterproof epoxy stops the water entry without disturbing the tiles.",
  },
  {
    category: "Technical",
    question: "Can you fix a leaking balcony without removing the tiles?",
    answer: "Yes, in most cases. Sealing the joints and regrouting with epoxy stops most balcony leaks. In severe cases where the membrane has failed across the whole slab, full re-waterproofing with tile removal is required — we'll tell you honestly which option you need.",
  },
  {
    category: "Technical",
    question: "Is the epoxy safe for kids and pets?",
    answer: "Yes. Once fully cured (48 hours), epoxy grout is inert, food-safe, and non-toxic. It's the same product used in commercial food prep areas. There's no ongoing exposure or off-gassing.",
  },
  {
    category: "Technical",
    question: "Can I choose the grout colour?",
    answer: "Yes — we carry a range of colour-matched epoxy grout options. Most clients match the original grout colour, but it's also a good chance to update the look if you want to.",
  },

  // ============ SERVICE AREA & BOOKING ============
  {
    category: "Service Area & Booking",
    question: "Do you service all Sydney suburbs?",
    answer: "Yes — we service every Sydney suburb from the CBD and Eastern Suburbs through the Inner West, North Shore, Northern Beaches, Hills District, Sutherland Shire and Western Sydney. See our Suburbs page for the full list.",
  },
  {
    category: "Service Area & Booking",
    question: "How quickly can you attend?",
    answer: "We typically attend for inspections within 24–48 hours of your enquiry. Urgent jobs are prioritised — call us on 0466 532 444 if your leak is causing active damage.",
  },
  {
    category: "Service Area & Booking",
    question: "Do you do Saturday appointments?",
    answer: "Yes. Our Saturday hours are 8:30am–1:00pm, subject to availability. Weekend slots fill up quickly, so book early. Our weekday hours are Monday–Friday 7:30am–3:00pm.",
  },
  {
    category: "Service Area & Booking",
    question: "Do you do emergency repairs?",
    answer: "Yes, urgent leaks get priority booking. Call 0466 532 444 directly and explain the situation — if water is actively damaging your property, we'll do everything we can to attend the same day or next morning.",
  },
  {
    category: "Service Area & Booking",
    question: "Are your technicians police-checked and insured?",
    answer: "Yes. All Sydney Sealed technicians are background-checked and we carry full public liability insurance. You can request proof of insurance before any job — strata managers and property managers receive it as standard with the quote.",
  },

  // ============ STRATA & PROPERTY MANAGERS ============
  {
    category: "Strata & Property Managers",
    question: "Do you work with strata managers?",
    answer: "Absolutely — strata is a major part of our work. We have a dedicated strata coordination process with priority scheduling, written reports, and clear documentation. Visit our Strata page for full details.",
  },
  {
    category: "Strata & Property Managers",
    question: "Do you accept work orders from strata managers and real estate agents?",
    answer: "Yes. We work to your standard work order process, send invoices direct to the managing agency, and follow your communication and reporting requirements.",
  },
  {
    category: "Strata & Property Managers",
    question: "Can you provide a detailed report for strata records?",
    answer: "Yes. Every strata job comes with a written report including before/after photos, scope of work completed, materials used, and the warranty document — formatted for committee meetings and building records.",
  },
  {
    category: "Strata & Property Managers",
    question: "Can you coordinate access with tenants directly?",
    answer: "Yes. Once you share the tenant's contact details, we liaise directly with them to book a suitable time, send confirmation reminders, and report back to you once the job is complete.",
  },
  {
    category: "Strata & Property Managers",
    question: "Do you offer volume pricing for multiple units?",
    answer: "Yes. Building-wide and multi-unit jobs receive volume pricing. Get in touch with the unit count and scope, and we'll put together a tailored proposal.",
  },
];

const categories = [
  "General",
  "Pricing & Quotes",
  "Process & Preparation",
  "After the Service",
  "Warranty & Guarantees",
  "Technical",
  "Service Area & Booking",
  "Strata & Property Managers",
];

export default function FAQ() {
  const breadcrumbItems = [
    { name: "Home", href: "/" },
    { name: "FAQ", href: "/faq" },
  ];

  return (
    <>
      <SEOHead
        title="Shower & Balcony Leak Repair FAQ · Sydney Sealed"
        description="Answers on shower & balcony leak repairs, epoxy regrouting, pricing, warranty, preparation, after-care, and strata services in Sydney."
        canonical="https://sydneysealed.com.au/faq"
      />
      <FAQSchema faqs={faqs.map(({ question, answer }) => ({ question, answer }))} />

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

              <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-6" style={{ lineHeight: 1.1 }}>
                Frequently Asked{" "}
                <span className="gradient-text" style={{ lineHeight: 'inherit' }}>Questions</span>
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
