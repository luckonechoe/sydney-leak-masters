import { motion } from "framer-motion";
import { Search, FileText, Wrench, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProcessStep {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const steps: ProcessStep[] = [
  {
    icon: Search,
    title: "Inspect",
    description: "Free on-site assessment to identify the source and extent of the leak",
  },
  {
    icon: FileText,
    title: "Quote",
    description: "Detailed, transparent quote with no hidden costs or surprises",
  },
  {
    icon: Wrench,
    title: "Repair",
    description: "Expert repair using premium epoxy grouts and waterproofing systems",
  },
  {
    icon: Shield,
    title: "Warranty",
    description: "10-year warranty on all repairs with ongoing support",
  },
];

interface ProcessTimelineProps {
  className?: string;
}

export function ProcessTimeline({ className }: ProcessTimelineProps) {
  return (
    <div className={cn("relative", className)}>
      {/* Connection line - desktop */}
      <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="relative text-center"
            >
              {/* Step number badge */}
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-secondary text-secondary-foreground text-xs font-bold flex items-center justify-center z-10">
                {index + 1}
              </div>
              
              {/* Icon container */}
              <div className="relative mx-auto w-24 h-24 rounded-xl bg-card border border-border flex items-center justify-center mb-4 group hover:border-secondary/50 transition-colors">
                <Icon className="w-10 h-10 text-primary group-hover:text-secondary transition-colors" />
              </div>
              
              {/* Content */}
              <h3 className="font-heading font-bold text-lg text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
