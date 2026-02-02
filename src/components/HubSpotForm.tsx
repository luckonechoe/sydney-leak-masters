import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface HubSpotFormProps {
  portalId?: string;
  formId?: string;
  region?: string;
  className?: string;
  onSubmit?: () => void;
}

/**
 * HubSpot Form Component
 * 
 * This is a placeholder component for HubSpot form integration.
 * To activate, provide your portalId and formId from HubSpot.
 * 
 * Steps to get your IDs:
 * 1. Go to HubSpot > Marketing > Forms
 * 2. Create or select a form
 * 3. Click "Share" and copy the embed code
 * 4. Extract portalId and formId from the code
 */
export function HubSpotForm({ 
  portalId, 
  formId, 
  region = "na1",
  className,
  onSubmit 
}: HubSpotFormProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!portalId || !formId) return;

    // Load HubSpot script if not already loaded
    const existingScript = document.getElementById("hubspot-script");
    if (!existingScript) {
      const script = document.createElement("script");
      script.id = "hubspot-script";
      script.src = `//js.hsforms.net/forms/embed/v2.js`;
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
      
      script.onload = () => {
        createForm();
      };
    } else {
      createForm();
    }

    function createForm() {
      if (window.hbspt && containerRef.current) {
        window.hbspt.forms.create({
          region,
          portalId,
          formId,
          target: containerRef.current,
          onFormSubmit: onSubmit,
        });
      }
    }
  }, [portalId, formId, region, onSubmit]);

  // Show placeholder if no IDs provided
  if (!portalId || !formId) {
    return (
      <div className={cn(
        "p-6 rounded-lg border border-dashed border-border bg-muted/20 text-center",
        className
      )}>
        <p className="text-muted-foreground text-sm mb-2">
          HubSpot Form Placeholder
        </p>
        <p className="text-xs text-muted-foreground/60">
          Configure portalId and formId to activate
        </p>
      </div>
    );
  }

  return <div ref={containerRef} className={className} />;
}

// Add type declaration for HubSpot
declare global {
  interface Window {
    hbspt: {
      forms: {
        create: (config: {
          region: string;
          portalId: string;
          formId: string;
          target: HTMLElement;
          onFormSubmit?: () => void;
        }) => void;
      };
    };
  }
}
