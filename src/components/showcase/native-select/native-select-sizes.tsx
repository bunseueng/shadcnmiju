"use client";

import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select";

export default function NativeSelectSizes() {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="w-full max-w-md space-y-6">
        <div className="space-y-2">
          <label htmlFor="small" className="text-sm font-medium">
            Small Size
          </label>
          <NativeSelect id="small" size="sm">
            <NativeSelectOption value="">Select size</NativeSelectOption>
            <NativeSelectOption value="xs">Extra Small</NativeSelectOption>
            <NativeSelectOption value="s">Small</NativeSelectOption>
            <NativeSelectOption value="m">Medium</NativeSelectOption>
            <NativeSelectOption value="l">Large</NativeSelectOption>
            <NativeSelectOption value="xl">Extra Large</NativeSelectOption>
          </NativeSelect>
          <p className="text-sm text-muted-foreground">
            Use size="sm" for compact layouts
          </p>
        </div>

        <div className="space-y-2">
          <label htmlFor="default" className="text-sm font-medium">
            Default Size
          </label>
          <NativeSelect id="default" size="default">
            <NativeSelectOption value="">Select size</NativeSelectOption>
            <NativeSelectOption value="xs">Extra Small</NativeSelectOption>
            <NativeSelectOption value="s">Small</NativeSelectOption>
            <NativeSelectOption value="m">Medium</NativeSelectOption>
            <NativeSelectOption value="l">Large</NativeSelectOption>
            <NativeSelectOption value="xl">Extra Large</NativeSelectOption>
          </NativeSelect>
          <p className="text-sm text-muted-foreground">
            Default size for standard forms
          </p>
        </div>
      </div>
    </div>
  );
}
