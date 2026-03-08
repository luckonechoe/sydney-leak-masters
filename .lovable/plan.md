

## Replace Suburb Dropdown with Google Places Autocomplete

### Overview
Replace the current "Your Suburb" dropdown with a Google Places Autocomplete address field using the provided API key.

### Changes

1. **`index.html`** - Add Google Maps JavaScript API script with Places library using the provided API key.

2. **`src/components/AddressAutocomplete.tsx`** (new) - Custom component that:
   - Renders a text input
   - Attaches `google.maps.places.Autocomplete` on mount
   - Restricts to Australian addresses (`componentRestrictions: { country: 'au' }`)
   - Calls `onChange` with the selected address string

3. **`src/pages/Contact.tsx`** - Update the form:
   - Replace `suburb` field with `address` in the Zod schema
   - Remove the `Select` dropdown and `suburbsByRegion` logic
   - Remove `sydneySuburbs` import
   - Use `AddressAutocomplete` component instead
   - Wire it to `setValue("address", ...)` on selection

### API Key
The Google Maps API key (`AIzaSyBUkRDAOkJcR8EAz6DwnZJzUGc6_lvXpMY`) is a publishable client-side key, safe to include in `index.html`.

