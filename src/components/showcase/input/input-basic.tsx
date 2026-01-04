"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const InputBasic = () => {
  return (
    <div className="flex flex-col gap-4 w-full max-w-sm">
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" placeholder="Email" />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="password">Password</Label>
        <Input type="password" id="password" placeholder="Password" />
      </div>
    </div>
  );
};

export default InputBasic;
