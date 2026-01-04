"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function InputGroupWithText() {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="w-full max-w-md space-y-4">
        <div className="space-y-2">
          <Label htmlFor="website">Website URL</Label>
          <div className="flex">
            <span className="inline-flex items-center rounded-l-md border border-r-0 border-input bg-muted px-3 text-sm text-muted-foreground">
              https://
            </span>
            <Input
              id="website"
              type="text"
              placeholder="example.com"
              className="rounded-l-none"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="username-addon">Username</Label>
          <div className="flex">
            <span className="inline-flex items-center rounded-l-md border border-r-0 border-input bg-muted px-3 text-sm text-muted-foreground">
              @
            </span>
            <Input
              id="username-addon"
              type="text"
              placeholder="username"
              className="rounded-l-none"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="price">Price</Label>
          <div className="flex">
            <span className="inline-flex items-center rounded-l-md border border-r-0 border-input bg-muted px-3 text-sm text-muted-foreground">
              $
            </span>
            <Input
              id="price"
              type="number"
              placeholder="0.00"
              className="rounded-l-none"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="domain">Domain</Label>
          <div className="flex">
            <Input
              id="domain"
              type="text"
              placeholder="mysite"
              className="rounded-r-none"
            />
            <span className="inline-flex items-center rounded-r-md border border-l-0 border-input bg-muted px-3 text-sm text-muted-foreground">
              .com
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
