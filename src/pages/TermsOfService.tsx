import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/seo/SEOHead";
import { PHONE_NUMBER, PHONE_HREF } from "@/components/CTAButton";

export default function TermsOfService() {
  return (
    <>
      <SEOHead
        title="Terms of Service | Sydney Leak Repairs Pro"
        description="Read the Terms of Service for Sydney Leak Repairs Pro. Understand our policies on services, warranties, liability, and more."
        noindex={true}
      />
      <Header />
      <main className="min-h-screen pt-20 lg:pt-24 pb-16">
        <div className="section-container max-w-4xl">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2">
            Terms of Service
          </h1>
          <p className="text-muted-foreground mb-2 text-lg">Website Terms of Service</p>
          <p className="text-muted-foreground mb-10">
            Last updated: {new Date().toLocaleDateString("en-AU", { day: "numeric", month: "long", year: "numeric" })}
          </p>
          <p className="text-foreground/90 mb-10">
            These Terms of Service ("Terms") govern your access to and use of the website operated by Sydney Leak Repairs Pro ABN XX XXX XXX XXX ("we", "us", "our"). By accessing or using this website, you agree to these Terms. If you do not agree, do not use this website.
          </p>

          <div className="prose prose-sm md:prose-base max-w-none space-y-8 text-foreground/90">

            {/* 1 */}
            <section>
              <h2 className="font-heading text-xl font-bold text-foreground">1. Purpose of This Website</h2>
              <p>
                This website is provided for general informational, promotional, and enquiry purposes in relation to our leak detection, leak repair, shower repairs, balcony repairs, sealing, regrouting, waterproofing, remedial work, inspections, and related services.
              </p>
              <p>
                This website does not itself create a binding contract for works. Any services we agree to provide are governed by separate written terms, such as an accepted quote, proposal, scope of works, invoice, work order, or service agreement.
              </p>
            </section>

            {/* 2 */}
            <section>
              <h2 className="font-heading text-xl font-bold text-foreground">2. Acceptance of These Terms</h2>
              <p>
                By using this website, submitting an enquiry, requesting a quote, calling us, emailing us, or otherwise engaging with the website, you agree to be bound by these Terms and our Privacy Policy.
              </p>
              <p>
                If you are using this website on behalf of a company, owners corporation, strata manager, agent, or other entity, you represent that you have authority to bind that entity.
              </p>
            </section>

            {/* 3 */}
            <section>
              <h2 className="font-heading text-xl font-bold text-foreground">3. Changes to These Terms</h2>
              <p>
                We may update these Terms from time to time by publishing a revised version on this website. The updated version takes effect from the date it is posted. Your continued use of the website after changes are posted constitutes acceptance of the revised Terms.
              </p>
            </section>

            {/* 4 */}
            <section>
              <h2 className="font-heading text-xl font-bold text-foreground">4. Permitted Use</h2>
              <p>You may use this website only for lawful purposes and in accordance with these Terms.</p>
              <p>You must not:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>use the website in breach of any law or regulation</li>
                <li>interfere with the website's operation, security, or availability</li>
                <li>attempt unauthorised access to any system, server, database, or functionality connected with the website</li>
                <li>scrape, copy, harvest, index, or systematically extract website content, data, reviews, images, pricing, suburb pages, blog content, or metadata without our prior written consent</li>
                <li>submit false, misleading, or incomplete information through any form or contact channel</li>
                <li>upload malicious code, spam, abusive material, or infringing content</li>
                <li>impersonate any person or business, or falsely suggest affiliation with us</li>
              </ul>
              <p>We may suspend, block, or restrict access where we reasonably believe misuse has occurred.</p>
            </section>

            {/* 5 */}
            <section>
              <h2 className="font-heading text-xl font-bold text-foreground">5. No Professional Advice</h2>
              <p>
                The content on this website is general information only. It is not legal advice, engineering advice, strata advice, building advice, plumbing advice, insurance advice, or project-specific professional advice.
              </p>
              <p>
                Blog posts, FAQs, guides, service pages, suburb pages, images, and general explanations are not a substitute for a site inspection, proper diagnosis, or a written scope of works tailored to your property.
              </p>
              <p>
                You should not rely solely on website content when making decisions about defect causation, waterproofing failure, rectification methods, hidden damage, responsibility between parties, code compliance, insurance claims, or expected cost.
              </p>
            </section>

            {/* 6 */}
            <section>
              <h2 className="font-heading text-xl font-bold text-foreground">6. Service Descriptions and Website Content</h2>
              <p>
                We take reasonable care in preparing website content, but we do not warrant that all content is complete, current, accurate, or suitable for your circumstances.
              </p>
              <p>
                Descriptions of services, processes, materials, timelines, or results are indicative only unless expressly confirmed by us in writing for your specific job.
              </p>
              <p>
                Suburb pages, service area pages, and local landing pages are published for marketing and informational purposes. They do not guarantee that we maintain a physical office in that suburb, that we are continuously available in that location, or that same-day attendance is available.
              </p>
              <p>
                Any references to "fast", "permanent", "lasting", "effective", "premium", "best practice", "specialist", or similar language are general promotional descriptions unless expressly incorporated into a written contract.
              </p>
            </section>

            {/* 7 */}
            <section>
              <h2 className="font-heading text-xl font-bold text-foreground">7. Quotes, Enquiries, and Bookings</h2>
              <p>Submitting an enquiry, requesting a quote, calling us, sending an email, or completing a form does not guarantee:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>acceptance of the job</li>
                <li>availability on a requested date</li>
                <li>attendance within a particular timeframe</li>
                <li>remote diagnosis of the cause of a leak</li>
                <li>a fixed price without inspection</li>
                <li>that the issue can be resolved without further testing, access work, demolition, or scope variation</li>
              </ul>
              <p>
                Any estimate, range, or preliminary indication given through the website, by phone, by email, or by message is indicative only unless confirmed in a formal written quote.
              </p>
              <p>
                We may refuse any enquiry or decline any work request at our discretion, including where the work is outside our scope, the site is unsafe, access is inadequate, required information is missing, or the location falls outside our service area.
              </p>
              <p>
                All quotes are provided free of charge and are valid for 30 days from the date of issue unless otherwise stated. Prices are quoted in Australian Dollars (AUD) and include GST unless specified otherwise.
              </p>
            </section>

            {/* 8 */}
            <section>
              <h2 className="font-heading text-xl font-bold text-foreground">8. Site Inspections, Diagnosis, and Hidden Conditions</h2>
              <p>
                Leak diagnosis is often affected by concealed defects, prior repairs, substrate failure, drainage issues, movement, membrane failure, workmanship issues, product incompatibility, and other hidden conditions that may not be visible until inspection or opening-up works occur.
              </p>
              <p>Accordingly:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>website content cannot definitively diagnose your issue</li>
                <li>an initial inspection may not reveal every contributing cause</li>
                <li>the required scope of work may change after testing, demolition, or access is obtained</li>
                <li>quoted pricing may depend on assumptions, exclusions, access conditions, and further findings</li>
              </ul>
              <p>
                Unless otherwise agreed in writing, we do not promise that every issue can be diagnosed remotely from photos, videos, or descriptions alone.
              </p>
            </section>

            {/* 9 */}
            <section>
              <h2 className="font-heading text-xl font-bold text-foreground">9. Service-Specific Terms</h2>

              <h3 className="font-heading text-lg font-semibold text-foreground mt-6">9.1 General Scope and Basis of Services</h3>
              <p>
                Our services are provided strictly on the basis of the scope described in the relevant written quote, work order, proposal, or other written acceptance issued by us. No statement on this website, in marketing material, by telephone, by email, or during preliminary discussions expands the agreed scope unless expressly confirmed by us in writing.
              </p>
              <p>
                All services are subject to site conditions, safe access, visible and concealed defects, substrate condition, prior workmanship, moisture pathways, building movement, drainage performance, material compatibility, weather exposure, and any assumptions, exclusions, limitations, or qualifications stated in our quote or scope.
              </p>
              <p>
                Unless expressly stated otherwise in writing, our services do not include structural rectification, engineering advice, engineering certification, plumbing rectification outside the quoted scope, electrical work, mould remediation, asbestos assessment or removal, full renovations, building approval processes, code certification, destructive investigation beyond the agreed scope, or rectification of unrelated defects.
              </p>

              <h3 className="font-heading text-lg font-semibold text-foreground mt-6">9.2 Leaking Shower Repair</h3>
              <p>
                Leaking shower repair services may include inspection, diagnosis, sealing, regrouting, epoxy-based repairs, joint rectification, localised remedial waterproofing-related work, and other limited rectification methods we consider appropriate to the identified issue.
              </p>
              <p>
                Shower leaks may arise from one or more causes, including grout failure, sealant failure, membrane failure, substrate movement, plumbing defects, drainage defects, capillary migration, hidden deterioration, prior poor workmanship, or a combination of those matters. Because of this, we do not represent that an initial inspection, moisture reading, photograph, or visible symptom will identify every cause or consequence of leakage.
              </p>
              <p>
                Unless expressly stated in writing, leaking shower repair is limited to the area, method, and defect pathway identified in the accepted scope. It does not include full bathroom reconstruction, retiling, membrane replacement to the entire wet area, concealed plumbing repairs, replacement of fixtures, rectification of adjacent room damage, or latent defect rectification outside the agreed area.
              </p>
              <p>
                Where we recommend broader works, opening-up works, or third-party trade involvement to achieve a more complete diagnosis or outcome, and those works are declined, postponed, or handled by others, we are not responsible for any incomplete result arising from that decision.
              </p>

              <h3 className="font-heading text-lg font-semibold text-foreground mt-6">9.3 Balcony Leak Repair</h3>
              <p>
                Balcony leak repair services may include leak-path investigation, crack and joint treatment, sealing, regrouting, localised waterproofing-related remedial work, and other repair methods we consider suitable to the defect or symptom identified.
              </p>
              <p>
                Balcony leakage can involve multiple contributing causes, including membrane failure, threshold defects, poor falls, drainage issues, flashing failure, slab cracking, facade penetration, planter box issues, adjoining construction, structural movement, or defects in inaccessible areas. Accordingly, visible symptoms do not necessarily identify the sole or full cause of water ingress.
              </p>
              <p>
                Unless expressly stated in writing, balcony leak repair is limited to the specific areas and methods described in the accepted scope and does not include full membrane replacement, structural rectification, redesign or reconstruction of balcony falls, replacement of screeds or slab systems, facade reconstruction, engineering review, or works to adjoining or common property outside the agreed scope.
              </p>
              <p>
                Where broader building-envelope or common-property issues are identified or suspected, any localised repair carried out by us is not a representation that all building-wide or concealed causes have been rectified.
              </p>

              <h3 className="font-heading text-lg font-semibold text-foreground mt-6">9.4 Preventative Maintenance</h3>
              <p>
                Preventative maintenance services are intended to identify and reduce the risk of future water ingress, deterioration, or failure by addressing visible or reasonably identifiable maintenance items before more significant problems arise.
              </p>
              <p>
                Preventative maintenance is not a guarantee against future leaks, failures, damage, deterioration, or water ingress. Building movement, weather, age, prior workmanship, material degradation, hidden membrane failure, drainage defects, tenant or owner use, and third-party works can affect future performance.
              </p>
              <p>
                Any maintenance recommendation, review period, or suggested reinspection interval is indicative only unless expressly incorporated into a written maintenance agreement. Failure to follow recommended maintenance or reinspection intervals may affect the continuing suitability of prior repair or maintenance measures.
              </p>

              <h3 className="font-heading text-lg font-semibold text-foreground mt-6">9.5 Strata, Building Managers, Real Estate, and Agents</h3>
              <p>
                Where the customer is a strata scheme, owners corporation, strata manager, building manager, property manager, real estate agency, managing agent, or other intermediary, that party warrants that it has authority to request the inspection, quotation, maintenance, or works, or to instruct us on behalf of the responsible party.
              </p>
              <p>
                We are entitled to rely on instructions, approvals, confirmations, access arrangements, and representations provided by the nominated contact person or entity unless and until we receive clear written notice to the contrary from a person with actual authority.
              </p>
              <p>Unless expressly agreed in writing:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>our contractual duties are owed only to the contracting party named in the quote, work order, invoice, or agreement;</li>
                <li>any report, photos, findings, recommendations, scope notes, or communications are prepared solely for the contracting party in connection with the relevant property and scope;</li>
                <li>no third party, including tenants, lot owners, purchasers, vendors, insurers, builders, contractors, agents, or other occupants, may rely on our report, findings, or communications; and</li>
                <li>we accept no responsibility for delay, non-performance, or inability to attend caused by failures in tenant coordination, owner approvals, strata approvals, access arrangements, key collection, site induction, or direction from other contractors.</li>
              </ul>
              <p>
                Where responsibility for a defect is disputed between lot property and common property, landlord and tenant, vendor and purchaser, or multiple building participants, we may suspend, decline, or limit further services until authority, responsibility, and access are adequately clarified.
              </p>

              <h3 className="font-heading text-lg font-semibold text-foreground mt-6">9.6 Reports, Findings, and Diagnostic Limitations</h3>
              <p>
                Any report, inspection note, findings summary, photographs, recommendations, or preliminary view issued by us is limited to the condition of the property as observed by us at the time of attendance and within the scope, access, and testing actually undertaken.
              </p>
              <p>
                Unless expressly stated otherwise, our findings are not a structural report, engineering opinion, certification document, insurance causation determination, code compliance statement, or exhaustive defect audit. No inference should be drawn that areas not opened, tested, or inspected are free from defects.
              </p>
              <p>
                Where destructive testing, opening-up works, or further specialist investigation is recommended but not authorised, our ability to determine causation, extent, and full scope may be materially limited, and we accept no responsibility for conclusions that could not reasonably be confirmed without that further work.
              </p>

              <h3 className="font-heading text-lg font-semibold text-foreground mt-6">9.7 Access, Safety, and Attendance Conditions</h3>
              <p>
                Our services are subject to safe, timely, and practical access to the relevant site and affected areas. You must ensure, where applicable, that the site is accessible, safe, and suitably prepared for attendance.
              </p>
              <p>We may refuse to commence, continue, or complete services where:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>the site is unsafe or presents an unacceptable health or safety risk</li>
                <li>access is obstructed or materially restricted</li>
                <li>required occupants, approvals, inductions, keys, or clearances are unavailable</li>
                <li>weather or site conditions materially affect safe performance</li>
                <li>hidden conditions make continued work impractical or outside scope</li>
              </ul>
              <p>
                We are not liable for delay, rescheduling, increased cost, incomplete diagnosis, or incomplete performance arising from denied access, unsafe conditions, weather, third-party delay, tenancy issues, missing approvals, or concealed site conditions.
              </p>

              <h3 className="font-heading text-lg font-semibold text-foreground mt-6">9.8 Variations and Additional Works</h3>
              <p>
                If, during attendance or after opening-up, we identify hidden defects, broader failure, extra affected areas, unsafe conditions, access complications, or work outside the agreed scope, we may:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>suspend the current work</li>
                <li>issue a variation</li>
                <li>issue a revised quote</li>
                <li>require further investigation, or</li>
                <li>decline to perform the additional work</li>
              </ul>
              <p>
                We are not obliged to perform any work outside the original agreed scope unless that additional work is agreed in writing.
              </p>
              <p>
                Any price, timeframe, or recommendation given before full access or investigation is based on limited information and may change where site conditions differ from assumptions.
              </p>

              <h3 className="font-heading text-lg font-semibold text-foreground mt-6">9.9 Customer Responsibilities</h3>
              <p>
                The customer must provide accurate and complete information to the best of their knowledge, including property history, prior repairs, known leaks, access constraints, strata involvement, insurance involvement, and any hazardous or unusual site conditions.
              </p>
              <p>
                The customer is responsible for obtaining all consents, permissions, and approvals necessary for us to inspect or work at the property, including approval from owners, occupiers, tenants, agents, owners corporations, or building management where required.
              </p>
              <p>
                We may rely on the accuracy of the information supplied to us. We are not responsible for loss, delay, or incorrect assumptions arising from incomplete, inaccurate, or misleading information provided by the customer or their representatives.
              </p>

              <h3 className="font-heading text-lg font-semibold text-foreground mt-6">9.10 No Guarantee of Permanent or Universal Outcome</h3>
              <p>
                Unless expressly stated in writing, we do not guarantee that any repair, maintenance measure, or diagnostic process will permanently eliminate all leakage, moisture migration, deterioration, or consequential damage in every circumstance.
              </p>
              <p>
                Where a broader defect, systemic building issue, concealed condition, common-property issue, structural movement, or third-party defect exists or later emerges, localised works may reduce symptoms without resolving every contributing cause. A repair to one defect pathway does not constitute a guarantee against future defects arising from different pathways, different causes, or later building movement or deterioration.
              </p>
              <p>Nothing in this clause excludes or limits any consumer guarantee or other right that cannot lawfully be excluded.</p>

              <h3 className="font-heading text-lg font-semibold text-foreground mt-6">9.11 No Transfer and No Third-Party Reliance</h3>
              <p>Unless expressly agreed in writing, any service-specific promise, maintenance recommendation, limited warranty, inspection outcome, or goodwill accommodation applies only to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>the contracting party,</li>
                <li>the property identified in the relevant quote or scope, and</li>
                <li>the specific work actually carried out by us.</li>
              </ul>
              <p>
                It does not automatically transfer to future owners, tenants, managing agents, purchasers, insurers, or any other third party, except to the extent transfer is required by law or expressly agreed by us in writing.
              </p>
            </section>

            {/* 10 */}
            <section>
              <h2 className="font-heading text-xl font-bold text-foreground">10. No Guarantee of Identical Outcomes</h2>
              <p>
                Any testimonials, case studies, reviews, before-and-after photos, project examples, or descriptions of past jobs are illustrative only. They do not guarantee that your property will present the same conditions, require the same scope, or achieve identical outcomes.
              </p>
              <p>
                Each project differs based on access, materials, movement, age, prior workmanship, water ingress pathways, maintenance history, and other site-specific factors.
              </p>
            </section>

            {/* 11 */}
            <section>
              <h2 className="font-heading text-xl font-bold text-foreground">11. Images, Renders, and Illustrative Content</h2>
              <p>
                This website may include actual project photos, supplier imagery, stock imagery, edited imagery, conceptual visuals, or illustrative graphics.
              </p>
              <p>
                Unless expressly stated otherwise, images are for general illustration and marketing presentation only. They may not represent the exact condition of your property, the exact sequence of works, or the precise appearance of all materials used on every project.
              </p>
              <p>You must not copy, reuse, republish, modify, or distribute any website imagery without our prior written consent.</p>
            </section>

            {/* 12 */}
            <section>
              <h2 className="font-heading text-xl font-bold text-foreground">12. Customer Information and Submitted Material</h2>
              <p>If you submit information to us, including names, contact details, addresses, property information, photos, videos, plans, reports, or defect descriptions, you warrant that:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>the information is accurate to the best of your knowledge</li>
                <li>you have the right to provide it</li>
                <li>you have authority to share any third-party property or project information you send us</li>
                <li>the material does not infringe another person's rights</li>
              </ul>
              <p>
                By submitting such material, you grant us a non-exclusive, royalty-free licence to use, store, copy, review, and communicate that material for the purpose of assessing your enquiry, preparing a quote, providing services, internal administration, legal compliance, dispute management, and improving our service delivery.
              </p>
              <p>We are not obliged to retain submitted material indefinitely.</p>
            </section>

            {/* 13 */}
            <section>
              <h2 className="font-heading text-xl font-bold text-foreground">13. Separate Terms for Actual Work</h2>
              <p>If we agree to perform services for you, those services will be governed by separate written terms, which may include:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>scope and exclusions</li>
                <li>pricing and payment terms</li>
                <li>assumptions and variations</li>
                <li>access obligations</li>
                <li>timing</li>
                <li>warranties</li>
                <li>defect liability processes</li>
                <li>exclusions for pre-existing or concealed conditions</li>
                <li>cancellation or rescheduling terms</li>
              </ul>
              <p>
                If there is any inconsistency between these website Terms and a separate written contract for works, the separate written contract prevails to the extent of the inconsistency. Those separate terms must be read together with any applicable service-specific provisions in section 9 of these Terms, unless the separate written contract expressly overrides them.
              </p>
            </section>

            {/* 14 - Warranty (kept from original) */}
            <section>
              <h2 className="font-heading text-xl font-bold text-foreground">14. Warranty</h2>
              <p>We stand behind our workmanship with the following warranty commitments:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Workmanship Warranty:</strong> Up to 10 years on qualifying repair and waterproofing work, as specified in your project documentation.</li>
                <li><strong>Materials Warranty:</strong> Manufacturer warranties apply to all materials used. We will assist with any warranty claims on materials where applicable.</li>
                <li><strong>Exclusions:</strong> Warranties do not cover damage caused by misuse, negligence, structural movement, natural disasters, or unauthorised modifications to the repaired area.</li>
                <li><strong>Warranty Claims:</strong> To make a claim, contact us at info@sydneyleakrepairspro.com.au with a description of the issue. We will inspect and rectify any valid claim at no additional cost.</li>
              </ul>
            </section>

            {/* 15 - Payment Terms (kept from original) */}
            <section>
              <h2 className="font-heading text-xl font-bold text-foreground">15. Payment Terms</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>A deposit may be required before commencement of work, as specified in your quote.</li>
                <li>Final payment is due upon completion of the work unless alternative arrangements have been agreed in writing.</li>
                <li>We accept payment via bank transfer, credit card, and other methods as communicated at the time of quoting.</li>
                <li>Late payments may incur interest at a rate of 2% per month on the outstanding balance.</li>
              </ul>
            </section>

            {/* 16 - Cancellation (kept from original) */}
            <section>
              <h2 className="font-heading text-xl font-bold text-foreground">16. Cancellation &amp; Rescheduling</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>You may cancel or reschedule a booking with at least 48 hours' notice at no charge.</li>
                <li>Cancellations with less than 48 hours' notice may incur a call-out fee to cover costs already incurred.</li>
                <li>If materials have been purchased specifically for your project, these costs may be non-refundable.</li>
              </ul>
            </section>

            {/* 17 */}
            <section>
              <h2 className="font-heading text-xl font-bold text-foreground">17. Intellectual Property</h2>
              <p>
                Unless otherwise stated, all content on this website is owned by or licensed to us, including text, layout, graphics, logos, photographs, design elements, service descriptions, blog content, suburb pages, source code, branding, and compilation of content.
              </p>
              <p>
                You may view the website for personal or internal business reference only. You must not reproduce, adapt, republish, frame, mirror, distribute, sell, or exploit any part of the website without our prior written consent.
              </p>
            </section>

            {/* 18 */}
            <section>
              <h2 className="font-heading text-xl font-bold text-foreground">18. Third-Party Links and Tools</h2>
              <p>
                This website may contain links to third-party websites, maps, reviews, social platforms, payment providers, booking tools, analytics providers, or other services. We do not control and are not responsible for third-party content, systems, terms, privacy practices, availability, or security.
              </p>
              <p>Accessing third-party services is at your own risk and subject to their own terms.</p>
            </section>

            {/* 19 */}
            <section>
              <h2 className="font-heading text-xl font-bold text-foreground">19. Availability and Security</h2>
              <p>
                We do not guarantee that the website will always be available, uninterrupted, error-free, secure, or free from viruses or other harmful code.
              </p>
              <p>
                You are responsible for using appropriate security protections, including secure devices, up-to-date software, and safe browsing practices.
              </p>
              <p>We may modify, suspend, withdraw, or restrict any part of the website at any time without notice.</p>
            </section>

            {/* 20 */}
            <section>
              <h2 className="font-heading text-xl font-bold text-foreground">20. Emergency and Response Disclaimer</h2>
              <p>
                Unless we expressly agree otherwise in writing, this website is not an emergency response service. Website forms, emails, and messages may not be monitored continuously.
              </p>
              <p>
                If you have urgent property damage, active flooding, an electrical hazard, or another safety issue, you should take appropriate immediate action and contact relevant emergency, utility, or qualified trade services as required.
              </p>
            </section>

            {/* 21 */}
            <section>
              <h2 className="font-heading text-xl font-bold text-foreground">21. Australian Consumer Law</h2>
              <p>
                Nothing in these Terms excludes, restricts, or modifies any rights or remedies you may have under the Australian Consumer Law or any other law that cannot lawfully be excluded, restricted, or modified.
              </p>
              <p>
                Where a law implies a guarantee, condition, or warranty into these Terms and our liability cannot lawfully be excluded, our liability is limited only to the extent permitted by law.
              </p>
            </section>

            {/* 22 */}
            <section>
              <h2 className="font-heading text-xl font-bold text-foreground">22. Limitation of Liability</h2>
              <p>To the maximum extent permitted by law, we exclude liability for any loss, damage, cost, or expense arising out of or in connection with:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>use of or reliance on website content</li>
                <li>delays, interruptions, or unavailability of the website</li>
                <li>inaccuracies or omissions in website content</li>
                <li>inability to diagnose or price works from information submitted online</li>
                <li>third-party websites, links, reviews, tools, or platforms</li>
                <li>malware, cyber events, or unauthorised access beyond our reasonable control</li>
                <li>decisions made by you or third parties based on general website content</li>
              </ul>
              <p>
                To the extent permitted by law, we are not liable for any indirect, incidental, consequential, special, or economic loss, including loss of revenue, opportunity, business, goodwill, or anticipated savings.
              </p>
              <p>
                This clause does not apply to the extent liability cannot be excluded by law. Without limiting the foregoing, we are not liable for loss arising from concealed defects, multi-causation leaks, common-property issues, reliance by non-contracting parties, or any failure to authorise recommended further investigation or broader rectification works.
              </p>
            </section>

            {/* 23 */}
            <section>
              <h2 className="font-heading text-xl font-bold text-foreground">23. Indemnity</h2>
              <p>You indemnify us against claims, losses, liabilities, damages, and costs arising from:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>your misuse of the website</li>
                <li>your breach of these Terms</li>
                <li>your infringement of another person's rights</li>
                <li>information or material you submit that is false, misleading, unlawful, or infringing</li>
              </ul>
              <p>
                This indemnity is reduced to the extent any loss was caused or contributed to by our own negligence, breach of contract, or unlawful conduct.
              </p>
            </section>

            {/* 24 */}
            <section>
              <h2 className="font-heading text-xl font-bold text-foreground">24. Privacy and Communications</h2>
              <p>Our collection, use, and disclosure of personal information is governed by our Privacy Policy.</p>
              <p>
                By contacting us or submitting an enquiry, you consent to us contacting you about your request using the contact details you provide. Where you separately consent to receive marketing communications, those communications will be handled in accordance with applicable law and our Privacy Policy.
              </p>
            </section>

            {/* 25 */}
            <section>
              <h2 className="font-heading text-xl font-bold text-foreground">25. Reviews and Public Feedback</h2>
              <p>
                If you submit a review, testimonial, or other public feedback to us, you grant us permission to reproduce, publish, adapt for formatting, and display that content for promotional or business purposes, unless you expressly withdraw that permission and we are reasonably able to comply.
              </p>
              <p>We may moderate, decline, or remove any submitted feedback from channels we control.</p>
            </section>

            {/* 26 */}
            <section>
              <h2 className="font-heading text-xl font-bold text-foreground">26. Termination of Use</h2>
              <p>
                We may suspend or terminate your access to the website at any time, without notice, where we reasonably believe you have breached these Terms, misused the website, or created legal, security, or operational risk.
              </p>
              <p>
                Clauses that by their nature should survive termination continue to operate, including clauses concerning intellectual property, liability, indemnity, privacy, and governing law.
              </p>
            </section>

            {/* 27 - Dispute Resolution (kept from original) */}
            <section>
              <h2 className="font-heading text-xl font-bold text-foreground">27. Dispute Resolution</h2>
              <p>
                If a dispute arises in connection with these Terms or our Services, both parties agree to first attempt to resolve the matter through good-faith negotiation. If the dispute cannot be resolved informally within 30 days, either party may refer the matter to mediation in accordance with the laws of New South Wales. The costs of mediation shall be shared equally.
              </p>
            </section>

            {/* 28 */}
            <section>
              <h2 className="font-heading text-xl font-bold text-foreground">28. Governing Law</h2>
              <p>These Terms are governed by the laws of New South Wales, Australia.</p>
              <p>You submit to the non-exclusive jurisdiction of the courts of New South Wales and any courts competent to hear appeals from them.</p>
            </section>

            {/* 29 */}
            <section>
              <h2 className="font-heading text-xl font-bold text-foreground">29. Contact Us</h2>
              <p>For questions about these Terms, contact:</p>
              <ul className="list-none pl-0 space-y-1">
                <li><strong>Business:</strong> Sydney Leak Repairs Pro</li>
                <li><strong>ABN:</strong> XX XXX XXX XXX</li>
                <li><strong>Email:</strong> <a href="mailto:info@sydneyleakrepairspro.com.au" className="text-secondary hover:underline">info@sydneyleakrepairspro.com.au</a></li>
                <li><strong>Phone:</strong> <a href={PHONE_HREF} className="text-secondary hover:underline">{PHONE_NUMBER}</a></li>
                <li><strong>Website:</strong> <a href="https://sydneyleakrepairspro.com.au" className="text-secondary hover:underline">sydneyleakrepairspro.com.au</a></li>
              </ul>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}