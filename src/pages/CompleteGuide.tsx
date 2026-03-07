import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, CheckCircle, AlertTriangle, Wrench, BookOpen, MapPin } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTAButton } from "@/components/CTAButton";
import { SEOHead, Breadcrumbs, FAQSchema, ServiceSchema, ReviewSchema } from "@/components/seo";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const pillarFaqs = [
  {
    question: "How do you fix a leaking shower without removing tiles?",
    answer: "Professional epoxy regrouting allows specialists to repair a leaking shower without removing tiles. The process involves cutting out all deteriorated cement grout, preparing the substrate, and applying premium waterproof epoxy grout that creates a permanent seal between tiles. This method is faster, more affordable, and far less disruptive than a full bathroom renovation, typically completed in one day with a 10-year warranty."
  },
  {
    question: "Why is my balcony leaking?",
    answer: "Balcony leaks are most commonly caused by failed waterproof membranes, cracked or deteriorated grout between tiles, blocked drainage, structural movement creating cracks, or poor original waterproofing installation. Sydney's climate — with UV exposure, temperature extremes, and coastal salt air — accelerates membrane degradation. A professional inspection can identify the exact cause and recommend the most cost-effective repair solution."
  },
  {
    question: "How long does shower regrouting last?",
    answer: "Professional epoxy regrouting typically lasts 20 years or more, compared to 5–10 years for traditional cement grout. Epoxy grout is 100% waterproof, resistant to mould, chemicals, and staining, and doesn't deteriorate from daily water exposure. Most professional epoxy grout repairs come with a 10-year warranty, reflecting the material's superior longevity and performance."
  },
  {
    question: "Is balcony waterproofing expensive?",
    answer: "Balcony waterproofing costs in Sydney typically range from $2,000 to $8,000 depending on balcony size, access difficulty, and extent of damage. While this represents a significant investment, it's far more affordable than the alternative — untreated balcony leaks can cause structural concrete degradation (spalling), water damage to interiors below, and repair costs of $20,000 to $100,000 or more."
  },
  {
    question: "What causes grout to crack in showers?",
    answer: "Grout cracks in showers due to thermal cycling (repeated heating and cooling), building movement and settling, water absorption weakening cement-based grout, chemical attack from cleaning products and body care products, poor original mixing or application, and lack of movement joints at corners and junctions. Once cracking begins, water penetration accelerates further deterioration."
  },
  {
    question: "How do I know if my waterproof membrane has failed?",
    answer: "Signs of waterproof membrane failure include water stains on ceilings below wet areas, damp or musty smells that persist after cleaning, peeling paint on adjacent walls, efflorescence (white salt deposits) on surfaces, and loose or hollow-sounding tiles. A professional flood test — blocking the drain and filling the shower base with water — can confirm whether the membrane is compromised."
  },
  {
    question: "Can you waterproof over existing tiles?",
    answer: "Yes, in certain situations. Liquid-applied waterproof membranes can be applied over existing tiles on balconies, providing a new waterproof layer without the cost and disruption of tile removal. For showers, epoxy regrouting creates a waterproof barrier between tiles without membrane replacement. However, if the substrate is severely damaged, tile removal and full re-waterproofing may be necessary."
  },
  {
    question: "How much does it cost to fix a leaking shower in Sydney?",
    answer: "Leaking shower repair costs in Sydney range from $500–$900 for non-invasive epoxy grout repairs to $1,500–$4,000 for membrane repairs, and $5,000–$15,000 or more for full bathroom re-waterproofing with tile replacement. The cost depends on the source and severity of the leak. A free professional inspection provides an accurate quote for your specific situation."
  },
  {
    question: "Do I need council approval for balcony waterproofing?",
    answer: "Generally, no. Balcony waterproofing maintenance and repair is classified as exempt development under most NSW council regulations, provided it doesn't alter the building's structure or external appearance. However, if the work involves structural modifications, changes to drainage, or heritage-listed buildings, development approval may be required. Always check with your local council for specific requirements."
  },
  {
    question: "What is the best grout for showers?",
    answer: "Epoxy grout is the best grout for showers. Unlike cement grout, epoxy grout is 100% waterproof, mould-resistant, stain-proof, and lasts 20+ years. It doesn't absorb water, doesn't support mould growth, and maintains its colour permanently. While it costs more than cement grout upfront, its superior longevity and waterproofing performance make it the most cost-effective choice over the life of a bathroom."
  },
  {
    question: "How long does balcony waterproofing last?",
    answer: "Professional balcony waterproofing typically lasts 10–15 years depending on the membrane system used, quality of installation, exposure to UV and weather, foot traffic, and ongoing maintenance. Liquid-applied polyurethane membranes generally last 10–12 years, while torch-on modified bitumen membranes can last 15–20 years. Regular maintenance inspections extend the life of any waterproofing system."
  },
  {
    question: "Is epoxy grout better than cement grout?",
    answer: "For wet areas like showers, epoxy grout is significantly better than cement grout. Epoxy grout is 100% waterproof (cement grout is porous), resistant to mould and staining (cement grout is prone to both), lasts 20+ years (cement grout lasts 5–10), and maintains its colour permanently. The only advantage of cement grout is lower upfront cost, but this is offset by its shorter lifespan and the risk of water damage."
  },
  {
    question: "What are the signs of a leaking balcony?",
    answer: "Signs of a leaking balcony include water stains or dampness on ceilings or walls below the balcony, efflorescence (white mineral deposits) on concrete surfaces, cracked or missing grout between balcony tiles, ponding water that doesn't drain properly, rust stains from corroding reinforcement, spalling or flaking concrete on the balcony underside, and mould or moss growth in grout lines or corners."
  },
  {
    question: "Can a leaking shower cause structural damage?",
    answer: "Yes. A leaking shower can cause serious structural damage over time. Water escaping through failed grout or membranes saturates timber framing, causing rot and loss of structural integrity. It damages plasterboard wall linings, promotes toxic mould growth, corrodes metal fixings and fasteners, and can even compromise floor structures. In multi-storey buildings, shower leaks can damage multiple levels below."
  },
  {
    question: "How often should shower grout be replaced?",
    answer: "Traditional cement grout in showers should be inspected annually and typically needs replacement every 5–10 years. However, if you upgrade to epoxy grout, replacement intervals extend to 20+ years. Signs that your grout needs replacement include visible cracks, gaps, crumbling, discolouration that won't clean, or a hollow sound when tiles are tapped."
  },
  {
    question: "What is a waterproof membrane?",
    answer: "A waterproof membrane is a thin layer of material applied beneath tiles in wet areas (showers, bathrooms, balconies) to prevent water from penetrating into the building structure. In Australia, membranes must comply with AS 3740 for internal wet areas and AS 4654.2 for external areas. Common types include liquid-applied membranes (painted on) and sheet membranes (rolled or torched on)."
  },
  {
    question: "How do you test for a balcony leak?",
    answer: "Professional balcony leak testing involves several methods: a flood test (blocking drains and flooding the surface with water for 24 hours while checking below for moisture), electronic leak detection using impedance testing equipment, moisture mapping with calibrated moisture meters, and thermal imaging to identify wet areas behind surfaces. These methods pinpoint the exact location and source of leaks."
  },
  {
    question: "What Australian Standards apply to bathroom waterproofing?",
    answer: "The primary standard is AS 3740-2021 (Waterproofing of domestic wet areas), which specifies minimum requirements for waterproof membranes, shower recesses, and bathroom floors. AS 4654.2 applies to external wet areas like balconies. The National Construction Code (NCC/BCA) references these standards as deemed-to-satisfy provisions. All waterproofing work should be carried out by licensed professionals in compliance with these standards."
  },
  {
    question: "Is shower regrouting worth it?",
    answer: "Yes, shower regrouting with epoxy grout is one of the most cost-effective bathroom repairs available. For $500–$900, you can restore your shower's waterproof integrity, eliminate mould, improve appearance, and prevent thousands of dollars in potential water damage — all without removing tiles or enduring a weeks-long renovation. Professional epoxy regrouting comes with a 10-year warranty and typically lasts 20+ years."
  },
  {
    question: "What is the difference between sealing and waterproofing?",
    answer: "Sealing and waterproofing serve different purposes. Sealing (tile sealing) applies a protective coating to tile and grout surfaces to reduce water absorption and staining — it's a surface-level treatment. Waterproofing creates a continuous barrier membrane beneath tiles that prevents all water penetration into the building structure. Both are important: waterproofing is the primary defence, while sealing extends the life of tiles and grout above."
  }
];

export default function CompleteGuide() {
  const breadcrumbItems = [
    { name: "Home", href: "/" },
    { name: "Guides", href: "/guides/complete-guide-leak-repairs-sydney" },
    { name: "Complete Guide to Leak Repairs", href: "/guides/complete-guide-leak-repairs-sydney" },
  ];

  return (
    <>
      <SEOHead
        title="Complete Guide to Leaking Shower and Balcony Repairs in Sydney"
        description="Expert guide to shower leak repair, balcony waterproofing, epoxy regrouting, and tile sealing in Sydney. Learn causes, warning signs, repair methods, and prevention. 10-year warranty."
        canonical="https://sydneyleakrepairspro.com.au/guides/complete-guide-leak-repairs-sydney"
      />
      <FAQSchema faqs={pillarFaqs} />
      <ServiceSchema
        name="Shower & Balcony Leak Repair Services"
        description="Professional leaking shower repairs and balcony waterproofing across Sydney. Epoxy regrouting, membrane restoration, tile sealing. 10-year warranty."
      />
      <ReviewSchema
        ratingValue={4.9}
        reviewCount={247}
        reviews={[
          { author: "Sarah M.", rating: 5, body: "Fixed our shower leak without removing tiles. Incredible service and clean work.", datePublished: "2024-08-15" },
          { author: "James T.", rating: 5, body: "Professional balcony waterproofing for our strata building. Completed on time and under budget.", datePublished: "2024-07-22" },
          { author: "Linda K.", rating: 5, body: "The team was thorough, explained everything clearly, and the epoxy grout looks fantastic.", datePublished: "2024-06-10" },
        ]}
      />

      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero */}
        <section className="pt-24 lg:pt-32 pb-12 lg:pb-16 relative">
          <div className="absolute inset-0 grid-pattern" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
          <div className="section-container relative">
            <Breadcrumbs items={breadcrumbItems} />
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-secondary/10 text-secondary text-sm font-medium rounded">Complete Guide</span>
                <span className="text-sm text-muted-foreground">25 min read</span>
              </div>
              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Complete Guide to Leaking Shower and Balcony Repairs in Sydney
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Everything Sydney homeowners, strata managers, and property managers need to know about identifying, repairing, and preventing shower and balcony leaks. Written by industry specialists with over 15 years of experience in waterproofing and leak repair across greater Sydney.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <CTAButton variant="phone" size="lg">Call For Free Quote</CTAButton>
                <CTAButton variant="link" to="/contact" size="lg">Book Free Inspection</CTAButton>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-8 lg:py-12">
          <div className="section-container">
            <div className="max-w-3xl mx-auto prose prose-lg max-w-none text-muted-foreground prose-headings:text-foreground prose-a:text-secondary prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground prose-li:text-muted-foreground">

              {/* Introduction */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
                <p>Water leaks are among the most common and costly problems affecting residential and commercial properties across Sydney. Whether it's a slow drip behind shower tiles or water pooling beneath a balcony, <strong>leaking shower repairs</strong> and <strong>leaking balcony repairs</strong> rank among the most frequently requested building maintenance services in New South Wales.</p>
                <p>This guide draws on more than 15 years of hands-on experience in <Link to="/services/shower-repairs" className="text-secondary hover:underline">shower leak repair</Link> and <Link to="/services/balcony-repairs" className="text-secondary hover:underline">balcony waterproofing</Link> across Sydney — from coastal properties in <Link to="/services/bondi" className="text-secondary hover:underline">Bondi</Link> and <Link to="/services/manly" className="text-secondary hover:underline">Manly</Link> to suburban homes in <Link to="/services/parramatta" className="text-secondary hover:underline">Parramatta</Link> and <Link to="/services/blacktown" className="text-secondary hover:underline">Blacktown</Link>. Our goal is to give you a thorough, practical understanding of why leaks occur, how to detect them early, and what repair options deliver lasting results.</p>
              </motion.div>

              {/* Section 1: Causes */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
                <h2 className="font-heading text-2xl lg:text-3xl font-bold mb-4">What Causes Shower and Balcony Leaks?</h2>
                <p>Understanding the root causes of water leaks is the first step toward effective prevention and repair. While every property is different, the vast majority of <strong>leaking shower repairs in Sydney</strong> and <strong>leaking balcony repairs in Sydney</strong> trace back to a handful of common causes.</p>

                <h3 className="font-heading text-xl font-semibold mt-8 mb-3">Grout Deterioration</h3>
                <p>Standard cement grout is the weakest link in any tiled wet area. It's porous by nature, absorbing water with every use. Over time — typically 5 to 10 years — cement grout cracks, crumbles, and develops gaps that allow water to penetrate behind tiles. This is by far the most common cause of shower leaks we encounter. The solution is <Link to="/blog/epoxy-grout-vs-cement-grout" className="text-secondary hover:underline">epoxy regrouting</Link>, which replaces porous cement grout with 100% waterproof epoxy grout.</p>

                <h3 className="font-heading text-xl font-semibold mt-8 mb-3">Waterproof Membrane Failure</h3>
                <p>Every properly constructed wet area has a waterproof membrane beneath the tiles. This membrane is your property's last line of defence against water penetration. Membranes fail due to age, poor original installation, building movement, or prolonged exposure to moisture that has passed through failed grout. Membrane failure is particularly common in bathrooms constructed before 2000, when <Link to="/blog/bathroom-waterproofing-standards" className="text-secondary hover:underline">Australian waterproofing standards</Link> were less stringent.</p>

                <h3 className="font-heading text-xl font-semibold mt-8 mb-3">Structural Movement</h3>
                <p>All buildings move. Thermal expansion and contraction, ground settlement, wind loading, and vibration create stress on tiled surfaces and waterproofing systems. These forces cause cracks in grout, tiles, and membranes — especially at junctions between walls and floors, around penetrations (taps, shower heads, drains), and at building expansion joints.</p>

                <h3 className="font-heading text-xl font-semibold mt-8 mb-3">Poor Original Construction</h3>
                <p>A significant proportion of the shower and balcony leaks we repair stem from substandard original construction. Common defects include inadequate membrane coverage, incorrect falls (slopes) that allow water to pond, missing or poorly installed flashings, and insufficient membrane turn-ups at walls and hobs. Properties in Sydney suburbs such as <Link to="/services/strathfield" className="text-secondary hover:underline">Strathfield</Link>, <Link to="/services/burwood" className="text-secondary hover:underline">Burwood</Link>, and <Link to="/services/hurstville" className="text-secondary hover:underline">Hurstville</Link> built during rapid construction periods are particularly susceptible.</p>

                <h3 className="font-heading text-xl font-semibold mt-8 mb-3">UV and Weather Exposure</h3>
                <p>Balconies face the full force of Sydney's weather — intense UV radiation, driving rain, temperature extremes, and in coastal areas, salt-laden air. These environmental stresses degrade exposed membranes, crack rigid grout, and accelerate concrete carbonation. Properties in <Link to="/services/cronulla" className="text-secondary hover:underline">Cronulla</Link>, <Link to="/services/dee-why" className="text-secondary hover:underline">Dee Why</Link>, and <Link to="/services/coogee" className="text-secondary hover:underline">Coogee</Link> require particularly robust <Link to="/services/balcony-repairs" className="text-secondary hover:underline">balcony waterproofing</Link> systems to withstand coastal conditions.</p>
              </motion.div>

              {/* Section 2: Warning Signs */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
                <h2 className="font-heading text-2xl lg:text-3xl font-bold mb-4">Warning Signs of a Leak</h2>
                <p>Early detection dramatically reduces repair costs. Here are the warning signs every homeowner and property manager should watch for:</p>

                <h3 className="font-heading text-xl font-semibold mt-6 mb-3">Shower Leak Warning Signs</h3>
                <ul className="space-y-2">
                  <li><strong>Musty or mouldy odour</strong> that persists after cleaning — trapped moisture behind walls or under floors</li>
                  <li><strong>Peeling, bubbling, or flaking paint</strong> on walls adjacent to the bathroom</li>
                  <li><strong>Water stains on ceilings below</strong> — yellow or brown marks on the level beneath the bathroom</li>
                  <li><strong>Loose, cracked, or hollow-sounding tiles</strong> — indicating water has compromised the adhesive bond</li>
                  <li><strong>Damaged skirting boards or flooring</strong> near the bathroom — swelling, warping, or soft spots</li>
                  <li><strong>Visible mould growth</strong> in grout lines, corners, or on adjacent surfaces</li>
                </ul>
                <p>For a detailed guide on each warning sign, read our article on <Link to="/blog/signs-of-shower-leak" className="text-secondary hover:underline">5 warning signs your shower is leaking</Link>.</p>

                <h3 className="font-heading text-xl font-semibold mt-6 mb-3">Balcony Leak Warning Signs</h3>
                <ul className="space-y-2">
                  <li><strong>Water stains or dampness on the ceiling below</strong> the balcony</li>
                  <li><strong>Efflorescence</strong> — white salt deposits on concrete or masonry surfaces</li>
                  <li><strong>Cracked, loose, or missing grout</strong> between balcony tiles</li>
                  <li><strong>Standing water</strong> that doesn't drain properly after rain</li>
                  <li><strong>Rust stains</strong> from corroding steel reinforcement within the concrete</li>
                  <li><strong>Concrete spalling</strong> — flaking or crumbling concrete on the balcony underside</li>
                  <li><strong>Mould or moss growth</strong> in grout lines or shaded corners</li>
                </ul>
                <p>Learn more about detecting balcony issues in our guide on <Link to="/blog/concrete-degradation-prevention" className="text-secondary hover:underline">preventing concrete degradation</Link>.</p>
              </motion.div>

              {/* Section 3: Waterproofing Systems */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
                <h2 className="font-heading text-2xl lg:text-3xl font-bold mb-4">Waterproofing Systems Explained</h2>
                <p>Effective waterproofing is a system, not a single product. Understanding the components helps you make informed decisions about repairs and maintenance.</p>

                <h3 className="font-heading text-xl font-semibold mt-6 mb-3">Shower Waterproofing Systems</h3>
                <p>A compliant shower waterproofing system under <strong>AS 3740-2021</strong> includes:</p>
                <ul className="space-y-2">
                  <li><strong>Substrate preparation</strong> — the wall and floor surfaces must be clean, dry, and structurally sound</li>
                  <li><strong>Primer</strong> — applied to improve membrane adhesion to the substrate</li>
                  <li><strong>Waterproof membrane</strong> — liquid-applied or sheet membrane covering the shower floor, walls (minimum 1800mm height), and hob</li>
                  <li><strong>Bond breaker tape</strong> — applied at internal corners and junctions to accommodate movement</li>
                  <li><strong>Tile adhesive</strong> — flexible adhesive suitable for wet areas</li>
                  <li><strong>Grout</strong> — ideally <Link to="/blog/epoxy-grout-vs-cement-grout" className="text-secondary hover:underline">epoxy grout</Link> for permanent waterproofing</li>
                  <li><strong>Silicone sealant</strong> — at all junctions, corners, and penetrations</li>
                </ul>

                <h3 className="font-heading text-xl font-semibold mt-6 mb-3">Balcony Waterproofing Systems</h3>
                <p>External balcony waterproofing under <strong>AS 4654.2</strong> requires more robust systems to withstand weather exposure:</p>
                <ul className="space-y-2">
                  <li><strong>Structural substrate</strong> — concrete slab with correct falls (minimum 1:60 to drainage)</li>
                  <li><strong>Surface preparation</strong> — grinding, cleaning, and crack repair</li>
                  <li><strong>Primer</strong> — appropriate for the membrane system being applied</li>
                  <li><strong>Waterproof membrane</strong> — polyurethane liquid membrane, modified bitumen torch-on, or sheet membrane system</li>
                  <li><strong>Protection layer</strong> — screed or drainage mat to protect the membrane from foot traffic and tile installation</li>
                  <li><strong>Tile adhesive and tiles</strong> — external-grade, frost-resistant materials</li>
                  <li><strong>Grout and sealant</strong> — flexible, weather-resistant products rated for external use</li>
                </ul>
                <p>For <Link to="/strata" className="text-secondary hover:underline">strata buildings</Link>, balcony waterproofing must also consider inter-lot liability, compliance documentation, and coordination with building management.</p>
              </motion.div>

              {/* Section 4: Shower Repair Methods */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
                <h2 className="font-heading text-2xl lg:text-3xl font-bold mb-4">Shower Leak Repair Methods</h2>
                <p>Not all shower leaks require the same repair approach. The right method depends on the source and severity of the leak.</p>

                <h3 className="font-heading text-xl font-semibold mt-6 mb-3">Epoxy Regrouting (Non-Invasive)</h3>
                <p>The most common and cost-effective method to <strong>repair a leaking shower without removing tiles</strong>. This process involves:</p>
                <ol className="space-y-2">
                  <li>Removing all existing cement grout using precision cutting tools</li>
                  <li>Cleaning and preparing the tile edges and substrate</li>
                  <li>Applying premium two-part epoxy grout to all joints</li>
                  <li>Replacing silicone at all junctions and penetrations</li>
                  <li>Curing period (shower usable within 24–48 hours)</li>
                </ol>
                <p><strong>Best for:</strong> Leaks caused by grout failure where the membrane is still intact. Typically costs $500–$900 and comes with a 10-year warranty.</p>

                <h3 className="font-heading text-xl font-semibold mt-6 mb-3">Membrane Repair</h3>
                <p>When the waterproof membrane has failed, more extensive work is required. This involves selective tile removal in the affected area, membrane repair or replacement, and re-tiling.</p>
                <p><strong>Best for:</strong> Leaks where water is penetrating through a compromised membrane. Typically costs $1,500–$4,000.</p>

                <h3 className="font-heading text-xl font-semibold mt-6 mb-3">Full Re-Waterproofing</h3>
                <p>For severely damaged showers, a complete strip-out and re-waterproofing may be necessary. This involves removing all tiles, stripping back to the substrate, applying new waterproofing membrane to current Australian Standards, and re-tiling with epoxy grout.</p>
                <p><strong>Best for:</strong> Showers with extensive membrane failure, structural damage, or non-compliant original waterproofing. Costs vary from $5,000–$15,000+.</p>
                <p>Learn more about our approach on our <Link to="/services/shower-repairs" className="text-secondary hover:underline">shower leak repairs</Link> service page.</p>
              </motion.div>

              {/* Section 5: Balcony Repair Methods */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
                <h2 className="font-heading text-2xl lg:text-3xl font-bold mb-4">Balcony Leak Repair Methods</h2>
                <p><strong>Balcony waterproofing in Sydney</strong> requires specialised techniques to handle external weather exposure and structural considerations.</p>

                <h3 className="font-heading text-xl font-semibold mt-6 mb-3">Topical Membrane Application</h3>
                <p>For balconies with surface-level waterproofing failure, a new liquid membrane can be applied over existing tiles or directly to the prepared concrete substrate. This is the least invasive option and is suitable when the existing structure and falls are adequate.</p>

                <h3 className="font-heading text-xl font-semibold mt-6 mb-3">Full Membrane Restoration</h3>
                <p>This comprehensive approach involves removing existing tiles and screed, exposing the structural slab, repairing any concrete damage or reinforcement corrosion, applying a new multi-coat waterproof membrane system, installing a protection layer, and re-tiling with external-grade materials.</p>

                <h3 className="font-heading text-xl font-semibold mt-6 mb-3">Concrete Spalling Repair</h3>
                <p>When balcony leaks have caused <Link to="/blog/concrete-degradation-prevention" className="text-secondary hover:underline">concrete degradation (spalling)</Link>, structural repair is required before waterproofing can be effective. This involves removing deteriorated concrete, treating corroded reinforcement, rebuilding the concrete profile with repair mortar, and applying protective waterproof coatings.</p>
                <p>Visit our <Link to="/services/balcony-repairs" className="text-secondary hover:underline">balcony leak repairs</Link> page for detailed information about our balcony repair services.</p>
              </motion.div>

              {/* Section 6: Grout Deterioration Deep Dive */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
                <h2 className="font-heading text-2xl lg:text-3xl font-bold mb-4">Understanding Grout Deterioration</h2>
                <p>Grout deterioration is the single most common cause of shower leaks in Australian homes. Understanding how and why grout fails helps you appreciate the importance of choosing the right grouting material.</p>
                <p>Traditional <strong>cement grout</strong> is inherently porous. From the moment it's installed in a shower, it begins absorbing water. This water absorption, combined with thermal cycling, chemical exposure from cleaning products, and mechanical stress from building movement, progressively weakens the grout until it cracks, crumbles, and allows water to pass freely behind the tiles.</p>
                <p><strong>Epoxy grout</strong>, by contrast, is a two-part resin system that cures to form a completely waterproof, non-porous material. It doesn't absorb water, doesn't support mould growth, resists chemicals, and accommodates minor building movement without cracking. This is why <strong>epoxy regrouting</strong> is the preferred professional repair method for leaking showers — and why we recommend it as the default grout choice for any wet area.</p>
                <p>For a comprehensive comparison, read our detailed article: <Link to="/blog/epoxy-grout-vs-cement-grout" className="text-secondary hover:underline">Epoxy Grout vs Cement Grout: Which Is Better for Shower Waterproofing?</Link></p>
              </motion.div>

              {/* Section 7: Waterproof Membranes */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
                <h2 className="font-heading text-2xl lg:text-3xl font-bold mb-4">Waterproof Membranes: Your Property's Hidden Defence</h2>
                <p>The waterproof membrane is the most critical component of any wet area — yet it's completely hidden beneath the tiles. When membranes fail, the consequences can be severe and expensive.</p>

                <h3 className="font-heading text-xl font-semibold mt-6 mb-3">Types of Waterproof Membranes</h3>
                <ul className="space-y-2">
                  <li><strong>Liquid-applied membranes</strong> — painted onto the substrate in multiple coats. Most common in residential showers. Easy to apply around complex shapes and penetrations.</li>
                  <li><strong>Sheet membranes</strong> — pre-formed sheets adhered to the substrate. Provide consistent thickness and are favoured in commercial applications.</li>
                  <li><strong>Torch-on membranes</strong> — modified bitumen sheets heat-welded to the substrate. Common on external balconies and rooftops. Extremely durable but requires skilled application.</li>
                  <li><strong>Polyurethane membranes</strong> — high-performance liquid membranes that cure to form a flexible, UV-resistant coating. Ideal for exposed balconies.</li>
                </ul>

                <h3 className="font-heading text-xl font-semibold mt-6 mb-3">Why Membranes Fail</h3>
                <p>Membrane failure occurs for several reasons: inadequate surface preparation during installation, insufficient membrane thickness or coverage, poor treatment of junctions, corners, and penetrations, building movement exceeding the membrane's flexibility, UV degradation (on exposed balcony membranes), and chemical attack from water that has passed through failed grout. Understanding these failure modes is essential for <Link to="/strata" className="text-secondary hover:underline">strata managers</Link> overseeing building maintenance programs.</p>
              </motion.div>

              {/* Section 8: Structural Damage Risks */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
                <h2 className="font-heading text-2xl lg:text-3xl font-bold mb-4">Structural Damage Risks from Untreated Leaks</h2>
                <p>The real cost of ignoring a leak isn't the repair itself — it's the structural damage that accumulates while the leak goes untreated.</p>
                <ul className="space-y-2">
                  <li><strong>Timber rot</strong> — water-saturated framing timbers lose structural integrity, potentially requiring major structural remediation</li>
                  <li><strong>Concrete degradation</strong> — persistent moisture causes carbonation and reinforcement corrosion, leading to spalling and structural weakening</li>
                  <li><strong>Mould contamination</strong> — hazardous mould can colonise wall cavities, requiring professional remediation costing thousands of dollars</li>
                  <li><strong>Plasterboard damage</strong> — water-damaged plasterboard loses strength, sags, and must be replaced</li>
                  <li><strong>Electrical hazards</strong> — water intrusion near electrical wiring or fittings creates serious safety risks</li>
                  <li><strong>Property devaluation</strong> — untreated water damage significantly reduces property values and can complicate sales</li>
                </ul>
                <p>In <Link to="/strata" className="text-secondary hover:underline">strata buildings</Link>, untreated leaks from one lot can cause damage to common property and neighbouring lots, creating complex liability issues and disputes. Early intervention protects everyone in the building.</p>
              </motion.div>

              {/* Section 9: Inspection Process */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
                <h2 className="font-heading text-2xl lg:text-3xl font-bold mb-4">The Professional Inspection Process</h2>
                <p>A thorough professional inspection is essential for identifying the exact source, extent, and best repair method for any leak. Here's what a comprehensive inspection involves:</p>
                <ol className="space-y-2">
                  <li><strong>Visual assessment</strong> — examining tiles, grout, silicone, and visible surfaces for signs of deterioration, cracking, or water damage</li>
                  <li><strong>Moisture testing</strong> — using calibrated moisture meters to detect elevated moisture levels in walls, floors, and ceilings</li>
                  <li><strong>Tap testing</strong> — tapping tiles to identify hollow or debonded areas that indicate water penetration</li>
                  <li><strong>Flood testing</strong> — blocking drains and filling the shower base or balcony with water to confirm the leak source (where appropriate)</li>
                  <li><strong>Below-level inspection</strong> — examining ceilings and walls below the suspected leak for water staining, dampness, or active dripping</li>
                  <li><strong>Detailed report</strong> — documenting findings, identifying the leak source, and recommending the most appropriate and cost-effective repair method</li>
                </ol>
                <p>We provide <Link to="/contact" className="text-secondary hover:underline">free inspections</Link> across all Sydney suburbs. Our reports are clear, honest, and include transparent pricing with no hidden costs. For more on DIY versus professional inspection, read our guide: <Link to="/blog/diy-leak-detection" className="text-secondary hover:underline">DIY Leak Detection: When to Call a Professional</Link>.</p>
              </motion.div>

              {/* Section 10: Repair Options Compared */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
                <h2 className="font-heading text-2xl lg:text-3xl font-bold mb-4">Repair Options Compared</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-muted">
                        <th className="p-3 text-left text-foreground font-semibold">Repair Method</th>
                        <th className="p-3 text-left text-foreground font-semibold">Cost Range</th>
                        <th className="p-3 text-left text-foreground font-semibold">Duration</th>
                        <th className="p-3 text-left text-foreground font-semibold">Best For</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border">
                        <td className="p-3">Epoxy regrouting</td>
                        <td className="p-3">$500–$900</td>
                        <td className="p-3">1 day</td>
                        <td className="p-3">Grout failure, intact membrane</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-3">Targeted membrane repair</td>
                        <td className="p-3">$1,500–$4,000</td>
                        <td className="p-3">2–3 days</td>
                        <td className="p-3">Localised membrane failure</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-3">Full re-waterproofing</td>
                        <td className="p-3">$5,000–$15,000+</td>
                        <td className="p-3">5–10 days</td>
                        <td className="p-3">Extensive membrane failure</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-3">Balcony membrane restoration</td>
                        <td className="p-3">$2,000–$8,000</td>
                        <td className="p-3">3–5 days</td>
                        <td className="p-3">Balcony waterproofing failure</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-3">Spalling/concrete repair</td>
                        <td className="p-3">$3,000–$50,000+</td>
                        <td className="p-3">1–4 weeks</td>
                        <td className="p-3">Structural concrete damage</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-4">The most cost-effective approach is always early intervention. A $700 epoxy regrout today can prevent a $10,000 structural repair tomorrow.</p>
              </motion.div>

              {/* Section 11: Tile Sealing */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
                <h2 className="font-heading text-2xl lg:text-3xl font-bold mb-4">Tile Sealing Services: An Added Layer of Protection</h2>
                <p><strong>Tile sealing services</strong> provide an additional layer of protection for both shower and balcony tiles. Tile sealers penetrate the surface of porous tiles and grout, reducing water absorption, preventing staining, and extending the life of grouted surfaces.</p>
                <p>Tile sealing is particularly beneficial for natural stone tiles (marble, travertine, sandstone), unglazed ceramic and porcelain tiles, balcony tiles exposed to weather, and tiles in high-traffic commercial wet areas. While tile sealing is not a substitute for proper waterproofing, it complements epoxy regrouting and membrane systems by providing surface-level moisture resistance and making tiles easier to clean and maintain.</p>
              </motion.div>

              {/* Section 12: Preventative Maintenance */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
                <h2 className="font-heading text-2xl lg:text-3xl font-bold mb-4">Preventative Maintenance: Protecting Your Investment</h2>
                <p>Prevention is always more affordable than repair. Here are the maintenance practices we recommend for both showers and balconies:</p>

                <h3 className="font-heading text-xl font-semibold mt-6 mb-3">Shower Maintenance</h3>
                <ul className="space-y-2">
                  <li>Inspect grout lines every 6 months for cracks, gaps, or deterioration</li>
                  <li>Use a squeegee after every shower to reduce moisture load</li>
                  <li>Run the exhaust fan during and for 15 minutes after every shower</li>
                  <li>Check and replace silicone seals annually</li>
                  <li>Clean with pH-neutral products — avoid harsh chemicals that degrade cement grout</li>
                  <li>Consider upgrading to <Link to="/blog/epoxy-grout-vs-cement-grout" className="text-secondary hover:underline">epoxy grout</Link> for permanent waterproofing</li>
                </ul>

                <h3 className="font-heading text-xl font-semibold mt-6 mb-3">Balcony Maintenance</h3>
                <ul className="space-y-2">
                  <li>Clear drains and outlets before every wet season</li>
                  <li>Inspect grout and sealant joints twice yearly</li>
                  <li>Remove organic debris (leaves, dirt) that traps moisture</li>
                  <li>Check for ponding water after rain — standing water indicates drainage issues</li>
                  <li>Look for early signs of concrete spalling on the balcony underside</li>
                  <li>Arrange a professional waterproofing inspection every 3–5 years</li>
                </ul>
              </motion.div>

              {/* Section 13: Service Areas */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
                <h2 className="font-heading text-2xl lg:text-3xl font-bold mb-4">Service Areas Across Sydney</h2>
                <p>We provide <strong>leaking shower repairs</strong> and <strong>balcony waterproofing</strong> services across all Sydney metropolitan areas. Our local teams service homes, apartments, and commercial properties in over 50 suburbs including:</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-4">
                  {[
                    { name: "Parramatta", slug: "parramatta" },
                    { name: "Bondi", slug: "bondi" },
                    { name: "Chatswood", slug: "chatswood" },
                    { name: "Manly", slug: "manly" },
                    { name: "Cronulla", slug: "cronulla" },
                    { name: "Castle Hill", slug: "castle-hill" },
                    { name: "Blacktown", slug: "blacktown" },
                    { name: "Liverpool", slug: "liverpool" },
                    { name: "Penrith", slug: "penrith" },
                    { name: "Hornsby", slug: "hornsby" },
                    { name: "Ryde", slug: "ryde" },
                    { name: "Mosman", slug: "mosman" },
                    { name: "Marrickville", slug: "marrickville" },
                    { name: "Randwick", slug: "randwick" },
                    { name: "Hurstville", slug: "hurstville" },
                    { name: "Campbelltown", slug: "campbelltown" },
                    { name: "Dee Why", slug: "dee-why" },
                    { name: "Double Bay", slug: "double-bay" },
                  ].map((suburb) => (
                    <Link key={suburb.slug} to={`/services/${suburb.slug}`} className="text-secondary hover:underline text-sm flex items-center gap-1">
                      <MapPin className="w-3 h-3" />{suburb.name}
                    </Link>
                  ))}
                </div>
                <p className="mt-4">Don't see your suburb? We likely service your area too. <Link to="/contact" className="text-secondary hover:underline">Contact us</Link> to confirm availability.</p>
              </motion.div>
            </div>
          </div>
        </article>

        {/* People Also Ask */}
        <section className="py-12 lg:py-16 bg-muted/30">
          <div className="section-container">
            <div className="max-w-3xl mx-auto">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="font-heading text-2xl lg:text-3xl font-bold text-foreground mb-6">
                  People Also Ask
                </h2>
                <Accordion type="single" collapsible className="space-y-3">
                  {pillarFaqs.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`faq-${index}`}
                      className="bg-card border border-border rounded-lg px-6"
                    >
                      <AccordionTrigger className="text-left font-medium text-foreground hover:text-secondary">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-20">
          <div className="section-container text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="font-heading text-2xl lg:text-3xl font-bold text-foreground mb-4">
                Ready to Fix Your Leak?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Get a free, no-obligation inspection from Sydney's trusted leak repair specialists. We'll identify the problem, explain your options, and provide a transparent quote.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <CTAButton variant="phone" size="lg">Call For Free Quote</CTAButton>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border rounded-lg font-medium text-foreground hover:bg-muted transition-colors"
                >
                  Book Online
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
