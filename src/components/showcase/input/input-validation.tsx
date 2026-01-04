"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle2, XCircle, AlertCircle } from "lucide-react";

const InputValidation = () => {
  return (
    <div className="flex flex-col gap-6 w-full max-w-sm">
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="success" className="text-green-600">
          Email (Valid)
        </Label>
        <div className="relative">
          <Input
            id="success"
            type="email"
            defaultValue="user@example.com"
            className="border-green-500 focus-visible:ring-green-500 pr-10"
          />
          <CheckCircle2 className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-green-500" />
        </div>
        <p className="text-sm text-green-600">Email is valid!</p>
      </div>

      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="error" className="text-red-600">
          Email (Invalid)
        </Label>
        <div className="relative">
          <Input
            id="error"
            type="email"
            defaultValue="invalid-email"
            className="border-red-500 focus-visible:ring-red-500 pr-10"
          />
          <XCircle className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-red-500" />
        </div>
        <p className="text-sm text-red-600">
          Please enter a valid email address.
        </p>
      </div>

      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="warning" className="text-yellow-600">
          Username
        </Label>
        <div className="relative">
          <Input
            id="warning"
            defaultValue="user123"
            className="border-yellow-500 focus-visible:ring-yellow-500 pr-10"
          />
          <AlertCircle className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-yellow-500" />
        </div>
        <p className="text-sm text-yellow-600">
          Username may already be taken.
        </p>
      </div>
    </div>
  );
};

export default InputValidation;
