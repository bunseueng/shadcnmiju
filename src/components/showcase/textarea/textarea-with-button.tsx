"use client";

import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Send } from "lucide-react";

const TextareaWithButton = () => {
  return (
    <div className="grid w-full max-w-sm gap-4">
      <div className="grid gap-1.5">
        <Label htmlFor="feedback">Feedback</Label>
        <Textarea
          placeholder="Tell us what you think..."
          id="feedback"
          className="min-h-[120px]"
        />
      </div>
      <Button className="w-full">
        <Send className="mr-2 h-4 w-4" />
        Send Feedback
      </Button>
    </div>
  );
};

export default TextareaWithButton;
