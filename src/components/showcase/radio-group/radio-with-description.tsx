"use client";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const RadioWithDescription = () => {
  return (
    <RadioGroup defaultValue="startup" className="flex flex-col gap-4">
      <div className="flex items-start space-x-3 rounded-lg border p-4 cursor-pointer hover:bg-accent transition-colors">
        <RadioGroupItem value="startup" id="startup" className="mt-1" />
        <div className="space-y-1">
          <Label htmlFor="startup" className="cursor-pointer">Startup</Label>
          <p className="text-sm text-muted-foreground">
            Perfect for small teams and early-stage projects.
          </p>
        </div>
      </div>
      <div className="flex items-start space-x-3 rounded-lg border p-4 cursor-pointer hover:bg-accent transition-colors">
        <RadioGroupItem value="business" id="business" className="mt-1" />
        <div className="space-y-1">
          <Label htmlFor="business" className="cursor-pointer">Business</Label>
          <p className="text-sm text-muted-foreground">
            For growing teams that need more resources.
          </p>
        </div>
      </div>
      <div className="flex items-start space-x-3 rounded-lg border p-4 cursor-pointer hover:bg-accent transition-colors">
        <RadioGroupItem value="enterprise" id="enterprise" className="mt-1" />
        <div className="space-y-1">
          <Label htmlFor="enterprise" className="cursor-pointer">Enterprise</Label>
          <p className="text-sm text-muted-foreground">
            Unlimited resources for large organizations.
          </p>
        </div>
      </div>
    </RadioGroup>
  );
};

export default RadioWithDescription;
