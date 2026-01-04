"use client";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const RadioHorizontal = () => {
  return (
    <div className="flex flex-col gap-4">
      <Label className="text-foreground">Select size:</Label>
      <RadioGroup defaultValue="m" className="flex gap-4">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="xs" id="xs" />
          <Label htmlFor="xs">XS</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="s" id="s" />
          <Label htmlFor="s">S</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="m" id="m" />
          <Label htmlFor="m">M</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="l" id="l" />
          <Label htmlFor="l">L</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="xl" id="xl" />
          <Label htmlFor="xl">XL</Label>
        </div>
      </RadioGroup>
    </div>
  );
};

export default RadioHorizontal;
