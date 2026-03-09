import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, Upload, X, Image, Video } from "lucide-react";
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { AddressAutocomplete } from "@/components/AddressAutocomplete";

const SERVICE_TYPES = [
  "Leaking Shower Repair",
  "Leaking Balcony Repair",
  "Epoxy Regrouting",
  "Preventative Maintenance",
  "Strata/Body Corporate",
  "Other",
] as const;

const URGENCY_LEVELS = [
  { value: "low", label: "Low - Can wait a few weeks" },
  { value: "medium", label: "Medium - Within the next week" },
  { value: "high", label: "High - As soon as possible" },
  { value: "emergency", label: "Emergency - Urgent attention needed" },
] as const;

const CALLER_TYPES = [
  "Owner / Occupier",
  "Strata Manager",
  "Property Manager",
] as const;

const contactSchema = z.object({
  name: z.string().min(2, "Name is required").max(100),
  email: z.string().email("Valid email required").max(255),
  phone: z.string().min(8, "Valid phone required").max(20),
  callerType: z.string().min(1, "Please select who you are"),
  address: z.string().min(3, "Please enter your address"),
  serviceType: z.string().min(1, "Please select a service type"),
  urgency: z.string().min(1, "Please select urgency level"),
  subject: z.string().min(2, "Subject is required").max(200),
  message: z.string().min(10, "Please provide more details").max(2000),
});

type ContactFormData = z.infer<typeof contactSchema>;

interface UploadedFile {
  file: File;
  preview: string;
  type: "image" | "video";
}

export default function Contact() {
  const { toast } = useToast();
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset, setValue } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const newFiles: UploadedFile[] = [];
    
    Array.from(files).forEach((file) => {
      if (uploadedFiles.length + newFiles.length >= 5) {
        toast({
          title: "Maximum files reached",
          description: "You can upload up to 5 files",
          variant: "destructive",
        });
        return;
      }

      const isImage = file.type.startsWith("image/");
      const isVideo = file.type.startsWith("video/");
      
      if (!isImage && !isVideo) {
        toast({
          title: "Invalid file type",
          description: "Please upload images or videos only",
          variant: "destructive",
        });
        return;
      }

      if (file.size > 50 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: "Maximum file size is 50MB",
          variant: "destructive",
        });
        return;
      }

      newFiles.push({
        file,
        preview: URL.createObjectURL(file),
        type: isImage ? "image" : "video",
      });
    });

    setUploadedFiles((prev) => [...prev, ...newFiles]);
    e.target.value = "";
  };

  const removeFile = (index: number) => {
    setUploadedFiles((prev) => {
      const newFiles = [...prev];
      URL.revokeObjectURL(newFiles[index].preview);
      newFiles.splice(index, 1);
      return newFiles;
    });
  };

  const uploadFilesToStorage = async (): Promise<string[]> => {
    const uploadedUrls: string[] = [];
    
    for (const { file } of uploadedFiles) {
      const fileExt = file.name.split(".").pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
      
      const { error } = await supabase.storage
        .from("contact-uploads")
        .upload(fileName, file);

      if (error) {
        console.error("Upload error:", error);
        throw error;
      }

      const { data: { publicUrl } } = supabase.storage
        .from("contact-uploads")
        .getPublicUrl(fileName);
      
      uploadedUrls.push(publicUrl);
    }
    
    return uploadedUrls;
  };

  const onSubmit = async (data: ContactFormData) => {
    try {
      setIsUploading(true);
      
      let mediaUrls: string[] = [];
      if (uploadedFiles.length > 0) {
        mediaUrls = await uploadFilesToStorage();
      }

      // Log the submission (in production, send to backend/email service)
      console.log("Contact form submission:", {
        ...data,
        mediaUrls,
      });

      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
      });
      
      // Cleanup
      uploadedFiles.forEach(({ preview }) => URL.revokeObjectURL(preview));
      setUploadedFiles([]);
      reset();
    } catch (error) {
      console.error("Submission error:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsUploading(false);
    }
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
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="p-6 bg-card rounded-lg border border-border mb-8">
                  <h2 className="font-heading text-xl font-bold text-foreground mb-6">
                    Get In Touch
                  </h2>

                  <div className="space-y-4">
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
                      <p className="text-sm text-muted-foreground">Mon-Fri 7:30am-3pm, Sat 8:30am-1pm</p>
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
                        <p>Monday - Friday: 7:30am - 3:00pm</p>
                        <p>Saturday: 8:30am - 1:00pm</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>

                <CTAButton variant="phone" size="lg" className="w-full justify-center mt-6">
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

                    {/* Caller Type */}
                    <div>
                      <Label>I am a… *</Label>
                      <Select onValueChange={(value) => setValue("callerType", value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select your role" />
                        </SelectTrigger>
                        <SelectContent>
                          {CALLER_TYPES.map((type) => (
                            <SelectItem key={type} value={type}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.callerType && (
                        <p className="text-destructive text-sm mt-1">{errors.callerType.message}</p>
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

                    {/* Address */}
                    <div>
                      <Label htmlFor="address">Your Address *</Label>
                      <AddressAutocomplete
                        onAddressSelect={(address) => setValue("address", address, { shouldValidate: true })}
                        className="mt-1"
                      />
                      {errors.address && (
                        <p className="text-destructive text-sm mt-1">{errors.address.message}</p>
                      )}
                    </div>

                    {/* Service Type */}
                    <div>
                      <Label htmlFor="serviceType">Service Required *</Label>
                      <Select onValueChange={(value) => setValue("serviceType", value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select service type" />
                        </SelectTrigger>
                        <SelectContent>
                          {SERVICE_TYPES.map((service) => (
                            <SelectItem key={service} value={service}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.serviceType && (
                        <p className="text-destructive text-sm mt-1">{errors.serviceType.message}</p>
                      )}
                    </div>

                    {/* Urgency */}
                    <div>
                      <Label htmlFor="urgency">How Urgent? *</Label>
                      <Select onValueChange={(value) => setValue("urgency", value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select urgency level" />
                        </SelectTrigger>
                        <SelectContent>
                          {URGENCY_LEVELS.map((level) => (
                            <SelectItem key={level.value} value={level.value}>
                              {level.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.urgency && (
                        <p className="text-destructive text-sm mt-1">{errors.urgency.message}</p>
                      )}
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
                        placeholder="Describe your leak issue, when it started, and any visible damage..."
                        rows={4}
                        className="mt-1"
                      />
                      {errors.message && (
                        <p className="text-destructive text-sm mt-1">{errors.message.message}</p>
                      )}
                    </div>

                    {/* Media Upload */}
                    <div>
                      <Label>Upload Photos/Videos (Optional)</Label>
                      <p className="text-sm text-muted-foreground mb-2">
                        <span className="font-medium text-secondary">Tip:</span> Upload 3 clear photos: 
                        1) Full area, 2) Close-up of damage, 3) Water source
                      </p>
                      
                      <div className="mt-2">
                        <label
                          htmlFor="media-upload"
                          className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-border rounded-lg cursor-pointer bg-background hover:bg-muted/50 transition-colors"
                        >
                          <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <Upload className="w-8 h-8 mb-2 text-muted-foreground" />
                            <p className="text-sm text-muted-foreground">
                              <span className="font-semibold text-foreground">Click to upload</span> or drag and drop
                            </p>
                            <p className="text-xs text-muted-foreground mt-1">
                              Images & Videos (Max 50MB each, up to 5 files)
                            </p>
                          </div>
                          <input
                            id="media-upload"
                            type="file"
                            className="hidden"
                            accept="image/*,video/*"
                            multiple
                            onChange={handleFileUpload}
                          />
                        </label>
                      </div>

                      {/* Preview uploaded files */}
                      {uploadedFiles.length > 0 && (
                        <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
                          {uploadedFiles.map((file, index) => (
                            <div
                              key={index}
                              className="relative group rounded-lg overflow-hidden border border-border"
                            >
                              {file.type === "image" ? (
                                <img
                                  src={file.preview}
                                  alt={`Upload ${index + 1}`}
                                  className="w-full h-24 object-cover"
                                />
                              ) : (
                                <div className="w-full h-24 bg-muted flex items-center justify-center">
                                  <Video className="w-8 h-8 text-muted-foreground" />
                                </div>
                              )}
                              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <button
                                  type="button"
                                  onClick={() => removeFile(index)}
                                  className="p-1.5 bg-destructive rounded-full text-destructive-foreground"
                                >
                                  <X className="w-4 h-4" />
                                </button>
                              </div>
                              <div className="absolute bottom-1 left-1">
                                {file.type === "image" ? (
                                  <Image className="w-4 h-4 text-white drop-shadow" />
                                ) : (
                                  <Video className="w-4 h-4 text-white drop-shadow" />
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting || isUploading}
                      className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90"
                    >
                      {isSubmitting || isUploading ? (
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
