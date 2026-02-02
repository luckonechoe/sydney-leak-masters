import { Shield } from "lucide-react";
import { cn } from "@/lib/utils";

interface WarrantyBadgeProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  animated?: boolean;
}

export function WarrantyBadge({ className, size = "md", animated = true }: WarrantyBadgeProps) {
  const sizeStyles = {
    sm: "px-3 py-1.5 text-xs gap-1.5",
    md: "px-4 py-2 text-sm gap-2",
    lg: "px-6 py-3 text-base gap-3",
  };

  const iconSizes = {
    sm: "w-3.5 h-3.5",
    md: "w-4 h-4",
    lg: "w-5 h-5",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full bg-accent text-accent-foreground font-heading font-bold",
        sizeStyles[size],
        animated && "animate-pulse-glow",
        className
      )}
    >
      <Shield className={cn(iconSizes[size], "flex-shrink-0")} />
      <span>10 Year Warranty</span>
    </div>
  );
}
