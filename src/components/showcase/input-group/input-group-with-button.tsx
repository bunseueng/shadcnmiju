"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function InputGroupWithButton() {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="w-full max-w-md space-y-4">
        <div className="flex w-full items-center space-x-2">
          <Input type="email" placeholder="Enter your email" />
          <Button type="submit">Subscribe</Button>
        </div>

        <div className="flex w-full items-center space-x-2">
          <Input type="text" placeholder="Search..." />
          <Button type="submit" size="icon">
            <Search className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
