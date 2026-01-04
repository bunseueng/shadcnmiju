"use client";

import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const TextareaBasic = () => {
  return (
    <div className="grid w-full max-w-sm gap-1.5">
      <Label htmlFor="message">Your message</Label>
      <Textarea placeholder="Type your message here." id="message" />
    </div>
  );
};

export default TextareaBasic;
