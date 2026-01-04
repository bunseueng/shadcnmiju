"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const products = [
  { title: "Analytics", description: "Track your metrics" },
  { title: "Engagement", description: "Boost user activity" },
  { title: "Security", description: "Protect your data" },
  { title: "Integrations", description: "Connect your tools" },
  { title: "Automation", description: "Streamline workflows" },
  { title: "Reports", description: "Generate insights" },
];

const NavigationMenuGrid = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Products</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid grid-cols-2 gap-2 p-4 w-[500px]">
              {products.map((product) => (
                <li key={product.title}>
                  <NavigationMenuLink href="#" asChild>
                    <div className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      <div className="text-sm font-medium leading-none">
                        {product.title}
                      </div>
                      <p className="text-sm leading-snug text-muted-foreground">
                        {product.description}
                      </p>
                    </div>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid grid-cols-2 gap-2 p-4 w-[500px]">
              <li className="col-span-2">
                <NavigationMenuLink href="#" asChild>
                  <div className="flex flex-col justify-end w-full h-full select-none rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
                    <div className="mb-2 text-lg font-medium">Enterprise</div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Complete solution for large organizations with advanced
                      features.
                    </p>
                  </div>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavigationMenuGrid;
