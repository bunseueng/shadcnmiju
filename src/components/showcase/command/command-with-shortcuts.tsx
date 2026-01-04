"use client";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandShortcut,
} from "@/components/ui/command";
import {
  FileText,
  FolderOpen,
  Save,
  Undo,
  Redo,
  Copy,
} from "lucide-react";

const CommandWithShortcuts = () => {
  return (
    <Command className="rounded-lg border shadow-md w-full max-w-sm">
      <CommandInput placeholder="Search commands..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="File">
          <CommandItem>
            <FileText className="mr-2 h-4 w-4" />
            <span>New File</span>
            <CommandShortcut>⌘N</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <FolderOpen className="mr-2 h-4 w-4" />
            <span>Open</span>
            <CommandShortcut>⌘O</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Save className="mr-2 h-4 w-4" />
            <span>Save</span>
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
        </CommandGroup>
        <CommandGroup heading="Edit">
          <CommandItem>
            <Undo className="mr-2 h-4 w-4" />
            <span>Undo</span>
            <CommandShortcut>⌘Z</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Redo className="mr-2 h-4 w-4" />
            <span>Redo</span>
            <CommandShortcut>⇧⌘Z</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Copy className="mr-2 h-4 w-4" />
            <span>Copy</span>
            <CommandShortcut>⌘C</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
};

export default CommandWithShortcuts;
