"use client";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CreditCard, Wallet, Building } from "lucide-react";

const RadioCards = () => {
  return (
    <RadioGroup defaultValue="card" className="grid grid-cols-3 gap-4 max-w-md">
      <div>
        <RadioGroupItem value="card" id="card" className="peer sr-only" />
        <Label
          htmlFor="card"
          className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer transition-colors"
        >
          <CreditCard className="mb-3 h-6 w-6" />
          <span className="text-sm font-medium">Card</span>
        </Label>
      </div>
      <div>
        <RadioGroupItem value="wallet" id="wallet" className="peer sr-only" />
        <Label
          htmlFor="wallet"
          className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer transition-colors"
        >
          <Wallet className="mb-3 h-6 w-6" />
          <span className="text-sm font-medium">Wallet</span>
        </Label>
      </div>
      <div>
        <RadioGroupItem value="bank" id="bank" className="peer sr-only" />
        <Label
          htmlFor="bank"
          className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer transition-colors"
        >
          <Building className="mb-3 h-6 w-6" />
          <span className="text-sm font-medium">Bank</span>
        </Label>
      </div>
    </RadioGroup>
  );
};

export default RadioCards;
