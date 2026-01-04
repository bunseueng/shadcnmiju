"use client";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import {
  Home,
  Search,
  Bell,
  Mail,
  LogOut,
  Settings,
  User,
  HelpCircle,
} from "lucide-react";

const CommandSeparatorDemo = () => {
  return (
    <Command className="rounded-lg border shadow-md w-full max-w-sm">
      <CommandInput placeholder="Search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Navigation">
          <CommandItem>
            <Home className="mr-2 h-4 w-4" />
            <span>Home</span>
          </CommandItem>
          <CommandItem>
            <Search className="mr-2 h-4 w-4" />
            <span>Search</span>
          </CommandItem>
          <CommandItem>
            <Bell className="mr-2 h-4 w-4" />
            <span>Notifications</span>
          </CommandItem>
          <CommandItem>
            <Mail className="mr-2 h-4 w-4" />
            <span>Messages</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Account">
          <CommandItem>
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
          </CommandItem>
          <CommandItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
          </CommandItem>
          <CommandItem>
            <HelpCircle className="mr-2 h-4 w-4" />
            <span>Help</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup>
          <CommandItem className="text-red-500">
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
};

export default CommandSeparatorDemo;
