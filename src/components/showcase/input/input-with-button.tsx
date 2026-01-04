"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send, Search, ArrowRight } from "lucide-react";

const InputWithButton = () => {
  return (
    <div className="flex flex-col gap-4 w-full max-w-md">
      <div className="flex w-full items-center gap-2">
        <Input type="email" placeholder="Enter your email" />
        <Button type="submit">
          Subscribe
        </Button>
      </div>
      <div className="flex w-full items-center gap-2">
        <Input placeholder="Search products..." />
        <Button size="icon" variant="secondary">
          <Search className="h-4 w-4" />
        </Button>
      </div>
      <div className="flex w-full items-center">
        <Input className="rounded-r-none" placeholder="Join newsletter" />
        <Button className="rounded-l-none">
          <Send className="h-4 w-4 mr-2" />
          Send
        </Button>
      </div>
    </div>
  );
};

export default InputWithButton;
