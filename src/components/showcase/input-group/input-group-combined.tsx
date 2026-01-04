"use client";

import { Copy, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export default function InputGroupCombined() {
  const handleCopy = () => {
    navigator.clipboard.writeText("https://example.com/invite/abc123");
    toast("Link copied to clipboard");
  };

  return (
    <div className="flex items-center justify-center p-8">
      <div className="w-full max-w-md space-y-4">
        <div className="space-y-2">
          <Label htmlFor="invite-link">Invite Link</Label>
          <div className="flex">
            <Input
              id="invite-link"
              type="text"
              value="https://example.com/invite/abc123"
              readOnly
              className="rounded-r-none"
            />
            <Button
              type="button"
              variant="secondary"
              className="rounded-l-none"
              onClick={handleCopy}
            >
              <Copy className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Send Message</Label>
          <div className="flex gap-2">
            <Input
              id="message"
              type="text"
              placeholder="Type your message..."
            />
            <Button type="submit">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="api-key">API Key</Label>
          <div className="flex">
            <span className="inline-flex items-center rounded-l-md border border-r-0 border-input bg-muted px-3 text-sm text-muted-foreground">
              sk_
            </span>
            <Input
              id="api-key"
              type="password"
              value="live_1234567890abcdef"
              readOnly
              className="rounded-none border-r-0"
            />
            <Button
              type="button"
              variant="outline"
              className="rounded-l-none"
              onClick={handleCopy}
            >
              Copy
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
