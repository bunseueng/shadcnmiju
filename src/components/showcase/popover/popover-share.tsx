"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Share2, Copy, Check, Twitter, Facebook, Linkedin, Mail } from "lucide-react";

const PopoverShare = () => {
  const [copied, setCopied] = useState(false);
  const link = "https://example.com/share/abc123";

  const handleCopy = () => {
    navigator.clipboard.writeText(link);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="gap-2">
          <Share2 className="h-4 w-4" />
          Share
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="space-y-4">
          <h4 className="font-medium text-foreground">Share this link</h4>
          <div className="flex items-center gap-2">
            <Input value={link} readOnly className="text-sm" />
            <Button size="icon" variant="outline" onClick={handleCopy}>
              {copied ? (
                <Check className="h-4 w-4 text-green-500" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </Button>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Button variant="outline" size="icon" className="rounded-full hover:text-sky-500 hover:border-sky-500">
              <Twitter className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full hover:text-blue-600 hover:border-blue-600">
              <Facebook className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full hover:text-blue-700 hover:border-blue-700">
              <Linkedin className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full hover:text-orange-500 hover:border-orange-500">
              <Mail className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default PopoverShare;
