"use client";

import * as React from "react";
import { Check, ChevronsUpDown, X } from "lucide-react";

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
import { Badge } from "@/components/ui/badge";

const skills = [
  { value: "react", label: "React" },
  { value: "typescript", label: "TypeScript" },
  { value: "tailwind", label: "Tailwind CSS" },
  { value: "node", label: "Node.js" },
  { value: "python", label: "Python" },
  { value: "docker", label: "Docker" },
];

export default function ComboboxMultiSelect() {
  const [open, setOpen] = React.useState(false);
  const [selectedValues, setSelectedValues] = React.useState<string[]>([]);

  const handleSelect = (value: string) => {
    setSelectedValues((prev) =>
      prev.includes(value)
        ? prev.filter((v) => v !== value)
        : [...prev, value]
    );
  };

  const handleRemove = (value: string) => {
    setSelectedValues((prev) => prev.filter((v) => v !== value));
  };

  return (
    <div className="flex items-center justify-center p-8">
      <div className="w-[300px] space-y-2">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-full justify-between"
            >
              {selectedValues.length > 0
                ? `${selectedValues.length} selected`
                : "Select skills..."}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[300px] p-0">
            <Command>
              <CommandInput placeholder="Search skills..." />
              <CommandList>
                <CommandEmpty>No skill found.</CommandEmpty>
                <CommandGroup>
                  {skills.map((skill) => (
                    <CommandItem
                      key={skill.value}
                      value={skill.value}
                      onSelect={() => handleSelect(skill.value)}
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          selectedValues.includes(skill.value)
                            ? "opacity-100"
                            : "opacity-0"
                        )}
                      />
                      {skill.label}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
        {selectedValues.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {selectedValues.map((value) => {
              const skill = skills.find((s) => s.value === value);
              return (
                <Badge key={value} variant="secondary">
                  {skill?.label}
                  <button
                    className="ml-1 rounded-full outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleRemove(value);
                      }
                    }}
                    onMouseDown={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    }}
                    onClick={() => handleRemove(value)}
                  >
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
