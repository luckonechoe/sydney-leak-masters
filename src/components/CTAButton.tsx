import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

interface CTAButtonProps {
  variant: "link" | "phone";
  to?: string;
  children: React.ReactNode;
  className?: string;
  size?: "default" | "sm" | "lg";
}

const PHONE_NUMBER = "0400 000 000";
const PHONE_HREF = "tel:+61400000000";

export function CTAButton({ variant, to, children, className, size = "default" }: CTAButtonProps) {
  const baseStyles = cn(
    "font-heading font-semibold transition-all duration-300",
    size === "lg" && "text-lg px-8 py-6",
    size === "sm" && "text-sm px-4 py-2",
    className
  );

  if (variant === "phone") {
    return (
      <Button
        asChild
        className={cn(
          baseStyles,
          "bg-secondary text-secondary-foreground hover:bg-secondary/90 glow-cyan"
        )}
        size={size}
      >
        <Link to="/contact" aria-label="Contact us for a free quote">
          <Phone className="w-4 h-4 mr-2" />
          {children || PHONE_NUMBER}
        </Link>
      </Button>
    );
  }

  return (
    <Button
      asChild
      className={cn(
        baseStyles,
        "bg-primary text-primary-foreground hover:bg-primary/90"
      )}
      size={size}
    >
      <Link to={to || "/"}>
        {children}
      </Link>
    </Button>
  );
}

export { PHONE_NUMBER, PHONE_HREF };
