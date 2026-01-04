"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function LabelDisabled() {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="w-full max-w-md space-y-6">
        <div className="space-y-2">
          <Label htmlFor="disabled-input" className="text-muted-foreground">
            Disabled Input
          </Label>
          <Input
            id="disabled-input"
            placeholder="This input is disabled"
            disabled
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="readonly-input" className="text-muted-foreground">
            Read-only Input
          </Label>
          <Input
            id="readonly-input"
            value="This value cannot be changed"
            readOnly
            className="bg-muted"
          />
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox id="disabled-checkbox" disabled />
          <Label
            htmlFor="disabled-checkbox"
            className="text-muted-foreground cursor-not-allowed"
          >
            Disabled checkbox
          </Label>
        </div>

        <RadioGroup disabled>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-1" id="option-1" />
            <Label htmlFor="option-1" className="text-muted-foreground cursor-not-allowed">
              Disabled option 1
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-2" id="option-2" />
            <Label htmlFor="option-2" className="text-muted-foreground cursor-not-allowed">
              Disabled option 2
            </Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  );
}
