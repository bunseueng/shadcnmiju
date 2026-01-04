"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Book, Code, Lightbulb, Rocket, Settings, Users } from "lucide-react";

const items = [
  {
    icon: Book,
    title: "Documentation",
    description: "Learn how to use our products",
  },
  {
    icon: Code,
    title: "API Reference",
    description: "Complete API documentation",
  },
  {
    icon: Lightbulb,
    title: "Examples",
    description: "Code examples and demos",
  },
];

const resources = [
  {
    icon: Rocket,
    title: "Quick Start",
    description: "Get up and running in minutes",
  },
  {
    icon: Settings,
    title: "Configuration",
    description: "Customize your setup",
  },
  { icon: Users, title: "Community", description: "Join our community" },
];

const NavigationMenuWithIcons = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Learn</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 p-4 w-[400px]">
              {items.map((item) => (
                <li key={item.title}>
                  <NavigationMenuLink href="#" asChild>
                    <div className="flex items-start gap-3 select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      <item.icon className="h-5 w-5 mt-0.5 text-muted-foreground" />
                      <div>
                        <div className="text-sm font-medium leading-none">
                          {item.title}
                        </div>
                        <p className="text-sm leading-snug text-muted-foreground mt-1">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 p-4 w-[400px]">
              {resources.map((item) => (
                <li key={item.title}>
                  <NavigationMenuLink href="#" asChild>
                    <div className="flex items-start gap-3 select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      <item.icon className="h-5 w-5 mt-0.5 text-muted-foreground" />
                      <div>
                        <div className="text-sm font-medium leading-none">
                          {item.title}
                        </div>
                        <p className="text-sm leading-snug text-muted-foreground mt-1">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavigationMenuWithIcons;
