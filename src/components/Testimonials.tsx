import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  service: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah M.",
    location: "Bondi",
    rating: 5,
    text: "After years of dealing with shower leaks and being told I'd need to retile, Sydney Leak Repairs Pro fixed it in one day. The epoxy grout solution is incredible - no mess, no drama, just results.",
    service: "Shower Repair",
  },
  {
    id: 2,
    name: "Michael T.",
    location: "Parramatta",
    rating: 5,
    text: "Our strata had 12 balconies with water damage. They handled the entire project professionally, saved us thousands compared to full membrane replacement, and the 10-year warranty gave owners peace of mind.",
    service: "Balcony Repair",
  },
  {
    id: 3,
    name: "Jenny L.",
    location: "Chatswood",
    rating: 5,
    text: "I was skeptical about fixing my shower without removing tiles. Three years later, still bone dry. The team was punctual, clean, and the price was exactly as quoted. Highly recommend!",
    service: "Shower Repair",
  },
];

interface TestimonialsProps {
  className?: string;
}

export function Testimonials({ className }: TestimonialsProps) {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-3 gap-6", className)}>
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={testimonial.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          className="relative p-6 bg-card border border-border rounded-lg"
        >
          {/* Quote Icon */}
          <Quote className="absolute top-4 right-4 w-8 h-8 text-secondary/20" />
          
          {/* Rating */}
          <div className="flex items-center gap-1 mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={cn(
                  "w-4 h-4",
                  i < testimonial.rating
                    ? "text-accent fill-accent"
                    : "text-muted-foreground"
                )}
              />
            ))}
          </div>
          
          {/* Text */}
          <p className="text-foreground/90 mb-4 leading-relaxed">
            "{testimonial.text}"
          </p>
          
          {/* Author */}
          <div className="flex items-center justify-between">
            <div>
              <p className="font-heading font-semibold text-foreground">
                {testimonial.name}
              </p>
              <p className="text-sm text-muted-foreground">
                {testimonial.location}
              </p>
            </div>
            <span className="text-xs px-2 py-1 bg-secondary/10 text-secondary rounded-full">
              {testimonial.service}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
