import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowLeft, ArrowRight, Upload, Check, Loader2, X, Image, Video } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { AddressAutocomplete } from "@/components/AddressAutocomplete";

// Form schema
const CALLER_TYPES = [
  "Owner / Occupier",
  "Strata Manager",
  "Property Manager",
] as const;

const quoteFormSchema = z.object({
  // Step 1: Contact
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(8, "Valid phone number required"),
  callerType: z.string().min(1, "Please select who you are"),
  // Step 2: Property
  propertyType: z.string().min(1, "Select property type"),
  address: z.string().min(3, "Please enter your address"),
  issueType: z.string().min(1, "Select issue type"),
  urgency: z.string().min(1, "Please select urgency level"),
  subject: z.string().min(2, "Subject is required").max(200),
  description: z.string().optional(),
  // Step 3: Files (handled separately)
  // Step 4: Contact time
  preferredTime: z.string().min(1, "Select preferred contact time"),
});

type QuoteFormData = z.infer<typeof quoteFormSchema>;

interface QuoteFormProps {
  className?: string;
  onSuccess?: () => void;
}

const STEPS = [
  { id: 1, title: "Contact Details" },
  { id: 2, title: "Property Info" },
  { id: 3, title: "Upload Photos" },
  { id: 4, title: "Confirm" },
];

const PROPERTY_TYPES = [
  "House",
  "Apartment",
  "Townhouse",
  "Unit",
  "Commercial",
  "Strata Complex",
];

const ISSUE_TYPES = [
  "Leaking Shower Repair",
  "Leaking Balcony Repair",
  "Epoxy Regrouting",
  "Preventative Maintenance",
  "Strata/Body Corporate",
  "Other",
];

const URGENCY_LEVELS = [
  { value: "low", label: "Low - Can wait a few weeks" },
  { value: "medium", label: "Medium - Within the next week" },
  { value: "high", label: "High - As soon as possible" },
  { value: "emergency", label: "Emergency - Urgent attention needed" },
] as const;

const CONTACT_TIMES = [
  "Morning (8am - 12pm)",
  "Afternoon (12pm - 5pm)",
  "Evening (5pm - 8pm)",
  "Anytime",
];

export function QuoteForm({ className, onSuccess }: QuoteFormProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [files, setFiles] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<QuoteFormData>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      callerType: "",
      propertyType: "",
      address: "",
      issueType: "",
      urgency: "",
      subject: "",
      description: "",
      preferredTime: "",
    },
  });

  const { register, handleSubmit, formState: { errors }, setValue, watch } = form;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFiles = Array.from(e.target.files || []);
    const validFiles = newFiles.filter((file) => {
      const isImage = file.type.startsWith("image/");
      const isVideo = file.type.startsWith("video/");
      const maxSize = isVideo ? 50 * 1024 * 1024 : 10 * 1024 * 1024; // 50MB video, 10MB image
      
      if (!isImage && !isVideo) {
        toast({
          title: "Invalid file type",
          description: "Please upload images or videos only",
          variant: "destructive",
        });
        return false;
      }
      if (file.size > maxSize) {
        toast({
          title: "File too large",
          description: `${file.name} exceeds the size limit`,
          variant: "destructive",
        });
        return false;
      }
      return true;
    });
    
    setFiles((prev) => [...prev, ...validFiles].slice(0, 5)); // Max 5 files
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const nextStep = async () => {
    let fieldsToValidate: (keyof QuoteFormData)[] = [];
    
    if (currentStep === 1) {
      fieldsToValidate = ["name", "email", "phone", "callerType"];
    } else if (currentStep === 2) {
      fieldsToValidate = ["propertyType", "address", "issueType", "urgency", "subject"];
    }

    const isValid = await form.trigger(fieldsToValidate);
    if (isValid) {
      setCurrentStep((prev) => Math.min(prev + 1, 4));
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const onSubmit = async (data: QuoteFormData) => {
    setIsSubmitting(true);
    
    // Simulate API call - replace with actual Supabase integration
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      
      console.log("Form data:", data);
      console.log("Files:", files);
      
      toast({
        title: "Quote Request Submitted!",
        description: "We'll be in touch within 24 hours.",
      });
      
      onSuccess?.();
    } catch {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={cn("bg-card border border-border rounded-lg overflow-hidden", className)}>
      {/* Progress Bar */}
      <div className="p-4 border-b border-border">
        <div className="flex items-center justify-between mb-2">
          {STEPS.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <div
                className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors",
                  currentStep > step.id
                    ? "bg-secondary text-secondary-foreground"
                    : currentStep === step.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                )}
              >
                {currentStep > step.id ? <Check className="w-4 h-4" /> : step.id}
              </div>
              {index < STEPS.length - 1 && (
                <div
                  className={cn(
                    "hidden sm:block w-12 lg:w-24 h-0.5 mx-2 transition-colors",
                    currentStep > step.id ? "bg-secondary" : "bg-border"
                  )}
                />
              )}
            </div>
          ))}
        </div>
        <p className="text-sm text-muted-foreground text-center">
          Step {currentStep} of {STEPS.length}: {STEPS[currentStep - 1].title}
        </p>
      </div>

      {/* Form Content */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="p-6">
          <AnimatePresence mode="wait">
            {/* Step 1: Contact Details */}
            {currentStep === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
              >
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
                <div>
                  <Label htmlFor="email">Email Address *</Label>
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
                  <Label htmlFor="phone">Phone Number *</Label>
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
                <div>
                  <Label>I am a… *</Label>
                  <Select
                    value={watch("callerType")}
                    onValueChange={(value) => setValue("callerType", value, { shouldValidate: true })}
                  >
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
              </motion.div>
            )}

            {/* Step 2: Property Info */}
            {currentStep === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
              >
                <div>
                  <Label>Property Type *</Label>
                  <Select
                    value={watch("propertyType")}
                    onValueChange={(value) => setValue("propertyType", value)}
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select property type" />
                    </SelectTrigger>
                    <SelectContent>
                      {PROPERTY_TYPES.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.propertyType && (
                    <p className="text-destructive text-sm mt-1">{errors.propertyType.message}</p>
                  )}
                </div>
                <div>
                  <Label>Your Address *</Label>
                  <AddressAutocomplete
                    onAddressSelect={(address) => setValue("address", address, { shouldValidate: true })}
                    className="mt-1"
                  />
                  {errors.address && (
                    <p className="text-destructive text-sm mt-1">{errors.address.message}</p>
                  )}
                </div>
                <div>
                  <Label>Service Required *</Label>
                  <Select
                    value={watch("issueType")}
                    onValueChange={(value) => setValue("issueType", value)}
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select service type" />
                    </SelectTrigger>
                    <SelectContent>
                      {ISSUE_TYPES.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.issueType && (
                    <p className="text-destructive text-sm mt-1">Please select a service type</p>
                  )}
                </div>

                <div>
                  <Label>How Urgent? *</Label>
                  <Select
                    value={watch("urgency")}
                    onValueChange={(value) => setValue("urgency", value, { shouldValidate: true })}
                  >
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
                  <Label htmlFor="description">Description (Optional)</Label>
                  <Textarea
                    id="description"
                    {...register("description")}
                    placeholder="Tell us more about your leak issue..."
                    className="mt-1"
                    rows={3}
                  />
                </div>
              </motion.div>
            )}

            {/* Step 3: File Upload */}
            {currentStep === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
              >
                <div>
                  <Label>Upload Photos/Videos</Label>
                  <p className="text-sm text-muted-foreground mb-3">
                    Upload up to 5 photos or videos of the leak (optional but helpful)
                  </p>
                  
                  <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-border rounded-lg cursor-pointer hover:border-secondary/50 transition-colors">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <Upload className="w-8 h-8 text-muted-foreground mb-2" />
                      <p className="text-sm text-muted-foreground">
                        Click to upload or drag and drop
                      </p>
                      <p className="text-xs text-muted-foreground/60">
                        Images (10MB max) • Videos (50MB max)
                      </p>
                    </div>
                    <input
                      type="file"
                      className="hidden"
                      accept="image/*,video/*"
                      multiple
                      onChange={handleFileChange}
                    />
                  </label>
                </div>

                {/* File Preview */}
                {files.length > 0 && (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {files.map((file, index) => (
                      <div
                        key={index}
                        className="relative p-3 bg-muted rounded-lg flex items-center gap-2"
                      >
                        {file.type.startsWith("image/") ? (
                          <Image className="w-5 h-5 text-secondary flex-shrink-0" />
                        ) : (
                          <Video className="w-5 h-5 text-secondary flex-shrink-0" />
                        )}
                        <span className="text-sm truncate flex-1">{file.name}</span>
                        <button
                          type="button"
                          onClick={() => removeFile(index)}
                          className="p-1 hover:bg-background rounded"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            )}

            {/* Step 4: Confirm */}
            {currentStep === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
              >
                <div>
                  <Label>Preferred Contact Time *</Label>
                  <Select
                    value={watch("preferredTime")}
                    onValueChange={(value) => setValue("preferredTime", value)}
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="When should we call?" />
                    </SelectTrigger>
                    <SelectContent>
                      {CONTACT_TIMES.map((time) => (
                        <SelectItem key={time} value={time}>
                          {time}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.preferredTime && (
                    <p className="text-destructive text-sm mt-1">{errors.preferredTime.message}</p>
                  )}
                </div>

                {/* Summary */}
                <div className="p-4 bg-muted rounded-lg space-y-2">
                  <h4 className="font-heading font-semibold">Summary</h4>
                  <div className="text-sm space-y-1 text-muted-foreground">
                    <p><strong>Name:</strong> {watch("name")}</p>
                    <p><strong>Email:</strong> {watch("email")}</p>
                    <p><strong>Phone:</strong> {watch("phone")}</p>
                    <p><strong>Role:</strong> {watch("callerType")}</p>
                    <p><strong>Property:</strong> {watch("propertyType")} — {watch("address")}</p>
                    <p><strong>Service:</strong> {watch("issueType")}</p>
                    <p><strong>Urgency:</strong> {watch("urgency")}</p>
                    <p><strong>Subject:</strong> {watch("subject")}</p>
                    {files.length > 0 && (
                      <p><strong>Files:</strong> {files.length} uploaded</p>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Navigation Buttons */}
        <div className="p-4 border-t border-border flex items-center justify-between">
          <Button
            type="button"
            variant="ghost"
            onClick={prevStep}
            disabled={currentStep === 1}
            className={cn(currentStep === 1 && "invisible")}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>

          {currentStep < 4 ? (
            <Button type="button" onClick={nextStep}>
              Next
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          ) : (
            <Button type="submit" disabled={isSubmitting} className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Submitting...
                </>
              ) : (
                "Submit Quote Request"
              )}
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}
