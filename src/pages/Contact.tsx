import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTAButton, PHONE_NUMBER, PHONE_HREF } from "@/components/CTAButton";
import { SEOHead, Breadcrumbs } from "@/components/seo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(8, "Valid phone required"),
  subject: z.string().min(2, "Subject is required"),
  message: z.string().min(10, "Please provide more details"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const { toast } = useToast();
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    // Simulate form submission
    await new Promise((r) => setTimeout(r, 1500));
    console.log("Contact form:", data);
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    reset();
  };

  const breadcrumbItems = [
    { name: "Home", href: "/" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <SEOHead
        title="Contact Us | Get a Free Quote"
        description="Contact Sydney Leak Repairs Pro for a free quote. Call us or fill out our contact form. Sydney-wide service with 24-hour response."
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
              <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-6">
                Contact{" "}
                <span className="gradient-text">Us</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Ready to stop your leak? Get in touch for a free quote. 
                We respond within 24 hours.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-12 lg:py-16">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                  Get In Touch
                </h2>

                <div className="space-y-6 mb-8">
                  <a
                    href={PHONE_HREF}
                    className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border hover:border-secondary/50 transition-colors"
                  >
                    <div className="p-3 rounded-lg bg-secondary/10">
                      <Phone className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-foreground mb-1">
                        Phone
                      </h3>
                      <p className="text-secondary font-medium">{PHONE_NUMBER}</p>
                      <p className="text-sm text-muted-foreground">Mon-Fri 7am-6pm, Sat 8am-2pm</p>
                    </div>
                  </a>

                  <a
                    href="mailto:info@sydneyleakrepairspro.com.au"
                    className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border hover:border-secondary/50 transition-colors"
                  >
                    <div className="p-3 rounded-lg bg-secondary/10">
                      <Mail className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-foreground mb-1">
                        Email
                      </h3>
                      <p className="text-secondary font-medium">info@sydneyleakrepairspro.com.au</p>
                      <p className="text-sm text-muted-foreground">We respond within 24 hours</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border">
                    <div className="p-3 rounded-lg bg-secondary/10">
                      <MapPin className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-foreground mb-1">
                        Service Area
                      </h3>
                      <p className="text-foreground">All Sydney Suburbs</p>
                      <p className="text-sm text-muted-foreground">Plus Central Coast & Wollongong</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border">
                    <div className="p-3 rounded-lg bg-secondary/10">
                      <Clock className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-foreground mb-1">
                        Business Hours
                      </h3>
                      <div className="text-sm text-muted-foreground space-y-1">
                        <p>Monday - Friday: 7:00am - 6:00pm</p>
                        <p>Saturday: 8:00am - 2:00pm</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>

                <CTAButton variant="phone" size="lg" className="w-full justify-center">
                  Call Now For Free Quote
                </CTAButton>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="p-6 bg-card rounded-lg border border-border">
                  <h2 className="font-heading text-xl font-bold text-foreground mb-6">
                    Send Us a Message
                  </h2>

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        {...register("name")}
                        placeholder="John Smith"
                        className="mt-1"
                      />
                      {errors.name && (
                        <p className="text-destructive text-sm mt-1">{errors.name.message}</p>
                      )}
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          {...register("email")}
                          placeholder="john@example.com"
                          className="mt-1"
                        />
                        {errors.email && (
                          <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          {...register("phone")}
                          placeholder="0400 000 000"
                          className="mt-1"
                        />
                        {errors.phone && (
                          <p className="text-destructive text-sm mt-1">{errors.phone.message}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        {...register("subject")}
                        placeholder="Quote request for shower leak"
                        className="mt-1"
                      />
                      {errors.subject && (
                        <p className="text-destructive text-sm mt-1">{errors.subject.message}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        {...register("message")}
                        placeholder="Tell us about your leak issue..."
                        rows={5}
                        className="mt-1"
                      />
                      {errors.message && (
                        <p className="text-destructive text-sm mt-1">{errors.message.message}</p>
                      )}
                      <p className="text-sm text-muted-foreground mt-2">
                        <span className="font-medium text-secondary">Upload 3 clear photos:</span>{" "}
                        1) Full area, 2) Close-up of damage, 3) Water source
                      </p>
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90"
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
