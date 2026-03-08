import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/seo/SEOHead";

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
          <p className="text-muted-foreground mb-10">
            Last updated: {new Date().toLocaleDateString("en-AU", { day: "numeric", month: "long", year: "numeric" })}
          </p>

          <div className="prose prose-sm md:prose-base max-w-none space-y-8 text-foreground/90">
            {/* 1 */}
            <section>
              <h2 className="font-heading text-xl font-bold text-foreground">1. Introduction</h2>
              <p>
                Welcome to Sydney Leak Repairs Pro ("we", "us", "our"). These Terms of Service ("Terms") govern your use of our website at sydneyleakrepairspro.com.au and any services we provide, including but not limited to shower leak repairs, balcony waterproofing, epoxy regrouting, preventative maintenance, and strata waterproofing (collectively, the "Services"). By accessing our website or engaging our Services, you agree to be bound by these Terms. If you do not agree, please do not use our website or Services.
              </p>
            </section>

            {/* 2 */}
            <section>
              <h2 className="font-heading text-xl font-bold text-foreground">2. Services Overview</h2>
              <p>
                Sydney Leak Repairs Pro provides professional waterproofing, leak detection, and repair services across the greater Sydney metropolitan area. Our Services include:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Leaking shower repairs and resealing</li>
                <li>Leaking balcony repairs and waterproofing</li>
                <li>Epoxy regrouting and tile sealing</li>
                <li>Waterproof membrane inspection and repair</li>
                <li>Preventative maintenance plans</li>
                <li>Strata and body corporate waterproofing solutions</li>
              </ul>
              <p>
                The specific scope, timeline, and cost of any project will be detailed in a written quote provided before work commences.
              </p>
            </section>

            {/* 3 */}
            <section>
              <h2 className="font-heading text-xl font-bold text-foreground">3. Quotes &amp; Pricing</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>All quotes are provided free of charge and are valid for 30 days from the date of issue unless otherwise stated.</li>
                <li>Prices are quoted in Australian Dollars (AUD) and include GST unless specified otherwise.</li>
                <li>Additional costs may arise if unforeseen conditions (e.g., hidden structural damage, asbestos) are discovered during the work. We will notify you and obtain approval before proceeding with any additional charges.</li>
                <li>We reserve the right to adjust pricing where the scope of work materially changes from the original quote.</li>
              </ul>
            </section>

            {/* 4 */}
            <section>
              <h2 className="font-heading text-xl font-bold text-foreground">4. Booking &amp; Scheduling</h2>
              <p>
                Acceptance of a quote constitutes agreement to these Terms. We will schedule work at a mutually convenient time. While we make every effort to adhere to agreed schedules, delays may occur due to weather, material availability, or other factors beyond our control. We will communicate any changes promptly.
              </p>
            </section>

            {/* 5 */}
            <section>
              <h2 className="font-heading text-xl font-bold text-foreground">5. Payment Terms</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>A deposit may be required before commencement of work, as specified in your quote.</li>
                <li>Final payment is due upon completion of the work unless alternative arrangements have been agreed in writing.</li>
                <li>We accept payment via bank transfer, credit card, and other methods as communicated at the time of quoting.</li>
                <li>Late payments may incur interest at a rate of 2% per month on the outstanding balance.</li>
              </ul>
            </section>

            {/* 6 */}
            <section>
              <h2 className="font-heading text-xl font-bold text-foreground">6. Warranty</h2>
              <p>
                We stand behind our workmanship with the following warranty commitments:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Workmanship Warranty:</strong> Up to 10 years on qualifying repair and waterproofing work, as specified in your project documentation.</li>
                <li><strong>Materials Warranty:</strong> Manufacturer warranties apply to all materials used. We will assist with any warranty claims on materials where applicable.</li>
                <li><strong>Exclusions:</strong> Warranties do not cover damage caused by misuse, negligence, structural movement, natural disasters, or unauthorised modifications to the repaired area.</li>
                <li><strong>Warranty Claims:</strong> To make a claim, contact us at info@sydneyleakrepairspro.com.au with a description of the issue. We will inspect and rectify any valid claim at no additional cost.</li>
              </ul>
            </section>

            {/* 7 */}
            <section>
              <h2 className="font-heading text-xl font-bold text-foreground">7. Client Responsibilities</h2>
              <p>To ensure the successful delivery of Services, you agree to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Provide safe and reasonable access to the work area.</li>
                <li>Ensure that any relevant building or strata approvals are obtained before work commences.</li>
                <li>Disclose any known hazards (e.g., asbestos, electrical wiring) in or around the work area.</li>
                <li>Refrain from using the repaired area for the curing period specified by our technicians.</li>
              </ul>
            </section>

            {/* 8 */}
            <section>
              <h2 className="font-heading text-xl font-bold text-foreground">8. Cancellation &amp; Rescheduling</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>You may cancel or reschedule a booking with at least 48 hours' notice at no charge.</li>
                <li>Cancellations with less than 48 hours' notice may incur a call-out fee to cover costs already incurred.</li>
                <li>If materials have been purchased specifically for your project, these costs may be non-refundable.</li>
              </ul>
            </section>

            {/* 9 */}
            <section>
              <h2 className="font-heading text-xl font-bold text-foreground">9. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by Australian Consumer Law:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Our total liability for any claim arising from our Services is limited to the amount paid for the specific service giving rise to the claim.</li>
                <li>We are not liable for indirect, consequential, or incidental damages, including loss of use, loss of profit, or damage to property not directly related to the service performed.</li>
                <li>Nothing in these Terms excludes, restricts, or modifies any consumer guarantee, right, or remedy conferred by the Australian Consumer Law that cannot be excluded.</li>
              </ul>
            </section>

            {/* 10 */}
            <section>
              <h2 className="font-heading text-xl font-bold text-foreground">10. Intellectual Property</h2>
              <p>
                All content on our website — including text, images, logos, designs, and videos — is the property of Sydney Leak Repairs Pro or its licensors and is protected by Australian copyright and intellectual property laws. You may not reproduce, distribute, or use any content without our prior written consent.
              </p>
            </section>

            {/* 11 */}
            <section>
              <h2 className="font-heading text-xl font-bold text-foreground">11. Privacy</h2>
              <p>
                We collect and handle your personal information in accordance with the Australian Privacy Principles. Information collected through our website or during service delivery (such as your name, contact details, and property address) is used solely for providing our Services and communicating with you. We do not sell or share your personal information with third parties except as required by law or to deliver our Services.
              </p>
            </section>

            {/* 12 */}
            <section>
              <h2 className="font-heading text-xl font-bold text-foreground">12. Website Use</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>The information on our website is provided for general informational purposes and does not constitute professional advice.</li>
                <li>We make no guarantees regarding the accuracy, completeness, or timeliness of website content.</li>
                <li>We reserve the right to modify or discontinue any part of the website at any time without notice.</li>
                <li>You must not use our website for any unlawful purpose or in a way that could damage, disable, or impair the site.</li>
              </ul>
            </section>

            {/* 13 */}
            <section>
              <h2 className="font-heading text-xl font-bold text-foreground">13. Dispute Resolution</h2>
              <p>
                If a dispute arises in connection with these Terms or our Services, both parties agree to first attempt to resolve the matter through good-faith negotiation. If the dispute cannot be resolved informally within 30 days, either party may refer the matter to mediation in accordance with the laws of New South Wales. The costs of mediation shall be shared equally.
              </p>
            </section>

            {/* 14 */}
            <section>
              <h2 className="font-heading text-xl font-bold text-foreground">14. Governing Law</h2>
              <p>
                These Terms are governed by and construed in accordance with the laws of New South Wales, Australia. Both parties submit to the exclusive jurisdiction of the courts of New South Wales.
              </p>
            </section>

            {/* 15 */}
            <section>
              <h2 className="font-heading text-xl font-bold text-foreground">15. Changes to These Terms</h2>
              <p>
                We reserve the right to update or modify these Terms at any time. Changes will be effective immediately upon posting to our website. Your continued use of our website or Services after changes are posted constitutes acceptance of the revised Terms.
              </p>
            </section>

            {/* 16 */}
            <section>
              <h2 className="font-heading text-xl font-bold text-foreground">16. Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us:
              </p>
              <ul className="list-none pl-0 space-y-1">
                <li><strong>Email:</strong> info@sydneyleakrepairspro.com.au</li>
                <li><strong>Phone:</strong> 1300 309 276</li>
                <li><strong>Website:</strong> sydneyleakrepairspro.com.au</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
