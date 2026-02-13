import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Droplets, Building2, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

interface ServiceCardProps {
  type: "shower" | "balcony";
  className?: string;
}

const serviceData = {
  shower: {
    title: "Shower Leak Repairs",
    description: "Stop shower leaks permanently with our premium epoxy grout technology. No need to remove tiles.",
    price: "790",
    icon: Droplets,
    href: "/services/shower-repairs",
    features: [
      "No tile removal required",
      "Same-day service available",
      "Waterproof guarantee",
    ],
  },
  balcony: {
    title: "Balcony Leak Repairs",
    description: "Prevent concrete degradation and structural damage with expert waterproofing membrane solutions.",
    price: "1,390",
    icon: Building2,
    href: "/services/balcony-repairs",
    features: [
      "Prevents spalling",
      "Full membrane restoration",
      "Strata approved methods",
    ],
  },
};

export function ServiceCard({ type, className }: ServiceCardProps) {
  const data = serviceData[type];
  const Icon = data.icon;

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <Link to={data.href}>
        <Card className={cn(
          "group relative overflow-hidden border-border/50 bg-card hover:border-secondary/50 transition-all duration-300",
          className
        )}>
          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <CardHeader className="relative">
            <div className="flex items-start justify-between">
              <div className="p-3 rounded-lg bg-secondary/10 text-secondary mb-4">
                <Icon className="w-6 h-6" />
              </div>
              <div className="text-right">
                <span className="text-muted-foreground text-sm">From</span>
                <div className="text-2xl font-heading font-bold text-foreground">
                  ${data.price}
                </div>
              </div>
            </div>
            <CardTitle className="text-xl font-heading text-foreground group-hover:text-secondary transition-colors">
              {data.title}
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              {data.description}
            </CardDescription>
          </CardHeader>
          
          <CardContent className="relative space-y-4">
            <ul className="space-y-2">
              {data.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2 text-sm text-foreground/80">
                  <Check className="w-4 h-4 text-secondary flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
            
            <div className="flex items-center gap-2 text-secondary font-medium pt-2 group-hover:gap-3 transition-all">
              Learn more
              <ArrowRight className="w-4 h-4" />
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}
