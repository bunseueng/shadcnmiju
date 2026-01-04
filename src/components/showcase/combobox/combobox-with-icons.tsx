"use client";

import * as React from "react";
import {
  Check,
  ChevronsUpDown,
  Chrome,
  Chromium,
  Compass,
  Globe,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const browsers = [
  { value: "chrome", label: "Chrome", icon: Chrome },
  { value: "firefox", label: "Firefox", icon: Globe },
  { value: "safari", label: "Safari", icon: Compass },
  { value: "edge", label: "Edge", icon: Chromium },
];

export default function ComboboxWithIcons() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  const selected = browsers.find((browser) => browser.value === value);

  return (
    <div className="flex items-center justify-center p-8">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[200px] justify-between"
          >
            {selected ? (
              <div className="flex items-center gap-2">
                <selected.icon className="h-4 w-4" />
                {selected.label}
              </div>
            ) : (
              "Select browser..."
            )}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandInput placeholder="Search browser..." />
            <CommandList>
              <CommandEmpty>No browser found.</CommandEmpty>
              <CommandGroup>
                {browsers.map((browser) => (
                  <CommandItem
                    key={browser.value}
                    value={browser.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue);
                      setOpen(false);
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        value === browser.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                    <browser.icon className="mr-2 h-4 w-4" />
                    {browser.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
