"use client";

import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select";

export default function NativeSelectBasic() {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="w-full max-w-md space-y-6">
        <div className="space-y-2">
          <label htmlFor="country" className="text-sm font-medium">
            Country
          </label>
          <NativeSelect id="country">
            <NativeSelectOption value="">Select a country</NativeSelectOption>
            <NativeSelectOption value="us">United States</NativeSelectOption>
            <NativeSelectOption value="uk">United Kingdom</NativeSelectOption>
            <NativeSelectOption value="ca">Canada</NativeSelectOption>
            <NativeSelectOption value="au">Australia</NativeSelectOption>
            <NativeSelectOption value="de">Germany</NativeSelectOption>
          </NativeSelect>
        </div>

        <div className="space-y-2">
          <label htmlFor="language" className="text-sm font-medium">
            Language
          </label>
          <NativeSelect id="language" defaultValue="en">
            <NativeSelectOption value="en">English</NativeSelectOption>
            <NativeSelectOption value="es">Spanish</NativeSelectOption>
            <NativeSelectOption value="fr">French</NativeSelectOption>
            <NativeSelectOption value="de">German</NativeSelectOption>
            <NativeSelectOption value="ja">Japanese</NativeSelectOption>
          </NativeSelect>
        </div>

        <div className="space-y-2">
          <label htmlFor="timezone" className="text-sm font-medium">
            Timezone
          </label>
          <NativeSelect id="timezone">
            <NativeSelectOption value="">Select timezone</NativeSelectOption>
            <NativeSelectOption value="pst">Pacific Time (PST)</NativeSelectOption>
            <NativeSelectOption value="mst">Mountain Time (MST)</NativeSelectOption>
            <NativeSelectOption value="cst">Central Time (CST)</NativeSelectOption>
            <NativeSelectOption value="est">Eastern Time (EST)</NativeSelectOption>
          </NativeSelect>
        </div>
      </div>
    </div>
  );
}
