"use client";

import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const items = [
  {
    title: "Section One",
    content: "This is the content for the first section",
  },
  {
    title: "Section Two",
    content: "This is the content for the second section",
  },
  {
    title: "Section Three",
    content: "This is the content for the third section",
  },
];

const CollapsibleGroup = () => {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (title: string) => {
    setOpenItems((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]
    );
  };

  return (
    <div className="space-y-2 w-full max-w-lg mx-auto text-start">
      {items.map((item) => (
        <Collapsible
          key={item.title}
          open={openItems.includes(item.title)}
          onOpenChange={() => toggleItem(item.title)}
        >
          <CollapsibleTrigger className="w-full flex items-center gap-2 rounded-lg border border-border p-3 font-semibold text-foreground hover:bg-accent transition-colors">
            <ChevronDown
              className={`h-4 w-4 transition-transform ${
                openItems.includes(item.title) ? "rotate-180" : ""
              }`}
            />
            {item.title}
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-2 rounded-lg border border-border p-3 text-muted-foreground">
            {item.content}
          </CollapsibleContent>
        </Collapsible>
      ))}
    </div>
  );
};

export default CollapsibleGroup;
