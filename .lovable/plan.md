

## Add "Other Service" Specification Field

### Problem
When customers select "Other" from the Service Required dropdown, there's no dedicated field prompting them to specify what their service need is. They must rely on the general Subject/Description fields, which doesn't provide clear guidance.

### Solution
Add a conditional text input field that appears immediately below the "Service Required" dropdown when "Other" is selected, prompting the customer to specify their service need.

### Implementation

**1. Update Form Schema** (`src/components/QuoteForm.tsx`)
- Add optional `otherServiceDescription` field to `quoteFormSchema`
- Make it conditionally required when `issueType === "Other"`

**2. Add Conditional Field UI** (`src/components/QuoteForm.tsx`)
- Watch the `issueType` field value
- Show a text input below the Service Required dropdown when "Other" is selected
- Label it clearly: "Please specify the service you need"
- Add proper validation error display

**3. Update GHL Webhook Mapping** (future integration)
- When mapping to Go High Level, if `issueType === "Other"`, send the `otherServiceDescription` value as part of the service details

### Technical Details

**Form schema addition:**
```typescript
const quoteFormSchema = z.object({
  // ... existing fields
  issueType: z.string().min(1, "Select issue type"),
  otherServiceDescription: z.string().optional(),
  // ... rest of fields
}).refine((data) => {
  if (data.issueType === "Other") {
    return data.otherServiceDescription && data.otherServiceDescription.length >= 3;
  }
  return true;
}, {
  message: "Please describe the service you need",
  path: ["otherServiceDescription"],
});
```

**Conditional field rendering** (in Step 2, after the Service Required dropdown):
```tsx
{watch("issueType") === "Other" && (
  <div>
    <Label htmlFor="otherServiceDescription">
      Please specify the service you need *
    </Label>
    <Input
      id="otherServiceDescription"
      {...register("otherServiceDescription")}
      placeholder="e.g., Deck waterproofing, Pool area repair"
      className="mt-1"
    />
    {errors.otherServiceDescription && (
      <p className="text-destructive text-sm mt-1">
        {errors.otherServiceDescription.message}
      </p>
    )}
  </div>
)}
```

**Step validation update:**
- When validating Step 2, include `otherServiceDescription` in the validation trigger if "Other" is selected

### Benefits
- Clear UX: Users know exactly what to provide when selecting "Other"
- Better data quality: Specific service descriptions instead of vague subject lines
- Easier GHL integration: Structured field for "other" services instead of parsing free text

