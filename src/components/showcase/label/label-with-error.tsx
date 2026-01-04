"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AlertCircle } from "lucide-react";

export default function LabelWithError() {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="w-full max-w-md space-y-6">
        <div className="space-y-2">
          <Label htmlFor="email-error">Email</Label>
          <Input
            id="email-error"
            type="email"
            placeholder="Enter your email"
            className="border-destructive focus-visible:ring-destructive"
            defaultValue="invalid-email"
          />
          <div className="flex items-center gap-2 text-sm text-destructive">
            <AlertCircle className="h-4 w-4" />
            <span>Please enter a valid email address</span>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="password-error">Password</Label>
          <Input
            id="password-error"
            type="password"
            placeholder="Enter your password"
            className="border-destructive focus-visible:ring-destructive"
            defaultValue="123"
          />
          <div className="flex items-center gap-2 text-sm text-destructive">
            <AlertCircle className="h-4 w-4" />
            <span>Password must be at least 8 characters</span>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="username-error">Username</Label>
          <Input
            id="username-error"
            type="text"
            placeholder="Choose a username"
            className="border-destructive focus-visible:ring-destructive"
            defaultValue="ab"
          />
          <div className="flex items-center gap-2 text-sm text-destructive">
            <AlertCircle className="h-4 w-4" />
            <span>Username must be at least 3 characters</span>
          </div>
        </div>
      </div>
    </div>
  );
}
