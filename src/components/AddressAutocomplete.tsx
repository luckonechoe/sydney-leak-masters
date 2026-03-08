/// <reference types="google.maps" />
import { useEffect, useRef, useCallback } from "react";
import { Input } from "@/components/ui/input";

interface AddressAutocompleteProps {
  onAddressSelect: (address: string) => void;
  className?: string;
}

export function AddressAutocomplete({ onAddressSelect, className }: AddressAutocompleteProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);

  const stableCallback = useCallback(onAddressSelect, [onAddressSelect]);

  useEffect(() => {
    if (!inputRef.current) return;

    const initAutocomplete = () => {
      if (!window.google?.maps?.places || !inputRef.current) return;

      autocompleteRef.current = new google.maps.places.Autocomplete(inputRef.current, {
        componentRestrictions: { country: "au" },
        types: ["address"],
        fields: ["formatted_address"],
      });

      autocompleteRef.current.addListener("place_changed", () => {
        const place = autocompleteRef.current?.getPlace();
        if (place?.formatted_address) {
          stableCallback(place.formatted_address);
        }
      });
    };

    if (window.google?.maps?.places) {
      initAutocomplete();
    } else {
      // Wait for script to load
      const interval = setInterval(() => {
        if (window.google?.maps?.places) {
          clearInterval(interval);
          initAutocomplete();
        }
      }, 200);
      return () => clearInterval(interval);
    }

    return () => {
      if (autocompleteRef.current) {
        google.maps.event.clearInstanceListeners(autocompleteRef.current);
      }
    };
  }, [stableCallback]);

  return (
    <Input
      ref={inputRef}
      placeholder="Start typing your address..."
      className={className}
    />
  );
}
