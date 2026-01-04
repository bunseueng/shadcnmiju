"use client";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const RadioDisabled = () => {
  return (
    <RadioGroup defaultValue="option-one">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-one" id="option-one" />
        <Label htmlFor="option-one">Option One</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-two" id="option-two" />
        <Label htmlFor="option-two">Option Two</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-three" id="option-three" disabled />
        <Label htmlFor="option-three" className="text-muted-foreground">
          Option Three (Disabled)
        </Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-four" id="option-four" disabled />
        <Label htmlFor="option-four" className="text-muted-foreground">
          Option Four (Disabled)
        </Label>
      </div>
    </RadioGroup>
  );
};

export default RadioDisabled;
