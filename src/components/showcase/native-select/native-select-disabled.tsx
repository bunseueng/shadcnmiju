"use client";

import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select";

export default function NativeSelectDisabled() {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="w-full max-w-md space-y-6">
        <div className="space-y-2">
          <label htmlFor="disabled-select" className="text-sm font-medium">
            Disabled Select
          </label>
          <NativeSelect id="disabled-select" disabled>
            <NativeSelectOption value="">Select an option</NativeSelectOption>
            <NativeSelectOption value="1">Option 1</NativeSelectOption>
            <NativeSelectOption value="2">Option 2</NativeSelectOption>
            <NativeSelectOption value="3">Option 3</NativeSelectOption>
          </NativeSelect>
          <p className="text-sm text-muted-foreground">
            This select is completely disabled
          </p>
        </div>

        <div className="space-y-2">
          <label htmlFor="partial-disabled" className="text-sm font-medium">
            Partially Disabled Options
          </label>
          <NativeSelect id="partial-disabled" defaultValue="available">
            <NativeSelectOption value="">Select status</NativeSelectOption>
            <NativeSelectOption value="available">Available</NativeSelectOption>
            <NativeSelectOption value="pending" disabled>
              Pending (Disabled)
            </NativeSelectOption>
            <NativeSelectOption value="processing">Processing</NativeSelectOption>
            <NativeSelectOption value="sold-out" disabled>
              Sold Out (Disabled)
            </NativeSelectOption>
            <NativeSelectOption value="backorder">Backorder</NativeSelectOption>
          </NativeSelect>
          <p className="text-sm text-muted-foreground">
            Some options are disabled and cannot be selected
          </p>
        </div>

        <div className="space-y-2">
          <label htmlFor="readonly-like" className="text-sm font-medium">
            Pre-selected Value
          </label>
          <NativeSelect id="readonly-like" defaultValue="premium">
            <NativeSelectOption value="free">Free Plan</NativeSelectOption>
            <NativeSelectOption value="basic">Basic Plan</NativeSelectOption>
            <NativeSelectOption value="premium">Premium Plan</NativeSelectOption>
            <NativeSelectOption value="enterprise">Enterprise Plan</NativeSelectOption>
          </NativeSelect>
          <p className="text-sm text-muted-foreground">
            Current plan: Premium (can be changed)
          </p>
        </div>
      </div>
    </div>
  );
}
