"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function LabelRequired() {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="w-full max-w-md space-y-6">
        <div className="space-y-2">
          <Label htmlFor="fullname">
            Full Name <span className="text-destructive">*</span>
          </Label>
          <Input id="fullname" placeholder="John Doe" required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email-required">
            Email Address <span className="text-destructive">*</span>
          </Label>
          <Input
            id="email-required"
            type="email"
            placeholder="john@example.com"
            required
          />
          <p className="text-xs text-muted-foreground">
            <span className="text-destructive">*</span> Required field
          </p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone-optional">Phone Number (Optional)</Label>
          <Input id="phone-optional" type="tel" placeholder="+1 (555) 000-0000" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="notes">
            Additional Notes <span className="text-destructive">*</span>
          </Label>
          <Textarea
            id="notes"
            placeholder="Please provide additional details"
            required
          />
        </div>
      </div>
    </div>
  );
}
