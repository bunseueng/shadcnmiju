"use client";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Bold, Italic, Underline, Strikethrough, AlignLeft, AlignCenter, AlignRight, Link2 } from "lucide-react";

const tools = [
  { icon: Bold, label: "Bold", shortcut: "⌘B" },
  { icon: Italic, label: "Italic", shortcut: "⌘I" },
  { icon: Underline, label: "Underline", shortcut: "⌘U" },
  { icon: Strikethrough, label: "Strikethrough", shortcut: "⌘⇧S" },
  { icon: AlignLeft, label: "Align Left", shortcut: "⌘⇧L" },
  { icon: AlignCenter, label: "Align Center", shortcut: "⌘⇧E" },
  { icon: AlignRight, label: "Align Right", shortcut: "⌘⇧R" },
  { icon: Link2, label: "Insert Link", shortcut: "⌘K" },
];

const TooltipToolbar = () => {
  return (
    <TooltipProvider delayDuration={100}>
      <div className="flex items-center gap-1 p-2 rounded-lg border border-border bg-background">
        {tools.map((tool, i) => (
          <Tooltip key={i}>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <tool.icon className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <div className="flex items-center gap-2">
                <span>{tool.label}</span>
                <kbd className="text-xs bg-muted px-1.5 py-0.5 rounded">{tool.shortcut}</kbd>
              </div>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
};

export default TooltipToolbar;
