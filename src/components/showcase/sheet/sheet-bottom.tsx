"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Share2, Facebook, Twitter, Linkedin, Link2, Mail, MessageCircle, Check, Copy } from "lucide-react";

const shareOptions = [
  { icon: Facebook, label: "Facebook", color: "text-blue-600" },
  { icon: Twitter, label: "Twitter", color: "text-sky-500" },
  { icon: Linkedin, label: "LinkedIn", color: "text-blue-700" },
  { icon: Mail, label: "Email", color: "text-orange-500" },
  { icon: MessageCircle, label: "Message", color: "text-green-500" },
];

const SheetBottom = () => {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button className="gap-2 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600">
          <Share2 className="h-4 w-4" />
          Share
        </Button>
      </SheetTrigger>
      <SheetContent side="bottom" className="h-[350px]">
        <SheetHeader className="text-center">
          <SheetTitle className="text-foreground">Share this content</SheetTitle>
          <SheetDescription>Choose how you want to share</SheetDescription>
        </SheetHeader>
        <div className="mt-6 max-w-md mx-auto">
          <div className="flex justify-center gap-4 mb-6">
            {shareOptions.map((option, i) => (
              <button
                key={i}
                className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-accent transition-colors group"
              >
                <div className={`h-12 w-12 rounded-full bg-muted flex items-center justify-center group-hover:scale-110 transition-transform ${option.color}`}>
                  <option.icon className="h-6 w-6" />
                </div>
                <span className="text-xs text-muted-foreground">{option.label}</span>
              </button>
            ))}
          </div>
          <div className="relative">
            <div className="flex items-center gap-2 p-3 rounded-lg bg-muted">
              <Link2 className="h-4 w-4 text-muted-foreground shrink-0" />
              <span className="text-sm text-muted-foreground truncate flex-1">
                https://example.com/share/abc123
              </span>
              <Button size="sm" variant="secondary" className="gap-1 shrink-0" onClick={handleCopy}>
                {copied ? (
                  <>
                    <Check className="h-3 w-3" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="h-3 w-3" />
                    Copy
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
        <SheetFooter className="mt-6 justify-center">
          <Button variant="outline" onClick={() => setOpen(false)}>
            Close
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default SheetBottom;
