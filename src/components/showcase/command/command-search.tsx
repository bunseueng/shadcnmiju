"use client";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { useState } from "react";
import { Check } from "lucide-react";

const frameworks = [
  { value: "next.js", label: "Next.js" },
  { value: "sveltekit", label: "SvelteKit" },
  { value: "nuxt.js", label: "Nuxt.js" },
  { value: "remix", label: "Remix" },
  { value: "astro", label: "Astro" },
  { value: "gatsby", label: "Gatsby" },
];

const CommandSearch = () => {
  const [selected, setSelected] = useState<string>("");

  return (
    <Command className="rounded-lg border shadow-md w-full max-w-sm">
      <CommandInput placeholder="Search framework..." />
      <CommandList>
        <CommandEmpty>No framework found.</CommandEmpty>
        <CommandGroup heading="Frameworks">
          {frameworks.map((framework) => (
            <CommandItem
              key={framework.value}
              value={framework.value}
              onSelect={(value) => setSelected(value)}
            >
              <Check
                className={`mr-2 h-4 w-4 ${
                  selected === framework.value ? "opacity-100" : "opacity-0"
                }`}
              />
              {framework.label}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );
};

export default CommandSearch;
