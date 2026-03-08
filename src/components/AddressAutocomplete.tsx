import { useEffect, useRef } from "react";
import { Input } from "@/components/ui/input";

interface AddressAutocompleteProps {
  onAddressSelect: (address: string) => void;
  className?: string;
}

declare global {
  interface Window {
    google: typeof google;
  }
}

export function AddressAutocomplete({ onAddressSelect, className }: AddressAutocompleteProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);

  useEffect(() => {
    if (!inputRef.current || !window.google?.maps?.places) return;

    autocompleteRef.current = new google.maps.places.Autocomplete(inputRef.current, {
      componentRestrictions: { country: "au" },
      types: ["address"],
      fields: ["formatted_address"],
    });

    autocompleteRef.current.addListener("place_changed", () => {
      const place = autocompleteRef.current?.getPlace();
      if (place?.formatted_address) {
        onAddressSelect(place.formatted_address);
      }
    });

    return () => {
      if (autocompleteRef.current) {
        google.maps.event.clearInstanceListeners(autocompleteRef.current);
      }
    };
  }, [onAddressSelect]);

  return (
    <Input
      ref={inputRef}
      placeholder="Start typing your address..."
      className={className}
    />
  );
}
