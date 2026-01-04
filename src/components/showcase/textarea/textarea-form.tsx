"use client";

import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const TextareaForm = () => {
  return (
    <div className="flex flex-col gap-4 w-full max-w-sm">
      <div className="grid gap-1.5">
        <Label htmlFor="subject">Subject</Label>
        <Input id="subject" placeholder="Enter subject" />
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          placeholder="Write your message..."
          className="min-h-[150px]"
        />
        <p className="text-sm text-muted-foreground">
          Your message will be sent to our support team.
        </p>
      </div>
      <div className="flex gap-2">
        <Button variant="outline" className="flex-1">
          Cancel
        </Button>
        <Button className="flex-1">Send</Button>
      </div>
    </div>
  );
};

export default TextareaForm;
